import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowRight } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Samvartika',
    quals: 'M.B.B.S., D.L.O.',
    role: 'ENT Specialist',
    reg: 'Reg No. 56440',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    color: 'from-navy/80',
  },
  {
    name: 'Dr. R.K. Vishwakarma',
    quals: 'M.B.B.S., MS, FIAGES, DIPMAS, FISCP',
    role: 'General & Laparoscopic Surgeon',
    reg: 'Reg No. 55922',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    color: 'from-navy/80',
  },
  {
    name: 'Dr. Madhu Agrawal',
    quals: 'M.B.B.S.',
    role: 'Obstetrics and Gynaecology',
    reg: 'Reg No. 45480',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
    color: 'from-navy/80',
  },
  {
    name: 'Dr. Leena Verma',
    quals: 'Physiotherapist',
    role: 'Physiotherapy & Rehabilitation',
    reg: 'Reg No. 16731',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
    color: 'from-navy/80',
  },
  {
    name: 'Dr. Induja Dixit',
    quals: 'MSc, PhD',
    role: 'Consultant Dietitian',
    reg: '',
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80',
    color: 'from-navy/80',
  },
]

export default function Specialists() {
  const [ref, inView] = useInView()

  return (
    <section id="specialists" className="py-28 bg-clinical-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Our Team</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
            Our World-Class <span className="text-gold-gradient">Specialists</span>
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
          <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            A multidisciplinary team of fellowship-trained specialists committed to delivering the highest standard of care.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
            >
              {/* Portrait */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${doc.color} via-transparent to-transparent`} />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy leading-snug mb-1">{doc.name}</h3>
                <p className="font-sans text-gold text-xs font-semibold tracking-wide uppercase mb-1">{doc.role}</p>
                <p className="font-sans text-gray-400 text-xs mb-1">{doc.quals}</p>
                {doc.reg && (
                  <p className="font-sans text-gray-400 text-xs mb-4">{doc.reg}</p>
                )}
                {!doc.reg && <div className="mb-4" />}

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-gold font-sans text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  View Profile <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
