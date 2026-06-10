import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CLINIC } from '../data/clinic';

export default function StickyMobileBar() {
  const navigate = useNavigate();
  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');

  return (
    <>
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
          <a
            href={`https://wa.me/${waNumber}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20SR%C2%B3%20ENT%20%26%20Surgical%20Centre.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-md)',
              background: '#dcfce7',
              color: '#15803d',
              textDecoration: 'none',
              transition: 'all var(--transition-fast)',
            }}
          >
            <MessageCircle size={20} style={{ color: '#16a34a' }} />
            <span style={{ fontSize: 11, fontFamily: 'var(--font-accent)', fontWeight: 600, color: '#15803d' }}>
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sticky-mobile-bar { display: block !important; }
          /* Push content up so it's not hidden behind the bar */
          body { padding-bottom: 68px; }
        }
      `}</style>
    </>
  );
}
