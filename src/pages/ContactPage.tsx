import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { MapPin, Phone, Info, Clock, Car, Bus, Train } from "lucide-react";

const departments = [
  "ENT",
  "General Surgery",
  "Obstetrics & Gynaecology",
  "Physiotherapy",
  "Dietitian",
];

const transportInfo = [
  {
    icon: Car,
    title: "By Car / Two-Wheeler",
    desc: "Free parking is available within the Shivbalak Market complex adjacent to the clinic. Entry from Faizabad Road.",
  },
  {
    icon: Bus,
    title: "By Bus / Auto",
    desc: "Alight at Tiwariganj Bus Stop on Faizabad Road. The clinic is a 2-minute walk from the stop, opposite the Mahindra Showroom.",
  },
  {
    icon: Train,
    title: "By Metro / Rail",
    desc: "Nearest metro station is Polytechnic (Lucknow Metro – Blue Line), approx. 1.5 km from the clinic. Auto-rickshaws available.",
  },
];

export default function ContactPage() {
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
    <>
      {/* Page Header */}
      <div className="bg-navy pt-28 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">
            Reach Us
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Contact{" "}
            <span className="text-gold-gradient">&amp; Appointments</span>
          </h1>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-2xl mx-auto">
            We are conveniently located on Faizabad Road, Lucknow. Walk in or
            call us to book your consultation.
          </p>
        </div>
      </div>

      {/* Main contact section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-5"
            >
              {/* Info cards */}
              <div className="bg-clinical-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
                <div className="flex items-start gap-3">
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

                <div className="flex items-start gap-3">
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
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                      OPD Hours
                    </p>
                    <p className="font-sans text-navy text-sm font-medium">
                      Mon–Sat: 9:00 AM – 7:00 PM
                    </p>
                    <p className="font-sans text-gray-400 text-xs mt-0.5">
                      Emergency available 24/7 on call
                    </p>
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

              {/* Map */}
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
              transition={{ duration: 0.7, delay: 0.25 }}
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
                    Our team will call you within one business hour to confirm
                    your appointment.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-clinical-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
                >
                  <div>
                    <h3 className="font-serif text-2xl text-navy mb-1">
                      Book an Appointment
                    </h3>
                    <p className="font-sans text-gray-400 text-xs mb-2">
                      Fill the form — we will call you back promptly.
                    </p>
                  </div>

                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your full name",
                    },
                    {
                      id: "phone",
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "+91 XXXXX XXXXX",
                    },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label className="block font-sans text-gray-600 text-xs mb-1.5 font-medium uppercase tracking-wide">
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={(form as Record<string, string>)[id]}
                        onChange={(e) =>
                          setForm({ ...form, [id]: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition-colors bg-white"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block font-sans text-gray-600 text-xs mb-1.5 font-medium uppercase tracking-wide">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
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

      {/* Transport & Accessibility */}
      <section className="py-20 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">
              Getting Here
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-4">
              Transport{" "}
              <span className="text-gold-gradient">&amp; Accessibility</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {transportInfo.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <t.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg text-navy mb-2">{t.title}</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
