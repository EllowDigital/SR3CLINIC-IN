import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../data/clinic';

const faqs = [
  {
    q: 'How do I book an appointment at SR³ ENT & Surgical Centre?',
    a: `You can book an appointment by calling us at ${CLINIC.phone1}, sending a WhatsApp message, or using the online booking form on this page. Our care coordinator will confirm your appointment within minutes.`,
  },
  {
    q: 'What are the clinic timings?',
    a: 'We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 2:00 PM. Emergency services are available 24/7.',
  },
  {
    q: 'Do you accept health insurance?',
    a: 'Yes, we accept most major health insurance providers including Star Health, ICICI Lombard, HDFC ERGO, New India Assurance, and many more. Our billing team will assist you with cashless claims and paperwork.',
  },
  {
    q: 'What should I bring for my first visit?',
    a: 'Please bring a valid photo ID, your insurance card (if applicable), any previous medical reports or prescriptions, and a list of current medications. Arriving 15 minutes early helps complete registration smoothly.',
  },
  {
    q: 'Is the surgical centre equipped for advanced procedures?',
    a: 'Absolutely. Our operation theatres feature laminar airflow, HEPA filtration, advanced monitoring systems, and are equipped for both open and minimally invasive (laparoscopic/endoscopic) procedures. We follow international safety and sterilization protocols.',
  },
  {
    q: 'How long is the typical recovery after ENT surgery?',
    a: 'Recovery varies by procedure. Endoscopic sinus surgery patients typically resume normal activities in 5-7 days, while tonsillectomy may require 10-14 days. Your doctor will provide a detailed recovery plan with follow-up visits.',
  },
  {
    q: 'Do you offer second opinions?',
    a: 'Yes. We encourage patients to seek second opinions for surgical or complex treatment decisions. Our specialists will review your case thoroughly and provide honest, expert guidance.',
  },
  {
    q: 'Is there parking available at the clinic?',
    a: 'Yes, we have ample free parking available for patients and visitors. The clinic is also easily accessible by public transport and is located in a prime area of Lucknow.',
  },
];

export default function FAQ() {
  const { ref, isInView } = useInView(0.08);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" style={{
      padding: 'var(--space-20) 0',
      background: 'var(--neutral-50)',
    }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div style={{
          textAlign: 'center', marginBottom: 'var(--space-12)',
          opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease-out',
        }}>
          <span style={{
            display: 'inline-block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-accent)',
            fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--gold-600)', marginBottom: 'var(--space-3)',
          }}>
            Common Questions
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--navy-900)',
            marginBottom: 'var(--space-3)',
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', maxWidth: 480, margin: '0 auto' }}>
            Find answers to common queries about our services, facilities, and patient experience.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{
                borderRadius: 'var(--radius-lg)',
                background: 'var(--neutral-0)',
                border: `1px solid ${isOpen ? 'var(--gold-200)' : 'var(--neutral-100)'}`,
                overflow: 'hidden',
                transition: 'all var(--transition-base)',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: isInView ? `${i * 50}ms` : '0ms',
                boxShadow: isOpen ? '0 4px 16px rgba(230,168,23,0.08)' : 'none',
              }}>
                <button onClick={() => setOpenIdx(isOpen ? null : i)} style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', padding: 'var(--space-5) var(--space-6)',
                  background: 'transparent', textAlign: 'left',
                  fontFamily: 'var(--font-accent)', fontSize: 'var(--text-base)',
                  fontWeight: isOpen ? 600 : 500,
                  color: isOpen ? 'var(--navy-900)' : 'var(--navy-800)',
                  lineHeight: 'var(--leading-snug)',
                }}>
                  {faq.q}
                  <ChevronDown size={18} style={{
                    color: isOpen ? 'var(--gold-600)' : 'var(--neutral-400)',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform var(--transition-base)', flexShrink: 0, marginLeft: 'var(--space-4)',
                  }} />
                </button>
                <div style={{
                  maxHeight: isOpen ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height var(--transition-slow), padding var(--transition-slow)',
                  padding: isOpen ? '0 var(--space-6) var(--space-5)' : '0 var(--space-6)',
                }}>
                  <p style={{
                    fontSize: 'var(--text-sm)', color: 'var(--neutral-500)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
