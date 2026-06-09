import { Phone, MapPin, Mail, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useSEO, breadcrumbSchema } from '../hooks/useSEO';
import { CLINIC } from '../data/clinic';
import { Link } from 'react-router-dom';

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]),
    {
      '@type': 'ContactPage',
      '@id': 'https://sr3entandsurgicalcentre.com/contact#page',
      'name': 'Contact SR³ ENT & Surgical Centre Lucknow',
      'description': 'Contact SR³ ENT & Surgical Centre in Lucknow. Call, WhatsApp, or visit us on Faizabad Road, Tiwariganj.',
      'url': 'https://sr3entandsurgicalcentre.com/contact',
    },
  ],
};

const contactCards = [
  {
    Icon: Phone,
    title: 'Phone',
    lines: [CLINIC.phone1, CLINIC.phone2],
    hrefs: [`tel:${CLINIC.phone1.replace(/\s+/g, '')}`, `tel:${CLINIC.phone2.replace(/\s+/g, '')}`],
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
    desc: 'Call us directly to book an appointment or get information.',
  },
  {
    Icon: Mail,
    title: 'Email',
    lines: [CLINIC.email],
    hrefs: [`mailto:${CLINIC.email}`],
    color: 'var(--navy-700)',
    bg: 'var(--navy-50)',
    desc: 'Send us a message and we\'ll respond within 24 hours.',
  },
  {
    Icon: MapPin,
    title: 'Address',
    lines: [CLINIC.address.street, CLINIC.address.area, `${CLINIC.address.city}, ${CLINIC.address.state}`],
    hrefs: ['https://maps.google.com/?q=SR3+ENT+Surgical+Centre+Tiwariganj+Faizabad+Road+Lucknow'],
    color: 'var(--gold-700)',
    bg: 'var(--gold-50)',
    desc: 'Located in Shivbalak Market, Tiwariganj on Faizabad Road.',
  },
  {
    Icon: Clock,
    title: 'Working Hours',
    lines: [CLINIC.hours.weekday, CLINIC.hours.sunday, `Emergency: ${CLINIC.hours.emergency}`],
    hrefs: [],
    color: '#059669',
    bg: '#ecfdf5',
    desc: 'Walk-in welcome during working hours. Emergency 24/7.',
  },
];

