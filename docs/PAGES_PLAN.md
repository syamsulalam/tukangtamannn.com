# Rencana Pengembangan Halaman & Konten (PAGES_PLAN.md)
**Proyek:** TukangTamannn.com  
**Tujuan:** Menyediakan konten yang mendalam, kaya, informatif, dan tidak "thin content" untuk 14 halaman utama dari Mega Menu (5 Layanan, 5 Gaya Taman, 4 Katalog Material/Vegetasi).

---

## 1. Arsitektur Informasi & Pemetaan Slug

Setiap halaman diakses secara dinamis melalui rute:
- **Layanan:** `/layanan/[slug]`
- **Gaya Taman:** `/gaya/[slug]`
- **Katalog:** `/katalog/[slug]`

### Daftar Halaman & Slug:
1. **Layanan Pembuatan & Perawatan:**
   * `/layanan/jasa-pembuatan-taman` (Pembuatan Taman Premium)
   * `/layanan/pembuatan-kolam-ikan-water-feature` (Kolam Ikan & Water Feature)
   * `/layanan/pembuatan-gazebo-saung` (Pembuatan Gazebo & Saung)
   * `/layanan/pemasangan-batu-alam-lantai-carport` (Batu Alam & Lantai Carport)
   * `/layanan/perawatan-renovasi-taman` (Perawatan & Renovasi Taman)

2. **Inspirasi Gaya & Desain Taman:**
   * `/gaya/taman-minimalis-modern` (Taman Minimalis Modern)
   * `/gaya/vertical-garden` (Vertical Garden)
   * `/gaya/taman-kering-zen` (Taman Kering / Zen Garden)
   * `/gaya/taman-tropis` (Taman Tropis Rimbun)
   * `/gaya/roof-garden` (Taman Atap / Roof Garden)

3. **Katalog Material & Vegetasi:**
   * `/katalog/jenis-rumput` (Katalog Jenis Rumput)
   * `/katalog/pohon-peneduh-ikonik` (Pohon Peneduh & Ikonik)
   * `/katalog/tanaman-hias-bunga` (Tanaman Hias & Bunga Softscape)
   * `/katalog/komponen-hardscape` (Komponen Hardscape Struktural)

---

## 2. Struktur Layout Konten (Anti Thin-Content)

Agar halaman tidak terkesan seadanya (thin content), kami akan meningkatkan detail halaman dengan komponen-komponen berikut:

1. **Section 1: Page Hero Premium**
   * Background gambar berkualitas tinggi dengan overlay gradien gelap yang elegan.
   * Judul deskriptif besar, sub-judul puitis, badge kategori, dan breadcrumb navigasi.

2. **Section 2: Narasi Detail & Filosofi (Introduction & Deep-Dive)**
   * Blok teks penjelasan mendalam mengenai layanan/gaya/material tersebut.
   * Menjelaskan aspek teknis, estetika, dan kecocokannya dengan iklim tropis Indonesia.

3. **Section 3: Nilai Tambah & Keunggulan Spesifik**
   * Grid interaktif berisi keunggulan utama yang didapat konsumen jika memilih opsi tersebut.

4. **Section 4: Panduan Langkah Demi Langkah / Proses Kerja (Step-by-Step)**
   * Urutan pengerjaan dari konsultasi awal, survei, pembuatan desain 3D, pemilihan material, hingga eksekusi lahan dan garansi.

5. **Section 5: Estimasi Biaya & Spesifikasi Material**
   * Tabel harga transparan (mulai dari kisaran terendah) beserta rincian material standar yang digunakan.

6. **Section 6: FAQ Khusus Halaman (Faq Spesifik)**
   * 3-4 pertanyaan yang paling sering diajukan pelanggan tentang subjek halaman tersebut.

7. **Section 7: Call to Action (CTA) Kontekstual**
   * Form atau tombol pintas langsung terhubung ke WhatsApp dan form utama TukangTamannn.com.

---

## 3. Rencana Pengisian Data Konten (Content Schema)

Kami akan memperluas data di `/data/content.ts` dengan skema berikut:
```typescript
interface PageDetail {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  content: string; // Deskripsi pembuka
  benefits: string[]; // List keunggulan
  
  // Penambahan data anti-thin-content:
  detailedContent: string[]; // Paragraf mendalam tambahan
  processSteps: { title: string; desc: string }[]; // Langkah kerja / pemilihan
  pricingTable: { item: string; price: string; unit: string }[]; // Estimasi biaya
  faq: { q: string; a: string }[]; // Tanya jawab spesifik
}
```

### Rincian Konten Spesifik per Kategori:

