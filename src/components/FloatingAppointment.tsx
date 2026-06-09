import { CalendarCheck, X } from 'lucide-react';
import { useState } from 'react';
import { CLINIC } from '../data/clinic';

export default function FloatingAppointment() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 900,
          width: expanded ? 48 : 56,
          height: expanded ? 48 : 56,
          borderRadius: 'var(--radius-full)',
          background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
          color: 'var(--navy-950)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(230, 168, 23, 0.4)',
          animation: 'pulse-glow 2.5s ease-in-out infinite',
          transition: 'all var(--transition-base)',
          border: 'none',
        }}
        aria-label="Book appointment"
      >
        {expanded ? <X size={22} /> : <CalendarCheck size={24} />}
      </button>

      {/* Expanded panel */}
      {expanded && (
        <div style={{
          position: 'fixed',
          bottom: 88,
          right: 28,
          zIndex: 900,
          width: 300,
          borderRadius: 'var(--radius-lg)',
          background: 'var(--neutral-0)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--neutral-100)',
          overflow: 'hidden',
          animation: 'fadeInUp 0.25s ease-out',
        }}>
          <div style={{
            padding: 'var(--space-5) var(--space-6)',
            background: 'linear-gradient(135deg, var(--navy-800), var(--navy-900))',
            color: 'var(--neutral-0)',
          }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-lg)',
              fontWeight: 600,
              marginBottom: 'var(--space-1)',
            }}>
              Book Appointment
            </div>
            <div style={{
              fontSize: 'var(--text-xs)',
              fontFamily: 'var(--font-accent)',
              color: 'rgba(255,255,255,0.6)',
            }}>
              Quick & easy scheduling
            </div>
          </div>

          <div style={{ padding: 'var(--space-5) var(--space-6)' }}>
            {[
              { label: 'Call Us', sublabel: 'Speak directly', href: `tel:${CLINIC.phone1.replace(/\s+/g, '')}`, primary: true },
              { label: 'WhatsApp', sublabel: 'Chat & book', href: `https://wa.me/${CLINIC.phone1.replace(/[^\d]/g, '')}`, primary: false },
              { label: 'Online Form', sublabel: 'Fill details', href: '#appointment', primary: false },
            ].map((option) => (
              <a
                key={option.label}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => setExpanded(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  background: option.primary ? 'linear-gradient(135deg, var(--gold-500), var(--gold-600))' : 'var(--neutral-50)',
                  color: option.primary ? 'var(--navy-950)' : 'var(--navy-800)',
                  marginBottom: 'var(--space-2)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                  border: option.primary ? 'none' : '1px solid var(--neutral-100)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                <div>
                  <div style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                  }}>
                    {option.label}
                  </div>
                  <div style={{
                    fontSize: 'var(--text-xs)',
                    opacity: 0.65,
                    fontFamily: 'var(--font-accent)',
                  }}>
                    {option.sublabel}
                  </div>
                </div>
                <CalendarCheck size={16} style={{ opacity: 0.6 }} />
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          button[aria-label="Book appointment"] {
            bottom: 20px !important;
            right: 20px !important;
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </>
  );
}
