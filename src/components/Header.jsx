import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Shield, Bell, ArrowRight } from 'lucide-react';
import Button from './Button';
import MobileMenu from './MobileMenu';

export default function Header({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admission', path: '/admission' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="w-full z-40 sticky top-0 transition-all duration-300">
        {/* Top Information Bar */}
        <div className="bg-navy-950 text-white text-xs py-2 px-4 border-b border-navy-800/80 hidden sm:block">
          <div className="custom-container flex flex-wrap items-center justify-between gap-3">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+919760012345"
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-semibold">+91 97600 12345 / 0135-2700000</span>
              </a>
              <a
                href="mailto:admissions@doonsainikschool.com"
                className="hidden md:flex items-center gap-1.5 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>admissions@doonsainikschool.com</span>
              </a>
              <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Chakrata Road, Dehradun</span>
              </div>
            </div>

            {/* Right: Admission Alert Ticker */}
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span className="text-slate-300 font-medium">
                Admissions Open for Batch 2025-26 (AISSEE & RIMC)
              </span>
              <button
                onClick={onOpenEnquiry}
                className="text-gold-400 hover:text-gold-300 font-bold ml-2 underline underline-offset-2 cursor-pointer"
              >
                Apply Online →
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-card py-3 border-b border-slate-200/80'
              : 'bg-white py-4 shadow-sm border-b border-slate-100'
          }`}
        >
          <div className="custom-container flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-navy-900 border-2 border-gold-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                {/* Academy Crest Icon */}
                <Shield className="w-6 h-6 text-gold-400" />
                <span className="absolute -bottom-1 text-[8px] font-black uppercase text-gold-400 tracking-wider bg-navy-950 px-1 rounded">
                  DSS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-navy-950 font-heading leading-tight group-hover:text-navy-800 transition-colors">
                  DOON SAINIK SCHOOL
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-600">
                  Cadet Academy • Dehradun
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-bold transition-all relative ${
                      isActive
                        ? 'text-navy-950 bg-navy-50'
                        : 'text-slate-600 hover:text-navy-950 hover:bg-slate-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex shadow-md hover:shadow-gold-glow"
                onClick={onOpenEnquiry}
              >
                Apply for Admission
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
}
