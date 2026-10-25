/* File: data/lbi.js
 * Bank Materi Lengkap Subtes: Literasi Bahasa Indonesia (LBI) - 10 Modul Lengkap
 */
(function () {
  'use strict';

  window.UTBK_MODULES = window.UTBK_MODULES || [];

  const LBI_MODULES = [
    {
      id: 'lbi-01',
      subtest: 'LBI',
      day: 1,
      title: 'Unsur Intrinsik Cerita: Alur, Konflik, Sudut Pandang & Perwatakan',
      timeTarget: '85 dtk/soal',
      oneLiner: 'Menganalisis perwatakan tokoh lewat dialog/tindakan dan mendeteksi titik balik klimaks cerpen.',
      summary: 'Soal literasi sastra menguji pemahaman unsur intrinsik: karakterisasi tokoh (analitik langsung vs dramatik tersirat), sudut pandang pencerita (orang pertama vs orang ketiga serbatahu), dan tahapan konflik alur.',
      coreConcept: '1) Karakterisasi Dramatik: Watak tokoh diungkapkan melalui dialog antartokoh, reaksi emosional tokoh lain, pikiran batin, serta tindakan fisik (bukan sekadar narasi deskripsi penulis). 2) Sudut Pandang: Orang Pertama ("aku/saya" sebagai pelaku utama atau sampingan); Orang Ketiga ("dia/ia/nama tokoh") baik serbatahu (mengetahui isi hati semua tokoh) maupun terarah (hanya mengikuti satu tokoh). 3) Konflik: Batin (internal: pertentangan moral diri sendiri) vs Sosial (eksternal: perselisihan fisik/gagasan dengan orang lain).',
      formulaBox: '1. Metode Pengungkapan Watak:\n   - Dramatik: Melalui tingkah laku, gaya bicara, reaksi tokoh lain.\n   - Analitik : Diberitahukan langsung oleh narator ("Ia adalah pria yang sangat kikir").\n\n2. Sudut Pandang (Point of View):\n   - Pronomina "Aku" ===> Orang Pertama (Pelaku Utama / Pendamping)\n   - Pronomina "Dia / Nama" ===> Orang Ketiga (Serbatahu / Pengamat)\n\n3. Alur Naratif: Pengenalan -> Muncul Masalah -> Klimaks -> Antiklimaks -> Resolusi',
      trapRadar: 'Jebakan Utama: Menyimpulkan watak tokoh hanya dari satu dialog yang sedang bersandiwara atau berbohong di dalam cerita. Selalu konfirmasi dengan tindakan nyata tokoh tersebut!',
      steps: [
        'Cermati kata ganti yang digunakan narator (apakah "aku" atau "dia/ia").',
        'Tandai kutipan dialog atau tindakan spesifik tokoh yang ditanyakan.',
        'Simpulkan sifat kepribadian atau jenis konflik batin yang dialami tokoh.'
      ],
      guidedExample: {
        problem: 'Kutipan Cerpen: "Malam itu tangan Hasan gemetar saat memegang amplop cokelat tebal itu. Pikirannya melayang pada ibunya yang terbaring lemah di bangsal rumah sakit. Namun, bayangan sumpah jabatan yang diucapkannya di depan kitab suci lima tahun lalu mendadak membakar dadanya. Perlahan ia meletakkan kembali amplop itu di atas meja rekanan proyeknya dan melangkah keluar tanpa menoleh." Konflik yang dialami tokoh Hasan adalah...',
        identify: 'Tokoh: Hasan. Situasi: Menerima amplop sogokan di tengah kebutuhan biaya pengobatan ibunya.',
        process: 'Hasan dihadapkan pada dilema moral antara kebutuhan mendesak menolong ibunya dan tuntutan menjaga integritas sumpah jabatannya. Ini adalah pertentangan di dalam hati nuraninya sendiri.',
        answer: 'Konflik batin (internal) antara kebutuhan ekonomi mendesak untuk pengobatan keluarga dan integritas memegang sumpah jabatan.'
      },
      drills: [
        {
          q: 'Kutipan: "Setiap kali ada tetangga yang tertimpa musibah, Pak RT tidak banyak berbicara. Tanpa menunggu diminta, ia segera memikul cangkul atau membawakan beras dari lumbung rumahnya." Watak Pak RT dalam kutipan di atas digambarkan melalui metode...',
          options: [
            'Analitik secara langsung oleh pengarang',
            'Dramatik melalui tindakan atau perbuatan tokoh',
            'Dramatik melalui dialog antartokoh',
            'Penggambaran tata fisik dan pakaian',
            'Dramatik melalui jalan pikiran tokoh lain'
          ],
          ans: 1,
          explanation: 'Pengarang melukiskan watak dermawan dan tanggap Pak RT melalui tindakan nyatanya memikul cangkul dan membawakan beras (perbuatan dramatik).'
        },
        {
          q: 'Sudut pandang yang digunakan dalam kutipan "Aku menatap punggung Seno yang kian menjauh di tikungan jalan. Seno selalu merahasiakan perasaannya kepadaku, seolah ada dinding kaca tebal yang membatasi persahabatan kami sejak kecelakaan itu" adalah...',
          options: [
            'Orang pertama pelaku utama',
            'Orang pertama pelaku sampingan',
            'Orang ketiga serbatahu',
            'Orang ketiga pengamat terbatas',
            'Orang kedua'
          ],
          ans: 1,
          explanation: 'Pencerita menggunakan kata "Aku", namun fokus cerita dan misteri yang diceritakan adalah tokoh Seno, sehingga berposisi sebagai orang pertama pelaku sampingan.'
        },
        {
          q: 'Amanat yang PALING TEPAT dari kutipan cerpen tentang seorang pemuda yang tetap merawat tanah warisan leluhurnya di tengah godaan tawaran miliaran rupiah pengembang vila adalah...',
          options: [
            'Menjual tanah warisan adalah tindakan terlarang secara hukum.',
            'Nilai luhur pelestarian alam dan warisan leluhur tidak boleh ditukar semata-mata dengan materi.',
            'Vila selalu merusak keindahan alam pegunungan.',
            'Petani harus kaya raya agar tidak tertipu pengembang.',
            'Semua tanah warisan wajib dijadikan kawasan wisata.'
          ],
          ans: 1,
          explanation: 'Amanat sastra yang bernilai mendalam mengangkat pesan moral tentang integritas menjaga kelestarian warisan nilai di atas godaan keuntungan materi sesaat.'
        }
      ],
      flashcards: [
        { front: 'Apa perbedaan karakterisasi analitik dan dramatik?', back: 'Analitik dijelaskan langsung narator; dramatik diperlihatkan lewat tindakan, dialog, atau reaksi tokoh.' },
        { front: 'Apa ciri sudut pandang orang ketiga serbatahu?', back: 'Menggunakan "dia/ia" dan narator mengetahui isi pikiran/perasaan seluruh tokoh.' },
        { front: 'Apa yang dimaksud konflik batin?', back: 'Pertentangan moral, dilema etis, atau pergulatan emosi di dalam hati tokoh itu sendiri.' },
        { front: 'Apa itu klimaks cerita?', back: 'Puncak ketegangan konflik tertinggi sebelum cerita bergerak menuju penyelesaian.' },
        { front: 'Apa itu amanat cerpen?', back: 'Pesan moral atau nilai kehidupan yang ingin disampaikan pengarang kepada pembaca.' }
      ],
      commonMistakes: [
        'Mengira sudut pandang orang pertama pelaku utama selalu tokoh "Aku" padahal bisa jadi pelaku sampingan yang menceritakan tokoh lain.',
        'Menyimpulkan watak tokoh hanya dari perkataan sepintas tanpa melihat tindakannya.'
      ]
    },
    {
      id: 'lbi-02',
      subtest: 'LBI',
      day: 1,
      title: 'Majas & Gaya Bahasa Kontekstual dalam Karya Sastra',
      timeTarget: '80 dtk/soal',
      oneLiner: 'Mengenali personifikasi, metafora, hiperbola, dan ironi dalam prosa serta puisi modern.',
      summary: 'Gaya bahasa (majas) memperkaya estetika dan kedalaman pesan teks sastra. Soal UTBK menguji kemampuan menafsirkan makna majas dalam konteks emosional cerita.',
      coreConcept: '1) Personifikasi: Melekatkan sifat/perilaku manusia pada benda mati atau alam (misal: "angin malam membelai wajahnya", "ombak meraung"). 2) Metafora: Perbandingan langsung dua hal tanpa kata penghubung seperti (misal: "ia adalah tulang punggung keluarga", "perpustakaan adalah gudang ilmu"). 3) Hiperbola: Ungkapan berlebihan yang melampaui kenyataan untuk memberi penekanan dramatis (misal: "suaranya menggelegar membelah angkasa", "keringatnya mengucur menganak sungai"). 4) Litotes: Merendahkan diri dari kenyataan sebenarnya (misal: "sudilah singgah di gubuk reyot kami"). 5) Ironi: Sindiran halus yang bertolak belakang dengan fakta (misal: "Bagus sekali nilaimu, sampai-sampai semua angka merah").',
      formulaBox: '1. Identifikasi Majas Populer:\n   - Personifikasi: Benda mati beraksi seperti manusia hidup.\n   - Metafora      : Kiasan analogi langsung (A adalah B).\n   - Hiperbola     : Berlebihan secara dramatis tidak realistis.\n   - Litotes       : Merendahkan kenyataan sebenarnya.\n   - Ironi         : Sindiran halus yang berlawanan arti.',
      trapRadar: 'Jebakan Utama: Mengira asosiasi (simile) sebagai metafora. Simile SELALU menggunakan kata pembanding eksplisit ("seperti", "laksana", "bagai", "bak"), sedangkan metafora langsung membandingkan tanpa kata pembanding!',
      steps: [
        'Baca kalimat sastra dan perhatikan apakah ada kata benda mati yang melakukan tindakan manusiawi.',
        'Periksa apakah ada kata pembanding eksplisit (seperti, laksana). Jika ada, itu simile; jika tidak ada, itu metafora.',
        'Tafsirkan makna konotatif di balik gaya bahasa tersebut.'
      ],
      guidedExample: {
        problem: 'Kutipan Puisi: "Matahari perlahan tenggelam di balik cakrawala, sementara kabut dingin mulai memeluk lereng bukit yang kesepian." Majas yang dominan pada kutipan tersebut adalah...',
        identify: 'Frasa: "kabut dingin mulai memeluk lereng bukit yang kesepian".',
        process: 'Kata "memeluk" adalah tindakan fisik makhluk hidup (manusia) yang dikenakan pada benda mati "kabut dingin", dan lereng bukit diberi sifat berperasaan "kesepian".',
        answer: 'Majas Personifikasi.'
      },
      drills: [
        {
          q: 'Kalimat berikut yang mengandung majas METAFORA adalah...',
          options: [
            'Hatinya hancur berkeping-keping mendengar kabar duka itu.',
            'Pena menari-nari di atas lembaran kertas putih.',
            'Pemuda itu menjadi anak emas direktur berkat ketekunannya.',
            'Wajahnya bersinar laksana rembulan purnama.',
            'Terimalah bingkisan yang tidak berharga ini dari kami.'
          ],
          ans: 2,
          explanation: '"Anak emas" adalah metafora langsung yang bermakna orang yang paling disayangi/dipercaya. Opsi A hiperbola, B personifikasi, D simile (ada laksana), E litotes.'
        },
        {
          q: 'Kutipan: "Cepat sekali kamu datang, rapat pleno baru saja dibubarkan lima menit yang lalu." Majas yang digunakan pembicara adalah...',
          options: ['Sarkasme', 'Ironi', 'Litotes', 'Pleonasme', 'Metafora'],
          ans: 1,
          explanation: 'Pernyataan "cepat sekali kamu datang" disampaikan kepada orang yang datang sangat terlambat, merupakan sindiran halus yang berkebalikan dengan fakta (Ironi).'
        },
        {
          q: 'Makna tersirat dari majas "keringat dingin membasahi punggungnya" dalam konteks ruang interogasi adalah...',
          options: [
            'Suhu ruangan pendingin udara sangat dingin.',
            'Tokoh mengalami demam tinggi akibat penyakit malaria.',
            'Tokoh sedang mengalami ketakutan, kecemasan, atau kepanikan yang hebat.',
            'Tokoh baru saja selesai berolahraga berat.',
            'Pakaian tokoh basah terkena tumpahan air.'
          ],
          ans: 2,
          explanation: 'Dalam konteks interogasi tegang, frasa "keringat dingin" mengindikasikan reaksi fisiologis kecemasan atau ketakutan psikologis yang mendalam.'
        }
      ],
      flashcards: [
        { front: 'Apa ciri utama majas Personifikasi?', back: 'Mengenakan sifat atau tindakan manusiawi pada benda mati/alam.' },
        { front: 'Apa perbedaan Metafora dan Simile?', back: 'Simile memakai kata pembanding (seperti, laksana); Metafora langsung tanpa kata pembanding.' },
        { front: 'Apa contoh majas Hiperbola?', back: '"Suaranya menggelegar membelah bumi" (berlebihan secara ekstrem).' },
        { front: 'Apa pengertian majas Litotes?', back: 'Majas yang merendahkan diri bertentangan dengan kenyataan sebenarnya (merendah hati).' },
        { front: 'Apa itu majas Ironi?', back: 'Sindiran halus dengan mengatakan kebalikan dari fakta sebenarnya.' }
      ],
      commonMistakes: [
        'Tertukar antara simile (ada kata "laksana") dengan metafora.',
        'Mengartikan ungkapan majas secara harfiah.'
      ]
    },
    {
      id: 'lbi-03',
      subtest: 'LBI',
      day: 2,
      title: 'Membedah Fakta vs Opini dalam Teks Informatif & Editorial',
      timeTarget: '85 dtk/soal',
      oneLiner: 'Memisahkan data objektif terverifikasi dari pandangan subjektif penulis dan prediksi masa depan.',
      summary: 'Soal literasi teks informatif menuntut ketajaman memilah kalimat fakta (peristiwa yang telah terverifikasi secara objektif) dari kalimat opini (penilaian subjektif, saran, atau estimasi masa depan).',
      coreConcept: '1) Fakta: Mengacu pada hal, peristiwa, atau data yang BENAR-BENAR TELAH TERJADI dan dapat diverifikasi kebenarannya melalui sumber independen (memuat angka historis, hasil riset lampau, nama lembaga dan tanggal resmi). 2) Opini: Mengacu pada penilaian pribadi, saran, anggapan, atau ramalan peristiwa masa depan. Ciri linguistik opini: memuat kata modalitas (seharusnya, sebaiknya, perlu, mungkin, diprediksi, diperkirakan) atau kata sifat relatif (sangat indah, paling efektif, buruk, mengecewakan). Angka yang merujuk pada target/prediksi masa depan ("pada 2030 ditargetkan...") berstatus OPINI!',
      formulaBox: '1. Ciri Fakta Objektif:\n   - Telah terjadi di masa lampau / sedang berlangsung terukur.\n   - Data statistik historis (contoh: "Pada tahun 2025 tercatat...").\n   - Bebas dari kata sifat subjektif.\n\n2. Ciri Opini Subjektif:\n   - Memuat kata saran: seharusnya, sebaiknya, patut, layak.\n   - Memuat kata prediksi: diperkirakan, berpeluang, berpotensi, akan.\n   - Memuat sifat relatif: sangat bermanfaat, paling ideal, dinilai buruk.',
      trapRadar: 'Jebakan Utama: Kalimat yang diawali angka dan tahun masa depan, contoh: "Pada tahun 2035, konsumsi listrik tenaga surya diperkirakan naik 60%." Meskipun ada angka persentase, kalimat ini adalah OPINI/PREDIKSI karena belum terjadi!',
      steps: [
        'Pindai kata-kata modalitas di setiap kalimat (sebaiknya, diprediksi, berpotensi).',
        'Cek apakah data waktu merujuk masa lalu (fakta) atau masa depan (prediksi/opini).',
        'Pastikan kalimat fakta tidak memuat penilaian rasa pribadi penulis.'
      ],
      guidedExample: {
        problem: '(1) Badan Pusat Statistik mencatat volume ekspor nikel olahan mencapai 1,4 juta ton pada tahun 2025. (2) Nilai ekspor tersebut menghasilkan devisa sebesar 22 miliar dolar AS bagi kas negara. (3) Pemerintah sebaiknya membatasi izin pembangunan smelter baru agar cadangan bijih nikel tidak cepat habis. (4) Kebijakan moratorium smelter diyakini akan menjadi langkah paling bijak untuk menjaga stabilitas harga global. Kalimat manakah yang merupakan FAKTA?',
        identify: 'Teks terdiri dari 4 kalimat. Kalimat 1 dan 2 memuat data historis 2025. Kalimat 3 memuat kata saran. Kalimat 4 memuat kata keyakinan subjektif.',
        process: 'Kalimat (1) dan (2) adalah data statistik resmi masa lampau yang terverifikasi (Fakta). Kalimat (3) memuat kata saran "sebaiknya" (Opini). Kalimat (4) memuat penilaian "diyakini akan" dan "paling bijak" (Opini).',
        answer: 'Kalimat (1) dan (2) adalah fakta.'
      },
      drills: [
        {
          q: 'Manakah kalimat berikut yang merupakan KALIMAT OPINI?',
          options: [
            'Candi Borobudur dibangun pada abad ke-8 dan ke-9 Masehi pada masa Dinasti Syailendra.',
            'Sebanyak 34 peserta dinyatakan lolos ke babak final olimpiade sains nasional.',
            'Penerapan kurikulum merdeka dinilai sangat efektif dalam menggali potensi kreatif siswa.',
            'Stasiun meteorologi mencatat curah hujan harian mencapai 120 milimeter di kawasan puncak.',
            'Kadar hemoglobin normal pria dewasa berkisar antara 13,8 hingga 17,2 gram per desiliter.'
          ],
          ans: 2,
          explanation: 'Frasa "dinilai sangat efektif" mengandung penilaian subjektif yang derajat keberhasilannya dapat diperdebatkan (opini).'
        },
        {
          q: 'Kalimat: "Menurut estimasi konsorsium riset energi, pangsa pasar kendaraan berbahan bakar hidrogen berpeluang menyentuh 15 persen pada tahun 2035." Kalimat ini tergolong opini karena...',
          options: [
            'Menyebutkan angka 15 persen',
            'Berisi proyeksi atau estimasi terhadap masa depan yang belum terverifikasi',
            'Berasal dari konsorsium riset energi',
            'Menggunakan struktur kalimat majemuk bertingkat',
            'Membahas bahan bakar hidrogen'
          ],
          ans: 1,
          explanation: 'Kata "estimasi", "berpeluang", dan waktu "pada tahun 2035" menunjukkan prediksi masa depan yang belum terjadi.'
        },
        {
          q: 'Pernyataan fakta yang TEPAT mengenai air bersih di bawah ini adalah...',
          options: [
            'Air mineral bermerek X adalah air minum paling menyegarkan di Indonesia.',
            'Setiap orang sebaiknya minum air putih minimal delapan gelas per hari.',
            'Molekul air tersusun atas dua atom hidrogen dan satu atom oksigen (H2O).',
            'Mata air pegunungan memiliki energi spiritual yang menenangkan pikiran.',
            'Harga air bersih PDAM dinilai terlalu mahal oleh sebagian warga.'
          ],
          ans: 2,
          explanation: 'Struktur kimia air (H2O) adalah fakta ilmiah objektif yang terbukti secara universal dan dapat diuji secara empiris.'
        }
      ],
      flashcards: [
        { front: 'Apa ciri utama kalimat Fakta?', back: 'Peristiwa sudah terjadi, terukur, objektif, dan dapat diverifikasi independen.' },
        { front: 'Mengapa "Pemerintah sebaiknya..." adalah Opini?', back: 'Karena memuat kata saran/anjuran subjektif.' },
        { front: 'Apakah kalimat memuat data tahun 2030 otomatis Opini?', back: 'Ya, karena peristiwa tahun 2030 belum terjadi (masih berupa target/prediksi).' },
        { front: 'Sebutkan 3 kata kunci penciri Opini!', back: 'Sebaiknya/seharusnya, dinilai/diduga, sangat/paling (relatif).' },
        { front: 'Berapa target waktu per soal fakta vs opini?', back: 'Maksimal 60-80 detik.' }
      ],
      commonMistakes: [
        'Menganggap kalimat dengan angka persentase otomatis fakta (padahal bisa berupa angka target/estimasi masa depan).',
        'Menganggap kutipan langsung pendapat tokoh sebagai fakta isi pandangannya.'
      ]
    },
    {
      id: 'lbi-04',
      subtest: 'LBI',
      day: 2,
      title: 'Evaluasi Bukti & Kekuatan Klaim Argumen',
      timeTarget: '85 dtk/soal',
      oneLiner: 'Menilai apakah data yang disajikan penulis cukup kuat membuktikan kesimpulannya atau sekadar korelasi palsu.',
      summary: 'Soal literasi argumentatif menuntut evaluasi kritis terhadap klaim penulis: apakah premis data relevan, representatif, dan memadai secara logis untuk menopang kesimpulan akhir.',
      coreConcept: 'Untuk mengevaluasi kekuatan bukti: (1) Relevansi: Apakah data empiris berkaitan langsung dengan variabel yang diklaim? (2) Kecukupan Ukuran Sampel: Menggeneralisasi perilaku seluruh remaja dari survei 10 anak adalah bukti lemah (hasty generalization). (3) Kausalitas vs Korelasi: Dua peristiwa yang terjadi bersamaan belum tentu saling menyebabkan. Argumen kuat menyajikan mekanisme kausal yang masuk akal dan menyingkirkan variabel pengganggu.',
      formulaBox: '1. Kriteria Bukti Argumen Kuat:\n   - Relevan langsung dengan klaim.\n   - Sampel representatif dan metodologi jelas.\n   - Mempertimbangkan sudut pandang tandingan (counterargument).\n\n2. Ciri Argumen Lemah / Cacat Nalar:\n   - Melakukan lompatan logika (jumping to conclusion).\n   - Menggunakan bahasa mutlak tanpa data pendukung yang sepadan.\n   - Mengabaikan faktor variabel perancu (confounding variables).',
      trapRadar: 'Jebakan Utama: Argumen yang terdengar meyakinkan hanya karena menggunakan kutipan tokoh terkenal (Appeal to Authority) padahal tokoh tersebut tidak berbicara di bidang keahliannya.',
      steps: [
        'Garis bawahi klaim utama yang ditegaskan penulis di wacana.',
        'Periksa bukti-bukti pendukung yang disodorkan: apakah berupa data representatif, testimoni tunggal, atau analogi.',
        'Pilih opsi evaluasi yang secara tajam menunjukkan celah kelemahan atau kekuatan metodologis argumen.'
      ],
      guidedExample: {
        problem: 'Penulis berargumen: "Pemberian jam istirahat bermain game bagi siswa di sela-sela pelajaran pasti akan meningkatkan nilai ujian akhir semester mereka secara dramatis. Hal ini terbukti dari seorang siswa di Kota X yang nilai matematikanya naik setelah diizinkan bermain game di kelas." Kelemahan mendasar dari bukti yang diajukan penulis adalah...',
        identify: 'Klaim: Bermain game pasti meningkatkan nilai ujian semua siswa. Bukti: Satu orang siswa di Kota X.',
        process: 'Penulis melakukan generalisasi terburu-buru (hasty generalization) dari satu kasus tunggal (anekdotal) yang tidak representatif untuk mewakili seluruh populasi siswa.',
        answer: 'Penulis menarik kesimpulan umum yang mutlak hanya berdasarkan satu bukti anekdotal tunggal yang tidak representatif.'
      },
      drills: [
        {
          q: 'Sebuah artikel menyimpulkan bahwa konsumsi cokelat hitam menyebabkan umur panjang karena negara-negara dengan konsumsi cokelat per kapita tinggi memiliki jumlah pemenang Nobel terbanyak. Kelemahan penalaran artikel tersebut adalah...',
          options: [
            'Cokelat hitam memiliki rasa yang pahit.',
            'Penulis mencampuradukkan korelasi kebetulan dengan hubungan sebab-akibat sejati tanpa mekanisme biologis yang terbukti.',
            'Harga cokelat hitam lebih mahal daripada cokelat susu.',
            'Pemenang hadiah Nobel berasal dari berbagai benua.',
            'Penulis tidak menyebutkan merek cokelat yang dikonsumsi.'
          ],
          ans: 1,
          explanation: 'Tingginya konsumsi cokelat dan jumlah nobel di negara maju sama-sama dipicu oleh kekayaan ekonomi dan anggaran riset tinggi (spurious correlation), bukan cokelat yang mencerdaskan penerima nobel.'
        },
        {
          q: 'Manakah bukti yang PALING KUAT untuk mendukung klaim "Olahraga aerobik teratur menurunkan risiko penyakit kardiovaskular pada lansia"?',
          options: [
            'Testimoni seorang kakek berusia 80 tahun yang gemar lari pagi.',
            'Hasil studi kohort selama 10 tahun terhadap 5.000 lansia yang mengontrol variabel pola makan dan riwayat genetik.',
            'Survei daring terhadap 50 anggota klub senam lansia di media sosial.',
            'Pernyataan seorang pelatih kebugaran di televisi swasta.',
            'Brosur promosi pusat kebugaran eksklusif di ibu kota.'
          ],
          ans: 1,
          explanation: 'Studi kohort jangka panjang dengan sampel besar (5.000 orang) dan kontrol variabel perancu adalah standar bukti empiris ilmiah tertinggi.'
        },
        {
          q: 'Tindakan penulis yang paling efektif untuk MEMPERKUAT argumen bahwa limbah detergen merusak ekosistem sungai adalah...',
          options: [
            'Menampilkan foto busa detergen yang menumpuk di pintu air.',
            'Menyajikan data uji laboratorium mengenai penurunan kadar oksigen terlarut (DO) dan kepunahan populasi ikan endemik di sungai terdampak.',
            'Mewawancarai warga yang mencuci pakaian di tepi sungai.',
            'Menyebutkan nama-nama merek detergen populer.',
            'Mengkritik keras pabrik detergen di media sosial.'
          ],
          ans: 1,
          explanation: 'Data laboratorium terukur mengenai parameter biologis oksigen terlarut dan populasi ikan memberikan bukti saintifik yang tak terbantahkan.'
        }
      ],
      flashcards: [
        { front: 'Apa itu Hasty Generalization?', back: 'Menarik kesimpulan umum atas seluruh populasi hanya dari sampel sangat kecil/kasus tunggal.' },
        { front: 'Apa beda korelasi dan kausalitas?', back: 'Korelasi adalah hubungan bersamaan; kausalitas adalah satu peristiwa membuktikan memicu peristiwa lain.' },
        { front: 'Apa bukti paling lemah dalam teks argumentatif?', back: 'Bukti anekdotal (pengalaman pribadi satu orang tanpa data pembanding).' },
        { front: 'Apa itu Confounding Variable?', back: 'Variabel luar pengganggu yang sebenarnya menyebabkan fenomena tersebut terjadi.' },
        { front: 'Apa ciri klaim yang lemah?', back: 'Menggunakan bahasa mutlak (pasti, semua, tidak mungkin) tanpa bukti komprehensif.' }
      ],
      commonMistakes: [
        'Menganggap testimoni satu tokoh terkenal sebagai bukti ilmiah yang cukup.',
        'Menyimpulkan hubungan sebab-akibat hanya karena dua grafik data naik bersamaan.'
      ]
    },
    {
      id: 'lbi-05',
      subtest: 'LBI',
      day: 3,
      title: 'Inferensi Logis Berdasarkan Premis Teks',
      timeTarget: '85 dtk/soal',
      oneLiner: 'Menarik simpulan tersirat yang PASTI BENAR dari dua premis teks tanpa spekulasi liar.',
      summary: 'Inferensi adalah kesimpulan logis yang tidak tertulis secara harfiah kata demi kata di dalam teks, namun WAJIB BERNILAI BENAR berdasarkan penggabungan informasi yang ada di dalam teks.',
      coreConcept: 'Prinsip Inferensi Tertutup: Jangan pernah menambah asumsi pengetahuan dunia nyata di luar batas teks. Rumus inferensi yang sah: Premis Teks A + Premis Teks B ===> Simpulan Tersirat C. Ciri inferensi salah di UTBK: (1) Ekstrapolasi berlebihan (memprediksi hal yang tidak dijamin teks), (2) Membalik kondisi bersyarat, (3) Memakai kata mutlak padahal teks hanya menyebut kecenderungan.',
      formulaBox: '1. Anatomi Inferensi Sah:\n   - Fakta 1 di Teks: A hanya bisa hidup pada suhu < 20 derajat C.\n   - Fakta 2 di Teks: Wilayah Z memiliki suhu rata-rata 32 derajat C.\n   ===> Inferensi Sah : Organisme A tidak dapat bertahan hidup di Wilayah Z.\n\n2. Jebakan Spekulasi Liar (Inferensi Gagal):\n   "Di Wilayah Z harus dipasang pendingin ruangan agar A bisa hidup." -> SALAH! (Teks tidak pernah membahas pendingin ruangan).',
      trapRadar: 'Jebakan Utama: Opsi yang kalimatnya terdengar sangat benar secara ilmu pengetahuan umum, namun TIDAK ADA bukti pendukungnya di dalam wacana teks yang diujikan!',
      steps: [
        'Baca pertanyaan dan tandai kata kunci yang dicari.',
        'Kumpulkan premis-premis di dalam teks yang memuat kata kunci tersebut.',
        'Pilih opsi simpulan yang merupakan konsekuensi logis mutlak dari gabungan premis tersebut.'
      ],
      guidedExample: {
        problem: 'Teks: "Baterai natrium-ion menggunakan bahan baku garam natrium yang melimpah di kerak bumi dan air laut. Baterai jenis ini bekerja sangat stabil pada suhu ekstrem minus 20 derajat Celsius hingga 60 derajat Celsius. Namun, kepadatan energinya 25% lebih rendah dibandingkan baterai litium-ion, sehingga membutuhkan fisik kemasan yang lebih besar untuk kapasitas daya yang sama." Manakah inferensi yang PASTI BENAR?',
        identify: 'Premis: bahan baku garam melimpah; tahan suhu ekstrem; kepadatan energi lebih rendah sehingga fisik lebih besar untuk daya yang sama.',
        process: 'Karena fisik baterai natrium-ion lebih besar untuk daya yang sama, maka baterai ini kurang cocok untuk perangkat yang menuntut ruang sangat ramping dan ringan seperti ponsel pintar saku, tetapi sangat cocok untuk penyimpanan energi skala jaringan listrik atau di wilayah bersuhu dingin ekstrem.',
        answer: 'Untuk menghasilkan kapasitas penyimpanan daya yang setara dengan litium, unit baterai natrium-ion membutuhkan ruang penyimpanan fisik yang lebih luas.'
      },
      drills: [
        {
          q: 'Teks: "Semua penderita defisiensi enzim laktase akan mengalami kembung dan mual jika mengonsumsi susu sapi murni. Rian meminum segelas susu sapi murni dan setelahnya ia tidak mengalami kembung maupun mual." Simpulan tersirat yang pasti benar adalah...',
          options: [
            'Rian adalah seorang penderita defisiensi enzim laktase yang kebal.',
            'Rian bukan penderita defisiensi enzim laktase.',
            'Susu sapi yang diminum Rian sudah basi.',
            'Rian meminum obat antimual sebelum minum susu.',
            'Enzim laktase tidak berpengaruh pada pencernaan Rian.'
          ],
          ans: 1,
          explanation: 'Bentuk modus tollens dari premis: Jika defisiensi (P) maka kembung (Q). Fakta: Rian tidak kembung (~Q). Simpulan logis: Rian bukan penderita defisiensi enzim laktase (~P).'
        },
        {
          q: 'Teks: "Hanya mahasiswa yang memiliki sertifikat TOEFL dengan skor di atas 500 yang diizinkan mendaftar program pertukaran pelajar ke Jepang. Dini adalah mahasiswa berprestasi yang sedang mendaftar program pertukaran pelajar ke Jepang." Manakah inferensi yang sah?',
          options: [
            'Dini pasti lolos seleksi pertukaran pelajar ke Jepang.',
            'Dini fasih berbicara bahasa Jepang.',
            'Dini memiliki sertifikat TOEFL dengan skor di atas 500.',
            'Dini adalah mahasiswa jurusan Sastra Inggris.',
            'Skor TOEFL Dini tepat 500.'
          ],
          ans: 2,
          explanation: 'Karena syarat mendaftar adalah skor TOEFL > 500 dan Dini sedang mendaftar, maka Dini pasti memiliki skor TOEFL > 500.'
        },
        {
          q: 'Manakah tanda bahwa sebuah opsi simpulan BUKAN merupakan inferensi yang sah?',
          options: [
            'Opsi tersebut menggunakan data langsung dari teks.',
            'Opsi tersebut menyimpulkan hal baru yang membutuhkan asumsi tambahan di luar teks.',
            'Opsi tersebut mematuhi kaidah modus tollens.',
            'Opsi tersebut tidak bertentangan dengan paragraf pertama.',
            'Opsi tersebut menggunakan bahasa formal.'
          ],
          ans: 1,
          explanation: 'Inferensi sah hanya bertumpu pada premis teks. Jika opsi membutuhkan asumsi tambahan luar, itu spekulasi liar yang tidak sah.'
        }
      ],
      flashcards: [
        { front: 'Apa yang dimaksud inferensi sah di UTBK?', back: 'Simpulan tersirat yang pasti benar semata-mata berdasarkan fakta di dalam teks.' },
        { front: 'Apakah inferensi boleh memuat spekulasi masa depan?', back: 'Tidak boleh, kecuali jika data tren di teks secara eksplisit menjaminnya.' },
        { front: 'Bagaimana rumus dasar inferensi?', back: 'Premis Teks 1 + Premis Teks 2 ===> Simpulan Tersirat.' },
        { front: 'Bolehkah memakai pengetahuan umum di luar teks pada soal inferensi?', back: 'TIDAK BOLEH, ruang lingkup kebenaran dibatasi ketat oleh wacana.' },
        { front: 'Apa tanda opsi inferensi yang salah?', back: 'Memuat kata mutlak "seluruhnya", "pasti gagal", atau konsep asing yang tidak ada di teks.' }
      ],
      commonMistakes: [
        'Memilih opsi yang benar di dunia nyata tetapi tidak disebutkan di teks wacana.',
        'Melompat pada spekulasi solusi yang tidak diuraikan penulis.'
      ]
    },
    {
      id: 'lbi-06',
      subtest: 'LBI',
      day: 3,
      title: 'Sikap, Nada (Tone) & Tujuan Penulis Teks Wacana',
      timeTarget: '80 dtk/soal',
      oneLiner: 'Mendeteksi nada kritis, objektif, skeptis, atau persuasif penulis dari pemilihan diksinya.',
      summary: 'Soal nada (tone) dan tujuan penulis menguji kemampuan membaca suasana hati intelektual penulis: apakah penulis bersikap objektif netral, kritis prihatin, skeptis meragukan, atau persuasif mengajak.',
      coreConcept: '1) Nada (Tone): Dilihat dari kata sifat dan kata keterangan yang dipilih penulis. Nada objektif/informatif: netral, memaparkan data tanpa kata bernuansa emosi. Nada kritis: menyoroti kelemahan dan ketidakberesan sistem. Nada optimis: penuh keyakinan dan harapan masa depan. Nada skeptis: meragukan klaim data tanpa bukti memadai. 2) Tujuan Penulis: Dilihat dari kata kerja operasional: Menginformasikan (to inform), Meyakinkan (to convince), Mengkritik (to criticize), atau Membandingkan (to contrast).',
      formulaBox: '1. Daftar Nada Penulis (Tone) Populer:\n   - Objektif / Netral: Paparan sains berbasis fakta tanpa emosi.\n   - Kritis / Prihatin: Membongkar ketidakadilan atau bahaya krisis.\n   - Skeptis / Meragukan: Mempertanyakan validitas klaim hasil riset.\n   - Optimis: Menekankan harapan dan solusi masa depan.\n   - Sinis / Sarkastik: Menyindir pedas kepalsuan.\n\n2. Rumus Tujuan Penulis:\n   Tujuan = [Kata Kerja Aksi] + [Gagasan Pokok Teks]',
      trapRadar: 'Jebakan Utama: Memilih nada "Emosional Marah" padahal teks ilmiah editorial hanya bernada "Kritis Konstruktif". Penulis teks UTBK hampir selalu mempertahankan gaya bahasa akademis yang santun.',
      steps: [
        'Perhatikan kata sifat yang digunakan penulis saat mendeskripsikan masalah.',
        'Tentukan apakah penulis berpihak, bersikap netral memaparkan, atau meragukan data.',
        'Cocokkan kata kerja tujuan (menguraikan, meyakinkan, menyanggah, membandingkan) dengan struktur teks.'
      ],
      guidedExample: {
        problem: 'Penulis menutup artikelnya: "Meskipun para promotor kecerdasan buatan mengklaim otomatisasi akan menciptakan lapangan kerja baru, laporan independen menunjukkan ribuan pekerja administratif telah dirumahkan tanpa jaring pengaman. Sangat disayangkan bahwa regulasi perlindungan tenaga kerja kita tertinggal jauh di belakang laju algoritma." Nada (tone) yang terpancar dari sikap penulis adalah...',
        identify: 'Diksi: "Meskipun para promotor mengklaim...", "ribuan pekerja dirumahkan tanpa jaring pengaman", "Sangat disayangkan bahwa regulasi tertinggal...".',
        process: 'Penulis tidak netral, melainkan secara tajam menyoroti dampak buruk hilangnya pekerjaan dan lambatnya regulasi pemerintah dengan rasa keprihatinan mendalam.',
        answer: 'Kritis dan prihatin terhadap dampak sosial otomatisasi tenaga kerja.'
      },
      drills: [
        {
          q: 'Teks yang memaparkan data statistik pertumbuhan penduduk, rasio jenis kelamin, dan piramida umur dari sensus BPS tanpa memberikan komentar opini ditulis dengan nada (tone)...',
          options: ['Skeptis', 'Kritis', 'Objektif dan informatif', 'Pesimistis', 'Persuasif'],
          ans: 2,
          explanation: 'Pemaparan data statistik murni tanpa evaluasi emosional atau penilaian subjektif mencerminkan nada yang objektif dan informatif.'
        },
        {
          q: 'Tujuan utama penulis dalam sebuah teks wacana yang menguraikan bahaya mikroplastik bagi rantai makanan laut dan diakhiri seruan untuk mengurangi sampah kemasan adalah...',
          options: [
            'Menghibur pembaca dengan cerita kehidupan biota laut',
            'Mengajak pembaca membatasi penggunaan plastik guna mencegah pencemaran laut',
            'Mendiskreditkan industri kemasan plastik',
            'Mengajari pembaca cara membersihkan mikroplastik di rumah',
            'Membandingkan harga berbagai wadah makanan ramah lingkungan'
          ],
          ans: 1,
          explanation: 'Teks berujung pada ajakan tindakan (persuasi) untuk membatasi plastik demi perlindungan laut.'
        },
        {
          q: 'Jika penulis berulang kali menggunakan frasa seperti "Klaim tersebut patut dipertanyakan", "Belum ada bukti kuat yang mendukung", dan "Masih terlalu dini untuk menyimpulkan", maka sikap penulis adalah...',
          options: ['Optimistis', 'Skeptis', 'Sarkastis', 'Apatis', 'Antusias'],
          ans: 1,
          explanation: 'Sikap yang mempertanyakan kebenaran klaim dan menuntut bukti empiris lebih lanjut didefinisikan sebagai sikap skeptis.'
        }
      ],
      flashcards: [
        { front: 'Apa ciri teks bernada objektif?', back: 'Netral, menyajikan data fakta tanpa menyisipkan opini emosional penulis.' },
        { front: 'Apa arti nada skeptis?', back: 'Sikap meragukan atau tidak mudah percaya pada klaim sebelum ada bukti ilmiah memadai.' },
        { front: 'Apa arti nada kritis?', back: 'Mengevaluasi kelemahan, menyoroti kekeliruan sistem, dan menunjukkan ketimpangan.' },
        { front: 'Bagaimana rumus menuliskan tujuan penulis?', back: 'Kata kerja tindakan (menginformasikan, meyakinkan, mengkritik) + ide pokok.' },
        { front: 'Bolehkah teks UTBK bersikap vulgar menyerang?', back: 'Tidak, teks UTBK selalu menggunakan etika wacana ilmiah akademis.' }
      ],
      commonMistakes: [
        'Menganggap teks kritis sebagai teks kemarahan emosional.',
        'Salah membedakan antara menginformasikan (deskriptif) dan mengajak (persuasif).'
      ]
    },
    {
      id: 'lbi-07',
      subtest: 'LBI',
      day: 4,
      title: 'Hubungan Kausal & Logika Antarparagraf',
      timeTarget: '80 dtk/soal',
      oneLiner: 'Menganalisis jembatan sebab-akibat dan komparasi antara paragraf satu dengan paragraf lainnya.',
      summary: 'Paragraf-paragraf dalam teks wacana panjang saling terikat melalui rantai hubungan logis: memaparkan sebab menuju akibat, menyajikan masalah menuju pemecahan, atau menyajikan fenomena umum menuju rincian spesifik.',
      coreConcept: 'Hubungan antarparagraf paling sering ditanyakan: (1) Paragraf 2 merupakan AKIBAT dari fenomena sebab di Paragraf 1; (2) Paragraf 2 merupakan SOLUSI dari permasalahan di Paragraf 1; (3) Paragraf 2 merupakan PENJELASAN RINCI / BUKTI dari klaim umum di Paragraf 1; (4) Paragraf 2 merupakan SANGGAHAN / KONTRAS terhadap hipotesis di Paragraf 1.',
      formulaBox: '1. Matriks Relasi Antarparagraf:\n   - Kausalitas  : Paragraf 1 Sebab  --->  Paragraf 2 Akibat\n   - Pemecahan   : Paragraf 1 Masalah ---> Paragraf 2 Solusi\n   - Komparasi   : Paragraf 1 Gagasan A ---> Paragraf 2 Kontras B\n   - Eksplanasi  : Paragraf 1 Teori Umum ---> Paragraf 2 Contoh/Data Kasus',
      trapRadar: 'Jebakan Utama: Mengira paragraf 2 menyanggah paragraf 1 hanya karena ada kata "namun" di kalimat tengah. Periksa pesan KESELURUHAN paragraf 2, bukan hanya satu kalimat transisi!',
      steps: [
        'Tentukan tema pokok paragraf 1 (apakah masalah, klaim, atau fenomena).',
        'Tentukan tema pokok paragraf 2 (apakah akibat, solusi, bukti, atau tandingan).',
        'Hubungkan kedua tema tersebut menjadi satu kalimat relasi logis.'
      ],
      guidedExample: {
        problem: 'Paragraf 1 menguraikan meningkatnya kasus resistensi bakteri terhadap antibiotik akibat konsumsi obat yang tidak tuntas. Paragraf 2 memaparkan riset terapi fag (bakteriofag) sebagai alternatif biologis untuk membasmi bakteri kebal antibiotik tersebut. Hubungan isi kedua paragraf adalah...',
        identify: 'P1: Ancaman resistensi antibiotik (masalah). P2: Riset terapi fag (solusi alternatif).',
        process: 'Paragraf 1 menyajikan krisis kesehatan dunia, dan Paragraf 2 menyajikan terobosan teknologi medis sebagai solusi alternatif atas masalah pada paragraf 1.',
        answer: 'Paragraf 2 menguraikan solusi alternatif untuk mengatasi ancaman krisis medis yang dipaparkan pada Paragraf 1.'
      },
      drills: [
        {
          q: 'Paragraf 1: Penurunan populasi lebah madu global akibat pestisida neonikotinoid. Paragraf 2: Terganggunya penyerbukan tanaman pangan dunia dan ancaman penurunan produksi buah hingga 30%. Hubungan isi kedua paragraf adalah...',
          options: [
            'Paragraf 2 merupakan penyebab utama terjadinya fenomena di Paragraf 1.',
            'Paragraf 2 menyajikan dampak buruk lanjutan dari fenomena yang dijelaskan di Paragraf 1.',
            'Paragraf 2 membantah data penurunan populasi lebah di Paragraf 1.',
            'Paragraf 2 menjelaskan cara budi daya lebah madu modern.',
            'Kedua paragraf menyajikan dua masalah yang tidak saling terkait.'
          ],
          ans: 1,
          explanation: 'Pestisida membunuh lebah (Paragraf 1 = Sebab), yang mengakibatkan penyerbukan gagal dan panen buah turun (Paragraf 2 = Akibat lanjutan).'
        },
        {
          q: 'Klausa pembuka paragraf: "Guna menanggulangi lonjakan polusi udara yang kian mengkhawatirkan pada wacana di atas..." mengindikasikan bahwa paragraf tersebut berfungsi sebagai...',
          options: [
            'Penjelasan definisi polusi',
            'Pemeringkatan kota terpolusi',
            'Pemaparan rekomendasi tindakan atau solusi masalah',
            'Sanggahan terhadap bahaya polusi',
            'Penutup tanpa makna logis'
          ],
          ans: 2,
          explanation: 'Frasa "Guna menanggulangi..." secara eksplisit menunjukkan orientasi solusi atau rencana aksi mitigasi masalah.'
        },
        {
          q: 'Jika Paragraf 1 menyajikan teori kecerdasan majemuk Howard Gardner dan Paragraf 2 mendeskripsikan 8 profil kecerdasan anak secara mendalam, maka hubungan antarparagrafnya adalah...',
          options: [
            'Pertentangan konsep',
            'Sebab dan akibat',
            'Pernyataan umum dan perincian spesifik',
            'Masalah dan penyelesaian',
            'Kritik dan pembelaan'
          ],
          ans: 2,
          explanation: 'Paragraf 1 menyajikan payung teori umum, dan Paragraf 2 menyajikan elaborasi perincian kategori secara spesifik.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana rumus mengidentifikasi hubungan sebab-akibat antarparagraf?', back: 'Paragraf 1 berisi akar pemicu masalah, Paragraf 2 berisi konsekuensi kerusakan/dampaknya.' },
        { front: 'Bagaimana rumus hubungan masalah-solusi antarparagraf?', back: 'Paragraf 1 memaparkan kendala krisis, Paragraf 2 memaparkan jalan keluar atau teknologi penanggulangannya.' },
        { front: 'Apa peran kalimat pertama paragraf kedua?', back: 'Berperan sebagai jembatan transisi gagasan antarkedua paragraf.' },
        { front: 'Berapa target waktu soal hubungan antarparagraf di LBI?', back: 'Sekitar 75-80 detik.' },
        { front: 'Apa arti relasi "komparasi"?', back: 'Kedua paragraf membandingkan persamaan dan perbedaan dua objek/gagasan.' }
      ],
      commonMistakes: [
        'Menyimpulkan hubungan dari satu kata transisi tanpa membaca topik utuh paragraf.',
        'Tertukar antara sebab dan akibat.'
      ]
    },
    {
      id: 'lbi-08',
      subtest: 'LBI',
      day: 4,
      title: 'Komparasi Dua Teks Bertema Sama: Titik Temu & Kontras',
      timeTarget: '90 dtk/soal',
      oneLiner: 'Menemukan persamaan fokus isu dan perbedaan sudut pandang antara Teks 1 dan Teks 2.',
      summary: 'Soal komparasi menyajikan dua kutipan teks dengan tema serupa (misal kecerdasan buatan atau mobil listrik), lalu meminta peserta mencari titik temu (persamaan) atau titik kontras (perbedaan fokus/sikap).',
      coreConcept: '1) Titik Temu (Persamaan): Isu pokok atau premis fakta yang disepakati oleh kedua teks (kedua penulis sama-sama mengakui bahwa...). 2) Titik Kontras (Perbedaan): Perbedaan penekanan sudut pandang (misal Teks 1 menyoroti efisiensi ekonomi jangka pendek, sedangkan Teks 2 menyoroti risiko degradasi ekologis jangka panjang; atau Teks 1 optimis sedangkan Teks 2 pesimis/skeptis).',
      formulaBox: '1. Matriks Komparasi Dua Teks:\n   - Aspek Tema Pokok  : Teks 1 vs Teks 2 (Sama atau Beda?)\n   - Sudut Pandang/Fokus: Teks 1 (Aspek X) vs Teks 2 (Aspek Y)\n   - Nada Penulis      : Teks 1 (Optimis) vs Teks 2 (Kritis)\n\n2. Trik Cepat Soal Titik Temu:\n   Pilih opsi yang informasi faktanya DISEBUTKAN OLEH KEDUA TEKS (jika hanya ada di Teks 1 atau hanya ada di Teks 2, langsung eliminasi!).',
      trapRadar: 'Jebakan Utama: Opsi yang benar-benar ada di Teks 1 tetapi TIDAK ADA sama sekali di Teks 2. Ingat: Pertanyaan "Persamaan isi kedua teks" wajib termuat di KEDUA teks!',
      steps: [
        'Buat tabel mental dua kolom: Teks 1 vs Teks 2.',
        'Tentukan topik besar dan sikap masing-masing penulis.',
        'Untuk soal perbedaan: cari aspek yang saling bertolak belakang. Untuk soal persamaan: cari fakta yang dikonfirmasi oleh keduanya.'
      ],
      guidedExample: {
        problem: 'Teks A menekankan bahwa kendaraan listrik memangkas emisi karbon perkotaan hingga 60% dan sangat hemat biaya bahan bakar harian. Teks B menyoroti bahwa baterai kendaraan listrik membutuhkan penambangan nikel dan litium yang berpotensi mencemari air tanah serta pembuangan baterai bekas belum terkelola baik. Perbedaan fokus kedua teks adalah...',
        identify: 'Teks A: Manfaat pengurangan emisi dan efisiensi biaya kendaraan listrik. Teks B: Dampak negatif lingkungan dari rantai pasok dan limbah baterai.',
        process: 'Teks A fokus pada sisi positif operasional, sedangkan Teks B fokus pada risiko lingkungan dari daur hidup baterai.',
        answer: 'Teks A menyoroti manfaat emisi dan ekonomi kendaraan listrik, sedangkan Teks B menyoroti ancaman ekologis dari produksi dan limbah baterainya.'
      },
      drills: [
        {
          q: 'Teks 1 dan Teks 2 sama-sama membahas pengembangan energi nuklir. Teks 1 berpendapat nuklir adalah solusi energi bersih bebas emisi karbon. Teks 2 berpendapat risiko kebocoran reaktor dan limbah radioaktif terlalu berbahaya bagi manusia. KEDUA TEKS TERSEBUT SEPAKAT BAHWA...',
          options: [
            'Energi nuklir harus segera dihentikan pembangunannya di seluruh dunia.',
            'Energi nuklir merupakan salah satu opsi sumber energi alternatif masa depan yang memiliki karakteristik khusus.',
            'Pembangkit listrik tenaga nuklir tidak memiliki risiko bahaya sama sekali.',
            'Biaya pembangunan reaktor nuklir adalah yang termurah di dunia.',
            'Limbah radioaktif dapat didaur ulang menjadi pupuk tanaman.'
          ],
          ans: 1,
          explanation: 'Kedua teks sama-sama mengakui bahwa energi nuklir adalah salah satu opsi sumber energi yang diperhitungkan, meskipun memperdebatkan aspek manfaat versus risikonya.'
        },
        {
          q: 'Langkah pertama yang paling efisien saat mengerjakan soal komparasi dua teks adalah...',
          options: [
            'Menghitung jumlah paragraf masing-masing teks.',
            'Membaca pertanyaan soal terlebih dahulu untuk mengetahui apakah yang ditanya persamaan atau perbedaan.',
            'Menghafalkan seluruh angka yang ada di Teks 1.',
            'Mencari kata serapan terbanyak di Teks 2.',
            'Menebak jawaban dari panjangnya pilihan opsi.'
          ],
          ans: 1,
          explanation: 'Membaca pertanyaan terlebih dahulu menghemat waktu karena memberi fokus pencarian spesifik (apakah mencari titik temu atau kontras).'
        },
        {
          q: 'Perbedaan sikap penulis Teks A (antusias mempromosikan wisata bahari baru) dan Teks B (mewaspadai lonjakan sampah plastik wisatawan) mencerminkan polaritas antara...',
          options: [
            'Eksploitasi ekonomi versus konservasi kelestarian lingkungan',
            'Pemerintah pusat versus pemerintah daerah',
            'Wisatawan asing versus wisatawan domestik',
            'Transportasi laut versus transportasi udara',
            'Pariwisata modern versus pariwisata kuno'
          ],
          ans: 0,
          explanation: 'Teks A berorientasi pada keuntungan ekonomi promosi wisata, sedangkan Teks B berorientasi pada konservasi proteksi lingkungan hidup.'
        }
      ],
      flashcards: [
        { front: 'Apa syarat jawaban pada soal persamaan kedua teks?', back: 'Informasi fakta wajib tertera dan diakui oleh KEDUA teks (bukan hanya satu teks).' },
        { front: 'Apa yang biasanya menjadi titik perbedaan dua teks bertema sama?', back: 'Fokus aspek (ekonomi vs ekologi) atau nada sikap (optimis vs skeptis).' },
        { front: 'Berapa target waktu per soal komparasi dua teks?', back: 'Maksimal 90 detik.' },
        { front: 'Bagaimana trik membaca efisien dua teks?', back: 'Baca kalimat pertama dan terakhir teks 1, lalu lakukan hal yang sama pada teks 2.' },
        { front: 'Apakah komparasi dua teks selalu bertentangan?', back: 'Tidak, bisa saja kedua teks saling melengkapi dari dua sudut pandang berbeda.' }
      ],
      commonMistakes: [
        'Memilih opsi persamaan yang faktanya hanya ada di salah satu teks saja.',
        'Terkecoh asumsi pribadi di luar hal yang dituliskan kedua teks.'
      ]
    },
    {
      id: 'lbi-09',
      subtest: 'LBI',
      day: 5,
      title: 'Membaca & Menginterpretasikan Data Tabel/Grafik dalam Wacana',
      timeTarget: '85 dtk/soal',
      oneLiner: 'Menghubungkan temuan wacana dengan bukti angka tabel tanpa salah baca kepala kolom.',
      summary: 'Soal literasi multimodal menyajikan teks narasi disertai tabel statistik atau grafik batang pendukung, lalu meminta peserta mengonfirmasi pernyataan mana yang sesuai atau tidak sesuai dengan data visual.',
      coreConcept: '1) Cek Kepala Kolom & Satuan: Perhatikan apakah data dalam ribuan, jutaan rupiah, persentase (%), atau ton. 2) Cek Tren Grafik: Garis menaik (tren positif), menurun (tren negatif), fluktuatif (naik-turun), atau stagnan (mendatar). 3) Hubungan Narasi dan Gambar: Paragraf teks sering memuat klaim temuan; tabel berfungsi sebagai data uji pembuktian empiris.',
      formulaBox: '1. Pengecekan Data Visual:\n   - Satuan Ukuran: Juta vs Miliar, Jiwa vs Rumah Tangga.\n   - Tahun Acuan  : Pastikan tahun di opsi cocok dengan baris tabel.\n   - Tren Relatif : Kenaikan tercepat (persentase) vs Kenaikan terbanyak (angka absolut).\n\n2. Uji Kesesuaian Kalimat Narasi:\n   Klaim Teks [X naik 20%] <===> Verifikasi Tabel [(Nilai2 - Nilai1)/Nilai1 x 100%]',
      trapRadar: 'Jebakan Utama: Lupa melihat catatan kaki (footnote) di bawah tabel! Sering kali ada keterangan penting seperti "*dalam ribuan rupiah" atau "**data sementara kuartal I". Mengabaikan catatan kaki menyebabkan salah hitung desimal!',
      steps: [
        'Baca judul tabel dan catatan kaki di bagian paling bawah tabel.',
        'Pindai opsi jawaban dan cari angka atau nama kategori yang disebutkan.',
        'Tarik garis pandang jari horizontal-vertikal ke sel tabel yang bersangkutan untuk mengonfirmasi kebenarannya.'
      ],
      guidedExample: {
        problem: 'Sebuah tabel menunjukkan data kelulusan siswa: Sekolah A lulus 90 dari 100 siswa (90%). Sekolah B lulus 180 dari 300 siswa (60%). Manakah pernyataan yang BENAR?\n(A) Jumlah siswa yang tidak lulus di Sekolah A lebih banyak dari Sekolah B.\n(B) Persentase kelulusan Sekolah A lebih tinggi dari Sekolah B meskipun jumlah siswa yang lulus di Sekolah B lebih banyak.',
        identify: 'Sekolah A: lulus 90 siswa, tidak lulus 10 siswa, persentase 90%. Sekolah B: lulus 180 siswa, tidak lulus 120 siswa, persentase 60%.',
        process: 'Persentase kelulusan A (90%) > B (60%). Jumlah siswa lulus B (180) > A (90). Pernyataan (B) sesuai 100% dengan data tabel.',
        answer: 'Pernyataan (B) benar.'
      },
      drills: [
        {
          q: 'Pernyataan yang PALING SESUAI dengan tren grafik yang menunjukkan penurunan angka stunting dari 24% pada 2021 menjadi 21% pada 2022, 17% pada 2023, dan 14% pada 2024 adalah...',
          options: [
            'Angka stunting mengalami kenaikan drastis dalam empat tahun terakhir.',
            'Angka stunting mengalami penurunan konsisten setiap tahun dari 2021 hingga 2024.',
            'Target penurunan stunting selalu gagal tercapai.',
            'Jumlah balita di Indonesia berkurang drastis pada tahun 2024.',
            'Penurunan stunting tercepat terjadi antara tahun 2021 dan 2022.'
          ],
          ans: 1,
          explanation: 'Data 24% -> 21% -> 17% -> 14% menunjukkan tren penurunan yang konsisten secara berturut-turut setiap tahun.'
        },
        {
          q: 'Tabel memuat data ekspor kopi Indonesia: Tahun 2022 (nilai 300 juta USD, volume 100 ribu ton). Tahun 2023 (nilai 400 juta USD, volume 100 ribu ton). Kesimpulan yang paling logis adalah...',
          options: [
            'Volume produksi kopi menurun drastis.',
            'Harga rata-rata kopi per ton di pasar ekspor mengalami kenaikan pada tahun 2023.',
            'Semua petani kopi beralih profesi pada tahun 2023.',
            'Indonesia mengimpor kopi dalam jumlah besar.',
            'Nilai ekspor turun sebesar 100 juta USD.'
          ],
          ans: 1,
          explanation: 'Volume tetap sama (100 ribu ton) namun nilai uang naik dari 300 juta menjadi 400 juta USD, yang membuktikan harga jual rata-rata per ton kopi mengalami kenaikan.'
        },
        {
          q: 'Fungsi utama penyajian tabel atau grafik di dalam sebuah wacana berita sains adalah...',
          options: [
            'Membuat tampilan halaman tampak penuh dan ramai.',
            'Menyajikan bukti data numerik empiris yang terstruktur untuk memverifikasi klaim narasi artikel.',
            'Menggantikan peran seluruh teks bacaan.',
            'Mempersulit pemahaman pembaca awam.',
            'Menghemat penggunaan kertas cetak majalah.'
          ],
          ans: 1,
          explanation: 'Data visual berfungsi sebagai instrumen verifikasi empiris yang memvalidasi kebenaran narasi teks.'
        }
      ],
      flashcards: [
        { front: 'Di mana letak informasi satuan unit tabel?', back: 'Pada kepala kolom (header) atau catatan kaki (footnote) di bawah tabel.' },
        { front: 'Apa beda kenaikan persentase vs kenaikan absolut?', back: 'Kenaikan persentase dihitung relatif terhadap basis awal (%), absolut adalah selisih angka mutlak.' },
        { front: 'Apa arti garis grafik mendatar datar?', back: 'Kondisi stagnan (tidak mengalami kenaikan maupun penurunan).' },
        { front: 'Bagaimana cara cepat mencocokkan opsi dengan tabel?', back: 'Pindai angka/nama pada opsi, lalu kunci sel baris dan kolom yang bersesuaian di tabel.' },
        { front: 'Berapa target waktu per soal tabel literasi?', back: 'Maksimal 85 detik.' }
      ],
      commonMistakes: [
        'Mengabaikan catatan kaki tabel (*dalam jutaan rupiah).',
        'Salah membaca baris kategori yang posisinya berdekatan.'
      ]
    },
    {
      id: 'lbi-10',
      subtest: 'LBI',
      day: 5,
      title: 'Evaluasi Bias Informasi, Asumsi Tersembunyi & Simpulan Sintesis',
      timeTarget: '85 dtk/soal',
      oneLiner: 'Mendeteksi kepentingan tersembunyi penulis dan menyusun simpulan sintesis tingkat tinggi.',
      summary: 'Modul pamungkas LBI melatih literasi tingkat tinggi: mendeteksi bias kepentingan sponsor dalam artikel, mengenali asumsi terselubung, dan merumuskan simpulan sintesis komprehensif dari wacana multi-sudut pandang.',
      coreConcept: '1) Bias Informasi: Terjadi saat penulis sengaja menyembunyikan data negatif suatu produk/kebijakan dan hanya membeberkan sisi positifnya (cherry-picking data) karena adanya konflik kepentingan komersial atau politik. 2) Simpulan Sintesis: Menggabungkan dua fakta yang tampak bertolak belakang menjadi satu pemahaman baru yang utuh dan berimbang (contoh: "Teknologi A sangat bermanfaat untuk efisiensi, namun membutuhkan regulasi ketat agar tidak menimbulkan ketimpangan sosial").',
      formulaBox: '1. Ciri Artikel Mengandung Bias Komersial/Politik:\n   - Hanya memaparkan keunggulan tanpa menyebutkan risiko atau efek samping.\n   - Menyerang pihak kompetitor secara tidak proporsional.\n   - Mengabaikan studi tandingan yang sudah terakreditasi luas.\n\n2. Rumus Simpulan Sintesis Seimbang:\n   Meskipun [Aspek Positif / Peluang X], [Aspek Negatif / Syarat Y] tetap wajib dipenuhi agar [Tujuan Akhir Z] tercapai.',
      trapRadar: 'Jebakan Utama: Memilih simpulan yang berat sebelah (hanya memuji 100% atau mencaci 100%) pada wacana yang sebenarnya menyajikan perdebatan dilematis dari dua kubu.',
      steps: [
        'Cermati apakah penulis memberikan ruang yang adil bagi sudut pandang tandingan.',
        'Waspadai kalimat yang menutupi kelemahan fatal dengan alasan generalisasi kabur.',
        'Pilih opsi simpulan sintesis yang merangkul kedua sisi secara proporsional dan bijaksana.'
      ],
      guidedExample: {
        problem: 'Sebuah artikel yang diterbitkan di buletin industri makanan manis menyatakan bahwa pemanis buatan X 100% aman dikonsumsi harian tanpa batas, tanpa mencantumkan satupun peringatan medis mengenai batas asupan harian (ADI). Penulis menyimpulkan masyarakat dapat mengonsumsi produk tersebut tanpa cemas. Evaluasi kritis terhadap artikel tersebut adalah...',
        identify: 'Artikel mengklaim 100% aman tanpa batas, menutupi batas aman medis (ADI).',
        process: 'Penulis menunjukkan bias komersial yang nyata dengan melakukan cherry-picking dan menutupi fakta risiko kesehatan untuk kepentingan pemasaran produk.',
        answer: 'Artikel menunjukkan bias informasi yang menyesatkan karena mengabaikan ambang batas asupan harian (ADI) demi kepentingan promosi komersial.'
      },
      drills: [
        {
          q: 'Teks wacana memaparkan bahwa program makan bergizi gratis meningkatkan kehadiran siswa di sekolah pedalaman, namun menghadapi kendala rantai pasok bahan pangan segar dan risiko korupsi anggaran. Simpulan SINTESIS yang paling berimbang adalah...',
          options: [
            'Program makan bergizi gratis harus segera dihentikan karena biayanya boros.',
            'Program makan bergizi gratis terbukti efektif meningkatkan kehadiran siswa, tetapi keberlanjutannya sangat bergantung pada transparansi rantai pasok dan tata kelola anggaran.',
            'Korupsi tidak mungkin terjadi dalam program bantuan sosial pendidikan.',
            'Siswa pedalaman tidak membutuhkan makanan bergizi melainkan buku cetak.',
            'Semua sekolah pedalaman telah menikmati program makan gratis dengan lancar.'
          ],
          ans: 1,
          explanation: 'Opsi B secara sintesis merangkul kedua sisi secara objektif: mengakui manfaat kehadirannya sekaligus menekankan prasyarat tata kelola rantai pasok dan anggaran.'
        },
        {
          q: 'Tindakan yang menunjukkan sikap pembaca kritis saat menemukan artikel viral di internet adalah...',
          options: [
            'Langsung menyebarkan ke grup percakapan keluarga.',
            'Mempercayai kebenarannya hanya karena disukai oleh ribuan akun.',
            'Memeriksa kredibilitas penulis, tanggal terbit, dan memverifikasi klaim ke sumber-sumber rujukan primer yang terakreditasi.',
            'Menolak semua informasi yang tidak disukai.',
            'Menganggap semua berita online adalah rekayasa.'
          ],
          ans: 2,
          explanation: 'Sikap verifikasi silang (cross-check) ke sumber primer terakreditasi adalah pilar utama literasi digital kritis.'
        },
        {
          q: 'Manakah tanda khas adanya bias selektif (cherry-picking) dalam sebuah tulisan ilmiah populer?',
          options: [
            'Penulis mencantumkan daftar pustaka yang sangat panjang.',
            'Penulis hanya memilih sampel data keberhasilan yang mendukung teorinya dan sengaja menyembunyikan data kegagalan eksperimen.',
            'Penulis menggunakan diagram batang berwarna biru.',
            'Penulis menyajikan rata-rata matematika yang benar.',
            'Penulis menulis dalam bahasa Indonesia baku.'
          ],
          ans: 1,
          explanation: 'Cherry-picking secara definisi adalah memilih sebagian fakta yang menguntungkan hipotesis sendiri dan mengabaikan data bukti yang berlawanan.'
        }
      ],
      flashcards: [
        { front: 'Apa yang dimaksud Cherry-Picking data?', back: 'Hanya memilih data yang mendukung pendapat sendiri dan menyembunyikan data yang membantahnya.' },
        { front: 'Apa itu Simpulan Sintesis?', back: 'Kesimpulan yang mengintegrasikan dua sudut pandang berbeda menjadi satu pemahaman baru yang berimbang.' },
        { front: 'Bagaimana mendeteksi bias komersial dalam teks?', back: 'Periksa apakah penulis menutupi efek samping/kelemahan produk demi keuntungan sponsor.' },
        { front: 'Mengapa simpulan ekstrem hitam-putih sering keliru?', back: 'Karena wacana ilmiah dunia nyata hampir selalu memiliki nuansa trade-off (kelebihan dan kekurangan).' },
        { front: 'Berapa target waktu per soal evaluasi bias literasi?', back: 'Maksimal 85 detik.' }
      ],
      commonMistakes: [
        'Memilih simpulan yang memihak secara ekstrem pada teks yang memperdebatkan dua sisi.',
        'Menerima klaim ilmiah tanpa memeriksa apakah ada konflik kepentingan sponsor.'
      ]
    }
  ];

  window.UTBK_MODULES.push(...LBI_MODULES);
})();
