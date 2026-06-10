import { useState } from 'react';
import { Phone, ArrowRight, MessageCircle, CircleCheck as CircleCheck, ChevronDown, Award, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { CLINIC, DOCTORS, SERVICES, SERVICE_DETAILS } from '../data/clinic';

export default function ServicePageTemplate({ serviceId }: { serviceId: string }) {
  const service = SERVICES.find(s => s.id === serviceId);
  const details = SERVICE_DETAILS[serviceId];
  if (!service || !details) return null;

  const doctor = DOCTORS[details.doctorIndex];
  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');
  const otherServices = SERVICES.filter(s => s.id !== serviceId);

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-100)', padding: '10px 0' }}>
        <div className="container">
          <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: 'var(--neutral-300)', fontSize: 'var(--text-xs)' }}>›</li>
            <li><Link to="/services" style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', textDecoration: 'none' }}>Specialities</Link></li>
            <li aria-hidden="true" style={{ color: 'var(--neutral-300)', fontSize: 'var(--text-xs)', }}>›</li>
            <li><span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--navy-700)', fontWeight: 500 }}>{service.title}</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection service={service} details={details} />

      {/* About */}
      <AboutSection details={details} service={service} />

      {/* Treatments */}
      <TreatmentsSection details={details} service={service} />

      {/* Symptoms & Conditions */}
      <SymptomsSection details={details} />

      {/* Why Choose SR3 */}
      <WhyChooseSection />

      {/* Doctor */}
      <DoctorSection doctor={doctor} service={service} />

      {/* FAQ */}
      <FAQSection faqs={details.faqs} service={service} />

      {/* Appointment CTA */}
      <CTASection service={service} waNumber={waNumber} />

      {/* Other Services */}
      <OtherServicesSection services={otherServices} />
    </div>
  );
}

