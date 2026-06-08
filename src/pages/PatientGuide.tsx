import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ChevronDown, ClipboardList, CreditCard, FileText, CheckCircle2, Shield } from 'lucide-react'

const admissionSteps = [
  { step: '01', title: 'OPD Consultation', desc: 'Walk in or call ahead. Consult with our specialist who will diagnose your condition and recommend the appropriate treatment pathway.' },
  { step: '02', title: 'Investigation & Reports', desc: 'On-site blood tests, imaging, and diagnostic workup. Our team coordinates all investigations for a swift turnaround.' },
  { step: '03', title: 'Pre-Admission Counselling', desc: 'Our patient coordinator explains the procedure, estimated costs, insurance applicability, and answers all your questions.' },
  { step: '04', title: 'Admission & Surgery Scheduling', desc: 'Choose a convenient date. Our administrative team handles all paperwork, bed allocation, and pre-operative preparation.' },
  { step: '05', title: 'Procedure & Recovery', desc: 'Your procedure is performed in our state-of-the-art theatre. Our nursing team monitors you through recovery with round-the-clock care.' },
  { step: '06', title: 'Discharge & Follow-up', desc: 'Clear discharge instructions, prescribed medications, and a scheduled follow-up appointment to ensure complete recovery.' },
]

const insurers = [
  'Star Health Insurance', 'HDFC ERGO Health', 'Bajaj Allianz Health', 'New India Assurance',
  'United India Insurance', 'National Insurance', 'Care Health Insurance', 'Niva Bupa (Max Bupa)',
  'Aditya Birla Health', 'ICICI Lombard Health', 'SBI Health Insurance', 'Religare Health',
]

const cashlessDocuments = [
  'Original health insurance card / policy document',
  'Valid government-issued photo ID (Aadhaar, Passport, Driving License)',
  'TPA pre-authorization form (we assist with filling)',
  'Referral letter from family physician (if required by insurer)',
  'Previous relevant diagnostic reports',
]

const faqs = [
  {
    q: 'Do I need an appointment for OPD?',
    a: 'Walk-in OPD is available during clinic hours. However, we strongly recommend calling ahead (+91 9369643922) to minimise waiting time, especially for specialist consultations.',
  },
  {
    q: 'What documents are required for cashless surgery?',
    a: 'You will need your health insurance card, a valid photo ID, TPA pre-authorization form, and any relevant prior medical reports. Our patient coordinator will guide you through the complete process.',
  },
  {
    q: 'How early should I arrive before a scheduled surgery?',
    a: 'Please arrive at least 2 hours before your scheduled surgery time. This allows time for pre-operative preparation, consent signing, anaesthesia review, and nursing assessment.',
  },
  {
    q: 'Is there a facility for attendants to stay with patients?',
    a: 'Yes. We provide attendant accommodation adjacent to private wards. One attendant may stay with the patient throughout the admission period at no additional charge.',
  },
  {
    q: 'Are all surgeries available under cashless insurance?',
    a: 'Most planned surgical procedures are covered under cashless insurance, subject to your policy terms. Our billing team will verify your coverage and obtain pre-authorization before the procedure.',
  },
  {
    q: 'What is the average recovery time after laparoscopic surgery?',
    a: 'Most laparoscopic procedures are daycare or require a 1-2 day stay. Patients typically return to light activity within 3-5 days and full activity within 2-3 weeks, depending on the procedure.',
  },
  {
    q: 'Do you provide second opinions for complex cases?',
    a: 'Absolutely. We offer comprehensive second opinion consultations for complex ENT, surgical, and gynaecological conditions. Bring all your reports and scans for a thorough review.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-clinical-white transition-colors text-left gap-4">
        <span className="font-sans text-navy text-sm font-medium">{q}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="px-6 pb-5 pt-2 font-sans text-gray-500 text-sm leading-relaxed border-t border-gray-100 bg-clinical-white">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PatientGuide() {
  const [admissionRef, admissionInView] = useInView()
  const [insuranceRef, insuranceInView] = useInView()
  const [faqRef, faqInView] = useInView()

  return (
    <>
      {/* Page Header */}
      <div className="bg-navy pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">For Our Patients</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">Patient <span className="text-gold-gradient">Guide</span></h1>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about visiting SR³ — from your first appointment to complete recovery.
          </p>
        </div>
      </div>

      {/* Admission Process */}
      <section ref={admissionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={admissionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Step by Step</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
              Admission <span className="text-gold-gradient">Process</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
            <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              We have made the admission process as seamless and transparent as possible so you can focus on what matters — your recovery.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-8 bottom-8 w-0.5 bg-gold/20" />

            <div className="space-y-8">
              {admissionSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={admissionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? '' : 'md:rtl'}`}
                >
                  {/* Step card */}
                  <div className={`bg-clinical-white rounded-2xl p-7 border border-gray-100 shadow-sm ${i % 2 !== 0 ? 'md:ltr' : ''}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl font-serif text-gold/30 font-bold leading-none">{s.step}</span>
                      <h3 className="font-serif text-xl text-navy">{s.title}</h3>
                    </div>
                    <p className="font-sans text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>

                  {/* Connector dot (centered) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gold-gradient items-center justify-center shadow-md shadow-gold/30 z-10">
                    <ClipboardList className="w-4 h-4 text-navy" />
                  </div>

                  {/* Empty spacer for opposite side */}
                  <div />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & TPA */}
      <section ref={insuranceRef} className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={insuranceInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Cashless Facility</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
              Insurance &amp; <span className="text-gold-gradient">TPA Tie-ups</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
            <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              SR³ is empanelled with all major health insurance providers and TPAs, ensuring a hassle-free cashless experience for our patients.
            </p>
          </motion.div>

          {/* Banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={insuranceInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="bg-navy rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-6 border border-gold/15">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
              <CreditCard className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-white mb-1">Cashless Treatment Available</h3>
              <p className="font-sans text-white/55 text-sm leading-relaxed">
                Avail cashless treatment for planned surgeries and admissions. Our insurance desk handles pre-authorization, claim submission, and all insurance paperwork on your behalf.
              </p>
            </div>
            <a href="tel:+919369643922" className="shrink-0 px-6 py-3 gold-gradient text-navy font-sans font-semibold text-sm rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
              Call Insurance Desk
            </a>
          </motion.div>

          {/* Insurer logos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {insurers.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={insuranceInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col items-center gap-3 hover:border-gold/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <p className="font-sans text-navy text-xs font-medium text-center leading-snug">{name}</p>
              </motion.div>
            ))}
          </div>

          {/* Documents needed */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={insuranceInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <FileText className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-xl text-navy">Documents Required for Cashless Surgery</h3>
            </div>
            <ul className="space-y-3">
              {cashlessDocuments.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="font-sans text-gray-700 text-sm">{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">Common Questions</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
            <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Can't find what you're looking for? Call us directly and we'll be happy to help.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-3">
            {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </motion.div>
        </div>
      </section>
    </>
  )
}
