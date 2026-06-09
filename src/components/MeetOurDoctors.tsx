import { Award, Clock, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { DOCTORS } from '../data/clinic';

export default function MeetOurDoctors() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section ref={ref} id="doctors" style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-0)',
    }}>
      <div className="container">
        <div style={{
          textAlign: 'center', marginBottom: 'var(--space-12)',
          opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease-out',
        }}>
          <span style={{
            display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
            fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold-600)', marginBottom: 'var(--space-3)',
          }}>
            Our Medical Team
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)',
            marginBottom: 'var(--space-3)',
          }}>
            Meet Our Expert Doctors
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 520, margin: '0 auto' }}>
            Board-certified specialists dedicated to your health and well-being.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)',
        }} className="doctors-grid">
          {DOCTORS.map((d, i) => (
            <div key={d.name} style={{
              borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)',
              border: '1px solid var(--neutral-100)',
              overflow: 'hidden',
              transition: 'all var(--transition-base)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: isInView ? `${i * 100}ms` : '0ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(15,30,61,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {/* Doctor image */}
              <div style={{
                position: 'relative', width: '100%', aspectRatio: '4/3.5',
                background: `linear-gradient(135deg, var(--navy-50), var(--navy-100))`,
                overflow: 'hidden',
              }}>
                <img
                  src={d.image}
                  alt={d.name}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform var(--transition-slow)',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'scale(1.05)'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'scale(1)'; }}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                  background: 'linear-gradient(to top, rgba(15,30,61,0.7), transparent)',
                }} />
              </div>

              <div style={{ padding: 'var(--space-5) var(--space-5) var(--space-6)' }}>
                <h4 style={{
                  fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--navy-900)',
                  fontFamily: 'var(--font-heading)', marginBottom: 2,
                }}>
                  {d.name}
                </h4>
                <div style={{
                  fontSize: 'var(--text-sm)', color: 'var(--gold-600)',
                  fontFamily: 'var(--font-accent)', fontWeight: 500, marginBottom: 'var(--space-3)',
                }}>
                  {d.speciality}
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    padding: '3px var(--space-2)', borderRadius: 'var(--radius-full)',
                    background: 'var(--navy-50)', fontSize: '11px',
                    fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-700)',
                  }}>
                    <Clock size={10} /> {d.qualifications}
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    padding: '3px var(--space-2)', borderRadius: 'var(--radius-full)',
                    background: 'var(--gold-50)', fontSize: '11px',
                    fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--gold-700)',
                  }}>
                    <Award size={10} /> Reg: {d.registration}
                  </div>
                </div>

                <a href="#appointment" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
                  fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
                  color: 'var(--navy-700)', transition: 'gap var(--transition-fast)',
                }}
                onMouseEnter={e => { e.currentTarget.style.gap = 'var(--space-2)'; }}
                onMouseLeave={e => { e.currentTarget.style.gap = 'var(--space-1)'; }}
                >
                  Book Consultation <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .doctors-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .doctors-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
