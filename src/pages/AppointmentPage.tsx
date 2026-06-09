import { useState } from 'react';
import { CalendarCheck, Phone, Clock, Shield, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CLINIC, SERVICES } from '../data/clinic';

export default function AppointmentPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: formRef, isInView: formInView } = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', doctor: '', date: '', time: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <span style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-3)' }}>
            <CalendarCheck size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Book Your Visit
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Book an Appointment
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
            Schedule your consultation in seconds. Same-day appointments available for urgent cases.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={formRef} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 'var(--space-8)', alignItems: 'start' }} className="appt-grid">

            {/* Form */}
            <div style={{
              opacity: formInView ? 1 : 0, transform: formInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
            }}>
              {submitted ? (
                <div style={{
                  padding: 'var(--space-12)', borderRadius: 'var(--radius-lg)',
                  background: 'var(--teal-50)', border: '1px solid var(--teal-200)',
                  textAlign: 'center',
                }}>
                  <CheckCircle size={48} style={{ color: 'var(--teal-600)', margin: '0 auto var(--space-4)' }} />
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-heading)' }}>
                    Appointment Request Received
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', maxWidth: 400, margin: '0 auto var(--space-6)' }}>
                    Thank you, {form.name}! Our care coordinator will call you within 30 minutes to confirm your {form.service || 'appointment'} appointment.
                  </p>
                  <a href="/" style={{
                    display: 'inline-flex', padding: '10px var(--space-6)', borderRadius: 'var(--radius-full)',
                    background: 'var(--navy-800)', color: 'var(--neutral-0)', fontSize: 'var(--text-sm)',
                    fontWeight: 600, fontFamily: 'var(--font-accent)',
                  }}>
                    Back to Home
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)',
                  background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
                }}>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-6)' }}>
                    Patient Details
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }} className="form-grid">
                    <FormField label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                    <FormField label="Phone Number *" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" type="tel" required />
                    <FormField label="Email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" />
                    <FormSelect label="Service *" name="service" value={form.service} onChange={handleChange} required>
                      <option value="">Select Service</option>
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </FormSelect>
                    <FormSelect label="Preferred Doctor" name="doctor" value={form.doctor} onChange={handleChange}>
                      <option value="">Any Available Doctor</option>
                      <option value="Dr. Samvartika">Dr. Samvartika - ENT</option>
                      <option value="Dr. R.K. Vishwakarma">Dr. R.K. Vishwakarma - Surgery</option>
                      <option value="Dr. Madhu Agrawal">Dr. Madhu Agrawal - Gynecology</option>
                      <option value="Dr. Leena Verma">Dr. Leena Verma - Physiotherapy</option>
                      <option value="Dr. Induja Dixit">Dr. Induja Dixit - Dietitian</option>
                    </FormSelect>
                    <FormField label="Preferred Date *" name="date" value={form.date} onChange={handleChange} type="date" required />
                    <FormField label="Preferred Time" name="time" value={form.time} onChange={handleChange} type="time" />
                  </div>

                  <div style={{ marginTop: 'var(--space-5)' }}>
                    <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>
                      Additional Message
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your symptoms or any special requests..." rows={3} style={{
                      width: '100%', padding: 'var(--space-3) var(--space-4)',
                      borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-200)',
                      fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                      color: 'var(--navy-800)', resize: 'vertical', outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; }} />
                  </div>

                  <button type="submit" style={{
                    width: '100%', marginTop: 'var(--space-6)',
                    padding: '14px', borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                    color: 'var(--navy-950)', fontSize: 'var(--text-base)', fontWeight: 600,
                    fontFamily: 'var(--font-accent)', boxShadow: '0 4px 24px rgba(230,168,23,0.35)',
                    transition: 'all var(--transition-base)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(230,168,23,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,168,23,0.35)'; }}>
                    Request Appointment
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div style={{
              opacity: formInView ? 1 : 0, transform: formInView ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.6s ease-out 0.15s', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
            }}>
              {/* Quick Call */}
              <div style={{
                padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, var(--navy-800), var(--navy-900))',
                color: 'var(--neutral-0)',
              }}>
                <div style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--space-2)' }}>Prefer to call?</div>
                <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                  fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--gold-400)',
                  fontFamily: 'var(--font-accent)', marginBottom: 'var(--space-1)',
                }}>
                  <Phone size={18} /> {CLINIC.phone1}
                </a>
                <a href={`tel:${CLINIC.phone2.replace(/\s+/g, '')}`} style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                  fontSize: 'var(--text-base)', fontWeight: 500, color: 'var(--gold-400)',
                  fontFamily: 'var(--font-accent)',
                }}>
                  <Phone size={16} /> {CLINIC.phone2}
                </a>
              </div>

              {/* Hours */}
              <div style={{
                padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                  <Clock size={18} style={{ color: 'var(--navy-700)' }} />
                  <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-900)' }}>Working Hours</span>
                </div>
                {[
                  { label: 'Mon - Sat', value: '9:00 AM - 8:00 PM' },
                  { label: 'Sunday', value: '10:00 AM - 2:00 PM' },
                  { label: 'Emergency', value: '24/7 Available' },
                ].map(h => (
                  <div key={h.label} style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--neutral-50)' }}>
                    <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)' }}>{h.label}</span>
                    <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: h.label === 'Emergency' ? '#dc2626' : 'var(--navy-800)' }}>{h.value}</span>
                  </div>
                ))}
              </div>

              {/* Trust */}
              <div style={{
                padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-50)', border: '1px solid var(--neutral-100)',
              }}>
                {[
                  { text: 'Same-day appointments available', icon: CalendarCheck },
                  { text: 'All major insurance accepted', icon: Shield },
                  { text: 'Your data is kept confidential', icon: Shield },
                ].map(t => (
                  <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2) 0' }}>
                    <t.icon size={14} style={{ color: 'var(--teal-600)', flexShrink: 0 }} />
                    <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-600)' }}>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .appt-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function FormField({ label, name, value, onChange, placeholder, type = 'text', required = false }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>
        {label}
      </label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} style={{
        width: '100%', padding: '10px var(--space-4)', borderRadius: 'var(--radius-md)',
        border: '1px solid var(--neutral-200)', fontSize: 'var(--text-sm)',
        fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', outline: 'none',
        transition: 'border-color var(--transition-fast)',
      }}
      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; }}
      onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; }} />
    </div>
  );
}

function FormSelect({ label, name, value, onChange, required = false, children }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean; children: React.ReactNode;
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>
        {label}
      </label>
      <select name={name} value={value} onChange={onChange} required={required} style={{
        width: '100%', padding: '10px var(--space-4)', borderRadius: 'var(--radius-md)',
        border: '1px solid var(--neutral-200)', fontSize: 'var(--text-sm)',
        fontFamily: 'var(--font-accent)', color: value ? 'var(--navy-800)' : 'var(--neutral-400)',
        outline: 'none', background: 'var(--neutral-0)',
        transition: 'border-color var(--transition-fast)', appearance: 'auto',
      }}
      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; }}
      onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; }}>
        {children}
      </select>
    </div>
  );
}
