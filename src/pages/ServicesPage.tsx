import { CheckCircle, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Ear, ScissorsLineDashed, Monitor, Baby, Activity, Apple } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useSEO, breadcrumbSchema } from '../hooks/useSEO';
import { SERVICES, CLINIC } from '../data/clinic';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  ent: Ear,
  'general-surgery': ScissorsLineDashed,
  'laparoscopic-surgery': Monitor,
  gynecology: Baby,
  physiotherapy: Activity,
  'diet-consultation': Apple,
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Specialities', url: '/services' },
    ]),
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://sr3entandsurgicalcentre.com/services#page',
      'name': 'Medical Services at SR³ ENT & Surgical Centre Lucknow',
      'description': 'Comprehensive medical services in Lucknow: ENT surgery, general & laparoscopic surgery, gynecology, physiotherapy, and diet consultation.',
      'url': 'https://sr3entandsurgicalcentre.com/services',
      'about': { '@id': 'https://sr3entandsurgicalcentre.com/#organization' },
    },
  ],
};

function ServiceCard({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const { ref, isInView } = useInView(0.08);
  const IconComp = iconMap[service.id];

  return (
    <article
      ref={ref}
      id={service.id}
      aria-labelledby={`svc-${service.id}-heading`}
      style={{
        borderRadius: 'var(--radius-xl)',
        background: 'var(--neutral-0)',
        border: '1px solid var(--neutral-100)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xs)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.65s ease-out ${Math.min(index * 60, 300)}ms`,
      }}
    >
      <div style={{ height: 4, background: `linear-gradient(90deg, ${service.color}, ${service.accent})` }} aria-hidden="true" />
      <div style={{ padding: 'var(--space-7)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 'var(--radius-md)', flexShrink: 0,
            background: service.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {IconComp && <IconComp size={22} style={{ color: service.color }} aria-hidden="true" />}
          </div>
          <div>
            <h2 id={`svc-${service.id}-heading`} style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 4 }}>
              {service.title}
            </h2>
            <div style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: service.color }}>
              {service.subtitle}
            </div>
          </div>
        </div>

        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
          {service.desc}
        </p>

        <div style={{ marginBottom: 'var(--space-5)' }}>
          <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-3)' }}>
            Procedures & Treatments
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)' }} className="features-grid">
            {service.features.map(f => (
              <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-700)' }}>
                <CheckCircle size={14} style={{ color: service.color, flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--neutral-100)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-400)' }}>Led by</div>
            <div style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 700, color: 'var(--navy-800)' }}>{service.doctor}</div>
          </div>
          <Link
            to="/appointment"
            aria-label={`Book appointment for ${service.title}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '8px var(--space-4)', borderRadius: 'var(--radius-full)',
              background: service.bg, color: service.color,
              fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 700,
              textDecoration: 'none', transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = service.color; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = service.bg; e.currentTarget.style.color = service.color; }}
          >
            <Calendar size={13} aria-hidden="true" /> Book Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  useSEO({
    title: 'Medical Services — ENT, Surgery, Gynecology, Physiotherapy in Lucknow',
    description: 'Comprehensive medical services at SR³ ENT & Surgical Centre, Lucknow: ENT surgery, laparoscopic surgery, gynecology, physiotherapy & diet consultation. Expert specialists, advanced equipment. Book: +91 9369643922.',
    keywords: 'ENT services Lucknow, laparoscopic surgery Lucknow, gynecologist Lucknow, physiotherapy Lucknow, diet consultation Lucknow, sinus surgery Lucknow, hernia surgery Lucknow, tonsil surgery Lucknow',
    canonical: '/services',
    schema: servicesSchema,
  });

  const { ref: heroRef, isInView: heroInView } = useInView(0.1);

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-100)', padding: '10px 0' }}>
        <div className="container">
          <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: 'var(--neutral-300)', fontSize: 'var(--text-xs)' }}>›</li>
            <li><span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--navy-700)', fontWeight: 500 }}>Specialities</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} aria-labelledby="services-heading" style={{
        padding: 'var(--space-16) 0 var(--space-12)',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Our Specialities</span>
          <h1 id="services-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Medical Services in Lucknow
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600, marginBottom: 'var(--space-8)' }}>
            Six specialities. Five expert doctors. One trusted centre — serving 50,000+ patients across Lucknow and Uttar Pradesh.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }} role="navigation" aria-label="Jump to service section">
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                padding: '6px 14px', borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 500,
                color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section aria-label="All medical services" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)' }} className="svc-page-grid">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Book a service consultation" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-4)' }}>
            Need a Consultation?
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', marginBottom: 'var(--space-8)' }}>
            Our specialists are ready to help. Book an appointment or call us — same-day consultations available for urgent cases.
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
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} aria-label={`Call SR3 ENT at ${CLINIC.phone1}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '13px var(--space-7)', borderRadius: 'var(--radius-full)',
              background: 'var(--navy-50)', border: '1px solid var(--navy-200)',
              color: 'var(--navy-800)', fontSize: 'var(--text-base)', fontWeight: 600,
              fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy-100)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy-50)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Phone size={17} aria-hidden="true" /> {CLINIC.phone1}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .svc-page-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
