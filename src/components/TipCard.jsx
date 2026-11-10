import PropTypes from 'prop-types'

export default function TipCard({ tip, index }) {
  const Icon = tip.icon
  return (
    <article className="tip-card">
      <div className="tip-topline">
        <span className="tip-icon"><Icon size={20} /></span>
        <span className="tip-number">0{index + 1}</span>
      </div>
      <span className="tip-label">{tip.label}</span>
      <h3>{tip.title}</h3>
      <p>{tip.description}</p>
    </article>
  )
}

TipCard.propTypes = {
  tip: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
}
