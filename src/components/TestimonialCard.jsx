import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft hover:shadow-card border border-slate-100 flex flex-col justify-between h-full relative group"
    >
      {/* Decorative quote icon */}
      <div className="absolute top-5 right-5 text-slate-200 group-hover:text-gold-200 transition-colors duration-300">
        <Quote className="w-8 h-8 rotate-180" />
      </div>

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
          ))}
          <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 / 5.0</span>
        </div>

        {/* Testimonial Quote */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 italic">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-400 shrink-0"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm sm:text-base font-bold text-navy-950 truncate">
              {testimonial.name}
            </h4>
            <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" title="Verified Review" />
          </div>
          <p className="text-xs font-semibold text-gold-600 truncate">
            {testimonial.role}
          </p>
          <p className="text-[11px] text-slate-500 truncate">
            {testimonial.school}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
