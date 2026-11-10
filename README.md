# YourWellness

Website edukasi kesehatan sederhana yang dibuat menggunakan React + Vite.

**Tagline:** *Your wellness is our happiness.*  
**Subtagline:** *Explore health, understand better.*

## Menjalankan project

Pastikan Node.js sudah terpasang. Buka terminal di folder project, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal (biasanya `http://localhost:5173`).

Untuk memeriksa hasil build:

```bash
npm run build
```

## Fitur

- Beranda dengan pengenalan, kategori, penyakit pilihan, pencarian cepat, dan tips kesehatan.
- Katalog 16 kondisi kesehatan dengan pencarian dan filter kategori.
- Halaman detail dinamis untuk setiap kondisi kesehatan.
- Setiap detail memuat pengertian, penyebab/pemicu, gejala umum, pencegahan, pertolongan awal, kapan perlu bantuan medis, dan referensi bacaan.
- Halaman Tentang dan sumber informasi kesehatan.
- Favorit yang disimpan di `localStorage`.
- Navigasi menggunakan React Router.
- Komponen reusable dengan Props dan PropTypes.
- Tampilan responsif untuk desktop dan perangkat seluler.

## Daftar 16 kondisi kesehatan

1. Asma
2. Influenza
3. Gastritis
4. GERD
5. Anemia
6. Hipertensi
7. Eksim
8. Jerawat
9. Pneumonia
10. Bronkitis
11. Diare
12. Konstipasi
13. Diabetes Tipe 2
14. Kolesterol Tinggi
15. Psoriasis
16. Urtikaria (Biduran)

## Materi React yang diterapkan

| Materi | Penerapan |
|---|---|
| Components | Navbar, Footer, DiseaseCard, TipCard, SectionHeading |
| Props | Data penyakit dan tampilan dikirim ke komponen anak |
| State | Search, kategori aktif, favorit, dan status menu mobile |
| Events | onChange, onClick, onSubmit |
| Conditional Rendering | Tampilan hasil kosong, favorit aktif, dan pesan edukasi |
| List Rendering | `.map()` untuk kategori, penyakit, dan tips |
| React Router | Halaman Home, Katalog, Detail dinamis, dan Tentang |
| Struktur bersih | Pemisahan components, pages, data, dan styles |
| PropTypes | Validasi props pada komponen |
| Lucide React | Ikon navigasi dan informasi |

## Struktur folder

```text
yourwellness/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Catatan konten kesehatan

Konten pada website ini ditujukan untuk edukasi umum, bukan diagnosis atau pengganti konsultasi tenaga kesehatan. Informasi pertolongan pertama dibuat ringkas dan tidak menggantikan rencana tindakan medis pribadi. Pada keadaan gawat darurat, segera cari bantuan medis.

Sumber bacaan awal yang dapat ditinjau:
- Kementerian Kesehatan RI: https://www.kemkes.go.id/
- WHO: https://www.who.int/
- NHS: https://www.nhs.uk/
- CDC: https://www.cdc.gov/
- NIDDK: https://www.niddk.nih.gov/

Sebelum dipublikasikan, periksa kembali informasi kesehatan dan sesuaikan dengan referensi terbaru dari sumber resmi.
