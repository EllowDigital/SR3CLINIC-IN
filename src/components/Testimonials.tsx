import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Priya Sharma',
    treatment: 'ENT — Sinus Surgery',
    text: 'After years of chronic sinusitis, Dr. Samvartika performed my endoscopic surgery. The relief was immediate. The care and follow-up were exceptional — I felt truly looked after at every step.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Anil Verma',
    treatment: 'Laparoscopic Hernia Repair',
    text: 'I was worried about surgery, but the team at SR³ made the entire process so smooth. Minimally invasive, quick recovery, and I was back to work within a week. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Sunita Devi',
    treatment: 'Gynecology — Surgical Care',
    text: 'Dr. Madhu Agrawal is the best gynecologist I have visited. She explained everything patiently, the surgery went perfectly, and the post-op care was wonderful. Forever grateful.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Rahul Mishra',
    treatment: 'Physiotherapy — Knee Rehab',
    text: 'After my knee replacement, the physiotherapy team at SR³ was incredible. Personalized exercises, constant motivation, and I regained full mobility much faster than expected.',
    rating: 5,
    image: 'https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Meera Agarwal',
    treatment: 'Diet Consultation — PCOS',
    text: 'The dietitian at SR³ created a practical, sustainable plan for my PCOS management. Lost 12 kgs in 4 months with their guidance. Life-changing experience!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Sanjay Tiwari',
    treatment: 'ENT — Pediatric Tonsillectomy',
    text: 'My son had recurrent tonsillitis. The pediatric ENT care here was outstanding — child-friendly approach, painless procedure, and we have had zero issues since. Thank you, SR³!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView(0.08);
  const [start, setStart] = useState(0);
  const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval>>();

  const VISIBLE = 3;
  const maxStart = testimonials.length - VISIBLE;

  const goTo = (newStart: number, dir: 'left' | 'right') => {
    setAnimDir(dir);
    setTimeout(() => {
      setStart(Math.max(0, Math.min(newStart, maxStart)));
      setAnimDir(null);
    }, 200);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      const next = start + 1 > maxStart ? 0 : start + 1;
      goTo(next, 'left');
    }, 5500);
    return () => clearInterval(autoRef.current);
  }, [start]);

  return (
    <section ref={ref} style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-50)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative top bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--navy-800), var(--teal-500), var(--gold-500))' }} />

      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: 'var(--space-10)', flexWrap: 'wrap', gap: 'var(--space-4)',
        }}>
          <div style={{
            opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease-out',
          }}>
            <span style={{
              display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
              fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--gold-600)', marginBottom: 'var(--space-3)',
            }}>
              Patient Voices
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700,
              color: 'var(--navy-900)',
            }}>
              What Our Patients Say
            </h2>
          </div>

          {/* Navigation arrows */}
          <div style={{
            display: 'flex', gap: 'var(--space-2)',
            opacity: isInView ? 1 : 0, transition: 'opacity 0.7s ease-out 0.3s',
          }}>
            <button
              onClick={() => goTo(start - 1, 'right')}
              disabled={start === 0}
              style={{
                width: 40, height: 40, borderRadius: 'var(--radius-full)',
                background: start === 0 ? 'var(--neutral-100)' : 'var(--neutral-0)',
                border: `1px solid ${start === 0 ? 'var(--neutral-100)' : 'var(--neutral-200)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: start === 0 ? 'not-allowed' : 'pointer',
                color: start === 0 ? 'var(--neutral-300)' : 'var(--navy-700)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => { if (start !== 0) { e.currentTarget.style.background = 'var(--navy-900)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--navy-900)'; } }}
              onMouseLeave={e => { if (start !== 0) { e.currentTarget.style.background = 'var(--neutral-0)'; e.currentTarget.style.color = 'var(--navy-700)'; e.currentTarget.style.borderColor = 'var(--neutral-200)'; } }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo(start + 1, 'left')}
              disabled={start >= maxStart}
              style={{
                width: 40, height: 40, borderRadius: 'var(--radius-full)',
                background: start >= maxStart ? 'var(--neutral-100)' : 'var(--neutral-0)',
                border: `1px solid ${start >= maxStart ? 'var(--neutral-100)' : 'var(--neutral-200)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: start >= maxStart ? 'not-allowed' : 'pointer',
                color: start >= maxStart ? 'var(--neutral-300)' : 'var(--navy-700)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => { if (start < maxStart) { e.currentTarget.style.background = 'var(--navy-900)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--navy-900)'; } }}
              onMouseLeave={e => { if (start < maxStart) { e.currentTarget.style.background = 'var(--neutral-0)'; e.currentTarget.style.color = 'var(--navy-700)'; e.currentTarget.style.borderColor = 'var(--neutral-200)'; } }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)',
          opacity: animDir ? 0.4 : 1,
          transform: animDir === 'left' ? 'translateX(-12px)' : animDir === 'right' ? 'translateX(12px)' : 'translateX(0)',
          transition: 'all 0.25s ease-out',
        }} className="test-grid">
          {testimonials.slice(start, start + VISIBLE).map((t, i) => (
            <div key={t.name} style={{
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)',
              border: '1px solid var(--neutral-100)',
              boxShadow: 'var(--shadow-xs)',
              position: 'relative',
              transition: 'all var(--transition-base)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: isInView ? `${i * 100}ms` : '0ms',
              display: 'flex', flexDirection: 'column',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.borderColor = 'var(--neutral-200)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
              e.currentTarget.style.borderColor = 'var(--neutral-100)';
            }}>
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', background: 'linear-gradient(90deg, var(--gold-400), var(--gold-600))', opacity: 0.7 }} />

              {/* Quote icon */}
              <div style={{ position: 'absolute', top: 'var(--space-5)', right: 'var(--space-5)', color: 'var(--gold-200)' }}>
                <Quote size={28} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 2, marginBottom: 'var(--space-4)' }}>
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} size={13} fill="var(--gold-500)" style={{ color: 'var(--gold-500)' }} />
                ))}
              </div>

              <p style={{
                fontSize: 'var(--text-sm)', color: 'var(--neutral-600)',
                lineHeight: 'var(--leading-relaxed)', fontStyle: 'italic',
                flex: 1, marginBottom: 'var(--space-5)',
              }}>
                "{t.text}"
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                paddingTop: 'var(--space-4)', borderTop: '1px solid var(--neutral-100)',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 'var(--radius-full)',
                  overflow: 'hidden', flexShrink: 0,
                  border: '2px solid var(--neutral-100)',
                }}>
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--navy-900)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', fontFamily: 'var(--font-accent)' }}>
                    {t.treatment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-8)' }}>
          {[...Array(maxStart + 1)].map((_, idx) => (
            <button key={idx} onClick={() => goTo(idx, idx > start ? 'left' : 'right')} style={{
              width: start === idx ? 24 : 8, height: 8,
              borderRadius: 'var(--radius-full)',
              background: start === idx ? 'var(--gold-500)' : 'var(--neutral-200)',
              transition: 'all var(--transition-base)', border: 'none', padding: 0, cursor: 'pointer',
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .test-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .test-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
