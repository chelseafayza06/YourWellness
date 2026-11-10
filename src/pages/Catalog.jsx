import { useMemo, useState } from 'react'
import { SlidersHorizontal, Heart } from 'lucide-react'
import { diseases, categories } from '../data/diseases'
import DiseaseCard from '../components/DiseaseCard'
import SearchBar from '../components/SearchBar'

export default function Catalog({ favorites, onToggleFavorite }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [showFavorites, setShowFavorites] = useState(false)

  const filteredDiseases = useMemo(() => diseases.filter((disease) => {
    const matchesSearch = `${disease.name} ${disease.summary} ${disease.category}`.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = activeCategory === 'Semua' || disease.category === activeCategory
    const matchesFavorite = !showFavorites || favorites.includes(disease.id)
    return matchesSearch && matchesCategory && matchesFavorite
  }), [query, activeCategory, showFavorites, favorites])

  return (
    <div className="page-section">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">PUSAT INFORMASI</span>
          <h1>Explore <em>health.</em></h1>
          <p>Jelajahi 16 kondisi kesehatan dan temukan informasi dasar yang mudah dipahami. Pilih topik untuk membaca gejala, penyebab, pencegahan, dan langkah awal yang perlu diketahui.</p>
        </div>
        <div className="catalog-toolbar">
          <SearchBar value={query} onChange={setQuery} />
          <button className={`filter-favorite ${showFavorites ? 'selected' : ''}`} onClick={() => setShowFavorites(!showFavorites)}>
            <Heart size={16} fill={showFavorites ? 'currentColor' : 'none'} /> Tersimpan ({favorites.length})
          </button>
        </div>
        <div className="filter-row" aria-label="Filter kategori">
          <SlidersHorizontal size={16} />
          {categories.map((category) => (
            <button key={category} className={`filter-chip ${activeCategory === category ? 'active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>
          ))}
        </div>
        <div className="catalog-result-line"><span><strong>{filteredDiseases.length}</strong> topik ditemukan</span><span>Informasi edukasi kesehatan</span></div>
        {filteredDiseases.length > 0 ? (
          <div className="disease-grid catalog-grid">
            {filteredDiseases.map((disease) => (
              <DiseaseCard key={disease.id} disease={disease} isFavorite={favorites.includes(disease.id)} onToggleFavorite={onToggleFavorite} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon"><HeartPulseIcon /></div>
            <h2>Belum ada topik yang cocok</h2>
            <p>Coba kata kunci lain, pilih kategori berbeda, atau tampilkan semua topik.</p>
            <button className="button button-primary" onClick={() => { setQuery(''); setActiveCategory('Semua'); setShowFavorites(false) }}>Reset pencarian</button>
          </div>
        )}
      </div>
    </div>
  )
}

function HeartPulseIcon() {
  return <Heart size={25} />
}
