export default function SkipLink() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'fixed',
          top: -100,
          left: 16,
          zIndex: 9999,
          padding: '12px 24px',
          background: 'var(--gold-500)',
          color: 'var(--navy-950)',
          fontFamily: 'var(--font-accent)',
          fontWeight: 700,
          fontSize: 'var(--text-sm)',
          borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
          boxShadow: 'var(--shadow-lg)',
          transition: 'top 0.2s ease',
          outline: 'none',
        }}
        onFocus={e => { e.currentTarget.style.top = '16px'; }}
        onBlur={e => { e.currentTarget.style.top = '-100px'; }}
      >
        Skip to main content
      </a>
      <style>{`
        .skip-link:focus {
          top: 16px !important;
        }
      `}</style>
    </>
  );
}
