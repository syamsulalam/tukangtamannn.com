export interface CityData {
  slug: string;
  name: string;
  region: "Jawa Timur" | "Bali";
  title: string;
  subtitle: string;
  image: string;
  content: string;
  benefits: string[];
  detailedContent: string[];
  localFocus: string;
  metaTitle: string;
  metaDesc: string;
  localProjectHighlight: string;
}

export const citiesData: Record<string, CityData> = {
  "surabaya": {
    slug: "surabaya",
    name: "Surabaya",
    region: "Jawa Timur",
    title: "Jasa Tukang Taman Surabaya Premium",
    subtitle: "Desain Lansekap Eksklusif untuk Rumah Mewah & Kantor Modern di Kota Surabaya.",
    image: "https://picsum.photos/seed/surabayagarden/1200/600",
    content: "Surabaya sebagai kota metropolitan dengan iklim pesisir tropis yang dinamis membutuhkan penataan lansekap yang cerdas dan efisien. Kami di CV. SARIJAYA MAKMUR menghadirkan jasa pembuatan taman premium Surabaya, memadukan varietas tanaman tahan panas dengan sistem drainase modern serta instalasi penyiraman otomatis (automated irrigation) guna menyiasati suhu perkotaan yang tinggi.",
    benefits: [
      "Optimalisasi Area Sempit: Solusi vertical garden (taman tegak) & roof garden untuk kawasan hunian padat Surabaya Barat dan Timur.",
      "Material Batu Alam Eksklusif: Pilihan batu andesit, batu paras Jogja, hingga batu candi untuk mempercantik aksen pagar dan taman.",
      "Tanaman Tahan Terik: Pilihan pohon peneduh ikonik seperti Tabebuya merah muda dan Bonsai Pule berkarakter tua yang hidup tangguh di Surabaya."
    ],
    detailedContent: [
      "Di Surabaya, kami melayani berbagai proyek perumahan elite mulai dari CitraLand, Graha Famili, Pakuwon Indah, hingga kawasan Dharmahusada dan Jemursari. Kami sangat memahami bahwa rumah mewah di Surabaya menuntut standar estetika yang tinggi, keserasian warna, dan penyusunan elemen 'hardscape' yang kokoh.",
      "Layanan kami meliputi pembuatan kolam ikan koi minimalis lengkap dengan filter mekanis-biologis berlapis, pembuatan gazebo kayu ulin tahan cuaca, serta pengerjaan lantai carport bermotif batu sikat yang tidak hanya fungsional tetapi juga menambah kemegahan tampilan fasad rumah Anda.",
      "Seluruh pengerjaan dikepalai langsung oleh David Mauluddin ST. untuk memastikan setiap detail rancangan arsitektural diwujudkan dengan kepuasan penuh dan jaminan garansi hidup tanaman."
    ],
    localFocus: "Fokus kami di Surabaya adalah menghadirkan oasis hijau yang menyejukkan di tengah udara metropolitan, menggunakan perpaduan tanaman tropis berdaun lebar dan instalasi air mengalir yang meredam bising jalan raya.",
    metaTitle: "Jasa Tukang Taman Surabaya | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman profesional Surabaya Barat, Timur, Selatan. Spesialis taman minimalis, kolam ikan koi, & bonsai pule bergaransi resmi dari CV. SARIJAYA MAKMUR.",
    localProjectHighlight: "Taman Tropis Modern & Kolam Koi Minimalis di CitraLand, Surabaya Barat."
  },
  "sidoarjo": {
    slug: "sidoarjo",
    name: "Sidoarjo",
    region: "Jawa Timur",
    title: "Jasa Tukang Taman Sidoarjo Profesional",
    subtitle: "Mahakarya Taman Asri dan Desain Kolam Alami Terbaik di Wilayah Sidoarjo.",
    image: "https://picsum.photos/seed/sidoarjo_garden/1200/600",
    content: "Sebagai pusat operasional resmi kami, Sidoarjo merupakan wilayah dengan tingkat perkembangan perumahan residensial yang sangat pesat. CV. SARIJAYA MAKMUR menyediakan jasa pembuatan taman Sidoarjo yang tepercaya, merancang taman minimalis asri, taman kering bergaya Zen, hingga kolam tebing air terjun buatan yang menyejukkan suasana rumah.",
    benefits: [
      "Lokasi Kantor Pusat Dekat: Respons survei lapangan dan koordinasi pengerjaan super cepat untuk seluruh area Sidoarjo.",
      "Spesialis Perumahan Baru: Berpengalaman luas dalam mendesain taman depan rumah tipe minimalis di klaster-klaster modern.",
      "Biaya Sangat Kompetitif: Distribusi material tanaman hias langsung dari pembibitan kami sendiri, memangkas biaya perantara."
    ],
    detailedContent: [
      "Dengan kantor pusat kami yang berlokasi strategis di Jl Green Mansion Safir Sidoarjo, kami memiliki kedekatan geografis yang sangat menguntungkan klien. Kami siap mengunjungi lokasi Anda dalam waktu singkat untuk melakukan konsultasi desain dan pengukuran presisi.",
      "Kami melayani seluruh perumahan elite dan menengah di Sidoarjo seperti Green Mansion, Kahuripan Nirwana, Pondok Jati, Taman Pinang, Wisma Tropodo, hingga kawasan Juanda. Konsep taman kering berbatu koral putih dipadukan dengan pohon sikas atau pandan bali menjadi salah satu yang paling difavoritkan klien di Sidoarjo karena perawatannya yang sangat praktis.",
      "Kami juga menyediakan jasa pembuatan kolam ikan koi dengan dinding berlapis batu alam, dilengkapi air terjun buatan (water wall) yang suara gemercik airnya dapat meredakan penat setelah seharian bekerja."
    ],
    localFocus: "Sebagai warga lokal Sidoarjo, kami berkomitmen memberikan dedikasi penuh untuk mempercantik lanskap kota delta ini melalui proyek-proyek taman rumah yang rimbun dan sehat.",
    metaTitle: "Jasa Tukang Taman Sidoarjo | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman tepercaya di Sidoarjo. Kantor pusat di Sidoarjo. Layanan pembuatan taman minimalis, carport batu sikat, & kolam koi. Hubungi Owner David Mauluddin ST.",
    localProjectHighlight: "Taman Kering Modern Zen di Perumahan Green Mansion Safir, Sidoarjo."
  },
  "gresik": {
    slug: "gresik",
    name: "Gresik",
    region: "Jawa Timur",
    title: "Jasa Tukang Taman Gresik Berkualitas",
    subtitle: "Desain Taman Penyejuk Polusi & Kolam Koi Artistik untuk Residensial & Industri Gresik.",
    image: "https://picsum.photos/seed/gresikgarden/1200/600",
    content: "Gresik dikenal sebagai kawasan perumahan berkembang dan zona industri yang masif. Penataan taman di Gresik bukan hanya sekadar pemanis visual, melainkan berfungsi sebagai paru-paru mikro penyaring polusi udara. CV. SARIJAYA MAKMUR menghadirkan solusi lanskap hijau subur dengan pemilihan vegetasi penyerap karbon tinggi namun tetap indah dipandang.",
    benefits: [
      "Tanaman Penyaring Polusi: Penggunaan Sansievera, pucuk merah, dan ketapang kencana untuk menyegarkan kualitas udara.",
      "Lansekap Industri & Pabrik: Berpengalaman mengerjakan area hijau (green barrier) untuk perkantoran dan kompleks industri Gresik.",
      "Pijakan Batu Alam Tebal: Desain carport batu sikat tahan beban kendaraan berat untuk garasi hunian Anda."
    ],
    detailedContent: [
      "Di Gresik, kami melayani area hunian populer seperti GKB (Gresik Kota Baru), PPS (Permata Puri Sutorejo), Randuagung, hingga kawasan perumahan modern di Driyorejo dan Menganti. Karakter tanah di beberapa wilayah Gresik cenderung kering dan berkapur, sehingga memerlukan teknik pengolahan tanah khusus (soil conditioning) serta penambahan lapisan humus berkualitas tinggi sebelum penanaman.",
      "Kami mendatangkan langsung pupuk kompos pilihan dan tanah subur pegunungan agar rumput gajah mini atau rumput jepang yang ditanam di Gresik dapat tumbuh merata, hijau tebal, dan bebas dari botak akibat tanah tandus.",
      "Komitmen kami adalah menghadirkan pengerjaan yang rapi, berstruktur kuat, dan memiliki nilai seni tinggi yang disesuaikan dengan anggaran rasional Anda."
    ],
    localFocus: "Fokus kami di Gresik adalah mentransformasi halaman rumah yang panas menjadi asri, segar, dan berhawa sejuk lewat penataan kanopi daun hijau yang rindang.",
    metaTitle: "Jasa Tukang Taman Gresik | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman profesional di Gresik. Melayani pembuatan taman minimalis, kolam koi penyejuk, vertical garden, & carport sikat di GKB, Menganti, Driyorejo.",
    localProjectHighlight: "Pengerjaan Lanskap Hijau & Carport Batu Alam di Perumahan Gresik Kota Baru (GKB)."
  },
  "malang": {
    slug: "malang",
    name: "Malang",
    region: "Jawa Timur",
    title: "Jasa Tukang Taman Malang & Batu Eksklusif",
    subtitle: "Hadirkan Konsep Taman Villa Tropis & Kolam Alami di Udara Sejuk Malang Raya.",
    image: "https://picsum.photos/seed/malanggarden/1200/600",
    content: "Kota Malang dan Kota Wisata Batu terkenal dengan iklim pegunungan yang sejuk dan tanah yang subur. Kondisi geografis yang istimewa ini memungkinkan pemilihan varietas tanaman hias bunga yang jauh lebih kaya dan bervariasi. CV. SARIJAYA MAKMUR merancang taman bertema Villa Resort, taman klasik Eropa, hingga kebun herba aromatik yang bersinergi dengan kesejukan alam Malang.",
    benefits: [
      "Varietas Tanaman Berbunga Kaya: Pilihan pinus hias, bromelia eksotis, cemara udang, hingga mawar andalan yang tumbuh subur di iklim dingin.",
      "Gaya Villa Resort Mewah: Konsep lansekap terbuka dengan perpaduan dek kayu (decking) dan kolam air mancur batu alam alami.",
      "Dinding Relief Tebing: Pengerjaan seni dinding relief bernuansa tebing air terjun pegunungan yang sangat natural."
    ],
    detailedContent: [
      "Kami melayani jasa pembuatan taman di Kota Malang, Kabupaten Malang, serta Kota Batu, meliputi perumahan eksklusif di Ijen Nirwana, Araya, Permata Jingga, Tidar, hingga kawasan villa peristirahatan di Songgokerto dan Pacet. Udara Malang yang sejuk sangat mendukung perkembangan tanaman hias warna-warni yang menawan.",
      "Kami mengoptimalkan kelebihan alam Malang ini dengan merancang lansekap berkonsep 'Multi-Tiered Gardens' memanfaatkan kontur tanah berundak khas pegunungan, dipadukan dengan setapak batu kali bulat (river stone) dan lampu taman warm-light yang romantis saat malam hari.",
      "Dengan keahlian CV. SARIJAYA MAKMUR, villa atau rumah tinggal Anda di Malang akan menjadi tempat pelarian sempurna yang menentramkan jiwa."
    ],
    localFocus: "Fokus kami di Malang adalah memperkuat karakter alami pegunungan melalui taman berbunga estetis yang mengundang kupu-kupu dan burung berkicau alami.",
    metaTitle: "Jasa Tukang Taman Malang & Batu | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman profesional Malang Raya & Batu. Spesialis taman gaya villa resort, dinding relief tebing, kolam koi alami bergaransi resmi.",
    localProjectHighlight: "Lansekap Villa Resort & Kolam Koi Terbuka di Kawasan Eksklusif Araya, Malang."
  },
  "pasuruan": {
    slug: "pasuruan",
    name: "Pasuruan",
    region: "Jawa Timur",
    title: "Jasa Tukang Taman Pasuruan Terpercaya",
    subtitle: "Solusi Lanskap Elegan untuk Kediaman Asri dan Area Industri Pasuruan.",
    image: "https://picsum.photos/seed/pasuruangarden/1200/600",
    content: "Pasuruan memiliki keragaman geografi yang luas, mulai dari kawasan industri padat di PIER (Pasuruan Industrial Estate Rembang) hingga kawasan peristirahatan yang sejuk di lereng Gunung Welirang seperti Prigen dan Tretes. CV. SARIJAYA MAKMUR menawarkan rancangan lansekap komprehensif yang disesuaikan dengan kondisi lingkungan spesifik properti Anda.",
    benefits: [
      "Adaptasi Iklim Dualitas: Desain taman tahan panas untuk area pesisir Pasuruan kota dan tanaman subtropis untuk kawasan dataran tinggi Prigen.",
      "Gazebo Kayu Kelapa Premium: Pemasangan gazebo/saung kayu kelapa berkualitas tinggi sebagai tempat bersantai keluarga di kebun.",
      "Sistem Penyaringan Kolam Kokoh: Konstruksi kolam koi bebas bocor dengan garansi pengerjaan struktural."
    ],
    detailedContent: [
      "Di Pasuruan, kami dipercaya menangani berbagai proyek lansekap mulai dari perumahan asri perkotaan, rumah peristirahatan keluarga di Tretes, hingga taman asri perkantoran di kawasan PIER. Bagi hunian di dataran tinggi, kami merekomendasikan penataan taman bergaya alami (natural garden) memanfaatkan pohon pinus mini, pakis haji, dan hamparan rumput swiss yang hijau rapat.",
      "Sedangkan untuk kawasan perkotaan Pasuruan yang cenderung hangat, kami mengaplikasikan konsep taman minimalis dengan peneduh pohon kamboja fosil berbunga harum lembut, serta dekorasi bebatuan putih Sumba yang bersih dan modern.",
      "Setiap proyek didukung oleh tim tukang batu dan seniman taman berpengalaman belasan tahun di bawah pengawasan ketat CV. SARIJAYA MAKMUR."
    ],
    localFocus: "Kami berfokus menghadirkan keseimbangan fungsional antara elemen keras (batu, kayu) dan elemen lembut (tanaman, air) demi terciptanya kenyamanan hunian yang awet.",
    metaTitle: "Jasa Tukang Taman Pasuruan & Prigen | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman berpengalaman di Pasuruan, Prigen, Pandaan. Melayani jasa taman tropis, gazebo kayu kelapa, relief tebing air terjun buatan.",
    localProjectHighlight: "Taman Asri & Gazebo Kayu Ulin di Villa Peristirahatan Tretes, Pasuruan."
  },
  "mojokerto": {
    slug: "mojokerto",
    name: "Mojokerto",
    region: "Jawa Timur",
    title: "Jasa Tukang Taman Mojokerto Indah",
    subtitle: "Kreasi Lanskap Berkarakter Budaya & Modern Minimalis di Mojokerto.",
    image: "https://picsum.photos/seed/mojokertogarden/1200/600",
    content: "Mojokerto memiliki nilai historis yang kental sebagai pusat kebudayaan kerajaan nusantara terdahulu. CV. SARIJAYA MAKMUR menghadirkan jasa pembuatan taman Mojokerto dengan kemampuan unik merancang lanskap bertema tradisional (Majapahit style) dengan bata merah ekspos berukir, dipadukan secara harmonis dengan arsitektur rumah modern minimalis masa kini.",
    benefits: [
      "Sentuhan Etnik Eksklusif: Penggunaan pilar bata merah ekspos, candi bentar mini, dan pancuran air batu alam bermotif kuno.",
      "Taman Kering Rendah Perawatan: Sangat cocok bagi pemilik rumah sibuk di Mojokerto perkotaan.",
      "Lantai Carport Cetak Komputer: Desain pola batu sikat geometris presisi tinggi menggunakan mal cetakan khusus."
    ],
    detailedContent: [
      "Di Mojokerto, kami melayani pengerjaan taman untuk wilayah Mojosari, Pacet, Trowulan, hingga kawasan perumahan perkotaan Mojokerto. Konsep taman etnik tropis sangat digemari di sini, di mana kami menempatkan kendi pancuran tanah liat, kolam air mancur minimalis, serta tanaman berkarakter eksotis seperti keladi hias, pakis monyet, dan pohon kamboja fosil tua bali.",
      "Bagi klien yang menyukai gaya modern, kami merancang taman bergaya kontemporer dengan garis-garis tegas, menempatkan bak tanaman (planter box) dari cor semen minimalis, dipadukan dengan rumput jepang bertekstur halus.",
      "Seluruh material batu alam kami datangkan langsung dari sumber terbaik untuk menjamin ketahanan warna dan tekstur yang kokoh melintasi waktu."
    ],
    localFocus: "Fokus kami di Mojokerto adalah merayakan harmoni warisan budaya lokal dengan kepraktisan ruang modern, menghasilkan taman yang memiliki kedalaman estetika spiritual.",
    metaTitle: "Jasa Tukang Taman Mojokerto | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman profesional Mojokerto. Spesialis taman etnik Majapahit, kolam pancuran batu alam, gazebo, dan carport batu sikat terbaik.",
    localProjectHighlight: "Taman Etnik Modern dengan Kolam Pancuran Batu Kali di Pacet, Mojokerto."
  },
  "denpasar": {
    slug: "denpasar",
    name: "Denpasar",
    region: "Bali",
    title: "Jasa Tukang Taman Denpasar Bali Premium",
    subtitle: "Rancang Taman Tropis Eksotis Berstandar Internasional di Kota Denpasar.",
    image: "https://picsum.photos/seed/denpasargarden/1200/600",
    content: "Denpasar sebagai jantung peradaban pariwisata dunia menuntut standar desain lanskap yang sangat tinggi, artistik, dan berkarakter kuat. CV. SARIJAYA MAKMUR menghadirkan layanan pembuatan taman kelas satu di Denpasar, mengawinkan tradisi arsitektur lanskap Bali (bebatuan ukir paras, gapura) dengan tata ruang luar (outdoor living space) modern yang bersih.",
    benefits: [
      "Sentuhan Seni Bali Asli: Kolaborasi dengan seniman batu lokal untuk ukiran paras Bali, patung pancuran, dan gapura pembatas.",
      "Desain Ramah Lingkungan: Pemilihan tanaman endemik Bali yang hemat konsumsi air namun tetap rimbun sepanjang musim.",
      "Lansekap Kolam Renang (Pool Decking): Pengerjaan area tepi kolam renang yang estetis dan tidak licin dengan batu alam andesit flamed."
    ],
    detailedContent: [
      "Di Denpasar, kami melayani penataan taman untuk area residensial pribadi, ruko butik, hingga kompleks akomodasi wisata di Sanur, Renon, Kesiman, dan Gatot Subroto. Lanskap Bali memiliki identitas yang kuat dengan penempatan tanaman suci/sakral seperti kamboja (jepun) bali, pandan bali, paku-pakuan, dan helikonia merah menyala.",
      "Kami memastikan taman dirancang agar mendukung sirkulasi udara optimal di dalam ruangan melalui pemetaan arah angin, serta meletakkan kolam air terjun mini yang mendinginkan suhu udara tropis Denpasar.",
      "Bersama CV. SARIJAYA MAKMUR, properti Anda di Denpasar akan memancarkan getaran magis pulau dewata yang selalu dinanti para pelancong."
    ],
    localFocus: "Fokus kami di Denpasar adalah melahirkan taman tropis bernilai seni tinggi yang meningkatkan kesegaran batin (inner serenity) pemiliknya.",
    metaTitle: "Jasa Tukang Taman Denpasar Bali | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman premium di Denpasar Bali. Spesialis taman tropis resort Bali, kolam air terjun paras ukir, & pool decking batu andesit.",
    localProjectHighlight: "Taman Tropis Klasik Sanur Style di Kawasan Residensial Renon, Denpasar."
  },
  "badung": {
    slug: "badung",
    name: "Badung",
    region: "Bali",
    title: "Jasa Tukang Taman Badung, Canggu & Seminyak",
    subtitle: "Desain Lanskap Super Premium untuk Villa Mewah & Beach Club di Badung.",
    image: "https://picsum.photos/seed/badunggarden/1200/600",
    content: "Kabupaten Badung yang mencakup destinasi wisata papan atas dunia seperti Canggu, Seminyak, Kuta, Jimbaran, Uluwatu, dan Nusa Dua memiliki kebutuhan lansekap ultra-premium. Kami di CV. SARIJAYA MAKMUR merancang taman bertema tropis kontemporer, boho-resort, hingga kebun minimalist luxury yang melengkapi keindahan arsitektur villa modern Bali.",
    benefits: [
      "Estetika Kelas Dunia: Desain yang sangat dinikmati turis mancanegara, ideal untuk memaksimalkan potensi sewa villa harian.",
      "Taman Tepi Pantai Tangguh: Pemilihan vegetasi khusus tahan angin garam asin untuk pesisir Kuta, Seminyak, dan Uluwatu.",
      "Pohon Pule Bonsai Raksasa: Supply dan penanaman pohon pule purba berdiameter besar sebagai landmark utama halaman villa."
    ],
    detailedContent: [
      "Proyek kami di Badung didominasi oleh villa-villa eksklusif, kafe berkonsep alam, resort butik, dan hunian ekspatriat. Kami sangat mahir memadukan area berjemur berlantai kayu (decking) dengan tanaman berdaun raksasa seperti Alocasia macrorrhizos (Keladi Kuping Gajah), Ravenala madagascariensis (Pisang Kipas), serta palem botol yang memberikan siluet menawan saat matahari terbenam.",
      "Kami juga mendesain vertical garden dengan sistem penyiraman otomatis (drip irrigation) di dinding batas villa untuk menciptakan privasi total dari bangunan tetangga, tanpa harus kehilangan nuansa hijau alami.",
      "Setiap tahapan dikerjakan dengan presisi tinggi dan diawasi ketat oleh David Mauluddin ST. untuk menjaga standar kualitas internasional."
    ],
    localFocus: "Kami berfokus menciptakan lansekap spektakuler yang mengintegrasikan air, tanaman eksotis, dan kayu alam untuk memunculkan sensasi liburan abadi di rumah Anda.",
    metaTitle: "Jasa Tukang Taman Badung Canggu Seminyak | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman ultra-premium di Badung Bali. Spesialis lansekap villa Canggu, Seminyak, Nusa Dua, Uluwatu. Bonsai Pule, vertical garden, kolam renang.",
    localProjectHighlight: "Lansekap Infinity Pool & Tropical Boho Garden di Luxury Villa Canggu, Badung."
  },
  "gianyar": {
    slug: "gianyar",
    name: "Gianyar",
    region: "Bali",
    title: "Jasa Tukang Taman Gianyar Artistik",
    subtitle: "Integrasi Desain Kebun Alami dengan Keaslian Seni Ukir Batu Gianyar.",
    image: "https://picsum.photos/seed/gianyargarden/1200/600",
    content: "Gianyar adalah pusat kesenian, kerajinan, dan budaya Bali. Membangun taman di Gianyar membutuhkan kepekaan rasa yang tinggi terhadap detail pahatan batu alam dan struktur lansekap tradisional Bali. CV. SARIJAYA MAKMUR menghadirkan taman yang berjiwa seni tinggi, memadukan suara gemericik air alami dengan patung-patung ukiran khas Gianyar.",
    benefits: [
      "Kolaborasi Seniman Pahat Gianyar: Ornamen taman eksklusif yang dipahat langsung oleh pematung batu paras lokal berpengalaman.",
      "Konsep Water Feature Alami: Kolam pancuran bertingkat bergaya petirtaan kuno yang sakral dan menenangkan.",
      "Perawatan Taman Berkala: Layanan pemeliharaan lanskap profesional untuk menjaga ekosistem kebun tetap asri."
    ],
    detailedContent: [
      "Kami melayani pengerjaan taman di wilayah Sukawati, Ubud, Blahbatuh, hingga Payangan. Lanskap di Gianyar kerap kali memanfaatkan relief tebing batu alam dengan pahatan flora atau fauna lokal yang dikombinasikan dengan sistem air terjun mengalir (cascading water).",
      "Tanaman hias yang kami pilihkan meliputi paku tanduk rusa (platycerium) raksasa yang menempel anggun di pohon induk, anggrek hutan bali yang harum, serta karpet rumput gajah mini yang tumbuh rimbun hijau.",
      "Kami mendedikasikan pengerjaan ini untuk menciptakan tempat peristirahatan meditasi yang damai, menyatu selaras dengan keindahan alam hijau Gianyar yang mistis dan menenangkan."
    ],
    localFocus: "Fokus kami di Gianyar adalah merajut harmoni spiritual antara patung batu karya seni manusia dengan pertumbuhan vegetasi alami yang subur nan eksotis.",
    metaTitle: "Jasa Tukang Taman Gianyar | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman berseni tinggi di Gianyar Bali. Spesialis kolam air mancur tradisional Bali, relief batu paras, taman meditasi asri.",
    localProjectHighlight: "Taman Meditasi Tradisional Bali dengan Pancuran Air Batu Paras di Sukawati, Gianyar."
  },
  "ubud": {
    slug: "ubud",
    name: "Ubud",
    region: "Bali",
    title: "Jasa Tukang Taman Ubud Zen & Rainforest",
    subtitle: "Ciptakan Oasis Damai Bergaya Hutan Hujan Tropis & Zen Garden di Ubud.",
    image: "https://picsum.photos/seed/ubudgarden/1200/600",
    content: "Ubud terkenal dengan kontur lembah hijau, persawahan berundak, dan suasana hutan hujan tropis yang magis. Taman di Ubud dirancang untuk melebur sempurna dengan alam luar sekitarnya. CV. SARIJAYA MAKMUR menghadirkan konsep kebun organik, Zen Garden bernuansa hening, serta lansekap hutan hujan (Rainforest Garden) yang mengutamakan kelestarian ekologi lokal.",
    benefits: [
      "Peleburan Alami dengan Lembah: Desain taman tanpa batas (frameless landscape) yang menyatu dengan pemandangan alam Ubud.",
      "Taman Meditasi & Yoga Deck: Konstruksi dek kayu ulin/bengkirai melayang di atas taman kering untuk area relaksasi/yoga.",
      "Tanaman Penutup Tanah Eksotis: Hamparan kucai mini, pakis nephrolepis, dan moss (lumut es) alami yang menghampar hijau lembap."
    ],
    detailedContent: [
      "Kami melayani jasa taman premium untuk area villa pribadi, resort kesehatan, studio yoga, dan kafe ekologi di pusat Ubud, Tegallalang, Campuhan, dan Sayan. Di Ubud, kami merancang lansekap yang sangat ramah lingkungan, meminimalisir penggunaan beton keras dan memaksimalkan material batu kali bulat serta kayu daur ulang.",
      "Sistem pencahayaan taman diletakkan secara tersembunyi di sela-sela rimbunnya pakis sarang burung dan pohon kamboja, menghasilkan siluet pendar cahaya keemasan yang menenangkan di malam hari.",
      "Di bawah arahan teknis David Mauluddin ST., kami menjamin hasil taman Anda di Ubud memiliki nilai estetika ekologi yang tinggi serta kualitas pengerjaan struktural yang kuat."
    ],
    localFocus: "Fokus utama kami di Ubud adalah menghormati keasrian alam sekitar dengan menghadirkan lansekap yang mendukung ketenangan meditasi, keheningan batin, dan keharmonisan ekologis.",
    metaTitle: "Jasa Tukang Taman Ubud | CV. SARIJAYA MAKMUR",
    metaDesc: "Tukang taman ramah lingkungan di Ubud Bali. Spesialis rainforest garden, zen garden, decking kayu ulin melayang, kolam alami tebing batu kali.",
    localProjectHighlight: "Lansekap Rainforest Garden & Yoga Deck Kayu Ulin di Luxury Resort Sayan, Ubud."
  }
};
