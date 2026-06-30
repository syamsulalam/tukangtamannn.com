# SEO PLAN & BLUEPRINT: DOMINATING LOCAL LANDSCAPING SEARCHES
**Target Entity:** CV. SARIJAYA MAKMUR (TukangTamannn.com)  
**Lead Strategist:** AI Coding Assistant  
**Date:** 30 Juni 2026

---

## 1. STRATEGIC GOAL
Establish **TukangTamannn.com** as the #1 local authority for high-end landscape design, premium garden creation, koi pond installation, and stone carport creation across **Jawa Timur** and **Provinsi Bali**. 

The targeted keywords are selected strictly for **High-Intent Transactional & Commercial Queries** where the searcher is ready to hire a contractor ("ready to buy" or "looking for quote") to ensure high-quality leads and actual business revenue.

---

## 2. HIGH-INTENT TARGET KEYWORDS & INTENT MAPPING

We target two primary regions: **Jawa Timur (East Java)** and **Bali**. Below is the localized keyword map optimized for buyer intent.

### A. Jawa Timur Region

| Target City | Primary Target Keyword | Secondary Intent Keywords | Buyer Intent Context / Sektor Sasaran |
| :--- | :--- | :--- | :--- |
| **Surabaya** | `jasa pembuatan taman surabaya` | `tukang taman surabaya`, `kolam koi surabaya minimalis`, `tukang taman surabaya barat` | Perumahan elite (CitraLand, Graha Famili, Pakuwon, Dharmahusada) & kantor modern. |
| **Sidoarjo** | `tukang taman sidoarjo` | `jasa taman sidoarjo`, `carport batu sikat sidoarjo`, `taman minimalis sidoarjo` | Kawasan residensial modern (Green Mansion, Kahuripan Nirwana, Pondok Jati) - Kantor Pusat. |
| **Gresik** | `tukang taman gresik` | `jasa pembuatan taman gresik`, `vertical garden gresik`, `green barrier industri gresik` | Residensial berkembang (GKB, PPS) & lanskap industri/pabrik penyaring polusi. |
| **Malang** | `jasa pembuatan taman malang` | `tukang taman malang`, `taman villa resort malang`, `dinding relief tebing batu` | Villa peristirahatan (Batu, Songgokerto), perumahan elite (Araya, Permata Jingga). |
| **Pasuruan** | `tukang taman pasuruan` | `jasa taman pasuruan`, `gazebo kayu kelapa pasuruan`, `tukang taman prigen tretes` | Residensial perkotaan, kawasan pabrik PIER, & villa pegunungan di Tretes/Prigen. |
| **Mojokerto** | `tukang taman mojokerto` | `jasa pembuatan taman mojokerto`, `taman etnik majapahit mojokerto`, `batu sikat mojokerto` | Taman bertema etnik (bata merah ekspos) & carport garasi di Pacet & Trowulan. |

### B. Provinsi Bali Region

| Target City/Area | Primary Target Keyword | Secondary Intent Keywords | Buyer Intent Context / Sektor Sasaran |
| :--- | :--- | :--- | :--- |
| **Denpasar** | `jasa tukang taman denpasar` | `tukang taman bali premium`, `taman tropis bali`, `kolam air terjun paras ukir` | Hunian mewah Renon/Sanur, ruko butik, & akomodasi wisata eksklusif. |
| **Badung** | `jasa pembuatan taman badung` | `tukang taman canggu`, `tukang taman seminyak`, `infinity pool decking ulin` | Luxury villas, beach clubs, & expat residences di Canggu, Seminyak, Uluwatu, Nusa Dua. |
| **Gianyar** | `tukang taman gianyar` | `jasa taman gianyar artistik`, `patung paras ukir gianyar`, `water feature bali` | Area berseni tinggi (Sukawati, Payangan), resort kesehatan, & villa meditasi. |
| **Ubud** | `tukang taman ubud` | `jasa taman rainforest ubud`, `yoga deck kayu ulin ubud`, `taman zen ubud` | Wellness resorts, eco-cafes, yoga studios di Sayan, Tegallalang, & Campuhan. |

---

## 3. TECHNICAL SEO BLUEPRINT

To guarantee indexation and high organic ranking, we implement the following technical search engine optimizations:

### A. JSON-LD Structured Data (Schema Markup)
Search engines rely heavily on Structured Data to comprehend local service offerings. We implement two types of schemas:
1. **LocalBusiness / LandscapingService Schema**: Declares CV. SARIJAYA MAKMUR as a registered, legitimate business with contact numbers, price ranges, service areas, and geographical coordinates.
2. **FAQPage Schema**: Generates rich snippets in Google Search results containing dropdown accordion answers, which dramatically boosts Click-Through-Rate (CTR).

### B. Semantic HTML & Heading Hierarchy
- **H1**: Contains the primary high-intent keyword with city name (e.g., `Jasa Tukang Taman Surabaya Premium`).
- **H2**: Focuses on sub-services and local benefits (e.g., `Mengapa Memilih Jasa Pembuatan Taman Kami di Surabaya?`, `Hitung Biaya Penawaran Anda di Surabaya`).
- **H3**: Covers specific localized highlights (e.g., `Benefit Khusus Area Surabaya`).

### C. Image Optimization & Referrer Safeguards
- All remote and generated images utilize modern lazy loading, appropriate aspect ratios, and the `referrerPolicy="no-referrer"` tag to prevent broken asset links under restricted-origin policies.

---

## 4. ON-PAGE SEO & INTERNAL LINKING STRATEGY

An isolated webpage struggles to rank. A robust, highly interconnected web of local content distributes PageRank and assists Google in discovering all sub-pages.

### A. The Internal Linking Graph
1. **Header Navigation (Mega Menu)**: Allows search engines (and human users) to instantly crawl every specific city-landing page from any route via the newly designed "Area" dropdown.
2. **Footer Navigation Directory**: Provides static, persistent text links to all 10 city pages. This guarantees crawlability even if JavaScript is partially deactivated on low-powered Google Crawlers.
3. **Cross-City Navigation Links**: At the bottom of each city page, we list sibling city links to invite crawls across regions (e.g., Surabaya page links to Sidoarjo, Sidoarjo links to Gresik).
4. **All-Area Directory Page (`/area-layanan`)**: Fully updated with clean, keyword-rich cards linking to individual city pages.

### B. Content Quality & Local Relevance
- Every city landing page features a **Quotation Estimator** tailored for that city. This on-page interactive widget increases **Time-On-Site** (dwell time), which is a key Google ranking signal.
- Every city page features a localized **FAQ Section** answering typical questions asked by homeowners in that specific region.

---

## 5. IMPLEMENTATION TIMELINE

We will execute the SEO strategy immediately in this session by modifying the following files:
1. **`app/page.tsx`**: Add main `LocalBusiness` JSON-LD Schema to build homepage authority.
2. **`app/area-layanan/[city]/page.tsx`**: Add dynamic, localized `LocalBusiness` and `FAQPage` JSON-LD Schema.
3. **`app/area-layanan/page.tsx`**: Enhance keyword relevance, layout, and link structure.
4. **`components/Footer.tsx`**: Add a local area link directory at the bottom for global site crawlability.

Let's begin the implementation phases!
