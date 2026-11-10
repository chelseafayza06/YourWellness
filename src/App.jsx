import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import DiseaseDetail from './pages/DiseaseDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('yourwellness-favorites')) || []
    } catch {
      return []
    }
  })

  function toggleFavorite(id) {
    setFavorites((current) => {
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
      localStorage.setItem('yourwellness-favorites', JSON.stringify(updated))
      return updated
    })
  }

  return (
    <div className="app-shell">
      <Navbar favoriteCount={favorites.length} />
      <main>
        <Routes>
          <Route path="/" element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/katalog" element={<Catalog favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/penyakit/:slug" element={<DiseaseDetail favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/tentang" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
