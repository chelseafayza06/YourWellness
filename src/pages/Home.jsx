import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  ShieldCheck,
  BookOpen,
  HeartPulse
} from 'lucide-react'
import { useState } from 'react'

import { diseases, categories } from '../data/diseases'
import { healthTips } from '../data/tips'

import DiseaseCard from '../components/DiseaseCard'
import TipCard from '../components/TipCard'
import SectionHeading from '../components/SectionHeading'
import SearchBar from '../components/SearchBar'
import RecentlyViewed from './RecentlyViewed'
import HealthTools from '../components/HealthTools'

export default function Home({ favorites, onToggleFavorite }) {
  const [query, setQuery] = useState('')

  const filtered = diseases
    .filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 3)

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">

          <div className="hero-copy">
            <span className="hero-kicker">
              <span className="pulse-dot" />
              RUANG EDUKASI KESEHATAN
            </span>

            <h1>
              Kenali tubuhmu,
              <br />
              <em>jaga sehatmu.</em>
            </h1>

            <p className="hero-description">
              Temukan informasi dasar tentang berbagai kondisi kesehatan,
              gejala umum, serta langkah pencegahan yang bisa mulai kamu pahami.
            </p>

            <div className="hero-actions">
              <Link to="/katalog" className="button button-primary">
                Jelajahi katalog
                <ArrowRight size={17} />
              </Link>

              <a href="#tentang-katalog" className="button button-quiet">
                Kenali website
              </a>
            </div>

            <div className="hero-trust">
              <ShieldCheck size={17} />
              <span>
                Informasi edukatif, bukan pengganti diagnosis medis.
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ilustrasi kesehatan">
            <div className="visual-card">

              <div className="visual-top">
                <span className="visual-tag">YOURWELLNESS NOTES</span>
                <span className="visual-dot" />
              </div>

              <div className="visual-center">
                <div className="visual-ring ring-a" />
                <div className="visual-ring ring-b" />

                <div className="visual-heart">
                  <HeartPulse size={58} strokeWidth={1.25} />
                </div>
              </div>

              <div className="visual-caption">
                <span>Your wellness,</span>
                <strong>our happiness.</strong>
              </div>

              <div className="visual-stats">
                <span><b>01</b> Kenali</span>
                <span><b>02</b> Pahami</span>
                <span><b>03</b> Cegah</span>
              </div>

            </div>

            <span className="floating-leaf leaf-one" />
            <span className="floating-leaf leaf-two" />
          </div>

        </div>
      </section>


      {/* INTRO SECTION */}
      <section className="container intro-strip" id="tentang-katalog">

        <div className="intro-icon">
          <BookOpen size={22} />
        </div>

        <div>
          <strong>Your wellness is our happiness.</strong>
          <p>
            Explore health, understand your body, and take a little step
            toward a healthier you.
          </p>
        </div>

        <span className="intro-count">01 / 04</span>

      </section>


      {/* HEALTH TOOLS SECTION */}
      <HealthTools />


      {/* DISEASE SEARCH SECTION */}
      <section className="section container">

        <SectionHeading
          eyebrow="MULAI DARI SINI"
          title="Cari tahu yang ingin kamu ketahui"
          description="Ketik nama penyakit untuk menemukan ringkasan informasinya."
        />

        <div className="home-search-wrap">

          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Contoh: asma, anemia, atau gastritis..."
          />

          <span className="search-hint">
            <Search size={14} />
            Cari dari 16 topik kesehatan
          </span>

        </div>

        {query && (
          <div className="quick-results">

            {filtered.length ? (
              filtered.map((disease) => (
                <Link
                  to={`/penyakit/${disease.slug}`}
                  key={disease.id}
                >
                  <span>{disease.name}</span>
                  <ArrowRight size={15} />
                </Link>
              ))
            ) : (
              <p className="empty-inline">
                Belum ada hasil. Coba kata kunci lain atau buka katalog lengkap.
              </p>
            )}

            <Link to="/katalog" className="all-results">
              Lihat katalog lengkap
            </Link>

          </div>
        )}

        <div className="category-row">

          {categories.slice(1).map((category, index) => (
            <Link
              to="/katalog"
              className="category-chip"
              key={category}
            >
              <span>0{index + 1}</span>
              {category}
              <ArrowRight size={14} />
            </Link>
          ))}

        </div>

      </section>


      {/* RECENTLY VIEWED SECTION */}
      <div className="container">
        <RecentlyViewed />
      </div>


      {/* FEATURED DISEASES SECTION */}
      <section className="section section-tinted">

        <div className="container">

          <SectionHeading
            eyebrow="PILIHAN UNTUK DIBACA"
            title="Kenali beberapa kondisi kesehatan"
            description="Ringkasan awal untuk membantumu memahami topik sebelum membaca detailnya."
            action={
              <Link
                to="/katalog"
                className="text-link heading-link"
              >
                Lihat semua
                <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="disease-grid">

            {diseases.slice(0, 3).map((disease) => (
              <DiseaseCard
                key={disease.id}
                disease={disease}
                isFavorite={favorites.includes(disease.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}

          </div>

        </div>

      </section>


      {/* HEALTH TIPS SECTION */}
      <section className="section container tips-section">

        <SectionHeading
          eyebrow="KEBIASAAN KECIL, DAMPAK BAIK"
          title="Catatan sehat untuk sehari-hari"
          description="Tiga pengingat sederhana yang bisa disesuaikan dengan kebutuhan dan kondisi tubuh masing-masing."
        />

        <div className="tips-grid">

          {healthTips.map((tip, index) => (
            <TipCard
              key={tip.id}
              tip={tip}
              index={index}
            />
          ))}

        </div>

      </section>


      {/* DISCLAIMER SECTION */}
      <section className="container disclaimer-banner">

        <div className="disclaimer-symbol">
          <HeartPulse size={22} />
        </div>

        <div>
          <strong>
            Setiap kondisi punya kebutuhan yang berbeda.
          </strong>

          <p>
            Gunakan informasi di website ini sebagai pengetahuan awal.
            Untuk diagnosis dan penanganan, konsultasikan dengan tenaga kesehatan.
          </p>
        </div>

        <Link to="/tentang" aria-label="Baca tentang website">
          <ArrowRight size={20} />
        </Link>

      </section>

    </>
  )
}