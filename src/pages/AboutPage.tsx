import { Shield, HeartPulse, Users, Target, Eye, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../data/clinic';

const milestones = [
  { year: '2010', event: 'Founded SR³ ENT & Surgical Centre in Lucknow' },
  { year: '2013', event: 'Expanded to multi-speciality with General Surgery & Gynecology' },
  { year: '2016', event: 'Introduced advanced laparoscopic surgical capabilities' },
  { year: '2018', event: 'Added Physiotherapy & Diet Consultation departments' },
  { year: '2020', event: 'Treated 25,000+ patients with a 98% satisfaction rate' },
  { year: '2024', event: 'Crossed 50,000+ patients, upgraded to digital health records' },
];

const values = [
  { Icon: HeartPulse, title: 'Patient-First Care', desc: 'Every decision we make prioritizes your health, comfort, and dignity. You are never just a number at SR³.' },
  { Icon: Shield, title: 'Clinical Excellence', desc: 'Evidence-based protocols, internationally trained specialists, and continuous quality improvement.' },
  { Icon: Users, title: 'Compassionate Team', desc: 'Our staff treats every patient like family — with warmth, patience, and genuine concern.' },
  { Icon: Target, title: 'Honest Guidance', desc: 'We recommend only what you need. Transparent pricing, clear communication, and no unnecessary procedures.' },
];

export default function AboutPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: storyRef, isInView: storyInView } = useInView(0.1);
  const { ref: valuesRef, isInView: valuesInView } = useInView(0.1);
  const { ref: teamRef, isInView: teamInView } = useInView(0.1);

  return (
    <div>
      {/* Page Hero */}
      <section ref={heroRef} style={{
        padding: 'var(--space-16) 0 var(--space-12)',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>About Us</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Our Story, Our Mission
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
            Built on a foundation of trust, expertise, and compassion — {CLINIC.name} has been transforming healthcare in Lucknow for over a decade.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-10)' }} className="about-mv-grid">
            <div style={{
              padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, var(--navy-50), var(--navy-100))',
              border: '1px solid var(--navy-100)',
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--navy-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                <Target size={22} style={{ color: 'var(--gold-400)' }} />
              </div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)' }}>
                To provide accessible, world-class healthcare that combines advanced medical technology with genuine human compassion. We believe every patient deserves expert treatment delivered with dignity, transparency, and care.
              </p>
            </div>
            <div style={{
              padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, var(--gold-50), var(--gold-100))',
              border: '1px solid var(--gold-100)',
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--gold-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                <Eye size={22} style={{ color: 'var(--neutral-0)' }} />
              </div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)' }}>
                To be the most trusted multi-speciality healthcare centre in Lucknow and Uttar Pradesh — recognized for clinical outcomes, patient satisfaction, and a culture where healing begins the moment you walk through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section ref={storyRef} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)', opacity: storyInView ? 1 : 0, transform: storyInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
            <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>Our Journey</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-3)' }}>Growing With Our Community</h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: 'var(--gold-200)' }} />
            {milestones.map((m, i) => (
              <div key={m.year} style={{
                display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-6)', position: 'relative',
                opacity: storyInView ? 1 : 0, transform: storyInView ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.5s ease-out ${i * 100}ms`,
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--neutral-0)', border: '2px solid var(--gold-400)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)', fontSize: 'var(--text-sm)', fontWeight: 700,
                  color: 'var(--navy-800)', position: 'relative', zIndex: 2,
                }}>
                  {m.year}
                </div>
                <div style={{
                  padding: 'var(--space-5) var(--space-6)', borderRadius: 'var(--radius-md)',
                  background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)', flex: 1,
                }}>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-700)', lineHeight: 'var(--leading-relaxed)' }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)', opacity: valuesInView ? 1 : 0, transform: valuesInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease-out' }}>
            <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>What We Stand For</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }} className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} style={{
                textAlign: 'center', padding: 'var(--space-8) var(--space-5)',
                borderRadius: 'var(--radius-lg)', background: 'var(--neutral-0)',
                border: '1px solid var(--neutral-100)', transition: 'all var(--transition-base)',
                opacity: valuesInView ? 1 : 0, transform: valuesInView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)' }}>
                  <v.Icon size={24} style={{ color: 'var(--navy-700)' }} />
                </div>
                <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-heading)' }}>{v.title}</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section ref={teamRef} style={{ padding: 'var(--space-12) 0', background: 'linear-gradient(135deg, var(--navy-800), var(--navy-900))' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 'var(--space-6)', opacity: teamInView ? 1 : 0, transform: teamInView ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.6s ease-out' }}>
          {[
            { value: CLINIC.experience, label: 'Years of Excellence' },
            { value: CLINIC.patients, label: 'Patients Treated' },
            { value: '5', label: 'Specialities' },
            { value: '5', label: 'Expert Doctors' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--gold-400)', lineHeight: 1, marginBottom: 'var(--space-1)' }}>{s.value}</div>
              <div style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-4)' }}>
            Ready to Experience the SR³ Difference?
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Book an appointment with our specialists and take the first step towards better health.
          </p>
          <a href="/appointment" style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
            color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
            fontFamily: 'var(--font-accent)', boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
            transition: 'all var(--transition-base)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(230,168,23,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,168,23,0.35)'; }}>
            Book Appointment <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .about-mv-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .values-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
