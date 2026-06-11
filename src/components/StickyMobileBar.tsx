import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLINIC } from '../data/clinic';

interface WhatsAppFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function StickyMobileBar() {
  const navigate = useNavigate();
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [formData, setFormData] = useState<WhatsAppFormData>({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
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

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I would like to book an appointment at SR3 ENT & Surgical Centre.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service || 'Not specified'}
*Message:* ${formData.message || 'No additional message'}

Please confirm the appointment details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
    setShowWhatsAppForm(false);
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      {/* WhatsApp Form Modal */}
      {showWhatsAppForm && (
        <div
          onClick={() => setShowWhatsAppForm(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 950,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: 420,
              borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
              background: 'var(--neutral-0)',
              boxShadow: '0 -8px 40px rgba(0,0,0,0.2)',
              overflow: 'hidden',
              animation: 'slideUp 0.3s ease-out',
            }}
          >
            {/* Header */}
            <div style={{
              padding: 'var(--space-4) var(--space-5)',
              background: 'linear-gradient(135deg, #25d366, #128c7e)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <MessageCircle size={20} style={{ color: '#fff' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-base)', fontWeight: 600, color: '#fff' }}>
                  Book via WhatsApp
                </span>
              </div>
              <button onClick={() => setShowWhatsAppForm(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} style={{ padding: 'var(--space-5)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    style={{
                      width: '100%', padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--neutral-200)',
                      fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    style={{
                      width: '100%', padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--neutral-200)',
                      fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Service */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Service Required *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%', padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--neutral-200)',
                      fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                      outline: 'none', background: 'var(--neutral-0)',
                      appearance: 'none', cursor: 'pointer',
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-1)' }}>
                    Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any specific concerns?"
                    rows={2}
                    style={{
                      width: '100%', padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--neutral-200)',
                      fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                      outline: 'none', resize: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%', marginTop: 'var(--space-4)',
                  padding: '14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'linear-gradient(135deg, #25d366, #128c7e)',
                  color: '#fff',
                  fontSize: 'var(--text-base)', fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                }}
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="sticky-mobile-bar" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        zIndex: 800,
        background: 'var(--neutral-0)',
        borderTop: '1px solid var(--neutral-100)',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.1)',
        display: 'none',
        padding: 'var(--space-2) var(--space-4) calc(var(--space-2) + env(safe-area-inset-bottom))',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-2)' }}>
          {/* Call */}
          <a
            href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--navy-50)',
              color: 'var(--navy-800)',
              textDecoration: 'none',
              transition: 'all var(--transition-fast)',
            }}
          >
            <Phone size={20} style={{ color: 'var(--navy-700)' }} />
            <span style={{ fontSize: 11, fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)' }}>
              Call
            </span>
          </a>

          {/* Book — Primary */}
          <button
            onClick={() => navigate('/appointment')}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)',
              border: 'none', cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              boxShadow: '0 2px 12px rgba(230,168,23,0.35)',
            }}
          >
            <CalendarCheck size={20} />
            <span style={{ fontSize: 11, fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
              Book Now
            </span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => setShowWhatsAppForm(true)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-md)',
              background: '#dcfce7',
              border: 'none', cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
          >
            <MessageCircle size={20} style={{ color: '#16a34a' }} />
            <span style={{ fontSize: 11, fontFamily: 'var(--font-accent)', fontWeight: 600, color: '#15803d' }}>
              WhatsApp
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .sticky-mobile-bar { display: block !important; }
          body { padding-bottom: 68px; }
        }
      `}</style>
    </>
  );
}
