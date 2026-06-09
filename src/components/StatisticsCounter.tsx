import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Users, Award, Star, Clock, HeartPulse, Stethoscope } from 'lucide-react';

const stats = [
  { icon: Users, value: 50000, suffix: '+', label: 'Patients Treated', color: 'var(--gold-500)', bg: 'rgba(230,168,23,0.1)' },
  { icon: Award, value: 15, suffix: '+', label: 'Years of Excellence', color: 'var(--teal-500)', bg: 'rgba(8,196,171,0.1)' },
  { icon: Star, value: 4.9, suffix: '', label: 'Patient Rating', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', decimals: 1 },
  { icon: HeartPulse, value: 98, suffix: '%', label: 'Success Rate', color: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
  { icon: Stethoscope, value: 5, suffix: '+', label: 'Expert Specialists', color: 'var(--navy-400)', bg: 'rgba(70,99,163,0.1)' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Emergency Care', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
];

function AnimatedNumber({ target, suffix, decimals = 0, started }: {
  target: number; suffix: string; decimals?: number; started: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * target);
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [started, target]);

  return (
    <span>
      {decimals > 0
        ? current.toFixed(decimals)
        : Math.round(current).toLocaleString()
      }{suffix}
    </span>
  );
}

export default function StatisticsCounter() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} style={{
      padding: 'var(--space-20) 0',
      background: 'linear-gradient(160deg, var(--navy-950) 0%, var(--navy-900) 50%, var(--navy-800) 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background accents */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-5%', width: '40%', height: '140%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.06) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '40%', height: '140%', background: 'radial-gradient(ellipse, rgba(8,196,171,0.05) 0%, transparent 65%)' }} />
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: 'var(--space-12)',
          opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease-out',
        }}>
          <span style={{
            display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
            fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold-400)', marginBottom: 'var(--space-3)',
          }}>
            Our Impact
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700,
            color: 'var(--neutral-0)', marginBottom: 'var(--space-3)',
          }}>
            Numbers That Speak for Themselves
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto' }}>
            A decade and a half of clinical excellence, measured in lives improved.
          </p>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-5)',
        }} className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              padding: 'var(--space-8) var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              textAlign: 'center',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
              transition: `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 80}ms`,
              cursor: 'default',
              position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}>
              {/* Glow */}
              <div style={{
                position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
                width: 80, height: 80,
                background: `radial-gradient(circle, ${stat.color}30 0%, transparent 70%)`,
                filter: 'blur(16px)',
              }} />

              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 'var(--radius-md)',
                background: stat.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto var(--space-4)',
                border: `1px solid ${stat.color}30`,
              }}>
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>

              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700,
                color: stat.color,
                lineHeight: 1,
                marginBottom: 'var(--space-2)',
              }}>
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  started={isInView}
                />
              </div>

              {/* Label */}
              <div style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.02em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: var(--space-3) !important; } }
      `}</style>
    </section>
  );
}
