import { Phone, CircleAlert as AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../data/clinic';

export default function EmergencyBanner() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section ref={ref} id="emergency" style={{
      padding: 'var(--space-12) 0',
      background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #b91c1c 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '60%', height: '200%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="container emergency-inner" style={{
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 'var(--space-5)', flexWrap: 'wrap',
        opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.6s ease-out',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', flex: '1 1 auto' }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'pulse-glow 2s ease-in-out infinite',
            flexShrink: 0,
          }}>
            <AlertCircle size={28} style={{ color: '#fbbf24' }} />
          </div>
          <div>
            <h3 style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700,
              color: 'var(--neutral-0)', fontFamily: 'var(--font-heading)',
              marginBottom: 'var(--space-1)',
            }}>
              Medical Emergency?
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-accent)' }}>
              Our emergency team is available 24/7. Do not delay — immediate care can save lives.
            </p>
          </div>
        </div>

        <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} className="emergency-call-btn" style={{
          display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
          padding: '12px var(--space-6)', borderRadius: 'var(--radius-full)',
          background: 'rgba(255,255,255,0.95)', color: '#991b1b',
          fontSize: 'var(--text-sm)', fontWeight: 700, fontFamily: 'var(--font-accent)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          transition: 'all var(--transition-base)', flexShrink: 0, textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        }}>
          <Phone size={18} />
          Call: {CLINIC.phone1}
        </a>
      </div>
    </section>
  );
}
