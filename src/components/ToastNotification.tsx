import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

interface ToastContextValue {
  showToast: (type: ToastType, title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onRemove(toast.id), 350);
    }, 4000);
    return () => clearTimeout(t);
  }, [toast.id, onRemove]);

  const icons = {
    success: <CheckCircle size={20} style={{ color: 'var(--success-500)', flexShrink: 0 }} />,
    error: <XCircle size={20} style={{ color: 'var(--error-500)', flexShrink: 0 }} />,
    info: <AlertCircle size={20} style={{ color: 'var(--navy-500)', flexShrink: 0 }} />,
  };

  const borders = {
    success: 'var(--success-500)',
    error: 'var(--error-500)',
    info: 'var(--navy-400)',
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--neutral-0)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid var(--neutral-100)',
      borderLeft: `4px solid ${borders[toast.type]}`,
      minWidth: 300, maxWidth: 380,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0) scale(1)' : 'translateX(20px) scale(0.95)',
      transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
      pointerEvents: 'all',
    }}>
      {icons[toast.type]}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-accent)', fontSize: 'var(--text-sm)',
          fontWeight: 600, color: 'var(--navy-900)', marginBottom: toast.message ? 'var(--space-1)' : 0,
        }}>
          {toast.title}
        </div>
        {toast.message && (
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', fontFamily: 'var(--font-accent)', lineHeight: 1.5 }}>
            {toast.message}
          </div>
        )}
      </div>
      <button onClick={() => { setVisible(false); setTimeout(() => onRemove(toast.id), 350); }} style={{
        background: 'none', border: 'none', padding: 2, cursor: 'pointer',
        color: 'var(--neutral-400)', flexShrink: 0,
        transition: 'color var(--transition-fast)',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--neutral-700)'; }}
      onMouseLeave={e => { e.currentTarget.style.color = 'var(--neutral-400)'; }}>
        <X size={16} />
      </button>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: ToastType, title: string, message?: string) => {
    const id = Date.now().toString() + Math.random().toString(36).slice(2);
    setToasts(prev => [...prev.slice(-3), { id, type, title, message }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{
        position: 'fixed', bottom: 24, right: 24,
        zIndex: 9999, display: 'flex', flexDirection: 'column',
        gap: 'var(--space-3)', pointerEvents: 'none',
        alignItems: 'flex-end',
      }}>
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
