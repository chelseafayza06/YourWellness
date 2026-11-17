import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import {
  ArrowLeft,
  Heart,
  AlertCircle,
  ShieldCheck,
  Stethoscope,
  BookOpen,
  Printer
} from 'lucide-react'

import { diseases } from '../data/diseases'
import NotFound from './NotFound'


// KOMPONEN UNTUK MENAMPILKAN INFORMASI PENYAKIT
function InfoList({ title, items, icon: Icon, tone = '' }) {
  return (
    <section className={`detail-info-card ${tone}`}>
      <div className="detail-card-heading">
        <span className="detail-small-icon">
          <Icon size={18} />
        </span>

        <h2>{title}</h2>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}


// HALAMAN DETAIL PENYAKIT
export default function DiseaseDetail({
  favorites,
  onToggleFavorite
}) {

  const { slug } = useParams()

  // MENCARI PENYAKIT BERDASARKAN SLUG
  const disease = diseases.find(
    (item) => item.slug === slug
  )


  // FITUR RECENTLY VIEWED
  useEffect(() => {

    if (!disease) return

    try {
      const stored = JSON.parse(
        localStorage.getItem('yourwellness-recently-viewed') || '[]'
      )

      const updated = [
        disease.id,
        ...stored.filter((id) => id !== disease.id)
      ].slice(0, 5)

      localStorage.setItem(
        'yourwellness-recently-viewed',
        JSON.stringify(updated)
      )

    } catch (error) {
      console.error('Gagal menyimpan riwayat:', error)
    }

  }, [disease])


  // JIKA PENYAKIT TIDAK DITEMUKAN
  if (!disease) {
    return <NotFound />
  }


  // STATUS FAVORIT
  const Icon = disease.icon

  const isFavorite = favorites.includes(disease.id)


  // TAMPILAN HALAMAN
  return (
    <div className="page-section detail-page">

      <div className="container">

        {/* TOMBOL KEMBALI */}
        <Link
          to="/katalog"
          className="back-link"
        >
          <ArrowLeft size={16} />
          Kembali ke katalog
        </Link>


        {/* HEADER DETAIL PENYAKIT */}
        <div className="detail-hero">

          <div className={`detail-art ${disease.color}`}>
            <Icon size={48} strokeWidth={1.35} />
          </div>

          <div className="detail-title-wrap">

            <span className="category-label">
              {disease.category}
            </span>

            <h1>{disease.name}</h1>

            <p>{disease.summary}</p>


            {/* TOMBOL FAVORIT DAN PRINT */}
            <div className="detail-action-buttons">

              <button
                className={`button ${
                  isFavorite
                    ? 'button-saved'
                    : 'button-outline'
                }`}
                onClick={() => onToggleFavorite(disease.id)}
              >
                <Heart
                  size={16}
                  fill={isFavorite ? 'currentColor' : 'none'}
                />

                {isFavorite
                  ? 'Tersimpan'
                  : 'Simpan topik'}
              </button>


              <button
                className="button button-primary print-button"
                onClick={() => window.print()}
              >
                <Printer size={16} />
                Print Information
              </button>

            </div>

          </div>


          {/* NOMOR PENYAKIT */}
          <div className="detail-index">
            <span>TOPIK</span>

            <strong>
              {String(disease.id).padStart(2, '0')}
            </strong>

            <small>/ 16</small>
          </div>

        </div>


        {/* KONTEN DETAIL PENYAKIT */}
        <div className="detail-content-grid">

          <div className="detail-main-column">

            {/* PENGERTIAN */}
            <section className="definition-card">

              <span className="eyebrow">
                MEMAHAMI KONDISI
              </span>

              <h2>
                Apa itu {disease.name}?
              </h2>

              <p>{disease.definition}</p>

            </section>


            {/* PENYEBAB */}
            <InfoList
              title="Penyebab dan faktor pemicu"
              items={disease.causes}
              icon={BookOpen}
            />


            {/* GEJALA */}
            <InfoList
              title="Gejala yang umum dikenali"
              items={disease.symptoms}
              icon={AlertCircle}
            />

          </div>


          <aside className="detail-side-column">

            {/* PENCEGAHAN */}
            <InfoList
              title="Langkah pencegahan"
              items={disease.prevention}
              icon={ShieldCheck}
              tone="green-card"
            />


            {/* PERTOLONGAN AWAL */}
            <InfoList
              title="Pertolongan awal"
              items={disease.firstAid}
              icon={Heart}
              tone="warm-card"
            />


            {/* BANTUAN MEDIS */}
            <div className="doctor-card">

              <div className="doctor-card-title">

                <Stethoscope size={18} />

                <strong>
                  Kapan perlu bantuan medis?
                </strong>

              </div>

              <p>{disease.doctor}</p>

            </div>

          </aside>

        </div>


        {/* REFERENSI */}
        <div className="source-note">

          <BookOpen size={16} />

          <div>

            <strong>Referensi bacaan</strong>

            <span>
              {disease.source}.
              {' '}Lihat juga halaman sumber resmi pada bagian Tentang.
            </span>

          </div>

        </div>


        {/* TOMBOL KEMBALI KE KATALOG */}
        <div className="detail-bottom-cta">

          <div>

            <span className="eyebrow">
              LANJUT JELAJAH
            </span>

            <h2>
              Kenali topik kesehatan lainnya.
            </h2>

          </div>

          <Link
            to="/katalog"
            className="button button-primary"
          >
            Kembali ke katalog
            <ArrowLeft size={16} />
          </Link>

        </div>

      </div>

    </div>
  )
}