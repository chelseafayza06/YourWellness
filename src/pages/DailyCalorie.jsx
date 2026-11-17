import { useState } from 'react'
import { Flame, RotateCcw, Calculator } from 'lucide-react'

export default function DailyCalorie() {
  const [form, setForm] = useState({
    gender: 'female',
    age: '',
    weight: '',
    height: '',
    activity: '1.2'
  })

  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const calculateCalories = (e) => {
    e.preventDefault()

    const age = Number(form.age)
    const weight = Number(form.weight)
    const height = Number(form.height)
    const activity = Number(form.activity)

    if (
      age <= 0 ||
      weight <= 0 ||
      height <= 0 ||
      !Number.isFinite(age + weight + height)
    ) {
      return
    }

    const bmr = form.gender === 'male'
      ? (10 * weight) + (6.25 * height) - (5 * age) + 5
      : (10 * weight) + (6.25 * height) - (5 * age) - 161

    const calories = Math.round(bmr * activity)

    setResult({
      bmr: Math.round(bmr),
      calories
    })
  }

  const resetForm = () => {
    setForm({
      gender: 'female',
      age: '',
      weight: '',
      height: '',
      activity: '1.2'
    })

    setResult(null)
  }

  return (
    <section className="section container calorie-page">

      <div className="calorie-heading">
        <span className="eyebrow">YOUR DAILY NUTRITION</span>
        <h1>Daily Calorie Calculator</h1>
        <p>
          Ketahui perkiraan kebutuhan kalori harianmu untuk membantu
          memahami kebutuhan energi tubuh.
        </p>
      </div>

      <div className="calorie-container">

        <form className="calorie-form" onSubmit={calculateCalories}>

          <h2>
            <Calculator size={21} />
            Your Information
          </h2>

          <div className="calorie-field">
            <label>Jenis Kelamin</label>

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="female">Perempuan</option>
              <option value="male">Laki-laki</option>
            </select>
          </div>

          <div className="calorie-field">
            <label>Usia (tahun)</label>

            <input
              type="number"
              name="age"
              placeholder="Contoh: 20"
              min="1"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="calorie-field">
            <label>Berat Badan (kg)</label>

            <input
              type="number"
              name="weight"
              placeholder="Contoh: 60"
              min="1"
              step="0.1"
              value={form.weight}
              onChange={handleChange}
              required
            />
          </div>

          <div className="calorie-field">
            <label>Tinggi Badan (cm)</label>

            <input
              type="number"
              name="height"
              placeholder="Contoh: 165"
              min="1"
              step="0.1"
              value={form.height}
              onChange={handleChange}
              required
            />
          </div>

          <div className="calorie-field">
            <label>Tingkat Aktivitas</label>

            <select
              name="activity"
              value={form.activity}
              onChange={handleChange}
            >
              <option value="1.2">Minim aktivitas</option>
              <option value="1.375">Aktivitas ringan</option>
              <option value="1.55">Aktivitas sedang</option>
              <option value="1.725">Aktivitas tinggi</option>
              <option value="1.9">Aktivitas sangat tinggi</option>
            </select>
          </div>

          <button type="submit" className="button button-primary calorie-submit">
            <Flame size={18} />
            Calculate Calories
          </button>

          <button
            type="button"
            className="calorie-reset"
            onClick={resetForm}
          >
            <RotateCcw size={15} />
            Reset Form
          </button>

        </form>

        <div className="calorie-result">

          {!result ? (
            <div className="calorie-empty">
              <div className="calorie-result-icon">
                <Flame size={35} />
              </div>

              <h2>Your Daily Energy</h2>

              <p>
                Masukkan informasi tubuhmu untuk melihat estimasi
                kebutuhan kalori harian.
              </p>
            </div>
          ) : (
            <div className="calorie-success">

              <span className="eyebrow">YOUR ESTIMATED RESULT</span>

              <h2>Kebutuhan Kalori Harian</h2>

              <div className="calorie-number">
                {result.calories.toLocaleString('id-ID')}
                <span> kcal / hari</span>
              </div>

              <div className="calorie-bmr">
                <span>Basal Metabolic Rate (BMR)</span>
                <strong>{result.bmr.toLocaleString('id-ID')} kcal</strong>
              </div>

              <p>
                Ini merupakan perkiraan energi yang dibutuhkan
                untuk mempertahankan berat badan berdasarkan
                tingkat aktivitas yang dipilih.
              </p>

              <button
                className="calorie-reset"
                onClick={resetForm}
              >
                <RotateCcw size={15} />
                Calculate Again
              </button>

            </div>
          )}

        </div>

      </div>

      <div className="calorie-disclaimer">
        <strong>Important Note</strong>
        <p>
          Hasil perhitungan merupakan estimasi, bukan angka kebutuhan
          yang pasti. Kebutuhan energi setiap orang dapat berbeda.
          Kalkulator ini menggunakan rumus estimasi untuk orang dewasa
          dan bukan pengganti konsultasi tenaga kesehatan atau ahli gizi.
        </p>
      </div>

    </section>
  )
}