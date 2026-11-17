import { Link } from 'react-router-dom'
import {
  Activity,
  Flame,
  ShieldCheck,
  Brain,
  Apple,
  ArrowUpRight
} from 'lucide-react'

const tools = [
  {
    title: 'BMI Calculator',
    description: 'Hitung indeks massa tubuh dan kenali kategori berat badanmu.',
    icon: Activity,
    path: '/kalkulator-bmi',
    label: 'Hitung BMI',
    number: '01'
  },
  {
    title: 'Daily Calorie',
    description: 'Perkirakan kebutuhan kalori harian berdasarkan profil tubuhmu.',
    icon: Flame,
    path: '/kalkulator-kalori',
    label: 'Hitung Kalori',
    number: '02'
  },
  {
    title: 'Health Risk Awareness',
    description: 'Kenali faktor risiko kesehatan melalui pertanyaan edukatif.',
    icon: ShieldCheck,
    path: '/health-awareness',
    label: 'Mulai Evaluasi',
    number: '03'
  },
  {
    title: 'Health Quiz',
    description: 'Uji pengetahuanmu tentang kesehatan melalui kuis interaktif.',
    icon: Brain,
    path: '/health-quiz',
    label: 'Mulai Kuis',
    number: '04'
  },
  {
    title: 'Healthy Food Explorer',
    description: 'Jelajahi makanan dan pelajari kandungan nutrisi di dalamnya.',
    icon: Apple,
    path: '/healthy-food',
    label: 'Jelajahi Makanan',
    number: '05'
  }
]

export default function HealthTools() {
  return (
    <section className="section container health-tools-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">EXPLORE YOUR WELLNESS</span>
          <h2>Health Tools for You</h2>
          <p>
            Gunakan berbagai fitur interaktif untuk mengenal tubuh,
            memahami kesehatan, dan membangun kebiasaan yang lebih baik.
          </p>
        </div>
      </div>

      <div className="health-tools-grid">
        {tools.map((tool) => {
          const Icon = tool.icon

          return (
            <Link
              to={tool.path}
              className="health-tool-card"
              key={tool.number}
            >
              <div className="health-tool-top">
                <div className="health-tool-icon">
                  <Icon size={23} />
                </div>

                <span className="health-tool-number">
                  {tool.number}
                </span>
              </div>

              <h3>{tool.title}</h3>
              <p>{tool.description}</p>

              <div className="health-tool-link">
                {tool.label}
                <ArrowUpRight size={16} />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}