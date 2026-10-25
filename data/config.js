/* File: data/config.js
 * Konfigurasi terpusat RuangBelajar UTBK-SNBT 2027.
 * PENTING [VERIFIKASI]: Jumlah soal dan durasi di bawah ini mengacu pada pola kerangka SNBT terbaru (160 soal / 195 menit).
 * Harap verifikasi kembali ke laman resmi https://snpmb.id ketika panduan resmi UTBK-SNBT 2027 dirilis.
 */
(function () {
  'use strict';

  window.UTBK_CONFIG = Object.freeze({
    appName: 'RuangBelajar UTBK',
    examYear: 2027,
    schemaVersion: 2,
    maxBackupBytes: 2 * 1024 * 1024, // Maksimal 2 MB
    cycleDurationMs: 24 * 60 * 60 * 1000, // Siklus 24 Jam
    pbkdf2Iterations: 600000, // Sesuai standar OWASP / WebCrypto
    verificationNotice: '[VERIFIKASI] Kuota soal & durasi subtes mengacu pada pola resmi SNBT terakhir (160 soal / 195 menit). Pastikan memverifikasi pembaruan resmi di https://snpmb.id.',
    subtests: Object.freeze([
      Object.freeze({
        code: 'PU',
        name: 'Penalaran Umum',
        category: 'Tes Potensi Skolastik (TPS)',
        questionCount: 30, // [VERIFIKASI ke snpmb.id]
        durationMinutes: 30, // [VERIFIKASI ke snpmb.id]
        secPerQuestion: 60,
        badgeClass: 'badge-pu',
        dotClass: 'dot-pu',
        description: 'Logika deduktif, induktif, analitik, dan penalaran kuantitatif dasar.'
      }),
      Object.freeze({
        code: 'PPU',
        name: 'Pengetahuan & Pemahaman Umum',
        category: 'Tes Potensi Skolastik (TPS)',
        questionCount: 20, // [VERIFIKASI ke snpmb.id]
        durationMinutes: 15, // [VERIFIKASI ke snpmb.id]
        secPerQuestion: 45,
        badgeClass: 'badge-ppu',
        dotClass: 'dot-ppu',
        description: 'Ide pokok, makna kata kontekstual, imbuhan, hubungan kata, dan kepaduan paragraf.'
      }),
      Object.freeze({
        code: 'PBM',
        name: 'Pemahaman Bacaan & Menulis',
        category: 'Tes Potensi Skolastik (TPS)',
        questionCount: 20, // [VERIFIKASI ke snpmb.id]
        durationMinutes: 25, // [VERIFIKASI ke snpmb.id]
        secPerQuestion: 75,
        badgeClass: 'badge-pbm',
        dotClass: 'dot-pbm',
        description: 'Kaidah EYD Edisi V, tanda baca, huruf kapital, kalimat efektif (SPOK), dan diksi.'
      }),
      Object.freeze({
        code: 'PK',
        name: 'Pengetahuan Kuantitatif',
        category: 'Tes Potensi Skolastik (TPS)',
        questionCount: 20, // [VERIFIKASI ke snpmb.id]
        durationMinutes: 20, // [VERIFIKASI ke snpmb.id]
        secPerQuestion: 60,
        badgeClass: 'badge-pk',
        dotClass: 'dot-pk',
        description: 'Bilangan, aljabar, fungsi, geometri, statistika, peluang, P vs Q, dan kecukupan data.'
      }),
      Object.freeze({
        code: 'PM',
        name: 'Penalaran Matematika',
        category: 'Tes Literasi & Penalaran',
        questionCount: 20, // [VERIFIKASI ke snpmb.id]
        durationMinutes: 42.5, // [VERIFIKASI ke snpmb.id]
        secPerQuestion: 127.5,
        badgeClass: 'badge-pm',
        dotClass: 'dot-pm',
        description: 'Pemodelan matematika kontekstual: laju, aritmetika sosial, SPLDV, geometri, dan data.'
      }),
      Object.freeze({
        code: 'LBI',
        name: 'Literasi Bahasa Indonesia',
        category: 'Tes Literasi & Penalaran',
        questionCount: 30, // [VERIFIKASI ke snpmb.id]
        durationMinutes: 42.5, // [VERIFIKASI ke snpmb.id]
        secPerQuestion: 85,
        badgeClass: 'badge-lbi',
        dotClass: 'dot-lbi',
        description: 'Evaluasi argumen, fakta vs opini, inferensi teks ilmiah/sastra, dan komparasi wacana.'
      }),
      Object.freeze({
        code: 'LBE',
        name: 'Literasi Bahasa Inggris',
        category: 'Tes Literasi & Penalaran',
        questionCount: 20, // [VERIFIKASI ke snpmb.id]
        durationMinutes: 20, // [VERIFIKASI ke snpmb.id]
        secPerQuestion: 60,
        badgeClass: 'badge-lbe',
        dotClass: 'dot-lbe',
        description: 'Main idea, stated/unstated detail, inference, tone, vocabulary in context, dan paraphrase.'
      })
    ]),
    roadmap26Weeks: Object.freeze([
      Object.freeze({
        phase: 'Fase 1: Minggu 1–5 (Akhir Okt – Nov 2026)',
        title: 'Diagnostik & Fondasi Konsep Dasar',
        ratio: '35% Catat Konsep : 65% Latihan Terpandu',
        schedule: 'Pagi (05.15–05.45): Baca wacana LBI/LBE & 5 kosakata akademik. Siang (12.15–12.35): 5 soal logika deduktif PU. Malam (19.30–21.00): 1 modul konsep + latihan mandiri.',
        focus: 'Kuasai logika implikasi, silogisme, dan ingkaran (PU); sifat bilangan & pemfaktoran aljabar (PK); serta aturan EYD Edisi V & keutuhan S-P (PBM).'
      }),
      Object.freeze({
        phase: 'Fase 2: Minggu 6–10 (Desember 2026)',
        title: 'Penyelesaian Fondasi & Pemodelan Konteks',
        ratio: '25% Catat Konsep : 75% Latihan Mandiri',
        schedule: 'Pagi: Review flashcard rumus & kaidah. Siang: Drill cepat 10 soal PPU/PBM. Malam: Bedah modul Fungsi, Geometri, dan Laju Kerja (PK & PM). Minggu: Evaluasi mingguan.',
        focus: 'Selesaikan seluruh rangkuman rumus matematika, kaidah kebahasaan, dan teknik membaca cepat (skimming/scanning). Pantau pengumuman resmi SNPMB 2027.'
      }),
      Object.freeze({
        phase: 'Fase 3: Minggu 11–18 (Januari – Februari 2027)',
        title: 'Akselerasi Kecepatan & Disiplin Error Log',
        ratio: '10% Evaluasi Error Log : 90% Drill Berwaktu (Timer)',
        schedule: 'Pagi: 10 kosakata akademik LBE. Siang: 10 soal PU/PPU dengan stopwatch ketat. Malam: Drill 20 soal lintas subtes + catat penyebab kesalahan di Error Log.',
        focus: 'Hentikan membuat catatan materi baru yang panjang. Latih ketepatan waktu per soal (45–120 detik) dan analisis akar kesalahan berpikir di Error Log.'
      }),
      Object.freeze({
        phase: 'Fase 4: Minggu 19–24 (Maret – Awal April 2027)',
        title: 'Simulasi Penuh 195 Menit & Taktik Skoring IRT',
        ratio: '5% Review Rumus : 95% Simulasi Tryout & Bedah Soal',
        schedule: 'Senin–Jumat Malam: Perbaikan subtes terlemah berdasarkan Error Log. Minggu Pagi (08.30–11.45): Simulasi penuh 160 soal (195 menit tanpa jeda).',
        focus: 'Amankan akurasi 100% pada soal level mudah–sedang dan disiplinkan teknik melewati (skip) soal jebakan yang memakan waktu lebih dari 2 menit demi memaksimalkan bobot IRT.'
      }),
      Object.freeze({
        phase: 'Fase 5: Minggu 25–26 (Pertengahan – Akhir April 2027)',
        title: 'Tapering Off, Review Cheat Sheet & Kesiapan Mental',
        ratio: 'Review Ringan Cheat Sheet & Menjaga Kebugaran',
        schedule: 'Kurangi beban soal baru agar terhindar dari kelelahan kognitif (burnout). Baca lembar Rangkuman Subtes (Cheat Sheet) 45 menit/hari dan tidur cukup 7–8 jam.',
        focus: 'Menjaga kestabilan emosi, kebugaran fisik, kelengkapan berkas ujian, dan keyakinan diri menjelang hari H UTBK-SNBT 2027.'
      })
    ])
  });

  window.UTBK_MODULES = window.UTBK_MODULES || [];
  window.UTBK_VOCAB = window.UTBK_VOCAB || [];
})();
