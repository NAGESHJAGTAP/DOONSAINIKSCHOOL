import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Shield,
  Train,
  Plane
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admission Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim().replace(/\D/g, ''))) {
      errs.phone = 'Enter valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please write your message or enquiry';
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
      name: '',
      email: '',
      phone: '',
      subject: 'Admission Enquiry',
      message: ''
    });
    setErrors({});
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80"
            alt="Campus Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        </div>

        <div className="custom-container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect with Admissions Cell</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-white">
            Contact Doon Sainik School
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Have questions about admission cutoffs, hostel facilities, or syllabus? Reach out to our academic team in Dehradun today.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200 space-y-6">
                <h3 className="text-2xl font-bold text-navy-950 font-heading border-l-4 border-gold-500 pl-3">
                  Campus Headquarters
                </h3>

                <div className="space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-950 mb-0.5">Campus Location</div>
                      <p className="text-slate-600 leading-relaxed">
                        Chakrata Road, Near Selaqui Industrial Area, Dehradun, Uttarakhand - 248011, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-950 mb-0.5">Helpline & WhatsApp</div>
                      <a href="tel:+919760012345" className="text-navy-900 font-semibold block hover:text-gold-600">
                        +91 97600 12345
                      </a>
                      <a href="tel:01352700000" className="text-slate-600 block hover:text-gold-600">
                        0135-2700000 / +91 97600 54321
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-950 mb-0.5">Email Support</div>
                      <a href="mailto:admissions@doonsainikschool.com" className="text-slate-600 block hover:text-gold-600">
                        admissions@doonsainikschool.com
                      </a>
                      <a href="mailto:info@doonsainikschool.com" className="text-slate-600 block hover:text-gold-600">
                        info@doonsainikschool.com
                      </a>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-950 mb-0.5">Visiting & Office Hours</div>
                      <p className="text-slate-600">
                        Monday – Saturday: 8:00 AM – 7:00 PM<br/>
                        Sunday: 9:00 AM – 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit Directions Card */}
              <div className="bg-navy-950 rounded-3xl p-6 text-white space-y-4 shadow-xl">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold-400" />
                  <span>How to Reach Our Dehradun Campus</span>
                </h4>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Train className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>From Dehradun Railway Station:</strong> Approx. 22 km. Direct autos and buses available towards Selaqui / Chakrata Road.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Plane className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>From Jolly Grant Airport:</strong> Approx. 50 km via NH 72. Pre-paid airport cabs available.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200">
                <h3 className="text-2xl font-bold text-navy-950 mb-2 font-heading">
                  Send an Official Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Fill in your details below and our Admissions Officer will respond within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-navy-950 mb-2">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto">
                      Your enquiry regarding <strong>{formData.subject}</strong> has been registered. Our counselor will call you at <strong>{formData.phone}</strong> shortly.
                    </p>
                    <Button onClick={handleReset} variant="primary" size="md">
                      Submit Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Ramesh Chandra Sharma"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: null });
                          }}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                            errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-navy-900'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: null });
                          }}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                            errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-navy-900'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: null });
                          }}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-navy-900'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Subject / Interest
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
                        >
                          <option>Sainik School (AISSEE) Class 6</option>
                          <option>Sainik School (AISSEE) Class 9</option>
                          <option>RIMC Dehradun Coaching</option>
                          <option>RMS Military School Coaching</option>
                          <option>NDA Foundation Course</option>
                          <option>Hostel Tour & Visit</option>
                          <option>Other Query</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Message / Questions *
                      </label>
                      <textarea
                        rows="4"
                        placeholder="Please share your child's age, target entrance exam, or specific questions about hostel and fees..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: null });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                          errors.message ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-navy-900'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        className="w-full justify-center shadow-lg"
                        icon={Send}
                      >
                        Send Enquiry Now
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map Embed Mockup */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="custom-container">
          <div className="rounded-3xl overflow-hidden shadow-soft border border-slate-200 bg-slate-100 p-2">
            <div className="aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden relative">
              <iframe
                title="Doon Sainik School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.22384666497!2d77.92348574341999!3d30.34789547565985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
