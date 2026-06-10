import { Monitor, Stethoscope, BedDouble, ShieldCheck, ScanLine, Microscope, HeartPulse, Clock, Award, Users, ArrowRight, Phone, MessageCircle, CircleCheck as CircleCheck, Sparkles, ThermometerSun, Syringe, Activity, Pill, FlaskConical, Zap, Wind, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { useSEO, breadcrumbSchema } from '../hooks/useSEO';
import { CLINIC } from '../data/clinic';

// ── Data ──

const facilityHighlights = [
  { Icon: Monitor, title: 'HD Endoscopic Suite', desc: 'High-definition endoscopy for precise sinus, ear, and throat procedures with real-time visualization.' },
  { Icon: ScanLine, title: 'Advanced Diagnostic Lab', desc: 'In-house laboratory for blood work, cultures, and pathology — results faster, treatment sooner.' },
  { Icon: Syringe, title: 'Laparoscopic Tower', desc: 'State-of-the-art minimally invasive surgical system with HD camera and precision instruments.' },
  { Icon: BedDouble, title: 'Recovery Rooms', desc: 'Comfortable, monitored post-operative recovery bays with dedicated nursing care.' },
  { Icon: ThermometerSun, title: 'Physiotherapy Unit', desc: 'Fully equipped rehabilitation space with electrotherapy, ultrasound, and exercise stations.' },
  { Icon: Pill, title: 'In-House Pharmacy', desc: 'Well-stocked pharmacy ensuring immediate availability of prescribed medications.' },
];

const consultationRooms = [
  { title: 'ENT Consultation Suite', desc: 'Sound-proofed rooms with audiometric testing capability and endoscopic examination stations. Designed for patient comfort and clinical precision.', image: 'https://images.pexels.com/photos/6533326/pexels-photo-6533326.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Surgical Consultation Room', desc: 'Private consultation space with anatomical models and digital imaging displays. Dr. Vishwakarma uses visual aids to explain procedures clearly.', image: 'https://images.pexels.com/photos/4056824/pexels-photo-4056824.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: "Women's Health Room", desc: 'A private, calming space for gynecological consultations with built-in ultrasound access. Designed for discretion and comfort.', image: 'https://images.pexels.com/photos/668296/pexels-photo-668296.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const diagnosticFacilities = [
  { Icon: FlaskConical, title: 'Pathology & Blood Lab', desc: 'Complete hematology, biochemistry, and microbiology testing. CBC, liver and kidney function, thyroid panels, and more — processed in-house for rapid turnaround.' },
  { Icon: Stethoscope, title: 'Audiometry & Hearing Lab', desc: 'Pure-tone and speech audiometry, tympanometry, and OAE testing for comprehensive hearing assessment across all age groups.' },
  { Icon: Activity, title: 'ECG & Vital Monitoring', desc: '12-lead ECG and continuous vital sign monitoring for pre-operative assessment and peri-operative safety.' },
  { Icon: Microscope, title: 'Endoscopic Examination', desc: 'Rigid and flexible endoscopy for detailed visualization of nasal passages, throat, and ear canals — enabling same-visit diagnosis.' },
  { Icon: ScanLine, title: 'Ultrasound Imaging', desc: 'On-site ultrasound for abdominal, pelvic, and thyroid imaging. Essential for gallbladder assessment, gynecological evaluation, and guided procedures.' },
  { Icon: Zap, title: 'Electrotherapy Suite', desc: 'TENS, interferential therapy, ultrasound therapy, and muscle stimulation units for physiotherapy and pain management.' },
];

const patientExperienceFeatures = [
  { Icon: Wind, title: 'Air-Conditioned Interiors', desc: 'Climate-controlled waiting areas and consultation rooms for year-round comfort.' },
  { Icon: Coffee, title: 'Comfortable Waiting Lounge', desc: 'Spacious, well-lit waiting area with seating, drinking water, and reading material.' },
  { Icon: ShieldCheck, title: 'Strict Hygiene Protocols', desc: 'Hospital-grade disinfection, sterilized instruments, and hand hygiene stations throughout.' },
  { Icon: Clock, title: 'Minimal Wait Times', desc: 'Appointment-based system ensures you spend less time waiting and more time with your doctor.' },
  { Icon: Users, title: 'Friendly Support Staff', desc: 'Our front desk and nursing team is trained to assist, guide, and put you at ease from the moment you arrive.' },
  { Icon: Sparkles, title: 'Clean, Modern Design', desc: 'A thoughtfully designed space that feels more like a premium clinic than a hospital — calming and professional.' },
];

const facilityStats = [
  { value: '6', label: 'Speciality Departments', Icon: HeartPulse },
  { value: '15+', label: 'Years of Operation', Icon: Clock },
  { value: '24/7', label: 'Emergency Access', Icon: ShieldCheck },
  { value: '50K+', label: 'Patients Treated', Icon: Users },
];

const whyChoosePoints = [
  'All departments under one roof — no running between clinics',
  'In-house lab and pharmacy for one-stop convenience',
  'Advanced surgical technology normally found only in large hospitals',
  'Strict infection control and sterilization protocols',
  'Comfortable, air-conditioned patient areas',
  'Digital health records for seamless continuity of care',
  'Affordable pricing without compromising on quality',
  'Central Lucknow location with easy road access',
];

const galleryImages = [
  { src: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modern hospital corridor' },
  { src: 'https://images.pexels.com/photos/4056824/pexels-photo-4056824.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Advanced surgical equipment' },
  { src: 'https://images.pexels.com/photos/6533326/pexels-photo-6533326.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Doctor consultation room' },
  { src: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Medical diagnostic equipment' },
  { src: 'https://images.pexels.com/photos/668296/pexels-photo-668296.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Patient care area' },
  { src: 'https://images.pexels.com/photos/3346136/pexels-photo-3346136.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modern medical facility' },
];

const journeySteps = [
  { step: 1, title: 'Arrive & Register', desc: 'Walk in or check in via appointment. Our front desk team guides you through a smooth registration process.' },
  { step: 2, title: 'Consultation', desc: 'Meet your specialist in a private consultation room. Thorough evaluation, clear explanation, and a personalized plan.' },
  { step: 3, title: 'Diagnostics', desc: 'In-house lab, imaging, and testing — no need to visit another facility. Results available quickly.' },
  { step: 4, title: 'Treatment', desc: 'From medication to surgery, every procedure is performed with precision, safety protocols, and your comfort in mind.' },
  { step: 5, title: 'Recovery & Follow-Up', desc: 'Dedicated recovery areas, post-treatment guidance, and scheduled follow-ups to ensure complete healing.' },
];

// ── SEO Schema ──

const facilitiesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Facilities', url: '/facilities' },
    ]),
    {
      '@type': 'WebPage',
      '@id': 'https://sr3entandsurgicalcentre.com/facilities#page',
      'name': 'Facilities — SR³ ENT & Surgical Centre Lucknow',
      'description': 'Explore the state-of-the-art facilities at SR³ ENT & Surgical Centre — advanced diagnostic labs, modern consultation rooms, surgical suites, and patient amenities in Lucknow.',
      'url': 'https://sr3entandsurgicalcentre.com/facilities',
      'isPartOf': { '@id': 'https://sr3entandsurgicalcentre.com/#website' },
      'about': { '@id': 'https://sr3entandsurgicalcentre.com/#organization' },
    },
  ],
};

