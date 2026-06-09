import { Ear, ScissorsLineDashed, Baby, Activity, Apple, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { SERVICES } from '../data/clinic';

export default function ServicesOverview() {
  const { ref, isInView } = useInView(0.08);

  return (
    <section ref={ref} id="specialities" style={{
      padding: 'var(--space-20) 0',
      background: 'linear-gradient(180deg, var(--neutral-50) 0%, var(--neutral-0) 100%)',
      position: 'relative',
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
            Our Specialities
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)',
            marginBottom: 'var(--space-3)',
          }}>
            Comprehensive Medical Services
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 520, margin: '0 auto' }}>
            Six specialized departments delivering expert care across the full spectrum of your health needs.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)',
        }} className="services-grid">
          {SERVICES.map((s, i) => {
            const IconMap: { [key: string]: React.ReactNode } = {
              'ent': <Ear size={24} />,
              'general-surgery': <ScissorsLineDashed size={24} />,
              'laparoscopic-surgery': <ScissorsLineDashed size={24} />,
              'gynecology': <Baby size={24} />,
              'physiotherapy': <Activity size={24} />,
              'diet-consultation': <Apple size={24} />,
            };
            return (
            <div key={s.title} style={{
              borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)',
              border: '1px solid var(--neutral-100)',
              overflow: 'hidden',
              transition: 'all var(--transition-base)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: isInView ? `${i * 80}ms` : '0ms',
              display: 'flex', flexDirection: 'column',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,30,61,0.08)';
              e.currentTarget.style.borderColor = 'var(--neutral-200)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--neutral-100)';
            }}>
              {/* Top accent bar */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${s.accent}, ${s.bg})` }} />

              <div style={{ padding: 'var(--space-6)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 'var(--radius-md)',
                    background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <div style={{ color: s.color }}>
                      {IconMap[s.id]}
                    </div>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)',
                      lineHeight: 'var(--leading-snug)', fontFamily: 'var(--font-heading)',
                    }}>
                      {s.title}
                    </h3>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', fontFamily: 'var(--font-accent)' }}>
                      {s.subtitle}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
                  {s.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                  {s.features.map(f => (
                    <span key={f} style={{
                      padding: '4px var(--space-3)', borderRadius: 'var(--radius-full)',
                      background: s.bg, fontSize: '11px', fontFamily: 'var(--font-accent)',
                      fontWeight: 500, color: s.color,
                    }}>
                      {f}
                    </span>
                  ))}
                </div>

                <Link to={`/services#${s.id}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
                  fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
                  color: s.color, marginTop: 'auto', transition: 'gap var(--transition-fast)',
                }}
                onMouseEnter={e => { e.currentTarget.style.gap = 'var(--space-2)'; }}
                onMouseLeave={e => { e.currentTarget.style.gap = 'var(--space-1)'; }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
