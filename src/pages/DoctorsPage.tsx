import { BadgeCheck, ArrowRight } from 'lucide-react';
import { Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { DOCTORS, CLINIC } from '../data/clinic';

export default function DoctorsPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: gridRef, isInView: gridInView } = useInView(0.05);

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
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Our Team</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Meet Our Doctors
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
            Board-certified specialists with decades of combined experience, dedicated to your health and well-being.
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section ref={gridRef} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {DOCTORS.map((doc, i) => (
              <div key={doc.name} style={{
                display: 'grid', gridTemplateColumns: '280px 1fr', gap: 0,
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                transition: 'all var(--transition-base)',
                opacity: gridInView ? 1 : 0, transform: gridInView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,30,61,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
              className="doctor-profile-card">
                {/* Photo */}
                <div style={{
                  position: 'relative', background: 'var(--navy-50)', overflow: 'hidden',
                  minHeight: 320,
                }}>
                  <img src={doc.image} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-4)',
                    background: 'linear-gradient(to top, rgba(15,30,61,0.85), transparent)',
                  }}>
                    <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--gold-400)', letterSpacing: '0.05em' }}>
                      {doc.speciality}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: 'var(--space-8)' }}>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-1)' }}>
                    {doc.name}
                  </h3>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gold-600)', fontFamily: 'var(--font-accent)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>
                    {doc.qualifications}
                  </div>

                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
                    {doc.bio}
                  </p>

                  {/* Expertise */}
                  <div style={{ marginBottom: 'var(--space-5)' }}>
                    <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-800)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                      Areas of Expertise
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                      {doc.expertise.map(ex => (
                        <span key={ex} style={{
                          padding: '4px var(--space-3)', borderRadius: 'var(--radius-full)',
                          background: 'var(--navy-50)', fontSize: '11px',
                          fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-700)',
                        }}>
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Registration + CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--neutral-100)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                    {doc.registration && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        <BadgeCheck size={16} style={{ color: 'var(--teal-600)' }} />
                        <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)' }}>
                          Reg. No. {doc.registration}
                        </span>
                      </div>
                    )}
                    <a href="/appointment" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
                      fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
                      color: 'var(--navy-700)', transition: 'gap var(--transition-fast)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.gap = 'var(--space-2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.gap = 'var(--space-1)'; }}>
                      Book Consultation <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-4)' }}>
            Need a Consultation?
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Our specialists are just a call away. Book your appointment today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <a href="/appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
              fontFamily: 'var(--font-accent)', boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
              transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              Book Appointment <ArrowRight size={18} />
            </a>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
              color: 'var(--navy-800)', fontSize: 'var(--text-base)', fontWeight: 500,
              fontFamily: 'var(--font-accent)', transition: 'all var(--transition-base)',
            }}>
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .doctor-profile-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
