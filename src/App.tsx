import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import QuickContact from './components/QuickContact';
import FloatingAppointment from './components/FloatingAppointment';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <QuickContact />
      </main>
      <Footer />
      <FloatingAppointment />
    </>
  );
}
