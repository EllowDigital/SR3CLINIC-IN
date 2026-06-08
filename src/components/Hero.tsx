import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury clinic interior"
          className="w-full h-full object-cover"
        />
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-light/85" />
      </div>

      {/* Gold dot grid accent */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)`,
          backgroundSize: '44px 44px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/5 w-64 h-64 rounded-full bg-gold/6 blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center pt-28">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gold tracking-[0.35em] text-xs font-sans uppercase mb-6"
        >
          Advanced ENT · Surgical · Multispecialty Care · Lucknow
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif text-4xl sm:text-5xl md:text-[64px] text-white leading-tight mb-5"
        >
          World-Class Healthcare,{' '}
          <span className="text-gold-gradient">Delivered with Compassion.</span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="w-24 h-0.5 gold-gradient mx-auto mb-6"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="font-sans text-white/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Advanced ENT, Surgical, and Multispecialty Care in Lucknow.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 gold-gradient text-navy font-sans font-semibold text-sm tracking-wide rounded-full shadow-xl shadow-gold/25"
          >
            Schedule a Consultation
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-sans font-medium text-sm tracking-wide rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            Explore Our Services
          </motion.a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: '5+', label: 'Specialists' },
            { value: '10k+', label: 'Patients Treated' },
            { value: '20+', label: 'Years Experience' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl text-gold font-bold">{s.value}</p>
              <p className="text-white/50 text-xs font-sans mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="w-6 h-6 text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
