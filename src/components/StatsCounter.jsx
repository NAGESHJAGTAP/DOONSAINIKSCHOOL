import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, GraduationCap, ShieldCheck, TrendingUp, Users, BookOpen } from 'lucide-react';

const iconMap = {
  Award,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Users,
  BookOpen
};

function AnimatedNumber({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(value);
    const totalFrames = Math.min(60, Math.max(20, Math.floor(duration / 16)));
    const increment = end / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      if (currentFrame >= totalFrames || start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number.isInteger(end) ? Math.floor(start) : parseFloat(start.toFixed(1)));
      }
    }, duration / totalFrames);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsCounter({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {stats.map((item, idx) => {
        const IconComponent = iconMap[item.icon] || Award;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative bg-white/95 rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-slate-100 hover:border-gold-300 group overflow-hidden"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-navy-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300 shrink-0">
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
                <AnimatedNumber value={item.value} />
                <span className="text-gold-600 ml-0.5">{item.suffix}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-600 line-clamp-2">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
