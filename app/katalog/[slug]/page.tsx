import type { Metadata } from "next";
import { siteData } from "../../../data/content";
import PageHero from "../../../components/shared/PageHero";
import ContentBlock from "../../../components/shared/ContentBlock";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FloatingWhatsApp from "../../../components/FloatingWhatsApp";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = siteData.katalog.find(item => item.slug === slug);
  
  if (!data) {
    return {
      title: "Katalog Tidak Ditemukan | TukangTamannn.com",
    };
  }

  return {
    title: `${data.title} | TukangTamannn.com`,
    description: `${data.subtitle} Pengadaan material berkualitas tinggi oleh CV. SARIJAYA MAKMUR (David Mauluddin ST.).`,
    keywords: `${data.title.toLowerCase()}, pohon peneduh, tanaman hias premium, bonsai pule, cv sarijaya makmur`,
    openGraph: {
      title: `${data.title} | TukangTamannn.com`,
      description: data.subtitle,
      images: [data.image],
    }
  };
}

export default async function KatalogTanamanDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const data = siteData.katalog.find(item => item.slug === resolvedParams.slug);


  if (!data) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Katalog", href: "/#katalog" },
    { label: data.title }
  ];

  return (
    <main className="min-h-screen bg-cream flex flex-col relative">
      <Header />
      <PageHero 
        title={data.title} 
        subtitle={data.subtitle} 
        image={data.image} 
        badge="Katalog Material"
        breadcrumbItems={breadcrumbItems}
      />
      <ContentBlock 
        content={data.content} 
        benefits={data.benefits} 
        detailedContent={data.detailedContent}
        processSteps={data.processSteps}
        pricingTable={data.pricingTable}
        faq={data.faq}
      />
      
      {/* Authority Silo Linking to Silo A */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-forest/10 text-forest rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-forest/5 rounded-full blur-[80px]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-sage block mb-4">Informasi Lanjutan</span>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">Integrasikan ke Proyek Anda</h3>
            <p className="text-charcoal/70 max-w-lg mx-auto font-medium mb-10 relative z-10">
              Tertarik memilih komposisi spesifik dari katalog kami? Tim profesional kami siap menghitung estimasi kebutuhan dan menanamkannya di lahan Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/layanan/jasa-pembuatan-taman" className="bg-forest text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-forest/80 transition-all shadow-xl hover:-translate-y-1">
                Jadwalkan Pembuatan
              </Link>
              <a href="https://wa.me/6282131472864" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-forest text-forest px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-forest/5 transition-all">
                Tanya Harga Material
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
