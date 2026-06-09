import { Shield, HeartPulse, Users, Target, Eye, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useSEO, breadcrumbSchema } from '../hooks/useSEO';
import { CLINIC } from '../data/clinic';
import { Link } from 'react-router-dom';

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

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ]),
    {
      '@type': 'AboutPage',
      '@id': 'https://sr3entandsurgicalcentre.com/about#page',
      'name': 'About SR³ ENT & Surgical Centre Lucknow',
      'description': 'Learn about SR³ ENT & Surgical Centre — 15+ years of healthcare excellence in Lucknow, our mission, values, and the team committed to your wellbeing.',
      'url': 'https://sr3entandsurgicalcentre.com/about',
      'isPartOf': { '@id': 'https://sr3entandsurgicalcentre.com/#website' },
      'about': { '@id': 'https://sr3entandsurgicalcentre.com/#organization' },
    },
  ],
};

export default function AboutPage() {
  useSEO({
    title: 'About Us — 15+ Years of Healthcare Excellence in Lucknow',
    description: 'Learn about SR³ ENT & Surgical Centre — founded in 2010, serving 50,000+ patients in Lucknow with expert ENT, surgery, gynecology, physiotherapy and diet services. Our mission, values & team.',
    keywords: 'about SR3 ENT Lucknow, ENT clinic history Lucknow, best surgical centre Lucknow, multi-speciality hospital Lucknow',
    canonical: '/about',
    schema: aboutSchema,
  });

  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: storyRef, isInView: storyInView } = useInView(0.1);
  const { ref: valuesRef, isInView: valuesInView } = useInView(0.1);
  const { ref: teamRef, isInView: teamInView } = useInView(0.1);

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-100)', padding: '10px 0' }}>
        <div className="container">
          <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: 'var(--neutral-300)', fontSize: 'var(--text-xs)' }}>›</li>
            <li><span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--navy-700)', fontWeight: 500 }}>About Us</span></li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section ref={heroRef} aria-labelledby="about-heading" style={{
        padding: 'var(--space-16) 0 var(--space-12)',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>About Us</span>
          <h1 id="about-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Our Story, Our Mission
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
            Built on trust, expertise, and compassion — {CLINIC.name} has been transforming healthcare in Lucknow for over 15 years.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section aria-label="Mission and Vision" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-10)' }} className="about-mv-grid">
            <div style={{
              padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, var(--navy-50), var(--navy-100))',
              border: '1px solid var(--navy-100)',
              transition: 'transform var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--navy-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                <Target size={22} style={{ color: 'var(--gold-400)' }} aria-hidden="true" />
              </div>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-heading)' }}>Our Mission</h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)' }}>
                To provide world-class, compassionate healthcare that is accessible, transparent, and patient-centric. We believe every person in Lucknow deserves specialist care without compromise — close to home, at fair cost, delivered with genuine warmth.
              </p>
            </div>
            <div style={{
              padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, var(--gold-50), var(--gold-100))',
              border: '1px solid var(--gold-100)',
              transition: 'transform var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--gold-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                <Eye size={22} style={{ color: 'var(--neutral-0)' }} aria-hidden="true" />
              </div>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-heading)' }}>Our Vision</h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)' }}>
                To be Uttar Pradesh's most trusted multi-speciality surgical centre — where patients feel heard, families feel supported, and clinical outcomes set the benchmark for the region. Excellence in every interaction, from first call to full recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story + Timeline */}
      <section ref={storyRef} aria-label="Our history and milestones" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)', alignItems: 'start' }} className="story-grid">
            <div style={{ opacity: storyInView ? 1 : 0, transform: storyInView ? 'translateX(0)' : 'translateX(-24px)', transition: 'all 0.7s ease-out' }}>
              <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>Est. 2010</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-5)' }}>
                15 Years of Healing in Lucknow
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
                SR³ ENT & Surgical Centre was born from a simple belief: that patients in Lucknow deserve specialist care typically found only in metropolitan hospitals — but close to home, delivered with dignity, and at a fair price.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                What began as an ENT practice has grown into a full multi-speciality surgical centre, serving over 50,000 patients across Lucknow and surrounding districts. Our growth has always been patient-led — every speciality added was in response to a genuine community need.
              </p>
              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
                {[
                  { value: '15+', label: 'Years of Excellence' },
                  { value: '50K+', label: 'Patients Served' },
                  { value: '4.9★', label: 'Patient Rating' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 4 }}>{s.value}</div>
                    <div style={{ fontSize: 11, fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div style={{ opacity: storyInView ? 1 : 0, transform: storyInView ? 'translateX(0)' : 'translateX(24px)', transition: 'all 0.7s ease-out 0.15s' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-6)' }}>Our Journey</h3>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, var(--navy-200), var(--gold-200))' }} aria-hidden="true" />
                {milestones.map((m, i) => (
                  <div key={m.year} style={{
                    display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-5)',
                    opacity: storyInView ? 1 : 0,
                    transform: storyInView ? 'translateY(0)' : 'translateY(12px)',
                    transition: `all 0.5s ease-out ${i * 70}ms`,
                  }}>
                    <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: 'var(--neutral-0)', border: '2px solid var(--navy-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                      <span style={{ fontSize: 10, fontFamily: 'var(--font-accent)', fontWeight: 700, color: 'var(--navy-800)' }}>{m.year.slice(2)}'</span>
                    </div>
                    <div style={{ paddingTop: 8 }}>
                      <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--gold-600)', marginBottom: 2, letterSpacing: '0.05em' }}>{m.year}</div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', fontFamily: 'var(--font-accent)', lineHeight: 'var(--leading-relaxed)' }}>{m.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} aria-labelledby="values-heading" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', opacity: valuesInView ? 1 : 0, transform: valuesInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-600)', marginBottom: 'var(--space-3)' }}>What We Stand For</span>
            <h2 id="values-heading" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)' }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }} className="values-grid">
            {values.map(({ Icon, title, desc }, i) => (
              <div key={title} style={{
                padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                textAlign: 'center',
                opacity: valuesInView ? 1 : 0,
                transform: valuesInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${i * 80}ms`,
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--navy-200)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--neutral-100)'; }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)' }}>
                  <Icon size={22} style={{ color: 'var(--navy-700)' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)' }}>{title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 'var(--leading-relaxed)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={teamRef} aria-label="Book appointment" style={{ padding: 'var(--space-16) 0', background: 'linear-gradient(135deg, var(--navy-900), var(--navy-800))', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div style={{ opacity: teamInView ? 1 : 0, transform: teamInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
              Ready to Experience Exceptional Care?
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--space-8)' }}>
              Join the 50,000+ patients who have trusted SR³ with their health. Book your consultation today.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/appointment" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '13px var(--space-7)', borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 700,
                fontFamily: 'var(--font-accent)', boxShadow: 'var(--shadow-gold)',
                textDecoration: 'none', transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,168,23,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-gold)'; }}>
                Book Appointment <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/doctors" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '13px var(--space-7)', borderRadius: 'var(--radius-full)',
                background: 'transparent', border: '1px solid rgba(255,255,255,0.25)',
                color: 'var(--neutral-0)', fontSize: 'var(--text-base)', fontWeight: 600,
                fontFamily: 'var(--font-accent)', textDecoration: 'none', transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'transparent'; }}>
                Meet Our Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .about-mv-grid, .story-grid { grid-template-columns: 1fr !important; } .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
