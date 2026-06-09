import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Priya Sharma',
    treatment: 'ENT - Sinus Surgery',
    text: 'After years of chronic sinusitis, Dr. Srivastava performed my endoscopic surgery. The relief was immediate. The care and follow-up were exceptional — I felt truly looked after.',
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
    treatment: 'Gynecology - Hysterectomy',
    text: 'Dr. Rastogi is the best gynecologist in Lucknow. She explained everything patiently, the surgery went perfectly, and the post-op care was wonderful. Forever grateful.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Rahul Mishra',
    treatment: 'Physiotherapy - Knee Rehab',
    text: 'After my knee replacement, the physiotherapy team at SR³ was incredible. Personalized exercises, constant motivation, and I regained full mobility much faster than expected.',
    rating: 5,
    image: 'https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Meera Agarwal',
    treatment: 'Diet Consultation',
    text: 'The dietitian at SR³ created a practical, sustainable plan for my PCOS management. Lost 12 kgs in 4 months with their guidance. Life-changing experience!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Sanjay Tiwari',
    treatment: 'ENT - Tonsillectomy',
    text: 'My son had recurrent tonsillitis. The pediatric ENT care here was outstanding — child-friendly approach, painless procedure, and we have had zero issues since. Thank you, SR³!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView(0.08);
  const [active, setActive] = useState(0);

  const visible = 3;
  const maxStart = Math.max(0, testimonials.length - visible);

  return (
    <section ref={ref} id="testimonials" style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-0)',
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
            Patient Stories
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)',
            marginBottom: 'var(--space-3)',
          }}>
            What Our Patients Say
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 480, margin: '0 auto' }}>
            Real experiences from real patients who trusted us with their care.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)',
        }} className="test-grid">
          {testimonials.slice(active, active + visible).map((t, i) => (
            <div key={t.name} style={{
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--neutral-0)',
              border: '1px solid var(--neutral-100)',
              position: 'relative',
              transition: 'all var(--transition-base)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: isInView ? `${i * 100}ms` : '0ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {/* Quote icon */}
              <div style={{
                position: 'absolute', top: 'var(--space-5)', right: 'var(--space-5)',
                color: 'var(--gold-200)',
              }}>
                <Quote size={32} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 2, marginBottom: 'var(--space-4)' }}>
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} size={14} fill="var(--gold-500)" style={{ color: 'var(--gold-500)' }} />
                ))}
              </div>

              <p style={{
                fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-5)', fontStyle: 'italic',
              }}>
                "{t.text}"
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                paddingTop: 'var(--space-4)', borderTop: '1px solid var(--neutral-100)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', overflow: 'hidden',
                  background: 'var(--navy-50)', flexShrink: 0,
                }}>
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--navy-900)' }}>
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

        {/* Pagination dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-8)' }}>
          {[...Array(maxStart + 1)].map((_, idx) => (
            <button key={idx} onClick={() => setActive(Math.min(idx, maxStart))} style={{
              width: active === idx ? 24 : 8, height: 8,
              borderRadius: 'var(--radius-full)',
              background: active === idx ? 'var(--gold-500)' : 'var(--neutral-200)',
              transition: 'all var(--transition-base)', border: 'none', padding: 0,
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
