import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, Shield, ChevronRight } from 'lucide-react';
import Button from './Button';

export default function MobileMenu({ isOpen, onClose, onOpenEnquiry }) {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admission', path: '/admission' },
    { name: 'Hall of Fame & Results', path: '/#achievements' },
    { name: 'Campus Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-navy-950 text-white shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between p-5 border-b border-navy-800 bg-navy-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 font-bold">
                    DSS
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base tracking-tight text-white leading-tight">
                      DOON SAINIK SCHOOL
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                      Dehradun Campus
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                        isActive
                          ? 'bg-gold-500 text-navy-950 font-bold shadow'
                          : 'text-slate-200 hover:bg-navy-800/80 hover:text-white'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="p-5 border-t border-navy-800/80 bg-navy-900/50 space-y-4">
              <Button
                variant="gold"
                size="md"
                className="w-full justify-center shadow-lg"
                onClick={() => {
                  onClose();
                  onOpenEnquiry();
                }}
              >
                Apply for Admission 2025-26
              </Button>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <a
                  href="tel:+919760000000"
                  className="flex items-center gap-2.5 hover:text-gold-400 transition-colors py-1"
                >
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>+91 97600 12345 / 0135-2700000</span>
                </a>
                <a
                  href="mailto:admissions@doonsainikschool.com"
                  className="flex items-center gap-2.5 hover:text-gold-400 transition-colors py-1"
                >
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>admissions@doonsainikschool.com</span>
                </a>
                <div className="flex items-center gap-2.5 text-slate-400 py-1">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Chakrata Road, Dehradun, Uttarakhand</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
