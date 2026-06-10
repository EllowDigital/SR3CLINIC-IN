import { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Star, Quote, ChevronLeft, ChevronRight, CircleCheck as CheckCircle } from 'lucide-react';

const stories = [
  {
    name: 'Priya Sharma',
    age: 34,
    location: 'Gomti Nagar, Lucknow',
    treatment: 'Endoscopic Sinus Surgery',
    department: 'ENT',
    outcome: 'Complete relief from 6 years of chronic sinusitis',
    text: 'After years of chronic sinusitis and multiple failed treatments elsewhere, Dr. Samvartika performed my endoscopic surgery with precision. The relief was immediate and lasting. The pre-op counseling, surgical care, and follow-up were all exceptional — I genuinely felt like the most important patient in the room.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: 'var(--navy-600)',
    bg: 'var(--navy-50)',
  },
  {
    name: 'Anil Verma',
    age: 52,
    location: 'Alambagh, Lucknow',
    treatment: 'Laparoscopic Hernia Repair',
    department: 'Surgery',
    outcome: 'Back to work in 7 days, no complications',
    text: 'I was terrified about surgery. But Dr. R.K. Vishwakarma explained every step in simple language and the minimally invasive approach meant I was walking the same day. Seven days post-op and I was back at work. The team\'s professionalism and warmth truly set SR³ apart.',
    rating: 5,
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: 'var(--teal-700)',
    bg: 'var(--teal-50)',
  },
  {
    name: 'Sunita Devi',
    age: 41,
    location: 'Hazratganj, Lucknow',
    treatment: 'Gynecological Surgery',
    department: 'Gynecology',
    outcome: 'Successful procedure with speedy recovery',
    text: 'Dr. Madhu Agrawal is simply the best gynecologist I have visited. She took time to explain my condition thoroughly, gave me all treatment options, and the surgery went perfectly. The post-operative care and check-ins showed how much the team genuinely cares. Forever grateful.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: '#be185d',
    bg: '#fdf2f8',
  },
  {
    name: 'Rahul Mishra',
    age: 45,
    location: 'Indira Nagar, Lucknow',
    treatment: 'Post-Knee Replacement Rehab',
    department: 'Physiotherapy',
    outcome: 'Regained 100% mobility in 8 weeks',
    text: 'After my knee replacement at another hospital, I was referred to SR³ for physiotherapy. Dr. Leena Verma designed a completely personalized program. Her patience, expertise, and motivation got me back to full mobility much faster than my surgeon expected. Outstanding care.',
    rating: 5,
    image: 'https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: 'var(--gold-700)',
    bg: 'var(--gold-50)',
  },
  {
    name: 'Meera Agarwal',
    age: 28,
    location: 'Aliganj, Lucknow',
    treatment: 'PCOS Diet Management',
    department: 'Diet Consultation',
    outcome: 'Lost 12 kg, PCOS symptoms dramatically reduced',
    text: 'Dr. Induja Dixit created a realistic, sustainable nutrition plan around my PCOS and busy lifestyle. No crash diets — just science-backed guidance. Lost 12 kgs in 4 months, my cycles regularized, and my energy levels are the best they\'ve been in years. Life-changing.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: '#059669',
    bg: '#ecfdf5',
  },
  {
    name: 'Sanjay Tiwari',
    age: 38,
    location: 'Chinhat, Lucknow',
    treatment: 'Pediatric Tonsillectomy',
    department: 'ENT',
    outcome: 'Zero tonsil infections in 18 months post-surgery',
    text: 'My 7-year-old son was suffering from recurrent tonsillitis every few weeks. Dr. Samvartika\'s child-friendly approach made my son feel completely at ease. The procedure was smooth, recovery was quick, and we haven\'t had a single infection since. We are so relieved and grateful.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: 'var(--navy-600)',
    bg: 'var(--navy-50)',
  },
];

