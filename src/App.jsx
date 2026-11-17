import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import DiseaseDetail from './pages/DiseaseDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'

import BMICalculator from './pages/BMICalculator'
import HealthQuiz from './pages/HealthQuiz'
import DailyCalorie from './pages/DailyCalorie'

export default function App() {

  // FAVORITES
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem('yourwellness-favorites')
      ) || []
    } catch {
      return []
    }
  })

  // DARK MODE
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('yourwellness-theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode)

    localStorage.setItem(
      'yourwellness-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  // TOGGLE FAVORITES
  function toggleFavorite(id) {
    setFavorites((current) => {
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]

      localStorage.setItem(
        'yourwellness-favorites',
        JSON.stringify(updated)
      )

      return updated
    })
  }

  return (
    <div className="app-shell">

      {/* NAVBAR */}
      <Navbar
        favoriteCount={favorites.length}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          {/* DISEASE CATALOG */}
          <Route
            path="/katalog"
            element={
              <Catalog
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          {/* DISEASE DETAIL */}
          <Route
            path="/penyakit/:slug"
            element={
              <DiseaseDetail
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          {/* BMI CALCULATOR */}
          <Route
            path="/kalkulator-bmi"
            element={<BMICalculator />}
          />

          {/* DAILY CALORIE CALCULATOR */}
          <Route
            path="/kalkulator-kalori"
            element={<DailyCalorie />}
          />

          {/* HEALTH QUIZ */}
          <Route
            path="/health-quiz"
            element={<HealthQuiz />}
          />

          {/* ABOUT */}
          <Route
            path="/tentang"
            element={<About />}
          />

          {/* PAGE NOT FOUND */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}