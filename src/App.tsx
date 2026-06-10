import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesOverview from './components/ServicesOverview';
import PatientJourney from './components/PatientJourney';
import EmergencyBanner from './components/EmergencyBanner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AppointmentCTA from './components/AppointmentCTA';
import FloatingAppointment from './components/FloatingAppointment';
import StickyMobileBar from './components/StickyMobileBar';
import SkipLink from './components/SkipLink';
import Footer from './components/Footer';
import { ToastProvider } from './components/ToastNotification';
import './styles/global.css';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Code-split all heavy page routes
const AboutPage = lazy(() => import('./pages/AboutPage'));
const DoctorsPage = lazy(() => import('./pages/DoctorsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AppointmentPage = lazy(() => import('./pages/AppointmentPage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'));

// Service pages
const EntPage = lazy(() => import('./pages/services/EntPage'));
const GeneralSurgeryPage = lazy(() => import('./pages/services/GeneralSurgeryPage'));
const LaparoscopicSurgeryPage = lazy(() => import('./pages/services/LaparoscopicSurgeryPage'));
const GynecologyPage = lazy(() => import('./pages/services/GynecologyPage'));
const PhysiotherapyPage = lazy(() => import('./pages/services/PhysiotherapyPage'));
const DietConsultationPage = lazy(() => import('./pages/services/DietConsultationPage'));

function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 'var(--space-4)',
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        border: '3px solid var(--navy-100)',
        borderTopColor: 'var(--gold-500)',
        animation: 'spin 0.8s linear infinite',
      }} />
      <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-accent)', color: 'var(--neutral-400)' }}>
        Loading…
      </span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <PatientJourney />
      <Testimonials />
      <FAQ />
      <AppointmentCTA />
      <EmergencyBanner />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <SkipLink />
        <ScrollToTop />
        <Navbar />
        <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/appointment" element={<AppointmentPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/services/ent" element={<EntPage />} />
              <Route path="/services/general-surgery" element={<GeneralSurgeryPage />} />
              <Route path="/services/laparoscopic-surgery" element={<LaparoscopicSurgeryPage />} />
              <Route path="/services/gynecology" element={<GynecologyPage />} />
              <Route path="/services/physiotherapy" element={<PhysiotherapyPage />} />
              <Route path="/services/diet-consultation" element={<DietConsultationPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingAppointment />
        <StickyMobileBar />
      </ToastProvider>
    </BrowserRouter>
  );
}
