import { MonitorCheck, FlaskConical, Wind, ShieldCheck, BedDouble, Wifi } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const facilities = [
  { Icon: MonitorCheck, title: 'Digital Diagnostics', desc: 'Advanced endoscopy, audiometry, and digital imaging for precise diagnosis.' },
  { Icon: FlaskConical, title: 'In-House Lab', desc: 'NABL-accredited pathology and diagnostic lab with quick turnaround times.' },
  { Icon: Wind, title: 'OT with Laminar Flow', desc: 'State-of-the-art operation theatres with HEPA filtration and infection control.' },
  { Icon: ShieldCheck, title: 'Infection Control', desc: 'Rigorous sterilization protocols and hospital-grade hygiene standards.' },
  { Icon: BedDouble, title: 'Recovery Suites', desc: 'Comfortable, private recovery rooms with round-the-clock nursing care.' },
  { Icon: Wifi, title: 'Digital Health Records', desc: 'Seamless access to prescriptions, reports, and follow-ups via our patient portal.' },
];

export default function ClinicFacilities() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} id="facilities" style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-50)',
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
            World-Class Infrastructure
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)',
            marginBottom: 'var(--space-3)',
          }}>
            Modern Clinic Facilities
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 520, margin: '0 auto' }}>
            Technology and infrastructure designed for safety, accuracy, and your comfort.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)',
        }} className="facilities-grid">
          {facilities.map((f, i) => (
            <div key={f.title} style={{
              display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)',
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)',
              border: '1px solid var(--neutral-100)',
              transition: 'all var(--transition-base)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: isInView ? `${i * 70}ms` : '0ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = 'var(--neutral-200)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--neutral-100)';
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-md)', flexShrink: 0,
                background: 'linear-gradient(135deg, var(--navy-50), var(--navy-100))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <f.Icon size={22} style={{ color: 'var(--navy-700)' }} />
              </div>
              <div>
                <h4 style={{
                  fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--navy-900)',
                  fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-1)',
                }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .facilities-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .facilities-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
