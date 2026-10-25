/* File: data/pk.js
 * Bank Materi Lengkap Subtes: Pengetahuan Kuantitatif (PK) - 10 Modul Lengkap
 */
(function () {
  'use strict';

  window.UTBK_MODULES = window.UTBK_MODULES || [];

  const PK_MODULES = [
    {
      id: 'pk-01',
      subtest: 'PK',
      day: 1,
      title: 'Sifat Bilangan Bulat, Keterbagian, FPB & KPK',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menganalisis paritas ganjil-genap, sifat bilangan prima, dan aturan keterbagian angka besar.',
      summary: 'Soal bilangan di PK menguji pemahaman konseptual tentang himpunan bilangan bulat, paritas penjumlahan/perkalian, faktorisasi prima, serta hubungan mendasar antara FPB dan KPK.',
      coreConcept: '1) Paritas: Ganjil +/- Ganjil = Genap; Genap +/- Ganjil = Ganjil. Perkalian bilangan bulat hanya menghasilkan GANJIL jika seluruh faktornya ganjil. Asalkan ada SATU bilangan genap yang dikalikan, hasilnya pasti GENAP. 2) Bilangan Prima: Bilangan asli > 1 yang tepat memiliki dua faktor positif (1 dan dirinya sendiri). Angka 2 adalah satu-satunya bilangan prima genap. Angka 1 BUKAN bilangan prima. 3) Keterbagian Cepat: Habis dibagi 3 jika jumlah digit habis dibagi 3; habis dibagi 4 jika 2 digit terakhir kelipatan 4; habis dibagi 9 jika jumlah digit habis dibagi 9. 4) FPB & KPK dua bilangan: a x b = KPK(a, b) x FPB(a, b).',
      formulaBox: '1. Sifat Paritas:\n   - Ganjil x Ganjil = Ganjil   |   Genap x Sembarang Bulat = Genap\n   - Ganjil + Ganjil = Genap    |   Genap + Ganjil = Ganjil\n\n2. Aturan Keterbagian Cepat:\n   - Habis dibagi 3 : Jumlah digit habis dibagi 3.\n   - Habis dibagi 4 : 2 digit terakhir kelipatan 4.\n   - Habis dibagi 8 : 3 digit terakhir kelipatan 8.\n   - Habis dibagi 9 : Jumlah digit habis dibagi 9.\n   - Habis dibagi 11: (Jumlah digit ganjil - Jumlah digit genap) habis dibagi 11.\n\n3. Hubungan FPB & KPK:\n   a x b = KPK(a, b) x FPB(a, b)',
      trapRadar: 'Jebakan Utama: Mengasumsikan bahwa variabel x dan y selalu bernilai bulat positif. Jika soal hanya menyebut "x dan y adalah bilangan bulat", ingat bahwa 0 dan bilangan negatif (-1, -2, ...) juga termasuk bilangan bulat!',
      steps: [
        'Periksa batasan himpunan bilangan di soal: apakah asli (N), cacah (W), bulat (Z), atau real (R).',
        'Gunakan analisis paritas (ganjil/genap) untuk mengeliminasi opsi yang mustahil tanpa perlu menghitung nilai riil.',
        'Untuk soal keterbagian angka besar, terapkan rumus jumlah digit (pembagi 3 dan 9) atau digit terakhir (pembagi 2, 4, 5, 8).'
      ],
      guidedExample: {
        problem: 'Jika bilangan lima digit 73a4b habis dibagi 45, dan a != b, berapakah nilai (a + b) terbesar yang mungkin?',
        identify: '45 = 5 x 9 (dengan FPB(5,9) = 1). Jadi bilangan 73a4b wajib habis dibagi 5 DAN habis dibagi 9.',
        process: '1) Syarat habis dibagi 5: digit terakhir b harus 0 atau 5.\n2) Syarat habis dibagi 9: jumlah digit (7 + 3 + a + 4 + b) = (14 + a + b) harus kelipatan 9.\nKasus 1: Jika b = 5, maka 14 + a + 5 = 19 + a kelipatan 9. Nilai a satu digit yang memenuhi adalah a = 8 (karena 19 + 8 = 27). Nilai a + b = 8 + 5 = 13 (a != b terpenuhi).\nKasus 2: Jika b = 0, maka 14 + a + 0 = 14 + a kelipatan 9. Nilai a = 4 (karena 14 + 4 = 18). Nilai a + b = 4 + 0 = 4.\nNilai terbesar adalah 13.',
        answer: 'Nilai (a + b) terbesar yang mungkin adalah 13 (dengan a = 8 dan b = 5).'
      },
      drills: [
        {
          q: 'Diketahui p dan q adalah bilangan bulat. Jika p + 2q adalah bilangan ganjil, manakah di antara pernyataan berikut yang PASTI BENAR?',
          options: [
            'p adalah bilangan genap.',
            'p adalah bilangan ganjil.',
            'q adalah bilangan ganjil.',
            'p x q adalah bilangan genap.',
            'p + q adalah bilangan genap.'
          ],
          ans: 1,
          explanation: 'Nilai 2q selalu genap untuk setiap bilangan bulat q. Agar (p + Genap) menghasilkan bilangan Ganjil, maka p WAJIB ganjil.'
        },
        {
          q: 'Dua bilangan bulat positif m dan n memiliki FPB = 8 dan KPK = 96. Jika salah satu bilangan bernilai 24, berapakah nilai bilangan lainnya?',
          options: ['16', '32', '48', '64', '72'],
          ans: 1,
          explanation: 'm x n = FPB x KPK ==> 24 x n = 8 x 96 ==> n = (8 x 96) / 24 = 8 x 4 = 32.'
        },
        {
          q: 'Berapa banyak bilangan bulat positif antara 1 dan 100 yang habis dibagi 3 tetapi TIDAK habis dibagi 5?',
          options: ['20', '26', '27', '33', '40'],
          ans: 1,
          explanation: 'Banyak bilangan habis dibagi 3 = floor(100/3) = 33. Bilangan yang habis dibagi 3 DAN 5 (habis dibagi 15) = floor(100/15) = 6. Maka yang tidak habis dibagi 5 = 33 - 6 = 27 (atau antara 1 dan 100 terdapat 33 kelipatan 3, dikurangi 6 kelipatan 15 = 27).'
        }
      ],
      flashcards: [
        { front: 'Berapa satu-satunya bilangan prima genap?', back: 'Angka 2.' },
        { front: 'Apakah angka 1 termasuk bilangan prima?', back: 'BUKAN, bilangan prima wajib memiliki tepat 2 faktor positif berbeda (sedangkan 1 hanya punya 1 faktor).' },
        { front: 'Bagaimana rumus hubungan FPB dan KPK dua bilangan?', back: 'a x b = FPB(a, b) x KPK(a, b).' },
        { front: 'Bagaimana syarat sebuah bilangan habis dibagi 4?', back: 'Dua digit terakhirnya habis dibagi 4.' },
        { front: 'Jika hasil kali 3 bilangan bulat adalah GANJIL, apa sifat ketiga bilangan tersebut?', back: 'Ketiga bilangan tersebut seluruhnya wajib bernilai GANJIL.' }
      ],
      commonMistakes: [
        'Menganggap angka 1 sebagai bilangan prima.',
        'Lupa menguji bilangan negatif saat soal menyebut "bilangan bulat".'
      ]
    },
    {
      id: 'pk-02',
      subtest: 'PK',
      day: 1,
      title: 'Pecahan, Persen, Rasio & Desimal Berulang',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Membandingkan pecahan cepat dengan perkalian silang dan mengubah desimal berulang ke pecahan biasa.',
      summary: 'Operasi pecahan dan rasio menuntut kecepatan perhitungan tanpa alat bantu kalkulator. Menguasai trik perkalian silang dan konversi pecahan ke persen sangat menghemat waktu ujian.',
      coreConcept: '1) Membandingkan Dua Pecahan: Untuk menguji apakah a/b > c/d (dengan b, d > 0), lakukan perkalian silang: a x d dibandingkan dengan b x c. Jika a x d > b x c, maka a/b > c/d. 2) Desimal Berulang: Angka 0,aaaa... = a/9. Angka 0,ababab... = ab/99. 3) Perbandingan Berbalik Nilai: Jika variabel A naik dan variabel B turun dengan hasil kali konstan (A x B = k), maka rasio A1/A2 = B2/B1.',
      formulaBox: '1. Trik Banding Pecahan Cepat (Perkalian Silang):\n   Bandingkan 7/11 dan 5/8:\n   7 x 8 = 56   vs   11 x 5 = 55\n   Karena 56 > 55, maka 7/11 > 5/8.\n\n2. Rumus Desimal Berulang:\n   - 0,333... = 3/9 = 1/3\n   - 0,272727... = 27/99 = 3/11\n   - 0,1666... = (16 - 1) / 90 = 15/90 = 1/6\n\n3. Rasio Gabungan 3 Variabel (A : B : C):\n   Jika A : B = 2 : 3 dan B : C = 4 : 5, samakan nilai B (KPK 3 dan 4 = 12):\n   A : B : C = 8 : 12 : 15.',
      trapRadar: 'Jebakan Utama: Menjumlahkan pecahan dengan cara menjumlahkan pembilang dan penyebut langsung ((a/b) + (c/d) != (a+c)/(b+d)). Samakan penyebut terlebih dahulu menggunakan KPK!',
      steps: [
        'Sederhanakan pecahan ke bentuk paling sederhana sebelum melakukan operasi perkalian/pembagian.',
        'Gunakan perkalian silang untuk membandingkan besar pecahan tanpa mengubah ke desimal panjang.',
        'Pada perbandingan bertingkat A:B dan B:C, samakan nilai variabel penghubung B menggunakan KPK.'
      ],
      guidedExample: {
        problem: 'Ubahlah bilangan desimal berulang x = 0,424242... ke dalam bentuk pecahan paling sederhana a/b. Berapakah nilai (a + b)?',
        identify: 'Desimal berulang dengan periode 2 digit: "42".',
        process: 'Gunakan rumus: x = 42 / 99. Bagi pembilang dan penyebut dengan FPB(42, 99) = 3: a/b = 14 / 33. Maka a = 14 dan b = 33. Nilai a + b = 14 + 33 = 47.',
        answer: 'Pecahan paling sederhana adalah 14/33, sehingga nilai a + b = 47.'
      },
      drills: [
        {
          q: 'Manakah di antara pecahan berikut yang memiliki nilai PALING BESAR?',
          options: ['5/7', '7/10', '11/15', '13/18', '3/4'],
          ans: 4,
          explanation: '3/4 = 0,75. Pecahan lain: 5/7 = 0,714; 7/10 = 0,70; 11/15 = 0,733; 13/18 = 0,722. Nilai terbesar adalah 3/4.'
        },
        {
          q: 'Perbandingan uang tabungan Raka dan Sinta adalah 3 : 4, sedangkan perbandingan uang Sinta dan Taufik adalah 2 : 5. Jika jumlah uang ketiganya adalah Rp340.000, berapakah uang tabungan Sinta?',
          options: ['Rp60.000', 'Rp80.000', 'Rp100.000', 'Rp120.000', 'Rp200.000'],
          ans: 1,
          explanation: 'Raka : Sinta = 3 : 4. Sinta : Taufik = 2 : 5 = 4 : 10. Perbandingan gabungan Raka : Sinta : Taufik = 3 : 4 : 10. Total bagian = 3 + 4 + 10 = 17 bagian. Nilai 1 bagian = 340.000 / 17 = Rp20.000. Uang Sinta = 4 x 20.000 = Rp80.000.'
        },
        {
          q: 'Nilai dari 16,67% dari 240 adalah mendekati...',
          options: ['30', '35', '40', '45', '50'],
          ans: 2,
          explanation: '16,67% = 1/6. Maka 1/6 x 240 = 40.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana cara cepat membandingkan a/b dan c/d?', back: 'Lakukan perkalian silang: bandingkan nilai (a x d) dengan (b x c).' },
        { front: 'Berapa pecahan biasa dari 0,666...?', back: '2/3 (dari 6/9).' },
        { front: 'Berapa pecahan biasa dari 12,5% dan 37,5%?', back: '12,5% = 1/8 dan 37,5% = 3/8.' },
        { front: 'Berapa pecahan biasa dari 16,67% dan 33,33%?', back: '16,67% = 1/6 dan 33,33% = 1/3.' },
        { front: 'Jika rasio A:B = 2:3 dan B:C = 3:5, berapa A:B:C?', back: '2 : 3 : 5 (karena nilai B sudah sama-sama 3).' }
      ],
      commonMistakes: [
        'Mengubah pecahan ke bentuk desimal manual pembagian kurung yang memakan waktu lama.',
        'Lupa menyederhanakan perbandingan ke bentuk bagian prima terkecil.'
      ]
    },
    {
      id: 'pk-03',
      subtest: 'PK',
      day: 2,
      title: 'Aljabar: Pemfaktoran Selisih Kuadrat & Identitas Aljabar',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menyelesaikan bentuk aljabar rumit dalam hitungan detik menggunakan trik identitas istimewa.',
      summary: 'Soal manipulasi aljabar di UTBK hampir selalu menguji pengenalan pola identitas kuadrat (selisih kuadrat, kuadrat jumlah, dan kuadrat selisih) tanpa perlu mengalikan angka besar secara manual.',
      coreConcept: 'Tiga identitas aljabar wajib hafal di luar kepala: (1) a^2 - b^2 = (a - b)(a + b); (2) (a + b)^2 = a^2 + 2ab + b^2; (3) (a - b)^2 = a^2 - 2ab + b^2. Dari rumus (2) dan (3), kita dapatkan hubungan turunan yang sangat sering keluar: a^2 + b^2 = (a + b)^2 - 2ab dan (a + b)^2 - (a - b)^2 = 4ab. Bentuk selisih kubik: a^3 - b^3 = (a - b)(a^2 + ab + b^2).',
      formulaBox: '1. Identitas Aljabar Utama:\n   - a^2 - b^2 = (a - b)(a + b)\n   - a^2 + b^2 = (a + b)^2 - 2ab\n   - (a + b)^2 - (a - b)^2 = 4ab\n\n2. Bentuk Pangkat Tiga (Kubik):\n   - a^3 - b^3 = (a - b)(a^2 + ab + b^2)\n   - a^3 + b^3 = (a + b)(a^2 - ab + b^2)\n\n3. Bentuk Pecahan Simetris:\n   Jika x + 1/x = k, maka:\n   x^2 + 1/x^2 = k^2 - 2\n   x^3 + 1/x^3 = k^3 - 3k',
      trapRadar: 'Jebakan Utama: Menjabarkan (a + b)^2 menjadi a^2 + b^2 (lupa suku tengah +2ab). Begitu pula (a - b)^2 bukan a^2 - b^2!',
      steps: [
        'Pindai apakah ada bentuk selisih kuadrat angka besar (misal 2027^2 - 2026^2).',
        'Faktorkan langsung menjadi (a - b)(a + b) tanpa pernah menghitung nilai kuadratnya.',
        'Jika diketahui nilai (a + b) dan (ab), gunakan rumus a^2 + b^2 = (a + b)^2 - 2ab.'
      ],
      guidedExample: {
        problem: 'Jika x + 1/x = 5, tentukan nilai dari x^2 + 1/x^2 dan x^3 + 1/x^3.',
        identify: 'Bentuk aljabar simetris x + 1/x = 5.',
        process: '1) Kuadratkan kedua ruas:\n(x + 1/x)^2 = x^2 + 2(x)(1/x) + 1/x^2 = x^2 + 2 + 1/x^2 = 5^2 = 25.\nMaka x^2 + 1/x^2 = 25 - 2 = 23.\n2) Pangkat tigakan:\nx^3 + 1/x^3 = (x + 1/x)^3 - 3(x)(1/x)(x + 1/x) = 5^3 - 3(5) = 125 - 15 = 110.',
        answer: 'x^2 + 1/x^2 = 23 dan x^3 + 1/x^3 = 110.'
      },
      drills: [
        {
          q: 'Nilai dari (5050^2 - 4950^2) / 2000 adalah...',
          options: ['200', '300', '400', '500', '1000'],
          ans: 3,
          explanation: 'Gunakan a^2 - b^2 = (a - b)(a + b): (5050 - 4950)(5050 + 4950) / 2000 = (100 x 10000) / 2000 = 1.000.000 / 2000 = 500.'
        },
        {
          q: 'Diketahui x - y = 6 dan xy = 16. Berapakah nilai dari x^2 + y^2?',
          options: ['52', '64', '68', '72', '84'],
          ans: 2,
          explanation: 'x^2 + y^2 = (x - y)^2 + 2xy = 6^2 + 2(16) = 36 + 32 = 68.'
        },
        {
          q: 'Jika a^2 - b^2 = 40 dan a - b = 4, berapakah nilai dari (a + b)^2?',
          options: ['64', '81', '100', '121', '144'],
          ans: 2,
          explanation: 'a^2 - b^2 = (a - b)(a + b) ==> 40 = 4(a + b) ==> a + b = 10. Maka (a + b)^2 = 10^2 = 100.'
        }
      ],
      flashcards: [
        { front: 'Apa rumus pemfaktoran a^2 - b^2?', back: '(a - b)(a + b).' },
        { front: 'Bagaimana mencari a^2 + b^2 jika diketahui a+b dan ab?', back: 'a^2 + b^2 = (a + b)^2 - 2ab.' },
        { front: 'Berapa nilai dari (a + b)^2 - (a - b)^2?', back: '4ab.' },
        { front: 'Jika x + 1/x = 4, berapa nilai x^2 + 1/x^2?', back: '4^2 - 2 = 16 - 2 = 14.' },
        { front: 'Apa rumus pemfaktoran a^3 - b^3?', back: '(a - b)(a^2 + ab + b^2).' }
      ],
      commonMistakes: [
        'Menghitung perkalian kuadrat angka ribuan secara manual di kertas buram.',
        'Lupa tanda minus pada -2ab saat menjabarkan (a - b)^2.'
      ]
    },
    {
      id: 'pk-04',
      subtest: 'PK',
      day: 2,
      title: 'Persamaan & Pertidaksamaan Linear Serta Nilai Mutlak',
      timeTarget: '65 dtk/soal',
      oneLiner: 'Menyelesaikan sistem persamaan dan pertidaksamaan nilai mutlak tanpa salah tanda ketaksamaan.',
      summary: 'Persamaan linear menuntut teknik eliminasi dan substitusi yang efisien, sedangkan pertidaksamaan menuntut ketelitian aturan pembalikan tanda saat dikali/dibagi bilangan negatif.',
      coreConcept: '1) Aturan Emas Pertidaksamaan: JANGAN PERNAH mengalikan silang pertidaksamaan dengan variabel yang belum diketahui tanda positif/negatifnya! Jika kedua ruas dikali atau dibagi bilangan NEGATIF, tanda pertidaksamaan WAJIB DIBALIK (> menjadi <). 2) Nilai Mutlak: Definisi |x| adalah jarak x ke 0 pada garis bilangan. |x| < a bermakna -a < x < a. |x| > a bermakna x < -a atau x > a.',
      formulaBox: '1. Sifat Pertidaksamaan Nilai Mutlak (a > 0):\n   - |f(x)| < a   ===>   -a < f(x) < a\n   - |f(x)| > a   ===>   f(x) < -a  atau  f(x) > a\n   - |f(x)| <= |g(x)|  ===>  (f(x) + g(x))(f(x) - g(x)) <= 0  (Kuadratkan kedua ruas)\n\n2. Pembalikan Tanda:\n   -2x > 6   ===>   x < 6 / (-2)   ===>   x < -3',
      trapRadar: 'Jebakan Utama: Mengalikan silang bentuk 1/(x - 2) < 3 menjadi 1 < 3(x - 2). Ini SALAH BESAR karena (x - 2) bisa bernilai negatif! Pindahkan semua ke ruas kiri lalu buat garis bilangan uji tanda.',
      steps: [
        'Pada pertidaksamaan pecahan: buat ruas kanan bernilai 0, samakan penyebut, dan faktorkan pembilang serta penyebut.',
        'Tentukan titik pembuat nol dan syarat penyebut != 0.',
        'Gambar garis bilangan, lakukan uji tanda titik sampel (+/-), dan arsir daerah yang sesuai tanda ketaksamaan.'
      ],
      guidedExample: {
        problem: 'Tentukan himpunan penyelesaian dari pertidaksamaan nilai mutlak |2x - 3| <= 7.',
        identify: 'Bentuk |f(x)| <= a dengan a = 7 (a > 0).',
        process: 'Buka nilai mutlak menjadi bentuk apit:\n-7 <= 2x - 3 <= 7\nTambahkan 3 pada ketiga ruas:\n-7 + 3 <= 2x <= 7 + 3\n-4 <= 2x <= 10\nBagi seluruh ruas dengan 2 (tanda tetap karena 2 positif):\n-2 <= x <= 5.',
        answer: 'Himpunan penyelesaian adalah {x | -2 <= x <= 5, x e R}.'
      },
      drills: [
        {
          q: 'Himpunan penyelesaian dari pertidaksamaan |3x + 1| > 8 adalah...',
          options: [
            '-3 < x < 7/3',
            'x < -3 atau x > 7/3',
            'x < -7/3 atau x > 3',
            '-7/3 < x < 3',
            'x > 7/3'
          ],
          ans: 1,
          explanation: '|3x + 1| > 8 bermakna 3x + 1 < -8 atau 3x + 1 > 8. Dari 3x + 1 < -8 diperoleh 3x < -9 ==> x < -3. Dari 3x + 1 > 8 diperoleh 3x > 7 ==> x > 7/3. Maka x < -3 atau x > 7/3.'
        },
        {
          q: 'Jika 3x - 5y = 11 dan 2x + y = 16, berapakah nilai dari 5x - 4y?',
          options: ['25', '27', '29', '31', '33'],
          ans: 1,
          explanation: 'Jumlahkan kedua persamaan secara langsung: (3x - 5y) + (2x + y) = 11 + 16 ==> 5x - 4y = 27 (selesai dalam 5 detik tanpa perlu mencari x dan y satu per satu!).'
        },
        {
          q: 'Semua nilai x yang memenuhi pertidaksamaan (x - 1) / (x + 3) <= 0 adalah...',
          options: [
            '-3 <= x <= 1',
            '-3 < x <= 1',
            'x < -3 atau x >= 1',
            'x <= -3 atau x > 1',
            '-1 <= x <= 3'
          ],
          ans: 1,
          explanation: 'Pembuat nol pembilang x = 1 (tanda <= berarti 1 ikut bulat penuh). Pembuat nol penyebut x = -3 (syarat penyebut != 0, bulat kosong). Uji tanda menghasilkan daerah negatif di antara -3 dan 1: -3 < x <= 1.'
        }
      ],
      flashcards: [
        { front: 'Kapan tanda pertidaksamaan harus dibalik?', back: 'Saat kedua ruas dikalikan atau dibagikan dengan bilangan negatif.' },
        { front: 'Bagaimana membuka bentuk |x| < a (dengan a > 0)?', back: '-a < x < a.' },
        { front: 'Bagaimana membuka bentuk |x| > a (dengan a > 0)?', back: 'x < -a atau x > a.' },
        { front: 'Bolehkah mengalikan silang pertidaksamaan dengan penyebut bervariabel?', back: 'DILARANG, karena variabel belum tentu positif; pindahkan ke satu ruas lalu buat garis bilangan.' },
        { front: 'Mengapa penyebut pecahan pertidaksamaan selalu bulat kosong?', back: 'Karena penyebut pecahan matematika tidak boleh bernilai nol (syarat terdefinisi).' }
      ],
      commonMistakes: [
        'Lupa membalik tanda pertidaksamaan saat membagi dengan angka negatif.',
        'Menyertakan nilai pembuat nol penyebut ke dalam tanda <= (penyebut jadi nol = tak terdefinisi).'
      ]
    },
    {
      id: 'pk-05',
      subtest: 'PK',
      day: 3,
      title: 'Persamaan Kuadrat, Diskriminan & Teorema Vieta',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menghitung jumlah dan hasil kali akar secara kilat menggunakan Teorema Vieta tanpa mencari akar.',
      summary: 'Persamaan kuadrat ax^2 + bx + c = 0 memiliki dua akar (x1 dan x2). Karakteristik jenis akar ditentukan oleh Diskriminan (D = b^2 - 4ac), dan hubungan antar-akar ditentukan oleh Teorema Vieta.',
      coreConcept: '1) Teorema Vieta: Jumlah akar x1 + x2 = -b/a; Hasil kali akar x1 . x2 = c/a; Selisih akar |x1 - x2| = sqrt(D) / |a|. Rumus turunan Vieta: x1^2 + x2^2 = (x1 + x2)^2 - 2(x1.x2). 2) Sifat Diskriminan (D = b^2 - 4ac): Jika D > 0, memiliki 2 akar real berbeda; jika D = 0, memiliki 2 akar kembar (1 akar real); jika D < 0, tidak memiliki akar real (akar imajiner / kurva tidak memotong sumbu X).',
      formulaBox: '1. Teorema Vieta (ax^2 + bx + c = 0):\n   - x1 + x2 = -b / a\n   - x1 . x2 = c / a\n   - x1^2 + x2^2 = (-b/a)^2 - 2(c/a)\n   - 1/x1 + 1/x2 = (x1 + x2) / (x1.x2) = -b / c\n\n2. Uji Diskriminan (D = b^2 - 4ac):\n   - D > 0 : 2 akar real berlainan (memotong sumbu X di 2 titik)\n   - D = 0 : 2 akar kembar (menyinggung sumbu X di 1 titik)\n   - D < 0 : Tidak memotong sumbu X (akar imajiner)',
      trapRadar: 'Jebakan Utama: Soal menanyakan nilai x1^2 + x2^2. Banyak peserta bersusah payah mencari x1 dan x2 menggunakan rumus abc yang rumit, padahal cukup gunakan identitas Vieta: (x1 + x2)^2 - 2(x1.x2)!',
      steps: [
        'Tuliskan nilai koefisien a, b, dan c dari bentuk baku ax^2 + bx + c = 0.',
        'Hitung x1 + x2 = -b/a dan x1 . x2 = c/a.',
        'Ubah bentuk aljabar yang ditanyakan ke dalam kombinasi (x1 + x2) dan (x1 . x2).'
      ],
      guidedExample: {
        problem: 'Persamaan kuadrat 2x^2 - 6x + 3 = 0 memiliki akar-akar p dan q. Berapakah nilai dari (p/q + q/p)?',
        identify: 'a = 2, b = -6, c = 3. Bentuk target: p/q + q/p.',
        process: '1) Teorema Vieta:\np + q = -(-6)/2 = 3.\np . q = 3/2.\n2) Sederhanakan bentuk target:\np/q + q/p = (p^2 + q^2) / (pq) = [(p + q)^2 - 2pq] / (pq).\nSubstitusikan nilai:\n[(3)^2 - 2(3/2)] / (3/2) = [9 - 3] / (3/2) = 6 / (3/2) = 6 x (2/3) = 4.',
        answer: 'Nilai dari p/q + q/p adalah 4.'
      },
      drills: [
        {
          q: 'Persamaan kuadrat x^2 - (k + 2)x + (2k + 1) = 0 memiliki akar-akar kembar real. Nilai k yang memenuhi adalah...',
          options: ['0 atau 4', '1 atau 3', '-2 atau 2', '0 saja', '4 saja'],
          ans: 0,
          explanation: 'Syarat akar kembar: D = b^2 - 4ac = 0. [-(k + 2)]^2 - 4(1)(2k + 1) = 0 ==> k^2 + 4k + 4 - 8k - 4 = 0 ==> k^2 - 4k = 0 ==> k(k - 4) = 0. Maka k = 0 atau k = 4.'
        },
        {
          q: 'Jika salah satu akar persamaan kuadrat x^2 + 5x + c = 0 adalah 2, berapakah akar lainnya?',
          options: ['-7', '-3', '3', '5', '7'],
          ans: 0,
          explanation: 'Berdasarkan Teorema Vieta, x1 + x2 = -b/a = -5. Jika x1 = 2, maka 2 + x2 = -5 ==> x2 = -7.'
        },
        {
          q: 'Persamaan kuadrat baru yang akar-akarnya dua kali dari akar-akar persamaan x^2 - 3x + 4 = 0 adalah...',
          options: [
            'x^2 - 6x + 8 = 0',
            'x^2 - 6x + 16 = 0',
            'x^2 - 3x + 16 = 0',
            '2x^2 - 6x + 8 = 0',
            'x^2 - 12x + 16 = 0'
          ],
          ans: 1,
          explanation: 'Akar baru y = 2x ==> x = y/2. Substitusikan x = y/2 ke persamaan awal: (y/2)^2 - 3(y/2) + 4 = 0 ==> y^2/4 - 3y/2 + 4 = 0. Kalikan 4: y^2 - 6y + 16 = 0.'
        }
      ],
      flashcards: [
        { front: 'Apa rumus Teorema Vieta untuk jumlah akar x1 + x2?', back: '-b / a.' },
        { front: 'Apa rumus Teorema Vieta untuk hasil kali akar x1 . x2?', back: 'c / a.' },
        { front: 'Bagaimana mencari x1^2 + x2^2 lewat Vieta?', back: '(x1 + x2)^2 - 2(x1 . x2).' },
        { front: 'Apa syarat diskriminan agar kurva kuadrat menyinggung sumbu X?', back: 'D = 0 (b^2 - 4ac = 0).' },
        { front: 'Apa arti D < 0 pada fungsi kuadrat?', back: 'Kurva tidak pernah memotong atau menyinggung sumbu X (akar imajiner).' }
      ],
      commonMistakes: [
        'Lupa tanda minus pada rumus jumlah akar x1 + x2 = -b/a.',
        'Menghitung akar secara manual padahal hanya ditanyakan fungsi simetris akar.'
      ]
    },
    {
      id: 'pk-06',
      subtest: 'PK',
      day: 3,
      title: 'Eksponen, Bentuk Akar & Logaritma',
      timeTarget: '65 dtk/soal',
      oneLiner: 'Menyederhanakan eksponen bersusun, merasionalkan bentuk akar, dan menguasai sifat logaritma.',
      summary: 'Eksponen dan logaritma adalah fungsi invers satu sama lain. Menguasai sifat distributif pangkat dan basis logaritma akan mempermudah penyelesaian soal dalam waktu di bawah 1 menit.',
      coreConcept: '1) Sifat Eksponen: a^m x a^n = a^(m+n); a^m / a^n = a^(m-n); (a^m)^n = a^(m x n); a^0 = 1; a^(-n) = 1/(a^n). 2) Merasionalkan Akar: Kalikan dengan sekawannya. c / (sqrt(a) + sqrt(b)) dikalikan (sqrt(a) - sqrt(b)) / (sqrt(a) - sqrt(b)). Bentuk akar ganda: sqrt((a + b) +/- 2*sqrt(a*b)) = sqrt(a) +/- sqrt(b). 3) Sifat Logaritma: ^a log(b . c) = ^a log(b) + ^a log(c); ^a log(b / c) = ^a log(b) - ^a log(c); ^(a^m) log(b^n) = (n/m) * ^a log(b); ^a log(b) * ^b log(c) = ^a log(c).',
      formulaBox: '1. Sifat Kunci Logaritma:\n   - ^a log(b) . ^b log(c) = ^a log(c)\n   - ^(a^m) log(b^n) = (n/m) . ^a log(b)\n   - ^a log(b) = 1 / (^b log(a))\n\n2. Bentuk Akar Khusus:\n   sqrt((a + b) - 2*sqrt(a*b)) = sqrt(a) - sqrt(b)  (dengan a > b)\n\n3. Persamaan Eksponen Basis Sama:\n   a^(f(x)) = a^(g(x))  ===>  f(x) = g(x)  (untuk a > 0, a != 1)',
      trapRadar: 'Jebakan Utama: Bentuk logaritma ^a log(x + y) BUKAN ^a log(x) + ^a log(y)! Sifat penjumlahan hanya berlaku untuk perkalian argumen: ^a log(x . y) = ^a log(x) + ^a log(y).',
      steps: [
        'Ubah seluruh angka basis eksponen/logaritma ke bilangan prima terkecilnya (misal 4 = 2^2, 9 = 3^2, 8 = 2^3).',
        'Terapkan sifat penggabungan pangkat atau pencoretan rantai logaritma.',
        'Pada persamaan eksponen, samakan basis kiri dan kanan sebelum menyamakan pangkat.'
      ],
      guidedExample: {
        problem: 'Sederhanakan bentuk akar ganda: sqrt(8 - 2*sqrt(15)).',
        identify: 'Bentuk sqrt((a + b) - 2*sqrt(a*b)). Di sini a + b = 8 dan a x b = 15.',
        process: 'Cari dua bilangan yang jika dijumlahkan bernilai 8 dan jika dikalikan bernilai 15. Dua bilangan tersebut adalah 5 dan 3 (dengan 5 > 3). Menggunakan rumus akar ganda: sqrt(8 - 2*sqrt(15)) = sqrt(5) - sqrt(3).',
        answer: 'Bentuk sederhananya adalah sqrt(5) - sqrt(3).'
      },
      drills: [
        {
          q: 'Nilai dari ^2 log(48) + ^2 log(sqrt(2)) - ^2 log(3) adalah...',
          options: ['4', '4,5', '5', '5,5', '6'],
          ans: 1,
          explanation: '^2 log(48) - ^2 log(3) = ^2 log(48/3) = ^2 log(16) = 4. ^2 log(sqrt(2)) = ^2 log(2^(1/2)) = 1/2 = 0,5. Jumlah = 4 + 0,5 = 4,5.'
        },
        {
          q: 'Jika 3^(2x - 1) = 1 / 27, berapakah nilai x?',
          options: ['-2', '-1', '0', '1', '2'],
          ans: 1,
          explanation: '1 / 27 = 27^(-1) = (3^3)^(-1) = 3^(-3). Persamaan: 3^(2x - 1) = 3^(-3) ==> 2x - 1 = -3 ==> 2x = -2 ==> x = -1.'
        },
        {
          q: 'Bentuk sederhana dari 6 / (sqrt(5) - sqrt(2)) adalah...',
          options: [
            '2(sqrt(5) + sqrt(2))',
            '3(sqrt(5) + sqrt(2))',
            '2(sqrt(5) - sqrt(2))',
            'sqrt(5) + sqrt(2)',
            '6(sqrt(5) + sqrt(2))'
          ],
          ans: 0,
          explanation: 'Kalikan sekawan: 6(sqrt(5) + sqrt(2)) / (5 - 2) = 6(sqrt(5) + sqrt(2)) / 3 = 2(sqrt(5) + sqrt(2)).'
        }
      ],
      flashcards: [
        { front: 'Berapa nilai a^0 untuk setiap a != 0?', back: '1.' },
        { front: 'Berapa nilai dari ^a log(1)?', back: '0.' },
        { front: 'Berapa nilai dari ^a log(a)?', back: '1.' },
        { front: 'Bagaimana rumus ^(a^m) log(b^n)?', back: '(n/m) . ^a log(b).' },
        { front: 'Berapa hasil dari ^2 log(3) . ^3 log(4) . ^4 log(8)?', back: '^2 log(8) = 3.' }
      ],
      commonMistakes: [
        'Menganggap ^a log(x + y) = ^a log(x) + ^a log(y).',
        'Lupa memberikan tanda minus pada pangkat saat mengubah pecahan 1/a^n menjadi bentuk pembilang.'
      ]
    },
    {
      id: 'pk-07',
      subtest: 'PK',
      day: 4,
      title: 'Fungsi: Komposisi, Invers & Domain Alami',
      timeTarget: '65 dtk/soal',
      oneLiner: 'Menghitung (f o g)(x) dan mencari fungsi invers f^(-1)(x) dengan rumus cepat.',
      summary: 'Fungsi komposisi menggabungkan dua fungsi secara berurutan, sedangkan fungsi invers membalikkan relasi pemetaan dari output kembali ke input.',
      coreConcept: '1) Komposisi: (f o g)(x) = f(g(x)) (masukkan fungsi g ke dalam seluruh x pada f). Sifat: f o g != g o f (tidak komutatif). 2) Invers Cepat: Fungsi linear f(x) = ax + b memiliki invers f^(-1)(x) = (x - b) / a. Fungsi pecahan f(x) = (ax + b) / (cx + d) memiliki rumus invers kilat: tukar posisi a dan d lalu beri tanda minus: f^(-1)(x) = (-dx + b) / (cx - a). 3) Domain Alami: Penyebut pecahan != 0; fungsi di bawah tanda akar genap sqrt(f(x)) syaratnya f(x) >= 0.',
      formulaBox: '1. Rumus Invers Kilat Pecahan:\n   f(x) = (ax + b) / (cx + d)\n   ===>  f^(-1)(x) = (-dx + b) / (cx - a)\n\n2. Sifat Komposisi & Invers:\n   - (f o g)^(-1)(x) = (g^(-1) o f^(-1))(x)  (urutan dibalik!)\n   - (f o f^(-1))(x) = x  (fungsi identitas)\n\n3. Domain Alami (Daerah Asal):\n   - y = 1 / g(x)       ===>  Syarat: g(x) != 0\n   - y = sqrt(g(x))    ===>  Syarat: g(x) >= 0',
      trapRadar: 'Jebakan Utama: Pada rumus invers komposisi (f o g)^(-1), urutannya DIBALIK menjadi (g^(-1) o f^(-1)), bukan (f^(-1) o g^(-1))!',
      steps: [
        'Pada fungsi pecahan linear, gunakan rumus kilat tukar a dan d dengan negasi.',
        'Jika ditanyakan nilai numerik invers misal f^(-1)(5), jangan cari fungsi inversnya! Cukup samakan f(x) = 5 lalu cari nilai x.',
        'Periksa syarat pembagi != 0 pada daerah asal/domain.'
      ],
      guidedExample: {
        problem: 'Diketahui fungsi f(x) = (3x - 5) / (2x + 1) dengan x != -1/2. Tentukan f^(-1)(x) dan nilai dari f^(-1)(2).',
        identify: 'a = 3, b = -5, c = 2, d = 1.',
        process: '1) Rumus kilat invers pecahan: tukar a (3) dan d (1) serta kalikan minus:\nf^(-1)(x) = (-1x - 5) / (2x - 3) = (-x - 5) / (2x - 3) = (x + 5) / (3 - 2x).\n2) Untuk mencari f^(-1)(2), samakan f(x) = 2:\n(3x - 5) / (2x + 1) = 2 ==> 3x - 5 = 2(2x + 1) = 4x + 2 ==> -x = 7 ==> x = -7.',
        answer: 'f^(-1)(x) = (x + 5) / (3 - 2x) dan f^(-1)(2) = -7.'
      },
      drills: [
        {
          q: 'Jika f(x) = 2x + 3 dan g(x) = x^2 - 1, maka nilai dari (g o f)(-2) adalah...',
          options: ['-2', '-1', '0', '1', '3'],
          ans: 2,
          explanation: 'Cari f(-2) terlebih dahulu: f(-2) = 2(-2) + 3 = -4 + 3 = -1. Masukkan hasil ke g: g(-1) = (-1)^2 - 1 = 1 - 1 = 0.'
        },
        {
          q: 'Invers dari fungsi f(x) = (4x + 1) / (x - 2), x != 2 adalah...',
          options: [
            '(2x + 1) / (x - 4)',
            '(2x - 1) / (x - 4)',
            '(x + 2) / (4x - 1)',
            '(-2x + 1) / (x + 4)',
            '(4x - 1) / (x + 2)'
          ],
          ans: 0,
          explanation: 'a = 4, b = 1, c = 1, d = -2. f^(-1)(x) = (-dx + b) / (cx - a) = (-(-2)x + 1) / (x - 4) = (2x + 1) / (x - 4).'
        },
        {
          q: 'Domain alami (daerah asal) dari fungsi f(x) = sqrt(2x - 8) adalah...',
          options: ['x > 4', 'x >= 4', 'x < 4', 'x <= 4', 'Semua x real'],
          ans: 1,
          explanation: 'Syarat di bawah tanda akar genap harus non-negatif: 2x - 8 >= 0 ==> 2x >= 8 ==> x >= 4.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana rumus invers kilat f(x) = (ax + b) / (cx + d)?', back: 'f^(-1)(x) = (-dx + b) / (cx - a).' },
        { front: 'Berapa invers dari (f o g)(x)?', back: '(g^(-1) o f^(-1))(x) (ingat urutannya dibalik!).' },
        { front: 'Trik cepat mencari f^(-1)(k)?', back: 'Samakan f(x) = k, lalu temukan nilai x (tidak perlu mencari rumus inversnya).' },
        { front: 'Apakah (f o g)(x) selalu sama dengan (g o f)(x)?', back: 'Tidak, komposisi fungsi tidak bersifat komutatif.' },
        { front: 'Apa syarat domain fungsi f(x) = 1 / (x - 5)?', back: 'x != 5.' }
      ],
      commonMistakes: [
        'Mencari rumus invers panjang saat soal hanya menanyakan nilai angka f^(-1)(3).',
        'Lupa membalik urutan fungsi pada invers komposisi (f o g)^(-1).'
      ]
    },
    {
      id: 'pk-08',
      subtest: 'PK',
      day: 4,
      title: 'Barisan & Deret Aritmetika Serta Geometri',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menghitung suku ke-n dan jumlah deret tanpa menjumlahkan angka satu per satu.',
      summary: 'Barisan aritmetika memiliki beda tetap (b = Un - Un-1), sedangkan barisan geometri memiliki rasio tetap (r = Un / Un-1). Menguasai trik suku tengah dan eliminasi beda sangat mempercepat perhitungan.',
      coreConcept: '1) Aritmetika: Suku ke-n Un = a + (n - 1)b. Beda b = (Up - Uq) / (p - q). Jumlah n suku pertama Sn = (n/2)(a + Un) = (n/2)[2a + (n - 1)b]. Suku tengah Ut = (U1 + Un)/2 (untuk n ganjil). 2) Geometri: Suku ke-n Un = a . r^(n-1). Rasio r^(p-q) = Up / Uq. Jumlah n suku pertama Sn = a(r^n - 1) / (r - 1). Deret geometri tak hingga konvergen (-1 < r < 1): S_takhingga = a / (1 - r).',
      formulaBox: '1. Rumus Kunci Aritmetika:\n   - Un = a + (n - 1)b\n   - b = (Up - Uq) / (p - q)\n   - Sn = (n/2)(U1 + Un)\n\n2. Rumus Kunci Geometri:\n   - Un = a . r^(n-1)\n   - Sn = a(r^n - 1) / (r - 1)\n   - Deret Tak Hingga Konvergen: S_inf = a / (1 - r)  (dengan |r| < 1)',
      trapRadar: 'Jebakan Utama: Sering tertukar antara Un (nilai suku ke-n saja) dengan Sn (jumlah akumulatif dari suku ke-1 sampai ke-n). Hubungan keduanya: Un = Sn - Sn-1!',
      steps: [
        'Tentukan jenis barisan: apakah memiliki beda tetap (+/-) atau rasio perkalian (x/:).',
        'Cari nilai suku pertama (a) dan beda (b) atau rasio (r).',
        'Gunakan rumus Sn = (n/2)(U1 + Un) jika suku pertama dan suku terakhir sudah diketahui.'
      ],
      guidedExample: {
        problem: 'Sebuah deret geometri tak hingga memiliki suku pertama a = 12 dan jumlah tak hingga S_inf = 36. Berapakah rasio r dari deret tersebut?',
        identify: 'a = 12, S_inf = 36. Deret geometri tak hingga konvergen.',
        process: 'Gunakan rumus S_inf = a / (1 - r):\n36 = 12 / (1 - r)\n1 - r = 12 / 36 = 1/3\nr = 1 - 1/3 = 2/3.',
        answer: 'Rasio dari deret tersebut adalah 2/3.'
      },
      drills: [
        {
          q: 'Suku ke-4 suatu barisan aritmetika adalah 17 dan suku ke-9 adalah 37. Berapakah suku ke-15 dari barisan tersebut?',
          options: ['57', '61', '65', '69', '73'],
          ans: 1,
          explanation: 'Beda b = (U9 - U4) / (9 - 4) = (37 - 17) / 5 = 20 / 5 = 4. Suku ke-15 U15 = U9 + (15 - 9)b = 37 + 6(4) = 37 + 24 = 61.'
        },
        {
          q: 'Jumlah 20 suku pertama dari deret aritmetika 3 + 7 + 11 + 15 + ... adalah...',
          options: ['780', '800', '820', '840', '860'],
          ans: 2,
          explanation: 'a = 3, b = 4, n = 20. U20 = 3 + 19(4) = 3 + 76 = 79. S20 = (20/2)(a + U20) = 10(3 + 79) = 10(82) = 820.'
        },
        {
          q: 'Sebuah bola dijatuhkan dari ketinggian 10 meter dan memantul kembali dengan ketinggian 3/4 kali tinggi sebelumnya. Panjang lintasan bola sampai berhenti adalah...',
          options: ['40 m', '50 m', '60 m', '70 m', '80 m'],
          ans: 3,
          explanation: 'Rumus cepat lintasan pantulan bola h dengan rasio a/b: S = h x (b + a) / (b - a). Di sini h = 10, rasio = 3/4 (a=3, b=4). S = 10 x (4 + 3) / (4 - 3) = 10 x 7 / 1 = 70 meter.'
        }
      ],
      flashcards: [
        { front: 'Bagaimana rumus cepat beda aritmetika dari dua suku Up dan Uq?', back: 'b = (Up - Uq) / (p - q).' },
        { front: 'Apa rumus deret geometri tak hingga konvergen?', back: 'S_inf = a / (1 - r) (dengan syarat -1 < r < 1).' },
        { front: 'Apa rumus cepat panjang lintasan bola memantul?', back: 'S = h x (b + a) / (b - a) (dengan r = a/b).' },
        { front: 'Apa hubungan antara Un dan Sn?', back: 'Un = Sn - Sn-1.' },
        { front: 'Berapa suku tengah aritmetika jika diketahui U1 dan Un?', back: 'Ut = (U1 + Un) / 2.' }
      ],
      commonMistakes: [
        'Menghitung lintasan bola pantul hanya saat naik tanpa menghitung saat turun.',
        'Menerapkan rumus deret tak hingga pada rasio yang r > 1 (deret divergen tak terhingga).'
      ]
    },
    {
      id: 'pk-09',
      subtest: 'PK',
      day: 5,
      title: 'Geometri Datar & Ruang: Sudut, Luas, Keliling & Volume',
      timeTarget: '70 dtk/soal',
      oneLiner: 'Menguasai Teorema Pythagoras, sudut sehadap/berseberangan, serta perbandingan volume bangun ruang.',
      summary: 'Soal geometri menguji konsep dasar segitiga, lingkaran, trapesium, balok, dan tabung. Trik utamanya adalah melihat garis bantu simetri dan hubungan perbandingan sudut.',
      coreConcept: '1) Segitiga & Pythagoras: Pasangan tripel Pythagoras populer: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17). Luas = 1/2 x alas x tinggi = 1/2 x a x b x sin(C). 2) Sudut Garis Sejajar: Sudut sehadap sama besar; sudut berseberangan (dalam/luar) sama besar; sudut sepihak berjumlah 180 derajat. Sudut keliling menghadap diameter lingkaran = 90 derajat (siku-siku). Sudut pusat = 2 x sudut keliling. 3) Bangun Ruang: Volume tabung = pi x r^2 x t; Kerucut = 1/3 pi x r^2 x t; Bola = 4/3 pi x r^3. Jika dimensi panjang diperbesar k kali, maka Luas menjadi k^2 kali dan Volume menjadi k^3 kali!',
      formulaBox: '1. Pasangan Tripel Pythagoras Wajib Hafal:\n   - (3, 4, 5) dan kelipatannya (6, 8, 10), (9, 12, 15)\n   - (5, 12, 13)\n   - (7, 24, 25)\n   - (8, 15, 17)\n\n2. Sifat Sudut Lingkaran:\n   - Sudut Pusat = 2 x Sudut Keliling (menghadap busur yang sama)\n   - Sudut Keliling menghadap diameter = 90 derajat\n\n3. Pengali Skala Geometri:\n   Jika skala rusuk = k ===> Skala Luas = k^2 ===> Skala Volume = k^3',
      trapRadar: 'Jebakan Utama: Jika jari-jari tabung digandakan 2 kali tetapi tingginya tetap, volumenya TIDAK menjadi 2 kali, melainkan 2^2 = 4 KALI LIPAT (karena r berderajat kuadrat pada volume pi*r^2*t)!',
      steps: [
        'Gambar sketsa bangun datar/ruang dan beri label huruf pada titik sudutnya.',
        'Tarik garis bantu tegak lurus (tinggi) untuk memunculkan segitiga siku-siku.',
        'Gunakan tripel Pythagoras untuk menghindari perhitungan akar manual.'
      ],
      guidedExample: {
        problem: 'Dua garis sejajar dipotong oleh garis transversal. Jika sudut dalam sepihak memiliki perbandingan 2 : 3, berapakah besar sudut yang lebih besar?',
        identify: 'Sudut dalam sepihak berjumlah 180 derajat. Perbandingan sudut = 2 : 3.',
        process: 'Total bagian = 2 + 3 = 5 bagian. Nilai 1 bagian = 180 / 5 = 36 derajat. Sudut yang lebih besar = 3 x 36 = 108 derajat. (Sudut kecil = 2 x 36 = 72 derajat).',
        answer: 'Besar sudut yang lebih besar adalah 108 derajat.'
      },
      drills: [
        {
          q: 'Sebuah segitiga siku-siku memiliki panjang hipotenusa 26 cm. Jika salah satu sisi tegaknya berpanjang 10 cm, berapakah luas segitiga tersebut?',
          options: ['120 cm^2', '130 cm^2', '240 cm^2', '260 cm^2', '312 cm^2'],
          ans: 0,
          explanation: 'Tripel Pythagoras (5, 12, 13) dikali 2 menjadi (10, 24, 26). Sisi alas = 24 cm, tinggi = 10 cm. Luas = 1/2 x 24 x 10 = 120 cm^2.'
        },
        {
          q: 'Jika jari-jari sebuah bola diperbesar menjadi 3 kali semula, maka volumenya akan menjadi berapa kali volume awal?',
          options: ['3 kali', '6 kali', '9 kali', '18 kali', '27 kali'],
          ans: 4,
          explanation: 'Volume bola berbanding lurus dengan r^3 (k = 3). Maka Volume baru = 3^3 = 27 kali lipat.'
        },
        {
          q: 'Pada sebuah lingkaran, besar sudut keliling ABC adalah 35 derajat. Berapakah besar sudut pusat AOC yang menghadap busur AC yang sama?',
          options: ['17,5 derajat', '35 derajat', '55 derajat', '70 derajat', '140 derajat'],
          ans: 3,
          explanation: 'Besar sudut pusat = 2 x sudut keliling = 2 x 35 = 70 derajat.'
        }
      ],
      flashcards: [
        { front: 'Sebutkan 4 tripel Pythagoras dasar!', back: '(3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17).' },
        { front: 'Berapa jumlah sudut dalam sepihak pada garis sejajar?', back: '180 derajat.' },
        { front: 'Berapa besar sudut keliling yang menghadap diameter?', back: '90 derajat (siku-siku).' },
        { front: 'Jika panjang rusuk kubus digandakan 2x, berapa kali lipat luas permukaannya?', back: '2^2 = 4 kali lipat.' },
        { front: 'Apa rumus volume kerucut?', back: '1/3 x pi x r^2 x t.' }
      ],
      commonMistakes: [
        'Mengalikan volume bola dengan k^2 alih-alih k^3.',
        'Lupa membagi 2 pada rumus luas segitiga (1/2 x alas x tinggi).'
      ]
    },
    {
      id: 'pk-10',
      subtest: 'PK',
      day: 5,
      title: 'Statistika, Peluang, Strategi P vs Q & Kecukupan Data',
      timeTarget: '70 dtk/soal',
      oneLiner: 'Menaklukkan format soal khas UTBK: Perbandingan Kuantitas P vs Q dan Kecukupan Data (1) & (2).',
      summary: 'Dua format soal paling mematikan di Pengetahuan Kuantitatif adalah: (1) Menentukan hubungan kuantitas P vs Q (apakah P > Q, P < Q, P = Q, atau informasi tidak cukup); dan (2) Kecukupan Data (menilai apakah pernyataan (1) dan/atau (2) cukup menjawab pertanyaan).',
      coreConcept: '1) Strategi P vs Q: Uji kasus ekstrem! Jangan hanya menguji angka bulat positif (misal x = 2). Selalu uji himpunan angka kritis: { -2, -1, 0, 1/2, 1, 2 }. Jika satu angka menghasilkan P > Q dan angka lain menghasilkan P < Q, maka jawabannya PASTI (D) Informasi tidak cukup untuk memutuskan. 2) Strategi Kecukupan Data: Uji Pernyataan (1) saja (apakah menghasilkan jawaban TUNGGAL?). Uji Pernyataan (2) saja secara independen. Jika keduanya gagal sendiri-sendiri, baru gabungkan (1) dan (2) bersamaan. Ingat: jawaban tidak harus angka bagus; yang penting informasi cukup untuk menghasilkan satu kepastian unik.',
      formulaBox: '1. Opsi Standar Perbandingan Kuantitas:\n   (A) P > Q\n   (B) Q > P\n   (C) P = Q\n   (D) Informasi yang diberikan tidak cukup untuk memutuskan.\n\n2. Opsi Standar Kecukupan Data:\n   (A) Pernyataan (1) SAJA cukup, tetapi (2) SAJA tidak cukup.\n   (B) Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup.\n   (C) DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU saja tidak cukup.\n   (D) Pernyataan (1) SAJA cukup dan (2) SAJA cukup.\n   (E) Pernyataan (1) dan (2) tidak cukup.',
      trapRadar: 'Jebakan Utama pada Kecukupan Data: Saat menguji pernyataan (2), peserta sering tanpa sadar masih membawa informasi dari pernyataan (1). Ingat: Pernyataan (2) wajib diuji BERSIH secara mandiri terlebih dahulu!',
      steps: [
        'Pada soal P vs Q: sederhanakan aljabar P dan Q, lalu uji nilai ekstrem batas domain.',
        'Pada kecukupan data: tutup pernyataan (2), uji apakah pernyataan (1) menghasilkan satu nilai tunggal pasti.',
        'Tutup pernyataan (1), uji pernyataan (2) secara mandiri. Hanya gabungkan keduanya jika masing-masing gagal.'
      ],
      guidedExample: {
        problem: 'Berapakah nilai x?\n(1) x^2 - 4x + 4 = 0\n(2) x > 0\nApakah pernyataan tersebut cukup untuk menjawab pertanyaan?',
        identify: 'Kita mencari nilai x tunggal.',
        process: 'Uji pernyataan (1): x^2 - 4x + 4 = 0 ===> (x - 2)^2 = 0 ===> x = 2 (menghasilkan TEPAT SATU nilai unik x = 2). Maka pernyataan (1) SAJA CUKUP.\nUji pernyataan (2): x > 0 (bisa bernilai 1, 2, 3... tidak menghasilkan nilai tunggal). Pernyataan (2) SAJA TIDAK CUKUP.\nKesimpulan: Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.',
        answer: 'Pilihan (A): Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.'
      },
      drills: [
        {
          q: 'Diketahui x adalah bilangan real tak nol. Manakah hubungan yang benar antara P = x^2 dan Q = x^3?\n(A) P > Q\n(B) Q > P\n(C) P = Q\n(D) Informasi yang diberikan tidak cukup.',
          options: ['P > Q', 'Q > P', 'P = Q', 'Informasi yang diberikan tidak cukup', 'P + Q = 0'],
          ans: 3,
          explanation: 'Uji nilai: Jika x = 2, maka P = 4 dan Q = 8 (Q > P). Jika x = -2, maka P = 4 dan Q = -8 (P > Q). Karena hubungan bisa Q > P dan bisa P > Q tergantung nilai x, maka informasi tidak cukup (Pilihan D).'
        },
        {
          q: 'Sebuah kotak berisi 5 bola merah dan 3 bola putih. Jika diambil 2 bola sekaligus secara acak, berapakah peluang terambilnya 1 bola merah dan 1 bola putih?',
          options: ['15/56', '15/28', '5/14', '15/64', '3/8'],
          ans: 1,
          explanation: 'Kombinasi total n(S) = C(8, 2) = (8 x 7) / 2 = 28. Banyak cara terambil 1 merah dan 1 putih = C(5, 1) x C(3, 1) = 5 x 3 = 15. Peluang = 15 / 28.'
        },
        {
          q: 'Berapakah nilai dari rata-rata (mean) data 4, 6, 8, x, y?\n(1) x + y = 12\n(2) Nilai jangkauan data adalah 6\nApakah pernyataan (1) dan/atau (2) cukup menjawab pertanyaan?',
          options: [
            'Pernyataan (1) SAJA cukup, tetapi (2) SAJA tidak cukup.',
            'Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup.',
            'DUA pernyataan BERSAMA-SAMA cukup.',
            'Pernyataan (1) SAJA cukup dan (2) SAJA cukup.',
            'Pernyataan (1) dan (2) tidak cukup.'
          ],
          ans: 0,
          explanation: 'Rata-rata = (4 + 6 + 8 + x + y) / 5 = (18 + x + y) / 5. Dengan Pernyataan (1) x + y = 12, maka rata-rata = (18 + 12) / 5 = 30 / 5 = 6 (nilai tunggal diperoleh!). Pernyataan (1) SAJA CUKUP. Pernyataan (2) tidak memberi jumlah x+y secara unik. Maka pilihan A.'
        }
      ],
      flashcards: [
        { front: 'Apa rumus peluang kombinasi C(n, k)?', back: 'n! / (k! x (n - k)!).' },
        { front: 'Kapan opsi (D) dipilih pada soal P vs Q?', back: 'Saat hubungan P dan Q berubah (bisa P > Q dan bisa P < Q) tergantung nilai uji.' },
        { front: 'Bagaimana urutan menguji soal kecukupan data?', back: 'Uji (1) sendiri -> Uji (2) sendiri -> Hanya jika keduanya gagal, gabungkan (1) dan (2).' },
        { front: 'Angka apa saja yang wajib diuji pada soal aljabar P vs Q?', back: '{ -2, -1, 0, 1/2, 1, 2 }.' },
        { front: 'Apakah nilai tunggal pecahan tetap dianggap "cukup" pada kecukupan data?', back: 'Ya, yang penting menghasilkan SATU kepastian nilai unik, bukan banyak kemungkinan.' }
      ],
      commonMistakes: [
        'Menguji hanya satu angka positif pada soal P vs Q.',
        'Menggabungkan pernyataan (1) dan (2) sejak awal tanpa menguji masing-masing pernyataan secara terpisah.'
      ]
    }
  ];

  window.UTBK_MODULES.push(...PK_MODULES);
})();
