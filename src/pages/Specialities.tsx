import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { ArrowRight, GraduationCap, Award, ChevronDown, Ear, Scissors, Baby, Heart, CheckCircle2 } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Samvartika',
    quals: 'M.B.B.S., D.L.O.',
    role: 'ENT Specialist',
    reg: 'Reg No. 56440',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    specialties: ['Endoscopic ENT Surgery', 'Head & Neck Surgery', 'Audiometry'],
  },
  {
    name: 'Dr. R.K. Vishwakarma',
    quals: 'M.B.B.S., MS, FIAGES, DIPMAS, FISCP',
    role: 'General & Laparoscopic Surgeon',
    reg: 'Reg No. 55922',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    specialties: ['Laparoscopic Surgery', 'Piles & Fistula (Laser)', 'Hernia Repair'],
  },
  {
    name: 'Dr. Madhu Agrawal',
    quals: 'M.B.B.S.',
    role: 'Obstetrics & Gynaecology',
    reg: 'Reg No. 45480',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
    specialties: ['Pregnancy & Maternity Care', 'Infertility Treatment', 'Uterine Surgery'],
  },
  {
    name: 'Dr. Leena Verma',
    quals: 'Physiotherapist',
    role: 'Physiotherapy & Rehabilitation',
    reg: 'Reg No. 16731',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
    specialties: ['Neck & Back Therapy', 'Knee Rehabilitation', 'Sports Physiotherapy'],
  },
  {
    name: 'Dr. Induja Dixit',
    quals: 'MSc, PhD',
    role: 'Consultant Dietitian',
    reg: '',
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80',
    specialties: ['Clinical Nutrition', 'Weight Management', 'Post-surgical Diet'],
  },
]

const serviceTabs = [
  {
    id: 'ent',
    label: 'ENT & Head/Neck',
    icon: Ear,
    doctor: 'Dr. Samvartika',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    desc: 'Comprehensive ear, nose, throat, head and neck care using advanced endoscopic and laser technology.',
    services: [
      { name: 'Endoscopic ENT Surgeries', detail: 'Minimally invasive procedures using HD endoscopes for accurate diagnosis and treatment.' },
      { name: 'Tonsil & Adenoid Treatments', detail: 'Tonsillectomy, adenoidectomy, and treatment for recurrent throat infections.' },
      { name: 'Thyroid & Salivary Gland Surgeries', detail: 'Expert surgical management of thyroid nodules, goitre, and salivary gland disorders.' },
      { name: 'Head, Neck, Oral & Throat Cancer Care', detail: 'Early detection, biopsy, and multidisciplinary surgical management of head and neck cancers.' },
      { name: 'Audiometry (Hearing Tests) & Hearing Aids', detail: 'Comprehensive hearing assessment, audiogram interpretation, and custom hearing aid fitting.' },
    ],
  },
  {
    id: 'surgery',
    label: 'General Surgery',
    icon: Scissors,
    doctor: 'Dr. R.K. Vishwakarma',
    img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80',
    desc: 'Fellowship-trained laparoscopic and open surgical procedures performed in our advanced operating suites.',
    services: [
      { name: 'Laparoscopic & Open Surgeries', detail: 'Keyhole surgery for gallbladder, appendix, and abdominal conditions with rapid recovery.' },
      { name: 'Gallbladder, Appendix, Hernia & Prostate', detail: 'Definitive surgical treatment for common and complex abdominal conditions.' },
      { name: 'Laser & Ksharsutra for Piles, Fissure, Fistula', detail: 'Pain-free, daycare laser procedures and traditional Ksharsutra therapy for anorectal conditions.' },
      { name: 'Kidney Stone & Tumor Surgeries', detail: 'Minimally invasive urological procedures for stones, cysts, and benign tumors.' },
    ],
  },
  {
    id: 'gynae',
    label: 'Obstetrics & Gynaecology',
    icon: Baby,
    doctor: 'Dr. Madhu Agrawal',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    desc: "Expert women's health services covering maternity care, gynaecological surgery, and fertility treatment.",
    services: [
      { name: 'Cesarean Delivery & Pregnancy Care', detail: 'Comprehensive antenatal, intrapartum, and postnatal care for safe and healthy deliveries.' },
      { name: 'Infertility Treatment & Menstrual Disorders', detail: 'Evidence-based assessment and treatment for infertility, PCOS, endometriosis, and irregular cycles.' },
      { name: 'Uterine Tumor Surgeries', detail: 'Minimally invasive myomectomy and hysterectomy for fibroids and uterine tumors.' },
    ],
  },
  {
    id: 'allied',
    label: 'Allied Health',
    icon: Heart,
    doctor: 'Dr. Leena Verma & Dr. Induja Dixit',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    desc: 'On-site physiotherapy, dietetics, and diagnostics for holistic patient wellbeing.',
    services: [
      { name: 'Advanced Physiotherapy (Neck, Back, Knee)', detail: 'Evidence-based physiotherapy for musculoskeletal pain, sports injuries, and post-operative rehabilitation.' },
      { name: 'Diet & Nutritional Counseling', detail: 'Personalised nutrition planning for weight management, diabetes, post-surgery recovery, and chronic conditions.' },
      { name: 'Blood Tests, BP/Sugar Monitoring & Nebulization', detail: 'On-site pathology, routine monitoring services, and respiratory nebulization therapy.' },
    ],
  },
]

