import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Send
} from 'lucide-react';
import { coursesData } from '../data/courses';

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
    </svg>
  );
}

export default function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t-4 border-gold-500 relative overflow-hidden">
      {/* Subtle background crest watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
        <Shield className="w-96 h-96 text-white" />
      </div>

      <div className="custom-container relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-navy-800">
          {/* Column 1: Academy Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-navy-900 border-2 border-gold-500 flex items-center justify-center text-white shadow-md">
                <Shield className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight leading-tight">
                  DOON SAINIK SCHOOL
                </h3>
                <p className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                  Cadet Training Academy • Dehradun
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              India's foremost residential academy dedicated to grooming young cadets for entrance into All India Sainik Schools (AISSEE), Rashtriya Indian Military College (RIMC) Dehradun, and Rashtriya Military Schools (RMS).
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Connect With Us:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-slate-300 flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-slate-300 flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-slate-300 flex items-center justify-center transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-l-2 border-gold-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/admission" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Admission Process</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Campus Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Parent Reviews</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Contact Academy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Entrance Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-l-2 border-gold-500 pl-3">
              Entrance Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              {coursesData.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.id}`}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5 truncate"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span className="truncate">{course.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/courses"
                  className="text-gold-400 hover:text-gold-300 font-bold inline-flex items-center gap-1 mt-1 text-xs"
                >
                  View All 6 Programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-l-2 border-gold-500 pl-3">
              Campus & Helpline
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>
                  Chakrata Road, Near Selaqui, Dehradun, Uttarakhand - 248011, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+919760012345" className="hover:text-gold-400 transition-colors">
                  +91 97600 12345 / 0135-2700000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:admissions@doonsainikschool.com" className="hover:text-gold-400 transition-colors">
                  admissions@doonsainikschool.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Office: Mon - Sat: 8:00 AM - 7:00 PM<br/>Sunday: 9:00 AM - 4:00 PM</span>
              </li>
            </ul>

            <button
              onClick={onOpenEnquiry}
              className="w-full py-2.5 px-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
            >
              Enquire for Admission
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} Doon Sainik School Academy. All Rights Reserved.
          </p>
          <p className="text-slate-400 text-[11px]">
            Premier Entrance Coaching & Hostel Facility for AISSEE, RIMC & RMS Aspirants.
          </p>
        </div>
      </div>
    </footer>
  );
}
