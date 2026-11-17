import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  HeartPulse,
  Menu,
  X,
  Heart,
  Moon,
  Sun,
  Flame
} from 'lucide-react'
import PropTypes from 'prop-types'

export default function Navbar({
  favoriteCount,
  darkMode,
  onToggleTheme
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Beranda' },
    { to: '/katalog', label: 'Katalog Penyakit' },
    { to: '/kalkulator-bmi', label: 'BMI Calculator' },
    { to: '/kalkulator-kalori', label: 'Daily Calorie' },
    { to: '/health-quiz', label: 'Health Quiz' },
    { to: '/tentang', label: 'Tentang' },
  ]

  return (
    <header className="site-header">
      <div className="container nav-wrap">

        {/* BRAND LOGO */}
        <Link
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">
            <HeartPulse size={21} />
          </span>

          <span>
            Your<span className="brand-light">Wellness</span>
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          {/* FAVORITES */}
          <span className="nav-favorite">
            <Heart size={15} />
            {favoriteCount} tersimpan
          </span>

          {/* DARK MODE */}
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Ganti tema"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

        </nav>

      </div>
    </header>
  )
}

Navbar.propTypes = {
  favoriteCount: PropTypes.number.isRequired,
  darkMode: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired
}