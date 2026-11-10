import { HeartPulse, BookOpen, ShieldCheck, ExternalLink } from 'lucide-react'

const sources = [
  { name: 'Kementerian Kesehatan Republik Indonesia', url: 'https://www.kemkes.go.id/', note: 'Informasi dan edukasi kesehatan nasional.' },
  { name: 'World Health Organization (WHO)', url: 'https://www.who.int/', note: 'Informasi kesehatan global dan lembar fakta.' },
  { name: 'National Health Service (NHS)', url: 'https://www.nhs.uk/', note: 'Panduan kesehatan dan informasi kondisi medis.' },
  { name: 'Centers for Disease Control and Prevention (CDC)', url: 'https://www.cdc.gov/', note: 'Informasi penyakit, pencegahan, dan kesehatan masyarakat.' },
  { name: 'National Institute of Diabetes and Digestive and Kidney Diseases', url: 'https://www.niddk.nih.gov/', note: 'Informasi sistem pencernaan dan kondisi terkait.' }
]

export default function About() {
  return (
    <div className="page-section about-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">TENTANG KAMI</span>
          <h1>Lebih dekat dengan<br /><em>informasi kesehatan.</em></h1>
          <p>YourWellness adalah website edukasi sederhana yang membantu pengunjung mengenal beberapa kondisi kesehatan melalui informasi yang ringkas dan mudah dibaca.</p>
        </div>
        <div className="about-feature-grid">
          <article className="about-feature"><span><BookOpen size={22} /></span><h2>Belajar dengan sederhana</h2><p>Informasi disusun dalam bagian pengertian, penyebab, gejala, pencegahan, dan pertolongan awal.</p></article>
          <article className="about-feature"><span><ShieldCheck size={22} /></span><h2>Mengutamakan kehati-hatian</h2><p>Konten dimaksudkan sebagai pengetahuan awal, bukan alat untuk mendiagnosis atau menentukan pengobatan.</p></article>
          <article className="about-feature"><span><HeartPulse size={22} /></span><h2>Mendorong kepedulian</h2><p>Harapannya, informasi yang mudah dipahami dapat mendorong kebiasaan menjaga kesehatan dan mencari bantuan saat diperlukan.</p></article>
        </div>
        <section className="source-section">
          <span className="eyebrow">RUJUKAN INFORMASI</span>
          <h2>Sumber bacaan kesehatan</h2>
          <p>Konten ringkas pada website ini disusun sebagai pengantar. Untuk memahami informasi lebih lanjut, kunjungi sumber kesehatan berikut.</p>
          <div className="source-list">
            {sources.map((source) => (
              <a className="source-item" href={source.url} key={source.name} target="_blank" rel="noreferrer">
                <span><strong>{source.name}</strong><small>{source.note}</small></span><ExternalLink size={17} />
              </a>
            ))}
          </div>
        </section>
        <div className="medical-disclaimer">
          <strong>Catatan penting</strong>
          <p>Informasi di YourWellness bersifat edukatif dan tidak menggantikan pemeriksaan, diagnosis, atau saran dari dokter maupun tenaga kesehatan. Gejala yang sama dapat memiliki penyebab berbeda. Untuk kondisi gawat darurat, segera hubungi layanan darurat atau fasilitas kesehatan terdekat.</p>
        </div>
      </div>
    </div>
  )
}
