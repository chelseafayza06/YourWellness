import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HeartPulse, Menu, X, Heart } from 'lucide-react'
import PropTypes from 'prop-types'

export default function Navbar({ favoriteCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { to: '/', label: 'Beranda' },
    { to: '/katalog', label: 'Katalog Penyakit' },
    { to: '/tentang', label: 'Tentang' },
  ]

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><HeartPulse size={21} /></span>
          <span>Your<span className="brand-light">Wellness</span></span>
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <span className="nav-favorite"><Heart size={15} /> {favoriteCount} tersimpan</span>
        </nav>
      </div>
    </header>
  )
}

Navbar.propTypes = { favoriteCount: PropTypes.number.isRequired }
