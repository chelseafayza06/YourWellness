import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="empty-state not-found">
      <div className="empty-icon"><Compass size={26} /></div>
      <span className="eyebrow">404 — HALAMAN TIDAK DITEMUKAN</span>
      <h2>Sepertinya kamu tersesat.</h2>
      <p>Halaman yang dicari tidak tersedia atau alamatnya sudah berubah.</p>
      <Link to="/" className="button button-primary">Kembali ke beranda</Link>
    </div>
  )
}
