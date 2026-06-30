import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'TukangTamannn.com | Jasa Pembuatan Taman Premium Jawa Timur & Bali',
  description: 'Spesialis desain & pembuatan taman minimalis, kolam koi, gazebo oleh CV. SARIJAYA MAKMUR. Hubungi David Mauluddin ST. 082131472864 untuk survei gratis Jawa Timur & Bali.',
  keywords: 'tukang taman, jasa taman, taman minimalis surabaya, tukang taman sidoarjo, tukang taman malang, tukang taman bali, kolam koi sidoarjo, pembuatan taman bali, cv sarijaya makmur, david mauluddin',
  openGraph: {
    title: 'TukangTamannn.com | Jasa Pembuatan Taman Premium Jatim & Bali',
    description: 'Wujudkan lanskap impian Anda bersama CV. SARIJAYA MAKMUR. Profesional, bergaransi, dan berkualitas tinggi.',
    url: 'https://tukangtamannn.com',
    siteName: 'TukangTamannn.com',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased bg-cream text-charcoal scroll-smooth`} suppressHydrationWarning>
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}