#### A. Kategori Layanan
* **Pembuatan Taman Premium:** Proses pengerjaan 3D, pemilihan tanah subur, masa garansi hidup tanaman (1 bulan).
* **Kolam Ikan & Water Feature:** Detail sistem filtrasi 3-4 chamber, kedalaman ideal ikan Koi (minimal 80cm - 150cm), garansi kebocoran kolam (3 bulan).
* **Pembuatan Gazebo & Saung:** Kayu Jati Perhutani / Kayu Kelapa Sulawesi Tua kelas awet I-II, atap sirap/ilalang, pengerjaan konstruksi sistem knock-down.
* **Batu Alam & Lantai Carport:** Metode pengecoran besi sengkret sebelum batu sikat, coating anti lumut, variasi motif carport ampyangan.
* **Perawatan & Renovasi Taman:** Penggalian tanah keras (soil aeration), penggantian rumput botak, pruning pohon pelindung, pemupukan NPK dan kompos higienis.

#### B. Kategori Gaya Taman
* **Taman Minimalis Modern:** Pola geometris, tanaman sansevieria, bromelia, pandan bali, pemanfaatan batu split kelabu.
* **Vertical Garden:** Penggunaan geotextile ganda tahan lapuk, sistem fertigasi otomatis (drip system), tanaman sirih gading, kadaka, cryptanthus.
* **Taman Kering / Zen Garden:** Batu koral sikat salju, pohon pule eksklusif, batu kali besar pembentuk arah, dekorasi lampu batu jepang (toro).
* **Taman Tropis Rimbun:** Tanaman berdaun lebar (monstera, heliconia), pakis haji, soka, kelembapan tinggi, pencahayaan alami berbintik-bintik.
* **Roof Garden:** Lapisan waterproofing membrane bakar torching, drainage cell setebal 2cm, tanah ringan perlit/sekam bakar, tanaman tahan panas ekstrem.

#### C. Kategori Katalog
* **Jenis Rumput:** Perbandingan Gajah Mini vs Gajah Mini Varigata vs Rumput Jepang vs Peking vs Sintetis. Kelebihan masing-masing di bawah sinar matahari.
* **Pohon Peneduh & Ikonik:** Pule (karakter batangnya), Ketapang Kencana (daun payung), Tabebuya (bunga warna-warni), Kamboja Fosil (lekukan purba bernilai seni tinggi).
* **Tanaman Hias & Bunga:** Semak indah (Bromelia, Puring, Soka, Philodendron) untuk gradasi warna taman yang hidup.
* **Komponen Hardscape:** Lampu taman LED warm white, batu koral tabur import, patung pancuran bali, pot terrazzo minimalis.

---

## 4. Rencana Implementasi Teknis (Sudah Direalisasikan)

1. **Perbarui `/data/content.ts`** dengan seluruh konten kaya di atas. *(Selesai)*
2. **Perbarui komponen rendering:**
   * Di `/components/shared/ContentBlock.tsx`, kita akan merender tidak hanya deskripsi awal dan keunggulan, melainkan sub-halaman yang mencakup:
     - **Panduan Langkah Kerja (Interactive Process Steps)**
     - **Tabel Estimasi Harga & Spesifikasi**
     - **FAQ Spesifik topik tersebut** *(Selesai)*
3. **Optimalkan SEO & Navigasi:** Memastikan breadcrumb berjalan lancar, dan tautan di Mega Menu mengarah langsung ke slug yang tepat. *(Selesai)*
4. **Pemberantasan Tautan Mati (`#` Links Elimination):**
   * Membuat halaman `/syarat-ketentuan` (Syarat & Ketentuan Layanan resmi CV. SARIJAYA MAKMUR). *(Selesai)*
   * Membuat halaman `/kebijakan-privasi` (Kebijakan Privasi Klien & perlindungan data). *(Selesai)*
   * Membuat rute dinamis `/blog/[slug]` untuk menyajikan artikel jurnal secara interaktif dan fungsional. *(Selesai)*
   * Mengubah tautan `#kontak` pada seluruh subhalaman menjadi `/#kontak` agar tombol navigasi selalu mengarah tepat ke form konsultasi di beranda. *(Selesai)*

---

## 5. Pembaruan Regional & Legalitas Bisnis (Juni 2026)

* **Perubahan Wilayah Operasional (Area Layanan):**
  Fokus layanan dialihkan secara eksklusif dari wilayah Jabodetabek ke wilayah strategis di **Jawa Timur** (Surabaya, Sidoarjo, Sidoarjo (Sektor Perumahan Green Mansion), Sidoarjo, Gresik, Malang Raya, Mojokerto, Pasuruan) serta **Bali** (Denpasar, Badung, Seminyak, Kuta, Jimbaran, Gianyar, Ubud).
  
* **Identitas Resmi Perusahaan & Hubungan Kontak:**
  Seluruh kegiatan operasional dan kontrak kerja TukangTamannn.com kini berada di bawah naungan resmi:
  * **Nama Usaha / Perusahaan:** CV. SARIJAYA MAKMUR
  * **Pimpinan / Owner:** David Mauluddin, ST.
  * **Kontak WhatsApp Utama:** 082131472864
  * **Alamat Kantor Pusat:** Jl Green Mansion Safir blok 16, Sidoarjo, Indonesia, 61253
