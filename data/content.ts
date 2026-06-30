export interface ProcessStep {
  title: string;
  desc: string;
}

export interface PriceItem {
  item: string;
  price: string;
  unit: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContentPageData {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  content: string;
  benefits: string[];
  detailedContent: string[];
  processSteps: ProcessStep[];
  pricingTable: PriceItem[];
  faq: FaqItem[];
}

export const siteData: {
  layanan: ContentPageData[];
  gaya: ContentPageData[];
  katalog: ContentPageData[];
} = {
  layanan: [
    {
      slug: "jasa-pembuatan-taman",
      title: "Jasa Pembuatan Taman Premium",
      subtitle: "Dari Konsep Hingga Realita, Ciptakan Ekosistem Hijau di Properti Anda.",
      image: "https://picsum.photos/seed/gardenmaker/1920/1080",
      content: "Pembuatan taman bukan sekadar menanam pohon, melainkan merancang ekosistem yang harmonis dengan arsitektur bangunan. Kami melakukan survei lokasi, pemetaan kontur tanah, analisis pencahayaan, hingga pemilihan vegetasi yang tepat. Proses desain menggunakan pendekatan estetika dan fungsi, memastikan taman tidak hanya indah dipandang tapi juga mudah dirawat.",
      benefits: [
        "Peningkatan Nilai Properti: Taman yang tertata rapi dapat meningkatkan harga jual properti hingga 15%.",
        "Kesejukan Alami: Vegetasi yang tepat membantu menurunkan suhu sekitar bangunan.",
        "Desain Kustom: Setiap taman dirancang khusus sesuai karakter dan kebutuhan rutinitas Anda.",
        "Sistem Drainase Terselubung: Memastikan tidak ada genangan air saat musim hujan."
      ],
      detailedContent: [
        "TukangTamannn.com membawa pengalaman lebih dari satu dekade dalam merancang taman lanskap premium untuk hunian pribadi, perkantoran, dan fasilitas komersial. Kami memahami bahwa setiap jengkal tanah memiliki potensi unik yang menunggu untuk dihidupkan.",
        "Tim arsitek lanskap kami berkolaborasi langsung dengan para botanis berpengalaman untuk mengkurasi jenis tanaman yang paling sesuai dengan kondisi mikroklimat lahan Anda. Dengan begitu, Anda mendapatkan jaminan bahwa taman yang dibangun akan tetap lestari, sehat, dan tumbuh optimal dalam jangka panjang tanpa memerlukan pemeliharaan yang menyiksa waktu Anda."
      ],
      processSteps: [
        { title: "Survei Lokasi & Konsultasi", desc: "Tim ahli kami mengunjungi lahan Anda untuk mengukur dimensi, menganalisis jenis tanah, paparan sinar matahari, serta berdiskusi mengenai konsep impian Anda." },
        { title: "Pembuatan Desain 3D", desc: "Kami memvisualisasikan ide taman dalam bentuk sketsa 3D fotorealistik yang mendetail, sehingga Anda dapat melihat hasil akhirnya sebelum konstruksi dimulai." },
        { title: "Pemilihan Material & Tanaman", desc: "Anda diajak memilih vegetasi (pohon pelindung, semak hias, jenis rumput) dan material hardscape terbaik dari nursery mandiri kami." },
        { title: "Eksekusi Profesional & Garansi", desc: "Pekerja profesional kami melakukan penataan lahan, instalasi drainase, penanaman, hingga masa pemantauan garansi tumbuh selama 30 hari." }
      ],
      pricingTable: [
        { item: "Pembuatan Taman Minimalis Standar (inc. rumput & tanaman hias)", price: "Rp 350.000 - Rp 500.000", unit: "m²" },
        { item: "Taman Premium / Klasik Tropis (inc. pohon pelindung sedang)", price: "Rp 600.000 - Rp 950.000", unit: "m²" },
        { item: "Lanskap Eksklusif (inc. pohon pule/kamboja fosil & batu impor)", price: "Hubungi Customer Service", unit: "Proyek" }
      ],
      faq: [
        { q: "Berapa lama proses pembuatan taman biasanya berlangsung?", a: "Untuk luas lahan di bawah 50 m², proses pengerjaan berkisar antara 3 hingga 7 hari kerja sejak desain disetujui." },
        { q: "Apakah ada garansi jika ada tanaman yang mati setelah ditanam?", a: "Ya! Kami memberikan garansi penggantian tanaman mati secara gratis selama 30 hari pertama setelah serah terima proyek." },
        { q: "Apakah TukangTamannn.com menerima jasa pembuatan taman di luar kota?", a: "Kami melayani seluruh kota di Jawa Timur (Surabaya, Sidoarjo, Malang, Gresik, Pasuruan, dll.) dan Bali (Denpasar, Badung, Gianyar, Ubud, dll.) secara intensif, namun kami juga siap melayani proyek premium di wilayah lainnya." }
      ]
    },
    {
      slug: "pembuatan-kolam-ikan-water-feature",
      title: "Pembuatan Kolam Ikan & Water Feature",
      subtitle: "Elemen Air Penenang Jiwa untuk Lanskap Elegan.",
      image: "https://picsum.photos/seed/koipond/1920/1080",
      content: "Kehadiran air dalam taman membawa ketenangan melalui suara gemericik visual yang dinamis. Kami spesialis dalam merancang kolam koi standar kontes, air terjun relief tebing buatan, hingga water feature minimalis untuk ruang terbatas. Sistem filtrasi yang kami gunakan memastikan air tetap jernih, ekosistem sehat, dan perawatan minimal.",
      benefits: [
        "Sirkulasi Air Optimal: Filter multi-chamber untuk kejernihan air konstan.",
        "Estetika Natural: Menggunakan batu alam pilihan untuk kesan alami.",
        "Kesehatan Ikan Terjamin: Perhitungan kedalaman dan aerasi yang tepat.",
        "Efisiensi Energi: Menggunakan pompa hemat energi berkualitas tinggi."
      ],
      detailedContent: [
        "Kolam koi yang sukses tidak hanya ditentukan dari luarnya saja, melainkan dari jantung sistem filtrasinya. Di TukangTamannn.com, kami merancang kolam air dengan perhitungan hidrodinamika yang matang untuk mencegah pengendapan kotoran di dasar kolam.",
        "Kami membagi filter kolam ke dalam 4 chamber khusus: mekanik (penyaring kotoran kasar), biologis (sarang bakteri pengurai amonia), kimiawi (penghilang bau dan zat racun), serta chamber pompa steril. Struktur dinding kolam dilapisi dengan teknik waterproofing ganda guna menjamin kekuatan bebas bocor jangka panjang."
      ],
      processSteps: [
        { title: "Desain Sistem & Kedalaman", desc: "Menentukan layout kolam, kedalaman ideal (minimal 80cm untuk koi), letak bottom drain, skimmer permukaan, dan jalur pipa filter." },
        { title: "Penggalian & Pembesian", desc: "Proses penggalian tanah disusul dengan pemasangan besi anyam dua lapis untuk menahan tekanan air dan pergerakan tanah." },
        { title: "Pengecoran & Waterproofing", desc: "Pengecoran beton mutu tinggi dikombinasikan dengan pelapisan semen waterproofing fleksibel berkualitas khusus kolam." },
        { title: "Instalasi Media Filter & Batu", desc: "Penataan batu hias tebing atau batu andesit minimalis dan pengisian chamber filter dengan bioball, batu apung, dan lampu UV." }
      ],
      pricingTable: [
        { item: "Kolam Ikan Minimalis Dinding Batu Andesit (inc. Pompa & Filter)", price: "Rp 1.800.000 - Rp 2.500.000", unit: "m² permukaan" },
        { item: "Kolam Relief Tebing Cadas Alami (inc. Air Terjun Buatan)", price: "Rp 2.000.000 - Rp 3.000.000", unit: "m² permukaan" },
        { item: "Sistem Filtrasi Kustom Multi-Chamber (Media Filter Lengkap)", price: "Mulai Rp 3.500.000", unit: "Paket" }
      ],
      faq: [
        { q: "Mengapa air kolam koi saya cepat sekali hijau dan keruh?", a: "Hal ini umumnya terjadi karena kapasitas filter terlalu kecil, tidak adanya lampu UV pembunuh alga, atau chamber biologis yang belum matang. Kami merancang filter dengan ukuran minimal 30% dari total volume kolam untuk menjamin air tetap jernih." },
        { q: "Apakah kolam yang dibuat bergaransi bocor?", a: "Ya, kami memberikan garansi konstruksi terhadap kebocoran kolam selama 3 bulan penuh." },
        { q: "Berapa kedalaman yang disarankan untuk memelihara ikan Koi?", a: "Kedalaman ideal untuk koi agar tumbuh sehat dan berbadan tegap adalah antara 100 cm hingga 150 cm agar suhu air tetap stabil." }
      ]
    },
    {
      slug: "pembuatan-gazebo-saung",
      title: "Pembuatan Gazebo & Saung",
      subtitle: "Ruang Bersantai Outdoor yang Teduh dan Berkarakter.",
      image: "https://picsum.photos/seed/gazebo/1920/1080",
      content: "Gazebo atau saung adalah focal point fungsional dalam sebuah taman, memberikan area berlindung untuk menikmati udara terbuka. Kami membangun struktur ini menggunakan material berkualitas seperti Kayu Jati, Kayu Kelapa (Glugu), hingga Bambu berseni tinggi. Desain bervariasi mulai dari atap sirap minimalis hingga joglo tradisional.",
      benefits: [
        "Material Tahan Cuaca: Kayu yang telah melalui proses anti-rayap dan finishing outdoor.",
        "Kekuatan Struktur: Konstruksi kokoh yang aman dari terpaan angin kencang.",
        "Focal Point Estetik: Menambah dimensi vertikal yang menarik di taman Anda.",
        "Kustomisasi Ukuran: Disesuaikan proporsional dengan luas pekarangan."
      ],
      detailedContent: [
        "Gazebo buatan TukangTamannn.com dirancang untuk menjadi pusat kehangatan keluarga di luar ruangan. Kami hanya menggunakan material kayu pilihan yang dikeringkan secara sempurna untuk mencegah pemuaian atau retak di bawah sinar matahari tropis yang ekstrem.",
        "Dengan teknik sambungan kayu tradisional purba serta kombinasi sekrup modern, struktur gazebo kami teruji kokoh menghadapi cuaca ekstrem. Anda juga dapat memilih opsi material atap mulai dari kayu sirap ulin Kalimantan yang legendaris, genteng tanah liat tradisional yang sejuk, hingga rumbia eksotis untuk atmosfer resor pantai."
      ],
      processSteps: [
        { title: "Pemilihan Konsep & Ukuran", desc: "Menganalisis porsi taman Anda untuk menentukan ukuran gazebo ideal (misal 2x2 meter atau 3x3 meter) dan konsep desainnya." },
        { title: "Fabrikasi Komponen", desc: "Kayu dipotong, diserut, dipahat, dibor, dan diberi pelapis anti-rayap di workshop pusat kami oleh pengrajin ahli." },
        { title: "Pondasi Tapak Beton", desc: "Pembuatan pondasi cor beton di lokasi untuk menopang tiang-tiang utama gazebo agar tidak bersentuhan langsung dengan tanah basah." },
        { title: "Perakitan Knock-Down & Finishing", desc: "Komponen dirakit di lokasi Anda dengan cepat dan rapi, dilanjutkan dengan pemberian lapisan akhir politur pelindung cuaca." }
      ],
      pricingTable: [
        { item: "Gazebo Kayu Kelapa (Glugu) Atap Sirap Kayu Ulin / Genteng", price: "Rp 2.500.000 - Rp 3.200.000", unit: "m² lantai" },
        { item: "Gazebo Kayu Jati Jawa Premium (inc. Ukiran Halus Klasik)", price: "Rp 4.500.000 - Rp 6.000.000", unit: "m² lantai" },
        { item: "Saung Bambu Tradisional Eksotis Atap Rumbia / Ijuk", price: "Rp 1.500.000 - Rp 2.000.000", unit: "m² lantai" }
      ],
      faq: [
        { q: "Berapa lama daya tahan gazebo kayu kelapa terhadap serangan rayap?", a: "Kami mengaplikasikan obat anti-rayap khusus ke seluruh pori-pori kayu sebelum perakitan. Dengan perawatan coating ulang setiap 2 tahun sekali, gazebo kayu kelapa dapat bertahan lebih dari 15 tahun." },
        { q: "Berapa ukuran gazebo yang ideal untuk halaman rumah standar?", a: "Ukuran paling favorit untuk hunian minimalis adalah 2 x 2 meter. Ukuran ini cukup menampung 4-5 orang dewasa tanpa membuat taman terasa sempit." },
        { q: "Apakah pengerjaannya mengotori taman yang sudah ada?", a: "Komponen utama kami fabrikasi di workshop kami. Di lokasi konsumen hanyalah proses perakitan (knock-down) sehingga meminimalkan kotoran dan kerusakan tanaman." }
      ]
    },
    {
      slug: "pemasangan-batu-alam-lantai-carport",
      title: "Pemasangan Batu Alam & Lantai Carport",
      subtitle: "Hardscape Kokoh untuk Area Transisi yang Mewah.",
      image: "https://picsum.photos/seed/hardscape/1920/1080",
      content: "Hardscape adalah tulang punggung sebuah lanskap. Kami melayani pemasangan batu alam untuk dinding fasad, jalur setapak (stepping stones), lantai carport (batu sikat/ampyangan), hingga area teras. Pemilihan pola dan tekstur batu sangat penting untuk menciptakan kontras yang indah dengan hijaunya tanaman.",
      benefits: [
        "Anti-slip: Permukaan bertekstur aman untuk area outdoor dan basah.",
        "Daya Tahan Tinggi: Material batu alam awet dan tahan puluhan tahun.",
        "Pola Artistik: Desain susun bata, mozaik, atau acak yang dikerjakan tenaga ahli.",
        "Perawatan Mudah: Cukup dengan pelapisan coating secara berkala."
      ],
      detailedContent: [
        "Lantai carport adalah area yang harus memadukan kekuatan struktural ekstrem untuk menahan bobot kendaraan dengan nilai estetika tinggi sebagai wajah depan rumah Anda. Kami menghadirkan lantai carport batu sikat (ampyangan) dengan pengerjaan presisi.",
        "Kami memastikan dasar lantai dicor semen kokoh dengan tulangan besi sengkret (wiremesh) guna mencegah keretakan atau amblas di kemudian hari. Batu-batu koral kecil import disortir secara manual berdasarkan ukuran dan warna untuk membentuk pola ornamen geometris, logo, atau motif klasik yang sangat artistik."
      ],
      processSteps: [
        { title: "Survei Beban & Desain Pola", desc: "Menganalisis estimasi berat kendaraan Anda untuk mengonfigurasi tebal cor semen dan mendesain pola motif batu sikat." },
        { title: "Pengecoran & Pemasangan Wiremesh", desc: "Pembuatan lantai kerja beton tebal dilengkapi dengan kawat baja wiremesh untuk kekuatan struktural anti amblas." },
        { title: "Penataan Batu Manual", desc: "Tenaga ahli kami menata batu koral kecil satu per satu ke dalam adukan semen setengah basah membentuk pola desain pilihan Anda." },
        { title: "Penyikatan, Pengeringan & Coating", desc: "Permukaan disikat khusus untuk memunculkan tekstur batu, dikeringkan, lalu dilapisi cairan coating gloss/doff pelindung lumut." }
      ],
      pricingTable: [
        { item: "Lantai Carport Batu Sikat Motif Geometris / Ampyangan (inc. Cor Beton)", price: "Rp 380.000 - Rp 500.000", unit: "m²" },
        { item: "Pemasangan Fasad Dinding Batu Alam Andesit / Palimanan / Candi", price: "Rp 320.000 - Rp 450.000", unit: "m²" },
        { item: "Pemasangan Stepping Stones / Pijakan Kaki Setapak Alami", price: "Rp 150.000 - Rp 250.000", unit: "Pcs (terpasang)" }
      ],
      faq: [
        { q: "Apakah lantai carport batu sikat mudah terkelupas jika sering dilewati mobil?", a: "Sama sekali tidak. Dengan campuran semen khusus berkadar tinggi serta proses penekanan batu yang presisi, batu koral akan mengunci sempurna dalam semen dan tidak lepas meski dilindas kendaraan berat." },
        { q: "Bagaimana cara merawat batu alam agar tidak kusam dan berlumut?", a: "Perawatan cukup mudah. Kami menyarankan untuk melakukan pengecatan ulang dengan cairan coating khusus batu alam (stone sealer) setiap 1,5 hingga 2 tahun sekali." },
        { q: "Apakah motif batu sikat bisa dibuat custom sesuai desain sendiri?", a: "Sangat bisa! Anda dapat memberikan gambar motif, inisial nama keluarga, atau logo tertentu, dan pengrajin kami akan merealisasikannya secara manual di lantai carport Anda." }
      ]
    },
    {
      slug: "perawatan-renovasi-taman",
      title: "Perawatan & Renovasi Taman",
      subtitle: "Revitalisasi dan Pemeliharaan Ekosistem Lanskap.",
      image: "https://picsum.photos/seed/maintenance/1920/1080",
      content: "Taman yang indah membutuhkan perawatan konsisten. Layanan maintenance kami mencakup pemangkasan terstruktur, pemupukan organik dan kimiawi sesuai kebutuhan, pengendalian hama terpadu, hingga perbaikan sistem irigasi. Kami juga melayani renovasi taman lama yang sudah rimbun tak terkendali menjadi segar kembali.",
      benefits: [
        "Jadwal Rutin Fleksibel: Kunjungan mingguan atau bulanan sesuai kesepakatan.",
        "Penanganan Ahli: Dikerjakan oleh tenaga yang paham karakter setiap tanaman.",
        "Pemupukan Tepat Sasaran: Memaksimalkan fase pertumbuhan dan pembungaan.",
        "Restorasi Taman Mati: Penyelamatan tanaman dan penggantian elemen yang rusak."
      ],
      detailedContent: [
        "Sebuah taman yang tidak terawat dapat berubah dari oase menenangkan menjadi semak belukar yang tidak teratur dalam hitungan bulan. TukangTamannn.com menyediakan solusi perawatan taman terjadwal untuk menjaga keasrian properti Anda tanpa Anda harus mengotori tangan.",
        "Bagi Anda yang baru saja menempati rumah tua atau memiliki taman yang terbengkalai, tim renovasi kami siap mendesain ulang layout taman Anda. Kami memilah tanaman mana yang masih layak dipertahankan (seperti pohon pelindung utama), meremajakan tanah yang sudah keras/tandus, serta mengganti rumput yang mati dengan varietas baru yang segar."
      ],
      processSteps: [
        { title: "Evaluasi Kesehatan Lahan", desc: "Pemeriksaan tingkat kepadatan tanah, cek keberadaan hama tanaman, serta evaluasi sistem drainase taman." },
        { title: "Pruning & Pemangkasan Estetik", desc: "Merampingkan dahan pohon pelindung, membentuk semak hias (topiary), dan merapikan tepi rumput secara presisi." },
        { title: "Aerasi & Pemupukan Ulang", desc: "Menggemburkan tanah keras di sekitar akar agar oksigen masuk, lalu memberi pupuk kompos organik serta hormon perangsang daun." },
        { title: "Sistem Penyiraman & Pestisida", desc: "Memastikan jalur irigasi lancar serta menyemprotkan fungisida/pestisida organik dosis aman untuk menangkal hama perusak daun." }
      ],
      pricingTable: [
        { item: "Jasa Perawatan Taman Rutin (Kunjungan 2x Sebulan - Luas <50m²)", price: "Rp 750.000 - Rp 1.200.000", unit: "Bulan" },
        { item: "Jasa Perawatan Taman Rutin (Kunjungan 4x Sebulan - Luas 50-150m²)", price: "Rp 1.500.000 - Rp 2.500.000", unit: "Bulan" },
        { item: "Renovasi Taman Total (Pembersihan, Gembur Tanah, Tanam Baru)", price: "Mulai Rp 200.000", unit: "m²" }
      ],
      faq: [
        { q: "Apa saja yang sudah termasuk dalam paket perawatan taman bulanan?", a: "Paket sudah mencakup pemangkasan rumput & tanaman hias, pembersihan gulma, penggemburan tanah berkala, pemberian pupuk, serta penyemprotan obat hama (pestisida). Biaya sudah termasuk obat dan pupuk standar." },
        { q: "Apakah saya harus menyediakan peralatan berkebun?", a: "Tidak perlu. Pekerja kami akan membawa seluruh peralatan kerja lengkap, mulai dari mesin pemotong rumput, gunting dahan tinggi, hingga selang dan sprayer obat." },
        { q: "Bisakah kontrak perawatan dibatalkan sewaktu-waktu?", a: "Sangat bisa. Kami menawarkan kontrak yang fleksibel tanpa denda pembatalan. Anda bisa memilih layanan bulanan sekali jalan atau kontrak tahunan dengan harga khusus." }
      ]
    }
  ],
  gaya: [
    {
      slug: "taman-minimalis-modern",
      title: "Taman Minimalis Modern",
      subtitle: "Komposisi Bersih, Geometris, dan Elegan untuk Hunian Masa Kini.",
      image: "https://picsum.photos/seed/minimalist/1920/1080",
      content: "Gaya taman minimalis modern berfokus pada pendekatan 'less is more'. Penggunaan tanaman dengan bentuk daun struktural, palet warna terbatas (didominasi hijau dan putih/abu), serta integrasi hardscape yang tegas. Cocok untuk arsitektur rumah modern kontemporer yang menginginkan tampilan rapi, luas, dan minim perawatan rumit.",
      benefits: [
        "Minim Perawatan: Pilihan tanaman keras yang tidak membutuhkan pemangkasan intens.",
        "Kesan Rapi dan Bersih: Garis-garis tegas yang memperkuat arsitektur bangunan.",
        "Optimalisasi Lahan: Sangat ideal diterapkan di sisa lahan perumahan modern.",
        "Elemen Monokromatik: Kontras indah antara batu koral putih dan daun hijau gelap."
      ],
      detailedContent: [
        "Gaya minimalis modern sangat populer karena keselarasan visualnya dengan tren arsitektur rumah masa kini yang berkarakter geometris bersih. Alih-alih rimbun berantakan, taman minimalis menekankan pada penempatan tanaman sebagai aksen seni tunggal yang dramatis.",
        "Kunci kesuksesan gaya ini adalah ruang bernapas (negative space) yang cukup. Kami memadukan hamparan rumput gajah mini yang dipangkas pendek dengan area batu split kelabu atau batu koral salju import, lalu menambahkan pohon berkarakter ramping seperti Sik Lok (Agave) atau sebatang pohon tabebuya berdaun halus sebagai pusat perhatian utama."
      ],
      processSteps: [
        { title: "Zoning Geometris", desc: "Membagi lahan menjadi blok-blok persegi atau garis sejajar yang tegas antara area tanaman, batu tebar, dan jalan setapak." },
        { title: "Pemilihan Elemen Simpel", desc: "Mengurangi variasi spesies tanaman. Biasanya hanya menggunakan 3 hingga 4 jenis tanaman dengan struktur tegas agar visual tetap fokus." },
        { title: "Penataan Hardscape Bersih", desc: "Pemasangan pot terrazzo silinder putih atau bak tanaman (raised bed) dari beton ekspos acian halus semen." },
        { title: "Instalasi Pencahayaan Sorot", desc: "Pemasangan spotlight LED warm-white tersembunyi yang menyorot pohon ikonik dari bawah ke atas pada malam hari." }
      ],
      pricingTable: [
        { item: "Pembuatan Taman Minimalis Lengkap (inc. Rumput, Bromelia, Koral)", price: "Rp 350.000 - Rp 450.000", unit: "m²" },
        { item: "Bak Tanaman Beton Ekspos (Raised Bed Semen Acian)", price: "Rp 600.000 - Rp 850.000", unit: "m lari" },
        { item: "Tanaman Pendukung Premium (Agave, Pandan Bali, Sansieria)", price: "Mulai Rp 150.000", unit: "Pohon" }
      ],
      faq: [
        { q: "Tanaman apa yang paling direkomendasikan untuk taman minimalis modern?", a: "Tanaman dengan bentuk fisik kuat dan tegas sangat disarankan, seperti Pandan Bali (Dracaena), Agave (Sik Lok), Bromelia, Sansevieria (Lidah Mertua), dan kamboja fosil berbatang artistik." },
        { q: "Apakah taman gaya minimalis ini benar-benar minim perawatan?", a: "Ya. Jenis tanaman yang dipilih memiliki pertumbuhan lambat dan kebutuhan air sedang, sehingga Anda tidak perlu sering-sering memangkas atau menyiramnya setiap hari." },
        { q: "Apakah cocok diterapkan di dalam rumah (indoor)?", a: "Sangat cocok. Dengan penggunaan batu koral putih dan tanaman tangguh seperti Sansevieria, Anda bisa memiliki oase minimalis di bawah tangga atau area void dalam rumah." }
      ]
    },
    {
      slug: "vertical-garden",
      title: "Vertical Garden (Taman Vertikal)",
      subtitle: "Solusi Hijau Menjulang untuk Keterbatasan Lahan Lurus.",
      image: "https://picsum.photos/seed/verticalgarden/1920/1080",
      content: "Keterbatasan lahan horizontal tak lagi jadi halangan. Taman vertikal mengubah dinding kosong menjadi kanvas hijau yang hidup. Kami menggunakan sistem modul khusus dengan irigasi tetes (drip irrigation) otomatis yang memastikan setiap tanaman mendapatkan nutrisi. Cocok untuk fasad rumah, area kolam renang, atau dinding partisi kantor.",
      benefits: [
        "Penghematan Ruang: Membawa porsi hijau besar pada lahan sempit.",
        "Insulator Panas Alami: Menurunkan suhu ruangan di balik dinding tersebut.",
        "Estetika Fasad Unik: Menjadikan bangunan Anda stand out di lingkungan sekitar.",
        "Penyiraman Otomatis: Sirkulasi air terprogram dan minim buangan."
      ],
      detailedContent: [
        "Taman vertikal (vertical garden) mewakili puncak teknologi lanskap modern. Di TukangTamannn.com, kami tidak menanam di tanah vertikal yang berantakan, melainkan menggunakan sistem media tanam karpet Geotextile Felt ganda impor yang dirancang anti lapuk hingga puluhan tahun.",
        "Sistem ini ditopang oleh rangka besi hollow galvanis antikarat yang dipasang berjarak dari dinding utama Anda, sehingga kelembapan tanaman sama sekali tidak akan merusak atau merembes ke tembok rumah Anda. Air bernutrisi dialirkan secara otomatis menggunakan timer digital, menjamin kesegaran tanaman tanpa perlu penyiraman manual."
      ],
      processSteps: [
        { title: "Pemasangan Rangka Hollow", desc: "Memasang rangka besi hollow galvanis berjarak 5 cm dari dinding untuk menciptakan sirkulasi udara dan melindungi tembok dari kelembapan." },
        { title: "Pemasangan Polycarbonate & Felt", desc: "Menempelkan lembaran polycarbonate sebagai penahan air, dilanjutkan dengan lembaran karpet Geotextile Felt yang disayat membentuk kantong tanaman." },
        { title: "Instalasi Irigasi Tetes Otomatis", desc: "Memasang selang mikro drip di setiap baris kantong, dihubungkan ke pompa nutrisi otomatis dan pengatur waktu digital." },
        { title: "Penyusunan Komposisi Tanaman", desc: "Menanam bibit pilihan (seperti Brekele, Kadaka, Neoregelia) sesuai pola warna gradasi artistik yang telah direncanakan arsitek." }
      ],
      pricingTable: [
        { item: "Vertical Garden Sintetis Premium (Bebas Perawatan, Indah Selamanya)", price: "Rp 600.000 - Rp 850.000", unit: "m²" },
        { item: "Vertical Garden Tanaman Hidup (inc. Rangka, Felt, Irigasi & Timer)", price: "Rp 1.400.000 - Rp 1.900.000", unit: "m²" },
        { item: "Paket Pupuk Cair Nutrisi Otomatis & Perawatan Rutin Tahunan", price: "Hubungi Admin", unit: "Paket" }
      ],
      faq: [
        { q: "Apakah kelembapan dari vertical garden akan merusak tembok rumah saya?", a: "Sama sekali tidak. Kami memasang lembaran polycarbonate anti air di belakang media karpet felt dan memberi rongga udara udara 5cm, sehingga air tidak menyentuh tembok utama sama sekali." },
        { q: "Jenis tanaman apa yang digunakan pada taman vertikal?", a: "Kami menggunakan jenis tanaman semi-indoor atau tahan panas yang memiliki perakaran dangkal dan tumbuh menyamping, seperti Neoregelia (Bromelia), Cryptanthus, Sirih Gading (Philodendron), Kadaka, dan lili paris." },
        { q: "Bagaimana jika terjadi mati listrik? Apakah tanaman langsung layu?", a: "Tanaman pada karpet geotextile dapat bertahan tanpa penyiraman hingga 2-3 hari karena serat kain felt menyimpan kelembapan dengan baik. Kami juga merancang sistem yang mudah dialihkan ke penyiraman manual darurat." }
      ]
    },
    {
      slug: "taman-kering-zen",
      title: "Taman Kering / Zen Garden",
      subtitle: "Harmoni Ketenangan Tanpa Elemen Rumput yang Merepotkan.",
      image: "https://picsum.photos/seed/zengarden/1920/1080",
      content: "Terinspirasi dari filosofi Jepang, Zen Garden mengutamakan ketenangan batin. Taman kering ini meminimalkan penggunaan rumput dan menggantinya dengan hamparan pasir atau batu koral. Ornamen batu besar, fitur air mangkuk (tsukubai), dan tanaman berkarakter seperti bonsai atau pule adalah daya tarik utamanya.",
      benefits: [
        "Tanpa Beban Memotong Rumput: Sangat ideal bagi jadwal yang sibuk.",
        "Atmosfer Meditatif: Desain yang menghadirkan rasa tenang dan rileks.",
        "Tahan Musim Kemarau: Konsumsi air yang sangat minim karena sedikit vegetasi.",
        "Cocok untuk Area Teras Dalam (Inner Court): Dapat diaplikasikan di ruangan semi-indoor."
      ],
      detailedContent: [
        "Zen Garden (Karesansui) adalah sebuah seni lanskap spiritual yang berasal dari kuil-kuil meditasi di Kyoto, Jepang. Desain ini menggunakan elemen alam yang disederhanakan secara simbolis: hamparan pasir halus atau batu koral putih disapu membentuk riak gelombang laut, sementara formasi batu kali besar melambangkan pulau atau pegunungan kokoh.",
        "Dalam adaptasi modern di Indonesia, gaya ini sangat digemari karena kepraktisannya. Tanpa kehadiran rumput, Anda terbebas dari siklus pemotongan gulma yang melelahkan. Kami memadukan hamparan batu koral sikat salju premium dengan focal point tanaman bernilai seni tinggi seperti pohon Pule eksklusif, Bonsai Dolar, atau pohon Kamboja Fosil yang anggun."
      ],
      processSteps: [
        { title: "Perataan Tanah & Drainase", desc: "Mempersiapkan kemiringan tanah yang tepat dan memasang pipa serapan air agar air hujan langsung meresap ke dalam tanah tanpa menggenangi batu." },
        { title: "Pemasangan Weed Barrier Felt", desc: "Melapisi permukaan tanah dengan kain woven geotekstil khusus untuk mencegah pertumbuhan rumput liar dari bawah tanah menembus batu koral." },
        { title: "Penempatan Formasi Batu Utama", desc: "Mendatangkan dan menata batu kali berukuran besar secara asimetris artistik sesuai filosofi keseimbangan Zen." },
        { title: "Penebaran Koral & Penanaman Bonsai", desc: "Menebarkan batu koral import secara merata dan menanam pohon berkarakter tinggi di sudut strategis lengkap dengan lampu hias." }
      ],
      pricingTable: [
        { item: "Pembuatan Taman Kering Standar (inc. Batu Koral Import, Stepping Stone)", price: "Rp 400.000 - Rp 550.000", unit: "m²" },
        { item: "Taman Kering Zen Premium (inc. Pohon Pule Eksklusif Tinggi 2m)", price: "Mulai Rp 12.000.000", unit: "Paket Lengkap" },
        { item: "Lentera Batu Jepang Klasik (Toro Stone Lantern)", price: "Rp 1.200.000 - Rp 2.500.000", unit: "Unit" }
      ],
      faq: [
        { q: "Apakah rumput liar tidak akan tumbuh di sela-sela batu koral?", a: "Kami melapisi seluruh permukaan tanah dengan Weed Barrier Membrane (kain geotekstil non-woven) sebelum menaburkan batu koral. Lapisan ini memblokir sinar matahari ke tanah sehingga biji rumput liar tidak dapat tumbuh ke atas." },
        { q: "Bagaimana cara membersihkan daun kering yang gugur di atas batu koral?", a: "Sangat mudah. Anda bisa menggunakan alat mesin peniup daun (leaf blower) atau menyapunya secara perlahan menggunakan sapu lidi lembut khusus taman kering." },
        { q: "Apakah taman kering aman dipasang di area carport atau teras terbuka?", a: "Sangat aman dan bahkan direkomendasikan karena bebatuan koral membantu menyerap benturan air hujan sehingga tanah tidak terciprat ke dinding teras Anda." }
      ]
    },
    {
      slug: "roof-garden",
      title: "Taman Atap (Roof Garden)",
      subtitle: "Menghijaukan Ketinggian, Mengoptimalkan Fungsi Dak Beton.",
      image: "https://picsum.photos/seed/rooftop/1920/1080",
      content: "Mengubah dak beton atau atap ruko menjadi oase hijau adalah salah satu keahlian kami. Roof garden membutuhkan perhitungan beban mati (dead load), sistem waterproofing yang sempurna (agar tidak bocor), dan lapisan drainase cell. Hasilnya adalah ruang santai tambahan yang privat dan sejuk di tengah padatnya perkotaan.",
      benefits: [
        "Ekstra Ruang Terbuka: Memanfaatkan area yang biasanya diabaikan.",
        "Reduksi Panas Ekstrem: Mendinginkan lantai tepat di bawah atap beton.",
        "Privasi Maksimal: Area bersantai keluarga yang jauh dari pandangan luar.",
        "Pemandangan Kota: Menikmati lanskap urban dengan sentuhan alam."
      ],
      detailedContent: [
        "Membangun taman di atas atap dak beton (roof garden) memerlukan keahlian rekayasa sipil dan lanskap tingkat tinggi. Di TukangTamannn.com, kami memprioritaskan keselamatan struktural bangunan Anda di atas segalanya.",
        "Kami menganalisis kekuatan beban beton, lalu memasang 5 lapisan perlindungan mutlak: waterproofing membrane bakar tahan akar, proteksi screed beton, lapisan penampung dan penyalur air (drainage cell), penyaring partikel tanah (filter geotextile), baru kemudian media tanam super ringan yang diformulasikan khusus dari campuran sekam bakar, cocopeat, dan perlite."
      ],
      processSteps: [
        { title: "Tes Kebocoran & Waterproofing", desc: "Dak beton dibersihkan dan dilapisi waterproofing membrane bakar khusus. Kami menggenangi area selama 3x24 jam untuk memastikan 100% bebas bocor." },
        { title: "Instalasi Drainage Cell & Geotextile", desc: "Memasang lembaran plastik interlock drainage cell setebal 2 cm untuk jalur air, dilapisi kain filter geotextile agar partikel tanah tidak menyumbat pembuangan." },
        { title: "Penyebaran Media Tanam Ringan", desc: "Menggunakan media tanam non-tanah liat yang berbobot sangat ringan namun kaya nutrisi untuk meminimalkan beban mati pada struktur dak rumah." },
        { title: "Penataan Vegetasi Tahan Panas", desc: "Menanam tanaman berakar serabut yang tahan terhadap paparan angin kencang dan terik matahari langsung di ketinggian." }
      ],
      pricingTable: [
        { item: "Sistem Konstruksi Dak Anti Bocor (inc. Waterproofing, Drain Cell & Filter)", price: "Rp 450.000 - Rp 650.000", unit: "m²" },
        { item: "Paket Roof Garden Hijau Lengkap (Sistem Konstruksi + Media + Tanaman)", price: "Rp 1.200.000 - Rp 1.850.000", unit: "m²" },
        { item: "Pembuatan Dek Lantai Kayu Outdoor (WPC Wood Decking) di Atap", price: "Rp 950.000 - Rp 1.400.000", unit: "m²" }
      ],
      faq: [
        { q: "Apakah roof garden akan membuat atap dak beton rumah saya bocor atau rembes?", a: "Tidak akan terjadi jika dikerjakan dengan benar. Kami mengaplikasikan sistem waterproofing ganda berbasis membran elastomer tebal yang tahan terhadap penetrasi ujung akar tanaman, lengkap dengan uji genangan air sebelum penanaman." },
        { q: "Apakah beban tanah dari roof garden tidak membahayakan struktur rumah?", a: "Kami tidak menggunakan tanah merah murni yang sangat berat saat basah. Kami memformulasikan media tanam khusus yang berbobot 60% lebih ringan namun menyimpan air dan nutrisi dengan sangat baik untuk pertumbuhan tanaman." },
        { q: "Tanaman apa yang cocok ditanam di atap dak beton?", a: "Tanaman yang tahan angin kencang dan cuaca panas terik sangat direkomendasikan, seperti Kamboja Jepang, Agave, Kaktus hias, ruelia, melati air, dan rumput gajah mini." }
      ]
    },
    {
      slug: "taman-tropis",
      title: "Taman Tropis Rimbun",
      subtitle: "Eksotisme Daun Lebar dan Kesejukan Hutan Tropis Mini.",
      image: "https://picsum.photos/seed/tropical/1920/1080",
      content: "Gaya taman tropis merespons kekayaan iklim Nusantara. Menonjolkan perpaduan tanaman berdaun lebar (seperti anthurium, monstera, atau heliconia), pakis, dan pepohonan peneduh untuk menciptakan ekosistem bertingkat. Taman ini menghasilkan mikroklimat yang sangat sejuk, lembap, dan meneduhkan hati.",
      benefits: [
        "Produksi Oksigen Tinggi: Vegetasi rapat memberikan suplai udara bersih ekstra.",
        "Kesejukan Maksimal: Keteduhan bertingkat dari kanopi pohon hingga tanaman penutup tanah.",
        "Suaka Satwa Liar Kecil: Menarik burung-burung dan kupu-kupu alami bernyanyi di pagi hari.",
        "Aroma Hutan Basah: Bau petrichor yang khas saat daun tersiram air."
      ],
      detailedContent: [
        "Taman tropis rimbun dirancang untuk menciptakan kembali nuansa hutan hujan alami yang asri, teduh, dan kaya akan keanekaragaman hayati langsung di pekarangan Anda. Sangat cocok bagi Anda yang mendambakan pelarian dari hiruk-pikuk kota besar ke dalam keteduhan alami.",
        "TukangTamannn.com menyusun tanaman dalam struktur bertingkat (multi-layer): kanopi atas dibentuk oleh pohon peneduh rindang seperti Ketapang Kencana, strata tengah diisi oleh keindahan tanaman berdaun lebar eksotis seperti Pisang-pisangan (Heliconia), Philodendron, dan Calathea, sedangkan lapisan bawah ditutup rapat oleh rimbunnya pakis dan lumut hias."
      ],
      processSteps: [
        { title: "Pemetaan Strata Vegetasi", desc: "Merencanakan tata letak tanaman bertumpuk mulai dari pohon pelindung utama, semak berdaun lebar, hingga groundcover penutup tanah." },
        { title: "Penyuburan Tanah Humus", desc: "Mencampur tanah lokal dengan pupuk kandang matang sekam mentah, dan cocopeat guna menciptakan media gembur yang kaya unsur hara." },
        { title: "Penataan Elemen Batu Kali", desc: "Meletakkan beberapa bongkah batu kali alami berlumut di sela-sela tanaman untuk memperkuat kesan natural hutan belantara." },
        { title: "Instalasi Sistem Penyemprot Embun", desc: "Memasang sistem misting sprayer otomatis yang mengeluarkan kabut air halus secara berkala untuk menjaga kelembapan udara tropis." }
      ],
      pricingTable: [
        { item: "Paket Taman Bali Klasik / Tropis Rimbun Standard", price: "Rp 500.000 - Rp 750.000", unit: "m²" },
        { item: "Lanskap Tropis Premium (inc. Koleksi Varigata & Pohon Besar)", price: "Rp 800.000 - Rp 1.200.000", unit: "m²" },
        { item: "Instalasi Mist Sprayer Pengabut Kelembapan Otomatis", price: "Mulai Rp 2.500.000", unit: "Paket Alat" }
      ],
      faq: [
        { q: "Apakah taman tropis tidak akan mengundang banyak nyamuk dan serangga?", a: "Selama sirkulasi air mengalir lancar dan tidak ada genangan liar, nyamuk tidak akan berkembang biak. Kami juga merekomendasikan penanaman tanaman pengusir nyamuk alami seperti Lavender atau Zodia di sela-sela rimbunnya taman." },
        { q: "Bagaimana cara menjaga agar taman tropis tetap terlihat rapi dan tidak acak-acakan?", a: "Kunci estetika taman tropis adalah rimbun terkontrol. Diperlukan pemangkasan dahan mati secara berkala dan pembatasan pertumbuhan akar tanaman yang terlalu agresif menggunakan pembatas akar (root barrier)." },
        { q: "Apakah tanaman tropis membutuhkan penyiraman yang sering?", a: "Ya, karena tanaman tropis menyukai kelembapan tinggi. Penyiraman disarankan dilakukan 2 kali sehari di musim kemarau, atau Anda dapat menggunakan layanan instalasi penyiraman otomatis kami." }
      ]
    }
  ],
  katalog: [
    {
      slug: "jenis-rumput",
      title: "Katalog Jenis Rumput Taman",
      subtitle: "Karpet Hijau Alami Dasar Pembentuk Lanskap.",
      image: "https://picsum.photos/seed/grass/1920/1080",
      content: "Pemilihan rumput harus disesuaikan dengan intensitas cahaya matahari dan kelembapan area. Kami menyediakan layanan penanaman Rumput Gajah Mini (paling populer, daun tebal), Rumput Jepang (runcing, butuh cahaya penuh), Rumput Peking, hingga solusi Rumput Sintetis premium untuk area bermain anak yang tetap bersih sepanjang tahun.",
      benefits: [
        "Gajah Mini: Perawatan paling mudah, tahan pijakan, cocok untuk cuaca Indonesia.",
        "Rumput Jepang: Tampilan sangat rapat bak karpet mewah, butuh pemangkasan rutin.",
        "Rumput Sintetis: Bebas perawatan, selalu hijau, dan aman untuk area indoor/semi-outdoor.",
        "Sistem Penanaman Lempeng/Cabut: Akar cepat merambat dan menutup tanah."
      ],
      detailedContent: [
        "Rumput adalah fondasi penting yang mengikat seluruh elemen taman menjadi satu kesatuan visual yang utuh. Pemilihan varietas rumput yang salah seringkali berujung pada kebotakan tanah atau rumput yang menguning karena kurangnya sinar matahari atau perawatan.",
        "TukangTamannn.com menyediakan rumput berkualitas segar langsung dari perkebunan budidaya mandiri kami. Kami memastikan tanah dasar digemburkan dan diberi lapisan pupuk organik padat setebal 3cm sebelum rumput ditanam dengan teknik penjarangan lempeng yang padat, menjamin pertumbuhan karpet hijau yang mulus dalam waktu kurang dari 3 minggu."
      ],
      processSteps: [
        { title: "Pembersihan Gulma & Perataan", desc: "Membersihkan area dari sisa rumput liar lama, akar alang-alang, batu-batu kerikil, serta meratakan kontur tanah dasar." },
        { title: "Pemberian Tanah Humus & Pupuk", desc: "Menambahkan lapisan tanah merah subur campur pupuk kandang matang guna memberikan nutrisi awal bagi akar baru rumput." },
        { title: "Pemasangan Lempeng Rumput", desc: "Menempelkan lempengan rumput segar secara rapat dan memukulnya perlahan menggunakan balok kayu agar akar menyatu dengan tanah kerja." },
        { title: "Penyiraman Jenuh Awal", desc: "Melakukan penyiraman jenuh air selama 7 hari pertama secara intensif pagi dan sore guna memicu pertumbuhan akar baru yang kokoh." }
      ],
      pricingTable: [
        { item: "Penanaman Rumput Gajah Mini (inc. Tanah Humus & Jasa Tanam)", price: "Rp 45.000 - Rp 65.000", unit: "m²" },
        { item: "Penanaman Rumput Jepang / Peking / Swiss (Butuh Sinar Matahari Penuh)", price: "Rp 50.000 - Rp 75.000", unit: "m²" },
        { item: "Pemasangan Rumput Sintetis Premium Tebal 3cm (Anti UV & Drainase Baik)", price: "Rp 180.000 - Rp 280.000", unit: "m²" }
      ],
      faq: [
        { q: "Mengapa rumput gajah mini di bawah pohon rindang saya menjadi kurus dan botak?", a: "Rumput alami membutuhkan sinar matahari minimal 4-5 jam sehari. Area teduh di bawah pohon rindang sangat tidak disarankan untuk rumput Jepang atau Peking. Rumput gajah mini adalah opsi terbaik, namun jika terlalu teduh, kami merekomendasikan penggunaan rumput sintetis premium atau taman kering." },
        { q: "Seberapa sering rumput alami harus dipotong?", a: "Rumput gajah mini tumbuh lambat dan cukup dipotong setiap 2-3 bulan sekali. Sementara Rumput Jepang tumbuh lebih cepat ke atas dan perlu dipangkas setiap 3-4 minggu sekali agar tidak berduri tajam." },
        { q: "Apakah rumput sintetis aman untuk anjing dan kucing peliharaan?", a: "Sangat aman. Rumput sintetis kami menggunakan serat non-toksik berkualitas tinggi, dilengkapi lubang drainase air, sehingga sangat mudah disiram dan dibersihkan jika terkena kotoran hewan peliharaan." }
      ]
    },
    {
      slug: "pohon-peneduh-ikonik",
      title: "Pohon Peneduh & Ikonik",
      subtitle: "Patung Hidup (Focal Point) dan Kanopi Elegan.",
      image: "https://picsum.photos/seed/trees/1920/1080",
      content: "Kami memiliki relasi dengan berbagai nursery besar untuk mendatangkan pohon-pohon peneduh berkarakter eksklusif. Mulai dari Pohon Pule berbonggol besar untuk taman minimalis, Ketapang Kencana dengan tajuk payung yang khas, Tabebuya untuk nuansa Sakura tropis, hingga Kamboja Fosil untuk kesan purba yang mahal.",
      benefits: [
        "Focal Point Seketika: Langsung mengubah wajah fasad rumah menjadi eksklusif.",
        "Estetika Batang: Pule dan Kamboja Fosil memiliki lekuk batang yang bernilai seni tinggi.",
        "Peneduh Kendaraan: Tajuk Ketapang Kencana sangat lebar, melindungi area parkir.",
        "Tertarik untuk menanam di pekarangan Anda? Hubungi jasa tukang taman kami sekarang!"
      ],
      detailedContent: [
        "Sebuah lanskap kelas atas tidak akan lengkap tanpa kehadiran sebuah pohon ikonik (focal point) berkarakter kuat yang bertindak bagaikan instalasi patung hidup alami di pekarangan Anda.",
        "TukangTamannn.com memandu Anda memilih dan mendatangkan pohon pelindung dewasa yang sehat dari penangkaran khusus kami. Kami menangani proses logistik berat, penggunaan crane jika diperlukan, hingga teknik karantina penanaman khusus agar pohon raksasa dapat bertransisi dengan selamat dan tumbuh subur di rumah baru Anda."
      ],
      processSteps: [
        { title: "Konsultasi Struktur & Estetika", desc: "Mencocokkan gaya rumah dengan jenis pohon (misal Pule untuk Minimalis Modern, Kamboja Fosil untuk Mediteranian)." },
        { title: "Pembuatan Lubang Tanam Raksasa", desc: "Menggali lubang berukuran 1,5 hingga 2 kali diameter gumpalan akar pohon asli, dilapisi pupuk organik dasar bermutu tinggi." },
        { title: "Pengiriman & Pengangkatan Profesional", desc: "Mengirimkan pohon menggunakan armada truk khusus dan menurunkannya dengan crane pengangkat ke titik tanam dengan presisi." },
        { title: "Penyangga Batang Sementara", desc: "Memasang tiang penyangga kayu bambu atau besi tripod selama 2 bulan pertama untuk menahan guncangan angin sebelum akar mencengkeram tanah baru." }
      ],
      pricingTable: [
        { item: "Pohon Tabebuya Bunga Pink / Kuning (Tinggi 2.5 - 3.5 meter)", price: "Rp 1.500.000 - Rp 3.500.000", unit: "Pohon (terpasang)" },
        { item: "Pohon Kamboja Fosil Bali Batang Tua (Koleksi Karakter Artistik)", price: "Rp 4.500.000 - Rp 15.000.000", unit: "Pohon (terpasang)" },
        { item: "Pohon Pule Bonsai Mewah Bonggol Besar Eksklusif (Tinggi >3 meter)", price: "Rp 8.000.000 - Rp 45.000.000+", unit: "Pohon (terpasang)" }
      ],
      faq: [
        { q: "Bagaimana cara memastikan pohon besar yang ditanam tidak roboh diterpa angin?", a: "Kami mengunci akar menggunakan teknik pemadatan tanah sirtu di dasar, disusul dengan pemasangan tiang tripod penyangga kokoh di sekeliling batang utama selama minimal 3 bulan hingga akar baru menyebar sempurna." },
        { q: "Apakah akar pohon pule atau ketapang kencana tidak merusak pondasi rumah?", a: "Pohon Pule memiliki tipe akar serabut besar yang cenderung tumbuh ke bawah dan melingkar, sehingga relatif aman bagi pondasi. Untuk Ketapang Kencana, kami menyarankan menanam minimal berjarak 3 meter dari struktur dinding utama." },
        { q: "Kapan pohon Tabebuya akan berbunga lebat seperti di Jepang?", a: "Tabebuya biasanya berbunga lebat di Indonesia pada puncak musim kemarau menjelang musim hujan (antara bulan Agustus hingga Oktober). Bunga akan rontok bersamaan dan menghasilkan karpet warna yang menakjubkan di tanah." }
      ]
    },
    {
      slug: "tanaman-hias-bunga",
      title: "Tanaman Hias & Bunga Softscape",
      subtitle: "Goresan Warna dan Tekstur di Atas Kanvas Tanah.",
      image: "https://picsum.photos/seed/flowers/1920/1080",
      content: "Softscape atau tanaman non-kayu memberikan dinamika visual pada lanskap. Kami menata berlapis mulai dari semak (shrub) beraneka warna seperti Bromelia Merah merona, Philodendron rimbun, Soka, hingga Sansevieria (Lidah Mertua) untuk taman berkonsep kering. Komposisi warna daun dipadukan sedemikian rupa agar tak monoton.",
      benefits: [
        "Warna Sepanjang Tahun: Kombinasi tanaman yang memiliki warna daun atraktif tanpa harus menunggu berbunga.",
        "Penyerap Polutan: Beberapa jenis tanaman terbukti baik menyaring udara kotor knalpot.",
        "Tekstur Dinamis: Perpaduan daun runcing, lebar, bergelombang, dan berbulu dalam satu frame.",
        "Perawatan Terukur: Kami mengelompokkan tanaman berdasarkan kebutuhan air yang sama."
      ],
      detailedContent: [
        "Penyusunan softscape tanaman hias adalah tempat di mana seni lukis murni bertemu dengan ilmu botani. Desainer kami tidak hanya menanam tanaman secara berjejer acak, melainkan menggunakan prinsip gradasi tinggi (layering), kontras warna daun, serta tekstur tajuk daun.",
        "Kami membagi penataan ke dalam tiga lapis: tanaman latar belakang yang tinggi (seperti Calathea Luthea atau Pisang Bali), tanaman transisi tengah (seperti Philodendron Marble, Puring, Lili Paris), dan tanaman pembatas depan/penutup tanah (seperti Krokot Merah, rumput kucai mini). Hasilnya adalah komposisi visual yang mengalir indah dan dinamis dilihat dari berbagai sudut pandang."
      ],
      processSteps: [
        { title: "Pemetaan Gradasi Tinggi", desc: "Mengatur tanaman tertinggi berada di bagian belakang nempel dinding, diikuti tanaman sedang, dan tanaman terpendek di paling depan." },
        { title: "Penyesuaian Kebutuhan Cahaya", desc: "Menempatkan jenis tanaman penyuka matahari (seperti Krokot, Soka) di area terbuka, dan tanaman teduh (seperti Alocasia, Begonia) di bawah kanopi pohon." },
        { title: "Pembuatan Kontras Warna Daun", desc: "Menyandingkan tanaman berdaun ungu/merah (seperti Sambang Darah) dengan tanaman berdaun hijau terang (seperti pandan klorofil) untuk kontras maksimal." },
        { title: "Pemberian Mulsa & Pembatas", desc: "Melapisi permukaan sela tanaman dengan mulsa organik atau batu koral halus guna menjaga kelembapan tanah dan mengunci bentuk tatanan." }
      ],
      pricingTable: [
        { item: "Tanaman Semak Groundcover (Krokot, Kucai, Lili Paris, Taiwan Beauty)", price: "Rp 5.000 - Rp 15.000", unit: "Polibag (terpasang)" },
        { item: "Tanaman Shrub Sedang (Soka, Puring, Philodendron, Sansieria)", price: "Rp 25.000 - Rp 75.000", unit: "Polibag (terpasang)" },
        { item: "Tanaman Focal Point Sedang (Bromelia Raksasa, Calathea Luthea)", price: "Rp 85.000 - Rp 250.000", unit: "Pohon (terpasang)" }
      ],
      faq: [
        { q: "Bagaimana cara agar warna merah daun Bromelia tidak pudar menjadi hijau?", a: "Bromelia membutuhkan asupan sinar matahari pagi yang cukup (minimal 3-4 jam) agar pigmen warna merah atau kuningnya keluar dengan cerah. Jika diletakkan di area yang terlalu teduh, warnanya akan lambat laun berubah menjadi hijau gelap." },
        { q: "Apakah TukangTamannn.com menjual tanaman hias secara satuan tanpa paket pembuatan taman?", a: "Kami melayani penjualan tanaman hias satuan dengan minimal pembelian tertentu, namun layanan utama kami adalah paket desain dan instalasi penataan langsung di lokasi Anda." },
        { q: "Berapa lama sekali tanaman hias harus diberi pupuk?", a: "Untuk menjaga kesuburan dan kecerahan warna daun, kami menyarankan pemberian pupuk NPK daun (butiran biru) setiap 1 hingga 2 bulan sekali dengan dosis secukupnya di sela-sela penyiraman." }
      ]
    },
    {
      slug: "komponen-hardscape",
      title: "Komponen Hardscape Struktural",
      subtitle: "Batu, Air, dan Cahaya Pelengkap Vegetasi.",
      image: "https://picsum.photos/seed/lights/1920/1080",
      content: "Sebuah taman belum selesai tanpa sentuhan hardscape. Katalog komponen kami mencakup aneka Batu Koral (putih salju, pancawarna, kupang), stepping stone (batu pijakan), lampu taman (uplight menyorot pohon, bollard lights untuk setapak), patung ornamen, hingga pot Terrazzo berdesain modern.",
      benefits: [
        "Efek Dramatis Malam Hari: Pencahayaan uplight menonjolkan tekstur batang dan daun di malam hari.",
        "Definisi Ruang: Stepping stone memberikan arah visual dan melindungi rumput dari pijakan terus menerus.",
        "Kontras Material: Kasarnya batu bersanding alami dengan lembutnya daun.",
        "Kesan Premium: Penggunaan material terakota atau batuan candi ukir."
      ],
      detailedContent: [
        "Jika vegetasi (softscape) adalah jiwa dari taman, maka komponen struktural (hardscape) adalah tulang punggung yang memberikan bentuk, batas, dan karakter arsitektur pada lanskap Anda.",
        "TukangTamannn.com menghadirkan ragam pilihan komponen hardscape berkualitas tinggi yang disortir khusus untuk ketahanan outdoor ekstrem. Mulai dari lampu taman LED waterproof IP65 berkabel tanam tebal aman sengatan listrik, hingga aneka batu alam sikat import dan pot terrazzo minimalis buatan tangan pengrajin lokal berbakat."
      ],
      processSteps: [
        { title: "Penentuan Jalur Utilitas", desc: "Merencanakan jalur kabel listrik bawah tanah untuk lampu taman dan pemipaan air bersih untuk kran penyiraman/pancuran air." },
        { title: "Penggalian & Konstruksi Kasar", desc: "Membangun dudukan cor semen untuk pot terrazzo besar, pondasi tiang lampu, atau tataan pijakan stepping stones." },
        { title: "Penataan Batu Tebar", desc: "Membentangkan kain geotekstil anti rumput liar lalu menebarkan batu koral import secara merata setebal minimal 3 cm agar tanah tertutup sempurna." },
        { title: "Instalasi Kelistrikan Aman", desc: "Menyambungkan sistem kelistrikan lampu taman menggunakan pipa pelindung PVC tebal anti gigitan tikus dan menyambungkannya ke panel kontrol otomatis." }
      ],
      pricingTable: [
        { item: "Lampu Taman Sorot Sorot Pohon (LED Uplight Waterproof IP65 inc. Pasang)", price: "Rp 250.000 - Rp 380.000", unit: "Titik" },
        { item: "Pot Terrazzo Minimalis Putih Mewah (Tinggi 60-80cm)", price: "Rp 450.000 - Rp 750.000", unit: "Pcs" },
        { item: "Batu Koral Kupang Putih Salju Impor Karungan (Berat 20kg)", price: "Rp 85.000 - Rp 120.000", unit: "Karung" }
      ],
      faq: [
        { q: "Apakah lampu taman yang dipasang aman saat hujan lebat atau banjir?", a: "Sangat aman. Kami hanya menggunakan unit lampu bersertifikasi minimal IP65 (waterproof total). Seluruh sambungan kabel ditanam di dalam pipa PVC tebal dan diisolasi menggunakan isolasi silikon khusus cor resin anti rembes air." },
        { q: "Berapa kebutuhan karung batu koral untuk menutupi luasan lahan taman kering?", a: "Sebagai estimasi standar, untuk ketebalan ideal 3cm, dibutuhkan sekitar 1,5 hingga 2 karung ukuran 20kg untuk menutupi luasan 1 meter persegi." },
        { q: "Apakah pot terrazzo buatan TukangTamannn.com mudah retak?", a: "Tidak. Pot terrazzo kami dibuat menggunakan campuran serbuk marmer asli berkadar tinggi dengan penguat kawat baja di dalamnya, dilapisi cairan anti jamur luar ruangan khusus." }
      ]
    }
  ]
};
