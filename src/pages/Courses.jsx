import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Clock, Users, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { coursesData } from '../data/courses';

export default function Courses({ onOpenEnquiry }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Sainik Schools',
    'Elite Defense School',
    'Military Schools',
    'Officer Cadet Program',
    'Government Schooling',
    'Fast Track'
  ];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.classTarget.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      {/* Page Hero */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
            alt="Courses Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        </div>

        <div className="custom-container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Targeted Defense Programs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-white">
            Entrance Examination Coaching Programs
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Choose from specialized residential, day-boarding, and crash course batches designed for AISSEE, RIMC Dehradun, Rashtriya Military Schools, and NDA Foundation.
          </p>
        </div>
      </section>

      {/* Main Course Filter & Search */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses by exam, school, or class..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 shadow-sm"
              />
            </div>

            {/* Quick stats or count */}
            <div className="text-xs sm:text-sm font-semibold text-slate-500 self-center md:self-auto">
              Showing <span className="text-navy-950 font-bold">{filteredCourses.length}</span> programs available
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="custom-container">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCourses.map((course, idx) => (
                <CourseCard key={course.id} course={course} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-3xl p-8 max-w-md mx-auto">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy-950 mb-1">
                No matching programs found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-4">
                Try searching with different keywords or clear your category filter.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Course Feature Comparison / Counseling Banner */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="custom-container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-navy-900 to-navy-850 rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>Free Expert Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Not Sure Which Exam Fits Your Child?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                Speak directly with our Academic Dean to analyze eligibility according to age, date of birth, and syllabus readiness.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button onClick={onOpenEnquiry} variant="gold" size="md" className="w-full">
                Get Free Counseling Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
