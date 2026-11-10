import { Wind, Thermometer, Coffee, Activity, Droplets, HeartPulse, Sparkles, Flower2, Stethoscope, Bug, Utensils, Waves, Gauge, Apple, CircleDot, Sun } from 'lucide-react'

export const categories = ['Semua', 'Pernapasan', 'Pencernaan', 'Darah & Metabolisme', 'Kulit']

export const diseases = [
  {
    id: 1, slug: 'asma', name: 'Asma', category: 'Pernapasan', icon: Wind, color: 'mint',
    summary: 'Kondisi ketika saluran napas mengalami peradangan dan penyempitan sehingga napas dapat terasa sulit.',
    definition: 'Asma adalah kondisi kronis pada saluran pernapasan. Saluran napas menjadi sensitif dan dapat menyempit ketika terpapar pemicu tertentu.',
    causes: ['Riwayat keluarga atau faktor genetik.', 'Paparan alergen, asap rokok, polusi, atau udara dingin.', 'Infeksi saluran pernapasan dan aktivitas fisik pada sebagian orang.'],
    symptoms: ['Mengi atau napas berbunyi.', 'Batuk, terutama malam atau dini hari.', 'Dada terasa sesak dan napas pendek.'],
    prevention: ['Kenali dan kurangi paparan pemicu pribadi.', 'Hindari asap rokok dan jaga kebersihan ruangan.', 'Gunakan obat pengontrol sesuai resep dan ikuti rencana tindakan asma dari tenaga kesehatan.'],
    firstAid: ['Bantu penderita duduk tegak dan tetap tenang.', 'Bantu gunakan inhaler pelega sesuai resep dan petunjuk/rencana tindakan asma.', 'Jangan tinggalkan penderita sendirian. Jika sesak berat, sulit berbicara, bibir membiru, atau tidak membaik setelah obat pelega, segera hubungi layanan darurat.'],
    doctor: 'Segera cari bantuan darurat jika penderita kesulitan berbicara, tampak sangat lemah, bibir membiru, atau sesak memburuk. Periksakan diri jika gejala sering kambuh atau mengganggu tidur.',
    source: 'WHO — Asthma; NHS — Asthma'
  },
  {
    id: 2, slug: 'influenza', name: 'Influenza', category: 'Pernapasan', icon: Thermometer, color: 'peach',
    summary: 'Infeksi virus pada saluran pernapasan yang umumnya menimbulkan demam, batuk, dan nyeri tubuh.',
    definition: 'Influenza atau flu adalah infeksi saluran pernapasan yang disebabkan oleh virus influenza. Flu dapat menular melalui percikan pernapasan dan kontak dengan permukaan yang terkontaminasi.',
    causes: ['Infeksi virus influenza.', 'Kontak dekat dengan orang yang sedang terinfeksi.', 'Menyentuh mata, hidung, atau mulut setelah tangan terkontaminasi.'],
    symptoms: ['Demam atau menggigil.', 'Batuk, sakit tenggorokan, dan pilek.', 'Nyeri otot, sakit kepala, dan rasa lelah.'],
    prevention: ['Cuci tangan dengan sabun secara rutin.', 'Tutup mulut dan hidung saat batuk atau bersin.', 'Pertimbangkan vaksinasi influenza sesuai anjuran tenaga kesehatan.'],
    firstAid: ['Istirahat dan cukup minum untuk mencegah dehidrasi.', 'Gunakan masker dan kurangi kontak dekat dengan orang lain saat sakit.', 'Obat pereda demam dapat dipertimbangkan sesuai aturan pakai dan kondisi pribadi. Jangan memberikan aspirin kepada anak atau remaja tanpa arahan dokter.'],
    doctor: 'Cari bantuan medis jika muncul sesak napas, nyeri dada, kebingungan, dehidrasi, atau gejala memburuk. Kelompok berisiko tinggi sebaiknya berkonsultasi lebih awal.',
    source: 'WHO — Influenza (Seasonal); CDC — Flu'
  },
  {
    id: 3, slug: 'gastritis', name: 'Gastritis', category: 'Pencernaan', icon: Coffee, color: 'cream',
    summary: 'Peradangan pada lapisan lambung yang dapat menyebabkan nyeri atau rasa tidak nyaman di perut bagian atas.',
    definition: 'Gastritis adalah peradangan pada lapisan lambung. Kondisi ini dapat berlangsung singkat atau menetap, dan penyebabnya perlu dinilai oleh tenaga kesehatan.',
    causes: ['Infeksi bakteri Helicobacter pylori.', 'Penggunaan obat antiinflamasi nonsteroid tertentu dalam jangka waktu tertentu.', 'Iritasi lapisan lambung akibat alkohol atau faktor lain.'],
    symptoms: ['Nyeri atau rasa perih di perut bagian atas.', 'Mual, muntah, atau cepat merasa kenyang.', 'Perut terasa tidak nyaman atau kembung.'],
    prevention: ['Gunakan obat sesuai aturan dan konsultasikan pemakaian jangka panjang.', 'Batasi alkohol dan hindari hal yang diketahui memicu keluhan.', 'Periksakan keluhan berulang untuk mengetahui penyebabnya.'],
    firstAid: ['Hentikan sementara makanan atau minuman yang jelas memperburuk keluhan.', 'Minum sedikit demi sedikit jika mual, selama masih dapat menelan dengan baik.', 'Jangan mengonsumsi obat antinyeri sembarangan; konsultasikan pilihan obat dengan apoteker atau dokter.'],
    doctor: 'Segera cari pertolongan jika muntah darah, tinja hitam seperti aspal, nyeri hebat, pingsan, atau muntah terus-menerus. Keluhan yang berulang perlu diperiksa.',
    source: 'NHS — Gastritis; NIDDK — Gastritis'
  },
  {
    id: 4, slug: 'gerd', name: 'GERD', category: 'Pencernaan', icon: Activity, color: 'lavender',
    summary: 'Kondisi ketika isi lambung berulang kali naik ke kerongkongan dan menimbulkan keluhan.',
    definition: 'Gastroesophageal reflux disease (GERD) terjadi ketika refluks asam atau isi lambung berulang menimbulkan gejala yang mengganggu atau komplikasi.',
    causes: ['Fungsi katup antara kerongkongan dan lambung tidak bekerja optimal.', 'Makan dalam porsi besar atau berbaring segera setelah makan dapat memperburuk gejala.', 'Berat badan berlebih dan beberapa jenis makanan dapat menjadi faktor pada sebagian orang.'],
    symptoms: ['Rasa panas di dada (heartburn).', 'Rasa asam atau pahit naik ke mulut.', 'Keluhan memburuk setelah makan atau saat berbaring.'],
    prevention: ['Makan dengan porsi lebih kecil jika porsi besar memicu gejala.', 'Hindari berbaring selama sekitar 2–3 jam setelah makan.', 'Kenali makanan atau minuman pemicu pribadi dan konsultasikan gejala berulang.'],
    firstAid: ['Duduk atau berdiri tegak ketika keluhan muncul.', 'Hindari langsung berbaring setelah makan.', 'Gunakan obat hanya sesuai petunjuk kemasan atau arahan tenaga kesehatan. Nyeri dada tidak boleh langsung dianggap GERD.'],
    doctor: 'Segera cari bantuan jika nyeri dada disertai sesak, keringat dingin, atau menjalar ke lengan/rahang. Periksa ke dokter jika sulit menelan, muntah darah, berat badan turun tanpa sebab, atau gejala menetap.',
    source: 'NIDDK — Acid Reflux (GER & GERD) in Adults; NHS — Heartburn and acid reflux'
  },
  {
    id: 5, slug: 'anemia', name: 'Anemia', category: 'Darah & Metabolisme', icon: Droplets, color: 'rose',
    summary: 'Kondisi ketika jumlah sel darah merah sehat atau hemoglobin tidak mencukupi kebutuhan tubuh.',
    definition: 'Anemia terjadi ketika kadar hemoglobin atau jumlah sel darah merah berada di bawah nilai yang dibutuhkan. Penyebabnya beragam sehingga pemeriksaan diperlukan untuk menentukan penanganan.',
    causes: ['Kekurangan zat besi, folat, atau vitamin B12.', 'Kehilangan darah, misalnya akibat perdarahan.', 'Penyakit kronis atau kondisi bawaan tertentu.'],
    symptoms: ['Mudah lelah dan lemas.', 'Pusing atau sakit kepala.', 'Kulit tampak lebih pucat atau jantung berdebar.'],
    prevention: ['Konsumsi makanan bergizi dengan sumber zat besi dan vitamin yang cukup.', 'Kombinasikan sumber zat besi nabati dengan makanan kaya vitamin C.', 'Periksakan diri jika mengalami lelah berkepanjangan atau perdarahan yang tidak biasa.'],
    firstAid: ['Bantu orang yang pusing untuk duduk atau berbaring agar tidak jatuh.', 'Berikan waktu untuk beristirahat dan jangan memaksakan aktivitas berat.', 'Jangan langsung mengonsumsi suplemen zat besi tanpa mengetahui penyebab anemia atau mendapat saran tenaga kesehatan.'],
    doctor: 'Periksakan diri untuk memastikan penyebab anemia. Cari bantuan segera jika pingsan, sesak saat istirahat, nyeri dada, atau perdarahan banyak.',
    source: 'WHO — Anaemia; NHS — Iron deficiency anaemia'
  },
  {
    id: 6, slug: 'hipertensi', name: 'Hipertensi', category: 'Darah & Metabolisme', icon: HeartPulse, color: 'peach',
    summary: 'Tekanan darah yang terus-menerus berada di atas batas normal dan meningkatkan risiko penyakit jantung serta stroke.',
    definition: 'Hipertensi adalah tekanan darah tinggi yang ditetapkan melalui pengukuran yang tepat dan berulang. Kondisi ini sering tidak menimbulkan gejala sehingga pemeriksaan rutin penting.',
    causes: ['Faktor usia, keturunan, dan kondisi kesehatan tertentu.', 'Konsumsi garam berlebihan, kurang aktivitas fisik, atau merokok.', 'Berat badan berlebih dan konsumsi alkohol dapat meningkatkan risiko.'],
    symptoms: ['Sering kali tidak memiliki gejala khusus.', 'Tekanan darah diketahui melalui pengukuran.', 'Keluhan seperti sakit kepala tidak cukup untuk memastikan hipertensi.'],
    prevention: ['Batasi konsumsi garam dan pilih pola makan seimbang.', 'Lakukan aktivitas fisik secara teratur.', 'Hindari rokok, batasi alkohol, dan periksa tekanan darah secara berkala.'],
    firstAid: ['Jika hasil pengukuran tinggi, duduk tenang dan ulangi pengukuran sesuai prosedur setelah beristirahat.', 'Catat hasil pengukuran dan konsultasikan dengan tenaga kesehatan.', 'Jangan menggandakan atau menghentikan obat tekanan darah tanpa arahan dokter.'],
    doctor: 'Tekanan darah sangat tinggi, terutama bila disertai nyeri dada, sesak, kelemahan satu sisi tubuh, gangguan penglihatan, atau sakit kepala hebat mendadak, memerlukan pertolongan darurat.',
    source: 'WHO — Hypertension; Kementerian Kesehatan RI'
  },
  {
    id: 7, slug: 'eksim', name: 'Eksim', category: 'Kulit', icon: Flower2, color: 'mint',
    summary: 'Kondisi peradangan kulit yang dapat membuat kulit kering, gatal, dan kemerahan.',
    definition: 'Eksim (dermatitis) adalah istilah untuk beberapa kondisi peradangan kulit. Jenis yang umum, dermatitis atopik, dapat kambuh dan menyebabkan kulit terasa sangat gatal.',
    causes: ['Gangguan pelindung kulit dan faktor genetik.', 'Kulit kering serta paparan sabun atau bahan iritan.', 'Alergen, suhu, keringat, atau stres dapat menjadi pemicu pada sebagian orang.'],
    symptoms: ['Kulit kering dan gatal.', 'Ruam kemerahan atau perubahan warna kulit.', 'Kulit pecah-pecah, menebal, atau berair saat kambuh.'],
    prevention: ['Gunakan pelembap secara rutin.', 'Pilih pembersih lembut dan hindari pemicu yang diketahui.', 'Gunakan air suam-suam kuku dan hindari menggaruk kulit.'],
    firstAid: ['Kompres sejuk pada area yang gatal untuk membantu meredakan rasa tidak nyaman.', 'Oleskan pelembap tanpa pewangi.', 'Hindari menggaruk. Jangan mengoleskan obat keras atau bahan rumahan yang mengiritasi tanpa saran tenaga kesehatan.'],
    doctor: 'Periksakan diri jika ruam meluas, sangat nyeri, bernanah, terasa panas, disertai demam, atau tidak membaik dengan perawatan sederhana.',
    source: 'NHS — Atopic eczema; National Eczema Association'
  },
  {
    id: 8, slug: 'jerawat', name: 'Jerawat', category: 'Kulit', icon: Sparkles, color: 'lavender',
    summary: 'Masalah kulit yang terjadi ketika folikel rambut tersumbat minyak dan sel kulit mati.',
    definition: 'Jerawat adalah kondisi kulit yang umum terjadi ketika folikel rambut tersumbat oleh minyak (sebum) dan sel kulit mati. Jerawat dapat muncul sebagai komedo, papula, pustula, atau benjolan lebih dalam.',
    causes: ['Produksi sebum berlebih dan penumpukan sel kulit mati.', 'Perubahan hormon.', 'Peradangan dan aktivitas bakteri pada folikel kulit.'],
    symptoms: ['Komedo hitam atau putih.', 'Benjolan merah atau berisi nanah.', 'Pada kondisi tertentu dapat muncul benjolan dalam dan bekas luka.'],
    prevention: ['Bersihkan wajah dengan lembut, umumnya dua kali sehari.', 'Pilih produk berlabel non-komedogenik.', 'Hindari memencet jerawat dan bersihkan wajah setelah berkeringat.'],
    firstAid: ['Jangan memencet atau mengorek jerawat.', 'Bersihkan area dengan lembut dan gunakan produk yang sesuai jenis kulit.', 'Hentikan produk yang menyebabkan iritasi berat dan minta saran apoteker atau dokter kulit.'],
    doctor: 'Konsultasikan jika jerawat terasa nyeri, berbentuk benjolan dalam, meninggalkan bekas, atau tidak membaik. Penanganan dini dapat membantu mengurangi risiko jaringan parut.',
    source: 'NHS — Acne; American Academy of Dermatology'
  },
  {
    id: 9, slug: 'pneumonia', name: 'Pneumonia', category: 'Pernapasan', icon: Stethoscope, color: 'peach',
    summary: 'Infeksi yang menyebabkan peradangan pada kantung udara di salah satu atau kedua paru-paru.',
    definition: 'Pneumonia adalah infeksi paru-paru yang dapat membuat kantung udara terisi cairan atau nanah sehingga pernapasan menjadi lebih sulit. Penyebabnya dapat berupa bakteri, virus, atau jamur.',
    causes: ['Infeksi bakteri, virus, atau lebih jarang jamur.', 'Menghirup droplet pernapasan yang mengandung kuman.', 'Risiko lebih tinggi pada anak kecil, lansia, perokok, dan orang dengan kondisi kesehatan tertentu.'],
    symptoms: ['Batuk, terkadang disertai dahak.', 'Demam, menggigil, dan rasa lelah.', 'Napas cepat, sesak, atau nyeri dada saat bernapas atau batuk.'],
    prevention: ['Lengkapi vaksinasi yang dianjurkan tenaga kesehatan.', 'Cuci tangan, terapkan etika batuk, dan hindari kontak dekat saat sedang sakit.', 'Hindari rokok dan jaga kebersihan lingkungan.'],
    firstAid: ['Istirahat dan minum cukup jika masih mampu menelan dengan aman.', 'Pantau pernapasan dan suhu tubuh; gunakan masker untuk mengurangi penularan.', 'Jangan menggunakan antibiotik tanpa resep. Sesak atau kondisi memburuk memerlukan pemeriksaan segera.'],
    doctor: 'Segera cari bantuan darurat jika sesak berat, bibir membiru, kebingungan, sulit dibangunkan, atau nyeri dada berat. Periksakan batuk-demam yang memburuk, terutama pada kelompok berisiko.',
    source: 'WHO — Pneumonia; NHS — Pneumonia'
  },
  {
    id: 10, slug: 'bronkitis', name: 'Bronkitis', category: 'Pernapasan', icon: Wind, color: 'mint',
    summary: 'Peradangan pada saluran bronkus yang membawa udara menuju paru-paru dan sering menimbulkan batuk.',
    definition: 'Bronkitis adalah peradangan pada lapisan saluran bronkus. Bronkitis akut sering terjadi setelah infeksi virus dan umumnya membaik dalam beberapa minggu.',
    causes: ['Infeksi virus penyebab pilek atau flu.', 'Paparan asap rokok, polusi, dan iritan saluran napas.', 'Bronkitis kronis berkaitan erat dengan paparan iritan jangka panjang, terutama rokok.'],
    symptoms: ['Batuk yang dapat disertai lendir.', 'Rasa tidak nyaman di dada dan mudah lelah.', 'Kadang disertai sakit tenggorokan, pilek, atau demam ringan.'],
    prevention: ['Tidak merokok dan hindari asap rokok orang lain.', 'Cuci tangan dan terapkan etika batuk.', 'Kurangi paparan debu, asap, dan polusi dengan perlindungan yang sesuai.'],
    firstAid: ['Istirahat dan cukup minum.', 'Hindari rokok serta asap atau udara yang mengiritasi.', 'Jangan minum antibiotik tanpa pemeriksaan karena banyak kasus akut disebabkan virus.'],
    doctor: 'Periksakan diri jika batuk berlangsung lebih dari tiga minggu, berulang, disertai darah, demam tinggi, atau sesak. Sesak berat atau bibir membiru memerlukan bantuan darurat.',
    source: 'NHS — Bronchitis; CDC — Chest Cold (Acute Bronchitis)'
  },
  {
    id: 11, slug: 'diare', name: 'Diare', category: 'Pencernaan', icon: Waves, color: 'mint',
    summary: 'Buang air besar dengan tinja lebih cair atau lebih sering dari kebiasaan.',
    definition: 'Diare adalah kondisi buang air besar encer atau berair, biasanya lebih sering dari biasanya. Penyebab umum meliputi infeksi saluran cerna dan makanan atau minuman yang terkontaminasi.',
    causes: ['Infeksi virus, bakteri, atau parasit.', 'Makanan atau air yang terkontaminasi.', 'Efek samping obat atau intoleransi terhadap makanan tertentu.'],
    symptoms: ['Tinja encer dan frekuensi buang air besar meningkat.', 'Kram perut, mual, atau rasa ingin buang air besar.', 'Tanda dehidrasi seperti haus, mulut kering, dan urine berkurang.'],
    prevention: ['Cuci tangan dengan sabun sebelum makan dan setelah dari toilet.', 'Konsumsi air bersih serta makanan yang dimasak dan disimpan dengan baik.', 'Jaga kebersihan alat makan dan lingkungan.'],
    firstAid: ['Minum oralit sesuai petunjuk kemasan untuk mengganti cairan dan elektrolit.', 'Tetap makan dalam porsi kecil sesuai toleransi dan lanjutkan ASI pada bayi.', 'Hindari obat antidiare untuk anak atau bila ada darah/demam tinggi tanpa arahan tenaga kesehatan.'],
    doctor: 'Segera cari bantuan jika ada darah pada tinja, tanda dehidrasi berat, muntah sehingga tidak bisa minum, nyeri perut hebat, atau diare pada bayi kecil. Periksa jika diare menetap atau memburuk.',
    source: 'WHO — Diarrhoeal disease; NHS — Diarrhoea and vomiting'
  },
  {
    id: 12, slug: 'konstipasi', name: 'Konstipasi', category: 'Pencernaan', icon: Utensils, color: 'cream',
    summary: 'Kondisi sulit buang air besar atau frekuensi BAB lebih jarang dari biasanya.',
    definition: 'Konstipasi atau sembelit terjadi ketika buang air besar menjadi lebih jarang, tinja keras atau kering, dan proses mengeluarkannya terasa sulit.',
    causes: ['Kurang asupan serat dan cairan.', 'Kurang bergerak atau sering menahan keinginan BAB.', 'Perubahan rutinitas atau efek samping beberapa obat.'],
    symptoms: ['BAB lebih jarang dari biasanya.', 'Tinja keras, kering, atau berbentuk gumpalan.', 'Perut kembung dan perlu mengejan saat BAB.'],
    prevention: ['Tingkatkan serat secara bertahap melalui buah, sayur, dan biji-bijian.', 'Minum cukup air dan lakukan aktivitas fisik rutin.', 'Biasakan waktu ke toilet dan jangan menahan dorongan BAB.'],
    firstAid: ['Coba berjalan ringan dan pertahankan asupan cairan yang cukup.', 'Tambahkan makanan berserat secara bertahap.', 'Konsultasikan dengan apoteker atau dokter sebelum menggunakan obat pencahar, terutama untuk anak atau bila memiliki penyakit lain.'],
    doctor: 'Cari bantuan segera jika konstipasi disertai nyeri perut hebat, muntah, perut sangat membesar, atau tidak bisa buang angin. Periksakan bila menetap, berulang, atau disertai darah pada tinja maupun penurunan berat badan tanpa sebab.',
    source: 'NIDDK — Constipation; NHS — Constipation'
  },
  {
    id: 13, slug: 'diabetes-tipe-2', name: 'Diabetes Tipe 2', category: 'Darah & Metabolisme', icon: Apple, color: 'rose',
    summary: 'Kondisi ketika kadar gula darah terlalu tinggi karena tubuh tidak menggunakan insulin secara efektif.',
    definition: 'Diabetes tipe 2 adalah kondisi jangka panjang ketika tubuh tidak menggunakan insulin dengan baik atau tidak menghasilkan insulin yang cukup untuk menjaga kadar gula darah tetap normal.',
    causes: ['Kombinasi faktor keturunan dan lingkungan.', 'Berat badan berlebih serta kurang aktivitas fisik dapat meningkatkan risiko.', 'Usia dan riwayat keluarga juga berperan, tetapi siapa pun dapat mengalaminya.'],
    symptoms: ['Sering haus dan lebih sering buang air kecil.', 'Mudah lelah atau penglihatan kabur.', 'Luka lebih lambat sembuh atau infeksi berulang; sebagian orang tidak bergejala.'],
    prevention: ['Lakukan aktivitas fisik teratur sesuai kemampuan.', 'Pilih pola makan seimbang dan perhatikan porsi.', 'Jaga berat badan yang sehat serta lakukan pemeriksaan gula darah sesuai faktor risiko.'],
    firstAid: ['Jika sudah didiagnosis, ikuti rencana perawatan dan pemantauan dari tenaga kesehatan.', 'Jangan menghentikan atau mengubah obat diabetes sendiri.', 'Jika sangat lemas, muntah, napas cepat/dalam, atau kesadaran menurun, cari pertolongan darurat.'],
    doctor: 'Periksakan diri jika mengalami gejala seperti sering haus dan buang air kecil. Bantuan darurat diperlukan bila terjadi penurunan kesadaran, muntah terus-menerus, atau napas cepat dan dalam.',
    source: 'WHO — Diabetes; CDC — Type 2 Diabetes'
  },
  {
    id: 14, slug: 'kolesterol-tinggi', name: 'Kolesterol Tinggi', category: 'Darah & Metabolisme', icon: Gauge, color: 'peach',
    summary: 'Kadar kolesterol tertentu dalam darah yang terlalu tinggi dan dapat meningkatkan risiko penyakit jantung.',
    definition: 'Kolesterol adalah zat lemak yang dibutuhkan tubuh, tetapi kadar LDL yang tinggi dapat menumpuk di dinding pembuluh darah. Kondisi ini biasanya tidak menimbulkan gejala dan diketahui melalui tes darah.',
    causes: ['Pola makan tinggi lemak jenuh atau lemak trans.', 'Faktor keturunan dan kondisi medis tertentu.', 'Kurang aktivitas fisik, merokok, dan faktor gaya hidup lainnya.'],
    symptoms: ['Umumnya tidak menimbulkan gejala yang terasa.', 'Diketahui melalui pemeriksaan profil lipid darah.', 'Penumpukan plak dapat meningkatkan risiko serangan jantung dan stroke.'],
    prevention: ['Pilih makanan kaya serat dan batasi lemak jenuh/trans.', 'Lakukan aktivitas fisik rutin dan hindari rokok.', 'Periksa kadar kolesterol sesuai usia, riwayat keluarga, dan saran tenaga kesehatan.'],
    firstAid: ['Kolesterol tinggi bukan kondisi yang biasanya memerlukan pertolongan mendadak.', 'Buat janji pemeriksaan untuk menilai profil lipid dan risiko kardiovaskular.', 'Jika muncul nyeri dada mendadak, sesak, atau tanda stroke, hubungi layanan darurat.'],
    doctor: 'Diskusikan hasil tes kolesterol dengan tenaga kesehatan untuk menentukan langkah yang sesuai. Nyeri dada, wajah menurun sebelah, kelemahan satu sisi, atau gangguan bicara mendadak merupakan keadaan darurat.',
    source: 'WHO — Cardiovascular diseases; NHS — High cholesterol'
  },
  {
    id: 15, slug: 'psoriasis', name: 'Psoriasis', category: 'Kulit', icon: CircleDot, color: 'lavender',
    summary: 'Kondisi peradangan kulit jangka panjang yang menyebabkan bercak menebal dan bersisik.',
    definition: 'Psoriasis adalah kondisi peradangan yang berkaitan dengan sistem kekebalan tubuh dan mempercepat pergantian sel kulit. Kondisi ini tidak menular dan dapat mengalami periode kambuh.',
    causes: ['Respons sistem kekebalan yang memengaruhi pertumbuhan sel kulit.', 'Faktor genetik atau riwayat keluarga.', 'Infeksi, stres, cedera kulit, atau beberapa obat dapat memicu kekambuhan.'],
    symptoms: ['Bercak kulit menebal dengan sisik keputihan atau keperakan.', 'Kulit terasa gatal, kering, atau pecah-pecah.', 'Pada sebagian orang kuku berubah dan sendi terasa nyeri atau bengkak.'],
    prevention: ['Kenali pemicu pribadi dan usahakan menghindarinya.', 'Jaga kelembapan kulit dan hindari menggaruk atau melukai area.', 'Kelola stres dan ikuti rencana perawatan yang diberikan dokter.'],
    firstAid: ['Gunakan pelembap lembut untuk membantu mengurangi kulit kering.', 'Jangan mengelupas sisik secara paksa atau menggaruk area.', 'Gunakan obat oles hanya sesuai petunjuk tenaga kesehatan.'],
    doctor: 'Konsultasikan ruam yang menetap, meluas, atau mengganggu aktivitas. Cari bantuan segera jika kulit sangat merah dan mengelupas luas, disertai demam, atau sendi membengkak dan nyeri.',
    source: 'NHS — Psoriasis; National Psoriasis Foundation'
  },
  {
    id: 16, slug: 'urtikaria', name: 'Urtikaria (Biduran)', category: 'Kulit', icon: Sun, color: 'rose',
    summary: 'Reaksi kulit berupa bentol menonjol yang gatal dan dapat muncul lalu menghilang.',
    definition: 'Urtikaria atau biduran adalah reaksi kulit yang menimbulkan bentol menonjol dan rasa gatal. Pemicu dapat berupa infeksi, makanan, obat, gigitan serangga, suhu, atau tekanan pada kulit.',
    causes: ['Pelepasan histamin sebagai bagian dari reaksi kulit.', 'Pemicu tertentu seperti makanan, obat, infeksi, atau gigitan serangga.', 'Pada sebagian kasus, penyebabnya tidak dapat diketahui dengan jelas.'],
    symptoms: ['Bentol menonjol yang terasa gatal.', 'Ruam dapat berubah bentuk, berpindah, atau hilang timbul.', 'Kadang disertai pembengkakan pada bibir atau kelopak mata.'],
    prevention: ['Catat dan hindari pemicu yang sudah diketahui.', 'Diskusikan reaksi terhadap obat atau makanan dengan tenaga kesehatan.', 'Gunakan pakaian nyaman dan hindari suhu ekstrem bila menjadi pemicu.'],
    firstAid: ['Hentikan paparan pemicu yang dicurigai dan kompres sejuk area yang gatal.', 'Hindari menggaruk; tanyakan kepada apoteker atau dokter tentang obat antihistamin yang sesuai.', 'Jika lidah/tenggorokan membengkak, sulit bernapas, pusing berat, atau pingsan, gunakan auto-injektor adrenalin bila telah diresepkan dan hubungi layanan darurat segera.'],
    doctor: 'Segera cari bantuan darurat bila biduran disertai sesak, suara serak, pembengkakan lidah/tenggorokan, atau pingsan. Periksakan biduran yang sering kambuh, meluas, atau berlangsung lama.',
    source: 'NHS — Hives; Mayo Clinic — Hives and angioedema'
  }

]
