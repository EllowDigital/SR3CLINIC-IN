import { Shield, Award, HeartPulse, Users, Stethoscope, BadgeCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const indicators = [
  { icon: Shield, value: '15+', label: 'Years of Excellence', desc: 'Trusted since 2010' },
  { icon: HeartPulse, value: '50,000+', label: 'Patients Treated', desc: 'Across all specialities' },
  { icon: Stethoscope, value: '5', label: 'Specialities', desc: 'Comprehensive care' },
  { icon: Award, value: '4.9/5', label: 'Patient Rating', desc: 'Google Reviews' },
  { icon: Users, value: '10+', label: 'Expert Doctors', desc: 'Board-certified team' },
  { icon: BadgeCheck, value: 'NABH', label: 'Quality Standards', desc: 'Accredited protocols' },
];

export default function TrustIndicators() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} id="trust" style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-0)',
      position: 'relative',
    }}>
      <div className="container">
        {/* Section header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-12)',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out',
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-accent)',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold-600)',
            marginBottom: 'var(--space-3)',
          }}>
            Why Choose Us
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--navy-900)',
            marginBottom: 'var(--space-3)',
          }}>
            Trusted by Thousands
          </h2>
          <p style={{
            fontSize: 'var(--text-base)',
            color: 'var(--neutral-500)',
            maxWidth: 500,
            margin: '0 auto',
          }}>
            Numbers that reflect our commitment to excellence in healthcare
          </p>
        </div>

        {/* Indicators grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-6)',
        }} className="trust-grid">
          {indicators.map((item, i) => (
            <div
              key={item.label}
              style={{
                textAlign: 'center',
                padding: 'var(--space-8) var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)',
                border: '1px solid var(--neutral-100)',
                transition: 'all var(--transition-base)',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: isInView ? `${i * 80}ms` : '0ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold-200)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--neutral-100)';
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, var(--navy-50), var(--navy-100))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-4)',
              }}>
                <item.icon size={24} style={{ color: 'var(--navy-700)' }} />
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                color: 'var(--navy-900)',
                lineHeight: 1,
                marginBottom: 'var(--space-1)',
              }}>
                {item.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--navy-800)',
                marginBottom: 'var(--space-1)',
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--neutral-400)',
                fontFamily: 'var(--font-accent)',
              }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-4) !important;
          }
        }
      `}</style>
    </section>
  );
}
