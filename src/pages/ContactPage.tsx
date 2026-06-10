import { useState } from 'react';
import { Phone, MapPin, Mail, Clock, ExternalLink, MessageCircle, Send, CircleCheck as CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';
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
    lines: [CLINIC.address.street, `${CLINIC.address.area}, ${CLINIC.address.city}, ${CLINIC.address.state}`],
    hrefs: ['https://maps.google.com/?q=SR3+ENT+Surgical+Centre+Tiwariganj+Faizabad+Road+Lucknow'],
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
  const { ref: formRef, isInView: formInView } = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 560, marginBottom: 'var(--space-6)' }}>
            We're here to help. Reach us by phone, WhatsApp, email, or visit us on Faizabad Road.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '10px var(--space-5)', borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)', color: 'var(--neutral-0)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              textDecoration: 'none', transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}>
              <Phone size={15} /> {CLINIC.phone1}
            </a>
            <a href={`https://wa.me/${waNumber}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20services%20at%20SR3%20ENT%20%26%20Surgical%20Centre.`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '10px var(--space-5)', borderRadius: 'var(--radius-full)',
                background: '#25d366', color: '#fff',
                fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
                textDecoration: 'none', transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#128c7e'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; }}>
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section ref={formRef} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'start' }} className="contact-main-grid">

            {/* Left: Contact Info Cards */}
            <div style={{
              opacity: formInView ? 1 : 0, transform: formInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-2)' }}>
                Reach Us Directly
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
                Multiple ways to get in touch — choose what works best for you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {contactCards.map((card, i) => (
                  <div key={card.title} style={{
                    display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-5)',
                    borderRadius: 'var(--radius-lg)', background: 'var(--neutral-0)',
                    border: '1px solid var(--neutral-100)',
                    transition: 'all var(--transition-base)',
                    opacity: formInView ? 1 : 0, transform: formInView ? 'translateX(0)' : 'translateX(-16px)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-100)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 'var(--radius-md)',
                      background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <card.Icon size={22} style={{ color: card.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-2)' }}>
                        {card.title}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                        {card.lines.map((line, li) => (
                          card.hrefs[li] ? (
                            <a key={line} href={card.hrefs[li]} target={card.hrefs[li].startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{
                              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', fontWeight: 500,
                              textDecoration: 'none', transition: 'color var(--transition-fast)',
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
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{
              opacity: formInView ? 1 : 0, transform: formInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.1s',
            }}>
              {submitted ? (
                <div style={{
                  padding: 'var(--space-12)', borderRadius: 'var(--radius-lg)',
                  background: 'var(--teal-50)', border: '1px solid var(--teal-200)',
                  textAlign: 'center',
                }}>
                  <CheckCircle size={48} style={{ color: 'var(--teal-600)', margin: '0 auto var(--space-4)' }} />
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-heading)' }}>
                    Message Sent Successfully
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', maxWidth: 360, margin: '0 auto var(--space-6)' }}>
                    Thank you, {form.name}! We'll respond to your enquiry within 24 hours. For urgent matters, please call us directly.
                  </p>
                  <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
                    display: 'inline-flex', padding: '10px var(--space-6)', borderRadius: 'var(--radius-full)',
                    background: 'var(--navy-800)', color: 'var(--neutral-0)', fontSize: 'var(--text-sm)',
                    fontWeight: 600, fontFamily: 'var(--font-accent)', textDecoration: 'none',
                  }}>
                    <Phone size={14} style={{ marginRight: 'var(--space-2)' }} /> Call Us Instead
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)',
                  background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                }}>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-6)' }}>
                    Send Us a Message
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }} className="contact-form-grid">
                      <div>
                        <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required style={{
                          width: '100%', padding: '10px var(--space-4)', borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--neutral-200)', fontSize: 'var(--text-sm)',
                          fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', outline: 'none',
                          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                          background: 'var(--neutral-0)',
                        }}
                        onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(230,168,23,0.1)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>Phone *</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" type="tel" required style={{
                          width: '100%', padding: '10px var(--space-4)', borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--neutral-200)', fontSize: 'var(--text-sm)',
                          fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', outline: 'none',
                          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                          background: 'var(--neutral-0)',
                        }}
                        onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(230,168,23,0.1)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>Email</label>
                      <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" style={{
                        width: '100%', padding: '10px var(--space-4)', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--neutral-200)', fontSize: 'var(--text-sm)',
                        fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', outline: 'none',
                        transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                        background: 'var(--neutral-0)',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(230,168,23,0.1)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>Subject</label>
                      <input name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Appointment enquiry, General question" style={{
                        width: '100%', padding: '10px var(--space-4)', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--neutral-200)', fontSize: 'var(--text-sm)',
                        fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', outline: 'none',
                        transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                        background: 'var(--neutral-0)',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(230,168,23,0.1)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" rows={4} required style={{
                        width: '100%', padding: 'var(--space-3) var(--space-4)',
                        borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-200)',
                        fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                        color: 'var(--navy-800)', resize: 'vertical', outline: 'none',
                        transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                        background: 'var(--neutral-0)',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(230,168,23,0.1)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }} />
                    </div>
                    <button type="submit" style={{
                      width: '100%',
                      padding: '14px', borderRadius: 'var(--radius-full)',
                      background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                      color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
                      fontFamily: 'var(--font-accent)', boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
                      transition: 'all var(--transition-base)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,168,23,0.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,168,23,0.35)'; }}>
                      <Send size={16} style={{ verticalAlign: 'middle', marginRight: 'var(--space-2)' }} />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '0 0 var(--space-16)', background: 'var(--neutral-50)' }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{
            borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            border: '1px solid var(--neutral-200)', boxShadow: 'var(--shadow-md)',
          }}>
            <div style={{
              padding: 'var(--space-4) var(--space-6)',
              background: 'var(--neutral-0)',
              borderBottom: '1px solid var(--neutral-100)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--gold-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={18} style={{ color: 'var(--gold-600)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--navy-900)' }}>SR3 ENT & Surgical Centre</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', fontFamily: 'var(--font-accent)' }}>Tiwariganj, Faizabad Road, Lucknow</div>
                </div>
              </div>
              <a href="https://maps.google.com/?q=SR3+ENT+Surgical+Centre+Tiwariganj+Faizabad+Road+Lucknow"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                  padding: '8px var(--space-4)', borderRadius: 'var(--radius-full)',
                  background: 'var(--navy-800)', color: 'var(--neutral-0)',
                  fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600,
                  textDecoration: 'none', transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-500)'; e.currentTarget.style.color = 'var(--navy-950)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy-800)'; e.currentTarget.style.color = 'var(--neutral-0)'; }}>
                <ExternalLink size={13} /> Get Directions
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d81.0!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4McKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SR3 ENT & Surgical Centre Location"
            />
          </div>
        </div>
      </section>

      {/* Social + CTA */}
      <section style={{ padding: 'var(--space-12) 0', background: 'var(--neutral-0)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>Follow Us on Social Media</h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Health tips, patient stories, and clinic updates.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
            <a href={CLINIC.social.facebook} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '12px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-50)', border: '1px solid var(--neutral-200)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              color: 'var(--navy-800)', transition: 'all var(--transition-base)', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#1877f2'; e.currentTarget.style.color = '#1877f2'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.color = 'var(--navy-800)'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
            <a href={CLINIC.social.instagram} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '12px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-50)', border: '1px solid var(--neutral-200)',
              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500,
              color: 'var(--navy-800)', transition: 'all var(--transition-base)', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#e1306c'; e.currentTarget.style.color = '#e1306c'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.color = 'var(--navy-800)'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </a>
          </div>

          <div style={{ paddingTop: 'var(--space-6)', borderTop: '1px solid var(--neutral-100)' }}>
            <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-3)' }}>
              Ready to Book Your Appointment?
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-5)' }}>
              Our coordinators are ready to schedule your visit.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '12px var(--space-7)', borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 700,
                fontFamily: 'var(--font-accent)', boxShadow: 'var(--shadow-gold)',
                textDecoration: 'none', transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <Phone size={17} /> Call: {CLINIC.phone1}
              </a>
              <Link to="/appointment" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '12px var(--space-7)', borderRadius: 'var(--radius-full)',
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
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