// ── Component ──

export default function FacilitiesPage() {
  useSEO({
    title: 'Facilities — Advanced Medical Infrastructure in Lucknow',
    description: 'Explore state-of-the-art facilities at SR³ ENT & Surgical Centre Lucknow — HD endoscopy, laparoscopic tower, in-house lab & pharmacy, modern consultation rooms, and patient amenities.',
    keywords: 'hospital facilities Lucknow, ENT clinic facilities, laparoscopic surgery centre Lucknow, diagnostic lab Lucknow, modern hospital Lucknow, SR3 facilities',
    canonical: '/facilities',
    schema: facilitiesSchema,
  });

  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: highlightsRef, isInView: highlightsInView } = useInView(0.08);
  const { ref: consultRef, isInView: consultInView } = useInView(0.08);
  const { ref: diagRef, isInView: diagInView } = useInView(0.08);
  const { ref: expRef, isInView: expInView } = useInView(0.08);
  const { ref: statsRef, isInView: statsInView } = useInView(0.1);
  const { ref: whyRef, isInView: whyInView } = useInView(0.08);
  const { ref: galleryRef, isInView: galleryInView } = useInView(0.08);
  const { ref: journeyRef, isInView: journeyInView } = useInView(0.08);
  const { ref: ctaRef, isInView: ctaInView } = useInView(0.1);

  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-100)', padding: '10px 0' }}>
        <div className="container">
          <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: 'var(--neutral-300)', fontSize: 'var(--text-xs)' }}>›</li>
            <li><span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--navy-700)', fontWeight: 500 }}>Facilities</span></li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section ref={heroRef} aria-labelledby="facilities-heading" style={{
        padding: 'var(--space-16) 0 var(--space-12)',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: '40%', height: '80%', background: 'radial-gradient(ellipse, rgba(8,196,171,0.04) 0%, transparent 55%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 800, opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Our Infrastructure</span>
          <h1 id="facilities-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            World-Class Facilities,{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--gold-400), var(--teal-400))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Close to Home
            </span>
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.55)', maxWidth: 600, lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-8)' }}>
            Advanced diagnostic labs, modern surgical suites, and comfortable patient areas — everything you need for exceptional healthcare, right here in Lucknow.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Link to="/appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
              fontFamily: 'var(--font-accent)', boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
              textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(230,168,23,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,168,23,0.35)'; }}>
              Book Appointment <ArrowRight size={18} />
            </Link>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)',
              color: 'var(--neutral-100)', fontSize: 'var(--text-base)', fontWeight: 500,
              fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}>
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Facility Highlights Grid */}
      <section ref={highlightsRef} aria-labelledby="highlights-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: highlightsInView ? 1 : 0, transform: highlightsInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <span className="section-label">What We Offer</span>
            <h2 id="highlights-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>
              Facility Highlights
            </h2>
            <div className="divider divider-center" />
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 560, margin: 'var(--space-4) auto 0', lineHeight: 'var(--leading-relaxed)' }}>
              Every detail is designed for clinical precision, patient comfort, and safety — from our surgical suites to our waiting areas.
            </p>
          </div>
          <div className="facilities-highlights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            {facilityHighlights.map((f, i) => (
              <div key={f.title} style={{
                padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                opacity: highlightsInView ? 1 : 0,
                transform: highlightsInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${i * 80}ms`,
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--navy-200)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--neutral-100)'; }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                  <f.Icon size={24} style={{ color: 'var(--navy-700)' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)' }}>{f.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Modern Consultation Rooms */}
      <section ref={consultRef} aria-labelledby="consult-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: consultInView ? 1 : 0, transform: consultInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <span className="section-label">Consultation Spaces</span>
            <h2 id="consult-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>
              Modern Consultation Rooms
            </h2>
            <div className="divider divider-center" />
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 560, margin: 'var(--space-4) auto 0', lineHeight: 'var(--leading-relaxed)' }}>
              Private, well-equipped spaces where your specialist can evaluate, explain, and plan your treatment with clarity and care.
            </p>
          </div>
          <div className="facilities-consult-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            {consultationRooms.map((room, i) => (
              <div key={room.title} style={{
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                opacity: consultInView ? 1 : 0,
                transform: consultInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${i * 100}ms`,
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--navy-200)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--neutral-100)'; }}>
                <div style={{ width: '100%', height: 200, overflow: 'hidden' }}>
                  <img src={room.image} alt={room.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }} />
                </div>
                <div style={{ padding: 'var(--space-5)' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)' }}>{room.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>{room.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Diagnostic & Examination Facilities */}
      <section ref={diagRef} aria-labelledby="diag-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: diagInView ? 1 : 0, transform: diagInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <span className="section-label">Diagnostics</span>
            <h2 id="diag-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>
              Diagnostic & Examination Facilities
            </h2>
            <div className="divider divider-center" />
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 560, margin: 'var(--space-4) auto 0', lineHeight: 'var(--leading-relaxed)' }}>
              Comprehensive in-house diagnostics mean faster results, fewer visits, and treatment plans that start sooner.
            </p>
          </div>
          <div className="facilities-diag-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            {diagnosticFacilities.map((d, i) => (
              <div key={d.title} style={{
                padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                display: 'flex', gap: 'var(--space-4)',
                opacity: diagInView ? 1 : 0,
                transform: diagInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${i * 80}ms`,
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--navy-200)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--neutral-100)'; }}>
                <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--teal-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <d.Icon size={22} style={{ color: 'var(--teal-700)' }} aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-1)' }}>{d.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Patient Experience */}
      <section ref={expRef} aria-labelledby="experience-heading" style={{ padding: 'var(--space-16) 0', background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '40%', height: '100%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.04) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: expInView ? 1 : 0, transform: expInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Your Comfort Matters</span>
            <h2 id="experience-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--neutral-0)' }}>
              Patient Experience
            </h2>
            <div className="divider divider-center" style={{ background: 'linear-gradient(90deg, var(--gold-500), var(--gold-300))' }} />
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.5)', maxWidth: 560, margin: 'var(--space-4) auto 0', lineHeight: 'var(--leading-relaxed)' }}>
              From the moment you step in, every detail is designed to put you at ease.
            </p>
          </div>
          <div className="facilities-exp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {patientExperienceFeatures.map((f, i) => (
              <div key={f.title} style={{
                padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                opacity: expInView ? 1 : 0,
                transform: expInView ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.5s ease-out ${i * 70}ms`,
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(230,168,23,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-3)' }}>
                  <f.Icon size={20} style={{ color: 'var(--gold-400)' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--neutral-0)', marginBottom: 'var(--space-1)' }}>{f.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.45)', lineHeight: 'var(--leading-relaxed)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Facility Statistics */}
      <section ref={statsRef} aria-label="Facility statistics" style={{ padding: 'var(--space-12) 0', background: 'var(--navy-50)' }}>
        <div className="container">
          <div className="facilities-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }}>
            {facilityStats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: 'center', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.5s ease-out ${i * 80}ms`,
              }}>
                <s.Icon size={24} style={{ color: 'var(--gold-500)', margin: '0 auto var(--space-2)' }} aria-hidden="true" />
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--navy-900)', lineHeight: 1.1, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', letterSpacing: '0.02em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Our Facilities */}
      <section ref={whyRef} aria-labelledby="why-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: whyInView ? 1 : 0, transform: whyInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <span className="section-label">The SR³ Advantage</span>
            <h2 id="why-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>
              Why Choose Our Facilities
            </h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }} className="facilities-why-grid">
            {whyChoosePoints.map((point, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
                padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-md)',
                background: 'var(--neutral-50)', border: '1px solid var(--neutral-100)',
                opacity: whyInView ? 1 : 0,
                transform: whyInView ? 'translateY(0)' : 'translateY(12px)',
                transition: `all 0.5s ease-out ${i * 60}ms`,
              }}>
                <CircleCheck size={18} style={{ color: 'var(--teal-600)', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-700)', lineHeight: 'var(--leading-relaxed)' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Facility Gallery */}
      <section ref={galleryRef} aria-labelledby="gallery-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: galleryInView ? 1 : 0, transform: galleryInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <span className="section-label">Virtual Tour</span>
            <h2 id="gallery-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>
              Facility Gallery
            </h2>
            <div className="divider divider-center" />
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 560, margin: 'var(--space-4) auto 0', lineHeight: 'var(--leading-relaxed)' }}>
              A glimpse into our modern, patient-friendly infrastructure.
            </p>
          </div>
          <div className="facilities-gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {galleryImages.map((img, i) => (
              <div key={i} style={{
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                aspectRatio: '16/10', position: 'relative',
                opacity: galleryInView ? 1 : 0,
                transform: galleryInView ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.5s ease-out ${i * 80}ms`,
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-xl)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <img src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,12,24,0.5) 0%, transparent 50%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 'var(--space-3)', left: 'var(--space-4)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>{img.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Patient Journey Timeline */}
      <section ref={journeyRef} aria-labelledby="journey-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: journeyInView ? 1 : 0, transform: journeyInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <span className="section-label">Your Visit</span>
            <h2 id="journey-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>
              Patient Journey at SR³
            </h2>
            <div className="divider divider-center" />
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 560, margin: 'var(--space-4) auto 0', lineHeight: 'var(--leading-relaxed)' }}>
              From arrival to recovery — a seamless, guided experience at every step.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Connecting line */}
            <div style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, var(--navy-200), var(--gold-300), var(--teal-300))' }} aria-hidden="true" />
            <div className="facilities-journey-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {journeySteps.map((step, i) => (
                <div key={step.step} style={{
                  display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start',
                  opacity: journeyInView ? 1 : 0,
                  transform: journeyInView ? 'translateY(0)' : 'translateY(16px)',
                  transition: `all 0.5s ease-out ${i * 100}ms`,
                }}>
                  <div style={{ flexShrink: 0, width: 64, height: 64, borderRadius: '50%', background: 'var(--neutral-0)', border: '2px solid var(--navy-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--navy-800)' }}>{step.step}</span>
                  </div>
                  <div style={{ paddingTop: 'var(--space-2)' }}>
                    <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--gold-600)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Step {step.step}</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-1)' }}>{step.title}</h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Appointment CTA */}
      <section ref={ctaRef} aria-label="Book appointment" style={{ padding: 'var(--space-16) 0', background: 'linear-gradient(135deg, var(--navy-900), var(--navy-800))', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div style={{ opacity: ctaInView ? 1 : 0, transform: ctaInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(230,168,23,0.1)', border: '1px solid rgba(230,168,23,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-5)' }}>
              <Award size={24} style={{ color: 'var(--gold-400)' }} aria-hidden="true" />
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
              Experience Our Facilities First-Hand
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
              Book your consultation and see why {CLINIC.patients} patients trust SR³ for their healthcare. Walk in today or schedule your visit.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/appointment" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '13px var(--space-7)', borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 700,
                fontFamily: 'var(--font-accent)', boxShadow: 'var(--shadow-gold)',
                textDecoration: 'none', transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,168,23,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-gold)'; }}>
                Book Appointment <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '13px var(--space-7)', borderRadius: 'var(--radius-full)',
                background: 'transparent', border: '1px solid rgba(255,255,255,0.25)',
                color: 'var(--neutral-0)', fontSize: 'var(--text-base)', fontWeight: 600,
                fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'transparent'; }}>
                <Phone size={16} /> Call Now
              </a>
              <a href={`https://wa.me/${waNumber}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20SR3%20ENT%20%26%20Surgical%20Centre.`} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '13px var(--space-7)', borderRadius: 'var(--radius-full)',
                background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)',
                color: '#25d366', fontSize: 'var(--text-base)', fontWeight: 600,
                fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.15)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.25)'; }}>
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .facilities-highlights-grid,
          .facilities-consult-grid,
          .facilities-diag-grid,
          .facilities-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .facilities-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .facilities-highlights-grid,
          .facilities-consult-grid,
          .facilities-diag-grid,
          .facilities-exp-grid,
          .facilities-gallery-grid { grid-template-columns: 1fr !important; }
          .facilities-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .facilities-why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .facilities-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
