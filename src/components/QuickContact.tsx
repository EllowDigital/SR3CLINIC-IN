import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contacts = [
  {
    icon: Phone,
    label: 'Call Now',
    value: '+91 99999 99999',
    href: 'tel:+919999999999',
    color: 'var(--teal-600)',
    bg: 'var(--teal-50)',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/919999999999',
    color: '#25D366',
    bg: '#f0fdf4',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lucknow, UP',
    href: '#contact',
    color: 'var(--gold-600)',
    bg: 'var(--gold-50)',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon-Sat 9AM-8PM',
    href: '#contact',
    color: 'var(--navy-600)',
    bg: 'var(--navy-50)',
  },
];

export default function QuickContact() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} style={{
      padding: 'var(--space-16) 0',
      background: 'linear-gradient(180deg, var(--neutral-50) 0%, var(--neutral-0) 100%)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--space-4)',
        }} className="quick-contact-grid">
          {contacts.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                padding: 'var(--space-5) var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)',
                border: '1px solid var(--neutral-100)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: isInView ? `${i * 60}ms` : '0ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--neutral-200)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--neutral-100)';
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 'var(--radius-md)',
                background: item.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <item.icon size={20} style={{ color: item.color }} />
              </div>
              <div>
                <div style={{
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 500,
                  color: 'var(--neutral-400)',
                  marginBottom: 2,
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 600,
                  color: 'var(--navy-900)',
                }}>
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .quick-contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .quick-contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