function AccordionItem({ name, detail }: { name: string; detail: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-clinical-white transition-colors text-left">
        <span className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
          <span className="font-sans text-navy text-sm font-medium">{name}</span>
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-5 pb-4 pt-1 font-sans text-gray-500 text-sm leading-relaxed border-t border-gray-100 bg-clinical-white">
              {detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Specialities() {
  const [active, setActive] = useState(serviceTabs[0].id)
  const [doctorsRef, doctorsInView] = useInView()
  const [servicesRef, servicesInView] = useInView()
  const current = serviceTabs.find((t) => t.id === active)!

  return (
    <>
      {/* Page Header */}
      <div className="bg-navy pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Expert Care</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">Specialities <span className="text-gold-gradient">&amp; Doctors</span></h1>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-2xl mx-auto">
            Our fellowship-trained specialists bring decades of combined experience to deliver precise, compassionate care across five clinical disciplines.
          </p>
        </div>
      </div>

      {/* Doctors Grid */}
      <section ref={doctorsRef} className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={doctorsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Our Team</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
              Our World-Class <span className="text-gold-gradient">Specialists</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 40 }}
                animate={doctorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-navy mb-0.5">{doc.name}</h3>
                  <p className="text-gold text-xs font-sans font-semibold tracking-wide uppercase mb-2">{doc.role}</p>

                  <div className="flex items-start gap-2 mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                    <p className="font-sans text-gray-500 text-xs leading-relaxed">{doc.quals}</p>
                  </div>
                  {doc.reg && (
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <p className="font-sans text-gray-500 text-xs">{doc.reg}</p>
                    </div>
                  )}
                  {!doc.reg && <div className="mb-4" />}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {doc.specialties.map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-gold/8 text-gold text-xs font-sans rounded-full border border-gold/15">{s}</span>
                    ))}
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-gold font-sans text-sm font-medium hover:gap-3 transition-all duration-200">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services – Vertical Tabs + Accordions */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Detailed Services</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
              Centers of <span className="text-gold-gradient">Excellence</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto" />
          </motion.div>

          {/* Tab pills */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {serviceTabs.map((t) => {
              const Icon = t.icon
              const isActive = active === t.id
              return (
                <button key={t.id} onClick={() => setActive(t.id)} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-200 ${isActive ? 'gold-gradient text-navy shadow-md shadow-gold/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  <Icon className="w-4 h-4" />
                  {t.label}
                </button>
              )
            })}
          </motion.div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-5 gap-0 bg-clinical-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Image */}
              <div className="md:col-span-2 h-64 md:h-auto overflow-hidden">
                <img src={current.img} alt={current.label} className="w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="md:col-span-3 p-8 md:p-10">
                <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">Led by {current.doctor}</p>
                <h3 className="font-serif text-2xl text-navy mb-2">{current.label}</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-7">{current.desc}</p>
                <div className="space-y-3">
                  {current.services.map((s) => <AccordionItem key={s.name} name={s.name} detail={s.detail} />)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
