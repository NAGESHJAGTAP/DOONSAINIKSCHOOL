import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Shield, Phone, Mail, User, BookOpen } from 'lucide-react';
import Button from './Button';

export default function EnquiryModal({ isOpen, onClose, courseTitle = "General Admission" }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    targetClass: 'Class 6 (AISSEE)',
    targetYear: '2025-2026',
    mode: 'Residential Hostel',
    city: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim().replace(/\D/g, ''))) {
      errs.phone = 'Enter valid 10-digit mobile number';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      targetClass: 'Class 6 (AISSEE)',
      targetYear: '2025-2026',
      mode: 'Residential Hostel',
      city: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-6 relative">
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 text-white/70 hover:text-white w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-2 border border-gold-400/30">
              <Shield className="w-3.5 h-3.5" />
              <span>Free Admission Counseling</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Apply for {courseTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak with our Senior Academic Dean & check seat availability.
            </p>
          </div>

          {/* Form or Success State */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-navy-950 mb-2">
                  Application Received!
                </h4>
                <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto">
                  Thank you! Our Dehradun admission counsellor will call you at <strong className="text-navy-900">{formData.phone}</strong> within 2 business hours with course fees & prospectus.
                </p>
                <Button onClick={handleReset} variant="gold" className="w-full">
                  Close Window
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Master Aarav Sharma"
                      value={formData.studentName}
                      onChange={(e) => {
                        setFormData({ ...formData, studentName: e.target.value });
                        if (errors.studentName) setErrors({ ...errors, studentName: null });
                      }}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.studentName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-navy-900'
                      }`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-xs text-red-500 mt-1">{errors.studentName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Parent's Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-navy-900'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Home State / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Uttarakhand / Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Target Entrance
                    </label>
                    <select
                      value={formData.targetClass}
                      onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
                    >
                      <option>Class 6 (AISSEE)</option>
                      <option>Class 9 (AISSEE)</option>
                      <option>RIMC Dehradun</option>
                      <option>RMS Military School</option>
                      <option>NDA Foundation (11th/12th)</option>
                      <option>Navodaya (JNVST)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Program Type
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
                    >
                      <option>Residential Hostel Batch</option>
                      <option>Day Boarding Scholar</option>
                      <option>Weekend Crash Course</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    Submit Application & Call Back
                  </Button>
                </div>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 Strictly Confidential. No spam. Instant consultation by academy counsellors.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
