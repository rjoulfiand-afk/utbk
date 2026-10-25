/* File: data/ppu.js
 * Bank Materi Lengkap Subtes: Pengetahuan & Pemahaman Umum (PPU) - 10 Modul Lengkap
 */
(function () {
  'use strict';

  window.UTBK_MODULES = window.UTBK_MODULES || [];

  const PPU_MODULES = [
    {
      id: 'ppu-01',
      subtest: 'PPU',
      day: 1,
      title: 'Ide Pokok, Gagasan Utama, dan Kalimat Topik',
      timeTarget: '45 dtk/soal',
      oneLiner: 'Menemukan payung gagasan yang menaungi seluruh kalimat dalam paragraf secara cepat dan akurat.',
      summary: 'Ide pokok adalah inti permasalahan atau pesan utama yang ingin disampaikan penulis dalam suatu paragraf. Menemukan ide pokok dilakukan dengan mengidentifikasi kalimat utama (biasanya di awal atau akhir paragraf) dan memangkas detail penjelasnya.',
      coreConcept: 'Bedakan Kalimat Utama dengan Ide Pokok: Kalimat utama adalah kalimat fisik yang tertulis lengkap di dalam teks, sedangkan Ide Pokok adalah sari pati atau abstraksi konsep dari kalimat utama tersebut. Pola deduktif (kalimat utama di awal) ditandai oleh kalimat kedua yang memuat kata rujukan (hal ini, fenomena tersebut, kondisi ini) atau rincian spesifik dari kalimat pertama. Pola induktif (di akhir) ditandai kata konjungsi simpulan (Oleh karena itu, Dengan demikian, Jadi).',
      formulaBox: '1. Pola Deduktif (90% Soal UTBK):\n   - Kalimat 1 = Pernyataan Umum / Payung Topik.\n   - Kalimat 2 = Bukti / Kata Rujukan / Penjelasan Khusus.\n   ===> Ide Pokok = Inti Subjek + Predikat Kalimat 1.\n\n2. Pola Induktif:\n   - Kalimat 1-4 = Contoh kasus, data, rincian sebab.\n   - Kalimat Terakhir = "Dengan demikian, [Simpulan Inti]."\n   ===> Ide Pokok = Gagasan pada kalimat terakhir.',
      trapRadar: 'Jebakan Utama: Opsi pengecoh biasanya mengambil satu kalimat penjelas yang faktanya memang ada di dalam teks (misalnya data angka atau contoh nama tempat), tetapi sifatnya terlalu sempit untuk menjadi payung seluruh paragraf.',
      steps: [
        'Baca kalimat pertama dan kalimat kedua paragraf.',
        'Jika kalimat kedua menjelaskan atau merujuk ke kalimat pertama, tetapkan kalimat pertama sebagai kalimat utama.',
        'Singkirkan keterangan tambahan (waktu, tempat, klausa relatif) pada kalimat utama untuk mengambil gagasan pokoknya, lalu cari opsi yang paling semakna.'
      ],
      guidedExample: {
        problem: '(1) Urbanisasi yang tidak terkendali di kota-kota megapolitan Asia Tenggara memicu degradasi kualitas hidup perkotaan. (2) Kepadatan permukiman yang melebihi daya dukung lahan mengakibatkan terbatasnya akses terhadap sanitasi layak dan air bersih. (3) Selain itu, beban kemacetan harian menambah tingkat emisi karbon dan stres psikologis warga. (4) Tanpa penataan tata ruang yang komprehensif, ketimpangan sosial ekonomi antarwilayah akan semakin melebar. Apakah ide pokok paragraf tersebut?',
        identify: 'Paragraf terdiri dari 4 kalimat. Kalimat (1) memuat pernyataan umum tentang urbanisasi tidak terkendali memicu degradasi kualitas hidup.',
        process: 'Kalimat (2) dan (3) merinci dampak buruk degradasi tersebut (sanitasi buruk, kemacetan, stres), dan kalimat (4) menegaskan pentingnya tata ruang. Inti kalimat (1) adalah dampak buruk urbanisasi tidak terkendali.',
        answer: 'Dampak buruk urbanisasi yang tidak terkendali terhadap kualitas hidup di kota megapolitan.'
      },
      drills: [
        {
          q: '(1) Ekosistem padang lamun di wilayah pesisir memainkan peran vital dalam mitigasi krisis iklim global. (2) Tumbuhan berbunga yang hidup di dasar laut dangkal ini mampu menyerap karbon hingga 35 kali lebih cepat daripada hutan hujan tropis. (3) Tidak hanya itu, padang lamun juga menjadi tempat pembibitan bagi beragam biota laut ekonomis penting seperti udang dan ikan karang. Ide pokok paragraf tersebut adalah...',
          options: [
            'Kecepatan padang lamun menyerap emisi karbon laut.',
            'Peran penting ekosistem padang lamun bagi mitigasi iklim dan biota laut.',
            'Perbandingan luas padang lamun dengan hutan hujan tropis.',
            'Upaya pelestarian ikan karang dan udang di pesisir.',
            'Ciri-ciri tumbuhan berbunga di dasar laut dangkal.'
          ],
          ans: 1,
          explanation: 'Kalimat (1) adalah kalimat utama. Kalimat (2) dan (3) merinci dua peran vitalnya (mitigasi karbon dan habitat biota). Maka intinya adalah peran vital ekosistem padang lamun.'
        },
        {
          q: 'Manakah judul yang PALING TEPAT untuk sebuah teks yang membahas penemuan teknologi desalinasi membran grafena berbiaya rendah untuk mengatasi kelangkaan air minum di pulau terluar?',
          options: [
            'Krisis Air Bersih di Pulau Terluar Indonesia',
            'Sifat Fisik dan Kimia dari Membran Grafena',
            'Inovasi Desalinasi Membran Grafena untuk Solusi Air Bersih Pulau Terluar',
            'Perbandingan Biaya Berbagai Teknologi Pengolahan Air Laut',
            'Tantangan Distribusi Air Minum Nasional'
          ],
          ans: 2,
          explanation: 'Judul yang baik harus mencakup dua variabel inti: inovasi teknologinya (desalinasi grafena) dan tujuannya/konteks sasarannya (solusi air pulau terluar).'
        },
        {
          q: 'Sebuah paragraf memaparkan data lonjakan volume sampah plastik dari tahun ke tahun pada kalimat (1) sampai (3), lalu ditutup dengan kalimat: "Oleh sebab itu, larangan penggunaan kantong plastik sekali pakai harus diberlakukan secara tegas di seluruh pusat perbelanjaan." Kalimat utama paragraf tersebut terletak pada...',
          options: [
            'Kalimat (1)',
            'Kalimat (2)',
            'Kalimat (3)',
            'Kalimat terakhir',
            'Kalimat (1) dan terakhir secara bersamaan'
          ],
          ans: 3,
          explanation: 'Paragraf berpola induktif: fakta data disajikan di awal dan kalimat utama/simpulan (ditandai "Oleh sebab itu") diletakkan di kalimat penutup.'
        }
      ],
      flashcards: [
        { front: 'Apa perbedaan kalimat utama dengan ide pokok?', back: 'Kalimat utama adalah kalimat fisik tertulis; ide pokok adalah inti konsep dari kalimat utama.' },
        { front: 'Apa ciri khas kalimat kedua pada paragraf deduktif?', back: 'Memuat kata rujukan (ini, tersebut) atau contoh rincian dari kalimat pertama.' },
        { front: 'Bagaimana mengenali paragraf induktif?', back: 'Kalimat terakhir memuat konjungsi simpulan (Jadi, Oleh karena itu, Dengan demikian).' },
        { front: 'Berapa target waktu per soal ide pokok di PPU?', back: 'Maksimal 45 detik per soal.' },
        { front: 'Mengapa opsi yang memuat angka spesifik sering salah pada soal ide pokok?', back: 'Karena angka spesifik merupakan data penjelas, bukan gagasan umum pemayung.' }
      ],
      commonMistakes: [
        'Memilih opsi kalimat penjelas yang terlalu sempit.',
        'Membaca ulang seluruh teks berulang-ulang alih-alih fokus pada kalimat 1 dan 2.'
      ]
    },
    {
      id: 'ppu-02',
      subtest: 'PPU',
      day: 1,
      title: 'Kalimat Penjelas, Kohesi, dan Kalimat Sumbang (Tidak Padu)',
      timeTarget: '45 dtk/soal',
      oneLiner: 'Mendeteksi kalimat yang melompat keluar dari topik utama paragraf dalam waktu 15 detik.',
      summary: 'Paragraf yang baik memenuhi syarat kohesi (keterikatan bentuk kata/rujukan) dan koherensi (kepaduan alur gagasan). Kalimat yang tidak mendukung gagasan pokok disebut kalimat sumbang (tidak padu) dan wajib dieliminasi.',
      coreConcept: 'Untuk mendeteksi kalimat sumbang, tentukan Topik Spesifik (Subjek Pembicaraan) yang dipegang oleh mayoritas kalimat. Kalimat sumbang kerap kali masih memakai tema umum yang mirip (misal sama-sama bertema "kopi"), tetapi membahas sudut pandang yang sama sekali berbeda (misal 4 kalimat membahas teknik fermentasi biji kopi, sedangkan 1 kalimat tiba-tiba membahas harga ekspor kopi di bursa saham).',
      formulaBox: '1. Uji Rantai Topik:\n   - K1: Membahas Objek A + Aspek X\n   - K2: Membahas Aspek X (rincian 1)\n   - K3: Membahas Aspek X (rincian 2)\n   - K4: Membahas Aspek Y (Tiba-tiba melompat!) ===> KALIMAT SUMBANG\n   - K5: Membahas Aspek X (simpulan/penutup)',
      trapRadar: 'Jebakan Utama: Pembuat soal mengecoh peserta dengan menyisipkan kata yang sama pada kalimat sumbang (misal tetap ada kata "plastik"), tetapi substansi kalimatnya tidak nyambung dengan kalimat sebelum dan sesudahnya.',
      steps: [
        'Baca cepat seluruh kalimat dalam paragraf bernomor (1) sampai (5).',
        'Tuliskan satu kata kunci topik utama yang dibahas oleh mayoritas kalimat.',
        'Cari satu kalimat yang jika dihilangkan, paragraf tersebut justru menjadi lebih mengalir dan runtut.'
      ],
      guidedExample: {
        problem: '(1) Restorasi terumbu karang buatan berbahan beton ramah lingkungan mulai menunjukkan hasil positif di Kepulauan Seribu. (2) Struktur beton berpori tersebut terbukti mampu menjadi media penempelan larva karang secara alami. (3) Dalam waktu enam bulan, koloni karang baru tumbuh rata-rata dua sentimeter di atas substrat tersebut. (4) Kepulauan Seribu memiliki potensi pariwisata bahari yang menarik ratusan ribu wisatawan domestik tiap akhir pekan. (5) Keberhasilan ini diharapkan dapat memulihkan keanekaragaman hayati laut setempat. Kalimat yang TIDAK PADU adalah...',
        identify: 'Teks terdiri dari 5 kalimat bernomor. Topik utama: efektivitas beton ramah lingkungan untuk restorasi terumbu karang.',
        process: 'Kalimat (1), (2), (3), dan (5) membahas teknologi terumbu karang buatan dan pertumbuhannya. Kalimat (4) tiba-tiba membahas jumlah wisatawan domestik pariwisata bahari.',
        answer: 'Kalimat (4) tidak padu karena menyimpang ke topik pariwisata bahari.'
      },
      drills: [
        {
          q: '(1) Teleskop luar angkasa generasi terbaru dirancang untuk mendeteksi komposisi kimia atmosfer eksoplanet. (2) Instrumen spektroskopi inframerahnya dapat mengidentifikasi jejak uap air, metana, dan karbon dioksida. (3) Data atmosfer ini menjadi petunjuk krusial dalam pencarian potensi kelayakhunian planet asing. (4) Biaya peluncuran roket komersial ke orbit bumi telah turun drastis dalam lima tahun terakhir. (5) Temuan awal teleskop ini telah mengonfirmasi keberadaan uap air di eksoplanet gas raksasa. Kalimat sumbang adalah...',
          options: ['Kalimat (1)', 'Kalimat (2)', 'Kalimat (3)', 'Kalimat (4)', 'Kalimat (5)'],
          ans: 3,
          explanation: 'Kalimat (4) sumbang karena membahas tren biaya peluncuran roket komersial, sedangkan 4 kalimat lainnya membahas kemampuan spektroskopi teleskop mendeteksi atmosfer eksoplanet.'
        },
        {
          q: 'Manakah pasangan kalimat yang memiliki hubungan KOHEHENSI SEBAB-AKIBAT yang paling padu?',
          options: [
            'Hujan lebat mengguyur kota sejak pagi. Oleh karena itu, debit air sungai meluap ke permukiman warga.',
            'Hujan lebat mengguyur kota sejak pagi. Namun, jalan raya tampak sangat bersih.',
            'Debit air sungai meluap ke permukiman. Meskipun demikian, warga mengungsi ke tempat aman.',
            'Pemerintah membangun tanggul baru. Bahkan, warga menanam pohon peneduh.',
            'Air sungai meluap deras. Sebaliknya, warga menutup pintu rumah rapat-rapat.'
          ],
          ans: 0,
          explanation: 'Konjungsi "Oleh karena itu" secara logis dan kohesif menghubungkan sebab (hujan lebat sejak pagi) dengan akibat langsungnya (debit air sungai meluap).'
        },
        {
          q: '(1) Kopi arabika membutuhkan ketinggian di atas 1.000 mdpl agar menghasilkan cita rasa asam yang kompleks. (2) Suhu sejuk di dataran tinggi memperlambat pematangan buah sehingga senyawa gula terkonsentrasi sempurna. (3) Petani kopi di lereng pegunungan mulai menerapkan teknik pemetikan selektif buah merah. (4) Konsumsi kopi di kedai modern kini menjadi gaya hidup populer kalangan muda. (5) Akibat pematangan lambat tersebut, profil aroma kopi arabika menjadi sangat khas. Kalimat tidak padu terdapat pada nomor...',
          options: ['(1)', '(2)', '(3)', '(4)', '(5)'],
          ans: 3,
          explanation: 'Kalimat (4) membicarakan gaya hidup nongkrong di kedai kopi modern, sementara kalimat lain membahas aspek agronomi biologis pematangan biji kopi arabika.'
        }
      ],
      flashcards: [
        { front: 'Apa pengertian kalimat sumbang?', back: 'Kalimat yang menyimpang dari gagasan pokok dan merusak kepaduan paragraf.' },
        { front: 'Apa beda kohesi dan koherensi?', back: 'Kohesi adalah keterpaduan bentuk/bahasa (kata ganti, konjungsi); koherensi adalah keterpaduan makna gagasan.' },
        { front: 'Apa kata kunci dalam mencari kalimat sumbang?', back: 'Tentukan topik spesifik mayoritas kalimat, lalu cari kalimat dengan fokus berbeda.' },
        { front: 'Apakah kalimat sumbang selalu bertema beda total?', back: 'Tidak, temanya bisa mirip tapi fokus aspek pembahasannya melompat.' },
        { front: 'Apa efek menghapus kalimat sumbang dari paragraf?', back: 'Paragraf menjadi jauh lebih runtut dan logis.' }
      ],
      commonMistakes: [
        'Terkecoh kalimat sumbang yang memakai kata kunci sama dengan judul teks.',
        'Mengira kalimat penjelas kedua sebagai kalimat sumbang hanya karena memuat data teknis.'
      ]
    },
    {
      id: 'ppu-03',
      subtest: 'PPU',
      day: 2,
      title: 'Makna Kata Kontekstual & Polisemi',
      timeTarget: '45 dtk/soal',
      oneLiner: 'Menafsirkan makna leksikal vs kontekstual kata di dalam kalimat tanpa terjebak definisi kamus kaku.',
      summary: 'Sebuah kata dapat memiliki makna denotatif (harfiah), konotatif (kiasan), maupun makna situasional yang bergeser sesuai bidang keilmuan atau konteks wacana.',
      coreConcept: 'Polisemi adalah kata yang memiliki lebih dari satu makna yang masih berakar pada konsep dasar yang sama (misal: "kaki" meja, "kaki" gunung, "kaki" manusia). Makna kontekstual diuji dengan teknik substitusi: gantilah kata yang ditanyakan dengan pilihan kata pada opsi jawaban. Pilihan kata yang benar tidak boleh mengubah maksud atau nuansa kalimat asli.',
      formulaBox: '1. Jenis Makna Kata:\n   - Leksikal: Makna dasar kamus yang lepas konteks.\n   - Gramatikal: Makna yang muncul akibat proses afiksasi/reduplikasi.\n   - Kontekstual: Makna spesifik dalam satu kalimat tertentu.\n\n2. Teknik Substitusi Uji Makna:\n   Ganti [Kata Target] dengan [Opsi Jawaban].\n   Jika kalimat tetap logis dan nuansa maknanya utuh ===> Opsi Tepat!',
      trapRadar: 'Jebakan Utama: Memilih arti leksikal paling umum dari kamus, padahal di dalam kalimat teks kata tersebut digunakan secara metaforis atau dalam istilah teknis ekonomi/sains.',
      steps: [
        'Cermati kalimat tempat kata tersebut berada (baca satu kalimat sebelum dan sesudahnya).',
        'Tentukan apakah kata digunakan secara denotatif (arti sebenarnya) atau konotatif/metaforis.',
        'Ganti kata tersebut dengan masing-masing opsi jawaban untuk melihat kecocokannya.'
      ],
      guidedExample: {
        problem: 'Kalimat: "Kebijakan pengetatan likuiditas perbankan dinilai berhasil MENJINAKKAN laju inflasi tahunan." Kata "menjinakkan" dalam kalimat tersebut paling tepat bermakna...',
        identify: 'Kata target: "menjinakkan". Konteks: laju inflasi tahunan.',
        process: 'Secara leksikal pada hewan, menjinakkan berarti membuat tidak buas. Dalam konteks ekonomi inflasi, menjinakkan berarti mengendalikan, meredam, atau menekan laju kenaikan harga.',
        answer: 'Mengendalikan atau meredam laju kenaikan harga agar tetap stabil.'
      },
      drills: [
        {
          q: 'Kata "mengantongi" dalam kalimat "Kandidat nomor urut dua telah mengantongi restu dari partai koalisi" bermakna...',
          options: [
            'Memasukkan benda ke dalam saku',
            'Menyimpan rahasia politik',
            'Memperoleh atau mendapatkan',
            'Menyembunyikan informasi resmi',
            'Membeli dukungan secara finansial'
          ],
          ans: 2,
          explanation: 'Dalam konteks restu politik, "mengantongi" bermakna kiasan yaitu telah memperoleh atau mendapatkan dukungan resmi.'
        },
        {
          q: 'Kata "memangkas" yang digunakan secara DENOTATIF (makna sebenarnya) terdapat pada kalimat...',
          options: [
            'Pemerintah memangkas anggaran perjalanan dinas kementerian.',
            'Tukang kebun itu memangkas dahan pohon mangga yang menjuntai ke jalan.',
            'Perusahaan terpaksa memangkas separuh jam kerja buruh.',
            'Kebijakan moneter bertujuan memangkas defisit neraca perdagangan.',
            'Manajemen memangkas birokrasi perizinan investasi daerah.'
          ],
          ans: 1,
          explanation: 'Tukang kebun memangkas dahan pohon menggunakan alat potong fisik (memotong ujung benda), yang merupakan makna denotatif/harfiah.'
        },
        {
          q: 'Frasa "darah dingin" dalam kalimat "Tindakan penipuan investasi bodong itu dilakukan secara berdarah dingin tanpa memedulikan penderitaan korban" bermakna...',
          options: [
            'Memiliki suhu tubuh rendah',
            'Dilakukan secara spontan',
            'Dilakukan tanpa rasa belas kasihan atau rasa bersalah',
            'Berasal dari garis keturunan bangsawan',
            'Mengalami tekanan psikologis berat'
          ],
          ans: 2,
          explanation: '"Berdarah dingin" bermakna tenang tanpa rasa bersalah, kejam, dan tidak menunjukkan empati/belas kasihan.'
        }
      ],
      flashcards: [
        { front: 'Apa yang dimaksud Polisemi?', back: 'Satu kata yang memiliki beberapa makna yang masih saling bertalian konsep dasarnya.' },
        { front: 'Apa teknik terbaik mencari makna kata kontekstual?', back: 'Teknik substitusi (mengganti kata target dengan kata di opsi jawaban).' },
        { front: 'Apa perbedaan makna denotatif dan konotatif?', back: 'Denotatif adalah makna lugas sebenarnya; konotatif adalah makna kiasan/tambahan nuansa rasa.' },
        { front: 'Apa arti kata "dingin" pada kalimat "Penyambutan tamu itu terasa dingin"?', back: 'Kurang ramah / tidak bersemangat (makna konotatif).' },
        { front: 'Apakah makna leksikal selalu sama dengan makna kontekstual?', back: 'Tidak, makna kontekstual ditentukan oleh hubungan dengan kata-kata lain dalam kalimat.' }
      ],
      commonMistakes: [
        'Memilih arti harfiah kamus pada kalimat sastra/metaforis.',
        'Mengabaikan kata sebelum dan sesudah kata target.'
      ]
    },
    {
      id: 'ppu-04',
      subtest: 'PPU',
      day: 2,
      title: 'Kata Baku vs Nonbaku Sesuai KBBI VI',
      timeTarget: '45 dtk/soal',
      oneLiner: 'Menguasai daftar kata baku yang paling sering menjebak dalam soal ejaan UTBK-SNBT.',
      summary: 'Soal kata baku menguji ketepatan ejaan serapan dan bentuk formal bahasa Indonesia sesuai pedoman resmi KBBI VI dan kaidah fonologi EYD Edisi V.',
      coreConcept: 'Banyak kata yang sangat akrab di percakapan sehari-hari ternyata berstatus nonbaku di KBBI VI. Pola umum kesalahan: pertukaran huruf e/i (antre bukan antri, atlet bukan atlit), pertukaran u/o (lubang bukan lobang, gubuk bukan gubuk/gobok), penyerapan fonem z/j/s (izin bukan ijin, asas bukan azas), serta penulisan gugus konsonan serapan.',
      formulaBox: '1. Daftar Pasangan Kata Sering Muncul (Baku vs Nonbaku):\n   - Antre (Baku)  vs  Antri (Nonbaku)\n   - Atlet (Baku)  vs  Atlit (Nonbaku)\n   - Izin (Baku)   vs  Ijin (Nonbaku)\n   - Praktik (Baku) vs Praktek (Nonbaku)\n   - Analisis (Baku) vs Analisa (Nonbaku)\n   - Diagnosis (Baku) vs Diagnosa (Nonbaku)\n   - Risiko (Baku)  vs  Resiko (Nonbaku)\n   - Kualitas (Baku) vs Kwalitas (Nonbaku)\n   - Cedera (Baku)  vs  Cidera (Nonbaku)\n   - Mengubah (Baku) vs Merubah (Nonbaku - kata dasar: ubah)',
      trapRadar: 'Jebakan Utama: Kata "merubah" sering dianggap baku, padahal kata dasarnya adalah UBAH (mendapat awalan meN- menjadi MENGUBAH). Kata "merubah" berarti menjadi seperti rubah (hewan)! Begitu pula "memerhatikan" (dari kata perhati, huruf p luluh menjadi mem-).',
      steps: [
        'Cari kata dasar dari bentukan kata berimbuhan tersebut.',
        'Ingat aturan peluluhan fonem K, T, S, P saat bertemu awalan meN- dan peN-.',
        'Cocokkan dengan daftar kata baku konsonan serapan (analisis, sintesis, hipotesis memakai akhiran -sis, bukan -sa).'
      ],
      guidedExample: {
        problem: 'Manakah kalimat yang SELURUH katanya merupakan kata baku sesuai KBBI VI?\n(A) Para atlit sedang mengantri di depan klinik praktek dokter.\n(B) Manajemen melakukan analisa resiko sebelum merubah sistem operasional.\n(C) Dokter menegakkan diagnosis cedera ligamen dan memberi izin istirahat.',
        identify: 'Analisis kata per kata pada setiap pilihan ganda.',
        process: 'Pada (A): atlit (salah -> atlet), mengantri (salah -> mengantre), praktek (salah -> praktik). Pada (B): analisa (salah -> analisis), resiko (salah -> risiko), merubah (salah -> mengubah). Pada (C): diagnosis (baku), cedera (baku), izin (baku).',
        answer: 'Kalimat (C) seluruh katanya baku sesuai KBBI VI.'
      },
      drills: [
        {
          q: 'Penulisan kata baku yang BENAR terdapat pada kalimat...',
          options: [
            'Pemerintah menghimbau warga agar tidak panik menghadapi fluktuasi harga.',
            'Pemberian vaksinasi efektif membentuk sistim kekebalan tubuh.',
            'Kualitas produk UMKM harus ditingkatkan agar mampu bersaing di pasar global.',
            'Tim peneliti mempublikasikan analisa dampak lingkungan pekan lalu.',
            'Kegiatan ekstralulikuler itu dikoordinir oleh pengurus OSIS.'
          ],
          ans: 2,
          explanation: '"Kualitas" baku (bukan kwalitas). Kata lain nonbaku: menghimbau (seharusnya mengimbau tanpa h), sistim (sistem), analisa (analisis), dikoordinir (dikoordinasi).'
        },
        {
          q: 'Bentuk kata berimbuhan yang TEPAT dari kata dasar "ubah" dan "perhati" adalah...',
          options: [
            'merubah dan memperhatikan',
            'mengubah dan memerhatikan',
            'mengubah dan memperhatikan',
            'merobah dan memerhatikan',
            'mengubahkan dan perhatikan'
          ],
          ans: 1,
          explanation: 'Kata dasar "ubah" + meN- = mengubah. Kata dasar "perhati" diawali fonem P (K-T-S-P luluh) + meN-...-kan = memerhatikan.'
        },
        {
          q: 'Manakah kelompok kata yang KETIGANYA merupakan bentuk baku?',
          options: [
            'Hierarki, konkret, napas',
            'Hirarki, kongkret, nafas',
            'Hierarki, konkrit, nafas',
            'Hirarki, konkret, napas',
            'Hierarki, kongkrit, napas'
          ],
          ans: 0,
          explanation: 'Ketiganya baku: hierarki (bukan hirarki), konkret (bukan konkrit/kongkret), napas (bukan nafas).'
        }
      ],
      flashcards: [
        { front: 'Manakah yang baku: "antre" atau "antri"?', back: 'Antre (dengan huruf e).' },
        { front: 'Manakah yang baku: "analisis" atau "analisa"?', back: 'Analisis (akhiran -sis).' },
        { front: 'Manakah yang baku: "mengubah" atau "merubah"?', back: 'Mengubah (kata dasar: ubah).' },
        { front: 'Manakah yang baku: "memerhatikan" atau "memperhatikan"?', back: 'Memerhatikan (fonem p luluh saat bertemu awalan meN-).' },
        { front: 'Manakah yang baku: "risiko" atau "resiko"?', back: 'Risiko (dengan huruf i).' }
      ],
      commonMistakes: [
        'Menulis "merubah" alih-alih "mengubah".',
        'Menulis "ijin", "antri", "praktek", dan "resiko" karena terbiasa melihatnya di spanduk jalanan.'
      ]
    },
    {
      id: 'ppu-05',
      subtest: 'PPU',
      day: 3,
      title: 'Imbuhan peN-...-an, per-...-an, ke-...-an & Makna Semantisnya',
      timeTarget: '45 dtk/soal',
      oneLiner: 'Membedakan makna nominalisasi proses, hasil, tempat, dan sifat abstrak antar-kalimat.',
      summary: 'Imbuhan konfiks pembentuk nomina (peN-...-an, per-...-an, ke-...-an) memiliki variasi makna semantik yang ditentukan oleh kelas kata dasarnya dan konteks kalimat.',
      coreConcept: 'Konfiks peN-...-an biasanya berakar dari verba aktif transitif meN- dan menyatakan PROSES atau TINDAKAN (contoh: pembuatan = proses membuat, pembersihan = proses membersihkan). Sedangkan per-...-an biasanya berakar dari verba ber- atau adjektiva dan menyatakan HAL/MASALAH atau TEMPAT (contoh: permukiman = hal bermukim / kawasan bermukim, perhentian = tempat berhenti). Imbuhan ke-...-an menyatakan KEADAAN, TEMPAT, atau TERLALU (kepanasan = terlalu panas).',
      formulaBox: '1. Pembedaan Makna Konfiks:\n   - peN-...-an (Proses/Perbuatan): pengiriman, pembangunan, penyusunan.\n   - per-...-an (Tempat/Hasil/Hal): perbatasan, perjanjian, perhotelan.\n   - ke-...-an (Keadaan/Mengalami): kebersihan (keadaan bersih), kehujanan (terkena hujan).\n\n2. Uji Frasa Substitusi:\n   Ganti kata di kalimat dengan "proses...", "hasil...", "tempat...", atau "hal yang berkaitan dengan...".',
      trapRadar: 'Jebakan Utama: Kata "pemukiman" vs "permukiman". PEMUKIMAN bermakna proses memukimkan warga (tindakan), sedangkan PERMUKIMAN bermakna kawasan tempat tinggal warga!',
      steps: [
        'Cari kata dasar dan tentukan kata kerja asalnya (apakah dari verba meN- atau verba ber-).',
        'Uji makna kata target dengan menyisipkan kata "proses", "tempat", atau "hasil".',
        'Terapkan uji yang sama pada opsi pilihan ganda sampai menemukan makna yang setara.'
      ],
      guidedExample: {
        problem: 'Kata "pelebaran" dalam kalimat "Pelebaran jalan arteri itu menelan biaya puluhan miliar rupiah" memiliki makna imbuhan peN-...-an yang SAMA dengan kata dalam kalimat...\n(A) Warga mengungsi di penginapan sementara.\n(B) Pendapatan pedagang melonjak saat festival.\n(C) Penertiban pedagang kaki lima berlangsung tertib.',
        identify: 'Kata target: "pelebaran" = proses melebarkan jalan (menyatakan proses/tindakan).',
        process: 'Uji opsi: (A) penginapan = tempat menginap (tempat). (B) pendapatan = hasil mendapat (hasil). (C) penertiban = proses menertibkan (proses/tindakan).',
        answer: 'Pilihan (C) "Penertiban" karena sama-sama menyatakan proses/tindakan.'
      },
      drills: [
        {
          q: 'Imbuhan ke-...-an yang menyatakan MAKNA "terkena atau menderita suatu hal" terdapat pada kalimat...',
          options: [
            'Kecerdasan emosional sangat dibutuhkan oleh seorang pemimpin.',
            'Ia terlambat datang ke kantor karena kehujanan di jalan.',
            'Kementerian Kesehatan menerbitkan pedoman gizi seimbang.',
            'Baju yang dibelinya di toko online ukurannya kesempitan.',
            'Kelurahan itu meraih juara pertama lomba kebersihan lingkungan.'
          ],
          ans: 1,
          explanation: '"Kehujanan" bermakna terkena/menderita hujan. "Kecerdasan" = hal cerdas, "kesempitan" = terlalu sempit, "kebersihan" = perihal bersih.'
        },
        {
          q: 'Kata "peristirahatan" dalam kalimat "Kawasan villa itu menjadi tempat peristirahatan favorit di akhir pekan" bermakna...',
          options: [
            'Proses mengistirahatkan',
            'Tempat untuk beristirahat',
            'Alat untuk beristirahat',
            'Akibat dari istirahat',
            'Kumpulan orang yang beristirahat'
          ],
          ans: 1,
          explanation: '"Peristirahatan" menyatakan tempat dilakukannya aktivitas beristirahat.'
        },
        {
          q: 'Makna konfiks peN-...-an yang menyatakan "alat" terdapat pada kata...',
          options: [
            'Pencatatan',
            'Penggilingan',
            'Penglihatan',
            'Pencahayaan',
            'Pendengaran'
          ],
          ans: 4,
          explanation: '"Pendengaran" dan "penglihatan" dalam konteks biologi dapat bermakna indra/alat untuk mendengar dan melihat.'
        }
      ],
      flashcards: [
        { front: 'Apa beda makna "pemukiman" dan "permukiman"?', back: 'Pemukiman = proses/tindakan memukimkan; Permukiman = kawasan/tempat bermukim.' },
        { front: 'Apa makna umum konfiks peN-...-an?', back: 'Menyatakan proses atau tindakan (terkait verba meN-).' },
        { front: 'Apa makna imbuhan ke-...-an pada "kepanasan"?', back: 'Menyatakan intensitas berlebih (terlalu panas) atau menderita kepanasan.' },
        { front: 'Bagaimana cara cepat menguji makna imbuhan nomina?', back: 'Ganti kata tersebut dengan frasa "proses me-...", "tempat ber-...", atau "hasil me-...".' },
        { front: 'Apa makna konfiks per-...-an pada kata "perjanjian"?', back: 'Menyatakan hasil dari perbuatan berjanji.' }
      ],
      commonMistakes: [
        'Tertukar antara "proses" (tindakan) dan "hasil".',
        'Menyamakan fungsi konfiks peN-...-an dengan per-...-an.'
      ]
    },
    {
      id: 'ppu-06',
      subtest: 'PPU',
      day: 3,
      title: 'Hubungan Kata: Sinonim, Antonim, Hipernim & Hiponim',
      timeTarget: '40 dtk/soal',
      oneLiner: 'Memetakan relasi hierarki makna umum-khusus dan gradasi pasangan kata semantis.',
      summary: 'Relasi makna mengatur hubungan antar-kata dalam bahasa. Yang paling krusial di UTBK adalah hierarki semantis: Hipernim (kata umum/superordinat) dan Hiponim (kata khusus/subordinat).',
      coreConcept: 'Hipernim adalah nama kategori induk yang membawahi beberapa kata spesifik. Hiponim adalah anggota dari kategori tersebut. Hubungan ini bersifat searah: Merpati adalah burung, tetapi burung bukan hanya merpati. Kumpulan hiponim yang berada di level yang sama disebut kohiponim (Merpati, Elang, Kenari). Antonim dapat berupa pasangan mutlak (hidup-mati), bertingkat (panas-hangat-dingin), atau relasional (guru-murid).',
      formulaBox: '1. Struktur Hierarki Semantis:\n   HIPERNIM (Umum)  : Logam Mulia\n   HIPONIM (Khusus) : Emas, Perak, Platina\n\n2. Uji "Termasuk Dalam":\n   X adalah salah satu jenis dari Y ===> X adalah Hiponim dari Hipernim Y.\n\n3. Jenis Antonim:\n   - Komplementer (Biner): hidup - mati (tidak ada tengah-tengah).\n   - Gradasi: panas - dingin (ada hangat, sejuk).\n   - Relasional: suami - istri, menjual - membeli.',
      trapRadar: 'Jebakan Utama: Tertukar posisi antara hipernim dan hiponim pada opsi jawaban bertingkat. Ingat: Hipernim = induk/atas; Hiponim = anak/bawah.',
      steps: [
        'Tentukan apakah kata yang ditanyakan berposisi sebagai kategori induk (umum) atau anggota khusus.',
        'Gunakan kalimat uji "A adalah salah satu jenis dari B" untuk memvalidasi hiponim.',
        'Untuk soal antonim, pastikan kelas katanya sama (adjektiva dengan adjektiva, nomina dengan nomina).'
      ],
      guidedExample: {
        problem: 'Dalam kalimat: "Komoditas hortikultura seperti cabai merah, tomat, dan bawang merah mengalami fluktuasi harga", hubungan makna antara kata "hortikultura" dengan "cabai merah, tomat, dan bawang merah" adalah...',
        identify: 'Kata 1: hortikultura. Kata 2: cabai merah, tomat, bawang merah.',
        process: 'Hortikultura adalah nama bidang/kategori tanaman kebun (induk umum), sedangkan cabai, tomat, dan bawang adalah contoh jenis tanamannya (anggota khusus).',
        answer: 'Hipernim (hortikultura) dan hiponim (cabai, tomat, bawang merah).'
      },
      drills: [
        {
          q: 'Manakah pasangan kata di bawah ini yang memiliki hubungan makna HIPERNIM - HIPONIM?',
          options: [
            'Mamalia - Paus',
            'Kikir - Dermawan',
            'Mobil - Sepeda motor',
            'Padi - Beras',
            'Dokter - Rumah sakit'
          ],
          ans: 0,
          explanation: 'Mamalia adalah kelas kategori hewan umum (hipernim), dan paus adalah salah satu spesies hewan mamalia (hiponim).'
        },
        {
          q: 'Pasangan kata yang memiliki relasi ANTONIM RELASIONAL (kebalikan yang saling melengkapi peran) adalah...',
          options: [
            'Tinggi - Rendah',
            'Penjual - Pembeli',
            'Hidup - Mati',
            'Luas - Sempit',
            'Cepat - Lambat'
          ],
          ans: 1,
          explanation: 'Penjual dan pembeli adalah relasi timbal balik (relasional): keberadaan pihak yang satu mensyaratkan keberadaan pihak lainnya.'
        },
        {
          q: 'Kata "sedan, minibus, dan truk" terhadap kata "kendaraan bermotor" berkedudukan sebagai...',
          options: [
            'Hipernim',
            'Hiponim',
            'Sinonim mutlak',
            'Homonim',
            'Polisemi'
          ],
          ans: 1,
          explanation: 'Sedan, minibus, dan truk merupakan anggota khusus (hiponim) dari kategori induk kendaraan bermotor.'
        }
      ],
      flashcards: [
        { front: 'Apa itu Hipernim?', back: 'Kata umum yang membawahi kata-kata lain yang lebih spesifik.' },
        { front: 'Apa itu Hiponim?', back: 'Kata khusus yang maknanya tercakup di dalam kata umum hipernim.' },
        { front: 'Apa itu Kohiponim?', back: 'Kata-kata khusus yang berada pada satu tingkatan hipernim yang sama (misal: apel dan jeruk).' },
        { front: 'Sebutkan contoh antonim komplementer!', back: 'Hidup vs Mati, Benar vs Salah (tidak memiliki nilai tengah).' },
        { front: 'Bagaimana rumus kalimat uji hiponim?', back: '"X adalah salah satu jenis dari Y".' }
      ],
      commonMistakes: [
        'Menyebut hubungan sebab-akibat sebagai hipernim-hiponim (misal padi dan beras bukan hipernim-hiponim).',
        'Tertukar antara istilah hipernim (umum) dan hiponim (khusus).'
      ]
    },
    {
      id: 'ppu-07',
      subtest: 'PPU',
      day: 4,
      title: 'Konjungsi Antarkalimat & Intrakalimat Serta Fungsinya',
      timeTarget: '45 dtk/soal',
      oneLiner: 'Menempatkan konjungsi pertentangan, konsekuensi, dan penambahan sesuai tanda baca baku EYD.',
      summary: 'Konjungsi menghubungkan satuan bahasa. Mengetahui perbedaan konjungsi intrakalimat (di dalam satu kalimat) dan konjungsi antarkalimat (di awal kalimat baru diikuti tanda koma) sangat penting untuk menghindari kalimat rancu.',
      coreConcept: 'Konjungsi antarkalimat SELALU diletakkan di awal kalimat baru dan WAJIB DIIKUTI TANDA KOMA (Namun, ..., Oleh karena itu, ..., Selain itu, ..., Sebaliknya, ...). Jangan pernah memakai konjungsi intrakalimat (seperti "sedangkan", "sehingga", "karena", "dan") sebagai kata pertama di awal kalimat mandiri! Begitu pula sebaliknya: jangan meletakkan "namun" di tengah kalimat tanpa pemisah titik atau titik koma.',
      formulaBox: '1. Aturan Penulisan Konjungsi Antarkalimat (Wajib Koma):\n   - Namun, ...\n   - Oleh karena itu, ...\n   - Dengan demikian, ...\n   - Selain itu, ...\n   - Sebaliknya, ...\n\n2. Larangan Fatal (XSS Kebahasaan):\n   - SALAH: "...banjir besar. Sehingga warga mengungsi." (Sehingga = intrakalimat!)\n   - BENAR: "...banjir besar sehingga warga mengungsi."\n   - BENAR: "...banjir besar. Akibatnya, warga mengungsi."',
      trapRadar: 'Jebakan Utama: Kata "Sedangkan" dan "Sehingga" dilarang keras berdiri di awal kalimat yang diawali huruf kapital setelah titik. Jika ingin memulai kalimat baru, gunakan "Sementara itu, ..." atau "Akibatnya, ...".',
      steps: [
        'Periksa posisi konjungsi: apakah di awal kalimat baru (setelah titik) atau di tengah kalimat.',
        'Jika di awal kalimat baru, pastikan memakai konjungsi antarkalimat dan langsung diikuti tanda koma.',
        'Sesuaikan makna logisnya: apakah hubungan pertentangan (namun), penambahan (selain itu), atau konsekuensi (oleh karena itu).'
      ],
      guidedExample: {
        problem: 'Perbaikilah penulisan konjungsi yang salah berikut: "Pemerintah telah memperpanjang masa pendaftaran beasiswa. Namun pendaftar di daerah terpencil masih minim."',
        identify: 'Kata "Namun" berada di awal kalimat baru setelah titik, tetapi TIDAK DIIKUTI TANDA KOMA.',
        process: 'Sesuai aturan EYD Edisi V, konjungsi antarkalimat seperti "namun" wajib diikuti tanda koma tepat setelahnya.',
        answer: '"Pemerintah telah memperpanjang masa pendaftaran beasiswa. Namun, pendaftar di daerah terpencil masih minim."'
      },
      drills: [
        {
          q: 'Kalimat berikut yang menggunakan konjungsi secara TEPAT sesuai kaidah adalah...',
          options: [
            'Proyek pembangunan jembatan itu molor. Sehingga kontraktor dikenai denda keterlambatan.',
            'Harga kedelai impor melonjak tinggi, namun pengrajin tahu tetap mempertahankan ukuran produksi.',
            'Pasokan energi terbarukan meningkat pesat. Oleh karena itu, emisi karbon sektor ketenagalistrikan mulai melandai.',
            'Adik belajar matematika, sedangkan kakak membaca novel.',
            'Pilihan C dan D keduanya tepat.'
          ],
          ans: 4,
          explanation: 'Pilihan C benar (Oleh karena itu, ... antarkalimat ber-koma) dan Pilihan D benar (sedangkan menghubungkan klausa intrakalimat setara ber-koma). Opsi A salah ("Sehingga" di awal kalimat) dan Opsi B salah ("namun" di tengah kalimat intrakalimat).'
        },
        {
          q: 'Konjungsi yang tepat untuk mengisi bagian rumpang: "Kawasan hutan lindung tersebut mengalami deforestasi parah. [...], risiko bencana banjir bandang dan tanah longsor di hilir meningkat drastis" adalah...',
          options: [
            'Meskipun demikian',
            'Akibatnya',
            'Sebaliknya',
            'Padahal',
            'Akan tetapi'
          ],
          ans: 1,
          explanation: 'Hubungan antara deforestasi hulu dan banjir bandang hilir adalah hubungan sebab-akibat (konsekuensi langsung), sehingga konjungsi yang tepat adalah "Akibatnya,".'
        },
        {
          q: 'Manakah kata penghubung yang TIDAK BOLEH diletakkan di awal kalimat setelah tanda titik?',
          options: [
            'Akan tetapi',
            'Selain itu',
            'Meskipun demikian',
            'Sehingga',
            'Oleh sebab itu'
          ],
          ans: 3,
          explanation: '"Sehingga" adalah konjungsi subordinatif intrakalimat yang berfungsi menghubungkan anak kalimat dengan induk kalimat, bukan antarkalimat.'
        }
      ],
      flashcards: [
        { front: 'Tanda baca apa yang wajib menyertai konjungsi antarkalimat di awal kalimat?', back: 'Tanda koma (,) tepat setelah kata konjungsi tersebut.' },
        { front: 'Bolehkah kata "sehingga" berada di awal kalimat setelah titik?', back: 'TIDAK BOLEH, "sehingga" adalah konjungsi intrakalimat.' },
        { front: 'Apa padanan antarkalimat dari kata "sehingga"?', back: '"Oleh karena itu,", "Dengan demikian,", atau "Akibatnya,".' },
        { front: 'Bolehkah kata "namun" diletakkan di tengah kalimat tanpa pemisah titik/titik koma?', back: 'Tidak boleh, konjungsi pertentangan intrakalimat adalah "tetapi".' },
        { front: 'Sebutkan 3 contoh konjungsi antarkalimat penambahan!', back: 'Selain itu, Di samping itu, Tambahan pula.' }
      ],
      commonMistakes: [
        'Memulai kalimat baru dengan kata "Sehingga" atau "Sedangkan".',
        'Lupa membubuhkan tanda koma setelah kata "Namun" di awal kalimat.'
      ]
    },
    {
      id: 'ppu-08',
      subtest: 'PPU',
      day: 4,
      title: 'Kepaduan dan Hubungan Antarparagraf',
      timeTarget: '50 dtk/soal',
      oneLiner: 'Menganalisis jembatan logika dan relasi retoris antara paragraf pertama dan paragraf kedua.',
      summary: 'Soal wacana panjang kerap menanyakan hubungan logis antara dua paragraf: apakah paragraf kedua merinci, mempertentangkan, memberikan solusi, atau membuktikan hipotesis paragraf pertama.',
      coreConcept: 'Hubungan antarparagraf dilihat dari kalimat pertama paragraf kedua. Perhatikan kata transisi di awal paragraf 2: kata "Namun/Sebaliknya" menandakan kontras/pertentangan; kata "Untuk mengatasi masalah tersebut" menandakan solusi; kata "Sebagai contoh/Rinciannya" menandakan ilustrasi spesifik; data angka eksperimen menandakan verifikasi empiris.',
      formulaBox: '1. Jenis Relasi Antarparagraf Populer:\n   - Masalah (Paragraf 1) ===> Solusi / Penanggulangan (Paragraf 2)\n   - Teori Umum (Paragraf 1) ===> Bukti Empiris / Contoh Kasus (Paragraf 2)\n   - Gagasan Penulis (Paragraf 1) ===> Pandangan Berlawanan / Sanggahan (Paragraf 2)\n   - Fenomena Sebab (Paragraf 1) ===> Dampak Lanjutan (Paragraf 2)',
      trapRadar: 'Jebakan Utama: Membaca seluruh paragraf kedua dari awal sampai akhir. Cara tercepat adalah membaca kalimat terakhir paragraf 1 dan kalimat pertama paragraf 2!',
      steps: [
        'Baca kalimat penutup paragraf 1 untuk mengetahui isu terakhir yang ditinggalkan.',
        'Baca kalimat pembuka paragraf 2 dan perhatikan kata transisi/penghubungnya.',
        'Tentukan fungsinya: apakah melanjutkan sebab-akibat, memberi solusi, memberi sanggahan, atau memerinci contoh.'
      ],
      guidedExample: {
        problem: 'Paragraf 1 memaparkan bahaya akumulasi limbah elektronik (e-waste) yang meracuni air tanah di kota besar. Paragraf 2 diawali dengan kalimat: "Guna menekan ancaman pencemaran tersebut, pemerintah merumuskan skema insentif penukaran barang elektronik lama dengan voucher transportasi." Hubungan isi kedua paragraf adalah...',
        identify: 'Paragraf 1 = bahaya pencemaran limbah elektronik. Paragraf 2 = skema insentif penukaran barang elektronik.',
        process: 'Paragraf 1 menyajikan ancaman masalah lingkungan, dan Paragraf 2 menyajikan solusi kebijakan penanggulangan masalah tersebut.',
        answer: 'Paragraf 2 memaparkan solusi kebijakan untuk mengatasi persoalan lingkungan yang dijelaskan pada Paragraf 1.'
      },
      drills: [
        {
          q: 'Jika Paragraf 1 menguraikan hipotesis tentang manfaat puasa intermiten bagi perbaikan metabolisme seluler, dan Paragraf 2 memaparkan hasil uji klinis pada 200 pasien diabetes selama enam bulan, maka hubungan antarparagraf yang tepat adalah...',
          options: [
            'Paragraf 2 membantah hipotesis teoritis pada Paragraf 1.',
            'Paragraf 2 menyajikan bukti empiris pengujian hipotesis pada Paragraf 1.',
            'Paragraf 2 mengulang kembali definisi puasa intermiten.',
            'Paragraf 2 menjelaskan efek samping berbahaya dari Paragraf 1.',
            'Paragraf 1 merupakan akibat dari hasil penelitian Paragraf 2.'
          ],
          ans: 1,
          explanation: 'Paragraf 2 memberikan pengujian klinis nyata (bukti empiris) terhadap konsep teoritis yang diajukan di paragraf 1.'
        },
        {
          q: 'Paragraf 1 menjelaskan keunggulan sistem kecerdasan buatan dalam deteksi dini penyakit paru. Paragraf 2 diawali: "Kendati demikian, implementasi klinis teknologi ini terkendala oleh tingginya angka bias data pada populasi minoritas." Paragraf 2 berfungsi untuk...',
          options: [
            'Mendukung penuh seluruh klaim pada Paragraf 1.',
            'Memberikan contoh sukses rumah sakit pengguna AI.',
            'Menunjukkan keterbatasan dan kendala implementasi teknologi yang dibahas pada Paragraf 1.',
            'Menjelaskan cara kerja algoritma pembelajaran mesin.',
            'Membandingkan dua merek perangkat lunak medis.'
          ],
          ans: 2,
          explanation: 'Frasa "Kendati demikian" menunjukkan pergeseran ke arah kontras atau pengungkapan kendala/keterbatasan sistem.'
        },
        {
          q: 'Teknik membaca paling efisien untuk menemukan hubungan antarparagraf adalah...',
          options: [
            'Menghitung jumlah kata tiap paragraf.',
            'Membaca kalimat terakhir paragraf sebelumnya dan kalimat pertama paragraf sesudahnya.',
            'Mencari kata serapan terbanyak di teks.',
            'Menerjemahkan teks ke bahasa asing.',
            'Membaca hanya paragraf kedua saja.'
          ],
          ans: 1,
          explanation: 'Transisi hubungan ide antarparagraf selalu terkonsentrasi pada pertemuan antara kalimat penutup paragraf pertama dan kalimat pembuka paragraf berikutnya.'
        }
      ],
      flashcards: [
        { front: 'Di mana letak kunci transisi hubungan antarparagraf?', back: 'Pada kalimat terakhir paragraf pertama dan kalimat pertama paragraf kedua.' },
        { front: 'Apa fungsi paragraf 2 jika diawali "Kendati demikian, ..."?', back: 'Menyajikan pertentangan, sanggahan, atau keterbatasan dari paragraf 1.' },
        { front: 'Apa fungsi paragraf 2 jika diawali "Untuk memecahkan kendala ini, ..."?', back: 'Menyajikan solusi penanggulangan atas masalah di paragraf 1.' },
        { front: 'Apa arti hubungan "elaborasi"?', back: 'Paragraf kedua memperluas dan memerinci poin-poin yang disebutkan di paragraf pertama.' },
        { front: 'Berapa target waktu per soal hubungan antarparagraf?', back: 'Sekitar 45-50 detik.' }
      ],
      commonMistakes: [
        'Membaca ulang seluruh teks dari judul sehingga kehabisan waktu.',
        'Mengabaikan konjungsi transisi di awal paragraf kedua.'
      ]
    },
    {
      id: 'ppu-09',
      subtest: 'PPU',
      day: 5,
      title: 'Makna Istilah Khusus & Ungkapan/Idiom Populer',
      timeTarget: '40 dtk/soal',
      oneLiner: 'Menafsirkan istilah serapan sains/sosial dan idiom bahasa Indonesia dalam teks formal.',
      summary: 'Teks UTBK-SNBT sarat dengan istilah ilmiah (jargon) dari bidang biologi, ekonomi, teknologi informasi, dan sosiologi, serta ungkapan idiomatik yang maknanya tidak dapat diartikan secara harfiah per kata.',
      coreConcept: 'Istilah khusus (terminologi) mengacu pada konsep presisi dalam satu disiplin ilmu tertentu (misal: "stagnasi", "asimetri informasi", "mitigasi", "resiliensi", "aklimatisasi"). Sementara Idiom/Ungkapan adalah gabungan kata yang maknanya menyatu dan berbeda dari arti harfiah kata pembentuknya (misal: "kambing hitam" = orang yang dipersalahkan; "meja hijau" = pengadilan; "cuci tangan" = tidak mau ikut bertanggung jawab).',
      formulaBox: '1. Istilah Populer UTBK Sering Muncul:\n   - Mitigasi: Tindakan mengurangi risiko/dampak bencana.\n   - Resiliensi: Daya lentur / kemampuan bangkit dari krisis.\n   - Stagnasi: Kondisi berhenti berkembang / macet.\n   - Asimetri: Ketidakseimbangan / tidak simetris.\n   - Holistik: Menyeluruh dari segala aspek.\n\n2. Ciri Idiom:\n   Maknanya TIDAK SAMA dengan penjumlahan arti kata dasarnya.',
      trapRadar: 'Jebakan Utama: Mengartikan ungkapan secara harfiah (misal "mengangkat topi" diartikan melepas penutup kepala, padahal maknanya adalah menaruh rasa hormat atau kagum).',
      steps: [
        'Perhatikan bidang keilmuan teks wacana (ekonomi, ekologi, kesehatan, atau hukum).',
        'Gunakan petunjuk konteks kalimat (context clues) di sekitar istilah tersebut.',
        'Pilih opsi definisi yang paling formal dan sesuai bidang ilmu terkait.'
      ],
      guidedExample: {
        problem: 'Dalam kalimat "Masyarakat pesisir menunjukkan RESILIENSI yang mengagumkan saat membangun kembali perkampungan nelayan pascatsunami", istilah "resiliensi" bermakna...',
        identify: 'Istilah: resiliensi. Konteks: bangkit pascabencana tsunami.',
        process: 'Dalam ilmu psikologi dan kebencanaan, resiliensi adalah daya adaptasi atau kemampuan pulih/bangkit kembali setelah mengalami guncangan krisis yang hebat.',
        answer: 'Kemampuan bertahan, beradaptasi, dan pulih kembali dari kondisi sulit atau bencana.'
      },
      drills: [
        {
          q: 'Istilah "anomali" dalam kalimat "Badan meteorologi mendeteksi adanya anomali suhu permukaan laut di Samudra Pasifik" bermakna...',
          options: [
            'Peningkatan suhu yang stabil',
            'Ketidakteraturan atau penyimpangan dari kondisi normal',
            'Siklus tahunan yang pasti berulang',
            'Penurunan tekanan udara secara tiba-tiba',
            'Keseimbangan suhu perairan'
          ],
          ans: 1,
          explanation: '"Anomali" bermakna penyimpangan atau ketidaklaziman dari kondisi normal/standar.'
        },
        {
          q: 'Ungkapan yang bermakna "tidak mau bertanggung jawab atas kesalahan yang diperbuat" adalah...',
          options: [
            'Lepas tangan',
            'Ringan tangan',
            'Tangan hampa',
            'Turun tangan',
            'Kaki tangan'
          ],
          ans: 0,
          explanation: '"Lepas tangan" bermakna menolak ikut campur atau menolak bertanggung jawab atas suatu masalah.'
        },
        {
          q: 'Kata "divergen" dalam konteks pola pemikiran inovatif bermakna...',
          options: [
            'Memusat pada satu jawaban pasti',
            'Menyebar ke berbagai arah alternatif gagasan kreatif',
            'Menolak pembaruan teknologi',
            'Berpikir secara linear dan monoton',
            'Berpikir tanpa landasan data'
          ],
          ans: 1,
          explanation: '"Divergen" bermakna menyebar atau bercabang ke berbagai alternatif sudut pandang (lawan dari konvergen/memusat).'
        }
      ],
      flashcards: [
        { front: 'Apa arti istilah "Mitigasi"?', back: 'Upaya mengurangi risiko atau dampak buruk dari suatu bencana/krisis.' },
        { front: 'Apa arti istilah "Resiliensi"?', back: 'Kemampuan beradaptasi dan bangkit kembali dari trauma/kesulitan.' },
        { front: 'Apa arti idiom "Kambing Hitam"?', back: 'Pihak yang dipersalahkan atas kesalahan atau kegagalan pihak lain.' },
        { front: 'Apa arti istilah "Stagnasi"?', back: 'Keadaan terhenti, tidak maju, atau macet.' },
        { front: 'Apa arti idiom "Meja Hijau"?', back: 'Pengadilan hukum.' }
      ],
      commonMistakes: [
        'Mengartikan idiom secara harfiah kata demi kata.',
        'Mencampuradukkan istilah "mitigasi" (pencegahan/pengurangan risiko) dengan "evakuasi" (pemindahan korban).'
      ]
    },
    {
      id: 'ppu-10',
      subtest: 'PPU',
      day: 5,
      title: 'Penarikan Simpulan Teks & Rangkuman Objektif',
      timeTarget: '50 dtk/soal',
      oneLiner: 'Merangkum esensi seluruh wacana ke dalam satu kalimat yang proporsional tanpa opini pribadi.',
      summary: 'Simpulan teks adalah intisari menyeluruh dari seluruh paragraf dalam wacana. Simpulan yang baik harus merangkul semua gagasan pokok tanpa menambah informasi di luar teks.',
      coreConcept: 'Rumus Simpulan Komprehensif: Simpulan = Gagasan Pokok Paragraf 1 + Gagasan Pokok Paragraf Terakhir (atau sintesis dari hubungan sebab-akibat antar-paragraf). Ciri simpulan salah: (1) Terlalu sempit (hanya mengambil info paragraf 1 saja), (2) Terlalu luas/berlebihan (memuat opini baru yang tidak tertera di teks), (3) Bertentangan dengan data teks.',
      formulaBox: '1. Rumus Simpulan Sah:\n   Simpulan = Subjek Masalah Utama + Temuan/Solusi Inti di Akhir Teks\n\n2. Kriteria Eliminasi Opsi Simpulan:\n   - Coret opsi yang memuat opini spekulatif peserta.\n   - Coret opsi yang hanya menyalin rincian satu kalimat.\n   - Coret opsi yang menggunakan kata ekstrem mutlak ("seluruhnya gagal", "pasti musnah").',
      trapRadar: 'Jebakan Utama: Memilih opsi simpulan yang kalimatnya sangat indah dan ilmiah, tetapi memuat fakta yang sebenarnya TIDAK ADA di dalam teks bacaan!',
      steps: [
        'Tentukan ide pokok dari masing-masing paragraf di dalam teks.',
        'Rangkai ide-ide pokok tersebut menjadi satu alur logis.',
        'Pilih opsi jawaban yang mewakili keseluruhan alur tersebut secara objektif.'
      ],
      guidedExample: {
        problem: 'Teks terdiri dari 2 paragraf. Paragraf 1 memaparkan bahwa kecanduan gawai pada anak usia dini menurunkan durasi tidur nyenyak. Paragraf 2 memaparkan bahwa penurunan tidur nyenyak tersebut mengganggu produksi hormon pertumbuhan dan memicu penurunan daya ingat jangka pendek. Simpulan yang tepat adalah...',
        identify: 'P1: Kecanduan gawai -> penurunan tidur nyenyak. P2: Penurunan tidur nyenyak -> gangguan hormon dan penurunan daya ingat.',
        process: 'Gabungkan kedua rantai kausalitas: Kecanduan gawai pada anak usia dini berdampak buruk pada tidur nyenyak yang berujung pada gangguan hormon pertumbuhan dan daya ingat.',
        answer: 'Kecanduan gawai pada anak usia dini memicu gangguan hormon pertumbuhan dan daya ingat akibat berkurangnya kualitas tidur nyenyak.'
      },
      drills: [
        {
          q: 'Teks memaparkan bahwa energi surya semakin murah, tetapi penyimpanannya dalam baterai skala besar masih mahal. Namun, inovasi baterai natrium berpotensi menekan biaya baterai hingga 40%. Simpulan yang paling objektif adalah...',
          options: [
            'Energi surya tidak akan pernah bisa menggantikan bahan bakar fosil.',
            'Baterai natrium telah berhasil menggantikan seluruh baterai litium di dunia.',
            'Tingginya biaya penyimpanan energi surya berpeluang diatasi oleh inovasi baterai natrium yang lebih ekonomis.',
            'Pemerintah harus mewajibkan warga memasang panel surya di atap rumah.',
            'Harga panel surya akan melonjak tajam pada masa depan.'
          ],
          ans: 2,
          explanation: 'Opsi C merangkul masalah penyimpanan energi surya dan potensi solusi penurunan biaya baterai natrium secara proporsional dan objektif.'
        },
        {
          q: 'Ciri utama simpulan yang BENAR dalam soal literasi dan PPU adalah...',
          options: [
            'Memuat pandangan pribadi peserta ujian terhadap topik teks.',
            'Menyalin kalimat terpanjang yang ada di paragraf kedua.',
            'Merangkum keterkaitan ide pokok seluruh paragraf secara setia pada teks.',
            'Memprediksi peristiwa seratus tahun yang akan datang.',
            'Menggunakan kata-kata yang tidak ada di dalam kamus.'
          ],
          ans: 2,
          explanation: 'Simpulan wajib setia pada data wacana tanpa distorsi dan mencakup intisari keterkaitan ide seluruh paragraf.'
        },
        {
          q: 'Manakah alasan mengapa opsi simpulan yang menggunakan kata "seluruh dunia pasti akan mengalami keruntuhan ekonomi" umumnya SALAH?',
          options: [
            'Karena kalimatnya terlalu pendek.',
            'Karena menggunakan generalisasi ekstrem mutlak yang melampaui data wacana ilmiah.',
            'Karena topik ekonomi tidak boleh disimpulkan.',
            'Karena tidak memuat angka tahun.',
            'Karena huruf awalnya kapital.'
          ],
          ans: 1,
          explanation: 'Generalisasi mutlak ("pasti akan", "seluruh dunia") adalah tanda khas opsi pengecoh yang melompat terlalu jauh dari teks ilmiah.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana rumus dasar menyusun simpulan teks?', back: 'Gabungkan ide pokok paragraf awal dan temuan/solusi paragraf akhir.' },
        { front: 'Apa kesalahan paling umum saat memilih simpulan?', back: 'Memilih opsi yang hanya mengambil rincian satu paragraf saja (terlalu sempit).' },
        { front: 'Bolehkah simpulan memuat fakta baru di luar teks?', back: 'TIDAK BOLEH, simpulan harus terikat 100% pada teks.' },
        { front: 'Apa tanda opsi simpulan yang ekstrem?', back: 'Memakai kata mutlak: pasti, seluruh, tidak pernah, satu-satunya.' },
        { front: 'Berapa target waktu menjawab soal simpulan?', back: 'Maksimal 50 detik.' }
      ],
      commonMistakes: [
        'Memilih simpulan berdasarkan pengetahuan pribadi di luar teks.',
        'Terjebak pada opsi yang benar faktanya di dunia nyata tapi tidak dibahas di teks.'
      ]
    }
  ];

  window.UTBK_MODULES.push(...PPU_MODULES);
})();
