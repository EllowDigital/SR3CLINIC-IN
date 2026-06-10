import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesOverview from './components/ServicesOverview';
import MeetOurDoctors from './components/MeetOurDoctors';
import PatientJourney from './components/PatientJourney';
import ClinicFacilities from './components/ClinicFacilities';
import EmergencyBanner from './components/EmergencyBanner';
import Testimonials from './components/Testimonials';
import PatientSuccessStories from './components/PatientSuccessStories';
import StatisticsCounter from './components/StatisticsCounter';
import WhyTrustUs from './components/WhyTrustUs';
import FAQ from './components/FAQ';
import AppointmentCTA from './components/AppointmentCTA';
import QuickContact from './components/QuickContact';
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
      {/* <StatisticsCounter /> */}
      <WhyChooseUs />
      <ServicesOverview />
      {/* <MeetOurDoctors /> */}
      <PatientJourney />
      <ClinicFacilities />
      <WhyTrustUs />
      <EmergencyBanner />
      <Testimonials />
      <FAQ />
      <AppointmentCTA />
      <QuickContact />
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
