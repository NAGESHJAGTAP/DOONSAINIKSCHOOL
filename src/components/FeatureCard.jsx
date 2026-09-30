import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Target,
  HeartPulse,
  Home,
  Users,
  ShieldAlert,
  BookOpenCheck,
  Smartphone,
  Shield,
  Award
} from 'lucide-react';

const iconComponents = {
  GraduationCap,
  Target,
  HeartPulse,
  Home,
  Users,
  ShieldAlert,
  BookOpenCheck,
  Smartphone,
  Shield,
  Award
};

export default function FeatureCard({ feature, index = 0 }) {
  const Icon = iconComponents[feature.icon] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card-hover border border-slate-100 hover:border-gold-300 transition-all duration-300 group flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-5 group-hover:bg-gradient-to-tr group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
          <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
        </div>

        <h3 className="text-lg font-bold text-navy-950 mb-2.5 group-hover:text-gold-600 transition-colors duration-200">
          {feature.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-50 flex items-center gap-1.5 text-xs font-semibold text-gold-600">
        <span>Academy Standard</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
      </div>
    </motion.div>
  );
}
