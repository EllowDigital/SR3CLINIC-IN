import { Stethoscope, Cpu, Scissors, HeartHandshake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reasons = [
  {
    Icon: Stethoscope,
    title: 'Expert Specialists',
    desc: 'Board-certified doctors with decades of experience across ENT, Surgery, Gynecology, and more. Trusted by 50,000+ patients.',
    gradient: 'linear-gradient(135deg, var(--navy-50), var(--navy-100))',
    iconColor: 'var(--navy-700)',
    accent: 'var(--navy-900)',
  },
  {
    Icon: Cpu,
    title: 'Advanced Equipment',
    desc: 'State-of-the-art diagnostic and surgical technology including endoscopy, laser surgery, and digital imaging systems.',
    gradient: 'linear-gradient(135deg, var(--teal-50), var(--teal-100))',
    iconColor: 'var(--teal-600)',
    accent: 'var(--teal-700)',
  },
  {
    Icon: Scissors,
    title: 'Modern Surgical Care',
    desc: 'Minimally invasive procedures with faster recovery. Our operation theatres meet international safety and hygiene standards.',
    gradient: 'linear-gradient(135deg, var(--gold-50), var(--gold-100))',
    iconColor: 'var(--gold-700)',
    accent: 'var(--gold-800)',
  },
  {
    Icon: HeartHandshake,
    title: 'Personalized Treatment',
    desc: 'Every patient receives a customized care plan. From consultation to recovery, you get dedicated attention and follow-up.',
    gradient: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
    iconColor: '#dc2626',
    accent: '#991b1b',
  },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} id="why-choose-us" style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-0)',
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
            Why Choose Us
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)',
            marginBottom: 'var(--space-3)',
          }}>
            Healthcare That Puts You First
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 520, margin: '0 auto' }}>
            Four pillars that define the SR³ difference — expertise, technology, safety, and compassion.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)',
        }} className="wcu-grid">
          {reasons.map((r, i) => (
            <div key={r.title} style={{
              padding: 'var(--space-8) var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)',
              border: '1px solid var(--neutral-100)',
              transition: 'all var(--transition-base)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: isInView ? `${i * 100}ms` : '0ms',
              position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,30,61,0.1)';
              e.currentTarget.style.borderColor = 'var(--neutral-200)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--neutral-100)';
            }}>
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${r.accent}, transparent)`,
                opacity: 0, transition: 'opacity var(--transition-base)',
              }} />
              <div style={{
                width: 56, height: 56, borderRadius: 'var(--radius-lg)',
                background: r.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 'var(--space-5)',
              }}>
                <r.Icon size={26} style={{ color: r.iconColor }} />
              </div>
              <h3 style={{
                fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)',
                marginBottom: 'var(--space-3)', lineHeight: 'var(--leading-snug)',
                fontFamily: 'var(--font-heading)',
              }}>
                {r.title}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .wcu-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .wcu-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
