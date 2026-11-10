import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Heart, AlertCircle, ShieldCheck, Stethoscope, BookOpen } from 'lucide-react'
import { diseases } from '../data/diseases'
import NotFound from './NotFound'

function InfoList({ title, items, icon: Icon, tone = '' }) {
  return (
    <section className={`detail-info-card ${tone}`}>
      <div className="detail-card-heading"><span className="detail-small-icon"><Icon size={18} /></span><h2>{title}</h2></div>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </section>
  )
}

export default function DiseaseDetail({ favorites, onToggleFavorite }) {
  const { slug } = useParams()
  const disease = diseases.find((item) => item.slug === slug)
  if (!disease) return <NotFound />

  const Icon = disease.icon
  const isFavorite = favorites.includes(disease.id)

  return (
    <div className="page-section detail-page">
      <div className="container">
        <Link to="/katalog" className="back-link"><ArrowLeft size={16} /> Kembali ke katalog</Link>
        <div className="detail-hero">
          <div className={`detail-art ${disease.color}`}><Icon size={48} strokeWidth={1.35} /></div>
          <div className="detail-title-wrap">
            <span className="category-label">{disease.category}</span>
            <h1>{disease.name}</h1>
            <p>{disease.summary}</p>
            <button className={`button ${isFavorite ? 'button-saved' : 'button-outline'}`} onClick={() => onToggleFavorite(disease.id)}>
              <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} /> {isFavorite ? 'Tersimpan' : 'Simpan topik'}
            </button>
          </div>
          <div className="detail-index"><span>TOPIK</span><strong>{String(disease.id).padStart(2, '0')}</strong><small>/ 16</small></div>
        </div>

        <div className="detail-content-grid">
          <div className="detail-main-column">
            <section className="definition-card">
              <span className="eyebrow">MEMAHAMI KONDISI</span>
              <h2>Apa itu {disease.name}?</h2>
              <p>{disease.definition}</p>
            </section>
            <InfoList title="Penyebab dan faktor pemicu" items={disease.causes} icon={BookOpen} />
            <InfoList title="Gejala yang umum dikenali" items={disease.symptoms} icon={AlertCircle} />
          </div>
          <aside className="detail-side-column">
            <InfoList title="Langkah pencegahan" items={disease.prevention} icon={ShieldCheck} tone="green-card" />
            <InfoList title="Pertolongan awal" items={disease.firstAid} icon={Heart} tone="warm-card" />
            <div className="doctor-card">
              <div className="doctor-card-title"><Stethoscope size={18} /><strong>Kapan perlu bantuan medis?</strong></div>
              <p>{disease.doctor}</p>
            </div>
          </aside>
        </div>

        <div className="source-note">
          <BookOpen size={16} />
          <div><strong>Referensi bacaan</strong><span>{disease.source}. Lihat juga halaman sumber resmi pada bagian Tentang.</span></div>
        </div>
        <div className="detail-bottom-cta"><div><span className="eyebrow">LANJUT JELAJAH</span><h2>Kenali topik kesehatan lainnya.</h2></div><Link to="/katalog" className="button button-primary">Kembali ke katalog <ArrowLeft size={16} /></Link></div>
      </div>
    </div>
  )
}
