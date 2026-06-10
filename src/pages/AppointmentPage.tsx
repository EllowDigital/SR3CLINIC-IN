import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck, Phone, Clock, Shield,
  CircleCheck as CheckCircle, MessageCircle,
  User, Stethoscope, Calendar, ChevronRight, ChevronLeft,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useSEO, breadcrumbSchema } from '../hooks/useSEO';
import { CLINIC, SERVICES, DOCTORS } from '../data/clinic';
import { useToast } from '../components/ToastNotification';

type FormData = {
  name: string; phone: string; email: string;
  service: string; doctor: string; date: string;
  time: string; message: string;
};

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
];

const STEPS = [
  { id: 1, label: 'Your Details', icon: User },
  { id: 2, label: 'Choose Service', icon: Stethoscope },
  { id: 3, label: 'Pick a Time', icon: Calendar },
];

export default function AppointmentPage() {
  useSEO({
    title: 'Book Appointment — SR³ ENT & Surgical Centre Lucknow',
    description: 'Book your appointment online at SR³ ENT & Surgical Centre, Lucknow. Same-day consultations available for ENT, surgery, gynecology, physiotherapy & diet. Call +91 9369643922 or book online in 2 minutes.',
    keywords: 'book appointment ENT Lucknow, ENT clinic appointment Lucknow, online appointment SR3 ENT, same day ENT consultation Lucknow',
    canonical: '/appointment',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Book Appointment', url: '/appointment' },
        ]),
        {
          '@type': 'MedicalWebPage',
          'name': 'Book Appointment at SR³ ENT & Surgical Centre Lucknow',
          'description': 'Book an appointment with our ENT, surgery, gynecology, physiotherapy, or diet specialists in Lucknow. Online booking, WhatsApp, or phone.',
          'url': 'https://sr3entandsurgicalcentre.com/appointment',
        },
      ],
    },
  });

  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: formRef, isInView: formInView } = useInView(0.05);
  const { showToast } = useToast();

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '',
    service: '', doctor: '', date: '', time: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => {
    if (step === 1 && (!form.name.trim() || !form.phone.trim())) {
      showToast('error', 'Required fields missing', 'Please enter your name and phone number.');
      return;
    }
    if (step === 2 && !form.service) {
      showToast('error', 'Select a service', 'Please choose the service you need.');
      return;
    }
    setStep(s => Math.min(s + 1, 3));
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date) {
      showToast('error', 'Date required', 'Please select your preferred appointment date.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('success', 'Appointment Requested!', 'We\'ll call you within 30 minutes to confirm.');
    }, 1800);
  };

  const waNumber = CLINIC.phone1.replace(/[^\d]/g, '');
  const waMsg = `Hello, I would like to book an appointment at SR³ ENT & Surgical Centre.${form.service ? ` Service: ${form.service}.` : ''}${form.name ? ` My name is ${form.name}.` : ''}`;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} style={{
        padding: 'var(--space-16) 0 var(--space-12)',
        background: 'linear-gradient(160deg, #060c18 0%, #0f1e3d 40%, #1a3362 80%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '120%', background: 'radial-gradient(ellipse, rgba(230,168,23,0.06) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '30%', height: '100%', background: 'radial-gradient(ellipse, rgba(8,196,171,0.04) 0%, transparent 60%)' }} />
        </div>
        <div className="container" style={{
          position: 'relative', zIndex: 2,
          opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease-out',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
            fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold-400)', marginBottom: 'var(--space-3)',
          }}>
            <CalendarCheck size={14} /> Book Your Visit
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--neutral-0)', marginBottom: 'var(--space-4)' }}>
            Book an Appointment
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.5)', maxWidth: 560, marginBottom: 'var(--space-8)' }}>
            Schedule your consultation in minutes. Same-day appointments available for urgent cases.
          </p>

          {/* Quick action buttons */}
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <a href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '10px var(--space-5)', borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'var(--neutral-0)', fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-accent)', fontWeight: 500,
              textDecoration: 'none', transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}>
              <Phone size={15} /> Call: {CLINIC.phone1}
            </a>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello, I would like to book an appointment at SR³ ENT & Surgical Centre.')}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: '10px var(--space-5)', borderRadius: 'var(--radius-full)',
                background: '#25d366', border: 'none',
                color: '#fff', fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-accent)', fontWeight: 500,
                textDecoration: 'none', transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#128c7e'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; }}>
              <MessageCircle size={15} /> WhatsApp Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section ref={formRef} style={{ padding: 'var(--space-16) 0', background: 'var(--neutral-0)' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'var(--space-8)', alignItems: 'start' }} className="appt-grid">

            {/* Form area */}
            <div style={{
              opacity: formInView ? 1 : 0, transform: formInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
            }}>
              {submitted ? (
                <SuccessCard form={form} />
              ) : (
                <div style={{
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--neutral-0)',
                  border: '1px solid var(--neutral-100)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden',
                }}>
                  {/* Step indicator */}
                  <div style={{
                    padding: 'var(--space-5) var(--space-8)',
                    background: 'linear-gradient(135deg, var(--navy-950), var(--navy-900))',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {STEPS.map((s, i) => (
                        <div key={s.id} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 'unset' }}>
                          <div style={{
                            display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                            flexShrink: 0,
                          }}>
                            <div style={{
                              width: 32, height: 32, borderRadius: 'var(--radius-full)',
                              background: step > s.id ? 'var(--teal-500)' : step === s.id ? 'var(--gold-500)' : 'rgba(255,255,255,0.1)',
                              border: `2px solid ${step >= s.id ? 'transparent' : 'rgba(255,255,255,0.15)'}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              transition: 'all var(--transition-base)',
                            }}>
                              {step > s.id
                                ? <CheckCircle size={16} style={{ color: '#fff' }} />
                                : <s.icon size={15} style={{ color: step === s.id ? 'var(--navy-950)' : 'rgba(255,255,255,0.4)' }} />
                              }
                            </div>
                            <span style={{
                              fontFamily: 'var(--font-accent)', fontSize: 'var(--text-xs)',
                              fontWeight: step === s.id ? 600 : 400,
                              color: step === s.id ? 'var(--gold-400)' : step > s.id ? 'var(--teal-300)' : 'rgba(255,255,255,0.35)',
                              transition: 'color var(--transition-base)',
                              display: 'var(--step-label-display)',
                            }} className="step-label">
                              {s.label}
                            </span>
                          </div>
                          {i < STEPS.length - 1 && (
                            <div style={{ flex: 1, height: 1, background: step > s.id ? 'var(--teal-600)' : 'rgba(255,255,255,0.1)', margin: '0 var(--space-3)', transition: 'background var(--transition-slow)' }} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form body */}
                  <form onSubmit={handleSubmit} style={{ padding: 'var(--space-8)' }}>

                    {/* STEP 1: Personal details */}
                    {step === 1 && (
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)' }}>
                          Your Details
                        </h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
                          Tell us a little about yourself so we can reach you.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }} className="form-grid">
                          <FormField label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                          <FormField label="Phone Number *" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" type="tel" required />
                          <div style={{ gridColumn: '1 / -1' }}>
                            <FormField label="Email Address" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Service & Doctor */}
                    {step === 2 && (
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)' }}>
                          Choose Your Service
                        </h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
                          Select the department you'd like to visit.
                        </p>

                        {/* Service cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }} className="svc-grid">
                          {SERVICES.map(s => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => setForm(f => ({ ...f, service: s.title }))}
                              style={{
                                padding: 'var(--space-4)',
                                borderRadius: 'var(--radius-md)',
                                border: `2px solid ${form.service === s.title ? 'var(--gold-400)' : 'var(--neutral-200)'}`,
                                background: form.service === s.title ? 'var(--gold-50)' : 'var(--neutral-0)',
                                textAlign: 'left', cursor: 'pointer',
                                transition: 'all var(--transition-fast)',
                              }}
                              onMouseEnter={e => { if (form.service !== s.title) { e.currentTarget.style.borderColor = 'var(--neutral-300)'; e.currentTarget.style.background = 'var(--neutral-50)'; } }}
                              onMouseLeave={e => { if (form.service !== s.title) { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.background = 'var(--neutral-0)'; } }}
                            >
                              <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-sm)', fontWeight: 600, color: form.service === s.title ? 'var(--gold-700)' : 'var(--navy-800)', marginBottom: 2 }}>
                                {s.title}
                              </div>
                              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', fontFamily: 'var(--font-accent)' }}>
                                {s.doctor}
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Doctor select */}
                        <FormSelect label="Preferred Doctor (optional)" name="doctor" value={form.doctor} onChange={handleChange}>
                          <option value="">Any available specialist</option>
                          {DOCTORS.map(d => (
                            <option key={d.name} value={d.name}>{d.name} — {d.speciality}</option>
                          ))}
                        </FormSelect>

                        {/* Message */}
                        <div style={{ marginTop: 'var(--space-4)' }}>
                          <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>
                            Describe your concern (optional)
                          </label>
                          <textarea
                            name="message" value={form.message} onChange={handleChange}
                            placeholder="Briefly describe your symptoms or any special requests..."
                            rows={3}
                            style={{
                              width: '100%', padding: 'var(--space-3) var(--space-4)',
                              borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-200)',
                              fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                              color: 'var(--navy-800)', resize: 'vertical', outline: 'none',
                              transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                              background: 'var(--neutral-0)', boxSizing: 'border-box',
                            }}
                            onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(230,168,23,0.1)'; }}
                            onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }}
                          />
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Date & Time */}
                    {step === 3 && (
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--navy-900)', marginBottom: 'var(--space-2)' }}>
                          Choose Date & Time
                        </h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-6)' }}>
                          Pick your preferred slot and we'll confirm availability.
                        </p>

                        <FormField
                          label="Preferred Date *"
                          name="date" value={form.date} onChange={handleChange}
                          type="date" required
                          min={minDateStr}
                        />

                        <div style={{ marginTop: 'var(--space-5)' }}>
                          <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-3)' }}>
                            Preferred Time
                          </label>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-2)' }} className="time-grid">
                            {TIME_SLOTS.map(slot => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setForm(f => ({ ...f, time: slot }))}
                                style={{
                                  padding: '8px 4px',
                                  borderRadius: 'var(--radius-sm)',
                                  border: `1.5px solid ${form.time === slot ? 'var(--gold-400)' : 'var(--neutral-200)'}`,
                                  background: form.time === slot ? 'var(--gold-50)' : 'var(--neutral-0)',
                                  fontSize: 11, fontFamily: 'var(--font-accent)',
                                  fontWeight: form.time === slot ? 700 : 400,
                                  color: form.time === slot ? 'var(--gold-700)' : 'var(--neutral-600)',
                                  cursor: 'pointer', transition: 'all var(--transition-fast)',
                                }}
                                onMouseEnter={e => { if (form.time !== slot) { e.currentTarget.style.borderColor = 'var(--neutral-300)'; } }}
                                onMouseLeave={e => { if (form.time !== slot) { e.currentTarget.style.borderColor = 'var(--neutral-200)'; } }}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Summary */}
                        {(form.name || form.service || form.date) && (
                          <div style={{
                            marginTop: 'var(--space-6)',
                            padding: 'var(--space-4)',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--navy-50)',
                            border: '1px solid var(--navy-100)',
                          }}>
                            <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-700)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                              Appointment Summary
                            </div>
                            {[
                              { label: 'Patient', value: form.name },
                              { label: 'Service', value: form.service },
                              { label: 'Doctor', value: form.doctor || 'Any available' },
                              { label: 'Date', value: form.date },
                              { label: 'Time', value: form.time || 'Not selected' },
                            ].filter(i => i.value).map(item => (
                              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--navy-100)' }}>
                                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', fontFamily: 'var(--font-accent)' }}>{item.label}</span>
                                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--navy-800)', fontFamily: 'var(--font-accent)' }}>{item.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Nav buttons */}
                    <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)', alignItems: 'center' }}>
                      {step > 1 && (
                        <button type="button" onClick={prevStep} style={{
                          display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                          padding: '12px var(--space-6)', borderRadius: 'var(--radius-full)',
                          background: 'var(--neutral-0)', border: '1px solid var(--neutral-200)',
                          color: 'var(--navy-700)', fontSize: 'var(--text-sm)',
                          fontFamily: 'var(--font-accent)', fontWeight: 500, cursor: 'pointer',
                          transition: 'all var(--transition-fast)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--neutral-400)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; }}>
                          <ChevronLeft size={16} /> Back
                        </button>
                      )}

                      {step < 3 ? (
                        <button type="button" onClick={nextStep} style={{
                          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
                          padding: '13px var(--space-6)', borderRadius: 'var(--radius-full)',
                          background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                          color: 'var(--navy-950)', fontSize: 'var(--text-sm)',
                          fontFamily: 'var(--font-accent)', fontWeight: 700, cursor: 'pointer',
                          boxShadow: '0 4px 20px rgba(230,168,23,0.3)',
                          transition: 'all var(--transition-base)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(230,168,23,0.4)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(230,168,23,0.3)'; }}>
                          Continue <ChevronRight size={16} />
                        </button>
                      ) : (
                        <button type="submit" disabled={loading} style={{
                          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
                          padding: '13px var(--space-6)', borderRadius: 'var(--radius-full)',
                          background: loading ? 'var(--neutral-200)' : 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                          color: loading ? 'var(--neutral-400)' : 'var(--navy-950)',
                          fontSize: 'var(--text-base)', fontFamily: 'var(--font-accent)',
                          fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                          boxShadow: loading ? 'none' : '0 4px 24px rgba(230,168,23,0.35)',
                          transition: 'all var(--transition-base)',
                        }}
                        onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                          {loading ? (
                            <>
                              <span style={{ width: 16, height: 16, border: '2px solid var(--neutral-400)', borderTopColor: 'var(--neutral-600)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
                              Submitting…
                            </>
                          ) : (
                            <><CalendarCheck size={17} /> Confirm Appointment</>
                          )}
                        </button>
                      )}
                    </div>

                    {/* WhatsApp fallback */}
                    <div style={{ textAlign: 'center', marginTop: 'var(--space-4)' }}>
                      <a
                        href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                          fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
                          color: '#16a34a', fontWeight: 500, textDecoration: 'none',
                          transition: 'opacity var(--transition-fast)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                      >
                        <MessageCircle size={15} /> Prefer WhatsApp? Book instantly
                      </a>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <Sidebar formInView={formInView} />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .appt-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
          .svc-grid { grid-template-columns: 1fr !important; }
          .time-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .time-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .step-label { display: inline !important; }
        @media (max-width: 400px) { .step-label { display: none !important; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

function SuccessCard({ form }: { form: FormData }) {
  return (
    <div style={{
      padding: 'var(--space-12)', borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
      border: '1px solid #bbf7d0', textAlign: 'center',
      animation: 'fadeInUp 0.5s ease-out',
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto var(--space-4)',
        boxShadow: '0 4px 24px rgba(34,197,94,0.3)',
      }}>
        <CheckCircle size={36} style={{ color: '#fff' }} />
      </div>
      <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: '#15803d', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-heading)' }}>
        Appointment Requested!
      </h3>
      <p style={{ fontSize: 'var(--text-base)', color: '#166534', marginBottom: 'var(--space-6)', maxWidth: 400, margin: '0 auto var(--space-6)' }}>
        Thank you, <strong>{form.name}</strong>! Our care coordinator will call you at <strong>{form.phone}</strong> within 30 minutes to confirm your {form.service ? <strong>{form.service}</strong> : 'appointment'} appointment.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'center' }}>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
          padding: '11px var(--space-6)', borderRadius: 'var(--radius-full)',
          background: 'var(--navy-800)', color: 'var(--neutral-0)',
          fontSize: 'var(--text-sm)', fontWeight: 600, fontFamily: 'var(--font-accent)',
          textDecoration: 'none', transition: 'all var(--transition-fast)',
        }}>
          Back to Home
        </Link>
        <a
          href={`tel:${CLINIC.phone1.replace(/\s+/g, '')}`}
          style={{
            fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)',
            color: '#15803d', fontWeight: 500, textDecoration: 'none',
          }}
        >
          Or call us directly: {CLINIC.phone1}
        </a>
      </div>
    </div>
  );
}

function Sidebar({ formInView }: { formInView: boolean }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      opacity: formInView ? 1 : 0, transform: formInView ? 'translateX(0)' : 'translateX(20px)',
      transition: 'all 0.6s ease-out 0.2s',
    }}>
      {/* Branding */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
        padding: 'var(--space-4)', borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-50)', border: '1px solid var(--navy-100)',
      }}>
        <img src="/sr3clinic.jpeg" alt="SR3 Logo" style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--navy-900)' }}>SR³ ENT & Surgical</div>
          <div style={{ fontFamily: 'var(--font-accent)', fontSize: 'var(--text-xs)', color: 'var(--gold-600)', fontWeight: 500, letterSpacing: '0.1em' }}>CARE & CURE</div>
        </div>
      </div>

      {/* Quick Call */}
      <div style={{
        padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(135deg, var(--navy-900), var(--navy-800))',
      }}>
        <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginBottom: 'var(--space-3)' }}>
          Prefer to call?
        </div>
        {[CLINIC.phone1, CLINIC.phone2].map(ph => (
          <a key={ph} href={`tel:${ph.replace(/\s+/g, '')}`} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
            fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--gold-400)',
            fontFamily: 'var(--font-accent)', marginBottom: 'var(--space-2)',
            textDecoration: 'none', transition: 'opacity var(--transition-fast)',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.75'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}>
            <Phone size={16} /> {ph}
          </a>
        ))}
        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${CLINIC.phone1.replace(/[^\d]/g, '')}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
            marginTop: 'var(--space-3)',
            padding: '8px var(--space-4)', borderRadius: 'var(--radius-full)',
            background: '#25d366', color: '#fff',
            fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600,
            textDecoration: 'none', transition: 'all var(--transition-fast)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#128c7e'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; }}
        >
          <MessageCircle size={15} /> WhatsApp Us
        </a>
      </div>

      {/* Hours */}
      <div style={{ padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)', background: 'var(--neutral-0)', border: '1px solid var(--neutral-100)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
          <Clock size={17} style={{ color: 'var(--navy-700)' }} />
          <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--navy-900)' }}>Working Hours</span>
        </div>
        {[
          { label: 'Mon – Sat', value: '9:00 AM – 8:00 PM' },
          { label: 'Sunday', value: '10:00 AM – 2:00 PM' },
          { label: 'Emergency', value: '24/7 Available' },
        ].map(h => (
          <div key={h.label} style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--neutral-50)' }}>
            <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-500)' }}>{h.label}</span>
            <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 600, color: h.label === 'Emergency' ? '#dc2626' : 'var(--navy-800)' }}>{h.value}</span>
          </div>
        ))}
      </div>

      {/* Trust */}
      <div style={{ padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)', background: 'var(--neutral-50)', border: '1px solid var(--neutral-100)' }}>
        {[
          { text: 'Same-day appointments available' },
          { text: 'All major insurance accepted' },
          { text: 'Your information is confidential' },
          { text: 'No referral needed to book' },
        ].map(t => (
          <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2) 0' }}>
            <Shield size={13} style={{ color: 'var(--teal-600)', flexShrink: 0 }} />
            <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-600)' }}>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormField({ label, name, value, onChange, placeholder, type = 'text', required = false, min }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; type?: string; required?: boolean; min?: string;
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>
        {label}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder} required={required} min={min}
        style={{
          width: '100%', padding: '11px var(--space-4)', borderRadius: 'var(--radius-md)',
          border: '1px solid var(--neutral-200)', fontSize: 'var(--text-sm)',
          fontFamily: 'var(--font-accent)', color: 'var(--navy-800)', outline: 'none',
          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
          background: 'var(--neutral-0)', boxSizing: 'border-box',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(230,168,23,0.1)'; }}
        onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }}
      />
    </div>
  );
}

function FormSelect({ label, name, value, onChange, required = false, children }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean; children: React.ReactNode;
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', fontWeight: 500, color: 'var(--navy-800)', marginBottom: 'var(--space-2)' }}>
        {label}
      </label>
      <select
        name={name} value={value} onChange={onChange} required={required}
        style={{
          width: '100%', padding: '11px var(--space-4)', borderRadius: 'var(--radius-md)',
          border: '1px solid var(--neutral-200)', fontSize: 'var(--text-sm)',
          fontFamily: 'var(--font-accent)',
          color: value ? 'var(--navy-800)' : 'var(--neutral-400)',
          outline: 'none', background: 'var(--neutral-0)',
          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
          boxSizing: 'border-box',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(230,168,23,0.1)'; }}
        onBlur={e => { e.currentTarget.style.borderColor = 'var(--neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        {children}
      </select>
    </div>
  );
}
