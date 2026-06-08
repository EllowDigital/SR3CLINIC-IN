import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Ear, Scissors, Baby, Heart, CheckCircle2 } from 'lucide-react'

const tabs = [
  {
    id: 'ent',
    label: 'ENT & Head/Neck',
    doctor: 'Dr. Samvartika',
    icon: Ear,
    desc: 'Comprehensive ear, nose, throat, head and neck surgical care.',
    services: [
      'Endoscopic ENT Surgeries',
      'Tonsil & Adenoid Treatments',
      'Thyroid & Salivary Gland Surgeries',
      'Head, Neck, Oral & Throat Cancer Care',
      'Audiometry (Hearing Tests) & Hearing Aids',
    ],
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'surgery',
    label: 'Advanced General Surgery',
    doctor: 'Dr. R.K. Vishwakarma',
    icon: Scissors,
    desc: 'Minimally invasive and open surgical procedures by a fellowship-trained laparoscopic surgeon.',
    services: [
      'Laparoscopic & Open Surgeries',
      'Gallbladder, Appendix, Hernia & Prostate',
      'Laser & Ksharsutra for Piles, Fissure, Fistula',
      'Kidney Stone & Tumor Surgeries',
    ],
    img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gynae',
    label: 'Obstetrics & Gynaecology',
    doctor: 'Dr. Madhu Agrawal',
    icon: Baby,
    desc: "Expert women's health, maternity care, and minimally invasive gynaecological surgery.",
    services: [
      'Cesarean Delivery & Pregnancy Care',
      'Infertility Treatment & Menstrual Disorders',
      'Uterine Tumor Surgeries',
    ],
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'allied',
    label: 'Allied Health & Diagnostics',
    doctor: 'Dr. Leena Verma & Dr. Induja Dixit',
    icon: Heart,
    desc: 'Evidence-based physiotherapy, clinical nutrition, and on-site diagnostic services.',
    services: [
      'Advanced Physiotherapy (Neck, Back, Knee)',
      'Diet & Nutritional Counseling',
      'Blood Tests, BP/Sugar Monitoring & Nebulization',
    ],
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Services() {
  const [active, setActive] = useState(tabs[0].id)
  const [ref, inView] = useInView()
  const current = tabs.find((t) => t.id === active)!

  return (
    <section id="services" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">What We Treat</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
            Centers of Excellence <span className="text-gold-gradient">&amp; Services</span>
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
          <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Five specialities, one address. From diagnosis to surgical intervention — all under one roof.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {tabs.map((t) => {
            const Icon = t.icon
            const isActive = active === t.id
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'gold-gradient text-navy shadow-md shadow-gold/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            )
          })}
        </motion.div>

        {/* Tab content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 items-center bg-clinical-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
          >
            {/* Image */}
            <div className="h-72 md:h-full min-h-[320px] overflow-hidden">
              <img
                src={current.img}
                alt={current.label}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-8 md:p-10">
              <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
                Led by {current.doctor}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-navy mb-3">{current.label}</h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed mb-7">{current.desc}</p>

              <ul className="space-y-3">
                {current.services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="font-sans text-gray-700 text-sm">{s}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center px-7 py-3 gold-gradient text-navy font-sans font-semibold text-sm rounded-full hover:opacity-90 transition-opacity shadow-md shadow-gold/20"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
