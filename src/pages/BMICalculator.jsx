import { useState } from 'react'
import { Calculator, Activity, RotateCcw } from 'lucide-react'

export default function BMICalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  function calculateBMI(event) {
    event.preventDefault()

    const w = Number(weight)
    const h = Number(height)

    if (!w || !h || w <= 0 || h <= 0) {
      setError('Masukkan berat dan tinggi badan yang valid.')
      setResult(null)
      return
    }

    const heightMeter = h / 100
    const bmi = w / (heightMeter * heightMeter)

    let category = ''
    let description = ''

    if (bmi < 18.5) {
      category = 'Berat badan kurang'
      description = 'BMI berada di bawah rentang normal dewasa.'
    } else if (bmi < 25) {
      category = 'Rentang normal'
      description = 'BMI berada dalam rentang normal dewasa.'
    } else if (bmi < 30) {
      category = 'Berat badan berlebih'
      description = 'BMI berada di atas rentang normal dewasa.'
    } else {
      category = 'Obesitas'
      description = 'BMI berada pada rentang obesitas dewasa.'
    }

    setResult({
      value: bmi.toFixed(1),
      category,
      description
    })

    setError('')
  }

  function resetCalculator() {
    setWeight('')
    setHeight('')
    setResult(null)
    setError('')
  }

  return (
    <div className="page-section">
      <div className="container bmi-container">

        <div className="page-heading">
          <span className="eyebrow">HEALTH TOOLS</span>
          <h1>Body Mass <em>Index.</em></h1>
          <p>
            Hitung indeks massa tubuh berdasarkan berat dan tinggi badan.
          </p>
        </div>

        <div className="bmi-card">

          <div className="bmi-card-header">
            <span className="bmi-icon">
              <Calculator size={25} />
            </span>

            <div>
              <h2>BMI Calculator</h2>
              <p>Masukkan data tubuh kamu.</p>
            </div>
          </div>

          <form onSubmit={calculateBMI}>

            <div className="bmi-input-group">
              <label>Berat Badan (kg)</label>

              <input
                type="number"
                placeholder="Contoh: 60"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min="1"
                step="any"
              />
            </div>

            <div className="bmi-input-group">
              <label>Tinggi Badan (cm)</label>

              <input
                type="number"
                placeholder="Contoh: 165"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min="1"
                step="any"
              />
            </div>

            {error && <p className="bmi-error">{error}</p>}

            <div className="bmi-actions">
              <button type="submit" className="button button-primary">
                <Activity size={17} />
                Hitung BMI
              </button>

              <button
                type="button"
                className="button button-outline"
                onClick={resetCalculator}
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>

          </form>

          {result && (
            <div className="bmi-result">

              <span className="eyebrow">HASIL PERHITUNGAN</span>

              <h2>{result.value}</h2>

              <strong>{result.category}</strong>

              <p>{result.description}</p>

            </div>
          )}

        </div>

        <div className="bmi-disclaimer">
          <strong>Catatan penting</strong>

          <p>
            BMI merupakan alat skrining sederhana untuk orang dewasa,
            bukan diagnosis medis. Interpretasinya dapat berbeda pada
            anak-anak, remaja, ibu hamil, atlet, dan kelompok tertentu.
            Konsultasikan hasil dengan tenaga kesehatan jika diperlukan.
          </p>
        </div>

      </div>
    </div>
  )
}