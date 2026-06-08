import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, Phone } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Specialities', to: '/specialities' },
  { label: 'Patient Guide', to: '/patient-guide' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      {/* Emergency bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gold text-navy text-xs font-sans font-semibold py-1.5 text-center tracking-wide">
        <Phone className="inline w-3 h-3 mr-1.5 -mt-0.5" />
        Emergency &amp; Appointments:&nbsp;
        <a href="tel:+919369643922" className="hover:underline">+91 9369643922</a>
        <span className="mx-2">|</span>
        <a href="tel:+918858580214" className="hover:underline">+91 8858580214</a>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-7 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || !isHome
            ? 'glassmorphism py-2'
            : 'bg-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="SR³ ENT & Surgical Centre"
              className="w-12 h-12 rounded-full object-cover border-2 border-gold shadow-md"
            />
            <div>
              <p className="text-white font-serif font-semibold text-base leading-tight">SR³ ENT &amp;</p>
              <p className="text-gold text-[10px] font-sans tracking-[0.25em] uppercase">Surgical Centre</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => {
              const active = pathname === l.to
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm font-sans font-medium tracking-wide transition-colors duration-200 ${
                    active ? 'text-gold' : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* Book CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 gold-gradient text-navy font-sans font-semibold text-sm rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white hover:text-gold transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glassmorphism border-t border-gold/20"
            >
              <nav className="flex flex-col px-6 py-5 gap-4">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors py-1 border-b border-white/5 last:border-0"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 gold-gradient text-navy font-semibold text-sm rounded-full"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
