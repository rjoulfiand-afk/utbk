/* File: data/pbm.js
 * Bank Materi Lengkap Subtes: Pemahaman Bacaan & Menulis (PBM) - 10 Modul Lengkap
 */
(function () {
  'use strict';

  window.UTBK_MODULES = window.UTBK_MODULES || [];

  const PBM_MODULES = [
    {
      id: 'pbm-01',
      subtest: 'PBM',
      day: 1,
      title: 'EYD Edisi V: Huruf Kapital & Huruf Miring',
      timeTarget: '75 dtk/soal',
      oneLiner: 'Menertibkan huruf kapital pada geografi, nama gelar/jabatan, dan huruf miring istilah asing.',
      summary: 'Kaidah EYD Edisi V mengatur penggunaan huruf kapital dan huruf miring secara presisi. Ketidaktelitian pada nama geografi yang menjadi nama jenis atau nama jabatan tanpa diikuti nama orang/lembaga sering menjadi sumber kesalahan peserta.',
      coreConcept: 'Huruf kapital dipakai untuk: (1) Huruf pertama nama diri geografi (Sungai Kapuas, Danau Toba), KECUALI jika menjadi nama jenis atau nama varietas (jeruk bali, gula jawa, kacang bogor, petai cina). Jika menunjukkan kekhasan budaya daerah, nama daerahnya tetap kapital (tari Bali, batik Pekalongan). (2) Nama gelar dan jabatan kapital jika diikuti nama orang, instansi, atau wilayah (Gubernur Jawa Barat, Presiden Republik Indonesia), tetapi kecil jika berdiri sendiri (seorang gubernur, menjabat rektor). (3) Huruf miring dipakai untuk judul buku, majalah, surat kabar, dan kata/ungkapan bahasa asing/daerah yang belum diserap.',
      formulaBox: '1. Aturan Geografi EYD V:\n   - Unsur Geografi + Nama Diri: Gunung Merapi, Selat Sunda (Kapital)\n   - Nama Jenis / Flora-Fauna: pisang ambon, badak sumatra, kunci inggris (Kecil)\n   - Produk Budaya Khas: ukiran Jepara, soto Madura (Nama daerah Kapital)\n\n2. Aturan Gelar & Jabatan:\n   - Diikuti nama/wilayah: Menteri Keuangan, Haji Agus Salim (Kapital)\n   - Berdiri sendiri umum: "Ia baru diangkat menjadi menteri." (Kecil)\n\n3. Huruf Miring:\n   - Judul buku/majalah dalam kalimat: majalah *Tempo*, novel *Laskar Pelangi*.\n   - Bahasa Asing/Daerah belum baku: sistem *lock-in*, upacara *ngaben*.',
      trapRadar: 'Jebakan Utama: Kata "kunci inggris", "gula jawa", dan "jeruk bali" sering ditulis kapital oleh pembuat soal untuk mengecoh. Ingat: nama jenis biologis atau kuliner ditulis kecil!',
      steps: [
        'Pindai kata yang diawali huruf kapital di tengah kalimat.',
        'Periksa apakah nama geografi tersebut merujuk pada letak fisik wilayah atau nama jenis kuliner/alat.',
        'Periksa apakah istilah bahasa asing sudah ditulis dengan huruf miring atau belum.'
      ],
      guidedExample: {
        problem: 'Perbaikilah kesalahan huruf kapital pada kalimat berikut: "Rapat kerja yang dihadiri oleh seluruh Gubernur itu menyajikan hidangan Bika Ambon dan kopi Toraja."',
        identify: 'Tiga titik kritis: "seluruh Gubernur", "Bika Ambon", "kopi Toraja".',
        process: '1) "Gubernur" berdiri sendiri tanpa nama orang/wilayah, wajib ditulis kecil: "gubernur". 2) "bika ambon" adalah nama jenis kue, bukan lokasi, wajib ditulis kecil: "bika ambon". 3) "kopi Toraja" adalah kekhasan budaya/produksi daerah tertentu, nama Toraja tetap kapital.',
        answer: '"Rapat kerja yang dihadiri oleh seluruh gubernur itu menyajikan hidangan bika ambon dan kopi Toraja."'
      },
      drills: [
        {
          q: 'Penulisan huruf kapital yang BENAR menurut EYD Edisi V terdapat pada kalimat...',
          options: [
            'Kapal feri menyeberangi Selat Malaka menuju pelabuhan Belawan.',
            'Paman membudidayakan Jeruk Bali di pekarangan rumah.',
            'Ayah saya bekerja keras hingga diangkat menjadi Direktur Utama PT Maju Bersama.',
            'Wisatawan asing mengagumi keindahan tari Kecak di Pulau Dewata.',
            'Pilihan C dan D keduanya tepat.'
          ],
          ans: 2,
          explanation: '"Direktur Utama PT Maju Bersama" ditulis kapital karena diikuti nama resmi instansi/perusahaan. Opsi A salah (Pelabuhan Belawan harusnya P kapital), Opsi B salah (jeruk bali huruf kecil). Opsi D salah (tari kecak huruf kecil karena nama tarian bukan geografi diri, kecuali tari Bali).'
        },
        {
          q: 'Penggunaan huruf miring yang TEPAT terdapat pada kalimat...',
          options: [
            'Ia membaca berita kriminal itu di surat kabar *Kompas*.',
            'Situs web itu memiliki fitur *download* dan *upload* otomatis.',
            'Ungkapan *tut wuri handayani* merupakan semboyan pendidikan nasional.',
            'Semua pilihan A, B, dan C benar.',
            'Hanya pilihan A yang benar.'
          ],
          ans: 3,
          explanation: 'Semua benar: nama surat kabar (*Kompas*), kata asing yang belum diserap (*download*, *upload*), dan semboyan daerah (*tut wuri handayani*) wajib dicetak miring.'
        },
        {
          q: 'Manakah penulisan nama jabatan yang SALAH?',
          options: [
            'Presiden Joko Widodo meresmikan tol baru.',
            'Pelantikan itu dihadiri oleh Gubernur Jawa Timur.',
            'Beliau terpilih sebagai Sekretaris Jenderal PBB.',
            'Tugas seorang Presiden sangat berat dalam menjaga kedaulatan negara.',
            'Rektor Universitas Indonesia memberikan sambutan pembuka.'
          ],
          ans: 3,
          explanation: 'Pada opsi D, "Presiden" berdiri sendiri tanpa diikuti nama diri orang atau lembaga spesifik, sehingga wajib ditulis huruf kecil ("seorang presiden").'
        }
      ],
      flashcards: [
        { front: 'Bagaimana penulisan "jeruk bali" dan "petai cina"?', back: 'Huruf kecil semua karena berkedudukan sebagai nama jenis.' },
        { front: 'Kapan nama jabatan ditulis huruf kapital?', back: 'Saat diikuti nama orang, nama wilayah, atau nama instansi resmi.' },
        { front: 'Apakah nama bahasa dan suku ditulis kapital?', back: 'Hanya nama suku dan bahasanya yang kapital, kata "suku" dan "bahasa" tetap kecil (suku Bugis, bahasa Indonesia).' },
        { front: 'Kapan istilah asing TIDAK dicetak miring?', back: 'Saat istilah asing tersebut sudah resmi diserap ke dalam KBBI (misal: daring, luring, analisis).' },
        { front: 'Bagaimana penulisan "tari Saman" vs "tari Bali"?', back: 'tari saman (s kecil jika nama tari biasa), tari Bali (B kapital karena nama daerah kultural).' }
      ],
      commonMistakes: [
        'Menulis "Bika Ambon" dengan huruf kapital.',
        'Lupa memiringkan istilah bahasa asing yang belum ada di KBBI.'
      ]
    },
    {
      id: 'pbm-02',
      subtest: 'PBM',
      day: 1,
      title: 'EYD Edisi V: Tanda Titik, Koma, Titik Dua & Titik Koma',
      timeTarget: '75 dtk/soal',
      oneLiner: 'Menguasai fungsi tanda koma sebelum konjungsi pertentangan dan tanda titik dua pada perincian.',
      summary: 'Tanda baca menentukan struktur hierarkis kalimat. Kesalahan tanda koma pada anak kalimat yang mendahului induk kalimat dan penggunaan titik dua tanpa kalimat pengantar lengkap merupakan materi favorit soal PBM.',
      coreConcept: '1) Tanda Koma WAJIB digunakan: sebelum kata "tetapi", "melainkan", "sedangkan" dalam kalimat majemuk setara; serta jika anak kalimat mendahului induk kalimat (diawali "Jika...", "Karena...", "Meskipun..."). Koma TIDAK DIPAKAI jika anak kalimat berada di belakang induk kalimat! 2) Tanda Titik Dua (:) digunakan HANYA jika perincian didahului kalimat lengkap yang diakhiri kata benda/penutup, BUKAN langsung setelah predikat ("...terdiri atas:" adalah SALAH!). 3) Tanda Titik Koma (;) menggantikan kata hubung pada kalimat majemuk setara atau memisahkan perincian kompleks yang sudah mengandung koma.',
      formulaBox: '1. Rumus Koma pada Anak Kalimat:\n   - Anak Kalimat (di depan) + KOMA + Induk Kalimat (di belakang)\n     Contoh: "Karena cuaca buruk, penerbangan ditunda."\n   - Induk Kalimat (di depan) + TANPA KOMA + Anak Kalimat (di belakang)\n     Contoh: "Penerbangan ditunda karena cuaca buruk."\n\n2. Aturan Titik Dua (:):\n   - BENAR: "Kami memerlukan alat tulis berikut: pena, pensil, dan buku."\n   - SALAH: "Kami memerlukan: pena, pensil, dan buku."\n\n3. Titik Koma (;):\n   - Pengganti kata hubung: "Ibu memasak di dapur; Ayah membaca koran."',
      trapRadar: 'Jebakan Utama: Membubuhkan tanda koma sebelum kata "bahwa" atau sebelum kata "karena" saat anak kalimat berada di belakang induk kalimat. Contoh SALAH: "Ia mengatakan, bahwa..." atau "Ia tidak hadir, karena sakit."',
      steps: [
        'Periksa apakah ada tanda koma yang diletakkan sembarangan di depan kata "bahwa" (coret koma tersebut!).',
        'Cek letak anak kalimat (apakah di depan atau di belakang induk kalimat).',
        'Cek tanda titik dua: pastikan klausa sebelum titik dua sudah merupakan kalimat mandiri utuh yang berakhir dengan nomina.'
      ],
      guidedExample: {
        problem: 'Tentukan kalimat yang tanda bacanya SALAH:\n(A) Meskipun hujan lebat, seminar tetap berlangsung tepat waktu.\n(B) Hasil survei menunjukkan, bahwa mayoritas responden puas.\n(C) Ibu membeli perlengkapan dapur: wajan, panci, dan sudip.',
        identify: 'Periksa kalimat (A) anak kalimat di depan, (B) koma sebelum kata bahwa, (C) titik dua.',
        process: 'Pada (B), kata "bahwa" adalah konjungsi penjelas isi objek, sehingga DILARANG disisipi tanda koma di depannya. Kalimat (B) seharusnya: "Hasil survei menunjukkan bahwa mayoritas responden puas."',
        answer: 'Kalimat (B) salah karena menyisipkan tanda koma sebelum kata bahwa.'
      },
      drills: [
        {
          q: 'Penggunaan tanda baca yang TEPAT sesuai EYD Edisi V terdapat pada kalimat...',
          options: [
            'Mahasiswa baru wajib membawa; tas ransel, buku catatan, dan botol minum.',
            'Karena dokumen belum lengkap maka permohonan kredit ditolak.',
            'Ia tidak dapat menghadiri rapat tahunan, karena sedang dinas di luar kota.',
            'Pelatihan ini diikuti oleh tiga divisi, yaitu: keuangan, personalia, dan pemasaran.',
            'Pemerintah telah memperingatkan bahaya tersebut, tetapi warga tetap enggan mengungsi.'
          ],
          ans: 4,
          explanation: 'Opsi E benar: konjungsi pertentangan "tetapi" dalam kalimat majemuk setara wajib didahului tanda koma. Opsi lain salah: A titik koma keliru, B tidak boleh ada "maka", C ada koma sebelum karena di belakang, D setelah "yaitu" tidak boleh titik dua.'
        },
        {
          q: 'Tanda titik dua (:) TIDAK DAPAT digunakan pada kalimat...',
          options: [
            'Fakultas tersebut membuka tiga program studi baru: Aktuaria, Biomedis, dan Sains Data.',
            'Perlengkapan berkemah yang harus disiapkan adalah: tenda, kompor lipat, dan matras.',
            'Surat ini dilampiri berkas-berkas berikut: fotokopi ijazah, transkrip nilai, dan pasfoto.',
            'Ayah membeli perabot rumah tangga: meja makan, kursi sofa, dan lemari pakaian.',
            'Warga diminta membawa dua persyaratan: KTP dan bukti pembayaran PBB.'
          ],
          ans: 1,
          explanation: 'Tanda titik dua tidak boleh dipakai langsung setelah predikat ("adalah:"). Kalimat harus mengalir: "...yang harus disiapkan adalah tenda, kompor..." tanpa titik dua.'
        },
        {
          q: 'Tanda titik koma (;) digunakan secara tepat pada kalimat...',
          options: [
            'Pagi itu sangat dingin; kabut tebal menyelimuti lembah pegunungan.',
            'Ia membeli; buku, pulpen, dan penggaris di koperasi sekolah.',
            'Meskipun sudah malam; ia tetap menyelesaikan laporannya.',
            'Mereka tidak hadir; karena tidak mendapat undangan.',
            'Kota itu terkenal dengan batiknya; yang bermotif parang.'
          ],
          ans: 0,
          explanation: 'Titik koma pada opsi A tepat memisahkan dua klausa setara yang mandiri sebagai pengganti konjungsi antarklausa.'
        }
      ],
      flashcards: [
        { front: 'Bolehkah membubuhkan koma sebelum kata "bahwa"?', back: 'TIDAK BOLEH! Kata "bahwa" menghubungkan klausa objek tanpa koma.' },
        { front: 'Kapan tanda koma dipakai pada anak kalimat dengan kata "karena"?', back: 'Hanya jika anak kalimat berada di DEPAN induk kalimat ("Karena sakit, ia libur").' },
        { front: 'Kapan tanda titik dua (:) boleh dipakai pada perincian?', back: 'Hanya jika klausa sebelumnya berupa kalimat utuh yang berakhir pada nomina/pernyataan lengkap.' },
        { front: 'Tanda baca apa yang mendahului kata "tetapi" dan "melainkan"?', back: 'Tanda koma (,).' },
        { front: 'Bolehkah meletakkan titik dua tepat setelah kata "yaitu"?', back: 'TIDAK BOLEH ("yaitu:" adalah salah; cukup koma sebelum yaitu).' }
      ],
      commonMistakes: [
        'Membubuhkan koma sebelum "bahwa".',
        'Menulis "...terdiri atas: ..." atau "...adalah: ..." (memakai titik dua setelah predikat).'
      ]
    },
    {
      id: 'pbm-03',
      subtest: 'PBM',
      day: 2,
      title: 'EYD Edisi V: Kata Depan (di/ke) vs Awalan Pasif',
      timeTarget: '70 dtk/soal',
      oneLiner: 'Membedakan penulisan serangkai vs pisah untuk di- dan ke- secara mutlak tanpa ragu.',
      summary: 'Aturan penulisan "di" dan "ke" sangat sederhana: jika menyatakan tempat atau arah (kata depan/preposisi), wajib DIPISAH. Jika merupakan awalan pembentuk verba (afiks), wajib DIGABUNG.',
      coreConcept: 'Uji Sederhana "Bisa Ditanya Tempat?": Jika kata tersebut menjawab pertanyaan "Di mana?" atau "Ke mana?", maka itu adalah KATA DEPAN yang WAJIB DIPISAH (di sekolah, di samping, di antara, di bawah, ke kantor, ke luar ruangan). Uji Awalan Verba: Jika kata tersebut memiliki lawan kata aktif meN- (ditulis -> menulis, dikirim -> mengirim, dikesampingkan -> mengesampingkan), maka itu adalah AWALAN yang WAJIB DIGABUNG.',
      formulaBox: '1. Kata Depan (Preposisi) ===> WAJIB DIPISAH:\n   - di rumah, di sana, di samping itu, di antara, di balik layar\n   - ke pasar, ke mana-mana, ke luar (menuju ke luar)\n\n2. Awalan Verba Pasif ===> WAJIB DIGABUNG:\n   - dimakan, diminum, dikeluarkan, dikesampingkan, ditindaklanjuti\n\n3. Kasus Khusus:\n   - ke luar (kata depan posisi = pergi ke luar) vs keluar (kata kerja = keluar dari ruangan)\n   - di balik (posisi fisik = di balik pintu) vs dibalik (verba = ikannya dibalik)',
      trapRadar: 'Jebakan Utama: Kata "di samping itu", "di antaranya", dan "ke depan" sering ditulis serangkai di soal UTBK untuk mengecoh. Sebaliknya, kata "dikesampingkan" wajib digabung karena memiliki akhiran -kan!',
      steps: [
        'Uji apakah kata tersebut menunjukkan lokasi/posisi (fisik maupun abstrak). Jika ya, pisahkan dengan spasi.',
        'Uji apakah kata tersebut merupakan kata kerja yang dapat diubah ke awalan meN-. Jika ya, gabungkan serangkai.',
        'Hati-hati pada kata berkonfiks di-...-kan seperti "dianaktirikan", "diserahterimakan" (seluruhnya digabung).'
      ],
      guidedExample: {
        problem: 'Tentukan penulisan yang tepat:\n(1) Buku itu disimpan [di lemari / dilemari].\n(2) Usulan tersebut [di kesampingkan / dikesampingkan] oleh pimpinan.\n(3) Tamu dipersilakan masuk [ke dalam / kedalam] ruangan.',
        identify: 'Uji status masing-masing kata.',
        process: '1) lemari = tempat benda -> dipisah: "di lemari". 2) mengesampingkan = verba aktif, bentuk pasifnya digabung: "dikesampingkan". 3) dalam = posisi/arah ruang -> dipisah: "ke dalam".',
        answer: '(1) di lemari, (2) dikesampingkan, (3) ke dalam.'
      },
      drills: [
        {
          q: 'Penulisan kata depan "di" dan "ke" yang SELURUHNYA BENAR terdapat pada kalimat...',
          options: [
            'Ia pergi keluar negeri untuk menuntut ilmu di universitas ternama.',
            'Di samping itu, persoalan ini harus diselesaikan di antara kedua belah pihak.',
            'Masalah pribadi jangan di campuradukkan dengan urusan kantor.',
            'Barang bukti itu disimpan didalam brankas yang terkunci rapat.',
            'Pasien diminta menunggu diruang tunggu poliklinik.'
          ],
          ans: 1,
          explanation: '"Di samping itu" dan "di antara" adalah preposisi yang tepat dipisah. Pilihan lain salah: keluar negeri (seharusnya ke luar negeri), di campuradukkan (dicampuradukkan), didalam (di dalam), diruang (di ruang).'
        },
        {
          q: 'Manakah kalimat yang menggunakan kata "keluar" atau "ke luar" secara TEPAT?',
          options: [
            'Ia melangkah ke luar rumah untuk menghirup udara segar.',
            'Asap tebal keluar dari cerobong pabrik.',
            'Pintu keluar darurat berada di sebelah barat.',
            'Pernyataan resmi itu ke luar dari mulut juru bicara kementerian.',
            'Pilihan A, B, dan C semuanya benar.'
          ],
          ans: 4,
          explanation: 'Pilihan A menunjukkan arah menuju luar (ke luar = pisah), B dan C merupakan kata kerja/frasa benda baku (keluar = gabung).'
        },
        {
          q: 'Penulisan gabungan kata berimbuhan yang BENAR adalah...',
          options: [
            'di tanda tangani',
            'ditandatangani',
            'di tandatangani',
            'ditanda tangani',
            'di-tanda-tangani'
          ],
          ans: 1,
          explanation: 'Jika kata majemuk mendapat awalan dan akhiran sekaligus (konfiks di-...-i), seluruh unsur katanya wajib ditulis serangkai ("ditandatangani").'
        }
      ],
      flashcards: [
        { front: 'Bagaimana penulisan "di samping" dan "di antara"?', back: 'Dipisah ("di samping", "di antara").' },
        { front: 'Bagaimana penulisan "dikesampingkan"?', back: 'Digabung serangkai (awalan di- dan akhiran -kan).' },
        { front: 'Apa uji cepat membedakan kata depan "di" vs awalan "di-"?', back: 'Jika bisa ditanya "Di mana?", dipisah. Jika ada lawan kata "me-", digabung.' },
        { front: 'Bagaimana penulisan "ke mana" dan "ke sana"?', back: 'Dipisah ("ke mana", "ke sana").' },
        { front: 'Bagaimana penulisan "garis bawahi" vs "menggarisbawahi"?', back: 'garis bawahi (hanya akhiran = pisah), menggarisbawahi (awalan + akhiran = gabung).' }
      ],
      commonMistakes: [
        'Menulis "disamping itu" dan "diantara" secara serangkai.',
        'Menulis "di kesampingkan" secara terpisah.'
      ]
    },
    {
      id: 'pbm-04',
      subtest: 'PBM',
      day: 2,
      title: 'EYD Edisi V: Partikel pun & per Serta Gabungan Kata',
      timeTarget: '70 dtk/soal',
      oneLiner: 'Menghafal 12 konjungsi pun yang wajib digabung dan aturan spasi partikel per.',
      summary: 'Partikel pun pada prinsipnya ditulis terpisah dari kata yang mendahuluinya, kecuali pada 12 konjungsi penghubung padu. Sedangkan partikel per yang bermakna "demi", "tiap", atau "mulai" selalu dipisah.',
      coreConcept: '1) Partikel "pun" bermakna "juga" atau "saja": WAJIB DIPISAH (apa pun, siapa pun, satu kali pun, malam pun tiba). DAFTAR 12 PUN YANG DIGABUNG: adapun, andaipun, ataupun, bagaimanapun, biarpun, kalaupun, kendatipun, maupun, meskipun, sekalipun (dalam arti meskipun), sungguhpun, walaupun. 2) Partikel "per" yang bermakna "tiap" (per kilogram), "demi" (satu per satu), atau "mulai" (per 1 Januari) SELALU DIPISAH. 3) Bentuk terikat (antar-, pasca-, pra-, sub-, multi-, non-) WAJIB DIGABUNG dengan kata berikutnya (antarkota, pascasarjana, nonmigas), KECUALI jika bertemu kata kapital maka diberi tanda hubung (non-ASEAN).',
      formulaBox: '1. 12 Konjungsi Padu "pun" (DIGABUNG):\n   adapun, andaipun, ataupun, bagaimanapun, biarpun,\n   kalaupun, kendatipun, maupun, meskipun, sekalipun,\n   sungguhpun, walaupun.\n\n2. "pun" Lepas (DIPISAH):\n   apa pun, siapa pun, di mana pun, kapan pun, sedikit pun.\n\n3. Bentuk Terikat (DIGABUNG):\n   pascabencana, antardisiplin, multitalenta, subbagian.\n   KECUALI huruf kapital: non-Indonesia, pan-Asia (pakai tanda hubung -).',
      trapRadar: 'Jebakan Utama: Kata "apapun" dan "siapapun" sering ditulis digabung di media sosial. Di UTBK-SNBT, "apapun" adalah SALAH BESAR! Bentuk bakunya adalah "apa pun" dan "siapa pun".',
      steps: [
        'Pindai keberadaan kata yang berakhiran "pun" pada kalimat.',
        'Cocokkan dengan 12 daftar konjungsi padu. Jika bukan salah satu dari 12 kata tersebut, wajib dipisah!',
        'Periksa kata berawalan "pasca-", "antar-", "non-": pastikan ditulis serangkai tanpa spasi.'
      ],
      guidedExample: {
        problem: 'Perbaikilah kesalahan ejaan pada kalimat: "Siapapun tidak boleh egois, walau pun dalam kondisi sulit sekalipun."',
        identify: 'Tiga bentuk pun: "Siapapun", "walau pun", "sekalipun".',
        process: '1) Siapapun bukan konjungsi padu, berarti "siapa pun" (pisah). 2) walau pun adalah konjungsi padu, berarti "walaupun" (gabung). 3) sekalipun bermakna meskipun, berarti digabung.',
        answer: '"Siapa pun tidak boleh egois, walaupun dalam kondisi sulit sekalipun."'
      },
      drills: [
        {
          q: 'Penulisan partikel "pun" dan "per" yang BENAR terdapat pada kalimat...',
          options: [
            'Harga beras naik menjadi Rp15.000,- perkilogram mulai hari ini.',
            'Walaupun lelah, sedikitpun ia tidak mengeluh selama perjalanan.',
            'Apa pun keputusan dewan juri, peserta harus menerima dengan lapang dada.',
            'Satu persatu demonstran meninggalkan area gedung parlemen.',
            'Bagai mana pun juga, persahabatan harus tetap terjaga.'
          ],
          ans: 2,
          explanation: '"Apa pun" tepat dipisah. Pilihan lain salah: perkilogram (seharusnya per kilogram), sedikitpun (sedikit pun), satu persatu (satu per satu), Bagai mana pun (Bagaimanapun).'
        },
        {
          q: 'Penulisan bentuk terikat yang TEPAT sesuai kaidah adalah...',
          options: [
            'pasca panen dan antar kota',
            'pascapanen dan antarkota',
            'pasca-panen dan antar-kota',
            'pascapanen dan antar kota',
            'pasca panen dan antarkota'
          ],
          ans: 1,
          explanation: 'Bentuk terikat pasca- dan antar- wajib ditulis serangkai dengan kata dasar yang mengikutinya: pascapanen dan antarkota.'
        },
        {
          q: 'Manakah kalimat yang menggunakan bentuk terikat dengan tanda hubung secara BENAR?',
          options: [
            'Program non-pemerintah ini didanai oleh yayasan amal.',
            'Konferensi tersebut dihadiri delegasi non-ASEAN.',
            'Ia mengikuti seminar pasca-sarjana di kampus ternama.',
            'Kegiatan antar-mahasiswa berlangsung semarak.',
            'Perusahaan itu memproduksi pakaian anti-air.'
          ],
          ans: 1,
          explanation: 'Bentuk terikat yang diikuti oleh singkatan berhuruf kapital (ASEAN) wajib dihubungkan dengan tanda hubung: "non-ASEAN".'
        }
      ],
      flashcards: [
        { front: 'Bagaimana penulisan "apa pun" dan "siapa pun"?', back: 'Dipisah ("apa pun", "siapa pun").' },
        { front: 'Berapa jumlah konjungsi padu "pun" yang wajib digabung?', back: 'Ada 12 kata (adapun, andaipun, ataupun, bagaimanapun, biarpun, kalaupun, kendatipun, maupun, meskipun, sekalipun, sungguhpun, walaupun).' },
        { front: 'Bagaimana penulisan partikel "per" yang bermakna "tiap"?', back: 'Dipisah (contoh: per lembar, per orang).' },
        { front: 'Bagaimana penulisan "antarsiswa" dan "pascabencana"?', back: 'Digabung serangkai tanpa spasi dan tanpa tanda hubung.' },
        { front: 'Kapan bentuk terikat memakai tanda hubung (-)?', back: 'Saat diikuti kata yang diawali huruf kapital (contoh: non-Asia, pro-Indonesia).' }
      ],
      commonMistakes: [
        'Menulis "apapun" dan "siapapun" secara serangkai.',
        'Menulis "pasca panen" dan "antar kota" secara terpisah dengan spasi.'
      ]
    },
    {
      id: 'pbm-05',
      subtest: 'PBM',
      day: 3,
      title: 'EYD Edisi V: Penulisan Kata Serapan & Bentuk Terikat',
      timeTarget: '70 dtk/soal',
      oneLiner: 'Menerapkan kaidah penyerapan akhiran -tion -> -si, -ic -> -ik, dan fonem asing baku.',
      summary: 'Bahasa Indonesia menyerap kata asing melalui adaptasi fonologis dan morfologis sesuai pedoman penyerapan istilah EYD Edisi V.',
      coreConcept: 'Aturan baku penyerapan: Akhiran Inggris "-tion" diserap menjadi "-si" (communication -> komunikasi, coordination -> koordinasi, bukan koordinir). Akhiran "-ic" menjadi "-ik" (electronic -> elektronik). Akhiran "-ism" menjadi "-isme" (patriotism -> patriotisme). Huruf "c" di depan e, i, y diserap menjadi "s" (central -> sentral, circulation -> sirkulasi). Huruf "c" di depan a, u, o menjadi "k" (computer -> komputer, construction -> konstruksi). Gugus konsonan akhir "-ct" diserap menjadi "-k" (product -> produk, project -> proyek).',
      formulaBox: '1. Pola Penyerapan Akhiran Asing Baku:\n   - -tion  ===>  -si (globalization -> globalisasi)\n   - -ity   ===>  -itas (activity -> aktivitas, bukan aktifitas!)\n   - -ic    ===>  -ik (academic -> akademik)\n   - -ive   ===>  -if (effective -> efektif)\n\n2. Jebakan Huruf F vs V:\n   - Sifat/Adjektiva: aktif, pasif, produktif (memakai huruf F).\n   - Nomina/Kebendaan: aktivitas, pasivitas, produktivitas (memakai huruf V!).',
      trapRadar: 'Jebakan Utama: Kata "aktifitas" vs "aktivitas". Karena kata asalnya adalah "activity" (-ity diserap jadi -itas), bentuk bakunya adalah AKTIVITAS (memakai v). Namun kata sifatnya adalah AKTIF (memakai f).',
      steps: [
        'Identifikasi apakah kata tersebut merupakan kata serapan asing.',
        'Periksa apakah kata tersebut berbentuk nomina (-itas, -si, -isme) atau adjektiva (-if, -ik).',
        'Waspadai kesalahan umum seperti "tehnik" (baku: teknik), "kwalitas" (kualitas), dan "ijazah" (bukan ijasah).'
      ],
      guidedExample: {
        problem: 'Pilihlah bentuk kata serapan yang baku untuk melengkapi kalimat berikut: "Tingkat [produktifitas / produktivitas] kerja dipengaruhi oleh sarana prasarana yang [efektip / efektif]."',
        identify: 'Dua kata serapan: bentukan -itas dan bentukan -if.',
        process: 'Akhiran -ity diserap menjadi -itas dengan fonem v (produktivitas). Akhiran -ive diserap menjadi -if (efektif).',
        answer: 'produktivitas dan efektif.'
      },
      drills: [
        {
          q: 'Penulisan kata serapan yang TEPAT terdapat pada kalimat...',
          options: [
            'Proses akreditasi laboratorium itu memerlukan standarisasi peralatan yang ketat.',
            'Kreatifitas generasi muda harus diwadahi melalui program inkubasi bisnis.',
            'Peneliti mempresentasikan hipotesa awal di hadapan dewan penguji.',
            'Karakteristik kepemimpinan transformasional sangat relevan di era digital.',
            'Perusahaan tersebut menerapkan sistim manajemen mutu ISO.'
          ],
          ans: 3,
          explanation: '"Karakteristik" baku (dari characteristic). Opsi lain salah: standarisasi (seharusnya standardisasi), kreatifitas (kreativitas), hipotesa (hipotesis), sistim (sistem).'
        },
        {
          q: 'Manakah pasangan kata serapan baku yang SELURUHNYA BENAR?',
          options: [
            'Teknik dan metoda',
            'Teknik dan metode',
            'Tehnik dan metode',
            'Tekhnik dan metoda',
            'Tehnik dan metoda'
          ],
          ans: 1,
          explanation: '"Teknik" (bukan tehnik) dan "metode" (bukan metoda).'
        },
        {
          q: 'Kata dasar yang benar untuk pembentukan istilah serapan "standardisasi" adalah...',
          options: [
            'Standar',
            'Standard',
            'Standardisir',
            'Standarisir',
            'Standarisasi'
          ],
          ans: 1,
          explanation: 'Diserap dari kata "standardization" sehingga mempertahankan huruf "d": standardisasi.'
        }
      ],
      flashcards: [
        { front: 'Manakah yang baku: "aktivitas" atau "aktifitas"?', back: 'Aktivitas (dengan huruf v).' },
        { front: 'Manakah yang baku: "standardisasi" atau "standarisasi"?', back: 'Standardisasi (dengan huruf d).' },
        { front: 'Manakah yang baku: "efektif" atau "efektip"?', back: 'Efektif (dengan huruf f).' },
        { front: 'Manakah yang baku: "metode" atau "metoda"?', back: 'Metode (dengan huruf e).' },
        { front: 'Manakah yang baku: "hipotesis" atau "hipotesa"?', back: 'Hipotesis (dengan akhiran -sis).' }
      ],
      commonMistakes: [
        'Menulis "aktifitas" dan "kreatifitas" menggunakan huruf f.',
        'Menulis "standarisasi" tanpa huruf d.'
      ]
    },
    {
      id: 'pbm-06',
      subtest: 'PBM',
      day: 3,
      title: 'Kalimat Efektif: Keutuhan Subjek & Predikat (Anti-Preposisi Awal)',
      timeTarget: '75 dtk/soal',
      oneLiner: 'Menyelamatkan Subjek yang hilang akibat preposisi awal dan menyelamatkan Predikat dari jebakan kata yang.',
      summary: 'Syarat mutlak kalimat efektif bahasa Indonesia adalah memiliki Subjek (S) dan Predikat (P) yang jelas. Kesalahan paling lazim di UTBK adalah kalimat yang diawali preposisi sehingga seluruh bagian awal menjadi Keterangan dan kehilangan Subjek.',
      coreConcept: '1) Penyakit Kehilangan Subjek: Preposisi (Dalam, Bagi, Untuk, Pada, Berdasarkan, Melalui) yang diletakkan di depan Subjek tanpa tanda koma pengunci akan mengubah Subjek menjadi Keterangan. Jika setelahnya langsung predikat meN-, kalimat itu BUNTUNG TANPA SUBJEK! 2) Penyakit Kehilangan Predikat: Kata "yang" menyulap kata kerja menjadi perluasan kata benda. Jika di depan Predikat utama disisipi kata "yang", kalimat tersebut hanya berupa frasa Subjek yang panjang tanpa Predikat.',
      formulaBox: '1. Rumus Kalimat Rusak (Kehilangan Subjek):\n   - SALAH: "Dalam seminar itu (K) membahas (P) pemanasan global (O)." -> SIAPA SUBJEKNYA?\n   - PERBAIKAN 1: "Seminar itu (S) membahas (P) pemanasan global (O)."\n   - PERBAIKAN 2: "Dalam seminar itu (K), pakar (S) membahas (P) pemanasan global (O)."\n\n2. Rumus Kalimat Rusak (Kehilangan Predikat):\n   - SALAH: "Gedung baru yang dibangun di pusat kota itu." -> HANYA SUBJEK!\n   - PERBAIKAN: "Gedung baru itu (S) dibangun (P) di pusat kota (K)."',
      trapRadar: 'Jebakan Utama: Frasa panjang yang diawali "Berdasarkan hasil penelitian ini menunjukkan bahwa...". Kalimat ini SALAH BESAR karena tidak memiliki Subjek! Hapus kata "Berdasarkan" agar kalimat menjadi bersubjek.',
      steps: [
        'Lihat kata pertama kalimat: jika diawali kata depan (Dalam, Bagi, Untuk, Pada, Berdasarkan), tanyakan: di mana Subjeknya?',
        'Cari kata kerja utama (Predikat). Pastikan di sebelah kiri Predikat TIDAK ADA kata "yang".',
        'Uji keterbagian: apakah bisa dibagi menjadi potongan struktur [S] - [P] - [O/Pel] - [K] secara logis?'
      ],
      guidedExample: {
        problem: 'Perbaikilah kalimat tidak efektif berikut agar memiliki struktur S-P yang utuh: "Untuk mengatasi krisis air bersih di desa tersebut memerlukan bantuan sumur bor."',
        identify: 'Kata pertama "Untuk..." menjadikan awal kalimat sebagai Keterangan. Lalu langsung bertemu predikat aktif "memerlukan". Kalimat ini TIDAK MEMILIKI SUBJEK.',
        process: 'Hapus preposisi "Untuk" di awal kalimat sehingga frasa "Mengatasi krisis air bersih di desa tersebut" berfungsi sebagai Subjek (S), diikuti predikat "memerlukan" (P), dan objek "bantuan sumur bor" (O).',
        answer: '"Mengatasi krisis air bersih di desa tersebut memerlukan bantuan sumur bor."'
      },
      drills: [
        {
          q: 'Manakah di antara kalimat berikut yang MEMILIKI SUBJEK DAN PREDIKAT YANG UTUH (Kalimat Efektif)?',
          options: [
            'Bagi seluruh warga diimbau untuk waspada terhadap curah hujan ekstrem.',
            'Di dalam buku panduan ini memuat tata tertib pelaksanaan praktikum laboratorium.',
            'Berdasarkan laporan keuangan kuartal ketiga membuktikan pemulihan laba bersih perseroan.',
            'Penelitian yang dilakukan oleh tim dosen universitas terkemuka itu.',
            'Hasil pengujian laboratorium membuktikan bahwa sampel air tanah tersebut layak konsumsi.'
          ],
          ans: 4,
          explanation: 'Opsi E memiliki Subjek ("Hasil pengujian laboratorium"), Predikat ("membuktikan"), dan Objek klausa ("bahwa sampel air tanah tersebut layak konsumsi"). Opsi A, B, C tidak bersubjek karena diawali preposisi. Opsi D tidak berpredikat.'
        },
        {
          q: 'Kalimat "Dengan diterapkannya teknologi otomasi pabrik dapat memangkas biaya operasional" menjadi kalimat efektif jika diubah menjadi...',
          options: [
            'Dengan diterapkannya teknologi otomasi pabrik sehingga dapat memangkas biaya operasional.',
            'Penerapan teknologi otomasi pabrik dapat memangkas biaya operasional.',
            'Dengan teknologi otomasi pabrik yang mana dapat memangkas biaya operasional.',
            'Otomasi pabrik yang diterapkan dengan pemangkasan biaya operasional.',
            'Diterapkannya teknologi otomasi pabrik untuk memangkas biaya operasional.'
          ],
          ans: 1,
          explanation: 'Menghapus kata "Dengan" dan mengubah kata kerja pasif menjadi nomina "Penerapan teknologi..." memunculkan Subjek yang utuh dan jelas bagi predikat "dapat memangkas".'
        },
        {
          q: 'Bagian kalimat yang dicetak miring: "*Rencana pembangunan jaringan pipa transmisi gas alam yang menghubungkan Pulau Jawa dan Sumatra*." belum dapat disebut sebagai kalimat utuh karena...',
          options: [
            'Tidak memiliki unsur Keterangan',
            'Tidak memiliki unsur Subjek',
            'Kehilangan unsur Predikat utama akibat adanya kata "yang"',
            'Terlalu banyak memuat kata serapan asing',
            'Menggunakan tanda titik di akhir kalimat'
          ],
          ans: 2,
          explanation: 'Adanya kata perluasan "yang" membuat seluruh rangkaian panjang tersebut hanya berstatus sebagai frasa Subjek tanpa adanya Predikat utama.'
        }
      ],
      flashcards: [
        { front: 'Apa akibat meletakkan kata "Dalam" atau "Bagi" tepat di depan Subjek?', back: 'Subjek berubah menjadi Keterangan sehingga kalimat kehilangan Subjek.' },
        { front: 'Bagaimana cara memperbaiki kalimat "Berdasarkan data membuktikan..."?', back: 'Hapus kata "Berdasarkan" ("Data membuktikan...") ATAU ubah predikat menjadi pasif ("Berdasarkan data, dibuktikan...").' },
        { front: 'Apa efek kata "yang" jika diletakkan tepat sebelum kata kerja utama?', back: 'Menyulap kata kerja menjadi perluasan kata benda sehingga kalimat kehilangan Predikat.' },
        { front: 'Berapa syarat minimal konstituen kalimat efektif bahasa Indonesia?', back: 'Minimal memiliki satu Subjek dan satu Predikat yang jelas.' },
        { front: 'Apakah kalimat "Di Jakarta terjadi gempa" efektif?', back: 'Ya, efektif karena polanya K (Di Jakarta) - P (terjadi) - S (gempa).' }
      ],
      commonMistakes: [
        'Mengira kalimat panjang ilmiah sudah pasti efektif padahal tidak memiliki Subjek.',
        'Menggunakan kata depan di awal kalimat yang langsung diikuti kata kerja transitif meN-.'
      ]
    },
    {
      id: 'pbm-07',
      subtest: 'PBM',
      day: 4,
      title: 'Kalimat Efektif: Kehematan Kata & Eliminasi Pleonasme',
      timeTarget: '70 dtk/soal',
      oneLiner: 'Memotong pemborosan kata bersinonim ganda dan penjamakan yang berulang.',
      summary: 'Kehematan kata (conciseness) menuntut tidak digunakannya kata-kata yang mubazir atau bersinonim ganda (pleonasme) tanpa mengurangi keutuhan makna pesan kalimat.',
      coreConcept: 'Bentuk pleonasme paling populer di UTBK: (1) Penanda jamak ganda: "para tamu-tamu" (seharusnya "para tamu" atau "tamu-tamu"), "banyak faktor-faktor", "daftar nama-nama". (2) Kata bersinonim dipakai bersamaan: "sejak dari" (pilih sejak atau dari), "agar supaya" (pilih agar atau supaya), "hanya... saja" (pilih hanya atau saja), "sangat... sekali" (pilih sangat atau sekali). (3) Keterangan yang maknanya sudah terkandung pada kata kerja: "maju ke depan" (maju sudah pasti ke depan), "turun ke bawah", "naik ke atas", "mundur ke belakang".',
      formulaBox: '1. Daftar Pleonasme Populer (Wajib Dieliminasi):\n   - SALAH: para guru-guru  ===>  BENAR: para guru / guru-guru\n   - SALAH: sejak dari kemarin  ===>  BENAR: sejak kemarin / dari kemarin\n   - SALAH: agar supaya paham  ===>  BENAR: agar paham / supaya paham\n   - SALAH: hanya untuk kamu saja  ===>  BENAR: hanya untuk kamu / untuk kamu saja\n   - SALAH: saling bantu-membantu  ===>  BENAR: saling membantu / bantu-membantu\n   - SALAH: naik ke atas  ===>  BENAR: naik',
      trapRadar: 'Jebakan Utama: Frasa "adalah merupakan". Kata "adalah" dan "merupakan" sama-sama berfungsi sebagai kopula pendefinisi. Menggunakan keduanya sekaligus ("Hal itu adalah merupakan bukti...") adalah pleonasme fatal!',
      steps: [
        'Pindai keberadaan kata penanda jamak (para, banyak, berbagai, daftar, seluruh) dan periksa apakah kata bendanya diulang.',
        'Pindai pasangan kata bersinonim yang berdekatan (sejak dari, agar supaya, amat sangat sekali).',
        'Coret salah satu kata yang mubazir tersebut agar kalimat menjadi ringkas dan padat.'
      ],
      guidedExample: {
        problem: 'Perbaikilah kalimat pleonastis berikut: "Demi untuk memperlancar arus mudik, para aparat kepolisian mengimbau agar supaya pengemudi beristirahat di rest area."',
        identify: 'Tiga pemborosan kata: (1) "Demi untuk", (2) "para aparat", (3) "agar supaya".',
        process: 'Pilih "Demi" (coret untuk), pertahankan "aparat kepolisian" (aparat sudah bermakna jamak), pilih "agar" (coret supaya).',
        answer: '"Demi memperlancar arus mudik, aparat kepolisian mengimbau agar pengemudi beristirahat di tempat istirahat."'
      },
      drills: [
        {
          q: 'Manakah kalimat berikut yang BEBAS dari kesalahan pleonasme?',
          options: [
            'Banyak berbagai macam rintangan menghadang jalannya ekspedisi alam tersebut.',
            'Pemerintah daerah berupaya keras memajukan kesejahteraan masyarakat pedesaan.',
            'Ia mundur ke belakang beberapa langkah saat melihat percikan api membesar.',
            'Sejak dari kecil ia sudah terbiasa hidup mandiri dan berdisiplin tinggi.',
            'Penyakit diabetes adalah merupakan gangguan metabolik kronis.'
          ],
          ans: 1,
          explanation: 'Opsi B hemat, padat, dan bebas dari kata mubazir. Opsi lain pleonasme: A (Banyak berbagai macam), C (mundur ke belakang), D (Sejak dari), E (adalah merupakan).'
        },
        {
          q: 'Kalimat "Daftar nama-nama peserta pelatihan kewirausahaan dapat diunduh di laman resmi" tidak hemat karena penggunaan frasa...',
          options: [
            'Daftar nama-nama',
            'peserta pelatihan',
            'kewirausahaan',
            'dapat diunduh',
            'di laman resmi'
          ],
          ans: 0,
          explanation: 'Kata "daftar" sudah menunjukkan himpunan jamak, sehingga tidak perlu diikuti kata ulang jamak "nama-nama". Seharusnya: "Daftar nama peserta...".'
        },
        {
          q: 'Bentuk yang paling efektif untuk menggantikan frasa "saling rangkul-merangkul" adalah...',
          options: [
            'saling rangkul-merangkul sekali',
            'saling berangkulan',
            'merangkul-rangkul bersama',
            'saling merangkul atau rangkul-merangkul',
            'sama-sama saling merangkul'
          ],
          ans: 3,
          explanation: 'Gunakan salah satu: "saling merangkul" ATAU "rangkul-merangkul" (keduanya bermakna resiprokal/saling).'
        }
      ],
      flashcards: [
        { front: 'Apa pengertian pleonasme?', back: 'Pemakaian kata-kata yang berlebihan dan bersinonim ganda dalam satu konstruksi kalimat.' },
        { front: 'Mengapa "para hadirin" salah?', back: 'Karena "hadirin" sudah bermakna jamak (semua orang yang hadir), tidak perlu kata "para".' },
        { front: 'Bagaimana perbaikan dari "adalah merupakan"?', back: 'Pilih salah satu: gunakan "adalah" saja ATAU "merupakan" saja.' },
        { front: 'Mengapa "turun ke bawah" pleonastis?', back: 'Karena kata "turun" arah geraknya sudah pasti ke bawah.' },
        { front: 'Bagaimana perbaikan dari "agar supaya"?', back: 'Pilih salah satu: gunakan "agar" saja atau "supaya" saja.' }
      ],
      commonMistakes: [
        'Memakai kata "para" bersama kata ulang jamak (para siswa-siswa).',
        'Menggunakan "sejak dari" dan "hanya... saja" secara bersamaan.'
      ]
    },
    {
      id: 'pbm-08',
      subtest: 'PBM',
      day: 4,
      title: 'Kalimat Efektif: Kesejajaran Bentuk (Paralelisme Afiksasi)',
      timeTarget: '75 dtk/soal',
      oneLiner: 'Menyelaraskan pola imbuhan verba aktif/pasif atau nomina pada rincian perincian kalimat.',
      summary: 'Paralelisme menuntut satuan rincian gagasan yang sejajar dihubungkan konjungsi setara (dan, atau, serta) menggunakan kelas kata dan bentuk imbuhan (afiksasi) yang seragam.',
      coreConcept: 'Jika rincian pertama berupa verba aktif berimbuhan meN-, maka rincian kedua dan ketiga WAJIB verba aktif berimbuhan meN-. Jika rincian pertama berupa nomina peN-...-an, rincian berikutnya WAJIB nomina. Kesalahan fatal adalah mencampuradukkan verba aktif meN- dengan verba pasif di- atau nomina dalam satu deret perincian yang dihubungkan kata "dan".',
      formulaBox: '1. Aturan Paralelisme Verba Aktif (meN-):\n   - SALAH: "Tahapannya meliputi menyusun rencana, pelaksanaan, dan evaluasi."\n   - BENAR: "Tahapannya meliputi menyusun rencana, melaksanakan program, dan mengevaluasi hasil."\n\n2. Aturan Paralelisme Nomina (peN-...-an):\n   - BENAR: "Tahapannya meliputi penyusunan rencana, pelaksanaan program, dan pengevaluasian hasil."\n\n3. Aturan Paralelisme Pasif (di-):\n   - BENAR: "Dokumen itu diperiksa kelengkapannya, diverifikasi keasliannya, lalu ditandatangani oleh pejabat."',
      trapRadar: 'Jebakan Utama: Soal rincian panjang yang menyelipkan kata nomina berakhiran -an di tengah deretan kata kerja aktif berawalan meN- (misal: "membersihkan, merapikan, dan perbaikan"). Kata "perbaikan" wajib diubah menjadi "memperbaiki"!',
      steps: [
        'Cari kata sambung rincian ("dan", "atau", "serta") di dalam kalimat.',
        'Tandai kata-kata yang dirinci sebelum dan sesudah kata sambung tersebut.',
        'Periksa imbuhannya: pastikan seluruh anggota rincian memakai imbuhan yang seragam (meN- semua, di- semua, atau peN-an semua).'
      ],
      guidedExample: {
        problem: 'Perbaikilah kalimat agar memenuhi syarat keparalelan: "Langkah mitigasi bencana tanah longsor meliputi penanaman pohon berakar tunjang, memasang sensor pergerakan tanah, dan pembuatan saluran drainase lereng."',
        identify: 'Tiga rincian: "penanaman" (nomina), "memasang" (verba aktif), "pembuatan" (nomina). Terjadi ketimpangan bentuk!',
        process: 'Ubah kata kerja aktif "memasang" menjadi bentuk nomina peN-an: "pemasangan", sehingga ketiganya sejajar menjadi nomina.',
        answer: '"Langkah mitigasi bencana tanah longsor meliputi penanaman pohon berakar tunjang, pemasangan sensor pergerakan tanah, dan pembuatan saluran drainase lereng."'
      },
      drills: [
        {
          q: 'Kalimat berikut yang MEMENUHI SYARAT KEPARALELAN BENTUK adalah...',
          options: [
            'Kegiatan penyuluhan itu bertujuan memberikan informasi, meningkatkan kesadaran, dan membangun kepedulian warga.',
            'Tugas kurir meliputi penerimaan paket, mengantarkan barang, dan pelaporan status pengiriman.',
            'Sampah organik diolah menjadi kompos, sedangkan sampah anorganik didaur ulang serta penjualan ke bank sampah.',
            'Perusahaan tersebut berencana memperluas jaringan pemasaran, meningkatkan kapasitas pabrik, dan perbaikan layanan konsumen.',
            'Ia dikenal sebagai sosok yang cerdas, memiliki dedikasi, dan jujur.'
          ],
          ans: 0,
          explanation: 'Opsi A sangat paralel: ketiganya menggunakan verba aktif transitif meN- ("memberikan", "meningkatkan", "membangun"). Opsi lain tidak paralel karena mencampuradukkan verba dan nomina.'
        },
        {
          q: 'Kalimat: "Program revitalisasi pasar rakyat difokuskan pada perbaikan atap bocor, memperlebar lorong pedagang, dan penataan saluran sanitasi." Agar paralel, kata "memperlebar" harus diganti menjadi...',
          options: [
            'pelebaran',
            'diperlebar',
            'memperlebarkan',
            'terlebarkan',
            'lebaran'
          ],
          ans: 0,
          explanation: 'Rincian lain menggunakan nomina konfiks peN-...-an ("perbaikan", "penataan"), sehingga kata yang tepat adalah "pelebaran".'
        },
        {
          q: 'Manakah bentuk deret pasif yang paralel?',
          options: [
            'Berkas itu telah diserahkan, diperiksa, dan diparaf oleh pimpinan.',
            'Berkas itu telah diserahkan, pemeriksaan, dan diparaf oleh pimpinan.',
            'Berkas itu telah penyerahan, diperiksa, dan paraf oleh pimpinan.',
            'Berkas itu telah diserahkan, memeriksa, dan diparaf oleh pimpinan.',
            'Berkas itu telah serah, periksa, dan paraf oleh pimpinan.'
          ],
          ans: 0,
          explanation: 'Ketiganya seragam memakai verba pasif berawalan di- ("diserahkan", "diperiksa", "diparaf").'
        }
      ],
      flashcards: [
        { front: 'Apa pengertian paralelisme dalam kalimat efektif?', back: 'Kesejajaran jenis kata atau bentuk imbuhan pada rincian yang dihubungkan konjungsi setara.' },
        { front: 'Bolehkah merangkai verba meN- dengan nomina peN-an dalam rincian?', back: 'TIDAK BOLEH, harus diseragamkan salah satu (meN- semua atau peN-an semua).' },
        { front: 'Bagaimana membuat deret rincian pasif yang paralel?', back: 'Seluruh kata kerja dalam rincian memakai imbuhan di- (misal: diolah, dikemas, dan dipasarkan).' },
        { front: 'Apa konjungsi penghubung utama yang menuntut paralelisme?', back: 'Konjungsi setara: dan, atau, serta.' },
        { front: 'Berapa target waktu per soal paralelisme?', back: 'Sekitar 60-75 detik.' }
      ],
      commonMistakes: [
        'Membiarkan satu kata berawalan meN- di antara deretan kata peN-an.',
        'Mengabaikan ketidaksejajaran kelas kata (adjektiva dicampur dengan verba).'
      ]
    },
    {
      id: 'pbm-09',
      subtest: 'PBM',
      day: 5,
      title: 'Kalimat Efektif: Ketegasan Makna & Kelogisan Bernalar',
      timeTarget: '75 dtk/soal',
      oneLiner: 'Menghilangkan makna ambigu dan menolak konstruksi kalimat yang bertentangan dengan akal sehat.',
      summary: 'Kelogisan bahasa menuntut makna kalimat dapat diterima akal sehat dan tidak ambigu (bermakna ganda). Kalimat yang gramatikal secara ejaan bisa saja salah jika maknanya tidak logis secara nalar.',
      coreConcept: 'Contoh kalimat tidak logis yang sering muncul di UTBK: (1) "Waktu dan tempat kami persilakan." -> Logikanya, waktu dan tempat adalah benda mati yang tidak bisa dipersilakan! Yang dipersilakan adalah orangnya (misal: "Bapak Bupati kami persilakan"). (2) "Mayat wanita yang ditemukan itu sering melamun." -> Mayat tidak bisa melamun! (Seharusnya: "Semasa hidupnya, wanita yang mayatnya ditemukan itu sering melamun"). (3) Ambiguitas frasa: "Lukisan Affandi yang mahal itu" (apakah karya buatan Affandi atau lukisan wajah Affandi milik orang lain?).',
      formulaBox: '1. Daftar Kalimat Tidak Logis Terkenal di UTBK:\n   - SALAH: "Waktu dan tempat kami persilakan."\n     BENAR: "Kepada Bapak Kepala Sekolah, kami persilakan."\n   - SALAH: "Untuk mempersingkat waktu, kita mulai acara ini."\n     BENAR: "Untuk menghemat waktu, kita mulai acara ini." (Waktu tidak bisa dipersingkat, durasi hanya bisa dihemat)\n   - SALAH: "Mobil penabrak pejalan kaki itu masuk ke jurang."\n     BENAR: "Pengemudi mobil yang menabrak pejalan kaki itu..."',
      trapRadar: 'Jebakan Utama: Ungkapan seremonial yang sering didengar di acara sekolah ("Untuk mempersingkat waktu...", "Waktu dan tempat kami haturkan...") SELURUHNYA TIDAK LOGIS menurut kaidah tata bahasa Indonesia baku!',
      steps: [
        'Uji logika Subjek dan Predikat: apakah Subjek benar-benar mampu melakukan tindakan pada Predikat?',
        'Periksa apakah ada frasa yang memiliki tafsir ganda (ambigu).',
        'Ganti kata-kata kiasan seremonial yang tidak masuk akal dengan bentuk lugas rasional.'
      ],
      guidedExample: {
        problem: 'Perbaikilah kalimat tidak logis berikut: "Bagi yang membawa telepon genggam harap dimatikan."',
        identify: 'Subjek yang disapa adalah orang ("Bagi yang membawa telepon genggam"), tetapi predikat pasifnya "harap dimatikan". Masa orangnya yang dimatikan?',
        process: 'Objek yang harus dimatikan adalah telepon genggamnya, bukan orangnya.',
        answer: '"Telepon genggam harap dimatikan oleh pemiliknya." atau "Pemilik telepon genggam dimohon mematikan perangkatnya."'
      },
      drills: [
        {
          q: 'Manakah kalimat berikut yang memenuhi syarat KELOGISAN BERPIKIR?',
          options: [
            'Waktu dan tempat kami persilakan kepada penceramah.',
            'Untuk menghemat waktu, rangkaian acara pembukaan segera kita mulai.',
            'Pencuri sepeda motor milik warga yang kabur itu berhasil ditangkap polisi.',
            'Bapak kepala desa memarkir mobilnya di atas jembatan yang rusak itu.',
            'Mayat pria yang ditemukan di tepi sungai itu sering berkebun di waktu luang.'
          ],
          ans: 1,
          explanation: 'Opsi B logis: waktu dapat dihemat (bukan dipersingkat). Opsi lain tidak logis: A (waktu/tempat dipersilakan), C (sepeda motor kabur?), E (mayat berkebun?).'
        },
        {
          q: 'Kalimat "Kucing makan tikus mati" bermakna ambigu. Manakah perbaikan yang TEPAT agar bermakna bahwa tikus tersebut sudah dalam keadaan mati sebelum dimakan kucing?',
          options: [
            'Kucing yang mati itu makan tikus.',
            'Kucing makan tikus yang sudah mati.',
            'Kucing mati karena makan tikus.',
            'Tikus makan kucing mati.',
            'Kucing dan tikus sama-sama mati.'
          ],
          ans: 1,
          explanation: 'Menyisipkan klausa relatif penjelas "yang sudah mati" tepat setelah kata tikus mengunci makna secara gamblang dan meniadakan ambiguitas.'
        },
        {
          q: 'Alasan mengapa kalimat "Acara ini bertujuan untuk mempersingkat waktu penyelesaian proyek" tidak logis adalah...',
          options: [
            'Waktu tidak dapat dipersingkat atau dipanjangkan karena satuan waktu bersifat tetap.',
            'Kata bertujuan harus diikuti kata depan dengan.',
            'Proyek selalu membutuhkan waktu lama.',
            'Kata acara tidak boleh berada di awal kalimat.',
            'Kalimat tersebut terlalu panjang.'
          ],
          ans: 0,
          explanation: 'Waktu berjalan konstan 60 detik per menit; waktu tidak bisa dipersingkat, melainkan durasi pengerjaan yang dapat dipercepat atau dihemat.'
        }
      ],
      flashcards: [
        { front: 'Mengapa "Waktu dan tempat kami persilakan" salah?', back: 'Karena waktu dan tempat adalah benda abstrak mati yang tidak bisa dipersilakan; persilakan orangnya.' },
        { front: 'Apa pengganti logis dari "mempersingkat waktu"?', back: '"Menghemat waktu" atau "mengefisienkan waktu".' },
        { front: 'Apa yang dimaksud kalimat ambigu?', back: 'Kalimat yang menimbulkan lebih dari satu penafsiran makna bagi pembaca.' },
        { front: 'Bagaimana mengatasi ambiguitas frasa benda?', back: 'Gunakan kata penjelas penunjuk seperti "yang" atau ubah susunan katanya.' },
        { front: 'Apakah kalimat gramatikal otomatis logis?', back: 'Tidak, struktur kalimat bisa memenuhi S-P tetapi maknanya bertentangan dengan akal sehat.' }
      ],
      commonMistakes: [
        'Menganggap ungkapan MC panggung sudah pasti baku dan logis.',
        'Membiarkan konstruksi pasif yang menjadikan manusia sebagai objek tindakan yang mustahil.'
      ]
    },
    {
      id: 'pbm-10',
      subtest: 'PBM',
      day: 5,
      title: 'Penyuntingan Kalimat Kompleks & Rekonstruksi Paragraf',
      timeTarget: '80 dtk/soal',
      oneLiner: 'Menggabungkan 3 kalimat tunggal menjadi 1 kalimat majemuk bertingkat yang anggun dan presisi.',
      summary: 'Soal level tertinggi di PBM menuntut kemampuan menyunting kalimat kompleks bertingkat yang berantakan menjadi kalimat yang padu, serta merekonstruksi urutan kalimat acak menjadi paragraf yang koheren.',
      coreConcept: 'Prinsip Menggabungkan Kalimat: Identifikasi ide utama sebagai INDUK KALIMAT, lalu jadikan kalimat kedua dan ketiga sebagai ANAK KALIMAT dengan memilih konjungsi subordinatif yang tepat (karena = kausal, meskipun = konsesif, ketika = temporal, bahwa = penjelas isi). Saat menyusun paragraf acak: cari kalimat pembuka yang berdiri sendiri (tidak memuat kata rujukan seperti "hal ini", "oleh sebab itu", atau "ia"), lalu ikuti rantai kronologis atau deduktifnya.',
      formulaBox: '1. Aturan Penggabungan Kalimat Majemuk:\n   - Hilangkan kata yang berulang di kalimat kedua (gunakan elipsis atau pronomina).\n   - Tentukan relasi logis: sebab-akibat, pertentangan, waktu, atau syarat.\n   - Pasang tanda baca koma sesuai aturan letak anak kalimat.\n\n2. Trik Menyusun Paragraf Acak:\n   - Kunci Kalimat 1: Kalimat yang memuat Subjek umum independen tanpa kata ganti rujukan.\n   - Pasangkan pasangan gandeng [K-X dan K-Y] yang memiliki kata rujukan identik.\n   - Eliminasi opsi yang kalimat awalnya bukan kalimat independen.',
      trapRadar: 'Jebakan Utama: Opsi penggabungan kalimat majemuk yang mengubah makna asli dari salah satu kalimat sumbernya. Periksa apakah hubungan sebab-akibatnya tetap searah dengan kalimat aslinya!',
      steps: [
        'Baca kalimat-kalimat tunggal asal dan tentukan hubungan semantik logis di antara ketiganya.',
        'Pilih induk kalimat yang memegang gagasan utama.',
        'Gunakan teknik eliminasi opsi berdasarkan kata hubung yang paling proporsional tanpa menimbulkan pleonasme.'
      ],
      guidedExample: {
        problem: 'Gabungkan ketiga kalimat berikut menjadi SATU kalimat majemuk efektif:\n(1) Pemerintah menyalurkan subsidi benih padi unggul kepada para petani.\n(2) Pasokan beras nasional mencukupi kebutuhan pokok masyarakat.\n(3) Terjadi ancaman kekeringan akibat fenomena El Nino.',
        identify: 'Kalimat 1: penyaluran subsidi (upaya). Kalimat 2: pasokan beras cukup (tujuan/hasil). Kalimat 3: ancaman kekeringan El Nino (kondisi tantangan).',
        process: 'Relasi tantangan (Meskipun ada ancaman kekeringan El Nino), relasi tindakan dan tujuan (pemerintah menyalurkan subsidi benih agar pasokan beras mencukupi).',
        answer: '"Meskipun menghadapi ancaman kekeringan akibat fenomena El Nino, pemerintah tetap menyalurkan subsidi benih padi unggul kepada petani agar pasokan beras nasional mencukupi kebutuhan masyarakat."'
      },
      drills: [
        {
          q: 'Urutan yang paling runtut untuk membentuk paragraf padu dari kalimat acak berikut adalah:\n(1) Partikel nano perak tersebut terbukti mampu merusak dinding sel bakteri patogen.\n(2) Para peneliti mengembangkan bahan kemasan pangan antimikroba berbasis partikel nano perak.\n(3) Akibatnya, masa simpan produk daging segar dapat diperpanjang hingga dua pekan.\n(4) Inovasi ini diharapkan dapat menekan angka kerugian ekonomi akibat pembusukan pangan.',
          options: [
            '(2) - (1) - (3) - (4)',
            '(2) - (3) - (1) - (4)',
            '(1) - (2) - (3) - (4)',
            '(4) - (2) - (1) - (3)',
            '(2) - (4) - (1) - (3)'
          ],
          ans: 0,
          explanation: '(2) Kalimat pembuka umum (pengembangan bahan kemasan nano perak), (1) mekanisme kerja partikel nano merusak sel bakteri, (3) akibatnya memperpanjang masa simpan, (4) dampak harapan ekonomi dari inovasi tersebut. Urutan logis: (2)-(1)-(3)-(4).'
        },
        {
          q: 'Kalimat: "Peneliti menguji efektivitas ekstrak daun kelor. Ekstrak daun kelor dapat menurunkan kadar gula darah. Pengujian dilakukan pada mencit laboratorium." Penggabungan yang PALING EFEKTIF adalah...',
          options: [
            'Peneliti menguji efektivitas ekstrak daun kelor dalam menurunkan kadar gula darah pada mencit laboratorium.',
            'Peneliti menguji ekstrak daun kelor dan dapat menurunkan gula darah serta diuji pada mencit laboratorium.',
            'Karena ekstrak daun kelor menurunkan gula darah, peneliti mengujinya pada mencit laboratorium.',
            'Pengujian pada mencit laboratorium oleh peneliti untuk ekstrak daun kelor yang menurunkan kadar gula darah.',
            'Ekstrak daun kelor diuji oleh peneliti sehingga dapat menurunkan kadar gula darah pada mencit.'
          ],
          ans: 0,
          explanation: 'Opsi A menggabungkan ketiga kalimat secara ringkas, padat, alami, dan mempertahankan Subjek aktif tunggal ("Peneliti menguji efektivitas...").'
        },
        {
          q: 'Manakah tanda bahwa sebuah kalimat TIDAK BISA dijadikan sebagai kalimat pertama dalam suatu paragraf?',
          options: [
            'Kalimat tersebut tidak memuat angka tahun.',
            'Kalimat tersebut diawali frasa rujukan seperti "Dampak dari fenomena tersebut..." atau "Oleh karena itu,...".',
            'Kalimat tersebut memiliki lebih dari 15 kata.',
            'Kalimat tersebut memuat istilah asing yang dicetak miring.',
            'Kalimat tersebut berstruktur S-P-O-K lengkap.'
          ],
          ans: 1,
          explanation: 'Kalimat yang diawali kata rujukan ("tersebut", "ini", "oleh karena itu") mensyaratkan adanya entitas yang sudah diperkenalkan pada kalimat sebelumnya, sehingga tidak mandiri sebagai pembuka.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana menemukan kalimat pembuka pada soal paragraf acak?', back: 'Cari kalimat yang mandiri, umum, dan tidak memiliki kata rujukan penunjuk (ini, itu, hal tersebut).' },
        { front: 'Apa kunci penggabungan 3 kalimat tunggal menjadi kalimat majemuk?', back: 'Tentukan induk kalimat utama dan gunakan konjungsi subordinatif tanpa mengulang kata yang sama.' },
        { front: 'Apa itu kata rujukan anaforis?', back: 'Kata ganti/penunjuk yang merujuk pada hal yang sudah disebutkan sebelumnya (ini, itu, tersebut).' },
        { front: 'Bolehkah menggabungkan kalimat dengan mengubah fakta aslinya?', back: 'TIDAK BOLEH, pesan fakta kalimat sumber harus tetap 100% terjaga.' },
        { front: 'Berapa target waktu per soal rekonstruksi paragraf acak?', back: 'Maksimal 80 detik.' }
      ],
      commonMistakes: [
        'Memilih kalimat yang diawali kata "Selain itu, ..." sebagai kalimat pembuka paragraf.',
        'Mengulang kata benda yang sama persis dalam satu kalimat majemuk hasil penggabungan.'
      ]
    }
  ];

  window.UTBK_MODULES.push(...PBM_MODULES);
})();
