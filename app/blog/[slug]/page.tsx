import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, Tag, Calendar, CheckCircle2, MessageCircle } from "lucide-react";


// Robust static data for blog articles
interface ArticleData {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  content: string[];
  keyTakeaways: string[];
}

const BLOG_DATA: Record<string, ArticleData> = {
  "biaya-pembuatan-taman-per-meter-2026": {
    title: "Berapa estimasi biaya pembuatan taman per meter tahun 2026?",
    category: "Edukasi & Biaya",
    date: "28 Juni 2026",
    author: "David Mauluddin ST.",
    image: "https://picsum.photos/seed/cost/1200/600",
    readTime: "5 Menit",
    content: [
      "Perencanaan anggaran merupakan langkah krusial sebelum memulai proyek lanskap. Di tahun 2026 ini, tarif pembuatan taman sangat bervariasi bergantung pada luas area, pemilihan jenis vegetasi, serta kompleksitas hardscape pendukung.",
      "Secara umum, pembuatan taman minimalis standar yang didominasi oleh hamparan rumput (seperti gajah mini atau rumput jepang) beserta kombinasi tanaman semak hias berkisar antara Rp 350.000 hingga Rp 500.000 per meter persegi. Biaya ini umumnya sudah mencakup pengolahan tanah, pembersihan lahan, pupuk dasar, dan ongkos tenaga kerja profesional.",
      "Bagi Anda yang menginginkan nuansa tropis premium (Tropical Garden) dengan tambahan pohon pelindung berukuran sedang (tinggi 2-3 meter) serta penataan bebatuan alam dekoratif, estimasi biaya berkisar antara Rp 600.000 hingga Rp 950.000 per meter persegi. Di sisi lain, proyek lanskap eksklusif berskala besar yang mengintegrasikan pohon koleksi artistik seperti Bonsai Pule, Kamboja Fosil Bali, kolam koi terpadu, dan gazebo kayu custom akan dihitung berdasarkan rencana anggaran biaya (RAB) menyeluruh setelah survei lahan resmi dilakukan.",
      "CV. SARIJAYA MAKMUR berkomitmen memberikan rincian harga yang transparan tanpa ada biaya tersembunyi. Tim kami memastikan setiap rupiah yang Anda investasikan berbuah kenyamanan visual yang menenangkan."
    ],
    keyTakeaways: [
      "Taman Minimalis Standar: Rp 350.000 - Rp 500.000 / m²",
      "Taman Tropis Klasik / Premium: Rp 600.000 - Rp 950.000 / m²",
      "Lanskap Eksklusif (Kolam & Pule): Dihitung khusus berdasarkan survei lahan",
      "Harga di atas sudah termasuk penataan lahan (landscaping), pupuk dasar, vegetasi, dan jasa pasang"
    ]
  },
  "tips-merawat-taman-musim-kemarau": {
    title: "7 Tips merawat taman agar tetap hijau di musim kemarau.",
    category: "Perawatan",
    date: "25 Juni 2026",
    author: "David Mauluddin ST.",
    image: "https://picsum.photos/seed/care/1200/600",
    readTime: "4 Menit",
    content: [
      "Suhu udara yang terik dan curah hujan yang minim di musim kemarau sering kali membuat rumput menguning dan tanaman hias menjadi layu. Namun, dengan teknik pemeliharaan yang tepat, keasrian taman Anda dapat tetap dipertahankan secara optimal.",
      "Langkah pertama yang sangat penting adalah mengatur waktu penyiraman secara disiplin. Hindari menyiram tanaman di siang hari yang terik karena air akan cepat menguap sebelum meresap ke akar, serta dapat merusak jaringan daun akibat efek lensa mikro air di bawah terik matahari. Waktu terbaik adalah pagi hari sebelum pukul 08.00 atau sore hari setelah pukul 16.00.",
      "Gunakan pula teknik mulsa (penutupan permukaan tanah) menggunakan cacahan kulit kayu atau kerikil dekoratif di sekitar tanaman semak. Mulsa berfungsi menjaga kelembapan tanah lebih lama dengan menghambat laju penguapan langsung dari tanah. Selain itu, pangkaslah daun-daun tua atau kering secara rutin untuk mengurangi beban penguapan internal pada tanaman.",
      "Terakhir, pastikan Anda memberikan pupuk organik cair dosis rendah guna menstimulasi ketahanan akar tanpa memicu pertumbuhan daun berlebih secara drastis yang justru membutuhkan asupan air lebih tinggi."
    ],
    keyTakeaways: [
      "Siram hanya pada pagi hari (sebelum pukul 08.00) atau sore hari (setelah pukul 16.00)",
      "Aplikasikan teknik mulsa organik/bebatuan di sekeliling pangkal batang tanaman",
      "Kurangi frekuensi pemangkasan berat selama puncak musim kemarau",
      "Pastikan drainase tanah tetap gembur agar air menyerap sempurna hingga ke akar terdalam"
    ]
  },
  "memilih-jenis-rumput-lahan-teduh": {
    title: "Cara memilih jenis rumput yang cocok untuk lahan teduh.",
    category: "Panduan Material",
    date: "20 Juni 2026",
    author: "David Mauluddin ST.",
    image: "https://picsum.photos/seed/grassguide/1200/600",
    readTime: "6 Menit",
    content: [
      "Salah satu masalah utama dalam lansekap hunian adalah bagian pekarangan yang tertutup bayangan pohon besar atau bangunan tinggi. Rumput konstan membutuhkan cahaya matahari langsung untuk berfotosintesis, sehingga menanam rumput yang salah di area teduh hanya akan membuatnya menguning, botak, dan mati.",
      "Untuk lahan dengan intensitas cahaya matahari rendah (shady area), jenis rumput terbaik yang sangat direkomendasikan adalah Rumput Gajah Mini (Axonopus compressus). Varietas ini memiliki toleransi naungan (shade tolerance) yang jauh lebih tinggi dibandingkan rumput jepang atau rumput manila. Karakteristik daunnya yang lebar dan berwarna hijau gelap membantunya menyerap partikel cahaya minim secara lebih efektif.",
      "Selain Gajah Mini, rumput Swiss juga dapat dipertimbangkan jika mendapatkan setidaknya 3-4 jam cahaya matahari pagi tidak langsung. Namun, apabila area tersebut benar-benar gelap gulita atau tertutup kanopi rapat sepanjang hari, alternatif terbaik kami adalah beralih menggunakan kombinasi tanaman penutup tanah toleran teduh (seperti Kucai Mini, lili paris, atau pakis sarang burung) atau mengaplikasikan konsep dry garden (zen garden) berhiaskan batu koral estetik.",
      "Kami di CV. SARIJAYA MAKMUR selalu melakukan survei pencahayaan lahan secara detail sebelum menentukan varietas penutup tanah guna menjamin hasil taman yang awet menghijau."
    ],
    keyTakeaways: [
      "Rumput Gajah Mini memiliki daya tahan terbaik di bawah naungan sedang",
      "Rumput Jepang & Manila membutuhkan matahari penuh dan tidak cocok untuk lahan teduh",
      "Untuk lahan sangat teduh, ganti rumput dengan tanaman penutup tanah (groundcover) seperti Kucai Mini",
      "Konsep taman kering (zen garden) dengan batu koral merupakan solusi terbaik bagi lahan gersang cahaya matahari"
    ]
  },
  "inspirasi-desain-taman-bawah-tangga": {
    title: "Inspirasi desain taman di bawah tangga (Indoor Garden).",
    category: "Inspirasi Ruang",
    date: "15 Juni 2026",
    author: "David Mauluddin ST.",
    image: "https://picsum.photos/seed/indoorgarden/1200/600",
    readTime: "4 Menit",
    content: [
      "Area kosong di bawah tangga sering kali dibiarkan berdebu, gelap, atau sekadar menjadi gudang penimbun barang bekas. Padahal, dengan penataan arsitektur lanskap yang cerdas, sudut mati ini dapat disulap menjadi oasis dalam rumah (indoor garden) yang memikat pandangan.",
      "Mengingat minimnya akses tanah alami dan sirkulasi udara luar, konsep 'Taman Kering' atau Zen Garden adalah pilihan paling logis dan estetis untuk area bawah tangga. Dibandingkan menggunakan tanah gembur yang berisiko membuat ruangan lembap dan kotor, kami memadukan hamparan batu split abu-abu, batu koral putih salju, serta potongan batu alam andesit sebagai pijakan kaki.",
      "Untuk elemen vegetasinya, pilihlah tanaman dalam ruangan berkelayakan tinggi seperti Sansevieria (Lidah Mertua), Zamia (Pohon Dolar), Peace Lily, atau Monstera deliciosa yang diletakkan dalam pot keramik minimalis berkelas. Tanaman-tanaman tersebut teruji mampu menyaring polutan udara dalam ruangan dan bertahan hidup di area minim matahari langsung.",
      "Terakhir, hadirkan spotlight LED sorot bawah berwarna hangat (warm white) untuk memberikan efek dramatis siluet tanaman pada dinding, memberikan kesan mewah, tenang, dan modern di dalam interior rumah Anda."
    ],
    keyTakeaways: [
      "Terapkan konsep taman kering (dry garden) tanpa tanah bebas becek dan lembap",
      "Gunakan tanaman indoor tangguh penyuplai oksigen seperti Peace Lily & Lidah Mertua",
      "Instalasi sistem pencahayaan dekoratif (spotlight LED) untuk efek visual yang dramatis",
      "Gunakan paduan batu koral putih dan abu-abu untuk menciptakan ritme kontras yang modern"
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_DATA[slug];
  
  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | TukangTamannn.com",
    };
  }

  return {
    title: `${article.title} | TukangTamannn.com`,
    description: article.content[0] || "Baca wawasan dan artikel edukasi lanskap di TukangTamannn.com.",
    keywords: `${article.category.toLowerCase()}, tukang taman, cv sarijaya makmur, david mauluddin`,
    openGraph: {
      title: `${article.title} | TukangTamannn.com`,
      description: article.content[0] || "Baca wawasan dan artikel edukasi lanskap di TukangTamannn.com.",
      images: [article.image],
      type: "article",
    }
  };
}

