import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { MapPin, Phone, Info } from "lucide-react";
import { useState } from "react";

const departments = [
  "ENT",
  "General Surgery",
  "Obstetrics & Gynaecology",
  "Physiotherapy",
  "Dietitian",
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    department: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">
            Reach Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
            Contact &amp;{" "}
            <span className="text-gold-gradient">Appointments</span>
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
          <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We are conveniently located on Faizabad Road, Lucknow. Walk in or
            call us to book your consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Address card */}
            <div className="bg-clinical-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                    Address
                  </p>
                  <p className="font-sans text-navy text-sm font-medium leading-relaxed">
                    Shivbalak Market, Opp. Mahindra Showroom,
                    <br />
                    Tiwariganj, Faizabad Road, Lucknow
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+919369643922"
                    className="block font-sans text-navy text-sm font-medium hover:text-gold transition-colors"
                  >
                    +91 9369643922
                  </a>
                  <a
                    href="tel:+918858580214"
                    className="block font-sans text-navy text-sm font-medium hover:text-gold transition-colors"
                  >
                    +91 8858580214
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Info className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                    Nearby Landmarks
                  </p>
                  <p className="font-sans text-navy text-sm">
                    BBD · Polytechnic · Kamta Chauraha
                  </p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64">
              <iframe
                title="SR³ ENT Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4793!2d81.0458!3d26.8800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTHVja25vdw!5e0!3m2!1sen!2sin!4v1688000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(70%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-clinical-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-navy mb-3">
                  Request Received
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  Thank you. Our team will call you back within one business
                  hour to confirm your appointment.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-clinical-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
              >
                <h3 className="font-serif text-2xl text-navy mb-1">
                  Book an Appointment
                </h3>
                <p className="font-sans text-gray-400 text-xs mb-4">
                  Fill the form — we'll call you back promptly.
                </p>

                <div>
                  <label className="block font-sans text-gray-600 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition-colors bg-white"
                  />
                </div>

                <div>
                  <label className="block font-sans text-gray-600 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition-colors bg-white"
                  />
                </div>

                <div>
                  <label className="block font-sans text-gray-600 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-navy focus:outline-none focus:border-gold transition-colors bg-white"
                  />
                </div>

                <div>
                  <label className="block font-sans text-gray-600 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Department
                  </label>
                  <select
                    value={form.department}
                    onChange={(e) =>
                      setForm({ ...form, department: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-navy focus:outline-none focus:border-gold transition-colors bg-white"
                  >
                    <option value="">Select a department…</option>
                    {departments.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 gold-gradient text-navy font-sans font-bold text-sm rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gold/25 tracking-wide"
                >
                  Request Priority Callback
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
