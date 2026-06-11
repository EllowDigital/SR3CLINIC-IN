import { CircleCheck as CheckCircle, Phone, Calendar, ArrowRight, Star, Clock, Users, Shield } from 'lucide-react';
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
      aria-labelledby={`svc-${service.id}-heading`}
      style={{
        borderRadius: 'var(--radius-xl)',
        background: 'var(--neutral-0)',
        border: '1px solid var(--neutral-100)',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${Math.min(index * 80, 400)}ms`,
        position: 'relative',
      }}
    >
      {/* Gradient top bar */}
      <div style={{ height: 5, background: `linear-gradient(90deg, ${service.color}, ${service.accent})` }} aria-hidden="true" />

      <div style={{ padding: 'var(--space-8)' }}>
        {/* Header with icon and title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)', marginBottom: 'var(--space-5)' }}>
          <div style={{
            width: 64, height: 64, borderRadius: 'var(--radius-lg)', flexShrink: 0,
            background: `linear-gradient(135deg, ${service.bg}, ${service.bg})`,
            border: `1px solid ${service.color}20`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 8px 24px ${service.color}15`,
          }}>
            {IconComp && <IconComp size={28} style={{ color: service.color }} aria-hidden="true" />}
          </div>
          <div style={{ flex: 1 }}>
            <h2 id={`svc-${service.id}-heading`} style={{
              fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700,
              color: 'var(--navy-900)', marginBottom: 6, lineHeight: 1.2,
            }}>
              {service.title}
            </h2>
            <div style={{
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
              color: service.color, letterSpacing: '0.02em',
            }}>
              {service.subtitle}
            </div>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'var(--text-base)', color: 'var(--neutral-600)',
          lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)',
        }}>
          {service.desc}
        </p>

        {/* Features */}
        <div style={{
          padding: 'var(--space-5)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--neutral-50)',
          border: '1px solid var(--neutral-100)',
          marginBottom: 'var(--space-6)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-accent)', fontSize: 'var(--text-xs)', fontWeight: 700,
            color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: '0.12em',
            marginBottom: 'var(--space-3)',
          }}>
            Treatments Offered
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {service.features.slice(0, 6).map(f => (
              <li key={f} style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
                padding: '4px 10px', borderRadius: 'var(--radius-full)',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
                fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
                color: 'var(--navy-700)', fontWeight: 500,
              }}>
                <CheckCircle size={12} style={{ color: service.color }} aria-hidden="true" />
                {f}
              </li>
            ))}
            {service.features.length > 6 && (
              <li style={{
                padding: '4px 10px', borderRadius: 'var(--radius-full)',
                background: service.bg, color: service.color,
                fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600,
              }}>
                +{service.features.length - 6} more
              </li>
            )}
          </ul>
        </div>

        {/* Doctor and CTA */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 'var(--space-5)', borderTop: '1px solid var(--neutral-100)',
          flexWrap: 'wrap', gap: 'var(--space-4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Users size={16} style={{ color: service.color }} />
            </div>
            <div>
              <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-400)' }}>
                Led by
              </div>
              <div style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 700, color: 'var(--navy-800)' }}>
                {service.doctor}
              </div>
            </div>
          </div>
          <Link
            to={`/services/${service.id}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '10px var(--space-5)', borderRadius: 'var(--radius-full)',
              background: `linear-gradient(135deg, ${service.color}, ${service.accent})`,
              color: '#fff',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 700,
              textDecoration: 'none', boxShadow: `0 4px 16px ${service.color}30`,
              transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 24px ${service.color}40`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 16px ${service.color}30`; }}
          >
            View Details <ArrowRight size={14} aria-hidden="true" />
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
  const { ref: statsRef, isInView: statsInView } = useInView(0.1);

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
        padding: 'var(--space-20) 0 var(--space-16)',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.06) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: '40%', height: '80%', background: 'radial-gradient(ellipse, rgba(8,196,171,0.04) 0%, transparent 55%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 720, opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '6px var(--space-4)', borderRadius: 'var(--radius-full)',
              background: 'rgba(230,168,23,0.1)', border: '1px solid rgba(230,168,23,0.2)',
              marginBottom: 'var(--space-6)',
            }}>
              <Star size={12} style={{ color: 'var(--gold-400)' }} />
              <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-400)', background: 'linear-gradient(135deg, var(--gold-400), var(--gold-300))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Our Specialities
              </span>
            </div>

            <h1 id="services-heading" style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700,
              color: 'var(--neutral-0)', marginBottom: 'var(--space-5)',
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}>
              Expert Medical Care,{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--gold-400), var(--teal-400))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Close to Home
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'rgba(255,255,255,0.55)',
              lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-8)', maxWidth: 560,
            }}>
              Six specialities. Five expert doctors. One trusted centre — serving 50,000+ patients across Lucknow and Uttar Pradesh.
            </p>

            {/* Service quick links */}
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              {SERVICES.map(s => (
                <a key={s.id} href={`#${s.id}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                  padding: '8px 16px', borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} style={{
        padding: 'var(--space-8) 0',
        background: 'var(--neutral-0)',
        borderBottom: '1px solid var(--neutral-100)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)',
            opacity: statsInView ? 1 : 0, transform: statsInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
          }} className="svc-stats-grid">
            {[
              { value: '6', label: 'Specialities', Icon: Star },
              { value: '5', label: 'Expert Doctors', Icon: Users },
              { value: '50K+', label: 'Patients Treated', Icon: Shield },
              { value: '15+', label: 'Years Experience', Icon: Clock },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <stat.Icon size={18} style={{ color: 'var(--gold-500)', margin: '0 auto var(--space-2)' }} />
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--navy-900)', lineHeight: 1.1 }}>{stat.value}</div>
                <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section aria-label="All medical services" style={{ padding: 'var(--space-16) 0', background: 'linear-gradient(180deg, var(--neutral-50) 0%, var(--neutral-0) 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-8)' }} className="svc-page-grid">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Book a service consultation" style={{
        padding: 'var(--space-20) 0',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '45%', height: '100%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 720, textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700,
            color: 'var(--neutral-0)', marginBottom: 'var(--space-4)',
          }}>
            Need a Consultation?
          </h2>
          <p style={{
            fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.55)',
            marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)',
          }}>
            Our specialists are ready to help. Book an appointment or call us — same-day consultations available for urgent cases.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '16px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)', fontSize: 'var(--text-lg)', fontWeight: 700,
              fontFamily: 'var(--font-accent)', boxShadow: 'var(--shadow-gold)',
              textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(230,168,23,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-gold)'; }}>
              <Calendar size={18} aria-hidden="true" /> Book Appointment
            </Link>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '16px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)',
              color: 'var(--neutral-100)', fontSize: 'var(--text-lg)', fontWeight: 600,
              fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}>
              <Phone size={18} aria-hidden="true" /> {CLINIC.phone1}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .svc-page-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .svc-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: var(--space-4) !important; }
        }
        @media (max-width: 480px) {
          .svc-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
