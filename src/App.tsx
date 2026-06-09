import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesOverview from './components/ServicesOverview';
import MeetOurDoctors from './components/MeetOurDoctors';
import PatientJourney from './components/PatientJourney';
import ClinicFacilities from './components/ClinicFacilities';
import EmergencyBanner from './components/EmergencyBanner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AppointmentCTA from './components/AppointmentCTA';
import QuickContact from './components/QuickContact';
import FloatingAppointment from './components/FloatingAppointment';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import DoctorsPage from './pages/DoctorsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import './styles/global.css';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <MeetOurDoctors />
      <PatientJourney />
      <ClinicFacilities />
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
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingAppointment />
    </BrowserRouter>
  );
}
