import { CalendarCheck, Phone, ArrowRight, Clock, Shield, Award, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../data/clinic';

export default function AppointmentCTA() {
  const { ref, isInView } = useInView(0.15);

  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');

  return (
    <section ref={ref} id="appointment" style={{
      padding: 'var(--space-20) 0',
      background: 'linear-gradient(160deg, #070d1a 0%, #0f1e3d 35%, #1a3362 65%, #1e3a6e 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-15%', width: '60%', height: '130%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.06) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '80%', background: 'radial-gradient(ellipse, rgba(8,196,171,0.04) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: 800, margin: '0 auto', textAlign: 'center',
          opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s ease-out',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '6px var(--space-4)', borderRadius: 'var(--radius-full)',
            background: 'rgba(230,168,23,0.1)', border: '1px solid rgba(230,168,23,0.18)',
            marginBottom: 'var(--space-6)',
          }}>
            <CalendarCheck size={14} style={{ color: 'var(--gold-400)' }} />
            <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>
              Book Your Visit
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)',
            marginBottom: 'var(--space-4)', lineHeight: 1.1,
          }}>
            Your Health Deserves{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--gold-400), var(--gold-500))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Expert Attention
            </span>
          </h2>

          <p style={{
            fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)',
            lineHeight: 'var(--leading-relaxed)', maxWidth: 520, margin: '0 auto var(--space-8)',
          }}>
            Take the first step towards better health. Our specialists are ready to provide the care you deserve.
          </p>

          {/* Triple CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
            {/* Book Online - Primary */}
            <Link to="/appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
              padding: '16px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)', fontSize: 'var(--text-lg)', fontWeight: 600,
              fontFamily: 'var(--font-accent)', letterSpacing: '0.01em',
              boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
              transition: 'all var(--transition-base)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(230,168,23,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,168,23,0.35)'; }}
            >
              <CalendarCheck size={20} /> Book Online <ArrowRight size={16} />
            </Link>

            {/* Call */}
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
              padding: '16px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)',
              color: 'var(--neutral-100)', fontSize: 'var(--text-lg)', fontWeight: 500,
              fontFamily: 'var(--font-accent)', transition: 'all var(--transition-base)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
            >
              <Phone size={20} /> Call Us
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/${waNumber}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20SR3%20ENT%20%26%20Surgical%20Centre.`} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
              padding: '16px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)',
              color: '#25d366', fontSize: 'var(--text-lg)', fontWeight: 500,
              fontFamily: 'var(--font-accent)', transition: 'all var(--transition-base)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.18)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.25)'; }}
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>

          {/* Trust row */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 'var(--space-8)', flexWrap: 'wrap',
            paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            {[
              { Icon: Clock, text: 'Same-Day Appointments' },
              { Icon: Shield, text: 'Insurance Accepted' },
              { Icon: Award, text: 'NABH Standards' },
            ].map(t => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <t.Icon size={16} style={{ color: 'var(--gold-400)' }} />
                <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                  {t.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