export default async function BlogDetail({ params }: PageProps) {

  const { slug } = await params;
  const article = BLOG_DATA[slug];

  if (!article) {
    return notFound();
  }

  return (
    <main className="min-h-screen flex flex-col pt-0 relative overflow-hidden bg-cream selection:bg-sage/40">
      <Header />
      
      {/* Article Detail Header */}
      <section className="pt-40 pb-12 px-6 relative bg-white border-b border-forest/5">
        <div className="absolute top-0 left-0 w-full h-full bg-forest/[0.01] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black text-forest hover:text-sage transition-colors uppercase tracking-wider mb-8">
            <ArrowLeft size={16} /> Kembali ke Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-forest/50 uppercase tracking-widest mb-6">
            <span className="bg-sage/10 text-forest px-3 py-1.5 rounded-lg font-extrabold">{article.category}</span>
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {article.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {article.readTime} Baca</span>
            <span className="flex items-center gap-1.5"><User size={13} /> Oleh: {article.author}</span>
          </div>

          <h1 className="font-extrabold text-3xl md:text-5xl text-forest tracking-tighter mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Large Hero Image */}
          <div className="aspect-[2/1] relative w-full rounded-[40px] overflow-hidden shadow-xl border border-forest/5">
            <Image 
              src={article.image} 
              alt={article.title} 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
              priority 
            />
          </div>
        </div>
      </section>

      {/* Main Content & Takeaways Grid */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Article Body */}
          <div className="lg:col-span-2 space-y-6 text-charcoal/80 leading-relaxed text-sm md:text-base font-medium">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Sticky Key Takeaways Side Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[32px] p-6 border border-forest/10 shadow-sm sticky top-28 space-y-6">
              <div>
                <h3 className="font-extrabold text-forest text-lg flex items-center gap-2 mb-4 border-b border-forest/5 pb-3">
                  <CheckCircle2 className="text-sage w-5 h-5 flex-shrink-0" />
                  Rangkuman Penting
                </h3>
                <ul className="space-y-4">
                  {article.keyTakeaways.map((item, index) => (
                    <li key={index} className="flex gap-2 text-xs md:text-sm text-charcoal/70 leading-relaxed font-semibold">
                      <span className="text-sage font-black mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation CTA Inside Side Card */}
              <div className="pt-4 border-t border-forest/5 text-center">
                <p className="text-xs text-charcoal/50 font-bold mb-4">Konsultasikan Lahan Anda Sekarang</p>
                <a 
                  href={`https://wa.me/6282131472864?text=Halo%20TukangTamannn.com,%20saya%20tertarik%20berkonsultasi%20mengenai%20topik:%20${encodeURIComponent(article.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-forest text-white hover:bg-forest/90 py-3 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-forest/10 hover:shadow-forest/20 transition-all cursor-pointer"
                >
                  <MessageCircle size={16} /> Tanya David Mauluddin
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Authority Call to Action Banner */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A3C34] text-white rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-sage opacity-20 rounded-full blur-[80px]" />
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 relative z-10">Siap Menghidupkan Pekarangan Hunian Anda?</h3>
            <p className="text-white/80 max-w-md mx-auto font-medium mb-8 text-sm relative z-10">
              Diskusikan langsung rencana taman impian Anda bersama David Mauluddin ST. (Owner CV. SARIJAYA MAKMUR). Survei lokasi & konsultasi GRATIS!
            </p>
            <div className="flex justify-center relative z-10">
              <a 
                href={`https://wa.me/6282131472864?text=Halo%20David%20Mauluddin%20ST.,%20saya%20tertarik%20mengajukan%20survei%20lokasi%20taman%20setelah%20membaca%20artikel%20Anda.`}
                target="_blank" 
                rel="noreferrer" 
                className="bg-sage text-forest px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl hover:-translate-y-1"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
