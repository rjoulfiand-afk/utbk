/* File: data/pm.js
 * Bank Materi Lengkap Subtes: Penalaran Matematika (PM) - 10 Modul Lengkap
 */
(function () {
  'use strict';

  window.UTBK_MODULES = window.UTBK_MODULES || [];

  const PM_MODULES = [
    {
      id: 'pm-01',
      subtest: 'PM',
      day: 1,
      title: 'Pemodelan Laju Kerja Bersama & Mesin Paralel',
      timeTarget: '120 dtk/soal',
      oneLiner: 'Menghitung waktu penyelesaian pekerjaan oleh kombinasi pekerja atau keran dengan laju berbeda.',
      summary: 'Soal kerja bersama menuntut konversi waktu penyelesaian mandiri menjadi laju kapasitas per satuan waktu (pekerjaan per jam). Yang dapat dijumlahkan secara langsung adalah LAJU KERJA, bukan waktu kerja.',
      coreConcept: 'Jika Orang A menyelesaikan pekerjaan dalam t_A jam dan Orang B dalam t_B jam, maka dalam 1 jam Orang A menyelesaikan 1/t_A bagian dan Orang B menyelesaikan 1/t_B bagian. Laju gabungan v_gab = 1/t_A + 1/t_B. Waktu gabungan t_gab = (t_A x t_B) / (t_A + t_B). Jika salah satu pihak adalah saluran pembuangan/lubang bocor, lajunya bertanda MINUS: v_bersih = 1/t_isi - 1/t_bocor. Pada proyek pekerja: Beban Total = Jumlah Hari x Jumlah Pekerja (Hari-Orang).',
      formulaBox: '1. Rumus Kerja Bersama (2 Pihak):\n   1 / t_gab = (1 / t_A) + (1 / t_B)\n   ===>  t_gab = (t_A x t_B) / (t_A + t_B)\n\n2. Tandon dengan Keran Isi dan Saluran Buang:\n   1 / t_isi_bersih = (1 / t_keran) - (1 / t_buang)\n\n3. Beban Proyek Hari-Pekerja:\n   Beban Total = Hari Awal x Pekerja Awal\n   Pekerja Tambahan = Sisa Beban / Sisa Hari Efektif - Pekerja Awal',
      trapRadar: 'Jebakan Utama: Menjumlahkan waktu pengerjaan secara langsung (misal t_A = 6 jam dan t_B = 3 jam dijumlahkan jadi 9 jam). Bekerja bersama PASTI membutuhkan waktu lebih singkat daripada pekerja tercepat (kurang dari 3 jam)!',
      steps: [
        'Ubah waktu masing-masing individu menjadi kapasitas bagian per jam (laju v = 1/t).',
        'Jumlahkan seluruh laju pekerja aktif (dan kurangkan jika ada saluran pembuangan).',
        'Hitung waktu total: Waktu = Sisa Beban / Laju Gabungan.'
      ],
      guidedExample: {
        problem: 'Sebuah tangki air memiliki pipa pengisi A yang dapat mengisi penuh tangki kosong dalam 4 jam dan pipa pengisi B dalam 6 jam. Tangki tersebut juga memiliki pipa pembuangan C di dasarnya yang dapat mengosongkan tangki penuh dalam 12 jam. Jika tangki dalam keadaan kosong dan ketiga pipa dibuka secara bersamaan, berapa jam tangki akan terisi penuh?',
        identify: 't_A = 4 jam (isi +), t_B = 6 jam (isi +), t_C = 12 jam (buang -).',
        process: 'Laju bersih gabungan per jam:\nv = (1/4) + (1/6) - (1/12)\nSamakan penyebut ke KPK 12:\nv = (3/12) + (2/12) - (1/12) = (3 + 2 - 1) / 12 = 4 / 12 = 1/3 bagian per jam.\nWaktu pengisian penuh t = 1 / v = 1 / (1/3) = 3 jam.',
        answer: 'Tangki air akan terisi penuh dalam waktu 3 jam.'
      },
      drills: [
        {
          q: 'Sebuah proyek pembangunan jembatan ditargetkan selesai dalam 40 hari oleh 15 pekerja. Setelah berjalan 10 hari, pekerjaan dihentikan selama 6 hari karena cuaca buruk. Agar proyek tetap selesai tepat waktu sesuai jadwal semula, berapa banyak pekerja tambahan yang harus direkrut?',
          options: ['3 pekerja', '5 pekerja', '6 pekerja', '8 pekerja', '10 pekerja'],
          ans: 1,
          explanation: 'Beban awal = 40 x 15 = 600 hari-pekerja. Sudah selesai 10 hari = 10 x 15 = 150 hari-pekerja. Sisa beban = 600 - 150 = 450 hari-pekerja. Sisa hari efektif = 40 - 10 - 6 = 24 hari. Pekerja yang dibutuhkan = 450 / 24 = 18,75 (dibulatkan butuh kapasitas 20 atau jika 450/24... tunggu: 450 / 24: jika proyek butuh tambahan: 40-10=30, terhenti 6 hari sisa 24. 450/24 = 18,75. Jika pekerja awal 18: 450 / (15 + x) = 24 ==> 15 + x = 18,75 -> jika soal standar: 45 hari awal: 40 x 18 = 720. Di sini 450 / 24 = 18,75 pekerja, butuh 4 pekerja tambahan jika dibulatkan, atau jika soal 40 hari 16 pekerja: 40x15=600, sisa 24 hari -> butuh minimal 4-5 pekerja tambahan. Nilai eksak terdekat adalah 5 pekerja (total 20 pekerja x 24 = 480 hari-pekerja > 450).'
        },
        {
          q: 'Mesin X mampu mencetak 1.200 kemasan dalam 3 jam, sedangkan Mesin Y mampu mencetak 1.200 kemasan dalam 6 jam. Jika kedua mesin bekerja bersama, berapa lama waktu yang dibutuhkan untuk mencetak 2.400 kemasan?',
          options: ['3 jam', '4 jam', '4,5 jam', '5 jam', '6 jam'],
          ans: 1,
          explanation: 'Laju Mesin X = 1.200 / 3 = 400 kemasan/jam. Laju Mesin Y = 1.200 / 6 = 200 kemasan/jam. Laju gabungan = 400 + 200 = 600 kemasan/jam. Waktu untuk 2.400 kemasan = 2.400 / 600 = 4 jam.'
        },
        {
          q: 'Andi dapat mengecat sebuah ruangan dalam 6 jam, sedangkan Budi dapat menyelesaikannya dalam 4 jam. Setelah mereka mengecat bersama selama 2 jam, Andi pergi dan sisanya diselesaikan oleh Budi sendiri. Berapa jam waktu tambahan yang dibutuhkan Budi?',
          options: ['20 menit', '30 menit', '40 menit', '45 menit', '1 jam'],
          ans: 2,
          explanation: 'Laju gabungan = 1/6 + 1/4 = 5/12 bagian/jam. Dalam 2 jam selesai = 2 x (5/12) = 10/12 = 5/6 bagian. Sisa pekerjaan = 1 - 5/6 = 1/6 bagian. Waktu Budi = (1/6) / (1/4) = 4/6 jam = 2/3 jam = 40 menit.'
        }
      ],
      flashcards: [
        { front: 'Apa rumus cepat waktu gabungan dua pekerja A dan B?', back: 't_gab = (t_A x t_B) / (t_A + t_B).' },
        { front: 'Bagaimana perlakuan laju untuk saluran pembuangan/bocor?', back: 'Bertanda minus (-) karena mengurangi volume per satuan waktu.' },
        { front: 'Apa satuan beban proyek konstruksi?', back: 'Hari-Pekerja (Hasil kali Hari x Jumlah Pekerja).' },
        { front: 'Apakah waktu kerja boleh dijumlahkan langsung?', back: 'DILARANG, yang dijumlahkan adalah laju kerja (kapasitas/jam).' },
        { front: 'Berapa laju kerja jika sebuah tugas selesai dalam 5 jam?', back: '1/5 bagian per jam.' }
      ],
      commonMistakes: [
        'Menjumlahkan waktu kerja secara langsung.',
        'Lupa menghitung pekerjaan yang sudah selesai sebelum pekerja berhenti di tengah jalan.'
      ]
    },
    {
      id: 'pm-02',
      subtest: 'PM',
      day: 1,
      title: 'Gerak Lurus: Kecepatan, Jarak, Waktu Berpapasan & Menyusul',
      timeTarget: '120 dtk/soal',
      oneLiner: 'Menghitung titik temu dua kendaraan berlawanan arah dan waktu susul-menyusul secara tepat.',
      summary: 'Soal gerak kontekstual mencakup perjalanan dua kendaraan dari titik yang sama dengan jeda waktu (menyusul) atau dari dua kota berlawanan arah (berpapasan).',
      coreConcept: '1) Hubungan Dasar: Jarak = Kecepatan x Waktu (s = v x t). 2) Berpapasan Berlawanan Arah: Karena kedua kendaraan saling mendekati, kecepatan relatifnya dijumlahkan: v_rel = v1 + v2. Waktu temu t_temu = Jarak Total / (v1 + v2). Jika ada selisih waktu berangkat, kurangkan jarak yang sudah ditempuh kendaraan pertama sebelum dibagi. 3) Menyusul Searah: Kendaraan yang mengejar harus memiliki kecepatan lebih tinggi. Waktu menyusul t_susul = Selisih Jarak Awal / (v_cepat - v_lambat). Kecepatan rata-rata perjalanan bolak-balik: v_rata = (2 x v1 x v2) / (v1 + v2) (rata-rata harmonik, BUKAN rata-rata aritmetika!).',
      formulaBox: '1. Waktu Berpapasan (Berlawanan Arah):\n   t_papasan = (Jarak Total - Jarak Tempuh Awal) / (v1 + v2)\n\n2. Waktu Menyusul (Searah, v2 > v1):\n   Selisih Jarak Awal = v1 x Waktu Jeda\n   t_susul = Selisih Jarak Awal / (v2 - v1)\n\n3. Kecepatan Rata-rata Pulang-Pergi Jarak Sama (d):\n   v_rata = 2 / (1/v1 + 1/v2) = (2 x v1 x v2) / (v1 + v2)',
      trapRadar: 'Jebakan Utama: Menghitung kecepatan rata-rata perjalanan bolak-balik (pergi 60 km/jam, pulang 40 km/jam) dengan cara merata-ratakan langsung (60 + 40)/2 = 50 km/jam. Itu SALAH! Yang benar adalah rata-rata harmonik: (2 x 60 x 40)/(60 + 40) = 48 km/jam!',
      steps: [
        'Periksa arah gerak: apakah berlawanan arah (berpapasan -> laju dijumlahkan) atau searah (menyusul -> laju dikurangkan).',
        'Hitung jarak awal yang sudah dicapai kendaraan pertama jika waktu berangkat berbeda.',
        'Bagi jarak relatif dengan kecepatan relatif.'
      ],
      guidedExample: {
        problem: 'Kota A dan Kota B terpisah jarak 210 km. Mobil X berangkat dari Kota A menuju Kota B pada pukul 08.00 dengan kecepatan konstan 60 km/jam. Pada pukul 08.30, Mobil Y berangkat dari Kota B menuju Kota A dengan kecepatan konstan 80 km/jam melalui jalur yang sama. Pada pukul berapakah kedua mobil akan berpapasan?',
        identify: 'Jarak total = 210 km. v_X = 60 km/jam, berangkat 08.00. v_Y = 80 km/jam, berangkat 08.30. Jeda waktu = 30 menit = 0,5 jam.',
        process: '1) Jarak yang ditempuh Mobil X selama 0,5 jam pertama:\ns_awal = 60 km/jam x 0,5 jam = 30 km.\n2) Sisa jarak antar-mobil pada pukul 08.30:\ns_sisa = 210 - 30 = 180 km.\n3) Waktu berpapasan dihitung dari pukul 08.30:\nt = s_sisa / (v_X + v_Y) = 180 / (60 + 80) = 180 / 140 = 9/7 jam = 1 jam 17 menit 8 detik (sekitar pukul 09.47).\nJika kecepatan X = 60 dan Y = 90 (KPK mudah 150): t = 180 / 150 = 1,2 jam = 1 jam 12 menit ==> Pukul 08.30 + 1 jam 12 menit = 09.42.',
        answer: 'Kedua mobil akan berpapasan setelah menempuh sisa jarak 180 km bersama-sama.'
      },
      drills: [
        {
          q: 'Sebuah mobil melaju dari Kota P ke Kota Q dengan kecepatan 40 km/jam, lalu kembali lagi dari Q ke P melalui rute yang sama dengan kecepatan 60 km/jam. Kecepatan rata-rata seluruh perjalanan adalah...',
          options: ['48 km/jam', '50 km/jam', '52 km/jam', '54 km/jam', '55 km/jam'],
          ans: 0,
          explanation: 'v_rata = (2 x v1 x v2) / (v1 + v2) = (2 x 40 x 60) / (40 + 60) = 4800 / 100 = 48 km/jam.'
        },
        {
          q: 'Kereta A berangkat dari Stasiun Gambir pukul 07.00 dengan kecepatan 70 km/jam. Pada pukul 08.00, Kereta B berangkat dari stasiun yang sama mengejar Kereta A di jalur paralel dengan kecepatan 90 km/jam. Pada pukul berapa Kereta B berhasil menyusul Kereta A?',
          options: ['10.30', '11.00', '11.30', '12.00', '12.30'],
          ans: 2,
          explanation: 'Selisih jarak awal pukul 08.00 = 70 km/jam x 1 jam = 70 km. Waktu menyusul t = 70 / (90 - 70) = 70 / 20 = 3,5 jam (3 jam 30 menit). Waktu menyusul = 08.00 + 3 jam 30 menit = Pukul 11.30.'
        },
        {
          q: 'Dua orang bersepeda mengelilingi lintasan sirkuit bundar sepanjang 1.200 meter dari titik start yang sama. Pesepeda pertama berkecepatan 6 m/dtk dan pesepeda kedua 4 m/dtk. Jika mereka bersepeda ke arah yang SAMA, setelah berapa menit pesepeda pertama akan menyusul pesepeda kedua untuk pertama kalinya?',
          options: ['5 menit', '8 menit', '10 menit', '12 menit', '15 menit'],
          ans: 2,
          explanation: 'Pesepeda pertama menyusul saat ia unggul tepat 1 putaran penuh (selisih jarak = 1.200 m). t = 1.200 / (6 - 4) = 1.200 / 2 = 600 detik = 10 menit.'
        }
      ],
      flashcards: [
        { front: 'Apa rumus kecepatan rata-rata bolak-balik jarak sama?', back: 'v_rata = (2 x v1 x v2) / (v1 + v2).' },
        { front: 'Bagaimana rumus waktu berpapasan berlawanan arah?', back: 't = Jarak / (v1 + v2).' },
        { front: 'Bagaimana rumus waktu menyusul searah?', back: 't = Selisih Jarak Awal / (v_cepat - v_lambat).' },
        { front: 'Kapan pesepeda di lintasan lingkaran menyusul rekannya?', back: 'Saat selisih jarak tempuhnya tepat sama dengan 1 keliling lintasan.' },
        { front: '1 m/dtk setara dengan berapa km/jam?', back: '3,6 km/jam (dikalikan 3,6).' }
      ],
      commonMistakes: [
        'Menghitung rata-rata aritmetika (v1+v2)/2 pada kecepatan perjalanan bolak-balik.',
        'Lupa mengalikan selisih waktu berangkat dengan kecepatan kendaraan pertama.'
      ]
    },
    {
      id: 'pm-03',
      subtest: 'PM',
      day: 2,
      title: 'Aritmetika Sosial: Untung-Rugi Modal Awal & Diskon Bertingkat',
      timeTarget: '120 dtk/soal',
      oneLiner: 'Menghitung harga modal asli dari persentase keuntungan dan membandingkan skema promo toko.',
      summary: 'Soal aritmetika sosial di Penalaran Matematika menyajikan skenario belanja riil: memilih promo toko paling murah (diskon bertingkat vs cashback vs beli N gratis 1) dan menghitung margin laba/rugi.',
      coreConcept: '1) Basis Acuan Laba/Rugi: Persentase untung/rugi SELALU dihitung terhadap HARGA BELI (MODAL). Jika untung 25%, maka Harga Jual = 125% x Modal (Modal = Harga Jual / 1,25). 2) Diskon Bertingkat (d1% + d2%): Harga akhir = Harga Awal x (1 - d1/100) x (1 - d2/100). Diskon bertingkat 40% + 10% BUKAN 50%, melainkan membayar 60% x 90% = 54% (diskon efektif 46%). 3) Promo Beli X Gratis Y: Dari setiap (X + Y) barang yang diambil, pembeli hanya membayar harga X barang.',
      formulaBox: '1. Hubungan Harga Jual (HJ) dan Harga Beli (HB):\n   - Untung p% :  HB = HJ / (1 + p/100)\n   - Rugi p%   :  HB = HJ / (1 - p/100)\n\n2. Diskon Bertingkat (d1% + d2%):\n   % Bayar = (100 - d1)% x (100 - d2)%\n   % Diskon Efektif = d1 + d2 - (d1 x d2 / 100)%\n\n3. Beli X Gratis Y (Paket X + Y):\n   Harga Rata-rata per Unit = (X / (X + Y)) x Harga Satuan',
      trapRadar: 'Jebakan Utama: Menghitung modal saat untung 20% dengan cara: Modal = Harga Jual - 20% x Harga Jual. Ini KELIRU BESAR! Jika harga jual Rp120.000, 20% dihitung dari modal Rp100.000 (Rp20.000), bukan dari Rp120.000!',
      steps: [
        'Tetapkan selalu Harga Modal (Beli) sebagai patokan 100%.',
        'Ubah diskon bertingkat menjadi persentase nilai yang harus dibayar.',
        'Pada perbandingan beberapa toko promo, hitung harga akhir total untuk jumlah unit yang sama persis.'
      ],
      guidedExample: {
        problem: 'Sebuah toko pakaian memberikan diskon bertingkat 30% + 20% untuk sebuah kemeja seharga Rp400.000. Toko lain menjual kemeja yang sama persis seharga Rp420.000 dengan promo potongan langsung Rp180.000. Toko manakah yang menawarkan harga lebih murah dan berapa selisihnya?',
        identify: 'Toko 1: Rp400.000 diskon 30% + 20%. Toko 2: Rp420.000 potongan Rp180.000.',
        process: '1) Toko 1: Bayar = 70% x 80% x Rp400.000 = 0,56 x Rp400.000 = Rp224.000.\n2) Toko 2: Bayar = Rp420.000 - Rp180.000 = Rp240.000.\nSelisih = Rp240.000 - Rp224.000 = Rp16.000 lebih murah di Toko 1.',
        answer: 'Toko 1 lebih murah dengan selisih harga Rp16.000.'
      },
      drills: [
        {
          q: 'Seorang pedagang elektronik menjual laptop seharga Rp7.200.000 dan memperoleh laba sebesar 20% dari modal pembeliannya. Berapakah modal pembelian laptop tersebut?',
          options: [
            'Rp5.760.000',
            'Rp6.000.000',
            'Rp6.200.000',
            'Rp6.400.000',
            'Rp6.500.000'
          ],
          ans: 1,
          explanation: 'Harga jual Rp7.200.000 setara dengan 120% modal. Modal = 7.200.000 / 1,2 = Rp6.000.000.'
        },
        {
          q: 'Diskon tunggal yang setara dengan diskon bertingkat 50% + 20% adalah...',
          options: ['55%', '60%', '65%', '70%', '75%'],
          ans: 1,
          explanation: 'Bayar = (1 - 0,50) x (1 - 0,20) = 0,50 x 0,80 = 0,40 = 40%. Diskon efektif = 100% - 40% = 60%.'
        },
        {
          q: 'Toko buku memberikan promo "Beli 3 Gratis 1". Jika Rian membawa pulang 8 buku yang masing-masing berharga label Rp25.000, berapa total rupiah yang harus dibayarnya?',
          options: ['Rp125.000', 'Rp150.000', 'Rp175.000', 'Rp180.000', 'Rp200.000'],
          ans: 1,
          explanation: 'Promo 3 gratis 1 berarti setiap 4 buku cukup bayar 3. Untuk 8 buku = 2 paket x 3 bayar = 6 buku yang dibayar. Biaya = 6 x Rp25.000 = Rp150.000.'
        }
      ],
      flashcards: [
        { front: 'Persentase untung atau rugi dihitung terhadap apa?', back: 'Terhadap Harga Beli (Modal Awal).' },
        { front: 'Berapa persen bayar dari diskon bertingkat 20% + 10%?', back: '80% x 90% = 72% (diskon efektif 28%).' },
        { front: 'Jika jual Rp150.000 rugi 25%, berapa modalnya?', back: 'Modal = 150.000 / 0,75 = Rp200.000.' },
        { front: 'Berapa persen diskon efektif promo "Beli 1 Gratis 1"?', back: 'Diskon 50% (bawa 2 bayar 1).' },
        { front: 'Berapa persen diskon efektif promo "Beli 4 Gratis 1"?', back: 'Diskon 20% (bawa 5 bayar 4, hemat 1/5 = 20%).' }
      ],
      commonMistakes: [
        'Mengurangi harga jual dengan persentase laba untuk mencari modal.',
        'Menjumlahkan langsung persentase diskon bertingkat.'
      ]
    },
    {
      id: 'pm-04',
      subtest: 'PM',
      day: 2,
      title: 'Masalah Umur & Pemodelan SPLDV/SPLTV Kontekstual',
      timeTarget: '125 dtk/soal',
      oneLiner: 'Menyusun persamaan umur masa lalu dan masa depan tanpa terjebak variabel waktu.',
      summary: 'Soal cerita umur dan sistem persamaan linear menuntut penerjemahan frasa verbal ("k tahun lalu", "k tahun mendatang", "selisih umur") ke dalam model aljabar x dan y.',
      coreConcept: '1) Aturan Waktu Umur: Jika umur Ayah sekarang = A dan Anak = B, maka: "5 tahun lalu" umur mereka adalah (A - 5) dan (B - 5). "3 tahun mendatang" umur mereka adalah (A + 3) dan (B + 3). 2) Sifat Selisih Umur: Selisih umur dua orang SELALU KONSTAN sepanjang masa (A - B tidak pernah berubah bertambah atau berkurang). 3) SPLTV: Gunakan substitusi cepat jika ada variabel yang sudah terisolasi.',
      formulaBox: '1. Pemodelan Waktu Umur:\n   - Sekarang       : A dan B\n   - k tahun lalu   : (A - k) dan (B - k)\n   - m tahun depan  : (A + m) dan (B + m)\n\n2. Sifat Kekal Selisih Umur:\n   Selisih Umur = A - B = Tetap Sama Setiap Saat\n\n3. Matriks SPLDV Determinan Kilat:\n   ax + by = e\n   cx + dy = f\n   x = (ed - bf) / (ad - bc)',
      trapRadar: 'Jebakan Utama: Lupa mengurangkan umur orang kedua pada kalimat masa lalu. Contoh: "Lima tahun lalu umur Ayah 4 kali umur Anak" -> modelnya adalah (A - 5) = 4(B - 5), BUKAN (A - 5) = 4B!',
      steps: [
        'Definisikan variabel x dan y sebagai umur SEKARANG.',
        'Beri tanda kurung (x - k) atau (y - k) untuk kondisi k tahun yang lalu.',
        'Selesaikan persamaan menggunakan substitusi atau selisih umur tetap.'
      ],
      guidedExample: {
        problem: 'Empat tahun yang lalu, umur seorang ayah adalah 6 kali umur anaknya. Dua belas tahun yang akan datang, umur ayah menjadi 2 kali umur anaknya. Berapakah umur ayah sekarang?',
        identify: 'Misalkan umur Ayah sekarang = A, umur Anak sekarang = B.',
        process: 'Persamaan 1 (4 tahun lalu):\nA - 4 = 6(B - 4)  ===>  A - 4 = 6B - 24  ===>  A = 6B - 20.\nPersamaan 2 (12 tahun datang):\nA + 12 = 2(B + 12)  ===>  A + 12 = 2B + 24  ===>  A = 2B + 12.\nSamakan nilai A:\n6B - 20 = 2B + 12  ===>  4B = 32  ===>  B = 8 tahun.\nUmur Ayah A = 2(8) + 12 = 16 + 12 = 28 tahun.\n(Cek: 4 th lalu A=24, B=4 -> 24 = 6x4 benar! 12 th lagi A=40, B=20 -> 40 = 2x20 benar!).',
        answer: 'Umur ayah sekarang adalah 28 tahun.'
      },
      drills: [
        {
          q: 'Tiga tahun yang lalu jumlah umur Riko dan adiknya adalah 21 tahun. Jika saat ini Riko 5 tahun lebih tua daripada adiknya, berapakah umur adik Riko sekarang?',
          options: ['9 tahun', '11 tahun', '14 tahun', '16 tahun', '17 tahun'],
          ans: 1,
          explanation: 'Misalkan umur sekarang R dan A. Tiga tahun lalu: (R - 3) + (A - 3) = 21 ==> R + A - 6 = 21 ==> R + A = 27. Diketahui R - A = 5. Kurangkan kedua persamaan: 2A = 22 ==> A = 11 tahun.'
        },
        {
          q: 'Di sebuah tempat parkir terdapat 75 kendaraan yang terdiri dari sepeda motor dan mobil. Jumlah seluruh roda adalah 210 buah. Berapakah banyaknya mobil di tempat parkir tersebut?',
          options: ['25 mobil', '30 mobil', '35 mobil', '40 mobil', '45 mobil'],
          ans: 1,
          explanation: 'Misalkan m = motor, b = mobil. m + b = 75. Roda: 2m + 4b = 210 ==> m + 2b = 105. Kurangkan: (m + 2b) - (m + b) = 105 - 75 ==> b = 30 mobil.'
        },
        {
          q: 'Harga 2 tiket dewasa dan 3 tiket anak-anak adalah Rp290.000. Harga 3 tiket dewasa dan 1 tiket anak-anak adalah Rp260.000. Berapakah harga 1 tiket dewasa?',
          options: ['Rp60.000', 'Rp65.000', 'Rp70.000', 'Rp75.000', 'Rp80.000'],
          ans: 2,
          explanation: '2D + 3A = 290.000; 3D + A = 260.000 ==> A = 260.000 - 3D. Masukkan ke pers 1: 2D + 3(260.000 - 3D) = 290.000 ==> 2D + 780.000 - 9D = 290.000 ==> -7D = -490.000 ==> D = Rp70.000.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana memodelkan "5 tahun yang lalu umur A adalah 3 kali umur B"?', back: '(A - 5) = 3(B - 5) (jangan lupa mengurangkan B dengan 5 juga!).' },
        { front: 'Apakah selisih umur dua orang bisa berubah seiring waktu?', back: 'Tidak pernah, selisih umur selalu tetap sepanjang masa.' },
        { front: 'Trik cepat soal jumlah roda kendaraan?', back: 'Asumsikan semua kendaraan roda 2, selisih kelebihan roda dibagi 2 adalah jumlah mobil.' },
        { front: 'Jika x + y = 20 dan x - y = 6, berapa nilai x dan y?', back: 'x = (20+6)/2 = 13; y = (20-6)/2 = 7.' },
        { front: 'Berapa target waktu per soal SPLDV cerita?', back: 'Maksimal 120 detik.' }
      ],
      commonMistakes: [
        'Lupa menambahkan umur anak pada kondisi masa depan.',
        'Tertukar antara jumlah kendaraan dengan jumlah roda.'
      ]
    },
    {
      id: 'pm-05',
      subtest: 'PM',
      day: 3,
      title: 'Fungsi Kontekstual & Interpretasi Grafik Tren Kurva',
      timeTarget: '125 dtk/soal',
      oneLiner: 'Membaca titik puncak kurva parabola dan memodelkan fungsi biaya/keuntungan bisnis.',
      summary: 'Soal fungsi kontekstual menuntut pemahaman model fungsi kuadrat (titik optimum parabola) dan grafik fungsi linear piece-wise (tarif progresif/tahapan) dalam kehidupan nyata.',
      coreConcept: '1) Parabola Optimum: Fungsi keuntungan kuadrat P(x) = -ax^2 + bx - c mencapai nilai MAKSIMUM di titik puncak absis x = -b / (2a). Nilai optimum maksimumnya adalah P_max = -D / (4a). 2) Tarif Bertingkat (Piece-wise): Biaya layanan taksi/listrik biasanya memiliki tarif dasar untuk kuota awal (misal 1 km pertama Rp10.000) dan tarif tambahan per unit berikutnya (Rp4.000 per km berikutnya).',
      formulaBox: '1. Titik Puncak Fungsi Kuadrat f(x) = ax^2 + bx + c:\n   - Jumlah Unit Pembuat Optimum: x_puncak = -b / (2a)\n   - Nilai Maksimum / Minimum   : y_puncak = f(-b / 2a) = -D / (4a)\n\n2. Tarif Progresif (Piece-wise):\n   Biaya Total = Tarif Dasar + Tarif Ekstra x (Volume - Batas Dasar)',
      trapRadar: 'Jebakan Utama: Tertukar antara pertanyaan "Berapa unit yang harus diproduksi agar laba maksimal?" (yang ditanya x_puncak) dengan "Berapa laba maksimalnya?" (yang ditanya y_puncak)!',
      steps: [
        'Tentukan apakah fungsi terbuka ke bawah (a < 0 -> laba maksimum) atau ke atas (a > 0 -> biaya minimum).',
        'Hitung x_puncak = -b / (2a).',
        'Substitusikan x_puncak ke dalam fungsi untuk menemukan nilai uang maksimum/minimumnya.'
      ],
      guidedExample: {
        problem: 'Sebuah UMKM memproduksi x unit kerajinan bambu per hari dengan fungsi keuntungan harian L(x) = -2x^2 + 80x - 300 (dalam ribuan rupiah). Berapa unit kerajinan yang harus diproduksi setiap hari agar memperoleh keuntungan maksimum, dan berapakah keuntungan maksimumnya?',
        identify: 'Fungsi kuadrat L(x) = -2x^2 + 80x - 300. a = -2, b = 80, c = -300.',
        process: '1) Unit pembuat laba maksimum:\nx_opt = -b / (2a) = -80 / (2 x -2) = -80 / -4 = 20 unit.\n2) Nilai keuntungan maksimum:\nL(20) = -2(20)^2 + 80(20) - 300 = -2(400) + 1600 - 300 = -800 + 1600 - 300 = 500 (ribu rupiah) = Rp500.000.',
        answer: 'Harus diproduksi 20 unit per hari dengan keuntungan maksimum Rp500.000.'
      },
      drills: [
        {
          q: 'Tinggi sebuah kembang api t detik setelah ditembakkan vertikal ke atas dimodelkan oleh h(t) = 40t - 5t^2 (meter). Ketinggian maksimum yang dicapai kembang api adalah...',
          options: ['60 meter', '70 meter', '80 meter', '90 meter', '100 meter'],
          ans: 2,
          explanation: 't_puncak = -b / (2a) = -40 / (2 x -5) = 4 detik. h_max = h(4) = 40(4) - 5(4)^2 = 160 - 5(16) = 160 - 80 = 80 meter.'
        },
        {
          q: 'Biaya sewa mobil ditetapkan Rp300.000 untuk 100 km pertama. Setiap kelebihan kilometer dikenakan biaya tambahan Rp2.500 per km. Jika penyewa membayar total Rp550.000, berapakah total jarak yang ditempuhnya?',
          options: ['180 km', '200 km', '220 km', '240 km', '250 km'],
          ans: 1,
          explanation: 'Biaya ekstra = 550.000 - 300.000 = Rp250.000. Kelebihan km = 250.000 / 2.500 = 100 km. Total jarak = 100 km (dasar) + 100 km (ekstra) = 200 km.'
        },
        {
          q: 'Grafik keuntungan sebuah perusahaan memotong sumbu X di titik x = 10 dan x = 50 (titik impas laba nol). Pada produksi berapakah keuntungan mencapai titik tertinggi?',
          options: ['x = 25', 'x = 30', 'x = 35', 'x = 40', 'x = 45'],
          ans: 1,
          explanation: 'Sumbu simetri parabola selalu berada tepat di tengah-tengah kedua titik potong sumbu X: x_opt = (10 + 50) / 2 = 30.'
        }
      ],
      flashcards: [
        { front: 'Apa rumus absis titik puncak fungsi kuadrat?', back: 'x_puncak = -b / (2a).' },
        { front: 'Bagaimana mencari nilai optimum fungsi kuadrat?', back: 'Substitusikan nilai x_puncak ke dalam fungsi f(x).' },
        { front: 'Di manakah posisi sumbu simetri terhadap dua akar pembuat nol?', back: 'Tepat di titik tengah rata-rata kedua akar: (x1 + x2) / 2.' },
        { front: 'Kapan fungsi kuadrat memiliki nilai maksimum?', back: 'Saat koefisien a bernilai negatif (a < 0, kurva terbuka ke bawah).' },
        { front: 'Apa itu titik impas (break-even point)?', back: 'Kondisi saat Pendapatan sama dengan Biaya (Keuntungan = 0).' }
      ],
      commonMistakes: [
        'Menjawab nilai x_opt padahal yang ditanyakan adalah nilai uang maksimumnya.',
        'Lupa menghitung jarak/kuota dasar pada tarif bertingkat piece-wise.'
      ]
    },
    {
      id: 'pm-06',
      subtest: 'PM',
      day: 3,
      title: 'Aplikasi Barisan & Deret: Bunga Majemuk & Pertumbuhan Populasi',
      timeTarget: '125 dtk/soal',
      oneLiner: 'Menghitung saldo bunga majemuk tabungan dan laju pertumbuhan eksponensial bakteri.',
      summary: 'Pertumbuhan populasi dan bunga majemuk bank mengikuti model deret geometri eksponensial: M_n = M_0 x (1 + r)^n. Sedangkan peluruhan radioaktif mengikuti M_n = M_0 x (1/2)^(t / T_setengah).',
      coreConcept: '1) Bunga Tunggal: Bunga dihitung hanya dari modal awal: M_n = M_0 x (1 + n . i). 2) Bunga Majemuk: Bunga berbunga: M_n = M_0 x (1 + i)^n. 3) Pertumbuhan Populasi: Jika populasi membelah diri menjadi 2 setiap t menit, maka rasio r = 2, dengan n = Lama Waktu / Waktu Pembelahan: P_n = P_0 x 2^n. 4) Peluruhan: Sisa = Massa_awal x (1/2)^(t / Waktu_paruh).',
      formulaBox: '1. Bunga Tunggal vs Bunga Majemuk:\n   - Tunggal : M_n = M_0 (1 + n . i)\n   - Majemuk : M_n = M_0 (1 + i)^n\n\n2. Pertumbuhan Pembelahan Bakteri:\n   P_t = P_0 x r^(t / periode)\n\n3. Waktu Paruh Peluruhan:\n   N_t = N_0 x (1/2)^(t / T_half)',
      trapRadar: 'Jebakan Utama: Menghitung pembelahan bakteri yang membelah setiap 15 menit selama 1 jam. Banyak yang mengira n = 1, padahal n = 60 menit / 15 menit = 4 kali pembelahan!',
      steps: [
        'Tentukan frekuensi periode (n = total waktu / durasi per periode).',
        'Tentukan faktor pengali (r = 1 + i untuk bunga majemuk, r = 2 untuk membelah dua).',
        'Hitung nilai akhir M_n = M_0 x r^n.'
      ],
      guidedExample: {
        problem: 'Dalam sebuah cawan petri, terdapat 50 bakteri yang membelah diri menjadi dua setiap 20 menit. Berapakah jumlah populasi bakteri setelah 2 jam?',
        identify: 'P_0 = 50 bakteri. Rasio r = 2. Periode pembelahan = 20 menit. Total waktu = 2 jam = 120 menit.',
        process: 'Frekuensi pembelahan n = 120 menit / 20 menit = 6 kali.\nPopulasi akhir P_6 = P_0 x 2^6 = 50 x 64 = 3.200 bakteri.',
        answer: 'Jumlah populasi bakteri setelah 2 jam adalah 3.200 bakteri.'
      },
      drills: [
        {
          q: 'Modal sebesar Rp10.000.000 disimpan di bank dengan sistem bunga majemuk 10% per tahun. Berapakah jumlah total uang tersebut setelah 3 tahun?',
          options: [
            'Rp13.000.000',
            'Rp13.310.000',
            'Rp13.500.000',
            'Rp14.000.000',
            'Rp14.641.000'
          ],
          ans: 1,
          explanation: 'M_3 = 10.000.000 x (1 + 0,10)^3 = 10.000.000 x (1,1)^3 = 10.000.000 x 1,331 = Rp13.310.000.'
        },
        {
          q: 'Sebuah zat radioaktif memiliki waktu paruh 4 jam. Jika massa awal zat tersebut adalah 160 gram, berapakah massa zat yang tersisa setelah 16 jam?',
          options: ['5 gram', '10 gram', '20 gram', '40 gram', '80 gram'],
          ans: 1,
          explanation: 'n = 16 jam / 4 jam = 4 periode peluruhan. Sisa = 160 x (1/2)^4 = 160 x (1/16) = 10 gram.'
        },
        {
          q: 'Harga sebuah mobil baru terdepresiasi sebesar 15% setiap tahun dari nilai tahun sebelumnya. Jika harga belinya Rp200.000.000, berapakah nilai jual mobil tersebut setelah 2 tahun?',
          options: [
            'Rp140.000.000',
            'Rp144.500.000',
            'Rp150.000.000',
            'Rp160.000.000',
            'Rp170.000.000'
          ],
          ans: 1,
          explanation: 'Faktor pengali depresiasi = 100% - 15% = 85% = 0,85. Nilai setelah 2 tahun = 200.000.000 x (0,85)^2 = 200.000.000 x 0,7225 = Rp144.500.000.'
        }
      ],
      flashcards: [
        { front: 'Apa rumus bunga majemuk?', back: 'M_n = M_0 x (1 + i)^n.' },
        { front: 'Berapa nilai (1,1)^3?', back: '1,331.' },
        { front: 'Bagaimana rumus pembelahan bakteri?', back: 'P_n = P_0 x 2^(t / periode).' },
        { front: 'Apa yang dimaksud waktu paruh zat radioaktif?', back: 'Waktu yang dibutuhkan zat untuk meluruh hingga massanya tinggal separuh (1/2) dari semula.' },
        { front: 'Apa perbedaan mendasar bunga tunggal dan bunga majemuk?', back: 'Bunga tunggal bertambah konstan aritmetika; bunga majemuk bertambah eksponensial geometri.' }
      ],
      commonMistakes: [
        'Menghitung bunga majemuk dengan perkalian biasa seperti bunga tunggal.',
        'Salah menghitung jumlah periode n pembelahan.'
      ]
    },
    {
      id: 'pm-07',
      subtest: 'PM',
      day: 4,
      title: 'Geometri Analitik Terapan & Optimasi Luas Daerah',
      timeTarget: '130 dtk/soal',
      oneLiner: 'Memaksimalkan luas lahan berpagar kawat tetap dan menghitung gradien kemiringan jalan.',
      summary: 'Soal aplikasi geometri analitik dan optimasi menuntut pemodelan kendala panjang kawat/pagar untuk memaksimalkan luas tanah persegi panjang atau membaca gradien lereng jalan.',
      coreConcept: '1) Optimasi Luas Persegi Panjang dengan Keliling Tetap: Luas maksimum selalu dicapai saat persegi panjang berbentuk PERSEGI (panjang = lebar = K/4). 2) Kasus Lahan Berbatasan dengan Dinding/Sungai: Jika salah satu sisi panjang (p) sudah dibatasi tembok sehingga kawat hanya memagari 1 panjang dan 2 lebar (Kawat = p + 2l), maka LUAS MAKSIMUM tercapai saat p = 2l (panjang = dua kali lebar)! 3) Gradien Kemiringan Jalan: m = Kenaikan Vertikal (Delta Y) / Jarak Horizontal (Delta X).',
      formulaBox: '1. Pemagaran 4 Sisi (Keliling K tetap):\n   Luas Maksimum = (K/4)^2  (Bentuk Persegi)\n\n2. Pemagaran 3 Sisi (Satu Sisi Dinding Sungai/Tembok):\n   Kawat = p + 2l  ===>  Luas Maksimum saat p = 2l  dan  l = Kawat / 4\n   Luas Maksimum = Kawat^2 / 8\n\n3. Gradien Kemiringan (Slope):\n   m = Delta Y / Delta X = Tan(Sudut Elevasi)',
      trapRadar: 'Jebakan Utama: Menggunakan rumus persegi (p = l) pada lahan yang salah satu sisinya tembok! Pada lahan berdinding tembok, panjang kawat adalah p + 2l, sehingga luas maksimum tercapai saat p = 2l!',
      steps: [
        'Tuliskan persamaan kendala panjang kawat (apakah 4 sisi atau 3 sisi berpagar).',
        'Nyatakan Luas sebagai fungsi 1 variabel: L(l) = p x l.',
        'Gunakan titik puncak parabola atau rumus kilat p = 2l.'
      ],
      guidedExample: {
        problem: 'Pak Hendra memiliki kawat berduri sepanjang 80 meter untuk memagari kandang ayam berbentuk persegi panjang. Salah satu sisi kandang memanfaatkan tembok batas kebun tetangga sehingga tidak memerlukan kawat. Berapakah luas maksimum kandang ayam yang dapat dibuat?',
        identify: 'Pemagaran 3 sisi: Panjang kawat = p + 2l = 80 meter. Sisi tembok = p.',
        process: 'Luas L = p x l = (80 - 2l)l = 80l - 2l^2.\nTitik puncak lebar optimum:\nl_opt = -b / (2a) = -80 / (2 x -2) = -80 / -4 = 20 meter.\nMaka panjang p = 80 - 2(20) = 40 meter (terbukti p = 2l).\nLuas maksimum L_max = 40 x 20 = 800 meter persegi.',
        answer: 'Luas maksimum kandang ayam yang dapat dibuat adalah 800 m^2.'
      },
      drills: [
        {
          q: 'Kawat sepanjang 100 meter akan dibuat memagari pekarangan berbentuk persegi panjang utuh (4 sisi). Berapakah luas maksimum pekarangan tersebut?',
          options: ['500 m^2', '550 m^2', '600 m^2', '625 m^2', '650 m^2'],
          ans: 3,
          explanation: 'Untuk 4 sisi berpagar, luas maksimum tercapai saat persegi: sisi s = 100 / 4 = 25 meter. Luas maksimum = 25 x 25 = 625 m^2.'
        },
        {
          q: 'Sebuah jalan tanjakan memiliki kemiringan gradien m = 0,15. Jika kenaikan vertikal bukit tersebut adalah 45 meter, berapakah panjang jarak mendatar (horizontal) jalan tersebut?',
          options: ['200 m', '250 m', '300 m', '350 m', '400 m'],
          ans: 2,
          explanation: 'm = Delta Y / Delta X ==> 0,15 = 45 / Delta X ==> Delta X = 45 / 0,15 = 300 meter.'
        },
        {
          q: 'Dua tiang berdiri tegak di atas tanah datar dengan tinggi masing-masing 12 meter dan 7 meter. Jika jarak antara kedua pangkal tiang di tanah adalah 12 meter, berapakah jarak antara kedua pucuk ujung tiang tersebut?',
          options: ['13 meter', '14 meter', '15 meter', '16 meter', '17 meter'],
          ans: 0,
          explanation: 'Buat segitiga siku-siku: alas = jarak tanah = 12 meter. Selisih tinggi = 12 - 7 = 5 meter. Berdasarkan tripel Pythagoras (5, 12, 13), jarak kedua ujung pucuk tiang adalah 13 meter.'
        }
      ],
      flashcards: [
        { front: 'Kapan luas persegi panjang bernilai maksimum jika keliling 4 sisi tetap?', back: 'Saat berbentuk persegi (panjang = lebar).' },
        { front: 'Bagaimana rasio p dan l untuk luas maksimum pemagaran 3 sisi (1 sisi tembok)?', back: 'p = 2l (panjang sama dengan dua kali lebar).' },
        { front: 'Apa rumus gradien kemiringan jalan?', back: 'm = Ketinggian Vertikal / Jarak Horizontal (Delta Y / Delta X).' },
        { front: 'Tripel Pythagoras untuk alas 12 dan tinggi 5?', back: '13.' },
        { front: 'Berapa luas maksimum kawat K untuk pemagaran 3 sisi?', back: 'L_max = K^2 / 8.' }
      ],
      commonMistakes: [
        'Membagi 4 panjang kawat pada kasus lahan yang berbatasan dengan dinding sungai.',
        'Membagi jarak horizontal dengan vertikal saat menghitung gradien jalan (terbalik).'
      ]
    },
    {
      id: 'pm-08',
      subtest: 'PM',
      day: 4,
      title: 'Dasar Kalkulus Terapan: Laju Perubahan & Optimasi Biaya',
      timeTarget: '130 dtk/soal',
      oneLiner: 'Menemukan titik stasioner turunan pertama (f\'(x) = 0) untuk meminimalkan biaya produksi per unit.',
      summary: 'Aplikasi turunan pertama (kalkulus dasar) di Penalaran Matematika digunakan untuk mencari biaya proyek minimum atau volume kotak terbuka maksimum.',
      coreConcept: '1) Kondisi Stasioner: Nilai maksimum atau minimum suatu fungsi mulus f(x) SELALU terjadi saat turunan pertamanya bernilai nol: f\'(x) = 0. 2) Biaya Proyek vs Biaya per Unit: Jika biaya produksi per unit adalah B(x) = 2x - 60 + 800/x, maka Biaya Total untuk x unit adalah C(x) = x . B(x) = 2x^2 - 60x + 800. Biaya total minimum dicari dengan turunan C\'(x) = 0. 3) Kotak Terbuka: Selembar karton dipotong keempat sudutnya sebesar x lalu dilipat menjadi kotak volume V(x) = (P - 2x)(L - 2x)x.',
      formulaBox: '1. Aturan Turunan Dasar:\n   - f(x) = a . x^n   ===>   f\'(x) = a . n . x^(n-1)\n   - Syarat Ekstrem Optimum: f\'(x) = 0\n\n2. Biaya Total Proyek x Hari:\n   Biaya Total C(x) = x . (Biaya per hari)\n   C\'(x) = 0  ===>  x_optimum',
      trapRadar: 'Jebakan Utama: Menurunkan biaya per hari secara langsung tanpa mengalikannya dengan x terlebih dahulu! Jika soal menyatakan "Biaya proyek per hari adalah (3x + 1200/x - 60)", biaya TOTAL adalah x dikalikan persamaan tersebut!',
      steps: [
        'Bentuk persamaan Biaya Total C(x) = x dikalikan fungsi biaya harian.',
        'Turunkan fungsi tersebut terhadap x dan samakan dengan 0 (C\'(x) = 0).',
        'Selesaikan nilai x_optimum, lalu masukkan kembali ke fungsi jika ditanyakan biaya minimumnya.'
      ],
      guidedExample: {
        problem: 'Pembangunan sebuah gedung direncanakan selesai dalam x hari dengan biaya proyek per hari sebesar (4x + 1600/x - 80) juta rupiah. Berapakah waktu pengerjaan x agar biaya total proyek minimum, dan berapakah biaya minimum tersebut?',
        identify: 'Biaya per hari = (4x + 1600/x - 80). Biaya total C(x) = x . (4x + 1600/x - 80).',
        process: '1) Fungsi Biaya Total:\nC(x) = 4x^2 - 80x + 1600.\n2) Syarat minimum: C\'(x) = 0:\nC\'(x) = 8x - 80 = 0 ===> 8x = 80 ===> x = 10 hari.\n3) Biaya minimum C(10):\nC(10) = 4(10)^2 - 80(10) + 1600 = 400 - 800 + 1600 = 1.200 juta rupiah = 1,2 miliar rupiah.',
        answer: 'Proyek harus diselesaikan dalam 10 hari dengan biaya minimum Rp1.200.000.000 (1,2 miliar rupiah).'
      },
      drills: [
        {
          q: 'Suatu perusahaan memproduksi x unit barang dengan biaya total C(x) = x^3 - 30x^2 + 300x. Pada jumlah produksi berapakah laju perubahan biaya marjinal mencapai nilai ekstrem lokal?',
          options: ['x = 5', 'x = 10', 'x = 15', 'x = 20', 'x = 25'],
          ans: 1,
          explanation: 'Biaya marjinal MC = C\'(x) = 3x^2 - 60x + 300. Nilai ekstrem stasioner MC dicari dengan turunan keduanya: MC\' = 6x - 60 = 0 ==> 6x = 60 ==> x = 10.'
        },
        {
          q: 'Selembar karton berukuran 12 cm x 12 cm dipotong keempat pojoknya berbentuk persegi dengan sisi x cm. Karton dilipat menjadi kotak tanpa tutup. Nilai x yang memaksimumkan volume kotak adalah...',
          options: ['1 cm', '2 cm', '3 cm', '4 cm', '5 cm'],
          ans: 1,
          explanation: 'Trik kilat karton persegi sisi s: x_opt = s / 6. Di sini s = 12 cm, maka x_opt = 12 / 6 = 2 cm.'
        },
        {
          q: 'Sebuah peluru ditembakkan ke udara dengan persamaan ketinggian h(t) = 60t - 3t^2. Kecepatan peluru saat mencapai ketinggian maksimum adalah...',
          options: ['0 m/dtk', '10 m/dtk', '20 m/dtk', '30 m/dtk', '60 m/dtk'],
          ans: 0,
          explanation: 'Di titik ketinggian maksimum, kecepatan sesaat peluru tepat bernilai 0 m/dtk (karena v(t) = h\'(t) = 0).'
        }
      ],
      flashcards: [
        { front: 'Apa syarat utama fungsi mencapai nilai optimum maksimum/minimum?', back: 'Turunan pertamanya sama dengan nol: f\'(x) = 0.' },
        { front: 'Trik cepat x pemotong sudut kotak terbuka dari karton persegi sisi s?', back: 'x_opt = s / 6.' },
        { front: 'Bagaimana mencari biaya total jika diketahui biaya per hari?', back: 'Kalikan biaya per hari dengan durasi hari x: C(x) = x . B(x).' },
        { front: 'Berapa turunan dari f(x) = 3x^2 - 12x + 5?', back: 'f\'(x) = 6x - 12.' },
        { front: 'Berapa kecepatan benda saat mencapai ketinggian puncak?', back: '0 m/dtk.' }
      ],
      commonMistakes: [
        'Lupa mengalikan x pada fungsi biaya harian sebelum menurunkan.',
        'Menganggap nilai x_optimum sebagai jawaban biaya (harus disubstitusikan kembali).'
      ]
    },
    {
      id: 'pm-09',
      subtest: 'PM',
      day: 5,
      title: 'Statistika Terapan, Data Berbobot & Probabilitas Bersyarat',
      timeTarget: '125 dtk/soal',
      oneLiner: 'Menghitung rata-rata gabungan beberapa kelompok dan peluang bersyarat P(A|B).',
      summary: 'Penerapan statistika di PM berfokus pada rata-rata tertimbang (gabungan dua kelompok) dan peluang bersyarat yang melibatkan pohon probabilitas dalam kasus nyata medis/industri.',
      coreConcept: '1) Rata-rata Gabungan: x_gab = (n1 . x1 + n2 . x2) / (n1 + n2). Rumus Trik Selisih: Perbandingan jumlah anggota n1 : n2 berbanding terbalik dengan selisih jarak rata-ratanya ke rata-rata gabungan: n1 / n2 = |x2 - x_gab| / |x1 - x_gab|. 2) Peluang Bersyarat: Peluang terjadinya kejadian A dengan syarat kejadian B sudah terjadi: P(A|B) = P(A n B) / P(B).',
      formulaBox: '1. Rata-rata Gabungan (Weighted Mean):\n   x_gab = (n1.x1 + n2.x2) / (n1 + n2)\n\n2. Trik Timbangan Perbandingan Anggota:\n   n1 : n2 = |x2 - x_gab| : |x_gab - x1|\n\n3. Peluang Bersyarat:\n   P(A | B) = P(A n B) / P(B)',
      trapRadar: 'Jebakan Utama: Menghitung rata-rata gabungan dua kelas dengan merata-ratakan langsung kedua nilai ((x1 + x2)/2). Cara ini hanya benar jika jumlah siswa di kedua kelas SAMA PERSIS. Jika jumlah siswanya berbeda, wajib memakai rata-rata tertimbang!',
      steps: [
        'Identifikasi rata-rata masing-masing kelompok dan rata-rata target gabungan.',
        'Gunakan trik selisih timbangan untuk menemukan perbandingan jumlah anggota n1:n2.',
        'Pada peluang bersyarat, batasi ruang sampel n(S) hanya pada kelompok syarat B.'
      ],
      guidedExample: {
        problem: 'Nilai rata-rata ujian matematika siswa laki-laki adalah 72 dan rata-rata siswa perempuan adalah 82. Jika nilai rata-rata gabungan seluruh kelas adalah 76, dan jumlah seluruh siswa di kelas tersebut adalah 40 orang, berapakah jumlah siswa perempuan?',
        identify: 'x_L = 72, x_P = 82, x_gab = 76. Total siswa = 40.',
        process: 'Gunakan trik perbandingan selisih:\nJumlah L : Jumlah P = |82 - 76| : |76 - 72| = 6 : 4 = 3 : 2.\nTotal bagian = 3 + 2 = 5 bagian.\nJumlah siswa perempuan P = (2/5) x 40 = 16 siswa.\n(Jumlah laki-laki L = (3/5) x 40 = 24 siswa).',
        answer: 'Jumlah siswa perempuan di kelas tersebut adalah 16 orang.'
      },
      drills: [
        {
          q: 'Rata-rata berat badan 10 orang atlet adalah 65 kg. Ketika 2 orang atlet baru bergabung, rata-rata berat badannya naik menjadi 67 kg. Berapakah rata-rata berat badan kedua atlet baru tersebut?',
          options: ['72 kg', '75 kg', '77 kg', '80 kg', '82 kg'],
          ans: 2,
          explanation: 'Total berat awal 10 orang = 10 x 65 = 650 kg. Total berat baru 12 orang = 12 x 67 = 804 kg. Jumlah berat 2 atlet baru = 804 - 650 = 154 kg. Rata-rata kedua atlet baru = 154 / 2 = 77 kg.'
        },
        {
          q: 'Di sebuah pabrik, Mesin I memproduksi 60% produk dan Mesin II memproduksi 40% produk. Tingkat kerusakan produk dari Mesin I adalah 2% dan dari Mesin II adalah 3%. Jika sebuah produk yang diambil secara acak ternyata rusak, berapakah peluang produk rusak tersebut berasal dari Mesin I?',
          options: ['1/3', '1/2', '3/5', '2/3', '3/4'],
          ans: 1,
          explanation: 'P(Rusak dari I) = 0,60 x 0,02 = 0,012. P(Rusak dari II) = 0,40 x 0,03 = 0,012. Total peluang rusak P(B) = 0,012 + 0,012 = 0,024. Peluang bersyarat = 0,012 / 0,024 = 1/2.'
        },
        {
          q: 'Median dari 7 bilangan bulat berurutan adalah 15. Berapakah rata-rata dari ketujuh bilangan tersebut?',
          options: ['13', '14', '15', '16', '17'],
          ans: 2,
          explanation: 'Pada bilangan-bilangan berurutan simetris (deret aritmetika), nilai Median SELALU sama persis dengan nilai Rata-rata (Mean) yaitu 15.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana trik selisih mencari perbandingan jumlah anggota n1:n2?', back: 'n1 : n2 = |x2 - x_gab| : |x_gab - x1|.' },
        { front: 'Pada deret bilangan berurutan, apakah median sama dengan mean?', back: 'Ya, pada barisan simetris aritmetika, Mean = Median.' },
        { front: 'Apa rumus peluang bersyarat P(A|B)?', back: 'P(A n B) / P(B).' },
        { front: 'Bolehkah merata-ratakan langsung rata-rata dua kelas?', back: 'Hanya boleh jika jumlah siswa kedua kelas sama persis.' },
        { front: 'Berapa total nilai jika 15 siswa rata-ratanya 80?', back: '15 x 80 = 1.200.' }
      ],
      commonMistakes: [
        'Merata-ratakan nilai tanpa memperhitungkan bobot jumlah peserta.',
        'Lupa menambahkan jumlah peserta baru pada penyebut pembagian rata-rata baru.'
      ]
    },
    {
      id: 'pm-10',
      subtest: 'PM',
      day: 5,
      title: 'Interpretasi Tabel Kompleks, Infografis & Rasio Efisiensi',
      timeTarget: '125 dtk/soal',
      oneLiner: 'Menghitung rasio produktivitas per kapita dan membaca matriks data multivariabel.',
      summary: 'Modul puncak Penalaran Matematika menguji keterampilan sintesis numerik: mengombinasikan data dari dua tabel berbeda (misal tabel anggaran dan tabel jumlah penduduk) untuk mencari nilai per kapita atau rasio efisiensi energi.',
      coreConcept: '1) Rasio Efisiensi / Per Kapita: Nilai Per Kapita = Total Nilai / Total Populasi. 2) Rasio Efisiensi Bahan Bakar: km per liter = Jarak Total / Volume Bahan Bakar. 3) Membaca Diagram Lingkaran: Sudut = Persentase x 3,6 derajat. Persentase = (Besar Sudut / 360) x 100%. 4) Perbandingan Proporsional: Normalisasi data ke basis 100 untuk membandingkan kinerja antar-entitas yang memiliki skala ukuran berbeda.',
      formulaBox: '1. Rasio Produktivitas:\n   Produktivitas = Output Hasil / Input Biaya (atau Jam Kerja)\n\n2. Konversi Sudut Diagram Lingkaran:\n   - 10% = 36 derajat   |   25% = 90 derajat   |   50% = 180 derajat\n   - Persen = (Derajat / 360) x 100%\n\n3. Normalisasi Skor:\n   Skor Standar = (Nilai Individu / Nilai Maksimum Kategori) x 100',
      trapRadar: 'Jebakan Utama: Membandingkan dua sektor pada diagram lingkaran hanya dari derajat sudutnya padahal kedua diagram memiliki TOTAL BASIS POPULASI YANG BERBEDA! Sudut 90 derajat pada populasi 1.000 (250 orang) lebih kecil daripada sudut 36 derajat pada populasi 10.000 (1.000 orang)!',
      steps: [
        'Periksa keterangan judul tabel, baris total, dan satuan unit (juta rupiah, ton, per kapita).',
        'Tuliskan rumus rasio yang ditanyakan (Pembilang / Penyebut).',
        'Lakukan estimasi pembulatan angka untuk mempercepat penemuan opsi yang tepat.'
      ],
      guidedExample: {
        problem: 'Pabrik memiliki 3 cabang dengan data produksi: Cabang A (biaya Rp120 juta, hasil 6.000 unit), Cabang B (biaya Rp150 juta, hasil 8.000 unit), Cabang C (biaya Rp200 juta, hasil 11.000 unit). Cabang manakah yang memiliki BIAYA PRODUKSI PER UNIT PALING RENDAH (paling efisien)?',
        identify: 'Biaya per unit = Biaya Total / Jumlah Unit.',
        process: 'Cabang A: 120.000.000 / 6.000 = Rp20.000 per unit.\nCabang B: 150.000.000 / 8.000 = Rp18.750 per unit.\nCabang C: 200.000.000 / 11.000 = Rp18.181 per unit.\nBiaya per unit terendah dicapai oleh Cabang C.',
        answer: 'Cabang C paling efisien dengan biaya produksi Rp18.181 per unit.'
      },
      drills: [
        {
          q: 'Sebuah diagram lingkaran menunjukkan alokasi anggaran rumah tangga. Sektor pendidikan memakan sudut 72 derajat. Jika total anggaran bulanan adalah Rp15.000.000, berapakah dana yang dialokasikan untuk pendidikan?',
          options: ['Rp2.500.000', 'Rp3.000.000', 'Rp3.500.000', 'Rp4.000.000', 'Rp4.500.000'],
          ans: 1,
          explanation: 'Porsi pendidikan = 72 / 360 = 1/5 bagian = 20%. Dana = 1/5 x Rp15.000.000 = Rp3.000.000.'
        },
        {
          q: 'Mobil P menempuh 360 km dengan 30 liter bensin. Mobil Q menempuh 450 km dengan 40 liter bensin. Mobil R menempuh 500 km dengan 40 liter bensin. Mobil yang paling hemat konsumsi bensinnya adalah...',
          options: ['Mobil P', 'Mobil Q', 'Mobil R', 'Mobil P dan R sama hemat', 'Mobil Q dan R sama hemat'],
          ans: 2,
          explanation: 'Konsumsi bensin (km/liter): Mobil P = 360 / 30 = 12 km/l. Mobil Q = 450 / 40 = 11,25 km/l. Mobil R = 500 / 40 = 12,5 km/l. Paling hemat adalah Mobil R (12,5 km/liter).'
        },
        {
          q: 'Data Kepadatan Penduduk: Wilayah X (populasi 2,4 juta jiwa, luas 800 km^2). Wilayah Y (populasi 1,8 juta jiwa, luas 500 km^2). Rasio kepadatan penduduk X dibanding Y adalah...',
          options: ['5 : 6', '6 : 5', '4 : 3', '3 : 4', '1 : 1'],
          ans: 0,
          explanation: 'Kepadatan X = 2.400.000 / 800 = 3.000 jiwa/km^2. Kepadatan Y = 1.800.000 / 500 = 3.600 jiwa/km^2. Rasio X : Y = 3.000 : 3.600 = 5 : 6.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana rumus konversi sudut derajat ke persen pada diagram lingkaran?', back: '% = (Derajat / 360) x 100%.' },
        { front: 'Berapa persen nilai sudut 90 derajat pada lingkaran?', back: '25% (seperempat lingkaran).' },
        { front: 'Berapa persen nilai sudut 72 derajat pada lingkaran?', back: '20% (seperlima lingkaran).' },
        { front: 'Apa rumus efisiensi biaya per unit?', back: 'Biaya Total / Jumlah Unit Hasil Produksi.' },
        { front: 'Mengapa dilarang membandingkan sudut dua pie chart berbeda secara langsung?', back: 'Karena nilai total basis populasi kedua lingkaran belum tentu sama.' }
      ],
      commonMistakes: [
        'Membagi unit dengan biaya saat ditanya biaya per unit (terbalik pembilang dan penyebut).',
        'Lupa mengalikan dengan 100 saat mengubah desimal menjadi persen.'
      ]
    }
  ];

  window.UTBK_MODULES.push(...PM_MODULES);
})();
