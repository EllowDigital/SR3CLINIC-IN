import { Phone, MapPin, Mail, Clock, ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC } from '../data/clinic';

const specialties = ['ENT', 'General Surgery', 'Laparoscopic Surgery', 'Gynecology', 'Physiotherapy', 'Diet Consultation'];
const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Doctors', href: '/doctors' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Appointment', href: '/appointment' },
];
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Patient Rights', 'Disclaimer'];

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(160deg, #070d1a 0%, #0f1e3d 40%, #162852 100%)',
      color: 'var(--neutral-300)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative top line */}
      <div style={{
        height: 3,
        background: 'linear-gradient(90deg, transparent, var(--gold-500), transparent)',
      }} />

      {/* Main footer */}
      <div style={{
        padding: 'var(--space-16) 0 var(--space-8)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr',
            gap: 'var(--space-10)',
          }} className="footer-grid">
            {/* Brand column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(230, 168, 23, 0.1)',
                  border: '1px solid rgba(230, 168, 23, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gold-400)',
                  }}>SR³</span>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 'var(--text-base)',
                    color: 'var(--neutral-0)',
                  }}>
                    SR³ ENT & Surgical
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--gold-400)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}>
                    Care & Cure
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'rgba(255,255,255,0.45)',
                maxWidth: 300,
                marginBottom: 'var(--space-6)',
              }}>
                Delivering world-class healthcare with compassion and precision. Your trusted partner for ENT, Surgical, and comprehensive medical care in Lucknow.
              </p>
              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-accent)',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--gold-400)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  <Phone size={14} />
                  {CLINIC.phone1}
                </a>
                <a href={`mailto:${CLINIC.email}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-accent)',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--gold-400)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  <Mail size={14} />
                  {CLINIC.email}
                </a>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-3)',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-accent)',
                }}>
                  <MapPin size={14} style={{ marginTop: 3, flexShrink: 0 }} />
                  {CLINIC.address.city}, {CLINIC.address.state}, {CLINIC.address.country}
                </div>
                {/* Social links */}
                <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
                  <a href={CLINIC.social.facebook} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold-400)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                  }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href={CLINIC.social.instagram} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold-400)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                  }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--neutral-0)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-5)',
                paddingBottom: 'var(--space-3)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                Specialities
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {specialties.map((s) => (
                  <Link key={s} to={`/services#${s.toLowerCase().replace(/\s+/g, '-')}`} style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-accent)',
                    color: 'rgba(255,255,255,0.45)',
                    transition: 'all var(--transition-fast)',
                    padding: '2px 0',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold-400)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                  }}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--neutral-0)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-5)',
                paddingBottom: 'var(--space-3)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {quickLinks.map((l) => (
                  <Link key={l.label} to={l.href} style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-accent)',
                    color: 'rgba(255,255,255,0.45)',
                    transition: 'all var(--transition-fast)',
                    padding: '2px 0',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold-400)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                  }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--neutral-0)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-5)',
                paddingBottom: 'var(--space-3)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                Working Hours
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {[
                  { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
                  { day: 'Sunday', time: '10:00 AM - 2:00 PM' },
                  { day: 'Emergency', time: '24/7 Available' },
                ].map((h) => (
                  <div key={h.day} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                  }}>
                    <span style={{
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'var(--font-accent)',
                      color: 'rgba(255,255,255,0.45)',
                    }}>
                      {h.day}
                    </span>
                    <span style={{
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-accent)',
                      fontWeight: 500,
                      color: h.day === 'Emergency' ? 'var(--gold-400)' : 'rgba(255,255,255,0.6)',
                    }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA in footer */}
              <Link to="/appointment" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                width: '100%',
                padding: 'var(--space-3) var(--space-5)',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                color: 'var(--navy-950)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                fontFamily: 'var(--font-accent)',
                marginTop: 'var(--space-6)',
                boxShadow: 'var(--shadow-gold)',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(230, 168, 23, 0.35)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-gold)';
              }}
              >
                <Clock size={14} />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'var(--space-5) 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
        }}>
          <div style={{
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-accent)',
            color: 'rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
          }}>
            Made with <Heart size={10} style={{ color: 'var(--gold-500)' }} /> by SR³ ENT & Surgical Centre &copy; {new Date().getFullYear()}
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            {legalLinks.map((l) => (
              <a key={l} href="#" style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-accent)',
                color: 'rgba(255,255,255,0.3)',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--gold-400)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: 28,
          left: 28,
          zIndex: 800,
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-full)',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all var(--transition-base)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)';
          (e.currentTarget as HTMLElement).style.color = 'var(--gold-400)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
          (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
        }
      `}</style>
    </footer>
  );
}
