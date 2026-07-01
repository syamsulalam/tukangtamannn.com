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

export const runtime = "edge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = siteData.layanan.find(item => item.slug === slug);
  
  if (!data) {
    return {
      title: "Layanan Tidak Ditemukan | TukangTamannn.com",
    };
  }

  return {
    title: `${data.title} | TukangTamannn.com`,
    description: `${data.subtitle} Jasa pembuatan profesional oleh CV. SARIJAYA MAKMUR (David Mauluddin ST.).`,
    keywords: `${data.title.toLowerCase()}, jasa taman, tukang taman premium, cv sarijaya makmur`,
    openGraph: {
      title: `${data.title} | TukangTamannn.com`,
      description: data.subtitle,
      images: [data.image],
    }
  };
}

export default async function LayananDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const data = siteData.layanan.find(item => item.slug === resolvedParams.slug);


  if (!data) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Layanan", href: "/#layanan" },
    { label: data.title }
  ];

  return (
    <main className="min-h-screen bg-cream flex flex-col relative">
      <Header />
      <PageHero 
        title={data.title} 
        subtitle={data.subtitle} 
        image={data.image} 
        badge="Layanan Utama"
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
      
      {/* Call to action section linking to silo C / WA */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-forest text-white rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-sage opacity-20 rounded-full blur-[80px]" />
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">Wujudkan Taman Impian Anda</h3>
            <p className="text-white/80 max-w-lg mx-auto font-medium mb-10 relative z-10">
              Tim profesional kami siap mengubah properti Anda menjadi mahakarya alam. Konsultasikan kebutuhan lanskap Anda secara gratis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a href="https://wa.me/6282131472864" target="_blank" rel="noreferrer" className="bg-white text-forest px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-sage transition-all shadow-xl hover:-translate-y-1">
                Chat via WhatsApp
              </a>
              <Link href="/katalog/pohon-peneduh-ikonik" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                Lihat Katalog Tanaman <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