export default function PatientSuccessStories() {
  const { ref, isInView } = useInView(0.08);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval>>(null);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((idx + stories.length) % stories.length);
      setAnimating(false);
    }, 200);
  };

  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    autoRef.current = setInterval(next, 6000);
    return () => clearInterval(autoRef.current!);
  }, [active]);

  const s = stories[active];

  return (
    <section ref={ref} style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-0)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
        background: 'linear-gradient(180deg, var(--neutral-50) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
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
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700,
            color: 'var(--navy-900)', marginBottom: 'var(--space-3)',
          }}>
            Real Stories, Real Results
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 480, margin: '0 auto' }}>
            Hear directly from patients whose lives were changed at SR³.
          </p>
        </div>

        {/* Featured Story */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)',
          alignItems: 'center', marginBottom: 'var(--space-10)',
        }} className="story-grid">
          {/* Left: Story content */}
          <div style={{
            opacity: animating ? 0 : (isInView ? 1 : 0),
            transform: animating ? 'translateX(-16px)' : 'translateX(0)',
            transition: 'all 0.3s ease-out',
          }}>
            {/* Dept badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '4px 12px', borderRadius: 'var(--radius-full)',
              background: s.bg, color: s.color,
              fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
              fontWeight: 600, letterSpacing: '0.05em',
              marginBottom: 'var(--space-4)',
            }}>
              {s.department}
            </div>

            {/* Quote */}
            <div style={{ position: 'relative', marginBottom: 'var(--space-5)' }}>
              <Quote size={40} style={{ color: 'var(--gold-200)', position: 'absolute', top: -8, left: -8 }} />
              <p style={{
                fontSize: 'var(--text-base)', color: 'var(--neutral-700)',
                lineHeight: 'var(--leading-relaxed)', fontStyle: 'italic',
                paddingLeft: 'var(--space-6)',
              }}>
                "{s.text}"
              </p>
            </div>

            {/* Outcome */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-4)',
              borderRadius: 'var(--radius-md)',
              background: '#f0fdf4', border: '1px solid #bbf7d0',
              marginBottom: 'var(--space-5)',
            }}>
              <CheckCircle size={16} style={{ color: '#16a34a', flexShrink: 0 }} />
              <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: '#15803d' }}>
                {s.outcome}
              </span>
            </div>

            {/* Patient info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 'var(--radius-full)',
                overflow: 'hidden', border: '2px solid var(--neutral-100)',
                flexShrink: 0,
              }}>
                <img src={s.image} alt={`${s.name} — patient at SR³ ENT & Surgical Centre Lucknow`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--navy-900)' }}>
                  {s.name}, {s.age}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-400)', fontFamily: 'var(--font-accent)', marginBottom: 4 }}>
                  {s.location}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', fontFamily: 'var(--font-accent)' }}>
                  {s.treatment}
                </div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
                {[...Array(s.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--gold-500)" style={{ color: 'var(--gold-500)' }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Thumbnail grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)',
            opacity: isInView ? 1 : 0, transform: isInView ? 'translateX(0)' : 'translateX(24px)',
            transition: 'all 0.7s ease-out 0.2s',
          }}>
            {stories.map((st, i) => (
              <button key={st.name} onClick={() => goTo(i)} style={{
                padding: 'var(--space-3)',
                borderRadius: 'var(--radius-lg)',
                background: i === active ? 'var(--navy-50)' : 'var(--neutral-50)',
                border: `2px solid ${i === active ? 'var(--navy-300)' : 'var(--neutral-100)'}`,
                textAlign: 'center', cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { if (i !== active) { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.background = 'var(--neutral-100)'; } }}
              onMouseLeave={e => { if (i !== active) { e.currentTarget.style.borderColor = 'var(--neutral-100)'; e.currentTarget.style.background = 'var(--neutral-50)'; } }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-full)',
                  overflow: 'hidden', margin: '0 auto var(--space-2)',
                  border: `2px solid ${i === active ? 'var(--gold-400)' : 'var(--neutral-200)'}`,
                }}>
                  <img src={st.image} alt={st.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: 10, fontFamily: 'var(--font-accent)', fontWeight: 600, color: i === active ? 'var(--navy-800)' : 'var(--neutral-500)' }}>
                  {st.name.split(' ')[0]}
                </div>
                <div style={{ fontSize: 9, fontFamily: 'var(--font-accent)', color: 'var(--neutral-400)', marginTop: 2 }}>
                  {st.department}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Nav buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-4)' }}>
          <button onClick={prev} style={{
            width: 40, height: 40, borderRadius: 'var(--radius-full)',
            background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all var(--transition-fast)',
            color: 'var(--navy-700)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy-900)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--navy-900)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--neutral-0)'; e.currentTarget.style.color = 'var(--navy-700)'; e.currentTarget.style.borderColor = 'var(--neutral-200)'; }}>
            <ChevronLeft size={18} />
          </button>

          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            {stories.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: active === i ? 24 : 8, height: 8,
                borderRadius: 'var(--radius-full)',
                background: active === i ? 'var(--gold-500)' : 'var(--neutral-200)',
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }} />
            ))}
          </div>

          <button onClick={next} style={{
            width: 40, height: 40, borderRadius: 'var(--radius-full)',
            background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all var(--transition-fast)',
            color: 'var(--navy-700)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy-900)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--navy-900)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--neutral-0)'; e.currentTarget.style.color = 'var(--navy-700)'; e.currentTarget.style.borderColor = 'var(--neutral-200)'; }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .story-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
