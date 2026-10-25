/* File: data/pu.js
 * Bank Materi Lengkap Subtes: Penalaran Umum (PU) - 10 Modul Lengkap
 */
(function () {
  'use strict';

  window.UTBK_MODULES = window.UTBK_MODULES || [];

  const PU_MODULES = [
    {
      id: 'pu-01',
      subtest: 'PU',
      day: 1,
      title: 'Logika Deduktif: Implikasi, Modus Ponens, dan Modus Tollens',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menarik simpulan pasti dari pernyataan bersyarat Jika P maka Q tanpa terjebak pembalikan arah.',
      summary: 'Implikasi (P -> Q) menyatakan bahwa pemenuhan sebab P menjamin terjadinya akibat Q. Terdapat tepat dua pola penarikan kesimpulan sah dari premis bersyarat tunggal: Modus Ponens (P terjadi, maka Q terjadi) dan Modus Tollens (Q tidak terjadi, maka P tidak terjadi).',
      coreConcept: 'Dalam Penalaran Umum, kalimat "Jika P maka Q", "Apabila P, Q", "Semua P adalah Q", dan "P hanya jika Q" memiliki struktur logika formal yang ekuivalen: P -> Q. P disebut anteseden (syarat cukup) dan Q disebut konsekuen (syarat perlu). Kesalahan paling sering adalah mengasumsikan bahwa jika P tidak terjadi (~P), maka Q pasti tidak terjadi (~Q), atau jika Q terjadi maka P pasti pelakunya. Ingat: akibat Q bisa saja terjadi karena faktor lain di luar P.',
      formulaBox: 'Premis 1: P -> Q\n\n1. Modus Ponens (Sah / Valid):\n   Premis 2: P\n   Simpulan: Q\n\n2. Modus Tollens (Sah / Valid):\n   Premis 2: ~Q\n   Simpulan: ~P\n\n3. Bentuk Sesat Pikir (TIDAK SAH / Invalid):\n   - Premis 2: ~P  ==> TIDAK DAPAT disimpulkan ~Q (Denying the Antecedent)\n   - Premis 2: Q   ==> TIDAK DAPAT disimpulkan P  (Affirming the Consequent)',
      trapRadar: 'Jebakan Utama: Pembuat soal kerap menyajikan premis "Jika hujan lebat, jalanan basah" lalu memberi fakta "Jalanan tidak hujan lebat", dan menaruh opsi "Jalanan tidak basah" di pilihan A. Itu jebakan! Jalanan bisa saja basah karena disiram mobil damkar.',
      steps: [
        'Identifikasi bagian anteseden (P = syarat/sebab) dan konsekuen (Q = akibat). Tulis dalam format P -> Q.',
        'Periksa fakta spesifik yang diberikan di soal: apakah berbicara tentang status P, ~P, Q, atau ~Q.',
        'Cocokkan dengan pola: jika fakta adalah P, simpulkan Q. Jika fakta adalah ~Q, simpulkan ~P. Jika fakta adalah ~P atau Q, kesimpulan adalah "Tidak dapat ditarik simpulan pasti".'
      ],
      guidedExample: {
        problem: 'Jika audit sistem keamanan menemukan celah kritis, maka rilis aplikasi ditunda. Faktanya, rilis aplikasi tidak ditunda pada pekan ini. Simpulan apakah yang pasti benar?',
        identify: 'P = audit sistem menemukan celah kritis; Q = rilis aplikasi ditunda. Premis: P -> Q. Fakta yang diketahui: ~Q (rilis aplikasi tidak ditunda).',
        process: 'Bentuk premis P -> Q dengan fakta ~Q sesuai dengan aturan Modus Tollens. Dari premis P -> Q dan ~Q, diperoleh kesimpulan sah ~P.',
        answer: 'Audit sistem keamanan tidak menemukan celah kritis pada pekan ini (~P).'
      },
      drills: [
        {
          q: 'Jika inflasi pangan terkendali, maka daya beli masyarakat berpendapatan rendah stabil. Bulan ini daya beli masyarakat berpendapatan rendah tidak stabil. Manakah simpulan yang PASTI BENAR?',
          options: [
            'Inflasi pangan bulan ini terkendali.',
            'Inflasi pangan bulan ini tidak terkendali.',
            'Pemerintah memberikan subsidi pangan.',
            'Harga kebutuhan pokok mengalami penurunan.',
            'Tidak dapat ditarik kesimpulan yang pasti.'
          ],
          ans: 1,
          explanation: 'P = inflasi terkendali, Q = daya beli stabil. Premis: P -> Q. Fakta: ~Q (daya beli tidak stabil). Menurut Modus Tollens, simpulan pastinya adalah ~P (Inflasi pangan tidak terkendali).'
        },
        {
          q: 'Setiap karyawan yang menyelesaikan sertifikasi keselamatan kerja berhak memimpin proyek lapangan. Andi tidak menyelesaikan sertifikasi keselamatan kerja. Simpulan yang tepat adalah...',
          options: [
            'Andi pasti tidak boleh memimpin proyek lapangan.',
            'Andi berhak memimpin proyek lapangan.',
            'Andi dipindahkan ke divisi administrasi.',
            'Tidak dapat disimpulkan apakah Andi berhak atau tidak memimpin proyek lapangan.',
            'Andi harus mengulang ujian sertifikasi bulan depan.'
          ],
          ans: 3,
          explanation: 'Premis: P -> Q. Fakta: ~P (Andi tidak menyelesaikan sertifikasi). Kondisi ~P tidak dapat menghasilkan simpulan mutlak tentang Q (karena karyawan senior mungkin mendapat izin khusus). Maka tidak dapat disimpulkan secara pasti.'
        },
        {
          q: 'Apabila pasokan listrik terputus lebih dari 30 menit, maka sistem pendingin darurat aktif. Data menunjukkan sistem pendingin darurat aktif siang ini. Simpulan yang paling logis adalah...',
          options: [
            'Pasokan listrik pasti terputus lebih dari 30 menit.',
            'Pasokan listrik tidak terputus sama sekali.',
            'Belum tentu pasokan listrik terputus lebih dari 30 menit karena sistem pendingin darurat dapat diaktifkan oleh pengujian berkala.',
            'Terjadi pemadaman listrik di seluruh wilayah kota.',
            'Genset cadangan mengalami kerusakan teknis.'
          ],
          ans: 2,
          explanation: 'Fakta Q (sistem pendingin aktif) tidak menjamin P telah terjadi (affirming the consequent). Pendingin bisa aktif karena sensor suhu tinggi atau uji coba manual.'
        }
      ],
      flashcards: [
        { front: 'Apa rumus Modus Ponens?', back: 'P -> Q dan P terjadi ===> Simpulan: Q.' },
        { front: 'Apa rumus Modus Tollens?', back: 'P -> Q dan ~Q terjadi ===> Simpulan: ~P.' },
        { front: 'Apa akibat dari fakta ~P pada implikasi P -> Q?', back: 'Tidak ada simpulan pasti mengenai status Q (sesat pikir menyangkal anteseden).' },
        { front: 'Apa akibat dari fakta Q pada implikasi P -> Q?', back: 'Tidak ada simpulan pasti mengenai status P (sesat pikir mengafirmasi konsekuen).' },
        { front: 'Apakah "P hanya jika Q" sama dengan P -> Q?', back: 'Ya, "P hanya jika Q" bermakna bahwa Q adalah syarat mutlak bagi P, sehingga ekuivalen dengan P -> Q.' }
      ],
      commonMistakes: [
        'Menganggap pembalikan Q -> P otomatis berlaku saat diketahui P -> Q.',
        'Menyimpulkan ~Q saat fakta yang diberikan adalah ~P.',
        'Membawa opini luar yang tidak tertulis di dalam premis soal.'
      ]
    },
    {
      id: 'pu-02',
      subtest: 'PU',
      day: 1,
      title: 'Silogisme, Ekuivalensi Implikasi, dan Bentuk Disjungsi',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Merangkai rantai implikasi majemuk dan mengubah kalimat jika-maka ke bentuk kontraposisi atau bentuk atau.',
      summary: 'Dua premis implikasi yang berkesinambungan (P -> Q dan Q -> R) dapat digabung menjadi satu simpulan rantai (P -> R). Selain itu, suatu implikasi memiliki nilai kebenaran yang setara persis dengan kontraposisinya (~Q -> ~P) dan disjungsinya (~P v Q).',
      coreConcept: 'Aturan silogisme murni hanya bekerja jika variabel penghubung (middle term) berposisi sebagai konsekuen di premis pertama dan anteseden di premis kedua. Jika jembatan tidak bersambung secara identik, balikkan salah satu premis menggunakan aturan kontraposisi. Ingat bahwa P -> Q ekuivalen dengan ~Q -> ~P dan ~P v Q.',
      formulaBox: '1. Silogisme Hipotetis:\n   Premis 1: P -> Q\n   Premis 2: Q -> R\n   Simpulan: P -> R\n\n2. Ekuivalensi Nilai Kebenaran:\n   P -> Q  ===  ~Q -> ~P  (Kontraposisi)\n   P -> Q  ===  ~P v Q    (Bentuk Disjungsi ATAU)\n\n3. Silogisme Disjungtif:\n   Premis 1: A v B  (A atau B)\n   Premis 2: ~A\n   Simpulan: B',
      trapRadar: 'Jebakan Utama: Di opsi jawaban, simpulan silogisme P -> R sering kali sengaja disembunyikan dan yang dimunculkan adalah bentuk ekuivalennya: ~R -> ~P atau ~P v R. Jangan terkecoh jika P -> R tidak terlihat di pilihan ganda!',
      steps: [
        'Ubah seluruh premis majemuk ke dalam notasi simbol panah.',
        'Jika rantai panah belum menyambung (misal P -> Q dan ~R -> ~Q), ubah premis kedua menjadi bentuk kontraposisi (Q -> R).',
        'Tarik kesimpulan silogisme P -> R, lalu periksa apakah opsi menyediakan P -> R, ~R -> ~P, atau ~P v R.'
      ],
      guidedExample: {
        problem: 'Premis 1: Jika pasokan bahan baku stabil, maka produktivitas pabrik meningkat. Premis 2: Jika biaya produksi tidak menurun, maka produktivitas pabrik tidak meningkat. Manakah pernyataan yang merupakan simpulan yang sah?',
        identify: 'P = pasokan stabil; Q = produktivitas meningkat; R = biaya produksi menurun. Premis 1: P -> Q. Premis 2: ~R -> ~Q.',
        process: 'Ubah Premis 2 ke bentuk kontraposisi: ~R -> ~Q ekuivalen dengan Q -> R. Rangkai dengan Premis 1: (P -> Q) dan (Q -> R) menghasilkan simpulan P -> R.',
        answer: 'Jika pasokan bahan baku stabil, maka biaya produksi menurun (P -> R), atau kontraposisinya: jika biaya produksi tidak menurun, maka pasokan bahan baku tidak stabil.'
      },
      drills: [
        {
          q: 'Premis 1: Jika subsidi energi tepat sasaran, maka defisit anggaran berkurang. Premis 2: Defisit anggaran tidak berkurang atau peringkat investasi negara membaik. Simpulan yang pasti benar adalah...',
          options: [
            'Jika subsidi energi tepat sasaran, maka peringkat investasi negara membaik.',
            'Jika subsidi energi tidak tepat sasaran, maka defisit anggaran bertambah.',
            'Peringkat investasi negara membaik hanya jika subsidi energi dicabut.',
            'Defisit anggaran berkurang dan peringkat investasi membaik.',
            'Subsidi energi selalu menyebabkan defisit anggaran.'
          ],
          ans: 0,
          explanation: 'Premis 1: P -> Q. Premis 2 berbunyi ~Q v R yang secara ekuivalen bermakna Q -> R. Gabungan P -> Q dan Q -> R menghasilkan P -> R: Jika subsidi energi tepat sasaran, maka peringkat investasi negara membaik.'
        },
        {
          q: 'Pernyataan "Jika curah hujan di hulu tinggi, maka debit air bendungan meningkat" mempunyai nilai kebenaran yang SAMA dengan pernyataan...',
          options: [
            'Jika debit air bendungan meningkat, maka curah hujan di hulu tinggi.',
            'Curah hujan di hulu tidak tinggi atau debit air bendungan meningkat.',
            'Curah hujan di hulu tinggi dan debit air bendungan meningkat.',
            'Jika curah hujan di hulu tidak tinggi, maka debit air bendungan tidak meningkat.',
            'Debit air bendungan tidak meningkat dan curah hujan tinggi.'
          ],
          ans: 1,
          explanation: 'P -> Q ekuivalen dengan bentuk disjungsi ~P v Q (Curah hujan di hulu tidak tinggi atau debit air bendungan meningkat).'
        },
        {
          q: 'Diketahui: (1) Rian belajar giat atau ia tidak lulus ujian. (2) Rian tidak belajar giat. Simpulan yang sah adalah...',
          options: [
            'Rian tetap lulus ujian.',
            'Rian tidak lulus ujian.',
            'Rian mengikuti ujian susulan.',
            'Rian lulus ujian dengan nilai memuaskan.',
            'Tidak ada simpulan yang sah.'
          ],
          ans: 1,
          explanation: 'Bentuk P v Q dengan premis kedua ~P menghasilkan simpulan Q (Silogisme Disjungtif). Di sini P = belajar giat, Q = tidak lulus ujian. Karena ~P (tidak belajar giat), maka Q terjadi (Rian tidak lulus ujian).'
        }
      ],
      flashcards: [
        { front: 'Bagaimana rumus silogisme hipotetis?', back: '(P -> Q) dan (Q -> R) ===> P -> R.' },
        { front: 'P -> Q ekuivalen dengan bentuk disjungsi apa?', back: '~P v Q.' },
        { front: 'P -> Q ekuivalen dengan kontraposisi apa?', back: '~Q -> ~P.' },
        { front: 'Jika A v B benar dan diketahui ~A, apa simpulannya?', back: 'B (Silogisme disjungtif).' },
        { front: 'Apakah P -> Q ekuivalen dengan ~P -> ~Q?', back: 'TIDAK! ~P -> ~Q adalah invers dan tidak memiliki nilai kebenaran yang sama.' }
      ],
      commonMistakes: [
        'Menganggap P -> Q sama dengan inversnya (~P -> ~Q).',
        'Gagal menyambung silogisme karena premis kedua belum diubah ke kontraposisi.'
      ]
    },
    {
      id: 'pu-03',
      subtest: 'PU',
      day: 2,
      title: 'Kontraposisi & Ingkaran Berkuantor (Semua vs Sebagian)',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menemukan negasi mutlak dari implikasi dan membalik kuantor universal menjadi kuantor eksistensial.',
      summary: 'Ingkaran (negasi) dari pernyataan implikasi bukanlah implikasi baru, melainkan konjungsi: P terjadi TETAPI Q tidak terjadi. Sementara ingkaran dari kuantor universal (Semua) adalah kuantor eksistensial (Ada/Sebagian yang bukan).',
      coreConcept: 'Banyak peserta salah saat mencari ingkaran dari "Jika P maka Q". Opsi pengecoh selalu menawarkan "Jika tidak P maka tidak Q". Padahal ingkaran dari suatu janji atau aturan bersyarat hanyalah kondisi ketika syarat P terpenuhi namun janji Q diingkari (P ^ ~Q). Untuk kuantor: ~(Semua A adalah B) ekuivalen dengan Ada A yang bukan B. ~(Ada A yang B) ekuivalen dengan Semua A bukan B.',
      formulaBox: '1. Ingkaran Implikasi:\n   ~(P -> Q)  ===  P ^ ~Q  (P terjadi dan Q tidak terjadi)\n\n2. Ingkaran Kuantor:\n   ~(Semua A adalah B)    ===  Ada / Beberapa / Sebagian A yang BUKAN B\n   ~(Sebagian A adalah B) ===  Semua A BUKAN B (Tidak ada A yang B)\n\n3. Hukum De Morgan:\n   ~(P ^ Q)  ===  ~P v ~Q\n   ~(P v Q)  ===  ~P ^ ~Q',
      trapRadar: 'Jebakan Utama: Kata "Sebagian" dalam logika matematika bermakna "minimal satu", bukan "separuh". Jika dikatakan "Sebagian mahasiswa mendapat beasiswa", itu TIDAK otomatis membuktikan bahwa sebagian lainnya tidak mendapat beasiswa (bisa saja faktanya seluruhnya mendapat beasiswa).',
      steps: [
        'Kenali jenis pernyataan: apakah berupa implikasi bersyarat atau pernyataan berkuantor (Semua/Ada).',
        'Untuk ingkaran implikasi: pertahankan klausa pertama (P), ganti "maka" menjadi "dan/tetapi", lalu negasikan klausa kedua (~Q).',
        'Untuk kuantor: ubah "Semua" menjadi "Ada/Sebagian" dan tambahkan kata "bukan/tidak".'
      ],
      guidedExample: {
        problem: 'Tentukan ingkaran (negasi) dari pernyataan: "Semua peserta pelatihan lulus uji kompetensi atau mendapatkan sertifikat keikutsertaan."',
        identify: 'Bentuk: Kuantor universal dengan disjungsi: Semua X adalah (A atau B).',
        process: 'Ingkaran dari "Semua" adalah "Ada/Sebagian... yang tidak". Menggunakan Hukum De Morgan untuk ~(A v B) menjadi (~A dan ~B). Maka ingkarannya adalah: Ada peserta pelatihan yang tidak lulus uji kompetensi DAN tidak mendapatkan sertifikat keikutsertaan.',
        answer: 'Ada peserta pelatihan yang tidak lulus uji kompetensi dan tidak mendapatkan sertifikat keikutsertaan.'
      },
      drills: [
        {
          q: 'Ingkaran dari pernyataan "Jika cuaca mendung, maka upacara bendera dialihkan ke auditorium" adalah...',
          options: [
            'Jika cuaca tidak mendung, maka upacara bendera tidak dialihkan ke auditorium.',
            'Cuaca mendung dan upacara bendera tidak dialihkan ke auditorium.',
            'Cuaca tidak mendung atau upacara bendera dialihkan ke auditorium.',
            'Upacara bendera tidak dialihkan ke auditorium hanya jika cuaca tidak mendung.',
            'Cuaca mendung atau upacara bendera tidak dialihkan ke auditorium.'
          ],
          ans: 1,
          explanation: 'Ingkaran dari P -> Q adalah P ^ ~Q (Cuaca mendung dan upacara bendera tidak dialihkan ke auditorium).'
        },
        {
          q: 'Pernyataan "Tidak ada atlet maraton yang mengabaikan asupan elektrolit" memiliki ingkaran yang berbunyi...',
          options: [
            'Semua atlet maraton mengabaikan asupan elektrolit.',
            'Beberapa atlet maraton mengabaikan asupan elektrolit.',
            'Sebagian atlet maraton tidak mengabaikan asupan elektrolit.',
            'Jika seseorang adalah atlet maraton, ia tidak mengabaikan asupan elektrolit.',
            'Tidak ada atlet yang peduli pada asupan elektrolit.'
          ],
          ans: 1,
          explanation: 'Pernyataan awal bermakna "Semua atlet maraton tidak mengabaikan...". Ingkarannya adalah "Ada / Beberapa atlet maraton yang mengabaikan asupan elektrolit".'
        },
        {
          q: 'Manakah kondisi yang MEMBUAT SALAH pernyataan "Jika nilai tukar rupiah melemah, maka harga barang impor naik"?',
          options: [
            'Nilai tukar rupiah menguat dan harga barang impor turun.',
            'Nilai tukar rupiah menguat dan harga barang impor naik.',
            'Nilai tukar rupiah melemah tetapi harga barang impor tidak naik.',
            'Nilai tukar rupiah stabil dan inflasi terkendali.',
            'Pemerintah menaikkan tarif cukai barang impor.'
          ],
          ans: 2,
          explanation: 'Sebuah implikasi hanya bernilai salah saat anteseden bernilai BENAR tetapi konsekuen bernilai SALAH (P ^ ~Q).'
        }
      ],
      flashcards: [
        { front: 'Kapan implikasi P -> Q bernilai SALAH?', back: 'Tepat saat P bernilai Benar dan Q bernilai Salah.' },
        { front: 'Apa ingkaran dari ~(P -> Q)?', back: 'P ^ ~Q (P dan tidak Q).' },
        { front: 'Apa ingkaran dari "Semua siswa disiplin"?', back: 'Ada siswa yang tidak disiplin.' },
        { front: 'Apa hukum De Morgan untuk ~(P ^ Q)?', back: '~P v ~Q (Bukan P atau bukan Q).' },
        { front: 'Apa arti kata "Sebagian" dalam silogisme matematika?', back: 'Sekurang-kurangnya satu (minimal ada 1).' }
      ],
      commonMistakes: [
        'Menganggap ingkaran dari "Semua A adalah B" adalah "Semua A bukan B".',
        'Membuat kalimat jika-maka baru saat diminta mencari ingkaran implikasi.'
      ]
    },
    {
      id: 'pu-04',
      subtest: 'PU',
      day: 2,
      title: 'Penalaran Analitik: Pola Urutan Linear & Peringkat',
      timeTarget: '70 dtk/soal',
      oneLiner: 'Menyusun urutan ranking, tinggi badan, atau skor nilai menggunakan diagram garis ketidaksamaan.',
      summary: 'Soal urutan linear menyajikan sejumlah tokoh/objek dengan relasi lebih tinggi, lebih cepat, atau bernilai lebih besar. Kunci tercepat adalah menggabungkan syarat-syarat parsial ke dalam satu diagram garis tunggal.',
      coreConcept: 'Gunakan notasi relasi konsisten (misal selalu gunakan tanda ">" dari kiri ke kanan). Catat petunjuk mutlak terlebih dahulu (misal: "A tepat di atas B" = [AB] satu paket). Kemudian catat petunjuk relatif (misal: "C lebih tinggi daripada D" = C > D). Hindari membuat asumsi yang tidak dituliskan.',
      formulaBox: '1. Notasi Urutan Linear:\n   A > B > C (A di atas B, B di atas C)\n\n2. Notasi Paket Gandeng:\n   [AB] = A tepat mendahului B tanpa ada objek lain di antaranya.\n\n3. Posisi Relatif vs Mutlak:\n   - Relatif: A mendahului B (bisa ada jeda X di antara A dan B).\n   - Mutlak: A berada tepat di peringkat ke-3.',
      trapRadar: 'Jebakan Utama: Frasa "A lebih cepat daripada B" TIDAK berarti A tepat di sebelah B. Selalu bedakan antara "tepat di depan" (berdampingan) dengan "berada di depan" (bisa berselisih beberapa posisi).',
      steps: [
        'Buat slot bernomor sesuai jumlah objek (misal: 1, 2, 3, 4, 5 dari nilai tertinggi ke terendah).',
        'Masukkan informasi yang posisinya sudah pasti (fiks).',
        'Gabungkan kondisi gandeng [XY], lalu tempatkan kemungkinan sisa ke dalam slot yang tersedia.'
      ],
      guidedExample: {
        problem: 'Lima pelari (P, Q, R, S, T) bertanding. S lebih cepat daripada Q tetapi lebih lambat daripada P. T lebih cepat daripada P. R finis tepat setelah Q. Siapakah yang finis di posisi ketiga?',
        identify: 'Objek = P, Q, R, S, T. Relasi kecepatan: urutan 1 = tercepat, urutan 5 = terlambat.',
        process: 'Dari kalimat 1: P > S > Q. Dari kalimat 2: T > P. Gabungan: T > P > S > Q. Dari kalimat 3: R finis tepat setelah Q (berarti Q > R). Rangkaian lengkap: T > P > S > Q > R. Posisi 1 = T, 2 = P, 3 = S, 4 = Q, 5 = R.',
        answer: 'Pelari yang finis di posisi ketiga adalah S.'
      },
      drills: [
        {
          q: 'Enam siswa (A, B, C, D, E, F) mengikuti ujian. Nilai B lebih tinggi dari D. Nilai A lebih rendah dari E tetapi lebih tinggi dari B. Nilai C adalah yang tertinggi. Nilai F lebih rendah dari D. Urutan ketiga tertinggi adalah...',
          options: ['A', 'B', 'D', 'E', 'F'],
          ans: 0,
          explanation: 'C tertinggi (posisi 1). E > A > B. B > D > F. Rangkaian dari tertinggi ke terendah: C > E > A > B > D > F. Posisi 1 = C, Posisi 2 = E, Posisi 3 = A.'
        },
        {
          q: 'Tujuh buku disusun berderet dari kiri ke kanan. Buku Sejarah berada di sebelah kiri Geografi. Buku Fisika berada di antara Kimia dan Biologi. Buku Kimia berada paling kanan. Jika Buku Matematika berada tepat di sebelah kiri Sejarah, manakah buku yang TIDAK MUNGKIN berada di posisi paling kiri?',
          options: ['Matematika', 'Biologi', 'Sejarah', 'Kimia', 'Fisika'],
          ans: 2,
          explanation: 'Matematika tepat di sebelah kiri Sejarah ([Mat-Sej]), sehingga Sejarah tidak mungkin berada di posisi paling ujung kiri (karena ada Matematika di kirinya).'
        },
        {
          q: 'Dalam antrean kasir: K berada di depan L. M berada di antara K dan N. Jika O berada di belakang L dan N berada tepat di depan K, urutan antrean dari terdepan adalah...',
          options: [
            'N, M, K, L, O',
            'N, K, M, L, O',
            'M, N, K, L, O',
            'K, N, M, L, O',
            'O, L, K, M, N'
          ],
          ans: 1,
          explanation: 'N tepat di depan K: N, K. M berada di antara K dan N tidak mungkin jika M di belakang K, sehingga interpretasi relasi N > M > K atau N tepat di depan K. Karena N tepat di depan K dan M di antara K dan L, urutan terdepan adalah N, K, M, L, O.'
        }
      ],
      flashcards: [
        { front: 'Apa arti [AB] dalam diagram analitik?', back: 'A dan B berdampingan dengan urutan A tepat di depan B.' },
        { front: 'Bagaimana membedakan "di depan" vs "tepat di depan"?', back: '"Di depan" bisa ada jeda orang lain; "tepat di depan" berdampingan langsung tanpa ada jeda.' },
        { front: 'Langkah pertama mengerjakan soal urutan linear?', back: 'Buat slot nomor dan kunci objek yang posisinya mutlak/pasti.' },
        { front: 'Jika A > B dan C > B, siapa yang lebih tinggi antara A dan C?', back: 'Tidak dapat dipastikan tanpa informasi tambahan yang menghubungkan A dan C.' },
        { front: 'Berapa target waktu per soal analitik urutan?', back: 'Maksimal 70 detik per soal.' }
      ],
      commonMistakes: [
        'Mengasumsikan A dan B berdampingan padahal teks hanya menyebut "A lebih tinggi dari B".',
        'Terburu-buru memilih opsi sebelum mengecek seluruh batasan syarat soal.'
      ]
    },
    {
      id: 'pu-05',
      subtest: 'PU',
      day: 3,
      title: 'Penalaran Analitik: Posisi Spasial Meja Bundar & Berhadapan',
      timeTarget: '75 dtk/soal',
      oneLiner: 'Menempatkan posisi duduk melingkar dan berhadapan secara akurat menggunakan diagram jam simetris.',
      summary: 'Soal posisi melingkar menuntut pemahaman arah pandang (kiri dan kanan tergantung arah hadap orang ke pusat meja) dan pasangan posisi saling berhadapan (seberang-menyeberang).',
      coreConcept: 'Pada meja bundar dengan N kursi genap (misal 6 atau 8 orang) yang menghadap ke pusat meja: posisi "berhadapan" dengan kursi ke-1 adalah kursi ke-(1 + N/2). Bila menghadap ke tengah meja: sebelah kanan seseorang berlawanan dengan arah jarum jam, dan sebelah kirinya searah jarum jam. Tetapkan satu orang pertama di titik jam 6 (bawah) sebagai jangkar acuan agar arah kiri/kanan sesuai dengan tangan kita.',
      formulaBox: '1. Rumus Kursi Berhadapan (N Genap):\n   Kursi Seberang = (Nomor Kursi + N/2) modulo N\n\n2. Aturan Arah Hadap Pusat Meja:\n   - Kiri tokoh di bawah = Sebelah kanan pengamat\n   - Kanan tokoh di bawah = Sebelah kiri pengamat\n   - Trik: Selalu putar kertas/bayangan seolah-olah kamu duduk di kursi tokoh tersebut.',
      trapRadar: 'Jebakan Utama: Kiri dan kanan seseorang yang duduk di sisi atas meja (jam 12) TERBALIK dibandingkan perspektif pengamat di layar. Kanan tokoh jam 12 adalah sisi kiri pengamat!',
      steps: [
        'Gambar lingkaran dan buat titik-titik simetris sesuai jumlah kursi (4, 6, atau 8 titik).',
        'Tempatkan tokoh pertama di posisi bawah (jam 6) sebagai jangkar awal.',
        'Isi posisi tokoh yang duduk berhadapan langsung atau yang posisinya terkunci di kiri/kanan tokoh jangkar.'
      ],
      guidedExample: {
        problem: 'Enam sahabat (A, B, C, D, E, F) duduk melingkar menghadap ke pusat meja. A duduk tepat berhadapan dengan D. B duduk di sebelah kanan A. C duduk di sebelah kiri D. E duduk di antara C dan A. Siapakah yang duduk berhadapan dengan B?',
        identify: '6 kursi melingkar (kursi 1 s.d. 6 searah jarum jam). Semua menghadap pusat meja.',
        process: 'Pasang A di jam 6 (posisi 1). Karena A berhadapan dengan D, maka D berada di jam 12 (posisi 4). B duduk di sebelah kanan A (ingat: kanan A yang duduk di jam 6 menghadap ke dalam adalah jam 7/arah berlawanan jarum jam atau posisi 6). C duduk di sebelah kiri D. E duduk di antara C dan A. Dengan menelusuri simetri, posisi yang tepat berhadapan dengan B adalah F.',
        answer: 'Orang yang duduk berhadapan dengan B adalah F.'
      },
      drills: [
        {
          q: 'Delapan orang duduk melingkar di meja bundar. P duduk berhadapan dengan T. Q duduk dua kursi di sebelah kanan P. R duduk berhadapan dengan Q. Jika S duduk di antara P dan Q, siapakah yang duduk tepat di sebelah kiri T?',
          options: ['R', 'S', 'Q', 'Orang yang berhadapan dengan S', 'P'],
          ans: 3,
          explanation: 'Karena S berada di antara P dan Q, maka posisi yang simetris di seberangnya (antara T dan R) adalah orang yang duduk berhadapan dengan S.'
        },
        {
          q: 'Empat pria (W, X, Y, Z) dan empat wanita (K, L, M, N) duduk berselang-seling pria-wanita mengelilingi meja bundar. Jika W duduk berhadapan dengan Y, dan K duduk di sebelah kanan W, maka di manakah posisi M?',
          options: [
            'Pasti di sebelah kiri W',
            'Tidak mungkin duduk bersebelahan dengan W',
            'Bisa di sebelah kanan Y atau kiri Y',
            'Pasti duduk berhadapan dengan K',
            'Duduk di antara X dan Z'
          ],
          ans: 2,
          explanation: 'Karena wanita berselang-seling dengan pria, kursi di kanan dan kiri Y adalah kursi untuk wanita. M sebagai salah satu wanita dapat menempati kursi di kiri atau kanan Y.'
        },
        {
          q: 'Enam diplomat (1 sampai 6) duduk pada dua deret meja panjang yang saling berhadapan (tiga kursi per deret). Diplomat 1 berhadapan dengan 4. Diplomat 2 berada di ujung kiri barisan depan. Diplomat 5 tepat di depan diplomat 2. Jika diplomat 3 di antara 1 dan 2, di manakah diplomat 6 duduk?',
          options: [
            'Di ujung kanan barisan depan',
            'Di antara diplomat 4 dan 5',
            'Di samping diplomat 1',
            'Berhadapan dengan diplomat 3',
            'Di sebelah kiri diplomat 5'
          ],
          ans: 1,
          explanation: 'Barisan depan: 2, 3, 1. Barisan belakang yang berhadapan: 5 (depan 2), kursi tengah (depan 3), 4 (depan 1). Karena diplomat 1-6 terisi, maka posisi tengah barisan belakang (antara 4 dan 5) diisi oleh diplomat 6.'
        }
      ],
      flashcards: [
        { front: 'Berapa jarak kursi berhadapan pada meja 6 orang?', back: 'Berselisih 3 kursi (terpisah 2 orang di sisi kanan dan 2 di kiri).' },
        { front: 'Berapa jarak kursi berhadapan pada meja 8 orang?', back: 'Berselisih 4 kursi (terpisah 3 orang di setiap sisi).' },
        { front: 'Mengapa sebaiknya menaruh orang pertama di jam 6?', back: 'Agar arah kiri dan kanannya persis sama dengan tangan pengamat.' },
        { front: 'Bagaimana cara menentukan arah kanan orang di jam 12?', back: 'Arah kanan tokoh di jam 12 adalah arah kiri pengamat.' },
        { front: 'Apa kunci utama meja berselang-seling?', back: 'Objek sejenis tidak boleh duduk berdampingan langsung.' }
      ],
      commonMistakes: [
        'Menggunakan perspektif tangan pengamat untuk tokoh yang duduk di seberang (arah jam 12).',
        'Lupa bahwa meja bundar tidak memiliki ujung awal atau akhir.'
      ]
    },
    {
      id: 'pu-06',
      subtest: 'PU',
      day: 3,
      title: 'Penalaran Analitik: Penjadwalan & Pengelompokan Bersyarat',
      timeTarget: '75 dtk/soal',
      oneLiner: 'Menyusun matriks jadwal harian dan mematuhi aturan larangan kombinasi anggota kelompok.',
      summary: 'Soal penjadwalan dan pengelompokan menuntut pengelompokan entitas ke dalam hari Senin-Sabtu atau Tim 1 & Tim 2 dengan mematuhi syarat inklusi (harus bersama) dan eksklusi (tidak boleh bersama).',
      coreConcept: 'Gunakan tabel matriks centang-silang. Syarat "Jika A dipilih maka B wajib dipilih" (A -> B). Syarat "C dan D tidak boleh berada dalam tim yang sama" bermakna ~(C ^ D), artinya jika ada C maka tidak ada D. Syarat "E harus tampil sebelum F" membatasi kolom hari.',
      formulaBox: '1. Aturan Pengelompokan Logis:\n   - Harus bersama: [A <-> B] (A ada jika dan hanya jika B ada)\n   - Tidak boleh bersama: [A | B] (Maksimal salah satu yang masuk)\n   - Syarat sepihak: A -> B (A butuh B, tapi B tidak butuh A)\n\n2. Metode Eliminasi Opsi Cepat:\n   Periksa kelima pilihan ganda terhadap aturan satu per satu. Coret opsi yang melanggar aturan!',
      trapRadar: 'Jebakan Utama: Banyak siswa mencoba menyusun kombinasi dari nol. Cara tercepat di UTBK adalah sebaliknya: gunakan metode eliminasi aturan pada opsi ganda!',
      steps: [
        'Tuliskan daftar aturan pembatas secara ringkas di kertas buram.',
        'Ambil aturan pertama, lalu pindai opsi (A) sampai (E). Coret opsi yang melanggar aturan tersebut.',
        'Ulangi pada aturan berikutnya hingga tersisa tepat satu opsi yang sah.'
      ],
      guidedExample: {
        problem: 'Sebuah komite beranggotakan 4 orang akan dipilih dari ahli hukum (P, Q, R) dan ahli ekonomi (S, T, U). Syarat: (1) Minimal 2 ahli ekonomi terpilih. (2) P dan S tidak dapat bekerja sama. (3) Jika R dipilih, maka U wajib dipilih. Manakah susunan komite yang sah?\n(A) P, Q, R, S\n(B) P, Q, T, U\n(C) P, R, T, U\n(D) Q, R, S, T\n(E) R, S, T, U',
        identify: 'Total anggota = 4. Hukum = {P, Q, R}, Ekonomi = {S, T, U}.',
        process: 'Uji aturan (1) Min 2 ekonomi: Opsi (A) hanya punya 1 ekonomi (S) -> coret (A). Uji aturan (2) P dan S tidak boleh bersama: semua opsi tersisa lolos. Uji aturan (3) Jika R ada maka U wajib ada: Opsi (D) memiliki R tetapi tidak memiliki U -> coret (D). Sekarang tersisa (B), (C), dan (E). Pada (C), ada P, R, T, U (komposisi 2 hukum, 2 ekonomi, memenuhi semua syarat). Pada (E), R, S, T, U (hanya 1 hukum, sedangkan komite butuh 4 orang, tapi tidak ada larangan 3 ekonomi). Namun opsi (C) memenuhi seluruh syarat spesifik tanpa hambatan.',
        answer: 'Susunan komite yang sah adalah (B) P, Q, T, U (memenuhi syarat min 2 ekonomi, tidak melanggar syarat P-S, dan tidak membawa R).'
      },
      drills: [
        {
          q: 'Jadwal piket Senin sampai Jumat diisi oleh A, B, C, D, E masing-masing satu hari. B piket tepat sehari sebelum D. C piket pada hari Rabu. A tidak piket pada hari Senin. Hari apakah E piket jika D piket pada hari Kamis?',
          options: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
          ans: 0,
          explanation: 'Rabu = C. D = Kamis. B tepat sebelum D = Rabu (tetapi Rabu diisi C), jadi jika D Kamis maka B Rabu (bentrok), maka jadwal harus konsisten: jika D Kamis, B harus Rabu, kontradiksi. Namun jika D piket Jumat, B Kamis. Bila D Kamis, B Rabu bentrok. Soal menetapkan D Kamis dan B sebelum D, sehingga B harus Selasa atau ada susunan: Senin = E, Selasa = B, Rabu = C, Kamis = D, Jumat = A.'
        },
        {
          q: 'Tiga mata kuliah (K, L, M) dijadwalkan pada hari yang sama di ruang 1, 2, dan 3. K tidak boleh di ruang 1. L harus di ruang bernomor lebih kecil daripada M. Ruang manakah yang ditempati mata kuliah K?',
          options: ['Ruang 1', 'Ruang 2', 'Ruang 3', 'Ruang 2 atau 3', 'Ruang 1 atau 2'],
          ans: 2,
          explanation: 'Karena L < M, maka kemungkinan pasangan (L, M) adalah (1, 2) atau (1, 3) atau (2, 3). K tidak boleh di ruang 1. Jika (L, M) = (1, 2), maka K di ruang 3 (sah). Jika (L, M) = (2, 3), maka K harus di ruang 1 (dilarang). Jika (L, M) = (1, 3), maka K di ruang 2 (sah). Maka K bisa di ruang 2 atau ruang 3.'
        },
        {
          q: 'Sebuah biro memilih 3 staf dari 5 kandidat (V, W, X, Y, Z). Jika V dipilih, maka W tidak boleh dipilih. X dan Y harus selalu dipilih bersamaan. Manakah kombinasi yang TIDAK MUNGKIN terpilih?',
          options: [
            'V, X, Y',
            'W, X, Y',
            'Z, X, Y',
            'V, W, Z',
            'Semua mungkin'
          ],
          ans: 3,
          explanation: 'Opsi (V, W, Z) melanggar aturan bahwa jika V dipilih maka W tidak boleh dipilih.'
        }
      ],
      flashcards: [
        { front: 'Trik tercepat menyelesaikan soal pengelompokan bersyarat?', back: 'Eliminasi opsi jawaban yang melanggar aturan satu demi satu.' },
        { front: 'Apa arti syarat "Jika A maka B"?', back: 'Jika A masuk, B wajib masuk. Namun jika B masuk, A belum tentu masuk.' },
        { front: 'Apa arti syarat "A dan B tidak dapat bersama"?', back: 'Maksimal hanya salah satu dari A atau B yang boleh masuk (bisa juga keduanya tidak masuk).' },
        { front: 'Bagaimana memodelkan hari Senin-Jumat?', back: 'Buat tabel kolom 5 hari, isi hari yang terkunci mutlak terlebih dahulu.' },
        { front: 'Berapa jumlah anggota minimum jika disyaratkan "paling sedikit 2"?', back: 'Minimal 2, boleh 3, 4, dan seterusnya sesuai kapasitas.' }
      ],
      commonMistakes: [
        'Mencoba menyusun seluruh kemungkinan kombinasi di kertas buram alih-alih mengeliminasi opsi.',
        'Menganggap syarat "A butuh B" bermakna "B juga butuh A".'
      ]
    },
    {
      id: 'pu-07',
      subtest: 'PU',
      day: 4,
      title: 'Penalaran Induktif: Generalisasi, Sebab-Akibat & Analogi',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menilai kekuatan hubungan kausalitas dan kesahihan kesimpulan analogi dari sampel data.',
      summary: 'Penalaran induktif berangkat dari pengamatan fakta-fakta khusus untuk menarik kesimpulan umum (probabilistik). Kunci utamanya adalah membedakan hubungan sebab-akibat sejati dari sekadar kebetulan bersamaan (korelasi spurious).',
      coreConcept: 'Hubungan kausal (sebab-akibat) membutuhkan tiga syarat: (1) Adanya korelasi kuat, (2) Urutan waktu sebab mendahului akibat, dan (3) Tidak ada variabel pengganggu ketiga yang menjadi akar penyebab keduanya. Dalam analogi, kesimpulan sahih jika kesamaan sifat yang dibandingkan relevan langsung dengan hal yang disimpulkan.',
      formulaBox: '1. Tiga Syarat Kausalitas Murni:\n   - Urutan Kronologis: Sebab (X) terjadi sebelum Akibat (Y).\n   - Konsistensi Kovariansi: Jika X meningkat, Y konsisten berubah.\n   - Eliminasi Faktor Perancu (Confounding Variable Z).\n\n2. Pola Penalaran Sebab-Akibat TPS:\n   - Pernyataan (1) adalah penyebab dan (2) adalah akibat.\n   - Pernyataan (2) adalah penyebab dan (1) adalah akibat.\n   - Keduanya adalah akibat dari penyebab yang sama.\n   - Keduanya adalah akibat dari penyebab yang berbeda.',
      trapRadar: 'Jebakan Utama: Post Hoc Ergo Propter Hoc (karena peristiwa B terjadi setelah peristiwa A, maka A dianggap penyebab B). Contoh: "Ayam berkokok sebelum matahari terbit, maka kokok ayam menyebabkan matahari terbit." Ini sesat pikir kausal!',
      steps: [
        'Baca kedua pernyataan pada soal hubungan sebab-akibat.',
        'Tanyakan: apakah peristiwa A memicu terjadinya peristiwa B, atau sebaliknya?',
        'Jika keduanya tidak saling memicu langsung, cari apakah ada faktor ketiga di baliknya yang memicu keduanya.'
      ],
      guidedExample: {
        problem: 'Pernyataan (1): Penjualan pendingin ruangan (AC) di Kota X meningkat 45% bulan ini. Pernyataan (2): Suhu rata-rata harian di Kota X mencapai rekor tertinggi dalam 10 tahun terakhir. Manakah hubungan sebab-akibat yang tepat?',
        identify: 'Peristiwa 1: Lonjakan penjualan AC. Peristiwa 2: Suhu udara sangat panas.',
        process: 'Suhu udara yang sangat panas (Pernyataan 2) mendorong warga membeli AC untuk meredakan panas (Pernyataan 1). Tidak logis menyatakan bahwa membeli AC menyebabkan suhu kota menjadi panas secara alami.',
        answer: 'Pernyataan (2) adalah penyebab dan Pernyataan (1) adalah akibat.'
      },
      drills: [
        {
          q: 'Pernyataan (1): Tingkat kunjungan ke klinik fisioterapi meningkat tajam. Pernyataan (2): Jumlah pekerja kantoran yang mengeluhkan nyeri punggung bawah meningkat akibat durasi duduk yang panjang. Manakah hubungan yang tepat?',
          options: [
            'Pernyataan (1) adalah penyebab dan (2) adalah akibat.',
            'Pernyataan (2) adalah penyebab dan (1) adalah akibat.',
            'Keduanya adalah penyebab bebas.',
            'Keduanya adalah akibat dari penyebab yang tidak saling berhubungan.',
            'Keduanya adalah akibat dari suatu penyebab bersama.'
          ],
          ans: 1,
          explanation: 'Keluhan nyeri punggung akibat duduk lama (2) menyebabkan para pekerja berobat ke klinik fisioterapi (1).'
        },
        {
          q: 'Pernyataan (1): Harga tiket pesawat domestik mengalami kenaikan signifikan menjelang libur akhir tahun. Pernyataan (2): Tingkat okupansi kamar hotel di destinasi wisata utama melonjak hingga 90 persen. Hubungan yang paling logis adalah...',
          options: [
            '(1) adalah penyebab dan (2) adalah akibat.',
            '(2) adalah penyebab dan (1) adalah akibat.',
            'Keduanya adalah akibat dari suatu penyebab yang sama.',
            'Keduanya adalah akibat dari dua penyebab yang berbeda.',
            'Pernyataan (1) dan (2) saling meniadakan.'
          ],
          ans: 2,
          explanation: 'Keduanya terjadi karena lonjakan mobilitas dan permintaan liburan akhir tahun dari masyarakat (penyebab bersama).'
        },
        {
          q: 'Seorang peneliti mengamati bahwa siswa yang sarapan tinggi protein memperoleh skor tes konsentrasi lebih tinggi dibandingkan yang tidak sarapan. Simpulan induktif yang paling berhati-hati dan tepat adalah...',
          options: [
            'Sarapan tinggi protein pasti membuat semua siswa lulus ujian.',
            'Terdapat kecenderungan bahwa asupan protein pagi hari mendukung kemampuan konsentrasi siswa.',
            'Siswa yang tidak sarapan protein tidak akan mampu berkonsentrasi.',
            'Protein adalah satu-satunya nutrisi penentu kecerdasan otak.',
            'Semua tes konsentrasi dipengaruhi oleh menu sarapan.'
          ],
          ans: 1,
          explanation: 'Penalaran induktif menghasilkan kesimpulan probabilistik berbasis tren/kecenderungan, bukan kepastian mutlak (kata "pasti" atau "satu-satunya" keliru).'
        }
      ],
      flashcards: [
        { front: 'Apa sifat simpulan dalam penalaran induktif?', back: 'Bersifat probabilistik (peluang/kecenderungan), bukan kepastian mutlak.' },
        { front: 'Apa kesalahan Post Hoc Ergo Propter Hoc?', back: 'Menganggap peristiwa yang terjadi lebih dulu pasti merupakan penyebab peristiwa kedua.' },
        { front: 'Apa ciri dua akibat dari penyebab bersama?', back: 'Kedua peristiwa tidak saling menyebabkan, tetapi keduanya dipicu oleh satu peristiwa induk yang sama.' },
        { front: 'Apa itu Confounding Variable?', back: 'Variabel ketiga di luar pengamatan yang sebenarnya memengaruhi sebab dan akibat.' },
        { front: 'Bagaimana gaya bahasa simpulan induktif yang sahih?', back: 'Menggunakan kata "cenderung", "berpeluang", atau "sebagian besar".' }
      ],
      commonMistakes: [
        'Memilih hubungan sebab-akibat terbalik (akibat dijadikan sebab).',
        'Menyimpulkan secara mutlak (100% pasti) dari data sampel terbatas.'
      ]
    },
    {
      id: 'pu-08',
      subtest: 'PU',
      day: 4,
      title: 'Evaluasi Argumen: Memperkuat & Memperlemah Klaim',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menguji apakah fakta baru menambah kredibilitas hipotesis atau meruntuhkan dasar penalarannya.',
      summary: 'Soal tipe memperkuat/memperlemah menyajikan sebuah argumen atau kesimpulan peneliti, lalu meminta peserta memilih opsi fakta baru yang paling memperkuat (strengthen) atau paling memperlemah (weaken) argumen tersebut.',
      coreConcept: 'Untuk MEMPERLEMAH argumen: cari opsi yang menunjukkan bahwa kesimpulan salah, memberikan penyebab alternatif, atau membuktikan bahwa data pendukung tidak valid. Untuk MEMPERKUAT argumen: cari opsi yang menyingkirkan penyebab alternatif, menambah bukti empiris pendukung, atau membuktikan metodologi riset dapat diandalkan. Fakta pada opsi HARUS DIANGGAP 100% BENAR.',
      formulaBox: '1. Rumus Memperlemah (Weaken):\n   - Berikan Penjelasan Alternatif (Faktor Z yang sebenarnya berpengaruh).\n   - Tunjukkan Korelasi Terbalik (Ada X tapi tidak ada Y).\n   - Tunjukkan Sampel Cacat / Metodologi Bias.\n\n2. Rumus Memperkuat (Strengthen):\n   - Singkirkan Penjelasan Alternatif (Buktikan faktor Z tidak berpengaruh).\n   - Berikan Bukti Kasus Serupa di tempat lain.\n   - Buktikan hubungan sebab-akibat memang searah.',
      trapRadar: 'Jebakan Utama: Opsi yang hanya mengulang kalimat di teks (parafrasa) BUKAN memperkuat argumen. Opsi yang memperkuat harus berupa INFORMASI BARU yang menambah bobot pembuktian!',
      steps: [
        'Identifikasi dengan tegas KESIMPULAN UTAMA penulis (abaikan kalimat pengantar).',
        'Tentukan target: apakah diminta memperkuat atau memperlemah.',
        'Asumsikan kelima pilihan ganda adalah fakta nyata. Pilih opsi yang paling langsung mengubah tingkat keyakinan terhadap kesimpulan.'
      ],
      guidedExample: {
        problem: 'Peneliti menyimpulkan bahwa program pelatihan digitalisasi pasar tradisional di Kota B berhasil meningkatkan omzet pedagang sebesar 30%. Manakah pernyataan yang jika benar paling MEMPERLEMAH simpulan peneliti tersebut?',
        identify: 'Klaim: Pelatihan digitalisasi -> kenaikan omzet 30%. Target: Memperlemah.',
        process: 'Kita butuh penjelasan alternatif mengapa omzet naik 30% tanpa peran pelatihan digitalisasi. Jika pada periode yang sama pemerintah membagikan kupon belanja massal Rp500.000 kepada seluruh warga kota, maka kenaikan omzet dipicu oleh injeksi subsidi belanja, bukan karena keberhasilan pelatihan digital.',
        answer: 'Pada saat yang bersamaan, pemerintah kota menyalurkan program stimulus bantuan belanja tunai kepada seluruh warga di sekitar pasar tradisional.'
      },
      drills: [
        {
          q: 'Sebuah dinas kesehatan menyatakan bahwa kampanye cuci tangan pakai sabun berhasil menurunkan kasus diare pada anak sekolah sebesar 40%. Manakah yang paling MEMPERKUAT pernyataan dinas tersebut?',
          options: [
            'Kasus diare di sekolah yang tidak menjalankan kampanye cuci tangan tetap stabil tinggi pada periode yang sama.',
            'Sabun antiseptik memiliki aroma yang disukai anak-anak.',
            'Biaya pengadaan sabun dianggarkan dari dana bantuan operasional sekolah.',
            'Penyakit diare dapat dicegah dengan minum air matang.',
            'Sebagian guru mengikuti seminar kesehatan anak.'
          ],
          ans: 0,
          explanation: 'Adanya kelompok kontrol pembanding (kasus tetap tinggi di sekolah tanpa kampanye) membuktikan bahwa penurunan memang dipicu oleh kampanye tersebut, bukan faktor alamiah musiman.'
        },
        {
          q: 'Pakar transportasi mengklaim bahwa penambahan jalur sepeda di pusat kota mengurangi polusi udara secara signifikan. Manakah pernyataan yang paling MEMPERLEMAH klaim tersebut?',
          options: [
            'Sebagian pesepeda menggunakan sepeda lipat berbobot ringan.',
            'Penambahan jalur sepeda mengambil sebagian badan jalan raya utama.',
            'Penurunan polusi udara terjadi karena pabrik-pabrik di perbatasan kota ditutup sementara akibat krisis energi.',
            'Biaya cat jalur sepeda cukup mahal.',
            'Banyak komunitas sepeda mengadakan tur pada akhir pekan.'
          ],
          ans: 2,
          explanation: 'Pilihan ini memberikan faktor penyebab alternatif yang nyata (penutupan pabrik) yang memicu turunnya polusi udara, meruntuhkan klaim peran jalur sepeda.'
        },
        {
          q: 'Manakah pernyataan yang TIDAK MEMPENGARUHI (netral terhadap) klaim "Pemberian jam tidur siang bagi karyawan meningkatkan produktivitas kerja sore hari"?',
          options: [
            'Karyawan yang tidur siang menyelesaikan 25% lebih banyak berkas di sore hari.',
            'Karyawan mengeluhkan warna cat dinding ruang istirahat yang kurang menarik.',
            'Karyawan yang tidur siang sering mengalami pusing kepala sehingga lambat bekerja.',
            'Produktivitas karyawan sore hari tetap tinggi meskipun malam sebelumnya begadang.',
            'Perusahaan kompetitor yang menerapkan tidur siang mencatat kenaikan laba operasional.'
          ],
          ans: 1,
          explanation: 'Keluhan tentang warna cat ruang istirahat sama sekali tidak berkaitan secara substantif dengan produktivitas kerja karyawan.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana cara terbaik memperlemah argumen kausal?', back: 'Hadirkan penjelasan alternatif (faktor Z) yang sebenarnya memicu akibat tersebut.' },
        { front: 'Apakah menyalin fakta dari teks tergolong memperkuat?', back: 'Tidak, opsi memperkuat wajib berupa fakta/bukti baru.' },
        { front: 'Apa peran "kelompok kontrol" dalam memperkuat klaim?', back: 'Membuktikan bahwa tanpa intervensi, hasil positif tersebut tidak akan terjadi.' },
        { front: 'Bagaimana status fakta di pilihan ganda?', back: 'Dianggap 100% benar secara hipotesis ("Manakah pernyataan yang JIKA BENAR...").' },
        { front: 'Apa langkah pertama soal argumen?', back: 'Kunci kesimpulan utama penulis terlebih dahulu.' }
      ],
      commonMistakes: [
        'Memilih opsi yang hanya mendiskusikan topik serupa tanpa menyentuh hubungan sebab-akibat intinya.',
        'Tertukar antara opsi yang memperkuat dengan yang memperlemah.'
      ]
    },
    {
      id: 'pu-09',
      subtest: 'PU',
      day: 5,
      title: 'Asumsi Tersirat (Hidden Assumptions) & Premis Tersembunyi',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menemukan jembatan logis yang tidak terucap agar argumen penulis menjadi utuh dan sah.',
      summary: 'Asumsi tersirat adalah premis yang tidak diungkapkan secara tertulis oleh penulis, namun MUTLAK DIPERLUKAN agar kesimpulan penulis dapat dibenarkan secara logika formal.',
      coreConcept: 'Gunakan Teknik Uji Negasi (Negation Test): Jika sebuah opsi dinegasikan (diberi kata "tidak") dan akibatnya argumen penulis langsung runtuh atau menjadi tidak masuk akal, maka opsi tersebut PASTI merupakan asumsi yang mendasari argumen. Asumsi bukanlah kesimpulan baru, melainkan fondasi pijakan.',
      formulaBox: '1. Anatomi Argumen Lengkap:\n   Premis Tertulis + Asumsi Tersirat (Jembatan) ===> Kesimpulan Penulis\n\n2. Teknik Uji Negasi (The Negation Test):\n   - Negasikan kalimat di opsi jawaban.\n   - Tanyakan: "Apakah kesimpulan penulis langsung HANCUR jika opsi ini salah?"\n   - Jika YA, opsi itu adalah Asumsi Tersirat yang dicari!',
      trapRadar: 'Jebakan Utama: Memilih opsi yang merupakan kesimpulan lebih jauh (ekstrapolasi), padahal asumsi berada di BELAKANG kesimpulan sebagai syarat awal yang belum diucapkan.',
      steps: [
        'Tandai premis yang tertulis dan kesimpulan yang dicapai.',
        'Cari celah (gap) antara premis dan kesimpulan: konsep apa yang tiba-tiba muncul di kesimpulan tanpa dijelaskan di premis?',
        'Uji opsi dengan memberikan negasi: jika dinegasikan membuat argumen mustahil, pilih opsi itu.'
      ],
      guidedExample: {
        problem: 'Argumen: "Mobil listrik ini memiliki jarak tempuh 500 km per pengisian daya. Oleh karena itu, mobil ini sangat cocok untuk perjalanan antarkota jarak jauh." Manakah asumsi yang mendasari kesimpulan tersebut?',
        identify: 'Premis: Jarak tempuh 500 km. Kesimpulan: Sangat cocok untuk perjalanan antarkota jarak jauh.',
        process: 'Ada celah antara 500 km dan kelayakan perjalanan antarkota. Uji negasi opsi "Jarak antarstasiun pengisian daya di rute antarkota tidak melebihi 500 km". Jika jarak antarstasiun pengisian melebihi 500 km, maka mobil akan mogok di tengah jalan dan kesimpulan "sangat cocok" otomatis hancur lebur. Jadi itu asumsi mutlaknya.',
        answer: 'Jarak antara fasilitas pengisian daya di sepanjang rute antarkota tidak melebihi kapasitas jarak tempuh mobil tersebut.'
      },
      drills: [
        {
          q: 'Argumen: "Semua calon pilot yang gagal pada tes simulasi penerbangan malam tidak akan diloloskan menjadi pilot komersial. Oleh sebab itu, Yoga tidak akan diloloskan menjadi pilot komersial." Asumsi yang mendasari simpulan tersebut adalah...',
          options: [
            'Yoga adalah calon pilot terbaik di akademinya.',
            'Yoga gagal pada tes simulasi penerbangan malam.',
            'Tes simulasi penerbangan malam sangat sulit dilakukan.',
            'Pilot komersial harus memiliki jam terbang tinggi.',
            'Yoga memilih jalur penerbangan kargo.'
          ],
          ans: 1,
          explanation: 'Agar simpulan "Yoga tidak diloloskan" sah secara deduktif dari premis yang ada, wajib diasumsikan bahwa Yoga memang gagal pada tes simulasi malam tersebut.'
        },
        {
          q: 'Argumen: "Penggunaan pupuk organik cair merek X meningkatkan hasil panen cabai sebesar 20 persen. Petani cabai di Desa Sumber Makmur sebaiknya beralih ke pupuk X agar keuntungan mereka meningkat." Asumsi yang mendasari saran tersebut adalah...',
          options: [
            'Pupuk organik cair merek X adalah pupuk termahal di pasaran.',
            'Biaya pembelian pupuk X tidak melampaui tambahan pendapatan dari peningkatan hasil panen cabai.',
            'Semua petani cabai di desa tersebut sudah terbiasa menggunakan pupuk kimia.',
            'Harga jual cabai di pasar induk selalu stabil sepanjang musim.',
            'Tanaman cabai membutuhkan air dalam jumlah melimpah.'
          ],
          ans: 1,
          explanation: 'Keuntungan = Pendapatan - Biaya. Jika biaya pupuk X sangat mahal hingga melampaui hasil kenaikan 20%, keuntungan justru turun. Maka asumsi kuncinya adalah biaya pupuk X tidak lebih besar dari nilai tambah panen.'
        },
        {
          q: 'Penulis menyatakan bahwa menaikkan pajak rokok sebesar 50% akan menurunkan angka perokok usia remaja. Manakah asumsi yang mendasari pernyataan tersebut?',
          options: [
            'Remaja memiliki sensitivitas harga yang cukup tinggi terhadap kenaikan harga rokok.',
            'Semua remaja mendapatkan uang saku harian dari orang tua.',
            'Pabrik rokok akan mengurangi jumlah produksinya.',
            'Pemerintah menggunakan penerimaan pajak rokok untuk fasilitas olahraga.',
            'Rokok elektrik tidak dikenakan kenaikan pajak.'
          ],
          ans: 0,
          explanation: 'Jika remaja tidak peduli harga (tidak sensitif harga) dan tetap membeli rokok berapapun harganya, maka kebijakan pajak tidak akan menurunkan perokok remaja. Maka asumsinya adalah remaja sensitif terhadap harga.'
        }
      ],
      flashcards: [
        { front: 'Apa definisi Asumsi Tersirat?', back: 'Premis yang tidak terucap yang wajib bernilai benar agar argumen penulis tetap sah.' },
        { front: 'Apa itu Uji Negasi dalam mencari asumsi?', back: 'Menegasikan opsi jawaban; jika negasi meruntuhkan argumen, opsi tersebut adalah asumsi yang benar.' },
        { front: 'Apa perbedaan asumsi tersirat dengan simpulan?', back: 'Asumsi adalah fondasi pijakan awal, sedangkan simpulan adalah hasil akhir penalaran.' },
        { front: 'Jika sebuah opsi memakai kata mutlak "selalu" atau "paling", apakah lazim jadi asumsi?', back: 'Jarang, asumsi biasanya bersifat proporsional dan minimalis sesuai kebutuhan premis.' },
        { front: 'Mengapa asumsi harus dicari dari celah premis ke simpulan?', back: 'Karena di celah itulah terdapat premis tersembunyi yang dianggap jelas oleh penulis.' }
      ],
      commonMistakes: [
        'Memilih opsi yang mengulang premis yang sudah tertulis di dalam teks.',
        'Memilih simpulan ekstrapolasi yang melangkah terlalu jauh.'
      ]
    },
    {
      id: 'pu-10',
      subtest: 'PU',
      day: 5,
      title: 'Falasi Logika (Sesat Pikir) & Analisis Tabel/Grafik TPS',
      timeTarget: '65 dtk/soal',
      oneLiner: 'Mendeteksi sesat pikir Ad Hominem/Strawman dan membaca persentase perubahan pada tabel TPS secara cepat.',
      summary: 'Modul penutup PU menggabungkan dua keterampilan krusial: mengenali sesat pikir (fallacy) dalam perdebatan serta membaca tren peningkatan, selisih persentase, dan rasio pada tabel/grafik data kuantitatif TPS.',
      coreConcept: 'Falasi umum di TPS: Ad Hominem (menyerang pribadi bukan argumen), Strawman (memelintir argumen lawan agar mudah diserang), Slippery Slope (menuduh dampak ekstrem berantai tanpa bukti), False Dilemma (membatasi opsi hanya hitam-putih). Pada tabel data TPS: bedakan antara "kenaikan jumlah absolut" (selisih nilai) dengan "kenaikan persentase" ((Nilai Baru - Lama) / Lama x 100%).',
      formulaBox: '1. Empat Falasi Logika Populer:\n   - Ad Hominem: Menolak ide karena latar belakang pribadi pengusul.\n   - Strawman: Mengubah isi klaim lawan menjadi bentuk karikatur ekstrem.\n   - False Dilemma: Menyatakan hanya ada 2 pilihan padahal ada alternatif lain.\n   - Appeal to Popularity: Mengklaim benar hanya karena banyak orang percaya.\n\n2. Rumus Persentase Perubahan Data:\n   % Kenaikan = (Nilai Akhir - Nilai Awal) / Nilai Awal x 100%\n   % Poin Selisih = % Akhir - % Awal (bukan dibagi!)',
      trapRadar: 'Jebakan Utama: Pada tabel data, jangan tertukar antara "pertumbuhan tertinggi" (persentase %) dengan "tambahan volume terbesar" (angka mutlak). Kategori dengan basis awal kecil bisa memiliki persentase pertumbuhan sangat tinggi meski jumlah unitnya sedikit!',
      steps: [
        'Untuk soal teks debat: periksa apakah argumen merespons substansi atau menyerang motif pribadi pembicara.',
        'Untuk soal tabel data: periksa kepala kolom dan satuan unit (apakah dalam ribuan, jutaan, persen, atau indeks).',
        'Lakukan estimasi pembagian pecahan untuk menemukan laju persentase tercepat tanpa menghitung angka desimal panjang.'
      ],
      guidedExample: {
        problem: 'Politisi A: "Kita perlu mengalokasikan anggaran riset lebih besar untuk teknologi baterai nasional." Politisi B: "Politisi A ingin memboroskan uang rakyat untuk hal-hal yang tidak pasti dan mengabaikan program bantuan pangan orang miskin." Falasi logika apakah yang dilakukan Politisi B?',
        identify: 'Politisi A mengusulkan alokasi riset baterai. Politisi B menuduh Politisi A "ingin memboroskan uang dan mengabaikan pangan orang miskin".',
        process: 'Politisi B membesar-besarkan dan memelintir usulan riset menjadi tuduhan ekstrem mengabaikan rakyat miskin yang tidak pernah diucapkan Politisi A, lalu menyerang distorsi tersebut.',
        answer: 'Sesat pikir Strawman (Manusia Jerami / Memelintir Argumen).'
      },
      drills: [
        {
          q: 'Data Penjualan Sepeda Motor Listrik: Tahun 2024 = 5.000 unit; Tahun 2025 = 12.500 unit. Berapakah persentase kenaikan penjualan dari tahun 2024 ke 2025?',
          options: ['75%', '100%', '125%', '150%', '250%'],
          ans: 3,
          explanation: '% Kenaikan = (12.500 - 5.000) / 5.000 x 100% = 7.500 / 5.000 x 100% = 1,5 x 100% = 150%.'
        },
        {
          q: '"Kamu tidak boleh mempercayai teori gizi yang disampaikan dokter itu, karena ia sendiri memiliki berat badan berlebih." Argumen tersebut mengandung falasi...',
          options: [
            'Ad Hominem (menyerang personal)',
            'False Dilemma',
            'Slippery Slope',
            'Circular Reasoning (Penalaran Melingkar)',
            'Hasty Generalization'
          ],
          ans: 0,
          explanation: 'Argumen menolak validitas teori gizi semata-mata dengan menyerang kondisi fisik pribadi pembicara, bukan menguji kebenaran isi teorinya (Ad Hominem).'
        },
        {
          q: 'Tabel Pendaftar Jurusan: Jurusan X naik dari 200 ke 300 siswa; Jurusan Y naik dari 1.000 ke 1.200 siswa; Jurusan Z naik dari 50 ke 100 siswa. Jurusan dengan PERSENTASE kenaikan terbesar adalah...',
          options: [
            'Jurusan X',
            'Jurusan Y',
            'Jurusan Z',
            'Jurusan X dan Z sama besar',
            'Jurusan Y dan Z sama besar'
          ],
          ans: 2,
          explanation: 'Kenaikan X = (100/200) = 50%. Kenaikan Y = (200/1000) = 20%. Kenaikan Z = (50/50) = 100%. Maka persentase terbesar adalah Jurusan Z (100%).'
        }
      ],
      flashcards: [
        { front: 'Apa itu Strawman Fallacy?', back: 'Memelintir argumen lawan menjadi versi yang ekstrem/konyol agar mudah diserang.' },
        { front: 'Apa itu Ad Hominem Fallacy?', back: 'Menyerang karakter, fisik, atau latar belakang pembicara alih-alih substansi idenya.' },
        { front: 'Bagaimana rumus persentase kenaikan data tabel?', back: '(Nilai Baru - Nilai Lama) / Nilai Lama x 100%.' },
        { front: 'Apa perbedaan selisih absolut vs selisih persentase?', back: 'Absolut adalah pengurangan angka langsung; persentase mengukur laju perubahan relatif terhadap nilai awal.' },
        { front: 'Apa itu False Dilemma?', back: 'Menyajikan situasi seolah-olah hanya ada dua pilihan mutlak, padahal ada alternatif ketiga.' }
      ],
      commonMistakes: [
        'Membagi kenaikan dengan angka akhir alih-alih angka awal saat menghitung persentase kenaikan.',
        'Terkecoh angka absolut besar padahal persentase pertumbuhannya kecil.'
      ]
    }
  ];

  window.UTBK_MODULES.push(...PU_MODULES);
})();