export default function ContactPage() {
  useSEO({
    title: 'Contact Us — Book Appointment at SR³ ENT & Surgical Centre Lucknow',
    description: 'Contact SR³ ENT & Surgical Centre, Lucknow. Call +91 9369643922, WhatsApp, or visit Shivbalak Market, Tiwariganj, Faizabad Road. Mon–Sat 9AM–8PM, Sun 10AM–2PM, Emergency 24/7.',
    keywords: 'contact ENT clinic Lucknow, SR3 ENT phone number, ENT hospital address Lucknow, book appointment Lucknow ENT',
    canonical: '/contact',
    schema: contactSchema,
  });

  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: cardsRef, isInView: cardsInView } = useInView(0.1);
  const { ref: mapRef, isInView: mapInView } = useInView(0.05);
  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-100)', padding: '10px 0' }}>
        <div className="container">
          <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: 'var(--neutral-300)', fontSize: 'var(--text-xs)' }}>›</li>
            <li><span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--navy-700)', fontWeight: 500 }}>Contact Us</span></li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section ref={heroRef} aria-labelledby="contact-heading" style={{
        padding: 'var(--space-16) 0 var(--space-12)',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.05) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease-out' }}>
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Get In Touch</span>
          <h1 id="contact-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Contact SR³ ENT & Surgical Centre
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600, marginBottom: 'var(--space-8)' }}>
            We're here to help. Reach us by phone, WhatsApp, email, or visit us on Faizabad Road, Lucknow.
          </p>
          {/* Quick contact row */}
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} aria-label={`Call SR3 ENT at ${CLINIC.phone1}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '10px var(--space-5)', borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)', color: 'var(--neutral-0)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              textDecoration: 'none', transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}>
              <Phone size={15} aria-hidden="true" /> {CLINIC.phone1}
            </a>
            <a
              href={`https://wa.me/${waNumber}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20services%20at%20SR%C2%B3%20ENT%20%26%20Surgical%20Centre.`}
              target="_blank" rel="noopener noreferrer"
              aria-label="Send WhatsApp message to SR3 ENT"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '10px var(--space-5)', borderRadius: 'var(--radius-full)',
                background: '#25d366', color: '#fff',
                fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
                textDecoration: 'none', transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#128c7e'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; }}>
              <MessageCircle size={15} aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section ref={cardsRef} aria-label="Contact information" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }} className="contact-cards-grid">
            {contactCards.map((card, i) => (
              <div key={card.title} style={{
                padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                boxShadow: 'var(--shadow-xs)',
                transition: 'all var(--transition-base)',
                opacity: cardsInView ? 1 : 0, transform: cardsInView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--neutral-200)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.borderColor = 'var(--neutral-100)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 'var(--radius-md)',
                    background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <card.Icon size={21} style={{ color: card.color }} aria-hidden="true" />
                  </div>
                  <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', margin: 0 }}>{card.title}</h2>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', fontFamily: 'var(--font-accent)', marginBottom: 'var(--space-3)' }}>{card.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {card.lines.map((line, li) => (
                    card.hrefs[li] ? (
                      <a key={line} href={card.hrefs[li]} target={card.hrefs[li].startsWith('http') ? '_blank' : undefined} rel={card.hrefs[li].startsWith('http') ? 'noopener noreferrer' : undefined} style={{
                        fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', fontWeight: 500,
                        transition: 'color var(--transition-fast)', textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = card.color; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--navy-800)'; }}>
                        {line}
                      </a>
                    ) : (
                      <div key={line} style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: line.includes('Emergency') ? '#dc2626' : 'var(--navy-800)', fontWeight: line.includes('Emergency') ? 600 : 500 }}>
                        {line}
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} aria-label="Clinic location map" style={{ padding: '0 0 var(--space-16)', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{
            borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            border: '1px solid var(--neutral-200)', boxShadow: 'var(--shadow-md)',
            opacity: mapInView ? 1 : 0, transform: mapInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease-out',
          }}>
            {/* Map header */}
            <div style={{
              padding: 'var(--space-4) var(--space-6)',
              background: 'var(--neutral-50)',
              borderBottom: '1px solid var(--neutral-100)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--gold-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={18} style={{ color: 'var(--gold-600)' }} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--navy-900)' }}>SR³ ENT & Surgical Centre</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', fontFamily: 'var(--font-accent)' }}>Shivbalak Market, Tiwariganj, Faizabad Road, Lucknow</div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=SR3+ENT+Surgical+Centre+Tiwariganj+Faizabad+Road+Lucknow"
                target="_blank" rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                  padding: '8px var(--space-4)', borderRadius: 'var(--radius-full)',
                  background: 'var(--navy-800)', color: 'var(--neutral-0)',
                  fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600,
                  textDecoration: 'none', transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-500)'; e.currentTarget.style.color = 'var(--navy-950)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy-800)'; e.currentTarget.style.color = 'var(--neutral-0)'; }}
              >
                <ExternalLink size={13} aria-hidden="true" /> Get Directions
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d81.0!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4McKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SR³ ENT & Surgical Centre Location — Tiwariganj, Faizabad Road, Lucknow"
            />
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section aria-label="Social media links" style={{ padding: 'var(--space-12) 0', background: 'var(--neutral-50)' }}>
        <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>Follow SR³ on Social Media</h2>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Stay updated with health tips, patient stories, and clinic announcements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <a href={CLINIC.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Follow SR3 ENT on Facebook" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '12px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              color: 'var(--navy-800)', transition: 'all var(--transition-base)', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#1877f2'; e.currentTarget.style.color = '#1877f2'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(24,119,242,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.color = 'var(--navy-800)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
            <a href={CLINIC.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow SR3 ENT on Instagram" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '12px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              color: 'var(--navy-800)', transition: 'all var(--transition-base)', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#e1306c'; e.currentTarget.style.color = '#e1306c'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(225,48,108,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.color = 'var(--navy-800)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-label="Call to action" style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-4)' }}>
            Ready to Book Your Appointment?
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Our care coordinators are available to answer your questions and schedule your visit.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} aria-label={`Call SR3 ENT at ${CLINIC.phone1}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '13px var(--space-7)', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 700,
              fontFamily: 'var(--font-accent)', boxShadow: 'var(--shadow-gold)',
              textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,168,23,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-gold)'; }}>
              <Phone size={17} aria-hidden="true" /> Call: {CLINIC.phone1}
            </a>
            <Link to="/appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '13px var(--space-7)', borderRadius: 'var(--radius-full)',
              background: 'var(--navy-800)', color: 'var(--neutral-0)',
              fontSize: 'var(--text-base)', fontWeight: 600, fontFamily: 'var(--font-accent)',
              textDecoration: 'none', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy-900)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy-800)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Book Online
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) { .contact-cards-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
