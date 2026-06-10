import { CalendarCheck, X, Phone, MessageCircle, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CLINIC } from '../data/clinic';

export default function FloatingAppointment() {
  const [expanded, setExpanded] = useState(false);
  const [pulse, setPulse] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');

  // Stop pulse after first open
  useEffect(() => {
    if (expanded) setPulse(false);
  }, [expanded]);

  // Close on route change
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const options = [
    {
      icon: Phone,
      label: 'Call Us',
      sublabel: CLINIC.phone1,
      href: `tel:${CLINIC.phone1.replace(/\s+/g, '')}`,
      bg: 'linear-gradient(135deg, var(--teal-600), var(--teal-700))',
      color: '#fff',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      sublabel: 'Chat & book instantly',
      href: `https://wa.me/${waNumber}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`,
      bg: 'linear-gradient(135deg, #25d366, #128c7e)',
      color: '#fff',
      external: true,
    },
    {
      icon: CalendarCheck,
      label: 'Online Booking',
      sublabel: 'Fill appointment form',
      href: '/appointment',
      bg: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
      color: 'var(--navy-950)',
      internal: true,
    },
    {
      icon: MapPin,
      label: 'Get Directions',
      sublabel: 'Tiwariganj, Faizabad Rd',
      href: 'https://maps.google.com/?q=SR3+ENT+Surgical+Centre+Tiwariganj+Faizabad+Road+Lucknow',
      bg: 'var(--neutral-100)',
      color: 'var(--navy-800)',
      external: true,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {expanded && (
        <div
          onClick={() => setExpanded(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 850,
            background: 'rgba(0,0,0,0.2)',
            animation: 'fadeIn 0.2s ease-out',
          }}
        />
      )}

      {/* Expanded Panel */}
      {expanded && (
        <div style={{
          position: 'fixed', bottom: 96, right: 24, zIndex: 900,
          width: 300, borderRadius: 'var(--radius-xl)',
          background: 'var(--neutral-0)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
          border: '1px solid var(--neutral-100)',
          overflow: 'hidden',
          animation: 'floatPanelIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          {/* Header */}
          <div style={{
            padding: 'var(--space-5) var(--space-6)',
            background: 'linear-gradient(135deg, var(--navy-900), var(--navy-800))',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -10, right: -10, width: 80, height: 80, background: 'radial-gradient(circle, rgba(230,168,23,0.15) 0%, transparent 70%)' }} />
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)',
              fontWeight: 600, color: 'var(--neutral-0)',
              marginBottom: 'var(--space-1)', position: 'relative', zIndex: 1,
            }}>
              Book Appointment
            </div>
            <div style={{
              fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
              color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1,
            }}>
              Choose how you'd like to connect
            </div>
          </div>

          {/* Options */}
          <div style={{ padding: 'var(--space-4)' }}>
            {options.map((opt) => (
              <a
                key={opt.label}
                href={opt.internal ? undefined : opt.href}
                target={opt.external ? '_blank' : undefined}
                rel={opt.external ? 'noopener noreferrer' : undefined}
                onClick={() => {
                  setExpanded(false);
                  if (opt.internal) navigate(opt.href);
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  background: opt.bg,
                  color: opt.color,
                  marginBottom: 'var(--space-2)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <opt.icon size={17} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                    {opt.label}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', opacity: 0.7, fontFamily: 'var(--font-accent)' }}>
                    {opt.sublabel}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div style={{
            padding: 'var(--space-3) var(--space-6)',
            background: 'var(--neutral-50)',
            borderTop: '1px solid var(--neutral-100)',
          }}>
            <p style={{ fontSize: 10, fontFamily: 'var(--font-accent)', color: 'var(--neutral-400)', textAlign: 'center' }}>
              Same-day appointments available • 24/7 Emergency
            </p>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Book appointment"
        style={{
          position: 'fixed', bottom: 24, right: 24,
          zIndex: 900, width: 56, height: 56,
          borderRadius: 'var(--radius-full)',
          background: expanded
            ? 'var(--navy-800)'
            : 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
          color: expanded ? 'var(--neutral-0)' : 'var(--navy-950)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: expanded ? '0 4px 20px rgba(15,30,61,0.3)' : '0 4px 20px rgba(230,168,23,0.45)',
          animation: pulse && !expanded ? 'pulse-glow 2.5s ease-in-out infinite' : 'none',
          transition: 'all var(--transition-spring)',
          border: 'none',
          transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
      >
        {expanded ? <X size={22} /> : <CalendarCheck size={24} />}
      </button>

      <style>{`
        @keyframes floatPanelIn {
          from { opacity: 0; transform: scale(0.85) translateY(16px); transform-origin: bottom right; }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (max-width: 768px) {
          button[aria-label="Book appointment"] { bottom: 80px !important; right: 16px !important; }
          div[style*="bottom: 96px"] { bottom: 148px !important; right: 16px !important; }
        }
      `}</style>
    </>
  );
}
