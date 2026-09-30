import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 ${
            light 
              ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30' 
              : 'bg-navy-100 text-navy-800 border border-navy-200'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-3.5 text-sm sm:text-base md:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      <div className={`mt-4 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-1 bg-gold-500 rounded-full"></div>
        <div className="w-3 h-1 bg-navy-800 rounded-full"></div>
        <div className="w-1.5 h-1 bg-gold-500 rounded-full"></div>
      </div>
    </div>
  );
}
