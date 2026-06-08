import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { ChevronDown, Star, CheckCircle2, ArrowRight, Ear, Scissors, Baby, Heart, Award, Users, Clock } from 'lucide-react'

const stats = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '10,000+', label: 'Happy Patients' },
  { icon: Clock, value: 'Cashless', label: 'Facility Available' },
]

const services = [
  { icon: Ear, title: 'ENT & Head/Neck', items: ['Endoscopic Surgeries', 'Tonsil & Adenoid', 'Hearing Tests & Aids'], to: '/specialities' },
  { icon: Scissors, title: 'General Surgery', items: ['Laparoscopic Surgery', 'Laser for Piles & Fissure', 'Hernia & Gallbladder'], to: '/specialities' },
  { icon: Baby, title: 'Obstetrics & Gynaecology', items: ['Pregnancy & Maternity Care', 'Infertility Treatment', 'Uterine Surgeries'], to: '/specialities' },
  { icon: Heart, title: 'Allied Health', items: ['Advanced Physiotherapy', 'Diet & Nutrition', 'Diagnostics & Blood Tests'], to: '/specialities' },
]

const testimonials = [
  { name: 'Rahul S.', role: 'ENT Patient', text: 'Dr. Samvartika diagnosed my chronic sinusitis accurately when three other doctors had missed it. The endoscopic treatment was painless. I highly recommend SR³.', stars: 5 },
  { name: 'Priya V.', role: 'Post-Surgery Patient', text: 'I had my gallbladder removed laparoscopically by Dr. Vishwakarma. Minimal pain, discharged in 24 hours. The entire team was incredibly professional and caring.', stars: 5 },
  { name: 'Sunita M.', role: 'Maternity Patient', text: 'Dr. Madhu Agrawal guided me through my high-risk pregnancy with exceptional care. I delivered safely and the staff were warm and attentive throughout.', stars: 5 },
  { name: 'Ajay K.', role: 'Physiotherapy Patient', text: "After two years of knee pain, Dr. Leena Verma's physiotherapy programme gave me my life back in just 6 weeks. Truly life-changing care.", stars: 5 },
]

export default function Home() {
  const [statsRef, statsInView] = useInView()
  const [servicesRef, servicesInView] = useInView()
  const [testimonialsRef, testimonialsInView] = useInView()

  return (
    <>
      {/* ── Hero ── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
            alt="Modern hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-light/85" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)`, backgroundSize: '44px 44px' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center pt-32">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-gold tracking-[0.35em] text-xs font-sans uppercase mb-6">
            Advanced ENT · Surgical · Multispecialty Care · Lucknow
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="font-serif text-4xl sm:text-5xl md:text-[64px] text-white leading-tight mb-5">
            World-Class Healthcare,{' '}
            <span className="text-gold-gradient">Delivered with Compassion.</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.55 }} className="w-24 h-0.5 gold-gradient mx-auto mb-6" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="font-sans text-white/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Advanced ENT, Surgical, and Multispecialty Care in Lucknow.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 gold-gradient text-navy font-sans font-semibold text-sm tracking-wide rounded-full shadow-xl shadow-gold/25">
                Schedule a Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/specialities" className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-sans font-medium text-sm tracking-wide rounded-full hover:border-gold hover:text-gold transition-colors">
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="w-6 h-6 text-gold/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Quick Stats Bar ── */}
      <section ref={statsRef} className="bg-navy py-10 border-y border-gold/15">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-gold/15">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 py-4 sm:py-0"
              >
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-2xl text-gold font-bold leading-none">{s.value}</p>
                  <p className="text-white/55 font-sans text-xs mt-0.5 tracking-wide">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Abbreviated Services ── */}
      <section ref={servicesRef} className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Centers of Excellence</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">Our <span className="text-gold-gradient">Services</span></h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
            <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">Five specialities, one address. Expert care from diagnosis to complete recovery.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <svc.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg text-navy mb-3">{svc.title}</h3>
                <ul className="space-y-1.5 mb-5">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-sans text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to={svc.to} className="inline-flex items-center gap-1.5 text-gold font-sans text-sm font-medium hover:gap-3 transition-all duration-200">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/specialities" className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-sans font-medium text-sm rounded-full hover:bg-navy-light transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section ref={testimonialsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={testimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Patient Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">Real <span className="text-gold-gradient">Success Stories</span></h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
            <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">The trust of thousands of families from Lucknow and across Uttar Pradesh is our greatest achievement.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-clinical-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => <Star key={s} className="w-4 h-4 text-gold fill-gold" />)}
                </div>
                <p className="font-sans text-gray-600 leading-relaxed text-sm mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-serif font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-navy text-sm">{t.name}</p>
                    <p className="font-sans text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Experience Premium Care?</h2>
          <p className="font-sans text-white/55 text-sm leading-relaxed mb-8">Our specialists are available for OPD consultations, second opinions, and emergency care. Call us or book online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 gold-gradient text-navy font-sans font-semibold text-sm rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-gold/20">
              Book Appointment
            </Link>
            <a href="tel:+919369643922" className="inline-flex items-center justify-center px-8 py-3.5 border border-gold/40 text-white font-sans font-medium text-sm rounded-full hover:border-gold hover:text-gold transition-colors">
              Call +91 9369643922
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
