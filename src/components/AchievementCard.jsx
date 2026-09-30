import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Quote } from 'lucide-react';

export default function AchievementCard({ cadet, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card-hover border border-slate-100 hover:border-gold-300 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Top Header with Student Photo & Badge */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden ring-3 ring-gold-400/80 shadow-md">
              <img
                src={cadet.image}
                alt={cadet.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 bg-navy-900 text-gold-400 p-1 rounded-full shadow">
              <Trophy className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200 mb-1">
              {cadet.rank}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-navy-950 truncate">
              {cadet.name}
            </h4>
            <p className="text-xs text-slate-500 font-medium truncate">
              Batch of {cadet.year}
            </p>
          </div>
        </div>

        {/* Selected Institution Pill */}
        <div className="bg-navy-50/80 rounded-xl p-2.5 mb-3 border border-navy-100">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
            {cadet.exam}
          </div>
          <div className="text-xs sm:text-sm font-bold text-navy-900 line-clamp-1">
            {cadet.school}
          </div>
        </div>

        {/* Quote / Testimonial */}
        <div className="relative pl-3 border-l-2 border-gold-400 mb-4 italic text-xs sm:text-sm text-slate-600 line-clamp-3">
          "{cadet.quote}"
        </div>
      </div>

      {/* Score or Merit Badge */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Score / Status:</span>
        <span className="font-extrabold text-navy-950 bg-slate-100 px-2.5 py-1 rounded-md">
          {cadet.score}
        </span>
      </div>
    </motion.div>
  );
}
