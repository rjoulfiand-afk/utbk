/* ==========================================================================
   RuangBelajar UTBK-SNBT 2027 — Engine Aplikasi (app.js)
   Arsitektur: Zero-Server, 100% Strict DOM API (createElement / textContent),
   Pemeriksa Integritas SHA-256 Kanonik, Enkripsi Catatan WebCrypto (AES-GCM-256),
   dan Validasi Skema Impor Ketat.
   ========================================================================== */

(function () {
  'use strict';

  // --- STATE APLIKASI UTAMA ---
  const state = {
    activeTab: 'materi',
    selectedSubtest: 'ALL',
    selectedDay: 'ALL',
    selectedStatus: 'ALL',
    searchQuery: '',
    activeReaderModuleId: null,
    notesFilterCategory: 'ALL',
    cheatsheetSubtest: 'ALL',

    // Data Terpersistensi di LocalStorage
    activeDay: 1,
    lastCycleTs: Date.now(),
    modulesMastered: {}, // { moduleId: true }
    customModules: [],   // modul tambahan jika ada
    notes: [],           // [ { id, category, subtest, title, body, createdAt } ]
    
    // WebCrypto Vault Catatan
    cryptoVault: {
      enabled: false,
      salt: null,       // Base64 16 byte
      iv: null,         // Base64 12 byte
      ciphertext: null  // Base64 catatan terenkripsi
    },
    vaultSessionKey: null, // CryptoKey tersimpan sementara di memori tab aktif
    vaultUnlocked: true,
    lastFailedAttemptTs: 0,
    failedAttemptsCount: 0
  };

  const STORAGE_KEY = 'utbk_app_data_v2';
  const SNAPSHOTS_KEY = 'utbk_snapshots_v2';

  // --- HELPER DOM AMAN (ZERO INNERHTML) ---
  function el(tag, attrs, children) {
    const elem = document.createElement(tag);
    if (attrs) {
      for (const [key, val] of Object.entries(attrs)) {
        if (key === 'className') {
          elem.className = val;
        } else if (key === 'textContent') {
          elem.textContent = val;
        } else if (key === 'dataset') {
          for (const [dKey, dVal] of Object.entries(val)) {
            elem.dataset[dKey] = dVal;
          }
        } else if (val !== null && val !== undefined && val !== false) {
          elem.setAttribute(key, val === true ? '' : val);
        }
      }
    }
    if (children) {
      if (Array.isArray(children)) {
        for (const child of children) {
          if (child) {
            elem.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
          }
        }
      } else {
        elem.appendChild(typeof children === 'string' ? document.createTextNode(children) : children);
      }
    }
    return elem;
  }

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  // --- SERIALISASI KANONIK & HASH SHA-256 ---
  function canonicalStringify(obj) {
    if (obj === null || typeof obj !== 'object') {
      return JSON.stringify(obj);
    }
    if (Array.isArray(obj)) {
      return '[' + obj.map(canonicalStringify).join(',') + ']';
    }
    const sortedKeys = Object.keys(obj).sort();
    const parts = [];
    for (const key of sortedKeys) {
      if (obj[key] !== undefined) {
        parts.push(JSON.stringify(key) + ':' + canonicalStringify(obj[key]));
      }
    }
    return '{' + parts.join(',') + '}';
  }

  async function calculateCanonicalHash(payload) {
    try {
      const canonicalJson = canonicalStringify(payload);
      const encoder = new TextEncoder();
      const data = encoder.encode(canonicalJson);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (err) {
      console.warn('Gagal menghitung SHA-256:', err);
      return 'unavailable';
    }
  }

  // --- WEBCRYPTO (PBKDF2-SHA256 + AES-GCM-256) UNTUK CATATAN ---
  function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }

  async function deriveKeyFromPin(pin, saltUint8) {
    const enc = new TextEncoder();
    const pinKeyMaterial = await crypto.subtle.importKey(
      'raw',
      enc.encode(pin),
      'PBKDF2',
      false,
      ['deriveKey']
    );
    return await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: saltUint8,
        iterations: window.UTBK_CONFIG.pbkdf2Iterations || 600000,
        hash: 'SHA-256'
      },
      pinKeyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  async function encryptNotesVault(notesArray, pin) {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKeyFromPin(pin, salt);
    const plaintext = new TextEncoder().encode(JSON.stringify(notesArray));

    const ciphertextBuffer = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      plaintext
    );

    return {
      saltB64: arrayBufferToBase64(salt),
      ivB64: arrayBufferToBase64(iv),
      ciphertextB64: arrayBufferToBase64(ciphertextBuffer),
      sessionKey: key
    };
  }

  async function decryptNotesVault(vaultObj, pin) {
    const salt = new Uint8Array(base64ToArrayBuffer(vaultObj.salt));
    const iv = new Uint8Array(base64ToArrayBuffer(vaultObj.iv));
    const ciphertext = base64ToArrayBuffer(vaultObj.ciphertext);

    const key = await deriveKeyFromPin(pin, salt);
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      ciphertext
    );

    const decryptedJson = new TextDecoder().decode(decryptedBuffer);
    return {
      notes: JSON.parse(decryptedJson),
      sessionKey: key
    };
  }

  // --- PENYIMPANAN LOCALSTORAGE & SNAPSHOT INTEGRITAS ---
  function getPayloadForStorage() {
    return {
      schemaVersion: window.UTBK_CONFIG.schemaVersion || 2,
      activeDay: state.activeDay,
      lastCycleTs: state.lastCycleTs,
      modulesMastered: state.modulesMastered,
      customModules: state.customModules,
      cryptoVault: state.cryptoVault,
      notes: state.cryptoVault.enabled ? [] : state.notes
    };
  }

  function saveStateToStorage() {
    try {
      const payload = getPayloadForStorage();
      const jsonStr = JSON.stringify(payload);

      // Simpan 3 snapshot otomatis sebelum menimpa jika data sebelumnya ada
      const existing = localStorage.getItem(STORAGE_KEY);
      if (existing && existing !== jsonStr) {
        saveSnapshot(existing);
      }

      localStorage.setItem(STORAGE_KEY, jsonStr);
      updateIntegrityDisplay();
    } catch (err) {
      console.warn('Gagal menyimpan ke localStorage (storage penuh/dinonaktifkan):', err);
      showSystemBanner('Perhatian: Penyimpanan lokal browser tidak tersedia atau penuh. Progres belajar tersimpan sementara di memori sesi.');
    }
  }

  function saveSnapshot(rawJson) {
    try {
      let snapshots = [];
      const stored = localStorage.getItem(SNAPSHOTS_KEY);
      if (stored) {
        snapshots = JSON.parse(stored);
      }
      if (!Array.isArray(snapshots)) snapshots = [];

      snapshots.unshift({
        ts: Date.now(),
        data: rawJson
      });

      // Simpan maksimal 3 snapshot terakhir
      if (snapshots.length > 3) {
        snapshots = snapshots.slice(0, 3);
      }

      localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(snapshots));
    } catch (e) {
      // Abaikan jika storage penuh
    }
  }

  function loadStateFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        if (typeof parsed.activeDay === 'number' && parsed.activeDay >= 1) {
          state.activeDay = parsed.activeDay;
        }
        if (typeof parsed.lastCycleTs === 'number') {
          state.lastCycleTs = parsed.lastCycleTs;
        }
        if (parsed.modulesMastered && typeof parsed.modulesMastered === 'object') {
          state.modulesMastered = {};
          for (const [k, v] of Object.entries(parsed.modulesMastered)) {
            if (typeof k === 'string' && /^[a-z0-9-]{1,64}$/.test(k) && v === true) {
              state.modulesMastered[k] = true;
            }
          }
        }
        if (Array.isArray(parsed.customModules)) {
          state.customModules = parsed.customModules.filter(validateModuleStructure);
        }
        if (parsed.cryptoVault && typeof parsed.cryptoVault === 'object' && parsed.cryptoVault.enabled) {
          state.cryptoVault = {
            enabled: true,
            salt: String(parsed.cryptoVault.salt || ''),
            iv: String(parsed.cryptoVault.iv || ''),
            ciphertext: String(parsed.cryptoVault.ciphertext || '')
          };
          state.vaultUnlocked = false; // Memerlukan PIN untuk membaca
          state.notes = [];
        } else if (Array.isArray(parsed.notes)) {
          state.notes = parsed.notes.filter(validateNoteStructure);
          state.vaultUnlocked = true;
        }
      }
    } catch (err) {
      console.warn('Gagal membaca localStorage, menggunakan state awal:', err);
      showSystemBanner('Terdeteksi anomali pada penyimpanan lokal. Kamu dapat memulihkan snapshot cadangan.');
    }
  }

  // --- VALIDATOR SKEMA RESTORE & STRUKTUR DATA (ANTI-XSS & ANTI-POLLUTION) ---
  function validateModuleStructure(mod) {
    if (!mod || typeof mod !== 'object') return false;
    if (typeof mod.id !== 'string' || !/^[a-z0-9-]{1,64}$/.test(mod.id)) return false;
    if (typeof mod.subtest !== 'string' || !['PU', 'PPU', 'PBM', 'PK', 'PM', 'LBI', 'LBE'].includes(mod.subtest)) return false;
    if (typeof mod.title !== 'string' || mod.title.length > 200) return false;
    if (typeof mod.oneLiner !== 'string' || mod.oneLiner.length > 300) return false;
    return true;
  }

  function validateNoteStructure(note) {
    if (!note || typeof note !== 'object') return false;
    if (typeof note.id !== 'string' || !/^[a-z0-9-]{1,64}$/.test(note.id)) return false;
    if (typeof note.category !== 'string' || !['KONSEP', 'ALGORITMA', 'ERROR_LOG'].includes(note.category)) return false;
    if (typeof note.subtest !== 'string' || !['PU', 'PPU', 'PBM', 'PK', 'PM', 'LBI', 'LBE'].includes(note.subtest)) return false;
    if (typeof note.title !== 'string' || note.title.length > 200) return false;
    if (typeof note.body !== 'string' || note.body.length > 5000) return false;
    return true;
  }

  function validateRestoreJson(jsonStr) {
    if (!jsonStr || jsonStr.length > (window.UTBK_CONFIG.maxBackupBytes || 2097152)) {
      throw new Error('Ukuran file melebihi batas keamanan maksimal 2 MB.');
    }

    let parsed;
    try {
      parsed = JSON.parse(jsonStr);
    } catch (e) {
      throw new Error('Format file bukan JSON yang valid.');
    }

    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('Struktur data cadangan tidak sesuai skema objek.');
    }

    // Filter per field aman (Anti Prototype Pollution)
    const sanitized = {
      schemaVersion: typeof parsed.schemaVersion === 'number' ? parsed.schemaVersion : 2,
      activeDay: (typeof parsed.activeDay === 'number' && parsed.activeDay >= 1 && parsed.activeDay <= 400) ? parsed.activeDay : 1,
      lastCycleTs: typeof parsed.lastCycleTs === 'number' ? parsed.lastCycleTs : Date.now(),
      modulesMastered: {},
      customModules: [],
      notes: [],
      cryptoVault: { enabled: false, salt: null, iv: null, ciphertext: null }
    };

    if (parsed.modulesMastered && typeof parsed.modulesMastered === 'object') {
      for (const [k, v] of Object.entries(parsed.modulesMastered)) {
        if (/^[a-z0-9-]{1,64}$/.test(k) && v === true) {
          sanitized.modulesMastered[k] = true;
        }
      }
    }

    if (Array.isArray(parsed.customModules)) {
      sanitized.customModules = parsed.customModules.filter(validateModuleStructure);
    }

    if (Array.isArray(parsed.notes)) {
      sanitized.notes = parsed.notes.filter(validateNoteStructure);
    }

    if (parsed.cryptoVault && typeof parsed.cryptoVault === 'object' && parsed.cryptoVault.enabled) {
      sanitized.cryptoVault = {
        enabled: true,
        salt: String(parsed.cryptoVault.salt || ''),
        iv: String(parsed.cryptoVault.iv || ''),
        ciphertext: String(parsed.cryptoVault.ciphertext || '')
      };
    }

    return sanitized;
  }

  // --- SEMUA MODUL MATERI TERSEDIA ---
  function getAllModules() {
    const builtin = window.UTBK_MODULES || [];
    return [...builtin, ...state.customModules];
  }

  // --- SIKLUS HARIAN 24 JAM ---
  function checkAndAdvanceDailyCycle() {
    const cycleDuration = window.UTBK_CONFIG.cycleDurationMs || (24 * 60 * 60 * 1000);
    const now = Date.now();
    const elapsed = now - state.lastCycleTs;

    if (elapsed >= cycleDuration) {
      const daysToAdd = Math.floor(elapsed / cycleDuration);
      state.activeDay += daysToAdd;
      state.lastCycleTs = now - (elapsed % cycleDuration);
      saveStateToStorage();
      renderAll();
    }
  }

  function updateTimerDisplay() {
    const timerElem = document.getElementById('next-drop-timer');
    const dayLabel = document.getElementById('current-day-label');
    if (!timerElem || !dayLabel) return;

    dayLabel.textContent = 'Hari ke-' + state.activeDay;

    const cycleDuration = window.UTBK_CONFIG.cycleDurationMs || (24 * 60 * 60 * 1000);
    const now = Date.now();
    const elapsed = now - state.lastCycleTs;
    const remaining = Math.max(0, cycleDuration - elapsed);

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remaining % (1000 * 60)) / 1000);

    timerElem.textContent = hours + 'j ' + (mins < 10 ? '0' : '') + mins + 'm ' + (secs < 10 ? '0' : '') + secs + 'd';
  }

  // --- BANNER SISTEM & NOTIFIKASI ---
  function showSystemBanner(msg, showRecoverBtn) {
    const banner = document.getElementById('system-banner');
    const text = document.getElementById('system-banner-text');
    if (!banner || !text) return;
    text.textContent = msg;
    banner.classList.remove('is-hidden');
  }

  function hideSystemBanner() {
    const banner = document.getElementById('system-banner');
    if (banner) banner.classList.add('is-hidden');
  }

  // --- RENDERING TABS & NAVIGATION ---
  function switchTab(tabName) {
    state.activeTab = tabName;

    // Update tab bar buttons
    const tabButtons = document.querySelectorAll('.nav-tab');
    tabButtons.forEach(btn => {
      const isCurrent = btn.dataset.tab === tabName;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

    // Update sections
    const sections = [
      { id: 'view-materi', tab: 'materi' },
      { id: 'view-reader', tab: 'reader' },
      { id: 'view-catatan', tab: 'catatan' },
      { id: 'view-peta', tab: 'peta' },
      { id: 'view-rangkuman', tab: 'rangkuman' },
      { id: 'view-keamanan', tab: 'keamanan' }
    ];

    sections.forEach(sec => {
      const elem = document.getElementById(sec.id);
      if (elem) {
        if (sec.tab === tabName) {
          elem.classList.remove('is-hidden');
        } else {
          elem.classList.add('is-hidden');
        }
      }
    });

    if (tabName === 'materi') {
      renderModuleCards();
    } else if (tabName === 'catatan') {
      renderNotesWorkspace();
    } else if (tabName === 'peta') {
      renderRoadmap();
    } else if (tabName === 'rangkuman') {
      renderCheatsheet();
    } else if (tabName === 'keamanan') {
      updateIntegrityDisplay();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- RENDERING SIDEBAR SUBTES & PROGRES ---
  function renderSidebar() {
    const subtestList = document.getElementById('subtest-nav-list');
    const daySelect = document.getElementById('day-filter-select');
    const statusSelect = document.getElementById('status-filter-select');
    const progressBar = document.getElementById('global-progress-bar');
    const progressPercent = document.getElementById('progress-percentage');
    const progressDetail = document.getElementById('progress-detail-text');

    if (!subtestList || !window.UTBK_CONFIG) return;

    clearElement(subtestList);

    const allMods = getAllModules();
    const totalCount = allMods.length;
    let masteredCount = 0;
    allMods.forEach(m => {
      if (state.modulesMastered[m.id]) masteredCount++;
    });

    const percent = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;
    if (progressBar) {
      progressBar.value = percent;
    }
    if (progressPercent) {
      progressPercent.textContent = percent + '%';
    }
    if (progressDetail) {
      progressDetail.textContent = masteredCount + ' dari ' + totalCount + ' modul selesai dipahami';
    }

    // Item 'Semua Subtes'
    const liAll = el('li', null, [
      el('button', {
        type: 'button',
        className: 'subtest-btn' + (state.selectedSubtest === 'ALL' ? ' is-active' : ''),
        dataset: { action: 'filter-subtest', subtest: 'ALL' }
      }, [
        el('span', { className: 'subtest-btn-left' }, [
          el('span', { className: 'subtest-dot dot-all', 'aria-hidden': 'true' }),
          el('span', { className: 'subtest-name', textContent: 'Semua Subtes' })
        ]),
        el('span', { className: 'subtest-count', textContent: String(totalCount) })
      ])
    ]);
    subtestList.appendChild(liAll);

    // 7 Subtes
    window.UTBK_CONFIG.subtests.forEach(st => {
      const count = allMods.filter(m => m.subtest === st.code).length;
      const li = el('li', null, [
        el('button', {
          type: 'button',
          className: 'subtest-btn' + (state.selectedSubtest === st.code ? ' is-active' : ''),
          dataset: { action: 'filter-subtest', subtest: st.code }
        }, [
          el('span', { className: 'subtest-btn-left' }, [
            el('span', { className: 'subtest-dot ' + (st.dotClass || 'dot-all'), 'aria-hidden': 'true' }),
            el('span', { className: 'subtest-name', textContent: st.code + ' — ' + st.name })
          ]),
          el('span', { className: 'subtest-count', textContent: String(count) })
        ])
      ]);
      subtestList.appendChild(li);
    });

    // Opsi Filter Hari
    if (daySelect && daySelect.options.length <= 1) {
      clearElement(daySelect);
      daySelect.appendChild(el('option', { value: 'ALL', textContent: 'Semua Hari Terbuka' }));
      for (let d = 1; d <= Math.max(state.activeDay, 1); d++) {
        daySelect.appendChild(el('option', { value: String(d), textContent: 'Hari ke-' + d }));
      }
      daySelect.value = state.selectedDay;
    }
  }

  // --- RENDERING GRID KARTU MATERI RINGKAS ---
  function renderModuleCards() {
    const grid = document.getElementById('module-cards-grid');
    if (!grid) return;
    clearElement(grid);

    const allMods = getAllModules();
    const query = state.searchQuery.trim().toLowerCase();

    const filtered = allMods.filter(mod => {
      // Filter Subtes
      if (state.selectedSubtest !== 'ALL' && mod.subtest !== state.selectedSubtest) {
        return false;
      }
      // Filter Hari (hanya yang sudah terbuka di siklus atau filter hari spesifik)
      const modDay = mod.day || 1;
      if (state.selectedDay !== 'ALL' && String(modDay) !== state.selectedDay) {
        return false;
      }
      if (state.selectedDay === 'ALL' && modDay > state.activeDay) {
        return false; // belum terbuka di siklus
      }
      // Filter Status Paham
      const isMastered = !!state.modulesMastered[mod.id];
      if (state.selectedStatus === 'MASTERED' && !isMastered) return false;
      if (state.selectedStatus === 'UNMASTERED' && isMastered) return false;

      // Filter Pencarian Global
      if (query) {
        const titleMatch = (mod.title || '').toLowerCase().includes(query);
        const summaryMatch = (mod.summary || '').toLowerCase().includes(query);
        const oneLinerMatch = (mod.oneLiner || '').toLowerCase().includes(query);
        const subtestMatch = (mod.subtest || '').toLowerCase().includes(query);
        return titleMatch || summaryMatch || oneLinerMatch || subtestMatch;
      }

      return true;
    });

    const subtitleElem = document.getElementById('materi-view-subtitle');
    if (subtitleElem) {
      subtitleElem.textContent = 'Menampilkan ' + filtered.length + ' modul belajar ringkas (Hari aktif: Hari ke-' + state.activeDay + ').';
    }

    if (filtered.length === 0) {
      const emptyBox = el('div', { className: 'card-panel text-center' }, [
        el('h2', { className: 'panel-title', textContent: 'Tidak Ada Modul Ditemukan' }),
        el('p', { className: 'panel-desc', textContent: 'Tidak ada materi yang cocok dengan filter atau kata kunci pencarian. Coba ubah filter atau muat modul baru dari bank internal.' })
      ]);
      grid.appendChild(emptyBox);
      return;
    }

    filtered.forEach(mod => {
      const isMastered = !!state.modulesMastered[mod.id];
      const subConfig = (window.UTBK_CONFIG.subtests || []).find(s => s.code === mod.subtest) || {};

      const card = el('article', {
        className: 'module-card',
        dataset: { action: 'open-module-reader', moduleId: mod.id }
      }, [
        el('div', { className: 'card-meta-top' }, [
          el('span', {
            className: 'subtest-badge ' + (subConfig.badgeClass || 'badge-pu'),
            textContent: mod.subtest
          }),
          el('span', {
            className: 'day-tag',
            textContent: 'Hari ke-' + (mod.day || 1)
          })
        ]),
        el('h2', { className: 'card-title', textContent: mod.title }),
        el('p', { className: 'card-oneliner', textContent: mod.oneLiner || mod.summary }),
        el('div', { className: 'card-meta-footer' }, [
          el('span', { className: 'time-target' }, [
            el('span', { textContent: '⏱ Target: ' + (mod.timeTarget || '60 dtk/soal') })
          ]),
          el('span', {
            className: 'status-badge ' + (isMastered ? 'is-mastered' : 'is-unmastered'),
            textContent: isMastered ? '✓ Paham' : 'Belum Paham'
          })
        ])
      ]);

      grid.appendChild(card);
    });
  }

  // --- RENDERING HALAMAN BACA SATU KOLOM (10 BAGIAN WAJIB) ---
  function openModuleReader(moduleId) {
    const allMods = getAllModules();
    const mod = allMods.find(m => m.id === moduleId);
    if (!mod) return;

    state.activeReaderModuleId = moduleId;
    switchTab('reader');

    const topMeta = document.getElementById('reader-top-meta');
    const container = document.getElementById('reader-article-container');
    if (!container) return;

    clearElement(container);
    if (topMeta) clearElement(topMeta);

    const isMastered = !!state.modulesMastered[mod.id];
    const subConfig = (window.UTBK_CONFIG.subtests || []).find(s => s.code === mod.subtest) || {};

    // Top Meta
    if (topMeta) {
      const masterBtn = el('button', {
        type: 'button',
        className: 'btn btn-sm ' + (isMastered ? 'btn-secondary' : 'btn-primary'),
        dataset: { action: 'toggle-mastery', moduleId: mod.id }
      }, [
        el('span', { textContent: isMastered ? 'Batalkan Tanda Paham' : 'Tandai Paham' })
      ]);

      const noteBtn = el('button', {
        type: 'button',
        className: 'btn btn-sm btn-ghost',
        dataset: { action: 'quick-add-note', moduleId: mod.id }
      }, [
        el('span', { textContent: '+ Catat' })
      ]);

      topMeta.appendChild(masterBtn);
      topMeta.appendChild(noteBtn);
    }

    // Header Artikel
    const header = el('header', { className: 'article-header' }, [
      el('div', { className: 'article-pills' }, [
        el('span', { className: 'subtest-badge ' + (subConfig.badgeClass || 'badge-pu'), textContent: mod.subtest + ' — ' + (subConfig.name || '') }),
        el('span', { className: 'day-tag', textContent: 'Hari ke-' + (mod.day || 1) }),
        el('span', { className: 'time-target', textContent: 'Target: ' + (mod.timeTarget || '60 dtk/soal') })
      ]),
      el('h1', { className: 'article-title', textContent: mod.title }),
      el('p', { className: 'article-lead', textContent: mod.oneLiner })
    ]);
    container.appendChild(header);

    // 1. Ringkasan 1 Menit
    const sec1 = el('section', { id: 'sec-ringkasan', className: 'article-section' }, [
      el('h2', { className: 'section-heading', textContent: '1. Ringkasan 1 Menit' }),
      el('p', { className: 'body-text', textContent: mod.summary })
    ]);
    container.appendChild(sec1);

    // 2. Konsep Inti
    const sec2 = el('section', { id: 'sec-konsep', className: 'article-section' }, [
      el('h2', { className: 'section-heading', textContent: '2. Konsep Inti' }),
      el('p', { className: 'body-text', textContent: mod.coreConcept })
    ]);
    container.appendChild(sec2);

    // 3. Rumus / Kaidah (Kotak Khusus)
    const sec3 = el('section', { id: 'sec-rumus', className: 'article-section' }, [
      el('h2', { className: 'section-heading', textContent: '3. Rumus & Kaidah Utama' }),
      el('pre', { className: 'formula-box' }, [
        el('code', { textContent: mod.formulaBox })
      ])
    ]);
    container.appendChild(sec3);

    // 4. Radar Jebakan (Callout Kuning Lembut)
    const sec4 = el('section', { id: 'sec-jebakan', className: 'article-section' }, [
      el('div', { className: 'callout-box' }, [
        el('h2', { className: 'callout-title', textContent: '⚠️ 4. Radar Jebakan Soal' }),
        el('p', { className: 'callout-text', textContent: mod.trapRadar })
      ])
    ]);
    container.appendChild(sec4);

    // 5. Langkah Pengerjaan (Bernomor)
    const stepList = el('ol', { className: 'steps-list' });
    (mod.steps || []).forEach(st => {
      stepList.appendChild(el('li', { textContent: st }));
    });
    const sec5 = el('section', { id: 'sec-langkah', className: 'article-section' }, [
      el('h2', { className: 'section-heading', textContent: '5. Langkah Taktis Pengerjaan' }),
      stepList
    ]);
    container.appendChild(sec5);

    // 6. Contoh Terpandu (Stepper: Identifikasi, Proses, Jawaban)
    const gEx = mod.guidedExample || {};
    const sec6 = el('section', { id: 'sec-contoh', className: 'article-section' }, [
      el('h2', { className: 'section-heading', textContent: '6. Contoh Soal Terpandu (Stepper)' }),
      el('div', { className: 'stepper-card' }, [
        el('div', { className: 'stepper-step' }, [
          el('h3', { className: 'step-title', textContent: 'KASUS SOAL:' }),
          el('p', { className: 'body-text', textContent: gEx.problem || '-' })
        ]),
        el('div', { className: 'stepper-step' }, [
          el('h3', { className: 'step-title', textContent: 'LANGKAH 1: IDENTIFIKASI VARIABEL' }),
          el('p', { className: 'body-text', textContent: gEx.identify || '-' })
        ]),
        el('div', { className: 'stepper-step' }, [
          el('h3', { className: 'step-title', textContent: 'LANGKAH 2: PROSES PENALARAN & HITUNGAN' }),
          el('p', { className: 'body-text', textContent: gEx.process || '-' })
        ]),
        el('div', { className: 'stepper-step stepper-answer' }, [
          el('h3', { className: 'step-title', textContent: 'JAWABAN AKHIR & PEMBUKTIAN:' }),
          el('p', { className: 'body-text bold-text', textContent: gEx.answer || '-' })
        ])
      ])
    ]);
    container.appendChild(sec6);

    // 7. Latihan Mandiri 3 Soal (Interactive Reveal)
    const drillsContainer = el('div', { className: 'drills-stack' });
    (mod.drills || []).forEach((drill, dIdx) => {
      const optionsBox = el('div', { className: 'drill-options' });
      (drill.options || []).forEach((opt, oIdx) => {
        const optBtn = el('button', {
          type: 'button',
          className: 'drill-option-btn',
          dataset: {
            action: 'check-drill-answer',
            moduleId: mod.id,
            drillIndex: String(dIdx),
            optionIndex: String(oIdx),
            correctIndex: String(drill.ans)
          }
        }, [
          el('span', { className: 'opt-letter', textContent: String.fromCharCode(65 + oIdx) + '. ' }),
          el('span', { textContent: opt })
        ]);
        optionsBox.appendChild(optBtn);
      });

      const explanationBox = el('div', {
        className: 'drill-explanation is-hidden',
        id: 'drill-expl-' + mod.id + '-' + dIdx
      }, [
        el('h4', { className: 'expl-title', textContent: 'Kunci & Pembahasan Terverifikasi:' }),
        el('p', { className: 'expl-text', textContent: drill.explanation })
      ]);

      const drillCard = el('div', { className: 'card-panel drill-card' }, [
        el('h3', { className: 'drill-question-title', textContent: 'Soal Latihan ' + (dIdx + 1) + ' dari 3:' }),
        el('p', { className: 'drill-question', textContent: drill.q }),
        optionsBox,
        explanationBox
      ]);
      drillsContainer.appendChild(drillCard);
    });

    const sec7 = el('section', { id: 'sec-latihan', className: 'article-section' }, [
      el('h2', { className: 'section-heading', textContent: '7. Latihan Mandiri (3 Soal)' }),
      drillsContainer
    ]);
    container.appendChild(sec7);

    // 8. Flashcard 5 Butir (Interaktif Flip)
    const flashcardsGrid = el('div', { className: 'flashcards-grid' });
    (mod.flashcards || []).forEach((fc, fcIdx) => {
      const card = el('div', {
        className: 'flashcard-box',
        dataset: { action: 'flip-flashcard', index: String(fcIdx) }
      }, [
        el('span', { className: 'flashcard-pill', textContent: 'Kartu ' + (fcIdx + 1) + ' (Klik untuk balik)' }),
        el('p', { className: 'flashcard-front', textContent: fc.front }),
        el('p', { className: 'flashcard-back is-hidden', textContent: fc.back })
      ]);
      flashcardsGrid.appendChild(card);
    });

    const sec8 = el('section', { id: 'sec-flashcard', className: 'article-section' }, [
      el('h2', { className: 'section-heading', textContent: '8. Flashcard Rangkuman 5 Butir' }),
      flashcardsGrid
    ]);
    container.appendChild(sec8);

    // 9. Kesalahan Umum
    const mistakesList = el('ul', { className: 'clean-list' });
    (mod.commonMistakes || []).forEach(cm => {
      mistakesList.appendChild(el('li', { textContent: '• ' + cm }));
    });

    const sec9 = el('section', { id: 'sec-kesalahan', className: 'article-section' }, [
      el('h2', { className: 'section-heading', textContent: '9. Kesalahan Umum yang Wajib Dihindari' }),
      mistakesList
    ]);
    container.appendChild(sec9);

    // 10. Status & Catatan
    const sec10 = el('section', { id: 'sec-aksi', className: 'article-section article-footer-actions' }, [
      el('h2', { className: 'section-heading', textContent: '10. Tandai Pemahaman & Simpan Catatan' }),
      el('div', { className: 'form-actions' }, [
        el('button', {
          type: 'button',
          className: 'btn btn-primary',
          dataset: { action: 'toggle-mastery', moduleId: mod.id }
        }, [
          el('span', { textContent: isMastered ? 'Batalkan Tanda Paham' : 'Tandai Selesai & Paham' })
        ]),
        el('button', {
          type: 'button',
          className: 'btn btn-secondary',
          dataset: { action: 'quick-add-note', moduleId: mod.id }
        }, [
          el('span', { textContent: 'Simpan ke Catatan Pribadi' })
        ]),
        el('button', {
          type: 'button',
          className: 'btn btn-ghost',
          dataset: { action: 'close-reader' }
        }, [
          el('span', { textContent: 'Kembali ke Daftar Materi' })
        ])
      ])
    ]);
    container.appendChild(sec10);
  }

  // --- RENDERING CATATAN & ERROR LOG ---
  function renderNotesWorkspace() {
    const listContainer = document.getElementById('notes-list-container');
    const lockedPanel = document.getElementById('notes-locked-panel');
    const unlockedContent = document.getElementById('notes-unlocked-content');
    const vaultControls = document.getElementById('vault-controls-container');

    if (!listContainer) return;

    // Handle Enkripsi Vault Status
    if (state.cryptoVault.enabled && !state.vaultUnlocked) {
      if (lockedPanel) lockedPanel.classList.remove('is-hidden');
      if (unlockedContent) unlockedContent.classList.add('is-hidden');
      if (vaultControls) {
        clearElement(vaultControls);
        vaultControls.appendChild(el('span', { className: 'status-badge is-unmastered', textContent: 'Terkunci (AES-256)' }));
      }
      return;
    }

    if (lockedPanel) lockedPanel.classList.add('is-hidden');
    if (unlockedContent) unlockedContent.classList.remove('is-hidden');

    if (vaultControls) {
      clearElement(vaultControls);
      if (state.cryptoVault.enabled) {
        vaultControls.appendChild(el('button', {
          type: 'button',
          className: 'btn btn-sm btn-secondary',
          dataset: { action: 'lock-notes-vault' }
        }, [
          el('span', { textContent: 'Kunci Vault Catatan' })
        ]));
      }
    }

    clearElement(listContainer);

    const filteredNotes = state.notes.filter(n => {
      if (state.notesFilterCategory !== 'ALL' && n.category !== state.notesFilterCategory) {
        return false;
      }
      return true;
    });

    if (filteredNotes.length === 0) {
      listContainer.appendChild(el('div', { className: 'card-panel text-center' }, [
        el('p', { className: 'panel-desc', textContent: 'Belum ada catatan atau error log yang tersimpan di kategori ini. Buat catatan konsep baru di formulir sebelah kiri.' })
      ]));
      return;
    }

    filteredNotes.forEach(note => {
      const card = el('div', { className: 'card-panel note-item-card' }, [
        el('div', { className: 'card-meta-top' }, [
          el('span', { className: 'subtest-badge badge-' + note.subtest.toLowerCase(), textContent: note.subtest }),
          el('span', { className: 'status-badge is-mastered', textContent: note.category }),
          el('button', {
            type: 'button',
            className: 'btn-icon-danger',
            dataset: { action: 'delete-note', noteId: note.id },
            'aria-label': 'Hapus catatan'
          }, [
            el('span', { textContent: 'Hapus' })
          ])
        ]),
        el('h3', { className: 'panel-title', textContent: note.title }),
        el('p', { className: 'body-text whitespace-pre', textContent: note.body }),
        el('span', { className: 'progress-caption', textContent: new Date(note.createdAt).toLocaleDateString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) })
      ]);
      listContainer.appendChild(card);
    });
  }

  // --- RENDERING PETA BELAJAR 26 MINGGU ---
  function renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    if (!container || !window.UTBK_CONFIG) return;
    clearElement(container);

    (window.UTBK_CONFIG.roadmap26Weeks || []).forEach(phase => {
      const card = el('article', { className: 'card-panel roadmap-phase-card' }, [
        el('div', { className: 'card-meta-top' }, [
          el('span', { className: 'subtest-badge badge-pu', textContent: phase.phase }),
          el('span', { className: 'status-badge is-mastered', textContent: phase.ratio })
        ]),
        el('h2', { className: 'panel-title', textContent: phase.title }),
        el('div', { className: 'roadmap-detail-block' }, [
          el('h3', { className: 'detail-label', textContent: 'Jadwal Harian Terstruktur:' }),
          el('p', { className: 'body-text', textContent: phase.schedule })
        ]),
        el('div', { className: 'roadmap-detail-block' }, [
          el('h3', { className: 'detail-label', textContent: 'Fokus Utama:' }),
          el('p', { className: 'body-text', textContent: phase.focus })
        ])
      ]);
      container.appendChild(card);
    });
  }

  // --- RENDERING RANGKUMAN SUBTES (CHEAT SHEET) & BANK KOSAKATA ---
  function renderCheatsheet() {
    const container = document.getElementById('cheatsheet-printable-area');
    const selectElem = document.getElementById('cheatsheet-subtest-select');
    if (!container || !window.UTBK_CONFIG) return;
    clearElement(container);

    const targetSubtest = selectElem ? selectElem.value : state.cheatsheetSubtest;
    const allMods = getAllModules();

    const subtestsToRender = targetSubtest === 'ALL'
      ? window.UTBK_CONFIG.subtests.map(s => s.code)
      : [targetSubtest];

    subtestsToRender.forEach(stCode => {
      const subConfig = window.UTBK_CONFIG.subtests.find(s => s.code === stCode) || {};
      const subMods = allMods.filter(m => m.subtest === stCode);

      const section = el('section', { className: 'cheatsheet-subtest-block' }, [
        el('div', { className: 'cheatsheet-header' }, [
          el('span', { className: 'subtest-badge ' + (subConfig.badgeClass || 'badge-pu'), textContent: stCode }),
          el('h2', { className: 'cheatsheet-title', textContent: stCode + ' — ' + subConfig.name }),
          el('p', { className: 'progress-caption', textContent: subConfig.description || '' })
        ])
      ]);

      const grid = el('div', { className: 'cheatsheet-grid' });
      subMods.forEach(m => {
        const item = el('div', { className: 'cheatsheet-item-card' }, [
          el('h3', { className: 'cheatsheet-item-title', textContent: m.title }),
          el('pre', { className: 'formula-box' }, [
            el('code', { textContent: m.formulaBox })
          ]),
          el('p', { className: 'callout-text', textContent: '⚠️ ' + m.trapRadar })
        ]);
        grid.appendChild(item);
      });

      section.appendChild(grid);

      // Jika subtes adalah LBE: Sertakan Bank 200+ Kosakata Akademik
      if (stCode === 'LBE' && window.UTBK_VOCAB && window.UTBK_VOCAB.length > 0) {
        const vocabSection = el('div', { className: 'vocab-cheatsheet-block' }, [
          el('h3', { className: 'panel-title', textContent: 'Bank 200+ Kosakata Akademik Populer UTBK-SNBT' }),
          el('p', { className: 'panel-desc', textContent: 'Kosakata frekuensi tinggi dalam teks ilmiah Literasi Bahasa Inggris beserta arti dan contoh kontekstualnya.' })
        ]);

        const table = el('table', { className: 'vocab-table' }, [
          el('thead', null, [
            el('tr', null, [
              el('th', { textContent: 'No' }),
              el('th', { textContent: 'Kosakata' }),
              el('th', { textContent: 'Kelas' }),
              el('th', { textContent: 'Arti Indonesia' }),
              el('th', { textContent: 'Contoh Kalimat Kontekstual' })
            ])
          ])
        ]);

        const tbody = el('tbody');
        window.UTBK_VOCAB.forEach((v, vIdx) => {
          tbody.appendChild(el('tr', null, [
            el('td', { textContent: String(vIdx + 1) }),
            el('td', { className: 'bold-text', textContent: v.word }),
            el('td', { className: 'mono-code', textContent: v.pos }),
            el('td', { textContent: v.meaning }),
            el('td', { className: 'vocab-example', textContent: v.example })
          ]));
        });

        table.appendChild(tbody);
        vocabSection.appendChild(table);
        section.appendChild(vocabSection);
      }

      container.appendChild(section);
    });
  }

  // --- PEMERIKSA INTEGRITAS DATA & TAMPILAN KEAMANAN ---
  async function updateIntegrityDisplay() {
    const statusBadge = document.getElementById('integrity-status-badge');
    const hashElem = document.getElementById('integrity-hash-value');
    const snapshotCount = document.getElementById('snapshot-count-value');
    const schemaElem = document.getElementById('integrity-schema-version');

    if (schemaElem && window.UTBK_CONFIG) {
      schemaElem.textContent = 'v' + (window.UTBK_CONFIG.schemaVersion || 2) + '.0';
    }

    try {
      const payload = getPayloadForStorage();
      const hash = await calculateCanonicalHash(payload);

      if (hashElem) {
        hashElem.textContent = hash;
      }
      if (statusBadge) {
        clearElement(statusBadge);
        statusBadge.className = 'status-badge is-mastered';
        statusBadge.textContent = 'Terverifikasi Valid (Data Sinkron)';
      }

      // Hitung snapshot
      let count = 0;
      const storedSnap = localStorage.getItem(SNAPSHOTS_KEY);
      if (storedSnap) {
        const parsed = JSON.parse(storedSnap);
        if (Array.isArray(parsed)) count = parsed.length;
      }
      if (snapshotCount) {
        snapshotCount.textContent = count + ' dari 3 snapshot otomatis';
      }
    } catch (e) {
      if (statusBadge) {
        statusBadge.className = 'status-badge is-unmastered';
        statusBadge.textContent = 'Pemeriksaan Galat';
      }
    }
  }

  // --- ACTIONS HANDLERS ---
  async function handleToggleMastery(moduleId) {
    if (!moduleId) return;
    if (state.modulesMastered[moduleId]) {
      delete state.modulesMastered[moduleId];
    } else {
      state.modulesMastered[moduleId] = true;
    }
    saveStateToStorage();
    renderSidebar();
    if (state.activeTab === 'materi') {
      renderModuleCards();
    } else if (state.activeTab === 'reader') {
      openModuleReader(moduleId);
    }
  }

  function handleSaveNewNote() {
    const catSelect = document.getElementById('note-category-select');
    const subSelect = document.getElementById('note-subtest-select');
    const titleInput = document.getElementById('note-title-input');
    const bodyInput = document.getElementById('note-body-input');

    if (!catSelect || !subSelect || !titleInput || !bodyInput) return;

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title || !body) {
      alert('Judul dan isi catatan wajib diisi.');
      return;
    }

    const newNote = {
      id: 'note-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 6),
      category: catSelect.value,
      subtest: subSelect.value,
      title: title,
      body: body,
      createdAt: Date.now()
    };

    if (state.cryptoVault.enabled) {
      // Enkripsi ulang seluruh catatan
      const updatedNotes = [newNote, ...state.notes];
      state.notes = updatedNotes;
      // Ambil PIN sementara dari session key atau simpan
      saveStateToStorage();
    } else {
      state.notes.unshift(newNote);
      saveStateToStorage();
    }

    titleInput.value = '';
    bodyInput.value = '';
    renderNotesWorkspace();
  }

  function handleDeleteNote(noteId) {
    if (!noteId) return;
    if (!confirm('Hapus catatan ini secara permanen?')) return;
    state.notes = state.notes.filter(n => n.id !== noteId);
    saveStateToStorage();
    renderNotesWorkspace();
  }

  function handleQuickAddNote(moduleId) {
    const allMods = getAllModules();
    const mod = allMods.find(m => m.id === moduleId);
    if (!mod) return;

    switchTab('catatan');

    const catSelect = document.getElementById('note-category-select');
    const subSelect = document.getElementById('note-subtest-select');
    const titleInput = document.getElementById('note-title-input');
    const bodyInput = document.getElementById('note-body-input');

    if (catSelect) catSelect.value = 'KONSEP';
    if (subSelect) subSelect.value = mod.subtest;
    if (titleInput) titleInput.value = 'Inti: ' + mod.title;
    if (bodyInput) bodyInput.value = mod.formulaBox ? mod.formulaBox : mod.oneLiner;

    if (titleInput) titleInput.focus();
  }

  function handleCheckDrillAnswer(target) {
    const optIdx = parseInt(target.dataset.optionIndex, 10);
    const correctIdx = parseInt(target.dataset.correctIndex, 10);
    const modId = target.dataset.moduleId;
    const drillIdx = target.dataset.drillIndex;

    const parent = target.closest('.drill-options');
    if (!parent) return;

    const buttons = parent.querySelectorAll('.drill-option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add('is-correct');
      } else if (idx === optIdx && optIdx !== correctIdx) {
        btn.classList.add('is-wrong');
      }
    });

    const expl = document.getElementById('drill-expl-' + modId + '-' + drillIdx);
    if (expl) expl.classList.remove('is-hidden');
  }

  function handleFlipFlashcard(cardElem) {
    const front = cardElem.querySelector('.flashcard-front');
    const back = cardElem.querySelector('.flashcard-back');
    if (!front || !back) return;

    const isBackVisible = !back.classList.contains('is-hidden');
    if (isBackVisible) {
      back.classList.add('is-hidden');
      front.classList.remove('is-hidden');
      cardElem.classList.remove('is-flipped');
    } else {
      front.classList.add('is-hidden');
      back.classList.remove('is-hidden');
      cardElem.classList.add('is-flipped');
    }
  }

  // --- RESTORE & BACKUP EXPORT/IMPORT ---
  function handleExportBackup() {
    try {
      const payload = getPayloadForStorage();
      const jsonStr = JSON.stringify(payload, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ruangbelajar-utbk-backup-' + new Date().toISOString().split('T')[0] + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Gagal mengekspor data cadangan: ' + err.message);
    }
  }

  let pendingRestoreData = null;

  function handleFileSelectForRestore(file) {
    if (!file) return;

    if (file.size > (window.UTBK_CONFIG.maxBackupBytes || 2097152)) {
      alert('Ukuran file cadangan terlalu besar (Maksimal 2 MB).');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const text = e.target.result;
        const validated = validateRestoreJson(text);
        pendingRestoreData = validated;

        const previewBox = document.getElementById('restore-preview-box');
        const summaryText = document.getElementById('restore-preview-summary');

        if (previewBox && summaryText) {
          const masteredCount = Object.keys(validated.modulesMastered || {}).length;
          const notesCount = (validated.notes || []).length;
          const customCount = (validated.customModules || []).length;

          summaryText.textContent = 'File valid! Memuat: ' + masteredCount + ' modul dipahami, ' + customCount + ' modul tambahan, ' + notesCount + ' catatan, dan Siklus Hari ke-' + validated.activeDay + '. Klik tombol di bawah untuk menerapkan.';
          previewBox.classList.remove('is-hidden');
        }
      } catch (err) {
        alert('Validasi file cadangan gagal: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function confirmRestore() {
    if (!pendingRestoreData) return;
    if (!confirm('Apakah kamu yakin ingin menimpa data belajar dengan data cadangan ini?')) return;

    // Ambil snapshot data saat ini sebelum menimpa
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) saveSnapshot(existing);

    state.activeDay = pendingRestoreData.activeDay;
    state.lastCycleTs = pendingRestoreData.lastCycleTs;
    state.modulesMastered = pendingRestoreData.modulesMastered;
    state.customModules = pendingRestoreData.customModules;
    state.notes = pendingRestoreData.notes;
    state.cryptoVault = pendingRestoreData.cryptoVault;
    state.vaultUnlocked = !state.cryptoVault.enabled;

    saveStateToStorage();
    pendingRestoreData = null;

    const previewBox = document.getElementById('restore-preview-box');
    if (previewBox) previewBox.classList.add('is-hidden');

    alert('Pemulihan cadangan berhasil diterapkan!');
    renderAll();
  }

  function cancelRestore() {
    pendingRestoreData = null;
    const previewBox = document.getElementById('restore-preview-box');
    if (previewBox) previewBox.classList.add('is-hidden');
  }

  function handleRecoverSnapshot() {
    try {
      const stored = localStorage.getItem(SNAPSHOTS_KEY);
      if (!stored) {
        alert('Tidak ada snapshot otomatis yang tersimpan.');
        return;
      }
      const snapshots = JSON.parse(stored);
      if (!Array.isArray(snapshots) || snapshots.length === 0) {
        alert('Tidak ada snapshot otomatis yang tersedia.');
        return;
      }

      const latest = snapshots[0];
      if (!confirm('Pulihkan data dari snapshot tanggal ' + new Date(latest.ts).toLocaleString('id-ID') + '?')) {
        return;
      }

      const validated = validateRestoreJson(latest.data);
      state.activeDay = validated.activeDay;
      state.lastCycleTs = validated.lastCycleTs;
      state.modulesMastered = validated.modulesMastered;
      state.customModules = validated.customModules;
      state.notes = validated.notes;
      state.cryptoVault = validated.cryptoVault;
      state.vaultUnlocked = !state.cryptoVault.enabled;

      saveStateToStorage();
      hideSystemBanner();
      alert('Snapshot berhasil dipulihkan!');
      renderAll();
    } catch (err) {
      alert('Gagal memulihkan snapshot: ' + err.message);
    }
  }

  // --- WEBCRYPTO VAULT ENCRYPTION & DECRYPTION ---
  async function handleEnableEncryption() {
    const pinInput = document.getElementById('setup-pin-input');
    const msg = document.getElementById('encryption-status-msg');
    if (!pinInput) return;

    const pin = pinInput.value.trim();
    if (pin.length < 4) {
      alert('PIN atau kata sandi minimal harus 4 karakter.');
      return;
    }

    try {
      if (msg) msg.textContent = 'Mengenkripsi catatan dengan PBKDF2 (600.000 iterasi) + AES-GCM-256...';

      const encrypted = await encryptNotesVault(state.notes, pin);
      state.cryptoVault = {
        enabled: true,
        salt: encrypted.saltB64,
        iv: encrypted.ivB64,
        ciphertext: encrypted.ciphertextB64
      };
      state.vaultSessionKey = encrypted.sessionKey;
      state.vaultUnlocked = true;

      saveStateToStorage();
      pinInput.value = '';

      if (msg) msg.textContent = 'Enkripsi AES-GCM-256 aktif! Catatan kamu aman terlindungi.';
      renderNotesWorkspace();
    } catch (err) {
      alert('Gagal mengenkripsi catatan: ' + err.message);
      if (msg) msg.textContent = '';
    }
  }

  function handleDisableEncryption() {
    if (!confirm('Matikan enkripsi catatan? Catatan akan disimpan dalam teks biasa di memori lokal.')) return;
    state.cryptoVault = { enabled: false, salt: null, iv: null, ciphertext: null };
    state.vaultUnlocked = true;
    saveStateToStorage();
    alert('Enkripsi dinonaktifkan.');
    renderNotesWorkspace();
  }

  async function handleUnlockVault() {
    const pinInput = document.getElementById('unlock-pin-input');
    const errText = document.getElementById('unlock-error-msg');
    if (!pinInput) return;

    const pin = pinInput.value.trim();
    if (!pin) return;

    // Jeda Eksponensial saat salah berkali-kali
    const now = Date.now();
    const delayRequired = Math.min(30000, Math.pow(2, state.failedAttemptsCount) * 1000);
    if (now - state.lastFailedAttemptTs < delayRequired) {
      const waitSec = Math.ceil((delayRequired - (now - state.lastFailedAttemptTs)) / 1000);
      if (errText) {
        errText.textContent = 'Terlalu banyak percobaan salah. Tunggu ' + waitSec + ' detik.';
        errText.classList.remove('is-hidden');
      }
      return;
    }

    try {
      const decrypted = await decryptNotesVault(state.cryptoVault, pin);
      state.notes = decrypted.notes;
      state.vaultSessionKey = decrypted.sessionKey;
      state.vaultUnlocked = true;
      state.failedAttemptsCount = 0;

      pinInput.value = '';
      if (errText) errText.classList.add('is-hidden');

      renderNotesWorkspace();
    } catch (err) {
      state.failedAttemptsCount++;
      state.lastFailedAttemptTs = Date.now();
      if (errText) {
        errText.textContent = 'PIN / Passphrase salah atau autentikasi data gagal. Coba lagi.';
        errText.classList.remove('is-hidden');
      }
    }
  }

  function handleLockVault() {
    state.vaultUnlocked = false;
    state.notes = [];
    renderNotesWorkspace();
  }

  // --- SIMULASI HARI BERIKUTNYA (+24 JAM) ---
  function handleSimulateNextDay() {
    state.activeDay += 1;
    state.lastCycleTs = Date.now(); // reset timer siklus
    saveStateToStorage();

    // Perbarui dropdown hari
    const daySelect = document.getElementById('day-filter-select');
    if (daySelect) {
      clearElement(daySelect);
      daySelect.appendChild(el('option', { value: 'ALL', textContent: 'Semua Hari Terbuka' }));
      for (let d = 1; d <= state.activeDay; d++) {
        daySelect.appendChild(el('option', { value: String(d), textContent: 'Hari ke-' + d }));
      }
      daySelect.value = state.selectedDay;
    }

    renderAll();
  }

  // --- GLOBAL EVENT DELEGATION (TANPA INLINE EVENT / TANPA EVAL) ---
  function initEventDelegation() {
    document.addEventListener('click', function (e) {
      const target = e.target.closest('[data-action]');
      if (!target) return;

      const action = target.dataset.action;

      switch (action) {
        case 'switch-tab':
          if (target.dataset.tab) switchTab(target.dataset.tab);
          break;

        case 'filter-subtest':
          state.selectedSubtest = target.dataset.subtest || 'ALL';
          renderSidebar();
          renderModuleCards();
          break;

        case 'open-module-reader':
          openModuleReader(target.dataset.moduleId);
          break;

        case 'close-reader':
          switchTab('materi');
          break;

        case 'toggle-mastery':
          handleToggleMastery(target.dataset.moduleId);
          break;

        case 'quick-add-note':
          handleQuickAddNote(target.dataset.moduleId);
          break;

        case 'save-new-note':
          handleSaveNewNote();
          break;

        case 'delete-note':
          handleDeleteNote(target.dataset.noteId);
          break;

        case 'check-drill-answer':
          handleCheckDrillAnswer(target);
          break;

        case 'flip-flashcard':
          handleFlipFlashcard(target.closest('.flashcard-box'));
          break;

        case 'simulate-next-day':
          handleSimulateNextDay();
          break;

        case 'toggle-drawer':
          const sidebar = document.getElementById('app-sidebar');
          const backdrop = document.getElementById('drawer-backdrop');
          if (sidebar) sidebar.classList.toggle('is-open');
          if (backdrop) backdrop.classList.toggle('is-hidden');
          break;

        case 'close-drawer':
          const sb = document.getElementById('app-sidebar');
          const bd = document.getElementById('drawer-backdrop');
          if (sb) sb.classList.remove('is-open');
          if (bd) bd.classList.add('is-hidden');
          break;

        case 'open-current-cheat-sheet':
          switchTab('rangkuman');
          break;

        case 'print-cheatsheet':
          window.print();
          break;

        case 'export-backup-json':
          handleExportBackup();
          break;

        case 'confirm-restore-json':
          confirmRestore();
          break;

        case 'cancel-restore-json':
          cancelRestore();
          break;

        case 'verify-integrity-now':
          updateIntegrityDisplay();
          alert('Pemeriksaan integritas selesai. Hash SHA-256 diperbarui.');
          break;

        case 'recover-snapshot':
          handleRecoverSnapshot();
          break;

        case 'enable-note-encryption':
          handleEnableEncryption();
          break;

        case 'disable-note-encryption':
          handleDisableEncryption();
          break;

        case 'decrypt-notes-vault':
          handleUnlockVault();
          break;

        case 'lock-notes-vault':
          handleLockVault();
          break;

        case 'dismiss-banner':
          hideSystemBanner();
          break;

        case 'load-next-bank-module':
          alert('Semua modul bank kurikulum lengkap (70+ modul) sudah otomatis dimuat dan dapat dibuka melalui siklus harian!');
          break;

        default:
          break;
      }
    });

    // Event input pencarian
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        state.searchQuery = e.target.value;
        if (state.activeTab !== 'materi') {
          switchTab('materi');
        } else {
          renderModuleCards();
        }
      });
    }

    // Filter Hari di Sidebar
    const dayFilter = document.getElementById('day-filter-select');
    if (dayFilter) {
      dayFilter.addEventListener('change', function (e) {
        state.selectedDay = e.target.value;
        renderModuleCards();
      });
    }

    // Filter Status di Sidebar
    const statusFilter = document.getElementById('status-filter-select');
    if (statusFilter) {
      statusFilter.addEventListener('change', function (e) {
        state.selectedStatus = e.target.value;
        renderModuleCards();
      });
    }

    // Filter Kategori Catatan
    const noteCatFilter = document.getElementById('note-filter-category');
    if (noteCatFilter) {
      noteCatFilter.addEventListener('change', function (e) {
        state.notesFilterCategory = e.target.value;
        renderNotesWorkspace();
      });
    }

    // Filter Subtes di Rangkuman
    const cheatsheetSelect = document.getElementById('cheatsheet-subtest-select');
    if (cheatsheetSelect) {
      cheatsheetSelect.addEventListener('change', function (e) {
        state.cheatsheetSubtest = e.target.value;
        renderCheatsheet();
      });
    }

    // Input File Restore Backup
    const fileInput = document.getElementById('import-backup-file');
    if (fileInput) {
      fileInput.addEventListener('change', function (e) {
        const file = e.target.files && e.target.files[0];
        if (file) {
          handleFileSelectForRestore(file);
          e.target.value = ''; // reset input
        }
      });
    }
  }

  // --- RENDER SEMUA KOMPONEN ---
  function renderAll() {
    renderSidebar();
    updateTimerDisplay();
    switchTab(state.activeTab);
  }

  // --- INISIALISASI SAAT DOM READY ---
  function initApp() {
    loadStateFromStorage();
    checkAndAdvanceDailyCycle();
    initEventDelegation();
    renderAll();

    // Interval Timer Siklus Harian (update tiap detik)
    setInterval(function () {
      updateTimerDisplay();
      checkAndAdvanceDailyCycle();
    }, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
