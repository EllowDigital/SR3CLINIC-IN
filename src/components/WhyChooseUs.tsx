import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Microscope, Users, HeartHandshake, FlaskConical } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Advanced Endoscopic & Laser Technology",
    desc: "State-of-the-art HD endoscopes, CO₂ laser systems, and laparoscopic suites for precise, minimally invasive procedures.",
  },
  {
    icon: Users,
    title: "Multispecialty Excellence",
    desc: "Five specialities under one roof — ENT, surgery, obstetrics, physiotherapy and dietetics — ensuring seamless coordinated care.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centric Approach",
    desc: "Every treatment plan is tailored to the individual. We ensure clear communication, follow-up, and genuine support throughout your journey.",
  },
  {
    icon: FlaskConical,
    title: "Comprehensive Diagnostics",
    desc: "On-site audiometry, blood analysis, blood pressure & sugar monitoring and nebulization — fast, accurate results without the referral wait.",
  },
];

const images = [
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=80",
];

const tickerText =
  "Relief from chronic ailments  ·  Safe post-operative care  ·  Expert second opinions for complex cases  ·  Advanced diagnostics on-site  ·  Compassionate multispecialty care  ·  ";

export default function WhyChooseUs() {
  const [ref, inView] = useInView();

  return (
    <section
      id="why-choose-us"
      className="pt-28 pb-0 bg-charcoal overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 pb-28">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] text-xs font-sans uppercase mb-4">
            Why SR³
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            The SR³ <span className="text-gold-gradient">Difference</span>
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mb-5" />
          <p className="font-sans text-white/45 max-w-xl mx-auto text-sm leading-relaxed">
            Excellence is not a department — it is embedded in everything we do.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: image masonry */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 rounded-2xl overflow-hidden border border-white/8 h-56">
              <img
                src={images[0]}
                alt="Modern medical equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/8 h-44">
              <img
                src={images[1]}
                alt="Advanced diagnostics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/8 h-44">
              <img
                src={images[2]}
                alt="Clean clinical environment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: icon features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-gold/30 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-1.5">
                    {f.title}
                  </h3>
                  <p className="font-sans text-white/50 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ticker banner */}
      <div className="w-full gold-gradient py-4 overflow-hidden">
        <div className="ticker-track">
          {/* Doubled for seamless loop */}
          {[tickerText, tickerText].map((t, idx) => (
            <span
              key={idx}
              className="text-navy font-sans font-semibold text-sm tracking-wide whitespace-nowrap px-6"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
