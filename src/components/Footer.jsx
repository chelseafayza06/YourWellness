import { HeartPulse, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark"><HeartPulse size={19} /></span>
            <span>Your<span className="brand-light">Wellness</span></span>
          </Link>
          <p>Your wellness is our happiness. Temukan informasi, pahami tubuhmu, dan rawat kesehatanmu.</p>
        </div>
        <div className="footer-note">
          <span>Belajar mengenali, bukan mendiagnosis.</span>
          <a href="https://www.kemkes.go.id/" target="_blank" rel="noreferrer">Kemenkes RI <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 YourWellness</span>
        <span>Konten untuk edukasi umum.</span>
      </div>
    </footer>
  )
}
