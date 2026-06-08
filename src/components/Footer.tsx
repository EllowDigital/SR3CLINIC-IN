import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="SR³ ENT & Surgical Centre"
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/40 shadow-md"
              />
              <div>
                <p className="text-white font-serif font-semibold text-base leading-tight">
                  SR³ Care &amp; Cure
                </p>
                <p className="text-gold text-[10px] font-sans tracking-[0.22em] uppercase">
                  Surgical Centre
                </p>
              </div>
            </div>
            <p className="text-white/40 font-sans text-xs leading-relaxed mb-5">
              Committed to your health with advanced minimally invasive care,
              medical expertise, and transparent patient pricing.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <p className="text-white font-sans font-semibold text-xs uppercase tracking-widest mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Specialities", to: "/specialities" },
                { label: "Patient Guide", to: "/patient-guide" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/40 hover:text-gold font-sans text-xs transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <p className="text-white font-sans font-semibold text-xs uppercase tracking-widest mb-4">
              Specialities
            </p>
            <ul className="space-y-2.5">
              {[
                "ENT & Head/Neck",
                "General Surgery",
                "Obstetrics & Gynaecology",
                "Physiotherapy",
                "Dietetics & Nutrition",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/specialities"
                    className="text-white/40 hover:text-gold font-sans text-xs transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <p className="text-white font-sans font-semibold text-xs uppercase tracking-widest mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                <span className="text-white/40 font-sans text-xs leading-relaxed">
                  Shivbalak Market, Opp. Mahindra Showroom,
                  <br />
                  Tiwariganj, Faizabad Road, Lucknow
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a
                  href="tel:+919369643922"
                  className="text-white/40 font-sans text-xs hover:text-gold transition-colors"
                >
                  +91 9369643922
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a
                  href="tel:+918858580214"
                  className="text-white/40 font-sans text-xs hover:text-gold transition-colors"
                >
                  +91 8858580214
                </a>
              </li>
              <li className="flex items-start gap-2 mt-2 pt-2 border-t border-white/5">
                <Clock className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/60 font-sans text-xs font-medium">
                    OPD Timings
                  </p>
                  <p className="text-white/40 font-sans text-xs">
                    Monday – Saturday
                  </p>
                  <p className="text-white/40 font-sans text-xs">
                    9:00 AM – 7:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-white/25 font-sans text-xs">
            &copy; {year} SR³ ENT &amp; Surgical Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
