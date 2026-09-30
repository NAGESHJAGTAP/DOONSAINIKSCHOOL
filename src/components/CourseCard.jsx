import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import Button from './Button';

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card-hover border border-slate-100 hover:border-gold-300 transition-all duration-300 flex flex-col group h-full"
    >
      {/* Course Image & Badge */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-navy-900">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
          {course.category}
        </div>

        {/* Highlight Badge */}
        {course.badge && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
            {course.badge}
          </div>
        )}

        {/* Rating and Reviews */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-navy-950/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs text-white">
          <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
          <span className="font-bold">{course.rating}</span>
          <span className="text-slate-300">({course.reviewsCount})</span>
        </div>

        {/* Target class */}
        <div className="absolute bottom-3 right-3 text-xs font-semibold text-gold-300 bg-navy-950/80 backdrop-blur-sm px-2.5 py-1 rounded-lg">
          {course.classTarget}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors duration-200 line-clamp-2 mb-2">
            <Link to={`/courses/${course.id}`}>
              {course.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
            {course.shortDesc}
          </p>

          {/* Quick Meta */}
          <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold-600 shrink-0" />
              <span className="truncate">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-navy-700 shrink-0" />
              <span className="truncate">{course.batchType}</span>
            </div>
          </div>

          {/* Highlights checklist */}
          <div className="space-y-1.5 mb-5">
            {course.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            to={`/courses/${course.id}`}
            variant="primary"
            size="sm"
            className="w-full group/btn justify-between"
            icon={ArrowRight}
          >
            Course Syllabus & Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
