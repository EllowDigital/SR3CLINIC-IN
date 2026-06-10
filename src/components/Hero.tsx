import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Clock, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../data/clinic';

const slides = [
  {
    image: 'https://images.pexels.com/photos/5867737/pexels-photo-5867737.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Experienced doctor smiling confidently',
  },
  {
    image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Female doctor using digital tablet',
  },
  {
    image: 'https://images.pexels.com/photos/8376233/pexels-photo-8376233.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Medical team providing patient care',
  },
  {
    image: 'https://images.pexels.com/photos/7088484/pexels-photo-7088484.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern hospital interior and facilities',
  },
];

export default function Hero() {
  const { ref, isInView } = useInView(0.05);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: '#060c18',
    }}>
      {/* Slideshow Background */}
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: currentSlide === i ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
          zIndex: 0,
        }}>
          {/* Dark overlay for text readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(6,12,24,0.88) 0%, rgba(15,30,61,0.78) 40%, rgba(26,51,98,0.65) 100%)',
          }} />
        </div>
      ))}

      {/* Subtle decorative elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        <div style={{
          position: 'absolute', top: '-30%', right: '-15%', width: '70%', height: '140%',
          background: 'radial-gradient(ellipse, rgba(230,168,23,0.06) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '50%', height: '80%',
          background: 'radial-gradient(ellipse, rgba(8,196,171,0.04) 0%, transparent 60%)',
        }} />
      </div>

      {/* Content */}
      <div className="container" style={{
        position: 'relative', zIndex: 2,
        maxWidth: 800,
        padding: 'var(--space-20) var(--space-6)',
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

        {/* Logo + Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
          <img
            src="/sr3clinic.jpeg"
            alt="SR3 Logo"
            style={{ width: 60, height: 60, borderRadius: 'var(--radius-md)', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--neutral-0)' }}>
              SR3 ENT & Surgical Centre
            </div>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-xs)', color: 'var(--gold-400)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Care & Cure
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
          fontWeight: 700, lineHeight: 1.08,
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
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 'var(--leading-relaxed)',
          color: 'rgba(255,255,255,0.65)', maxWidth: 560,
          marginBottom: 'var(--space-8)',
        }}>
          Advanced technology, expert specialists, and personalized care — all under one roof.
          Your health deserves the best, and that's exactly what we deliver.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link to="/appointment" style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
            color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
            fontFamily: 'var(--font-accent)', letterSpacing: '0.01em',
            boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
            transition: 'all var(--transition-base)', textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(230,168,23,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,168,23,0.35)'; }}
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
          <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '14px var(--space-6)', borderRadius: 'var(--radius-full)',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: 'var(--neutral-100)', fontSize: 'var(--text-base)', fontWeight: 500,
            fontFamily: 'var(--font-accent)', transition: 'all var(--transition-base)',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
          >
            <Phone size={18} /> Call Now
          </a>
        </div>

        {/* Trust stats */}
        <div style={{
          display: 'flex', gap: 'var(--space-8)', marginTop: 'var(--space-10)',
          paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(255,255,255,0.1)',
          flexWrap: 'wrap',
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
              <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.03em' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-8)' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: currentSlide === i ? 28 : 8,
                height: 8,
                borderRadius: 'var(--radius-full)',
                background: currentSlide === i ? 'var(--gold-400)' : 'rgba(255,255,255,0.2)',
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 3 }}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 50 }}>
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="var(--neutral-0)" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #hero { min-height: 100svh !important; }
          #hero .container { padding: var(--space-16) var(--space-4 !important; }
        }
      `}</style>
    </section>
  );
}
