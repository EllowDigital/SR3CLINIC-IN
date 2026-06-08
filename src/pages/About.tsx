import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { CheckCircle2, Quote, ArrowRight } from 'lucide-react'

const mission = [
  'Fellowship-trained ENT, surgical, and allied health specialists',
  'State-of-the-art endoscopic, laser, and laparoscopic suites',
  'Cashless treatment facility with major TPA tie-ups',
  'Patient-centric care with transparent treatment plans',
  'Comprehensive diagnostics available on-site',
  'Warm, compassionate nursing and support staff',
]

const infraImages = [
  { src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', label: 'Advanced Operation Theatre' },
  { src: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80', label: 'Private Patient Wards' },
  { src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80', label: 'Diagnostic Laboratory' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80', label: 'Consultation Suites' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', label: 'Endoscopy Unit' },
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', label: 'Reception & Patient Lounge' },
]

export default function About() {
  const [introRef, introInView] = useInView()
  const [quoteRef, quoteInView] = useInView()
  const [galleryRef, galleryInView] = useInView()

  return (
    <>
      {/* ── Page Header ── */}
      <div className="bg-navy pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">About <span className="text-gold-gradient">SR³ Care &amp; Cure</span></h1>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-2xl mx-auto">
            A legacy built on clinical excellence, compassion, and an unwavering commitment to the health of our community.
          </p>
        </div>
      </div>

      {/* ── Introduction ── */}
      <section ref={introRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={introInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80" alt="Senior specialist" className="w-full h-[460px] object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent rounded-2xl" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={introInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }} className="absolute -bottom-6 -right-6 bg-navy rounded-xl p-6 shadow-xl border border-gold/20">
              <p className="text-4xl font-serif text-gold font-bold">15+</p>
              <p className="text-white/70 font-sans text-sm mt-1">Years of Service</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={introInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} className="absolute -top-6 -left-6 bg-gold rounded-xl p-6 shadow-xl">
              <p className="text-4xl font-serif text-navy font-bold">10k+</p>
              <p className="text-navy/70 font-sans text-sm mt-1">Patients Treated</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={introInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Our Mission</p>
            <h2 className="font-serif text-4xl text-navy leading-tight mb-5">
              A Legacy of <span className="text-gold-gradient">Clinical Excellence</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mb-6" />
            <p className="font-sans text-gray-600 leading-relaxed mb-5">
              SR³ ENT &amp; Surgical Centre was founded with a singular mission: to bring world-class specialist healthcare to the people of Lucknow and the surrounding regions of Uttar Pradesh. What began as a dedicated ENT practice has grown into a comprehensive multispecialty centre trusted by over 10,000 families.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed mb-8">
              We believe that excellent healthcare is a right, not a privilege. Every patient who walks through our doors receives the same level of meticulous, compassionate, and evidence-based care that we would want for our own families.
            </p>
            <ul className="space-y-3 mb-8">
              {mission.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="font-sans text-gray-700 text-sm">{m}</span>
                </li>
              ))}
            </ul>
            <Link to="/specialities" className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-sans font-medium text-sm rounded-full hover:bg-navy-light transition-colors">
              Meet Our Specialists <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Director's Message ── */}
      <section ref={quoteRef} className="py-24 bg-clinical-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={quoteInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Leadership</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
              Director's <span className="text-gold-gradient">Message</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-3 gap-10 items-center bg-navy rounded-3xl p-10 md:p-14 border border-gold/15"
          >
            {/* Photo */}
            <div className="flex flex-col items-center text-center">
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-gold/30 mb-5 shadow-xl">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" alt="Dr. Samvartika – Director" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-serif text-xl text-white">Dr. Samvartika</h3>
              <p className="text-gold text-xs font-sans mt-1 tracking-wide">Director &amp; Lead ENT Surgeon</p>
              <p className="text-white/40 text-xs font-sans mt-1">M.B.B.S., D.L.O. | Reg No. 56440</p>
            </div>

            {/* Quote */}
            <div className="lg:col-span-2">
              <Quote className="w-10 h-10 text-gold/30 mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
                "At SR³, we do not merely treat conditions — we care for people. Every patient who comes to us carries their hopes, their fears, and the trust of their family. That trust is the greatest responsibility we hold, and it drives everything we do."
              </blockquote>
              <p className="font-sans text-white/50 text-sm leading-relaxed">
                With over fifteen years of practice in ENT and head-neck surgery, I founded SR³ to create a space where cutting-edge technology meets genuine human compassion. We are committed to being a centre of excellence that Lucknow can be proud of — not just today, but for generations to come.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Infrastructure Gallery ── */}
      <section ref={galleryRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={galleryInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Our Facility</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
              World-Class <span className="text-gold-gradient">Infrastructure</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
            <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Our clinic is equipped with the latest surgical suites, diagnostic units, and private wards designed for patient comfort and clinical precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {infraImages.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative group rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-1' : ''}`}
              >
                <img src={img.src} alt={img.label} className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? 'h-72' : 'h-48'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 text-white font-sans text-xs font-medium tracking-wide">{img.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
