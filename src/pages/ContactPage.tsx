import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../data/clinic';

const contactCards = [
  {
    Icon: Phone,
    title: 'Phone',
    lines: [CLINIC.phone1, CLINIC.phone2],
    hrefs: [`tel:${CLINIC.phone1.replace(/\s+/g, '')}`, `tel:${CLINIC.phone2.replace(/\s+/g, '')}`],
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
  },
  {
    Icon: Mail,
    title: 'Email',
    lines: [CLINIC.email],
    hrefs: [`mailto:${CLINIC.email}`],
    color: 'var(--navy-700)',
    bg: 'var(--navy-50)',
  },
  {
    Icon: MapPin,
    title: 'Address',
    lines: [CLINIC.address.street, CLINIC.address.area, `${CLINIC.address.city}, ${CLINIC.address.state}, ${CLINIC.address.country}`],
    hrefs: ['https://maps.google.com/?q=SR3+ENT+Surgical+Centre+Lucknow'],
    color: 'var(--gold-700)',
    bg: 'var(--gold-50)',
  },
  {
    Icon: Clock,
    title: 'Working Hours',
    lines: [CLINIC.hours.weekday, CLINIC.hours.sunday, `Emergency: ${CLINIC.hours.emergency}`],
    hrefs: [],
    color: '#059669',
    bg: '#ecfdf5',
  },
];

export default function ContactPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: cardsRef, isInView: cardsInView } = useInView(0.1);

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
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Get In Touch</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
            We're here to help. Reach us by phone, email, or visit us at our clinic on Faizabad Road.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section ref={cardsRef} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }} className="contact-cards-grid">
            {contactCards.map((card, i) => (
              <div key={card.title} style={{
                padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                transition: 'all var(--transition-base)',
                opacity: cardsInView ? 1 : 0, transform: cardsInView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 'var(--radius-md)',
                    background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <card.Icon size={20} style={{ color: card.color }} />
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)' }}>{card.title}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {card.lines.map((line, li) => (
                    card.hrefs[li] ? (
                      <a key={line} href={card.hrefs[li]} target={card.hrefs[li].startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{
                        fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', fontWeight: 500,
                        transition: 'color var(--transition-fast)',
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

      {/* Map */}
      <section style={{ padding: '0 0 var(--space-16)', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{
            borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            border: '1px solid var(--neutral-100)', boxShadow: 'var(--shadow-sm)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d81.0!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4McKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SR³ ENT & Surgical Centre Location"
            />
          </div>
          <div style={{ marginTop: 'var(--space-4)', textAlign: 'center' }}>
            <a href="https://maps.google.com/?q=SR3+ENT+Surgical+Centre+Tiwariganj+Faizabad+Road+Lucknow" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              color: 'var(--navy-700)', transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold-600)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--navy-700)'; }}>
              <MapPin size={14} /> Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Social */}
      <section style={{ padding: 'var(--space-12) 0', background: 'var(--neutral-50)' }}>
        <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
          <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-5)' }}>Follow Us</h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Stay updated with health tips, patient stories, and clinic news.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)' }}>
            <a href={CLINIC.social.facebook} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '12px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              color: 'var(--navy-800)', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#1877f2'; e.currentTarget.style.color = '#1877f2'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.color = 'var(--navy-800)'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Facebook
            </a>
            <a href={CLINIC.social.instagram} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '12px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              color: 'var(--navy-800)', transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#e1306c'; e.currentTarget.style.color = '#e1306c'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.color = 'var(--navy-800)'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-4)' }}>
            Prefer to Talk to Someone?
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Our care coordinators are available to answer your questions and help you schedule a visit.
          </p>
          <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
            color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
            fontFamily: 'var(--font-accent)', boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
            transition: 'all var(--transition-base)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
            <Phone size={18} /> Call: {CLINIC.phone1}
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) { .contact-cards-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
