import { ArrowRight, Phone, Shield, Clock, Award, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../data/clinic';

export default function Hero() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section ref={ref} id="hero" style={{
      position: 'relative',
      minHeight: '94vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 30%, #1a3362 60%, #1e3a6e 85%, #243f78 100%)',
    }}>
      {/* Background layers */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Radial gold glow */}
        <div style={{
          position: 'absolute', top: '-30%', right: '-15%', width: '70%', height: '140%',
          background: 'radial-gradient(ellipse, rgba(230,168,23,0.07) 0%, transparent 65%)',
        }} />
        {/* Teal subtle glow */}
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '50%', height: '80%',
          background: 'radial-gradient(ellipse, rgba(8,196,171,0.04) 0%, transparent 60%)',
        }} />
        {/* Medical cross watermark */}
        <div style={{ position: 'absolute', top: '8%', right: '12%', width: 360, height: 360, opacity: 0.025 }}>
          <svg viewBox="0 0 400 400" fill="none">
            <rect x="160" y="40" width="80" height="320" rx="12" fill="white" />
            <rect x="40" y="160" width="320" height="80" rx="12" fill="white" />
          </svg>
        </div>
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(230,168,23,0.25)' : 'rgba(8,196,171,0.2)',
            top: `${10 + i * 12}%`,
            left: `${3 + i * 11}%`,
            animation: `float ${3.5 + i * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.35}s`,
          }} />
        ))}
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container" style={{
        position: 'relative', zIndex: 2,
        display: 'grid', gridTemplateColumns: '1.15fr 1fr',
        gap: 'var(--space-12)', alignItems: 'center',
        padding: 'var(--space-16) 0 var(--space-20)',
      }}>
        {/* Left Content */}
        <div style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(36px)',
          transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '6px var(--space-4)',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(230,168,23,0.1)',
            border: '1px solid rgba(230,168,23,0.18)',
            marginBottom: 'var(--space-6)',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold-400)', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            <span style={{
              fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-400)',
            }}>
              Premium Healthcare in Lucknow
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
            fontWeight: 700, lineHeight: 1.06,
            color: 'var(--neutral-0)', marginBottom: 'var(--space-5)',
            letterSpacing: '-0.025em',
          }}>
            Where Expert Care{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--gold-400), var(--gold-500), var(--teal-400))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Meets Compassion
            </span>
          </h1>

          <p style={{
            fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)',
            color: 'rgba(255,255,255,0.6)', maxWidth: 540,
            marginBottom: 'var(--space-8)',
          }}>
            SR³ ENT & Surgical Centre delivers world-class treatment with precision and warmth.
            Advanced technology, expert specialists, and personalized care — all under one roof.
          </p>

          {/* Dual CTAs */}
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
              fontFamily: 'var(--font-accent)', letterSpacing: '0.01em',
              boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
              transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(230,168,23,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,168,23,0.35)'; }}
            >
              Book Appointment <ArrowRight size={18} />
            </a>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'var(--neutral-100)', fontSize: 'var(--text-base)', fontWeight: 500,
              fontFamily: 'var(--font-accent)', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Trust micro-stats */}
          <div style={{
            display: 'flex', gap: 'var(--space-8)', marginTop: 'var(--space-10)',
            paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(255,255,255,0.07)',
          }}>
            {[
              { value: CLINIC.experience, label: 'Years Experience', Icon: Clock },
              { value: CLINIC.patients, label: 'Patients Treated', Icon: Heart },
              { value: CLINIC.rating, label: 'Patient Rating', Icon: Award },
            ].map(s => (
              <div key={s.label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 2 }}>
                  <s.Icon size={14} style={{ color: 'var(--gold-400)' }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--neutral-0)', lineHeight: 1 }}>
                    {s.value}
                  </span>
                </div>
                <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.03em' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual" style={{
          position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.97)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
        }}>
          {/* Main card */}
          <div style={{
            position: 'relative', width: '100%', maxWidth: 460, aspectRatio: '4/5',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(165deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)', overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8)' }}>
              {/* Medical illustration */}
              <svg viewBox="0 0 200 200" style={{ width: '55%', opacity: 0.12, marginBottom: 'var(--space-6)' }}>
                <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="52" fill="none" stroke="rgba(230,168,23,0.2)" strokeWidth="0.5" />
                <rect x="88" y="25" width="24" height="150" rx="12" fill="rgba(255,255,255,0.1)" />
                <rect x="25" y="88" width="150" height="24" rx="12" fill="rgba(255,255,255,0.1)" />
                <circle cx="100" cy="100" r="16" fill="rgba(230,168,23,0.08)" stroke="rgba(230,168,23,0.15)" strokeWidth="0.5" />
              </svg>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-2)' }}>SR³</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gold-400)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-accent)', fontWeight: 500 }}>
                  ENT & Surgical Centre
                </div>
              </div>

              {/* Floating specialty tags */}
              {[
                { text: 'ENT', top: '12%', left: '8%' },
                { text: 'Surgery', top: '28%', right: '3%' },
                { text: 'Gynecology', bottom: '22%', left: '12%' },
                { text: 'Physiotherapy', bottom: '10%', right: '8%' },
              ].map((tag, i) => (
                <div key={tag.text} style={{
                  position: 'absolute', ...{ top: tag.top, left: tag.left, right: tag.right, bottom: tag.bottom },
                  padding: '6px var(--space-3)', borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.65)', fontSize: '11px',
                  fontFamily: 'var(--font-accent)', fontWeight: 500,
                  animation: `float ${3.2 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.4}s`,
                }}>
                  {tag.text}
                </div>
              ))}
            </div>
          </div>

          {/* Floating card: 24/7 Emergency */}
          <div style={{
            position: 'absolute', bottom: '12%', left: '-8%',
            padding: 'var(--space-4) var(--space-5)', borderRadius: 'var(--radius-lg)',
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.5)',
            animation: 'float 4s ease-in-out infinite', maxWidth: 195,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--teal-50), var(--teal-100))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Shield size={20} style={{ color: 'var(--teal-600)' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--navy-900)' }}>24/7 Emergency</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', fontFamily: 'var(--font-accent)' }}>Always available</div>
              </div>
            </div>
          </div>

          {/* Floating card: NABH Accredited */}
          <div style={{
            position: 'absolute', top: '8%', right: '-5%',
            padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-md)',
            background: 'rgba(15,30,61,0.85)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(230,168,23,0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Award size={16} style={{ color: 'var(--gold-400)' }} />
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--gold-400)', letterSpacing: '0.05em' }}>NABH Standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 3 }}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="var(--neutral-0)" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-visual { display: none !important; }
          #hero .container { grid-template-columns: 1fr !important; min-height: auto; }
        }
        @media (max-width: 640px) {
          #hero { min-height: 88vh !important; }
        }
      `}</style>
    </section>
  );
}
