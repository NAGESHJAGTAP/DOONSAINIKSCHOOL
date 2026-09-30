import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  Shield,
  Star,
  Award,
  BookOpen,
  ArrowRight,
  ChevronDown,
  FileText,
  PhoneCall,
  Check
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { coursesData } from '../data/courses';

export default function CourseDetails({ onOpenEnquiry }) {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="py-24 text-center custom-container">
        <h2 className="text-3xl font-bold text-navy-950 mb-3">Course Not Found</h2>
        <p className="text-slate-600 mb-6">The requested course could not be located.</p>
        <Button to="/courses" variant="primary">
          Back to All Courses
        </Button>
      </div>
    );
  }

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div>
      {/* Course Hero Banner */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={course.bannerImage || course.image}
            alt={course.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/70" />
        </div>

        <div className="custom-container relative z-10">
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold mb-2">
              <Link to="/" className="hover:text-gold-400">Home</Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-gold-400">Courses</Link>
              <span>/</span>
              <span className="text-gold-400 truncate">{course.shortTitle}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
              <Shield className="w-3.5 h-3.5" />
              <span>{course.category} • {course.classTarget}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight">
              {course.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
              {course.shortDesc}
            </p>

            {/* Quick Meta Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Users className="w-4 h-4 text-gold-400" />
                <span>{course.seatsAvailable}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                <span className="font-bold">{course.rating} / 5.0</span>
                <span className="text-slate-300">({course.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                onClick={onOpenEnquiry}
                variant="gold"
                size="lg"
                className="shadow-xl"
              >
                Apply for This Batch
              </Button>
              <Button
                onClick={onOpenEnquiry}
                variant="outlineWhite"
                size="lg"
              >
                Download Syllabus PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Layout */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Course Overview */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200">
                <h2 className="text-2xl font-bold text-navy-950 mb-4 font-heading border-l-4 border-gold-500 pl-3">
                  Program Overview & Objectives
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {course.fullDesc}
                </p>

                <h3 className="text-lg font-bold text-navy-950 mb-3">
                  What Sets This Program Apart:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Subjects & Exam Weightage */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200">
                <h2 className="text-2xl font-bold text-navy-950 mb-4 font-heading border-l-4 border-gold-500 pl-3">
                  Subjects Covered & Mark Distribution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Complete alignment with the latest National Testing Agency (NTA) and Ministry of Defence syllabus.
                </p>

                <div className="space-y-3">
                  {course.subjects.map((sub, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-navy-900 text-gold-400 font-bold text-xs flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-bold text-navy-950 text-sm sm:text-base">
                          {sub.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-50 text-gold-700 border border-gold-200 self-start sm:self-auto">
                        {sub.weightage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Phased Learning Curriculum */}
              {course.curriculum && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200">
                  <h2 className="text-2xl font-bold text-navy-950 mb-4 font-heading border-l-4 border-gold-500 pl-3">
                    Phase-Wise Curriculum Structure
                  </h2>
                  <div className="space-y-4">
                    {course.curriculum.map((c, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="text-base font-bold text-navy-950 mb-1">
                          {c.week}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {c.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Learning Method */}
              <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  Our Scientific Pedagogy
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {course.learningMethod}
                </p>
              </div>

              {/* 5. Course FAQs Accordion */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200">
                  <h2 className="text-2xl font-bold text-navy-950 mb-6 font-heading border-l-4 border-gold-500 pl-3">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {course.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-sm sm:text-base text-navy-950 hover:bg-slate-50 transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                              activeFaq === idx ? 'rotate-180 text-gold-600' : ''
                            }`}
                          />
                        </button>
                        {activeFaq === idx && (
                          <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Batch Card */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-200 sticky top-24">
                <div className="text-center pb-4 border-b border-slate-100 mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                    ADMISSIONS OPEN 2025-26
                  </span>
                  <h3 className="text-xl font-bold text-navy-950 mt-3">
                    Enroll for {course.shortTitle}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Hostel & Day-Boarding Options Available
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm mb-6">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-bold text-navy-950">{course.duration}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Eligibility:</span>
                    <span className="font-bold text-navy-950 text-right">{course.eligibility}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Class Target:</span>
                    <span className="font-bold text-navy-950">{course.classTarget}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Batch Format:</span>
                    <span className="font-bold text-navy-950">{course.batchType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Seat Capacity:</span>
                    <span className="font-bold text-crimson-600">{course.seatsAvailable}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={onOpenEnquiry}
                    variant="gold"
                    size="lg"
                    className="w-full justify-center shadow-md"
                  >
                    Apply for Admission Now
                  </Button>
                  <Button
                    to="/contact"
                    variant="outline"
                    size="md"
                    className="w-full justify-center"
                  >
                    Schedule Campus Visit
                  </Button>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <PhoneCall className="w-4 h-4 text-gold-500" />
                  <span>Helpline: +91 97600 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
