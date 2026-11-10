import PropTypes from 'prop-types'
import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder = 'Cari nama penyakit...' }) {
  return (
    <label className="search-box">
      <Search size={19} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Cari penyakit"
      />
      {value && <button type="button" onClick={() => onChange('')} aria-label="Hapus pencarian"><X size={17} /></button>}
    </label>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}
