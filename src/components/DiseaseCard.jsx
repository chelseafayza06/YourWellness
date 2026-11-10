import PropTypes from 'prop-types'
import { ArrowUpRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DiseaseCard({ disease, isFavorite, onToggleFavorite }) {
  const Icon = disease.icon
  return (
    <article className="disease-card">
      <div className={`disease-art ${disease.color}`}>
        <span className="art-orbit orbit-one" />
        <span className="art-orbit orbit-two" />
        <span className="disease-icon"><Icon size={27} strokeWidth={1.7} /></span>
        <button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(disease.id)}
          aria-label={isFavorite ? 'Hapus dari tersimpan' : 'Simpan penyakit'}
          title={isFavorite ? 'Hapus dari tersimpan' : 'Simpan'}
        >
          <Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="disease-card-body">
        <span className="category-label">{disease.category}</span>
        <h3>{disease.name}</h3>
        <p>{disease.summary}</p>
        <Link className="text-link" to={`/penyakit/${disease.slug}`}>Pelajari lebih lanjut <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  )
}

DiseaseCard.propTypes = {
  disease: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
}
