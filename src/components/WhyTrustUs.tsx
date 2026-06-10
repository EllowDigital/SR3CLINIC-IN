import { useInView } from '../hooks/useInView';
import {
  ShieldCheck, Microscope, Heart, Award, Users, Clock,
  Stethoscope, CheckCircle
} from 'lucide-react';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'NABH Standard Care',
    desc: 'We follow National Accreditation Board for Hospitals & Healthcare Providers protocols for every patient interaction and procedure.',
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
  },
  {
    icon: Microscope,
    title: 'Advanced Technology',
    desc: 'State-of-the-art diagnostic equipment and cutting-edge surgical tools including high-definition endoscopes and laminar flow OT.',
    color: 'var(--navy-700)',
    bg: 'var(--navy-50)',
  },
  {
    icon: Heart,
    title: 'Patient-First Approach',
    desc: 'Every decision is made with your health, comfort, and dignity as the priority. We listen before we prescribe.',
    color: '#e11d48',
    bg: '#fff1f2',
  },
  {
    icon: Award,
    title: 'Fellowship-Trained Specialists',
    desc: 'Our surgeons hold FIAGES, DIPMAS, and FISCP fellowships — among the most rigorous credentials in their fields.',
    color: 'var(--gold-700)',
    bg: 'var(--gold-50)',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    desc: 'Medical emergencies don\'t keep business hours. Our emergency line and on-call specialists are always available.',
    color: '#dc2626',
    bg: '#fef2f2',
  },
  {
    icon: Users,
    title: '50,000+ Treated Successfully',
    desc: 'Fifteen years of clinical excellence, a 4.9-star patient rating, and a community that trusts us with their family\'s health.',
    color: '#059669',
    bg: '#ecfdf5',
  },
];

const highlights = [
  'In-house diagnostic lab for same-day results',
  'Minimally invasive surgical options available',
  'Transparent pricing with no hidden charges',
  'Insurance-friendly billing support',
  'Post-operative care and follow-up included',
  'Multilingual staff for patient comfort',
];

export default function WhyTrustUs() {
  const { ref, isInView } = useInView(0.08);
  const { ref: hlRef, isInView: hlInView } = useInView(0.1);

  return (
    <section ref={ref} style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-50)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle background texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(var(--navy-100) 1px, transparent 1px)',
        backgroundSize: '32px 32px', opacity: 0.5,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: 'var(--space-12)',
          opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease-out',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
            fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold-600)', marginBottom: 'var(--space-3)',
          }}>
            <ShieldCheck size={14} /> Trust & Excellence
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700,
            color: 'var(--navy-900)', marginBottom: 'var(--space-3)',
          }}>
            Why Patients Choose SR³
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 520, margin: '0 auto' }}>
            From your first consultation to your complete recovery — we are committed to exceptional care at every step.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)',
          marginBottom: 'var(--space-12)',
        }} className="trust-grid">
          {trustPoints.map((point, i) => (
            <div key={point.title} style={{
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)',
              border: '1px solid var(--neutral-100)',
              boxShadow: 'var(--shadow-xs)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s ease-out ${i * 80}ms`,
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.borderColor = 'var(--neutral-200)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
              e.currentTarget.style.borderColor = 'var(--neutral-100)';
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 'var(--radius-md)',
                background: point.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 'var(--space-4)',
                transition: 'transform var(--transition-base)',
              }}>
                <point.icon size={22} style={{ color: point.color }} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)',
                fontWeight: 600, color: 'var(--navy-900)',
                marginBottom: 'var(--space-2)',
              }}>
                {point.title}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights strip */}
        <div ref={hlRef} style={{
          background: 'linear-gradient(135deg, var(--navy-900), var(--navy-800))',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-8) var(--space-10)',
          opacity: hlInView ? 1 : 0, transform: hlInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease-out',
          position: 'relative', overflow: 'hidden',
        }} className="trust-strip">
          <div style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '100%', background: 'radial-gradient(ellipse at right, rgba(230,168,23,0.08) 0%, transparent 70%)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
            <Stethoscope size={20} style={{ color: 'var(--gold-400)' }} />
            <span style={{
              fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)',
              fontWeight: 600, color: 'var(--neutral-0)',
            }}>
              Additional Benefits at SR³
            </span>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)',
            position: 'relative', zIndex: 1,
          }} className="highlights-grid">
            {highlights.map((h, i) => (
              <div key={h} style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                opacity: hlInView ? 1 : 0,
                transform: hlInView ? 'translateX(0)' : 'translateX(-12px)',
                transition: `all 0.5s ease-out ${i * 60}ms`,
              }}>
                <CheckCircle size={15} style={{ color: 'var(--teal-400)', flexShrink: 0 }} />
                <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'rgba(255,255,255,0.75)' }}>
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .trust-grid { grid-template-columns: repeat(2, 1fr) !important; } .highlights-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .trust-grid { grid-template-columns: 1fr !important; } .highlights-grid { grid-template-columns: 1fr !important; } .trust-strip { padding: var(--space-6) !important; } }
      `}</style>
    </section>
  );
}
