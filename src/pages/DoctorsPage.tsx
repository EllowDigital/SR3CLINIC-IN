import { BadgeCheck, ArrowRight, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useSEO, breadcrumbSchema } from '../hooks/useSEO';
import { DOCTORS, CLINIC } from '../data/clinic';
import { Link } from 'react-router-dom';

const doctorsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Our Doctors', url: '/doctors' },
    ]),
    {
      '@type': 'CollectionPage',
      '@id': 'https://sr3entandsurgicalcentre.com/doctors#page',
      'name': 'ENT Doctors & Specialists in Lucknow — SR³ ENT & Surgical Centre',
      'description': 'Meet our team of 5 specialist doctors at SR³ ENT & Surgical Centre, Lucknow: ENT Specialist, General & Laparoscopic Surgeon, Gynecologist, Physiotherapist, and Dietitian.',
      'url': 'https://sr3entandsurgicalcentre.com/doctors',
    },
  ],
};

export default function DoctorsPage() {
  useSEO({
    title: 'Our Doctors — ENT Specialist, Surgeon & Specialists in Lucknow',
    description: 'Meet the expert medical team at SR³ ENT & Surgical Centre, Lucknow: Dr. Samvartika (ENT), Dr. R.K. Vishwakarma (Laparoscopic Surgeon), Dr. Madhu Agrawal (Gynecologist), Dr. Leena Verma (Physiotherapist), Dr. Induja Dixit (Dietitian).',
    keywords: 'ENT doctor Lucknow, ENT specialist Lucknow, best ENT surgeon Lucknow, gynecologist Lucknow, laparoscopic surgeon Lucknow, physiotherapist Lucknow, dietitian Lucknow',
    canonical: '/doctors',
    schema: doctorsSchema,
  });

  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: gridRef, isInView: gridInView } = useInView(0.05);

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-100)', padding: '10px 0' }}>
        <div className="container">
          <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: 'var(--neutral-300)', fontSize: 'var(--text-xs)' }}>›</li>
            <li><span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--navy-700)', fontWeight: 500 }}>Our Doctors</span></li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section ref={heroRef} aria-labelledby="doctors-heading" style={{
        padding: 'var(--space-16) 0 var(--space-12)',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Our Team</span>
          <h1 id="doctors-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Expert Doctors in Lucknow
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
            Board-certified specialists with decades of combined experience — ENT, surgery, gynecology, physiotherapy, and nutrition under one roof.
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section ref={gridRef} aria-label="Doctor profiles" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {DOCTORS.map((doc, i) => (
              <article key={doc.name} aria-labelledby={`doc-${i}-name`} style={{
                display: 'grid', gridTemplateColumns: '280px 1fr', gap: 0,
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                transition: 'all var(--transition-base)',
                opacity: gridInView ? 1 : 0, transform: gridInView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
                boxShadow: 'var(--shadow-xs)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,30,61,0.1)'; e.currentTarget.style.borderColor = 'var(--neutral-200)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.borderColor = 'var(--neutral-100)'; }}
              className="doctor-profile-card">
                {/* Photo */}
                <div style={{ position: 'relative', background: 'var(--navy-50)', overflow: 'hidden', minHeight: 320 }}>
                  <img
                    src={doc.image}
                    alt={`${doc.name} — ${doc.speciality} at SR³ ENT & Surgical Centre Lucknow`}
                    loading="lazy"
                    width="280"
                    height="320"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
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
                  <h2 id={`doc-${i}-name`} style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-1)' }}>
                    {doc.name}
                  </h2>
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
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }} aria-label={`${doc.name}'s areas of expertise`}>
                      {doc.expertise.map(ex => (
                        <li key={ex} style={{
                          padding: '4px var(--space-3)', borderRadius: 'var(--radius-full)',
                          background: 'var(--navy-50)', fontSize: '11px',
                          fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-700)',
                        }}>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Registration + CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--neutral-100)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                    {doc.registration && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        <BadgeCheck size={16} style={{ color: 'var(--teal-600)' }} aria-hidden="true" />
                        <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)' }}>
                          Reg. No. {doc.registration}
                        </span>
                      </div>
                    )}
                    <Link
                      to="/appointment"
                      aria-label={`Book consultation with ${doc.name}`}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
                        fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
                        color: 'var(--navy-700)', transition: 'gap var(--transition-fast)', textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.gap = 'var(--space-2)'; e.currentTarget.style.color = 'var(--gold-600)'; }}
                      onMouseLeave={e => { e.currentTarget.style.gap = 'var(--space-1)'; e.currentTarget.style.color = 'var(--navy-700)'; }}
                    >
                      Book Consultation <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Book appointment with our doctors" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-4)' }}>
            Book a Consultation Today
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Our specialists are just a call away. Same-day appointments available for urgent cases.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Link to="/appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 700,
              fontFamily: 'var(--font-accent)', boxShadow: 'var(--shadow-gold)',
              textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,168,23,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-gold)'; }}>
              Book Appointment <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} aria-label={`Call SR3 ENT at ${CLINIC.phone1}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
              color: 'var(--navy-800)', fontSize: 'var(--text-base)', fontWeight: 500,
              fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--neutral-50)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--neutral-0)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Phone size={18} aria-hidden="true" /> {CLINIC.phone1}
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
