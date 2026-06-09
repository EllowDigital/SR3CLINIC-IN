import { Phone, CalendarCheck, Stethoscope, Heart, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    Icon: Phone,
    step: '01',
    title: 'Get in Touch',
    desc: 'Call us, WhatsApp, or fill the online form. Our care coordinator responds within minutes.',
    color: 'var(--navy-700)',
    bg: 'var(--navy-50)',
  },
  {
    Icon: CalendarCheck,
    step: '02',
    title: 'Schedule Visit',
    desc: 'Choose a convenient date and time. Same-day appointments available for urgent cases.',
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
  },
  {
    Icon: Stethoscope,
    step: '03',
    title: 'Consult & Diagnose',
    desc: 'Meet your specialist. Advanced diagnostics and a clear, honest treatment plan.',
    color: 'var(--gold-700)',
    bg: 'var(--gold-50)',
  },
  {
    Icon: Heart,
    step: '04',
    title: 'Recover & Thrive',
    desc: 'Expert treatment followed by dedicated post-care. We stay with you until full recovery.',
    color: '#059669',
    bg: '#ecfdf5',
  },
];

export default function PatientJourney() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} id="patient-journey" style={{
      padding: 'var(--space-20) 0',
      background: 'linear-gradient(160deg, #070d1a 0%, #0f1e3d 40%, #162852 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50%', height: '100%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.04) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          textAlign: 'center', marginBottom: 'var(--space-12)',
          opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease-out',
        }}>
          <span style={{
            display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
            fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold-400)', marginBottom: 'var(--space-3)',
          }}>
            Your Journey
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--neutral-0)',
            marginBottom: 'var(--space-3)',
          }}>
            Simple Steps to Better Health
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto' }}>
            From your first call to full recovery — we make every step seamless.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)',
          position: 'relative',
        }} className="journey-grid">
          {/* Connecting line */}
          <div style={{
            position: 'absolute', top: 44, left: '12.5%', right: '12.5%', height: 2,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(230,168,23,0.15), rgba(255,255,255,0.05))',
          }} className="journey-line" />

          {steps.map((s, i) => (
            <div key={s.step} style={{
              textAlign: 'center', position: 'relative',
              opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.7s ease-out ${i * 120}ms`,
            }}>
              {/* Step number circle */}
              <div style={{
                width: 80, height: 80, borderRadius: '50%', margin: '0 auto var(--space-5)',
                background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 2,
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(230,168,23,0.3)';
                e.currentTarget.style.background = 'rgba(230,168,23,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}>
                <s.Icon size={28} style={{ color: 'var(--gold-400)' }} />
                <span style={{
                  position: 'absolute', top: -8, right: -4,
                  width: 24, height: 24, borderRadius: '50%',
                  background: 'var(--gold-500)', color: 'var(--navy-950)',
                  fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {s.step}
                </span>
              </div>

              <h3 style={{
                fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--neutral-0)',
                fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-2)',
              }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.4)', lineHeight: 'var(--leading-relaxed)', maxWidth: 240, margin: '0 auto' }}>
                {s.desc}
              </p>

              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: 36, right: '-12px', zIndex: 3,
                  color: 'rgba(230,168,23,0.3)',
                }} className="journey-arrow">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .journey-grid { grid-template-columns: repeat(2, 1fr) !important; gap: var(--space-8) !important; }
          .journey-line { display: none !important; }
          .journey-arrow { display: none !important; }
        }
        @media (max-width: 640px) {
          .journey-grid { grid-template-columns: 1fr !important; gap: var(--space-6) !important; }
        }
      `}</style>
    </section>
  );
}
