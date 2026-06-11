import { CalendarCheck, X, Phone, MessageCircle, MapPin, User, Mail, FileText, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CLINIC } from '../data/clinic';

interface WhatsAppFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function FloatingAppointment() {
  const [expanded, setExpanded] = useState(false);
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [formData, setFormData] = useState<WhatsAppFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');

  const services = [
    'ENT Services',
    'General Surgery',
    'Laparoscopic Surgery',
    'Gynecology',
    'Physiotherapy',
    'Diet Consultation',
    'Other',
  ];

  // Stop pulse after first open
  useEffect(() => {
    if (expanded) setPulse(false);
  }, [expanded]);

  // Close on route change
  useEffect(() => {
    setExpanded(false);
    setShowWhatsAppForm(false);
  }, [location.pathname]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I would like to book an appointment at SR3 ENT & Surgical Centre.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Service:* ${formData.service || 'Not specified'}
*Message:* ${formData.message || 'No additional message'}

Please confirm the appointment details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
    setShowWhatsAppForm(false);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

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
      onClick: () => { setExpanded(false); setShowWhatsAppForm(true); },
      bg: 'linear-gradient(135deg, #25d366, #128c7e)',
      color: '#fff',
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

      {/* WhatsApp Form Modal */}
      {showWhatsAppForm && (
        <div
          onClick={() => setShowWhatsAppForm(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 950,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'var(--space-4)',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: 420,
              borderRadius: 'var(--radius-xl)',
              background: 'var(--neutral-0)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
              overflow: 'hidden',
              animation: 'scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: 'var(--space-5) var(--space-6)',
              background: 'linear-gradient(135deg, #25d366, #128c7e)',
              position: 'relative',
            }}>
              <button
                onClick={() => setShowWhatsAppForm(false)}
                style={{
                  position: 'absolute', top: 12, right: 12,
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <X size={16} />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <MessageCircle size={22} style={{ color: '#fff' }} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)',
                    fontWeight: 600, color: '#fff', marginBottom: 2,
                  }}>
                    Book via WhatsApp
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'rgba(255,255,255,0.8)' }}>
                    Fill your details and we'll get back to you
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} style={{ padding: 'var(--space-6)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }} />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      style={{
                        width: '100%', padding: '12px 12px 12px 40px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--neutral-200)',
                        fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                        outline: 'none', transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#25d366'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Phone Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }} />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      style={{
                        width: '100%', padding: '12px 12px 12px 40px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--neutral-200)',
                        fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                        outline: 'none', transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#25d366'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Email (Optional)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      style={{
                        width: '100%', padding: '12px 12px 12px 40px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--neutral-200)',
                        fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                        outline: 'none', transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#25d366'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Service Required *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FileText size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }} />
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%', padding: '12px 12px 12px 40px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--neutral-200)',
                        fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                        outline: 'none', transition: 'border-color var(--transition-fast)',
                        background: 'var(--neutral-0)',
                        appearance: 'none',
                        cursor: 'pointer',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#25d366'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any specific concerns or preferred timing?"
                    rows={3}
                    style={{
                      width: '100%', padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--neutral-200)',
                      fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                      outline: 'none', transition: 'border-color var(--transition-fast)',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#25d366'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%', marginTop: 'var(--space-5)',
                  padding: '14px var(--space-6)',
                  borderRadius: 'var(--radius-full)',
                  background: 'linear-gradient(135deg, #25d366, #128c7e)',
                  color: '#fff',
                  fontSize: 'var(--text-base)', fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.45)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.35)'; }}
              >
                <Send size={18} /> Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
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
                  if (opt.onClick) opt.onClick();
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
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 768px) {
          button[aria-label="Book appointment"] { bottom: 80px !important; right: 16px !important; }
          div[style*="bottom: 96px"] { bottom: 148px !important; right: 16px !important; }
        }
      `}</style>
    </>
  );
}
