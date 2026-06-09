import { ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICES, CLINIC } from '../data/clinic';
import { Ear, ScissorsLineDashed, Monitor, Baby, Activity, Apple } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  ent: Ear,
  'general-surgery': ScissorsLineDashed,
  'laparoscopic-surgery': Monitor,
  gynecology: Baby,
  physiotherapy: Activity,
  'diet-consultation': Apple,
};

export default function ServicesPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);

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
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>Our Specialities</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Comprehensive Medical Services
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
            Six specialized departments delivering expert care across the full spectrum of your health needs.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            {SERVICES.map((svc, i) => {
              const ServiceIcon = iconMap[svc.id] || Ear;
              return (
                <ServiceSection key={svc.id} svc={svc} Icon={ServiceIcon} index={i} />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-50)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 'var(--space-4)' }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
            Our care coordinators will guide you to the right specialist. Just give us a call.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <a href="/appointment" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-8)', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
              color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
              fontFamily: 'var(--font-accent)', boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
              transition: 'all var(--transition-base)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              Book Appointment <ArrowRight size={18} />
            </a>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '14px var(--space-6)', borderRadius: 'var(--radius-full)',
              background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
              color: 'var(--navy-800)', fontSize: 'var(--text-base)', fontWeight: 500,
              fontFamily: 'var(--font-accent)',
            }}>
              Call: {CLINIC.phone1}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceSection({ svc, Icon, index }: {
  svc: typeof SERVICES[number];
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} id={svc.id} style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      direction: isEven ? 'ltr' : 'rtl', gap: 'var(--space-8)',
      opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
      transition: 'all 0.7s ease-out',
    }} className="service-detail-card">
      {/* Info side */}
      <div style={{ direction: 'ltr' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 'var(--radius-lg)',
            background: svc.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Icon size={24} style={{ color: svc.color }} />
          </div>
          <div>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>{svc.title}</h3>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-400)', fontFamily: 'var(--font-accent)' }}>{svc.subtitle}</span>
          </div>
        </div>

        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
          {svc.desc}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
          {svc.features.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
              <CheckCircle size={14} style={{ color: svc.color, flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', fontFamily: 'var(--font-accent)' }}>{f}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--neutral-100)' }}>
          <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-400)' }}>Lead Doctor:</span>
          <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-800)' }}>{svc.doctor}</span>
          <a href="/appointment" style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
            fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
            color: svc.color, marginLeft: 'auto', transition: 'gap var(--transition-fast)',
          }}
          onMouseEnter={e => { e.currentTarget.style.gap = 'var(--space-2)'; }}
          onMouseLeave={e => { e.currentTarget.style.gap = 'var(--space-1)'; }}>
            Book Consultation <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Visual side */}
      <div style={{ direction: 'ltr' }}>
        <div style={{
          height: '100%', minHeight: 320, borderRadius: 'var(--radius-lg)',
          background: `linear-gradient(135deg, ${svc.bg}, var(--neutral-100))`,
          border: '1px solid var(--neutral-100)', position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ opacity: 0.1 }}>
            <Icon size={120} style={{ color: svc.color }} />
          </div>
          {/* Accent corner */}
          <div style={{
            position: 'absolute', top: 0, right: 0, width: 80, height: 80,
            background: `linear-gradient(135deg, transparent 50%, ${svc.bg} 50%)`,
          }} />
          <div style={{
            position: 'absolute', bottom: 'var(--space-5)', left: 'var(--space-5)',
            padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-full)',
            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600,
            color: svc.color,
          }}>
            {svc.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
