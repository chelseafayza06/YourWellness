import { Link } from 'react-router-dom'
import { Clock3, ArrowUpRight } from 'lucide-react'
import { diseases } from '../data/diseases'

export default function RecentlyViewed() {
  const viewedIds = JSON.parse(
    localStorage.getItem('yourwellness-recently-viewed') || '[]'
  )

  const viewedDiseases = viewedIds
    .map((id) => diseases.find((disease) => disease.id === id))
    .filter(Boolean)

  if (viewedDiseases.length === 0) {
    return null
  }

  return (
    <section className="recent-section">

      <div className="recent-heading">
        <div>
          <span className="eyebrow">YOUR ACTIVITY</span>
          <h2>Recently Viewed</h2>
          <p>Penyakit yang terakhir kamu kunjungi.</p>
        </div>

        <Clock3 size={23} />
      </div>

      <div className="recent-list">
        {viewedDiseases.map((disease) => (
          <Link
            to={`/penyakit/${disease.slug}`}
            className="recent-item"
            key={disease.id}
          >
            <div>
              <strong>{disease.name}</strong>
              <span>{disease.category}</span>
            </div>

            <ArrowUpRight size={18} />
          </Link>
        ))}
      </div>

    </section>
  )
}