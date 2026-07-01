# CODEBASE.md — TukangTamannn.com

> Dokumentasi lengkap dan inventarisasi menyeluruh untuk seluruh basis kode
> proyek **TukangTamannn.com** (CV. SARIJAYA MAKMUR).
>
> _Terakhir diperbarui: 1 Juli 2026_

---

## Daftar Isi

1. [Ringkasan Proyek](#1-ringkasan-proyek)
2. [Tumpukan Teknologi](#2-tumpukan-teknologi)
3. [Pohon Direktori Lengkap](#3-pohon-direktori-lengkap)
4. [File Konfigurasi](#4-file-konfigurasi)
5. [Lapisan Data (`data/`)](#5-lapisan-data-data)
6. [Utilitas & Hook (`lib/`, `hooks/`)](#6-utilitas--hook-lib-hooks)
7. [Style Global](#7-style-global)
8. [Layout & Error Boundary](#8-layout--error-boundary)
9. [Halaman App Router (`app/`)](#9-halaman-app-router-app)
10. [Komponen (`components/`)](#10-komponen-components)
11. [Komponen Bersama (`components/shared/`)](#11-komponen-bersama-componentsshared)
12. [Dokumentasi Internal (`docs/`)](#12-dokumentasi-internal-docs)
13. [Hubungan & Alur Data](#13-hubungan--alur-data)
14. [Deployment & Environment](#14-deployment--environment)
15. [Catatan Pemeliharaan](#15-catatan-pemeliharaan)

---

## 1. Ringkasan Proyek

| Aspek | Detail |
|---|---|
| **Nama bisnis** | TukangTamannn.com |
| **Entitas hukum** | CV. SARIJAYA MAKMUR |
| **Owner** | David Mauluddin ST. |
| **Bidang** | Jasa pembuatan & perawatan taman (landscaping) |
| **Area layanan** | Jawa Timur (Surabaya, Sidoarjo, Gresik, Malang, Pasuruan, Mojokerto) & Bali (Denpasar, Badung, Gianyar, Ubud) |
| **Kontak utama** | WhatsApp 082131472864 / `https://wa.me/6282131472864` |
| **Alamat** | Jl Green Mansion Safir blok 16, Sidoarjo 61253 |
| **Framework** | Next.js 15.4 (App Router) + React 19 |
| **Runtime deploy** | Cloudflare Pages (Edge) via `@cloudflare/next-on-pages` |
| **Styling** | Tailwind CSS v4 dengan tema kustom forest/sage/cream/charcoal |
| **Font** | Plus Jakarta Sans (sans) + Playfair Display (serif/aksen) |

Proyek ini adalah website landing-page multi-halaman untuk bisnis jasa taman dengan fokus SEO lokal. Terdapat 14 halaman konten dinamis (5 layanan, 5 gaya, 4 katalog), 10 halaman kota, blog, serta halaman legal. Formulir kontak mengirim pesan langsung ke WhatsApp owner (`wa.me/6282131472864?text=...`) tanpa backend email.

---

## 2. Tumpukan Teknologi

### Dependensi Produksi
| Paket | Versi | Peran |
|---|---|---|
| `next` | ^15.4.9 | Framework App Router |
| `react` / `react-dom` | ^19.2.1 | Library UI |
| `motion` | ^12.23.24 | Animasi (Framer Motion) |
| `lucide-react` | ^0.553.0 | Ikon SVG |
| `tailwind-merge` | ^3.3.1 | Merging utility className |
| `clsx` | (terkunci) | Conditional className |
| `class-variance-authority` | (terkunci) | Variant API untuk komponen |
| `autoprefixer` / `postcss` | (terkunci) | CSS pipeline |
| `@google/genai` | ^1.17.0 | _Warisan template AI Studio — tidak dipakai di source_ |
| `@hookform/resolvers` | ^5.2.1 | _Terpasang tapi tidak dipakai di source_ |

### Dependensi Pengembangan
| Paket | Versi | Peran |
|---|---|---|
| `typescript` | 5.9.3 | Tipe statis |
| `tailwindcss` | 4.1.11 | Utility CSS |
| `@tailwindcss/postcss` | 4.1.11 | Plugin PostCSS |
| `@tailwindcss/typography` | (terkunci) | Tipografi prose |
| `tw-animate-css` | (terkunci) | Animasi Tailwind |
| `@cloudflare/next-on-pages` | ^1.13.16 | Build adapter ke Cloudflare Pages |
| `firebase-tools` | (terkunci) | _Warisan template_ |
| `eslint` | 9.39.1 | Linter |
| `eslint-config-next` | 16.0.8 | Rules Next.js |
| `@types/node`, `@types/react`, `@types/react-dom` | (terkunci) | Definisi tipe |

### Skrip NPM
| Skrip | Perintah | Tujuan |
|---|---|---|
| `dev` | `next dev` | Development server |
| `build` | `next build` | Build standar Next.js |
| `pages:build` | `npx @cloudflare/next-on-pages` | Build untuk Cloudflare Pages |
| `start` | `next start` | Jalankan production server |
| `lint` | `next lint` (melalui eslint config flat) | Lint kode |
| `clean` | (implisit, hapus `.next`) | _Tidak dideklarasikan secara eksplisit di package.json_ |

---

## 3. Pohon Direktori Lengkap

```
tukangtamannn.com/
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .git/                              [internal git]
├── .vercel/                           [build output next-on-pages]
│   ├── project.json
│   └── output/
│       ├── builds.json
│       ├── config.json
│       ├── diagnostics/
│       ├── functions/                 [edge functions terkompilasi]
│       │   ├── _not-found.func/
│       │   ├── area-layanan/[city].func/
│       │   ├── blog/[slug].func/
│       │   ├── gaya/[slug].func/
│       │   ├── katalog/[slug].func/
│       │   ├── layanan/[slug].func/
│       │   ├── portofolio.rsc.func/
│       │   └── *.prerender-config.json + *.prerender-fallback.html
│       └── static/                    [HTML/RSC/CSS/Fonts ter-prerender]
├── app/
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── area-layanan/
│   │   ├── page.tsx
│   │   └── [city]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── gaya/[slug]/page.tsx
│   ├── katalog/[slug]/page.tsx
│   ├── kebijakan-privasi/page.tsx
│   ├── layanan/[slug]/page.tsx
│   ├── portofolio/page.tsx
│   ├── syarat-ketentuan/page.tsx
│   └── tentang-kami/page.tsx
├── components/
│   ├── ContactFormSection.tsx
│   ├── FaqSection.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── PortfolioSection.tsx
│   ├── ProcessSection.tsx
│   ├── ScrollProgressBar.tsx
│   ├── ServicesSection.tsx
│   ├── SideNav.tsx
│   ├── StylesSection.tsx
│   ├── TeamSection.tsx
│   ├── TestimonialSlider.tsx
│   ├── TrustSection.tsx
│   └── shared/
│       ├── Breadcrumb.tsx
│       ├── ContentBlock.tsx
│       ├── DynamicFaq.tsx
│       ├── PageHero.tsx
│       └── QuotationEstimator.tsx
├── data/
│   ├── cities.ts
│   └── content.ts
├── docs/
│   ├── CLOUDFLARE_FORM.md
│   ├── CODEBASE.md                   ← file ini
│   ├── PAGES_PLAN.md
│   └── SEO_PLAN.md
├── eslint.config.mjs
├── hooks/
│   └── use-mobile.ts
├── lib/
│   └── utils.ts
├── metadata.json
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## 4. File Konfigurasi

### `package.json`
Nama paket internal `ai-studio-applet` versi `0.1.0` (private). Mencantumkan seluruh dependensi di atas dan skrip `dev`, `build`, `pages:build`, `start`, `lint`.

### `tsconfig.json`
- `target: ES2017`
- `strict: true`
- `module: esnext`, `moduleResolution: bundler`
- `jsx: preserve` (Next.js akan kompilasi)
- `noEmit: true`
- Path alias: `@/*` → `./*`
- `include`: `next-env.d.ts`, `**/*.ts`, `**/*.tsx`, `.next/types/**/*.ts`

### `next.config.ts`
- `reactStrictMode: true`
- `eslint.ignoreDuringBuilds: true`
- `typescript.ignoreBuildErrors: false` (tipe tetap harus bersih)
- `images.remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos' }]` — satu-satunya host gambar remote
- `output: 'standalone'`
- `transpilePackages: ['motion']` — agar paket `motion` ikut di-bundle oleh Next
- `webpack(config, { dev })` — menonaktifkan file watcher ketika `DISABLE_HMR=true` (mode AI Studio)

### `.eslintrc.json`
Legacy minimal: `{"extends": "next"}`.

### `eslint.config.mjs`
Konfigurasi flat ESLint baru menggunakan `defineConfig` dari `eslint-config-next` (ESM). Meng-override konfigurasi lama.

### `postcss.config.mjs`
Plugin: `@tailwindcss/postcss` dan `autoprefixer`.

### `next-env.d.ts`
File referensi tipe standar Next.js. _Jangan diedit._

### `.env.example`
Dokumentasi variabel environment:
- `GEMINI_API_KEY` — kunci Google GenAI (warisan template)
- `APP_URL` — URL aplikasi saat runtime

### `.gitignore`
Mengabaikan: `node_modules/`, `.next/`, `coverage/`, `.DS_Store`, `*.log`, seluruh `.env*` kecuali `.env.example`.

### `metadata.json`
Metadata applet AI Studio: nama `"Jasa Tukang Taman"`, capability `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`, tanpa frame permissions.

### `README.md`
README standar template AI Studio: cara `npm install`, set `GEMINI_API_KEY`, `npm run dev`. Link ke https://ai.studio/apps/806d2799-3bfd-4be3-ab65-bf5b4a3cbe03.

### `.vercel/` (output)
Output build dari `next-on-pages` sebelumnya. Berisi `project.json` (metadata project Vercel/Cloudflare), `output/builds.json` (manifest build), `output/config.json` (konfigurasi routing), `output/diagnostics/` (log diagnostik), `output/functions/` (edge functions per-route: `_not-found`, `api/contact`, `area-layanan/[city]`, `blog/[slug]`, `gaya/[slug]`, `katalog/[slug]`, `layanan/[slug]`, `portofolio.rsc`, masing-masing dengan `.prerender-config.json` & `.prerender-fallback.html`), serta `output/static/` (HTML/RSC/CSS/Fonts ter-prerender dan chunk webpack).

---

## 5. Lapisan Data (`data/`)

### `data/content.ts` (503 baris)
Basis data statis untuk **14 halaman konten dinamis**.

**Antarmuka ekspor:**
- `ProcessStep` — `{ title: string; desc: string }`
- `PriceItem` — `{ item: string; price: string; unit: string }`
- `FaqItem` — `{ q: string; a: string }`
- `ContentPageData` — `{ slug; title; subtitle; image; content; benefits; detailedContent?; processSteps?; pricingTable?; faq? }`

**Konstanta ekspor:** `siteData = { layanan: [...5], gaya: [...5], katalog: [...4] }`

**Isi `layanan` (5):**
| slug | judul |
|---|---|
| `jasa-pembuatan-taman` | Jasa Pembuatan Taman |
| `pembuatan-kolam-ikan-water-feature` | Pembuatan Kolam Ikan & Water Feature |
| `pembuatan-gazebo-saung` | Pembuatan Gazebo / Saung |
| `pemasangan-batu-alam-lantai-carport` | Pemasangan Batu Alam Lantai & Carport |
| `perawatan-renovasi-taman` | Perawatan & Renovasi Taman |

**Isi `gaya` (5):**
| slug | judul |
|---|---|
| `taman-minimalis-modern` | Taman Minimalis Modern |
| `vertical-garden` | Vertical Garden |
| `taman-kering-zen` | Taman Kering / Zen |
| `roof-garden` | Roof Garden (Taman Atap) |
| `taman-tropis` | Taman Tropis |

**Isi `katalog` (4):**
| slug | judul |
|---|---|
| `jenis-rumput` | Jenis Rumput |
| `pohon-peneduh-ikonik` | Pohon Peneduh Ikonik |
| `tanaman-hias-bunga` | Tanaman Hias Bunga |
| `komponen-hardscape` | Komponen Hardscape |

**Hubungan:** Dikonsumsi oleh `app/layanan/[slug]/page.tsx`, `app/gaya/[slug]/page.tsx`, `app/katalog/[slug]/page.tsx`. Tipe `ContentPageData` juga di-mirror secara inline di `components/shared/ContentBlock.tsx`.

### `data/cities.ts` (248 baris)
Basis data statis untuk **10 halaman kota** (SEO lokal).

**Antarmuka ekspor:** `CityData` — `{ slug; name; region; title; subtitle; image; content; benefits; detailedContent; localFocus; metaTitle; metaDesc; localProjectHighlight }`

**Konstanta ekspor:** `citiesData: Record<string, CityData>` keyed by slug.

**Kota — Klaster I (Jawa Timur):**
| slug | nama | region |
|---|---|---|
| `surabaya` | Surabaya | Jawa Timur |
| `sidoarjo` | Sidoarjo | Jawa Timur |
| `gresik` | Gresik | Jawa Timur |
| `malang` | Malang | Jawa Timur |
| `pasuruan` | Pasuruan | Jawa Timur |
| `mojokerto` | Mojokerto | Jawa Timur |

**Kota — Klaster II (Bali):**
| slug | nama | region |
|---|---|---|
| `denpasar` | Denpasar | Bali |
| `badung` | Badung | Bali |
| `gianyar` | Gianyar | Bali |
| `ubud` | Ubud (Gianyar) | Bali |

**Hubungan:** Dikonsumsi oleh `app/area-layanan/page.tsx` (dirender per region) dan `app/area-layanan/[city]/page.tsx` (lookup by slug). Juga menjadi sumber slug untuk tautan footer kota dan menu navigasi Header.

---

## 6. Utilitas & Hook (`lib/`, `hooks/`)

### `lib/utils.ts` (6 baris)
Utilitas `cn(...inputs: ClassValue[])` — gabungan `clsx` + `twMerge` ala shadcn. **Diekspor tapi belum diimpor di mana pun** — disediakan untuk konsistensi tooling.

### `hooks/use-mobile.ts` (20 baris)
Hook `useIsMobile(): boolean` — menggunakan `window.matchMedia('(max-width: 768px)')` dengan listener reaktif. **Diekspor tapi belum diimpor di mana pun** — tersedia untuk komponen yang membutuhkan deteksi mobile.

---

## 7. Style Global

### `app/globals.css` (18 baris)
- `@import "tailwindcss"`
- `@theme` block mendefinisikan variabel:
  - `--color-forest: #1A3C34` (hijau tua primer)
  - `--color-sage: #A9C46C` (hijau muda aksen)
  - `--color-cream: #F8F9F4` (latar krem)
  - `--color-charcoal: #2D2D2D` (teks gelap)
  - `--font-sans: var(--font-jakarta)` (Plus Jakarta Sans)
  - `--font-serif: var(--font-playfair)` (Playfair Display)
- Direktif lain menyesuaikan tipografi default

Seluruh styling di komponen lain menggunakan utility class Tailwind yang mereferensikan variabel tema ini (mis. `bg-forest`, `text-sage`, `font-serif`).

---

## 8. Layout & Error Boundary

### `app/layout.tsx` (40 baris)
**Tujuan:** Root layout untuk semua halaman.

**Import:** `next/font/google` (memuat `Plus_Jakarta_Sans` → CSS var `--font-jakarta`; dan `Playfair_Display` → `--font-playfair`), `./globals.css`, dan `components/ScrollProgressBar`.

**Mengekspor:**
- `metadata` global: `{ title, description, keywords, openGraph }` bertema jasa taman.
- Komponen default `RootLayout({ children })`:
  - `<html lang="id">` dengan `scroll-smooth` di `<body>`.
  - Menerapkan CSS variable font ke body dan tag heading.
  - Merender `<ScrollProgressBar />` di paling atas, lalu `{children}`.

### `app/error.tsx` (74 baris)
**Tujuan:** Global error boundary (wajib client component).

**Import:** `motion/react`, `lucide-react` (`AlertTriangle`, `RefreshCw`, `Home`), `next/link`.

**Mengekspor:** `ErrorBoundary({ error, reset })`:
- Kartu animasi (fade + scale) dengan ikon peringatan.
- Menampilkan `error.digest` (jika ada) untuk debugging.
- Dua tombol: **Muat Ulang** (`reset()`) dan **Ke Beranda** (`Link href="/"`).

---

## 9. Halaman App Router (`app/`)

### `app/page.tsx` (103 baris) — Homepage `/`
**Jenis:** Server component.

**Import:** Semua section homepage (`Header`, `HeroSection`, `ServicesSection`, `PortfolioSection`, `Footer`, `FloatingWhatsApp`, `StylesSection`, `TestimonialSlider`, `FaqSection`, `SideNav`, `ContactFormSection`).

**Mengekspor:**
- `metadata` (override): judul/deskripsi/OpenGraph khusus homepage.
- `Home()`: membungkus section dalam `<main>` dengan efek blur background; di akhir body ada `<script type="application/ld+json">` berisi schema `HomeAndConstructionBusiness` (nama, alamat, koordinat, areaServed 10 kota, kontak, jam buka).

### `app/tentang-kami/page.tsx` (94 baris) — `/tentang-kami`
**Jenis:** Client component.

**Import:** `motion/react`, `next/image`, `Header`, `Footer`, `FloatingWhatsApp`, `lucide-react` (`Leaf`, `MapPin`, `Target`, `ShieldCheck`), `ProcessSection`, `TeamSection`, `ContactFormSection`.

**Konten:** Hero dengan statistik "10+ tahun" & "150+ proyek", 3 kartu nilai inti (Akurasi Desain, Kualitas Premium, Pengetahuan Lokal), lalu `ProcessSection` → `TeamSection` → `ContactFormSection` → `Footer` + `FloatingWhatsApp`.

### `app/portofolio/page.tsx` (74 baris) — `/portofolio`
**Jenis:** Client component.

**Import:** `motion/react`, `next/image`, `next/link`, `Header`, `Footer`, `FloatingWhatsApp`, `lucide-react` (`ArrowRight`).

**Konten:** 3 kartu kategori portofolio (Rumah Tinggal 85, Perkantoran & Pabrik 32, Area Publik & Cafe 47), masing-masing anchor ke `#konsultasi` di homepage.

### `app/syarat-ketentuan/page.tsx` (95 baris) — `/syarat-ketentuan`
**Jenis:** Server component.

**Import:** `Header`, `Footer`, `FloatingWhatsApp`, `lucide-react` (`Shield`, `FileText`, `CheckCircle2`).

**Mengekspor:** `metadata` statis (SEO).

**Konten:** 5 klausul bernomor: Ketentuan Umum, Proses Survei & Desain, Pembayaran & DP, Masa Garansi (30 hari), Hak Cipta Desain.

### `app/kebijakan-privasi/page.tsx` (86 baris) — `/kebijakan-privasi`
**Jenis:** Server component.

**Import:** `Header`, `Footer`, `FloatingWhatsApp`, `lucide-react` (`Shield`, `Lock`, `CheckCircle2`).

**Mengekspor:** `metadata` statis (SEO).

**Konten:** 4 klausul bernomor: Pengumpulan Data, Penggunaan Data, Kerahasiaan & Keamanan, Dokumentasi Gambar & Video.

### `app/layanan/[slug]/page.tsx` (98 baris) — `/layanan/[slug]`
**Jenis:** Async server component, `runtime = "edge"`.

**Import:** `siteData` dari `@/data/content`; `PageHero`, `ContentBlock`, `Header`, `Footer`, `FloatingWhatsApp`; `notFound` dari `next/navigation`; `Link`; `ArrowRight`.

**Mengekspor:**
- `generateMetadata({ params })`: judul/deskripsi/keyword/OpenGraph dinamis dari `siteData.layanan`, fallback "Layanan Tidak Ditemukan".
- `LayananDetail({ params })`:
  - `notFound()` bila slug tidak ditemukan.
  - Breadcrumb (Layanan → judul).
  - `<PageHero badge="Layanan Utama" ... />`
  - `<ContentBlock content, benefits, detailedContent, processSteps, pricingTable, faq />`
  - CTA card forest-green dengan tombol ke WhatsApp + ke `/katalog/pohon-peneduh-ikonik`.

### `app/gaya/[slug]/page.tsx` (98 baris) — `/gaya/[slug]`
**Jenis:** Async server component, `runtime = "edge"`. Struktur identik dengan halaman layanan.

**Perbedaan:** Membaca `siteData.gaya`, badge `"Inspirasi Gaya"`, CTA link WhatsApp + `/layanan/jasa-pembuatan-taman`.

### `app/katalog/[slug]/page.tsx` (99 baris) — `/katalog/[slug]`
**Jenis:** Async server component, `runtime = "edge"`. Struktur identik dengan halaman layanan.

**Perbedaan:** Membaca `siteData.katalog`, badge `"Katalog Material"`, CTA link WhatsApp + `/layanan/jasa-pembuatan-taman`.

### `app/area-layanan/page.tsx` (214 baris) — `/area-layanan`
**Jenis:** Server component.

**Import:** `next/link`, `next/image`, `Header`, `Footer`, `FloatingWhatsApp`, `lucide-react`, `citiesData` dari `@/data/cities`.

**Mengekspor:** `metadata` statis (SEO).

**Konten:**
- Hero dengan feature grid "Survei Gratis / Garansi 30 Hari / Badan Usaha Resmi".
- Dua section region (Klaster I: Jawa Timur, Klaster II: Bali) yang me-render kartu kota dari `citiesData` di-filter by `region`.
- Banner CTA akhir dengan alamat CV. SARIJAYA MAKMUR & tautan WhatsApp.

### `app/area-layanan/[city]/page.tsx` (340 baris) — `/area-layanan/[city]`
**Jenis:** Async server component, `runtime = "edge"`. **Halaman SEO terpenting.**

**Import:** `next/link`, `next/image`, `notFound`; `Header`, `Footer`, `FloatingWhatsApp`, `QuotationEstimator`, `DynamicFaq`; banyak ikon `lucide-react`; `citiesData` dari `@/data/cities`.

**Mengekspor:**
- `generateMetadata({ params })`: membaca `citiesData[city]`, menghasilkan `metaTitle`/`metaDesc`/keywords + OpenGraph 1200×600.
- `CityDetail({ params })`:
  - `notFound()` bila slug tidak ada.
  - Dua JSON-LD inline: `HomeAndConstructionBusiness` (skema bisnis lokal) + `FAQPage` (3 Q&A hardcoded).
  - Sections:
    1. `<Breadcrumb />` (Beranda → Area Layanan → kota).
    2. Hero dengan badge region, "Garansi Resmi CV. SJM", "5.0 Rating", judul, subjudul, gambar dengan overlay `localProjectHighlight`.
    3. Layout 2 kolom: konten (paragraf + `localFocus` callout) + sticky side card (benefits + WhatsApp CTA ke David Mauluddin).
    4. `<QuotationEstimator />`.
    5. `<DynamicFaq />`.
    6. Forest CTA banner dengan link WhatsApp personal.
    7. Grid saudara-kota (filter `citiesData` by `region` excluding current).

### `app/blog/page.tsx` (77 baris) — `/blog`
**Jenis:** Server component.

**Import:** `next/image`, `Header`, `Footer`, `FloatingWhatsApp`, `next/link`, `lucide-react` (`ArrowRight`).

**Mengekspor:** `metadata` statis (SEO).

**Konten:** 4 kartu artikel hardcoded dalam grid 2-kolom, masing-masing menaut ke `/blog/[slug]`.

### `app/blog/[slug]/page.tsx` (255 baris) — `/blog/[slug]`
**Jenis:** Async server component, `runtime = "edge"`.

**Import:** `Header`, `Footer`, `FloatingWhatsApp`, `next/link`, `next/image`, `notFound`; `lucide-react` (`ArrowLeft`, `Clock`, `User`, `Tag`, `Calendar`, `CheckCircle2`, `MessageCircle`).

**Mengekspor:**
- `generateMetadata({ params })`: judul/deskripsi/keyword dari `BLOG_DATA[slug]`.
- `BlogDetail({ params })`:
  - `notFound()` bila slug tidak ada.
  - Breadcrumb balik ke blog.
  - Meta header: kategori / tanggal / read-time / author.
  - Hero image.
  - Body 2 kolom: paragraf + sticky "Rangkuman Penting" (key takeaways + WhatsApp CTA).
  - Forest CTA banner akhir.

**Data internal `BLOG_DATA: Record<string, ArticleData>`** didefinisikan inline di file ini (tidak di `data/`). Slug:
| slug | judul |
|---|---|
| `biaya-pembuatan-taman-per-meter-2026` | Biaya Pembuatan Taman Per Meter 2026 |
| `tips-merawat-taman-musim-kemarau` | Tips Merawat Taman Musim Kemarau |
| `memilih-jenis-rumput-lahan-teduh` | Memilih Jenis Rumput untuk Lahan Teduh |
| `inspirasi-desain-taman-bawah-tangga` | Inspirasi Desain Taman Bawah Tangga |

---

## 10. Komponen (`components/`)

### `components/ScrollProgressBar.tsx` (19 baris)
Indikator progres scroll tetap di atas. Import: `motion/react` (`motion`, `useScroll`, `useSpring`).
- Fixed bar dengan `scaleX` dianimasikan via `useSpring` dari `useScroll`.
- **Dipakai oleh:** `app/layout.tsx`.

### `components/SideNav.tsx` (65 baris)
Navigasi dot vertikal di sisi kanan (desktop saja, `hidden xl:flex`). Import: `react` (`useEffect`, `useState`), `motion/react`, `next/link`.
- Mendengarkan scroll untuk menentukan section aktif (threshold viewport).
- 5 dot untuk section `beranda`, `layanan`, `gaya`, `portofolio`, `kontak`.
- Hover memunculkan label section.
- **Dipakai oleh:** `app/page.tsx`.

### `components/Header.tsx`
Header utama dengan mega-menu (client component). Import: `motion/react`, `react` (`useState`), `next/link`, banyak ikon `lucide-react`.

- Navbar floating fixed top-center (max-w-5xl) dengan frosted-glass backdrop.
- Logo menaut ke `/`.
- **5 dropdown mega-menu** (sebelumnya 4 mega-menu + 3 direct link):
  - **Layanan** (Desain & Konstruksi / Hardscape & Pemeliharaan)
  - **Konsep** (Konsep Modern & Minimalis / Konsep Spesifik & Eksotis)
  - **Katalog** (Flora & Vegetasi / Komponen Struktural)
  - **Area** (Jawa Timur / Provinsi Bali)
  - **Perusahaan** (Profil & Jejak Karya — Tentang Kami + Portofolio; Edukasi & Inspirasi — Blog)
- CTA "Konsultasi Gratis" → `/#kontak`.
- Mobile menu dengan accordion untuk setiap mega-menu.

**Data internal `menuData`** — objek kategori dengan tautan hardcoded ke dynamic routes (layanan/gaya/katalog/city/perusahaan). **Tidak memakai `data/cities.ts` secara langsung**, tapi slug-nya cocok.

**Dipakai oleh:** `app/page.tsx`, `app/tentang-kami`, `app/portofolio`, `app/blog`, `app/blog/[slug]`, `app/area-layanan`, `app/area-layanan/[city]`, `app/layanan/[slug]`, `app/gaya/[slug]`, `app/katalog/[slug]`, `app/syarat-ketentuan`, `app/kebijakan-privasi`.

### `components/Footer.tsx` (125 baris)
Footer global (server component). Import: `next/link`, `lucide-react` (`Leaf`, `MapPin`, `Phone`, `Mail`, `Instagram`, `Facebook`).

- Grid 4-kolom: brand block, **Layanan Utama**, **Inspirasi & Katalog**, **Hubungi Kami** (alamat, telepon, 10 tautan kota).
- Bottom bar: copyright + tautan Syarat & Ketentuan + Kebijakan Privasi.

**Dipakai oleh:** Semua halaman besar.

### `components/HeroSection.tsx` (105 baris)
Hero homepage. Import: `motion/react`, `next/image`, `next/link`, `ArrowRight`.

- 2 kolom: kiri — badge tahun dinamis, headline serif besar, paragraf, 1 tombol CTA. Kanan — grid 2×2 berisi 2 gambar portofolio + kartu "150+ Proyek Selesai" + kartu "4.9★ Rating Google".

**Dipakai oleh:** `app/page.tsx`.

### `components/ServicesSection.tsx` (93 baris)
Grid 5 kartu "Layanan Unggulan". Import: `motion/react`, `next/image`, ikon `lucide-react` (`Trees`, `Droplets`, `Tent`, `Layers`, `Scissors`).

- Anchor `id="layanan"`.
- Data `services` internal (5 item) cocok dengan `data/content.ts` `layanan`.

**Dipakai oleh:** `app/page.tsx`.

### `components/StylesSection.tsx` (72 baris)
Grid 4 kartu "Inspirasi Gaya" di latar gelap forest. Import: `motion/react`, `next/image`, ikon `lucide-react` (`MoveRight`, `Sparkles`, `Building2`, `Palmtree`, `Mountain`).

- Anchor `id="gaya"`.
- Data `styles` internal (4 item).

**Dipakai oleh:** `app/page.tsx`.

### `components/PortfolioSection.tsx` (102 baris)
Galeri portofolio masonry filterable. Import: `react` (`useState`), `motion/react`, `next/image`, ikon `lucide-react` (`LayoutGrid`, `Home`, `Briefcase`, `MapPin`, `Store`).

- Anchor `id="portofolio"`.
- Data `projects` internal (6 proyek) + `categories` (Semua, Rumah Tinggal, Perkantoran, Area Publik, Komersial).
- Tombol filter dengan `AnimatePresence` + `layout` untuk reordering mulus.

**Dipakai oleh:** `app/page.tsx`.

### `components/TestimonialSlider.tsx` (101 baris)
Slider testimoni auto-rotate. Import: `react` (`useState`, `useEffect`), `motion/react`, `lucide-react` (`ChevronLeft`, `ChevronRight`, `Quote`), `next/image`.

- 3 testimoni (Bpk. Budi, Ibu Amanda, Bpk. Anton), auto-advance 5 detik, tombol prev/next manual, avatar + role.

**Dipakai oleh:** `app/page.tsx`.

### `components/FaqSection.tsx` (69 baris)
Akordeon FAQ homepage. Import: `react` (`useState`), `motion/react`, `lucide-react` (`Plus`, `Minus`).

- 4 Q&A hardcoded (harga, garansi, durasi, paket perawatan).

**Dipakai oleh:** `app/page.tsx`.

### `components/ContactFormSection.tsx`
Formulir kontak lengkap dengan validasi, honeypot, dan animasi (client component). Import: `react` (`useState`), `motion/react`, ikon `lucide-react` (`Send`, `MapPin`, `Phone`, `MessageCircle`, `CheckCircle2`, `AlertCircle`, `RefreshCw`).

- Anchor `id="kontak"`.
- 2 kolom: kiri — kartu alamat/telepon/keterangan respons; kanan — kartu putih berisi form.
- Field: `name`, `phone`, `service` (select), `message`.
- Floating-label inputs.
- Validasi real-time (regex phone `^(08|\+628)[0-9]{8,13}$`, message min 10 char, dll).
- Honeypot tersembunyi: field `address_verification`.
- Toast notifikasi animasi.
- Submit handler memanggil `window.open('https://wa.me/6282131472864?text=...', '_blank')` dengan pesan berformat lengkap (nama, WhatsApp klien, layanan, cerita proyek). Tidak lagi mengirim ke email/API.
- Success overlay hijau WhatsApp dengan tombol reset.
- Nomor telepon `082131472864` di-render sebagai tautan `wa.me` (klik untuk chat langsung dengan owner).

**Dipakai oleh:** `app/page.tsx`, `app/tentang-kami`.

### `components/ProcessSection.tsx` (51 baris)
Timeline 4 langkah "Proses Kerja Terstruktur". Import: `motion/react`, ikon `lucide-react` (`ClipboardList`, `PenTool`, `Sprout`, `CheckCircle`).

- 4 kartu: Konsultasi & Survei, Desain & Rencana, Eksekusi Proyek, Serah Terima & Garansi.
- Setiap kartu memiliki nomor besar translucent "01"–"04".

**Dipakai oleh:** `app/tentang-kami`.

### `components/TeamSection.tsx` (55 baris)
Kartu anggota tim. Import: `motion/react`, `next/image`.

- 4 anggota hardcoded (Andi Saputra, Budi Hartono, Citra Lestari, Deni Ardiansyah) dengan potret picsum.

**Dipakai oleh:** `app/tentang-kami`.

### `components/TrustSection.tsx` (42 baris)
Section "Dipercaya oleh Klien Terbaik". Import: `motion/react`.

- 3 kartu testimoni (data inline, redaksi sedikit berbeda dari `TestimonialSlider`): Bpk. Budi, Bpk. Ahmad, Bpk. Anton.
- **Didefinisikan tapi tidak diimpor di mana pun** — cadangan untuk versi homepage sebelumnya atau penggunaan di masa depan.

### `components/FloatingWhatsApp.tsx` (32 baris)
Tombol WhatsApp mengambang kanan-bawah dengan tooltip. Import: `motion/react`, `MessageCircle`.

- Tooltip berdenyut "Tanya Biaya Per Meter?".
- Tombol lingkaran hijau animasi menaut ke `https://wa.me/6282131472864`.

**Dipakai oleh:** Semua halaman besar.

---

## 11. Komponen Bersama (`components/shared/`)

### `components/shared/Breadcrumb.tsx` (32 baris)
Breadcrumb reusable dengan frosted-glass pill. Import: `next/link`, `ChevronRight`, `Home`.

- **Props:** `items: { label: string; href?: string }[]`
- Selalu dimulai dengan ikon Home menaut ke `/`, lalu tiap item dipisah `ChevronRight`; item terakhir tidak memiliki link.

**Dipakai oleh:** `components/shared/PageHero.tsx` (secara tidak langsung dipakai oleh 3 halaman detail dinamis).

### `components/shared/PageHero.tsx` (65 baris)
Hero parallax animasi untuk halaman konten. Import: `react` (`useRef`), `next/image`, `motion/react` (`useScroll`, `useTransform`), `./Breadcrumb`.

- **Props:** `title`, `subtitle`, `image`, `badge?` (default `"Layanan TukangTamannn.com"`), `breadcrumbItems?`.
- Section full-width 60vh dengan gambar latar parallax (y=0%→40%), overlay hijau tua + gradien krem, badge + judul + subjudul ter-center.

**Dipakai oleh:** `app/layanan/[slug]`, `app/gaya/[slug]`, `app/katalog/[slug]`.

### `components/shared/ContentBlock.tsx` (236 baris)
Merender body konten kaya untuk halaman layanan/gaya/katalog. Import: `motion/react`, `react` (`useState`), ikon `lucide-react` (`CheckCircle2`, `HelpCircle`, `ArrowRight`, `Tag`, `ClipboardList`, `Plus`, `Minus`, `Sparkles`, `Info`).

- **Props:** `content`, `benefits`, `detailedContent?`, `processSteps?`, `pricingTable?`, `faq?`. Antarmuka didefinisikan inline dan cocok dengan `data/content.ts` `ContentPageData`.
- 5 section berurutan:
  1. **Ikhtisar & Detail Informasi** — kartu putih berisi paragraf `content` + paragraf `detailedContent`.
  2. **Keunggulan & Nilai Tambah** — grid 2-kolom kartu benefit.
  3. **Bagaimana Kami Bekerja** — timeline bernomor (hanya jika `processSteps` non-kosong).
  4. **Estimasi Biaya & Spesifikasi** — tabel harga dengan disclaimer "Harga acuan awal".
  5. **Pertanyaan Sering Diajukan** — akordeon (hanya jika `faq` non-kosong), state `activeFaq`.

**Dipakai oleh:** `app/layanan/[slug]`, `app/gaya/[slug]`, `app/katalog/[slug]`.

### `components/shared/DynamicFaq.tsx` (192 baris)
Widget FAQ searchable + filter kategori (untuk halaman kota). Import: `react` (`useState`), `motion/react`, ikon `lucide-react` (`Search`, `HelpCircle`, `ChevronDown`, `ChevronUp`, `CheckCircle`, `Tag`, `ShieldAlert`, `SlidersHorizontal`).

- **Data internal `FAQ_LIST`:** 8 Q&A dalam 4 kategori — `umum` (u1, u2), `biaya` (b1, b2), `garansi` (g1, g2), `teknis` (t1, t2).
- Top bar: input search (filter Q dan A) + 5 tab kategori (Semua FAQ, Proses & Umum, Harga & RAB, Garansi, Teknis & Tanaman).
- Setiap FAQ adalah akordeon dengan `AnimatePresence`.

**Dipakai oleh:** `app/area-layanan/[city]/page.tsx`.

### `components/shared/QuotationEstimator.tsx` (698 baris — file sumber terbesar)
Estimator biaya interaktif dengan quotation PDF yang dapat dicetak (pusat konversi).

- **Import:** `react` (`useState`, `useRef`, `useEffect`), `motion/react`, ikon `lucide-react` (`Calculator`, `Printer`, `FileText`, `Check`, `Leaf`, `Waves`, `Layers`, `Home`, `User`, `Phone`, `Calendar`, `Sparkles`, `Info`).
- **State:** pilihan layanan (`taman`/`kolam`/`gazebo`/`carport`), ukuran, modifier (jenis rumput, pohon Pule, irigasi; kedalaman kolam, filter, jumlah air mancur; material gazebo; jenis batu carport), nama/phone klien, quote ID/date.
- **Logika `getCalculatedItems()`:** membangun `QuotationItem[]` terinci (`name`/`qty`/`unit`/`rate`/`total`); menghitung `subtotal`, `discount` (5% jika > Rp 15M), dan `totalCost`.
- **Mode render:**
  1. **Tampilan layar (`print:hidden`):** layout 2-kolom — kiri: form 3-langkah (personalisasi, pilih layanan, atur dimensi & material dengan subform kondisional per layanan); kanan: kartu hijau-tua "TukangTamannn.com CV. SARIJAYA MAKMUR" dengan preview itemized live + total + tombol **Cetak Quotation Resmi (PDF)**.
  2. **Tampilan cetak (`hidden print:block`):** letterhead A4 lengkap "SURAT PENAWARAN HARGA" dengan kop CV. SARIJAYA MAKMUR, blok "Kepada Yth" (nama/phone klien), nomor dokumen `SJM/Q/2026/{quoteId}`, tabel itemized 4-kolom (Deskripsi, Volume, Harga Satuan, Jumlah Total), baris subtotal/discount/total, daftar "Syarat & Ketentuan Penawaran", dan blok tanda tangan "DAVID MAULUDDIN ST., Direktur Utama & Owner".

**Dipakai oleh:** `app/area-layanan/[city]/page.tsx`.

---

## 12. Dokumentasi Internal (`docs/`)

### `docs/SEO_PLAN.md` (84 baris)
Blueprint strategi SEO (tertanggal 30 Juni 2026). Mendefinisikan target kota di Jawa Timur & Bali beserta keyword primer/sekunder. Menguraikan SEO teknis (skema JSON-LD LocalBusiness + FAQPage), hierarki heading semantik, optimasi gambar, dan grafik internal linking. Implementation timeline menunjuk modifikasi di `app/page.tsx`, `app/area-layanan/[city]/page.tsx`, `app/area-layanan/page.tsx`, dan `components/Footer.tsx`.

### `docs/PAGES_PLAN.md` (137 baris)
Arsitektur konten/halaman. Mendaftarkan 14 halaman dinamis (5 layanan, 5 gaya, 4 katalog) dengan slug-nya. Mendefinisikan layout 7-bagian (Page Hero, Narasi Detail, Nilai Tambah, Process Steps, Estimasi Biaya, FAQ, CTA) — disebut "anti-thin-content". Menetapkan antarmuka TypeScript `PageDetail` (cocok dengan `ContentPageData` di `data/content.ts`). Juga memuat info hukum/regional (Juni 2026): area layanan Jawa Timur + Bali, identitas CV. SARIJAYA MAKMUR, owner David Mauluddin ST., WhatsApp 082131472864, alamat Jl Green Mansion Safir blok 16 Sidoarjo 61253.

### `docs/CODEBASE.md`
File ini — inventarisasi menyeluruh seluruh basis kode.

---

## 13. Hubungan & Alur Data

### Model Routing
- **5 halaman statis:** `/`, `/tentang-kami`, `/portofolio`, `/syarat-ketentuan`, `/kebijakan-privasi`.
- **3 list dinamis:** `/area-layanan`, `/blog`, plus hub `/blog`.
- **3 keluarga detail dinamis:** `/layanan/[slug]`, `/gaya/[slug]`, `/katalog/[slug]` (5+5+4 = 14 halaman).
- **1 halaman kota dinamis:** `/area-layanan/[city]` (10 halaman).
- **1 halaman blog detail:** `/blog/[slug]` (4 artikel hardcoded).
- **Halaman error global:** `app/error.tsx`.
- _Tidak ada API route._ Formulir kontak mengirim pesan langsung ke WhatsApp via `wa.me/6282131472864?text=...`.

### Alur Data
1. **`data/content.ts` →** `app/{layanan,gaya,katalog}/[slug]/page.tsx` → dirender via `PageHero` + `ContentBlock`.
2. **`data/cities.ts` →** `app/area-layanan/page.tsx` (list per region) + `app/area-layanan/[city]/page.tsx` (detail dengan `QuotationEstimator` + `DynamicFaq`).
3. **`data/cities.ts` →** juga sumber slug untuk tautan footer kota (inline) dan menu navigasi Header (secara konseptual; Header mendefinisikan `menuData` sendiri tetapi slug-nya cocok).
4. **Data blog:** `BLOG_DATA` didefinisikan inline di `app/blog/[slug]/page.tsx` (tidak ada file `data/blog.ts`).
5. **Data portofolio/testimoni/layanan/FAQ homepage:** didefinisikan inline di masing-masing komponen (tidak ada file `data/` khusus).
6. **Formulir kontak:** `components/ContactFormSection.tsx` memvalidasi input lalu membuka `https://wa.me/6282131472864?text=...` di tab baru. Pesan terformat lengkap dengan nama, nomor, layanan, dan cerita proyek klien. Tidak ada backend, tidak ada email — semuanya terjadi di sisi klien.

### Pola Komponen
- Trio `PageHero` + `ContentBlock` adalah template standar untuk 14 halaman layanan/gaya/katalog.
- `Header` + `Footer` + `FloatingWhatsApp` digunakan di setiap halaman.
- `ScrollProgressBar` dipasang sekali di `RootLayout`.
- `SideNav` hanya di homepage.

### Strategi SEO
- Halaman detail menggunakan `generateMetadata` untuk judul/deskripsi/keyword/OpenGraph dinamis.
- Homepage dan halaman kota menyuntikkan JSON-LD terstruktur (`HomeAndConstructionBusiness` + `FAQPage` di halaman kota).
- Heading semantik (`<h1>`–`<h3>`) digunakan konsisten dengan font Playfair Display untuk aksen serif.
- Semua gambar menggunakan URL `https://picsum.photos/seed/{name}/{w}/{h}` (satu-satunya `remotePattern` whitelisted di `next.config.ts`), dengan `referrerPolicy="no-referrer"`.

### Pola CTA Kontak
Seluruh funnel konversi mengarah ke WhatsApp:
- **Formulir kontak:** `components/ContactFormSection.tsx` membuka `wa.me/6282131472864?text=<pesan terformat>`.
- **Tombol CTA** (di banyak halaman): `https://wa.me/6282131472864?text=<konteks halaman>` (pre-filled dengan konteks spesifik halaman).
- **Floating button:** `components/FloatingWhatsApp.tsx` (`/wa.me/6282131472864`).
- **Nomor telepon** di Footer, ContactFormSection, QuotationEstimator (kop surat cetak), dan DynamicFaq (jawaban FAQ) di-render sebagai tautan `wa.me` yang dapat diklik.

Tidak ada backend, tidak ada SMTP, tidak ada API route — semuanya via `wa.me`.

---

## 14. Deployment & Environment

### Target Deploy
**Cloudflare Pages** melalui adapter `@cloudflare/next-on-pages`.

### Konfigurasi Build Cloudflare
- **Framework preset:** None
- **Build command:** `npm run pages:build` (menjalankan `next build` lalu adapter next-on-pages)
- **Output directory:** `.vercel/output/static`
- **Compatibility flag:** `nodejs_compat` (tidak wajib lagi, tapi direkomendasikan untuk kompatibilitas paket).
- **Bindings:** _Tidak ada._ Proyek ini tidak lagi menggunakan Cloudflare Email Workers atau binding lainnya — semua CTA mengarah ke `wa.me`.

### Runtime Edge
Sebagian besar halaman detail (layanan, gaya, katalog, kota, blog) mendeklarasikan `export const runtime = "edge"`, yang krusial untuk Cloudflare Pages. Halaman statis (about, portfolio, legal) tidak mendeklarasikan runtime, sehingga di-render menggunakan runtime default (Node SSR di build, di-cache sebagai prerender HTML).

### Variabel Environment
Lihat `.env.example`. Catatan: `GEMINI_API_KEY` adalah warisan template AI Studio — _tidak dipakai di source code saat ini_.

### Konfigurasi `next.config.ts` yang Relevan
- `output: 'standalone'` — menghasilkan build self-contained.
- `transpilePackages: ['motion']` — agar `motion` (Framer Motion) di-bundle dengan benar.
- `images.remotePatterns: [{ hostname: 'picsum.photos' }]` — host gambar placeholder satu-satunya.
- `eslint.ignoreDuringBuilds: true` — ESLint tidak memblokir build.
- `webpack` watcher dimatikan ketika `DISABLE_HMR=true` (mode AI Studio).

---

## 15. Catatan Pemeliharaan

### Komponen Orphan (Didefinisikan Tapi Tidak Digunakan)
- `components/TrustSection.tsx` — testimonial section tidak diimpor di mana pun.
- `lib/utils.ts` — `cn()` utility belum diimpor.
- `hooks/use-mobile.ts` — `useIsMobile()` hook belum diimpor.

Komponen-komponen ini kemungkinan merupakan _reserved utilities_ untuk iterasi berikutnya.

### Dependensi yang Tidak Digunakan di Source
- `@google/genai` — warisan template AI Studio.
- `@hookform/resolvers` — terpasang tapi tidak ada form yang memakai react-hook-form.
- `firebase-tools` (dev) — warisan template.
- `class-variance-authority` (prod) — diimpor secara teori untuk variant API, tetapi belum dipakai di komponen manapun.

### Konsistensi
- Path alias `@/*` digunakan secara konsisten (mis. `@/data/content`, `@/data/cities`).
- Ikon `lucide-react` diimpor secara named imports.
- Komponen client secara eksplisit dinyatakan (dengan `"use client"`) ketika memakai hooks/state.
- Edge runtime dideklarasikan hanya pada halaman detail dinamis yang membutuhkannya.

### Halaman Aktif Ringkasan
| Path | Tipe | Sumber Data | Edge? |
|---|---|---|---|
| `/` | Statis | inline di `app/page.tsx` | Tidak |
| `/tentang-kami` | Statis | inline | Tidak |
| `/portofolio` | Statis | inline | Tidak |
| `/syarat-ketentuan` | Statis | inline | Tidak |
| `/kebijakan-privasi` | Statis | inline | Tidak |
| `/area-layanan` | Statis | `data/cities.ts` | Tidak |
| `/area-layanan/[city]` | Dinamis | `data/cities.ts` | Ya |
| `/layanan/[slug]` | Dinamis | `data/content.ts` (`layanan`) | Ya |
| `/gaya/[slug]` | Dinamis | `data/content.ts` (`gaya`) | Ya |
| `/katalog/[slug]` | Dinamis | `data/content.ts` (`katalog`) | Ya |
| `/blog` | Statis | inline 4 artikel | Tidak |
| `/blog/[slug]` | Dinamis | `BLOG_DATA` inline | Ya |
| `/api/contact` | _Dihapus_ | — | — | Formulir kini mengirim via `wa.me/6282131472864?text=...` |

### Saran Tindak Lanjut (untuk Pertimbangan)
- Refactor `data/cities.ts` & `data/content.ts` agar tipenya diekspor dari satu modul bersama untuk konsistensi dengan `components/shared/ContentBlock.tsx` (yang saat ini menduplikasi interface).
- Pindahkan `BLOG_DATA` dari `app/blog/[slug]/page.tsx` ke `data/blog.ts` untuk konsistensi dengan `data/content.ts`.
- Hapus atau pakai dependensi yang tidak digunakan (`@google/genai`, `@hookform/resolvers`, `class-variance-authority`, `TrustSection`, `useIsMobile`, `cn`).
- Konsolidasikan `menuData` di `Header.tsx` agar memakai `citiesData` & `siteData` (mengurangi duplikasi slug).

---

_Dokumen ini dihasilkan berdasarkan inventarisasi statis seluruh file di repositori pada 1 Juli 2026._