function HeroSection({ service, details }: { service: typeof SERVICES[number]; details: typeof SERVICE_DETAILS[string] }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <section ref={ref} style={{
      padding: 'var(--space-16) 0 var(--space-12)',
      background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)' }} />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 800, opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
        <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>{service.subtitle}</span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
          {service.title} in Lucknow
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.6)', maxWidth: 600, marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
          {details.heroDesc}
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
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}>
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ details, service }: { details: typeof SERVICE_DETAILS[string]; service: typeof SERVICES[number] }) {
  const { ref, isInView } = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>About This Service</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-5)' }}>
            Expert {service.title}
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-8)', maxWidth: 720 }}>
            {details.aboutDesc}
          </p>

          <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>Key Benefits</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-3)' }}>
            {details.benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', background: service.bg }}>
                <CircleCheck size={18} style={{ color: service.color, flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TreatmentsSection({ details, service }: { details: typeof SERVICE_DETAILS[string]; service: typeof SERVICES[number] }) {
  const { ref, isInView } = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>Treatments & Procedures</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>What We Offer</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }} className="treatments-grid">
          {details.treatments.map((t, i) => (
            <div key={t.title} style={{
              padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
              opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.5s ease-out ${i * 80}ms`,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-100)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: service.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CircleCheck size={18} style={{ color: service.color }} />
                </div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)' }}>{t.title}</h3>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .treatments-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function SymptomsSection({ details }: { details: typeof SERVICE_DETAILS[string] }) {
  const { ref, isInView } = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)' }} className="symptoms-grid">
          <div style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-5)' }}>Common Symptoms</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {details.symptoms.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold-500)', flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-600)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out 0.1s' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-5)' }}>When to See a Doctor</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {details.whenToConsult.map((w, i) => (
                <div key={i} style={{
                  padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-md)',
                  background: '#fef2f2', border: '1px solid #fecaca',
                  fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: '#991b1b', fontWeight: 500,
                }}>
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-10)' }}>
          <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-5)' }}>Conditions We Treat</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {details.conditions.map((c, i) => (
              <span key={i} style={{
                padding: '6px var(--space-3)', borderRadius: 'var(--radius-full)',
                background: 'var(--navy-50)', border: '1px solid var(--navy-100)',
                fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
                color: 'var(--navy-700)',
              }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .symptoms-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function WhyChooseSection() {
  const { ref, isInView } = useInView(0.08);
  const reasons = [
    { Icon: Award, title: 'Fellowship-Trained Specialists', desc: 'Our doctors hold some of the most rigorous credentials in their fields.' },
    { Icon: Shield, title: 'Patient-First Approach', desc: 'Every decision prioritizes your health, comfort, and dignity.' },
    { Icon: MapPin, title: 'Convenient Location', desc: 'Easily accessible on Faizabad Road, Tiwariganj — serving all of Lucknow.' },
  ];
  return (
    <section ref={ref} style={{ padding: 'var(--space-16) 0', background: 'linear-gradient(135deg, var(--navy-800), var(--navy-900))', color: 'var(--neutral-0)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Why SR3</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--neutral-0)' }}>Why Choose SR3 ENT & Surgical Centre</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }} className="why-grid">
          {reasons.map((r, i) => (
            <div key={r.title} style={{
              textAlign: 'center', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.5s ease-out ${i * 100}ms`,
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(230,168,23,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)' }}>
                <r.Icon size={22} style={{ color: 'var(--gold-400)' }} />
              </div>
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--neutral-0)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-2)' }}>{r.title}</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.5)', lineHeight: 'var(--leading-relaxed)' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function DoctorSection({ doctor, service }: { doctor: typeof DOCTORS[number]; service: typeof SERVICES[number] }) {
  const { ref, isInView } = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)', opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>Your Specialist</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)' }}>Led by {doctor.name}</h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
          overflow: 'hidden', background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
          opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out',
        }} className="doctor-detail-grid">
          <div style={{ position: 'relative', background: 'var(--navy-50)', overflow: 'hidden', minHeight: 240 }}>
            <img src={doctor.image} alt={doctor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: 'var(--space-6)' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-1)' }}>{doctor.name}</h3>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gold-600)', fontFamily: 'var(--font-accent)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>{doctor.qualifications} | {doctor.speciality}</div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>{doctor.bio}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              {doctor.expertise.map(e => (
                <span key={e} style={{ padding: '4px var(--space-3)', borderRadius: 'var(--radius-full)', background: service.bg, fontSize: '11px', fontFamily: 'var(--font-accent)', fontWeight: 500, color: service.color }}>{e}</span>
              ))}
            </div>
            <Link to="/appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
              color: 'var(--navy-700)', textDecoration: 'none',
            }}>
              Book Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .doctor-detail-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function FAQSection({ faqs, service }: { faqs: { q: string; a: string }[]; service: typeof SERVICES[number] }) {
  const { ref, isInView } = useInView(0.08);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section ref={ref} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>Frequently Asked Questions</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)' }}>{service.title} FAQs</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              borderRadius: 'var(--radius-lg)', background: 'var(--neutral-0)',
              border: `1px solid ${openIndex === i ? 'var(--gold-200)' : 'var(--neutral-100)'}`,
              overflow: 'hidden', transition: 'border-color var(--transition-fast)',
            }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: 'var(--space-5) var(--space-6)', background: 'none', border: 'none',
                fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
                color: openIndex === i ? 'var(--navy-900)' : 'var(--navy-800)', cursor: 'pointer',
                textAlign: 'left', transition: 'color var(--transition-fast)',
              }}>
                {faq.q}
                <ChevronDown size={18} style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease', flexShrink: 0 }} />
              </button>
              <div style={{
                maxHeight: openIndex === i ? 300 : 0, overflow: 'hidden',
                transition: 'max-height 0.3s ease-out',
              }}>
                <p style={{ padding: '0 var(--space-6) var(--space-5)', fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ service, waNumber }: { service: typeof SERVICES[number]; waNumber: string }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <section ref={ref} style={{ padding: 'var(--space-16) 0', background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 35%, #1a3362 65%)', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 640, opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
          Ready for Expert {service.title.split(' ')[0]} Care?
        </h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--space-8)' }}>
          Book your consultation today. Same-day appointments available for urgent cases.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/appointment" style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
            color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
            fontFamily: 'var(--font-accent)', boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
            textDecoration: 'none', transition: 'all var(--transition-base)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
            Book Appointment <ArrowRight size={18} />
          </Link>
          <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '14px var(--space-6)', borderRadius: 'var(--radius-full)',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)',
            color: 'var(--neutral-100)', fontSize: 'var(--text-base)', fontWeight: 500,
            fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}>
            <Phone size={18} /> Call Now
          </a>
          <a href={`https://wa.me/${waNumber}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20SR3%20ENT%20%26%20Surgical%20Centre.`} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '14px var(--space-6)', borderRadius: 'var(--radius-full)',
            background: '#25d366', color: '#fff', fontSize: 'var(--text-base)', fontWeight: 500,
            fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#128c7e'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; }}>
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function OtherServicesSection({ services }: { services: (typeof SERVICES)[number][] }) {
  const { ref, isInView } = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)', opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>Explore More</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)' }}>Other Specialities</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
          {services.map((s, i) => (
            <Link key={s.id} to={`/services/${s.id}`} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
              padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
              textDecoration: 'none', transition: 'all var(--transition-base)',
              opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(12px)',
              transitionDelay: `${i * 60}ms`,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-100)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CircleCheck size={18} style={{ color: s.color }} />
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)' }}>{s.title}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', fontFamily: 'var(--font-accent)' }}>{s.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
