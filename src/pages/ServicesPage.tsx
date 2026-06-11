import { CircleCheck as CheckCircle, Phone, Calendar, ArrowRight, Star, Clock, Users, Shield, MessageCircle, HeartPulse } from 'lucide-react';
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
  const { ref, isInView } = useInView(0.1);
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
        transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${Math.min(index * 100, 500)}ms`,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Gradient top accent */}
      <div style={{
        height: 4,
        background: `linear-gradient(90deg, ${service.color}, ${service.accent})`,
        flexShrink: 0,
      }} aria-hidden="true" />

      <div style={{
        padding: 'clamp(var(--space-5), 4vw, var(--space-8))',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'clamp(var(--space-3), 2vw, var(--space-5))',
          marginBottom: 'var(--space-4)',
          flexWrap: 'wrap',
        }}>
          <div style={{
            width: 'clamp(48px, 10vw, 64px)',
            height: 'clamp(48px, 10vw, 64px)',
            borderRadius: 'var(--radius-lg)',
            flexShrink: 0,
            background: service.bg,
            border: `1px solid ${service.color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 24px ${service.color}15`,
          }}>
            {IconComp && <IconComp size={24} style={{ color: service.color }} aria-hidden="true" />}
          </div>
          <div style={{ flex: '1 1 min(200px, 100%)', minWidth: 0 }}>
            <h2 id={`svc-${service.id}-heading`} style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(var(--text-lg), 3vw, var(--text-2xl))',
              fontWeight: 700,
              color: 'var(--navy-900)',
              marginBottom: 4,
              lineHeight: 1.25,
              wordWrap: 'break-word',
            }}>
              {service.title}
            </h2>
            <div style={{
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 600,
              color: service.color,
            }}>
              {service.subtitle}
            </div>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--neutral-600)',
          lineHeight: 'var(--leading-relaxed)',
          marginBottom: 'var(--space-5)',
          flex: '1 1 auto',
        }}>
          {service.desc}
        </p>

        {/* Features grid */}
        <div style={{
          padding: 'var(--space-4)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--neutral-50)',
          border: '1px solid var(--neutral-100)',
          marginBottom: 'var(--space-5)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            color: 'var(--neutral-500)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 'var(--space-3)',
          }}>
            Key Treatments
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-2)',
          }}>
            {service.features.slice(0, 4).map(f => (
              <span key={f} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--neutral-0)',
                border: '1px solid var(--neutral-200)',
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-accent)',
                color: 'var(--navy-700)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}>
                <CheckCircle size={12} style={{ color: service.color, flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{f}</span>
              </span>
            ))}
            {service.features.length > 4 && (
              <span style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: service.bg,
                color: service.color,
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-accent)',
                fontWeight: 600,
              }}>
                +{service.features.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-3)',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--neutral-100)',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', minWidth: 0, flex: '1 1 auto' }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Users size={14} style={{ color: service.color }} />
            </div>
            <div style={{ overflow: 'hidden', minWidth: 0 }}>
              <div style={{ fontSize: 10, fontFamily: 'var(--font-accent)', color: 'var(--neutral-400)' }}>Led by</div>
              <div style={{
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-accent)',
                fontWeight: 700,
                color: 'var(--navy-800)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>{service.doctor}</div>
            </div>
          </div>
          <Link
            to={`/services/${service.id}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-2)',
              padding: '10px var(--space-5)',
              borderRadius: 'var(--radius-full)',
              background: `linear-gradient(135deg, ${service.color}, ${service.accent})`,
              color: '#fff',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: `0 4px 16px ${service.color}30`,
              transition: 'all var(--transition-base)',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 6px 24px ${service.color}40`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 16px ${service.color}30`;
            }}
          >
            <span>Details</span>
            <ArrowRight size={14} aria-hidden="true" />
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
  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{
        background: 'var(--neutral-50)',
        borderBottom: '1px solid var(--neutral-100)',
        padding: '10px 0',
        fontSize: 'var(--text-xs)',
      }}>
        <div className="container">
          <ol style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flexWrap: 'wrap',
          }}>
            <li>
              <Link to="/" style={{
                fontFamily: 'var(--font-accent)',
                color: 'var(--neutral-500)',
                textDecoration: 'none',
              }}>Home</Link>
            </li>
            <li aria-hidden="true" style={{ color: 'var(--neutral-300)' }}>›</li>
            <li>
              <span style={{
                fontFamily: 'var(--font-accent)',
                color: 'var(--navy-700)',
                fontWeight: 500,
              }}>Specialities</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} aria-labelledby="services-heading" style={{
        padding: 'clamp(var(--space-12), 8vw, var(--space-20)) 0 clamp(var(--space-10), 6vw, var(--space-16))',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '-30%',
            right: '-10%',
            width: '50%',
            height: '120%',
            background: 'radial-gradient(ellipse, rgba(230,168,23,0.06) 0%, transparent 60%)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-8%',
            width: '40%',
            height: '80%',
            background: 'radial-gradient(ellipse, rgba(8,196,171,0.04) 0%, transparent 55%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            maxWidth: 800,
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: '6px var(--space-4)',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(230,168,23,0.1)',
              border: '1px solid rgba(230,168,23,0.2)',
              marginBottom: 'var(--space-5)',
            }}>
              <HeartPulse size={14} style={{ color: 'var(--gold-400)' }} />
              <span style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-accent)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
              }}>
                Our Specialities
              </span>
            </div>

            {/* Heading */}
            <h1 id="services-heading" style={{
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              fontWeight: 700,
              color: 'var(--neutral-0)',
              marginBottom: 'var(--space-4)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}>
              Expert Medical Care,{` `}
              <span style={{
                background: 'linear-gradient(135deg, var(--gold-400), var(--teal-400))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Close to Home
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(var(--text-base), 2vw, var(--text-lg))',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-6)',
              maxWidth: 560,
            }}>
              Six specialities. Five expert doctors. One trusted centre — serving 50,000+ patients across Lucknow and Uttar Pradesh.
            </p>

            {/* Quick nav pills */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-2)',
              flexWrap: 'wrap',
            }}>
              {SERVICES.map(s => (
                <a key={s.id} href={`#${s.id}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}>
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} style={{
        padding: 'var(--space-6) 0',
        background: 'var(--neutral-0)',
        borderBottom: '1px solid var(--neutral-100)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(var(--space-3), 3vw, var(--space-6))',
            opacity: statsInView ? 1 : 0,
            transform: statsInView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s ease-out',
          }} className="svc-stats-grid">
            {[
              { value: '6', label: 'Specialities', Icon: Star },
              { value: '5', label: 'Doctors', Icon: Users },
              { value: '50K+', label: 'Patients', Icon: Shield },
              { value: '15+', label: 'Years', Icon: Clock },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <stat.Icon size={16} style={{ color: 'var(--gold-500)', marginBottom: 'var(--space-1)' }} />
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(var(--text-xl), 4vw, var(--text-2xl))',
                  fontWeight: 700,
                  color: 'var(--navy-900)',
                  lineHeight: 1.1,
                }}>{stat.value}</div>
                <div style={{
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--neutral-500)',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section aria-label="All medical services" style={{
        padding: 'clamp(var(--space-10), 6vw, var(--space-16)) 0',
        background: 'linear-gradient(180deg, var(--neutral-50) 0%, var(--neutral-0) 100%)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gap: 'clamp(var(--space-5), 4vw, var(--space-8))',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          }}>
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-label="Book a consultation" style={{
        padding: 'clamp(var(--space-12), 8vw, var(--space-20)) 0',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}>
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '45%',
            height: '100%',
            background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            maxWidth: 640,
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: 'var(--neutral-0)',
              marginBottom: 'var(--space-3)',
            }}>
              Need a Consultation?
            </h2>
            <p style={{
              fontSize: 'clamp(var(--text-base), 2vw, var(--text-lg))',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 'var(--space-6)',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Our specialists are ready to help. Book an appointment or call us — same-day consultations available.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-3)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link to="/appointment" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                padding: '14px var(--space-6)',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                color: 'var(--navy-950)',
                fontSize: 'var(--text-base)',
                fontWeight: 700,
                fontFamily: 'var(--font-accent)',
                boxShadow: 'var(--shadow-gold)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,168,23,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
              }}>
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>

              <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                padding: '14px var(--space-6)',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'var(--neutral-100)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                fontFamily: 'var(--font-accent)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
              }}>
                <Phone size={18} />
                <span>Call Us</span>
              </a>

              <a href={`https://wa.me/${waNumber}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                padding: '14px var(--space-6)',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(37,211,102,0.1)',
                border: '1px solid rgba(37,211,102,0.25)',
                color: '#25d366',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                fontFamily: 'var(--font-accent)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(37,211,102,0.18)';
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(37,211,102,0.1)';
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.25)';
              }}>
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .svc-stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 640px) {
          .svc-stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
