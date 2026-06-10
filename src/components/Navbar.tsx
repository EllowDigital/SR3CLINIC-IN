import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { CLINIC } from '../data/clinic';

const serviceSlugMap: Record<string, string> = {
  'ENT': '/services/ent',
  'General Surgery': '/services/general-surgery',
  'Laparoscopic Surgery': '/services/laparoscopic-surgery',
  'Gynecology': '/services/gynecology',
  'Physiotherapy': '/services/physiotherapy',
  'Diet Consultation': '/services/diet-consultation',
};

const navLinks = [
  {
    label: 'Specialities',
    href: '/services',
    submenu: ['ENT', 'General Surgery', 'Laparoscopic Surgery', 'Gynecology', 'Physiotherapy', 'Diet Consultation'],
  },
  { label: 'About', href: '/about' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    setMobileOpen(false);
    setActiveSubmenu(null);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else if (e) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top bar */}
      <div style={{
        background: 'var(--navy-950)',
        color: 'var(--neutral-300)',
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-accent)',
        letterSpacing: '0.05em',
        overflow: 'hidden',
        height: isScrolled ? 0 : 36,
        transition: 'height var(--transition-base)',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 36,
          padding: '0 var(--space-6)',
        }}>
          <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}>
            <span style={{ opacity: 0.8 }}>{CLINIC.hours.weekday}</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ opacity: 0.8 }}>{CLINIC.address.city}, {CLINIC.address.state}</span>
          </div>
          <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            color: 'var(--gold-400)',
            fontWeight: 500,
          }}>
            <Phone size={12} />
            {CLINIC.phone1}
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.92)'
          : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled
          ? '1px solid rgba(15, 30, 61, 0.08)'
          : '1px solid rgba(15, 30, 61, 0.04)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transition: 'all var(--transition-base)',
      }}>
        <nav className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: isScrolled ? 64 : 76,
          transition: 'height var(--transition-base)',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
            <img
              src="/sr3clinic.jpeg"
              alt="SR3 Logo"
              style={{
                width: isScrolled ? 38 : 46,
                height: isScrolled ? 38 : 46,
                borderRadius: 'var(--radius-md)',
                objectFit: 'cover',
                transition: 'all var(--transition-base)',
              }}
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: isScrolled ? 'var(--text-sm)' : 'var(--text-base)',
                color: 'var(--navy-900)',
                lineHeight: 1.2,
                transition: 'font-size var(--transition-base)',
                letterSpacing: '-0.01em',
              }}>
                SR³ ENT & Surgical
              </div>
              <div style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'var(--text-xs)',
                color: 'var(--gold-600)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                lineHeight: 1,
                marginTop: 2,
              }}>
                Care & Cure
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
          }} className="nav-desktop-links">
            {navLinks.map((link) => (
              <div
                key={link.label}
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
                style={{ position: 'relative' }}
              >
                <Link to={link.href} onClick={(e) => handleNavClick(link.href, e)} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: 'var(--space-2) var(--space-3)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--navy-800)',
                  letterSpacing: '0.01em',
                  transition: 'all var(--transition-fast)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--navy-50)';
                  e.currentTarget.style.color = 'var(--navy-900)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--navy-800)';
                }}
                >
                  {link.label}
                  {link.submenu && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {link.submenu && activeSubmenu === link.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    minWidth: 220,
                    padding: 'var(--space-2)',
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--neutral-100)',
                    animation: 'fadeInUp 0.2s ease-out',
                  }}>
                    {link.submenu.map((item) => (
                      <Link key={item} to={serviceSlugMap[item] || `/services#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => { setActiveSubmenu(null); setMobileOpen(false); }} style={{
                        display: 'block',
                        padding: 'var(--space-2) var(--space-3)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'var(--font-accent)',
                        color: 'var(--neutral-700)',
                        transition: 'all var(--transition-fast)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--navy-50)';
                        e.currentTarget.style.color = 'var(--navy-800)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--neutral-700)';
                      }}>
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Link to="/appointment" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-5)',
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--neutral-0)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              fontFamily: 'var(--font-accent)',
              boxShadow: 'var(--shadow-gold)',
              letterSpacing: '0.02em',
              transition: 'all var(--transition-base)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(230, 168, 23, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
            }}
            className="nav-cta-desktop"
            >
              Book Appointment
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none',
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-md)',
                background: 'var(--navy-50)',
                color: 'var(--navy-800)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 998,
          background: 'rgba(15, 30, 61, 0.5)',
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.2s ease-out',
        }} onClick={() => setMobileOpen(false)}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'min(320px, 85vw)',
            height: '100%',
            background: 'var(--neutral-0)',
            boxShadow: 'var(--shadow-xl)',
            padding: 'var(--space-8) var(--space-6)',
            animation: 'slideInRight 0.3s ease-out',
            overflowY: 'auto',
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'var(--space-6)' }}>
              <button onClick={() => setMobileOpen(false)} style={{
                width: 36, height: 36, borderRadius: 'var(--radius-md)',
                background: 'var(--neutral-100)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <X size={18} color="var(--navy-800)" />
              </button>
            </div>
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link to={link.href} onClick={() => setMobileOpen(false)} style={{
                  display: 'block',
                  padding: 'var(--space-3) var(--space-4)',
                  fontFamily: 'var(--font-accent)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  color: 'var(--navy-800)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 'var(--space-1)',
                  textDecoration: 'none',
                }}>
                  {link.label}
                </Link>
                {link.submenu && (
                  <div style={{ paddingLeft: 'var(--space-4)' }}>
                    {link.submenu.map((item) => (
                      <Link key={item} to={serviceSlugMap[item] || `/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block',
                          padding: 'var(--space-2) var(--space-4)',
                          fontSize: 'var(--text-sm)',
                          fontFamily: 'var(--font-accent)',
                          color: 'var(--neutral-500)',
                          borderRadius: 'var(--radius-sm)',
                          textDecoration: 'none',
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)' }}>
              <Link to="/appointment" onClick={() => setMobileOpen(false)} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                width: '100%',
                padding: 'var(--space-3) var(--space-6)',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                color: 'var(--neutral-0)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                fontFamily: 'var(--font-accent)',
                boxShadow: 'var(--shadow-gold)',
                textDecoration: 'none',
              }}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop-links {
          display: flex !important;
        }
        .nav-mobile-toggle {
          display: none !important;
        }
        .nav-cta-desktop {
          display: inline-flex !important;
        }
        @media (max-width: 1024px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
          .nav-cta-desktop {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
