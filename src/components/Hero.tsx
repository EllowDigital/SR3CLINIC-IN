import { ArrowRight, Play, Shield, Clock, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #070d1a 0%, #0f1e3d 35%, #1a3362 65%, #1e3a6e 100%)',
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        {/* Large gradient orb */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '120%',
          background: 'radial-gradient(ellipse, rgba(230, 168, 23, 0.06) 0%, transparent 70%)',
        }} />
        {/* Medical cross pattern */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '15%',
          width: 400,
          height: 400,
          opacity: 0.03,
        }}>
          <svg viewBox="0 0 400 400" fill="none">
            <rect x="160" y="40" width="80" height="320" rx="8" fill="white" />
            <rect x="40" y="160" width="320" height="80" rx="8" fill="white" />
          </svg>
        </div>
        {/* Subtle grid lines */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(8, 196, 171, 0.03) 0%, transparent 100%)',
        }} />
        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'rgba(230, 168, 23, 0.3)',
            top: `${15 + i * 15}%`,
            left: `${5 + i * 12}%`,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }} />
        ))}
      </div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-12)',
        alignItems: 'center',
        padding: 'var(--space-16) 0',
      }}>
        {/* Left content */}
        <div style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: 'var(--space-1) var(--space-4)',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(230, 168, 23, 0.12)',
            border: '1px solid rgba(230, 168, 23, 0.2)',
            marginBottom: 'var(--space-6)',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold-400)' }} />
            <span style={{
              fontSize: 'var(--text-xs)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
            }}>
              Premium Healthcare in Lucknow
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: 'var(--neutral-0)',
            marginBottom: 'var(--space-5)',
            letterSpacing: '-0.02em',
          }}>
            Exceptional Care,{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--gold-400), var(--gold-500))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Extraordinary
            </span>{' '}
            Results
          </h1>

          <p style={{
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 520,
            marginBottom: 'var(--space-8)',
          }}>
            SR³ ENT & Surgical Centre delivers world-class treatment with compassion and precision.
            Where advanced medicine meets personalized care.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#appointment" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-8)',
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              fontFamily: 'var(--font-accent)',
              boxShadow: '0 4px 20px rgba(230, 168, 23, 0.35)',
              letterSpacing: '0.01em',
              transition: 'all var(--transition-base)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(230, 168, 23, 0.45)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(230, 168, 23, 0.35)';
            }}
            >
              Book Consultation
              <ArrowRight size={18} />
            </a>

            <a href="#tour" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-6)',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'var(--neutral-200)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              fontFamily: 'var(--font-accent)',
              transition: 'all var(--transition-base)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
            }}
            >
              <Play size={16} />
              Virtual Tour
            </a>
          </div>

          {/* Trust micro-stats */}
          <div style={{
            display: 'flex',
            gap: 'var(--space-8)',
            marginTop: 'var(--space-10)',
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { value: '15+', label: 'Years Experience', icon: Clock },
              { value: '50K+', label: 'Patients Treated', icon: Shield },
              { value: '4.9', label: 'Patient Rating', icon: Award },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-1)',
                }}>
                  <stat.icon size={14} style={{ color: 'var(--gold-400)' }} />
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--neutral-0)',
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </span>
                </div>
                <span style={{
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-accent)',
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.04em',
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
        }} className="hero-visual">
          {/* Main card */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 480,
            aspectRatio: '4/5',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(160deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            boxShadow: '0 32px 64px rgba(0,0,0,0.3)',
          }}>
            {/* Medical illustration */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--space-8)',
            }}>
              <svg viewBox="0 0 200 200" style={{ width: '60%', opacity: 0.15 }}>
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(230,168,23,0.3)" strokeWidth="0.5" />
                <rect x="88" y="30" width="24" height="140" rx="12" fill="rgba(255,255,255,0.15)" />
                <rect x="30" y="88" width="140" height="24" rx="12" fill="rgba(255,255,255,0.15)" />
              </svg>

              <div style={{
                marginTop: 'var(--space-6)',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 700,
                  color: 'var(--neutral-0)',
                  marginBottom: 'var(--space-2)',
                }}>
                  SR³
                </div>
                <div style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gold-400)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}>
                  ENT & Surgical Centre
                </div>
              </div>

              {/* Specialty tags floating */}
              {['ENT', 'Surgery', 'Gynecology'].map((tag, i) => (
                <div key={tag} style={{
                  position: 'absolute',
                  padding: 'var(--space-2) var(--space-4)',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 500,
                  ...(i === 0 ? { top: '15%', left: '10%' } : i === 1 ? { top: '30%', right: '5%' } : { bottom: '20%', left: '15%' }),
                  animation: `float ${3 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Floating accent card */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '-10%',
            padding: 'var(--space-4) var(--space-5)',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.5)',
            animation: 'float 4s ease-in-out infinite',
            maxWidth: 200,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--success-50), var(--teal-50))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Shield size={20} style={{ color: 'var(--teal-600)' }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--navy-900)',
                }}>
                  24/7 Emergency
                </div>
                <div style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--neutral-500)',
                  fontFamily: 'var(--font-accent)',
                }}>
                  Always available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{
        position: 'absolute',
        bottom: -1,
        left: 0,
        right: 0,
        zIndex: 3,
      }}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="var(--neutral-0)" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-visual {
            display: none !important;
          }
        }
        @media (max-width: 1024px) {
          section .container {
            grid-template-columns: 1fr !important;
            min-height: 80vh;
          }
        }
        @media (max-width: 768px) {
          section {
            min-height: 85vh !important;
          }
        }
      `}</style>
    </section>
  );
}
