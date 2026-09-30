import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
  PhoneCall,
  Clock,
  Sparkles,
  ChevronRight,
  MapPin,
  Calendar
} from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import StatsCounter from '../components/StatsCounter';
import CourseCard from '../components/CourseCard';
import AchievementCard from '../components/AchievementCard';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

import { coursesData } from '../data/courses';
import { achievementsData, statisticsData } from '../data/achievements';
import { testimonialsData } from '../data/testimonials';
import { whyChooseUsFeatures, leadershipData, admissionProcessSteps } from '../data/features';

export default function Home({ onOpenEnquiry }) {
  const [courseFilter, setCourseFilter] = useState('All');

  const categories = ['All', 'Sainik Schools', 'Elite Defense School', 'Military Schools', 'Officer Cadet Program'];

  const filteredCourses = courseFilter === 'All'
    ? coursesData
    : coursesData.filter(c => c.category === courseFilter);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Statistics Section */}
      <section className="relative -mt-10 sm:-mt-12 z-20 custom-container">
        <StatsCounter stats={statisticsData} />
      </section>

      {/* 3. About Section Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80"
                    alt="Cadet drill and assembly"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Secondary Image */}
                <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
                    alt="Classroom education"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -top-6 -left-4 sm:-left-6 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-gold-300">
                  <div className="text-2xl sm:text-3xl font-black font-heading leading-none">
                    12+ Years
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-900 mt-1">
                    Leadership in Defense Prep
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-5"
            >
              <SectionTitle
                badge="About Doon Sainik School"
                title="Pioneering Academic Excellence & Officer-Grade Discipline in Dehradun"
                subtitle="Nestled in the educational hub of Dehradun, Uttarakhand, our academy is engineered with a singular focus: preparing young minds for nationwide competitive entrance into Sainik Schools, RIMC, and RMS."
                align="left"
              />

              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Established by retired Armed Forces officers and distinguished educators, we combine rigorous syllabus drills with military physical training, obstacle clearing, and psychological interview grooming.
                </p>
                <p>
                  With full-fledged residential boarding, hygienic mess facilities, round-the-clock wardens, and customized daily test modules, we provide the environment every aspirant needs to secure top All India Ranks.
                </p>
              </div>

              {/* Key Highlights list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Dedicated Boys & Girls Hostels",
                  "Daily 2-Hour Physical Training (PT)",
                  "Weekly 300-Mark OMR Mock Exams",
                  "SSB Psychologist Mock Interviews",
                  "Nutritious Balanced High-Protein Diet",
                  "12-Volume Specialized Study Material"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-navy-900">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to="/about" variant="primary" size="md" icon={ArrowRight}>
                  Discover Our Heritage & Campus
                </Button>
                <Button onClick={onOpenEnquiry} variant="outline" size="md">
                  Download Prospectus
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Hall of Fame / Achievements */}
      <section id="achievements" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-100">
        <div className="custom-container">
          <SectionTitle
            badge="Hall of Fame • 2023-2024"
            title="Our All India Rankers & Selected Cadets"
            subtitle="Real results speak for themselves. Meet our proud cadets who cracked AISSEE, RIMC, and RMS through dedicated discipline and focused mentorship."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementsData.slice(0, 4).map((cadet, idx) => (
              <AchievementCard key={cadet.id} cadet={cadet} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-navy-50 rounded-2xl p-4 sm:p-5 border border-navy-100">
              <div className="flex items-center gap-2 text-sm font-bold text-navy-950">
                <Award className="w-5 h-5 text-gold-500" />
                <span>Over 1,450+ Total Selections in Sainik & Military Schools nationwide.</span>
              </div>
              <Button to="/about" variant="gold" size="sm" icon={ChevronRight}>
                View Complete Merit List
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Courses Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="custom-container">
          <SectionTitle
            badge="Targeted Defense Programs"
            title="Entrance Preparation Courses"
            subtitle="Curated, result-driven training modules tailored specifically to the syllabus, exam pattern, and marking scheme of premier defense feeder institutions."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCourseFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  courseFilter === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/courses" variant="outline" size="lg" icon={ArrowRight}>
              Explore All Course Syllabi & Fee Structures
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Leadership / Director Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="custom-container">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Top decorative badge */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Director Image */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden ring-4 ring-gold-400 shadow-2xl">
                    <img
                      src={leadershipData.director.image}
                      alt={leadershipData.director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 bg-gold-500 text-navy-950 text-xs font-black uppercase px-3 py-1 rounded-full shadow">
                    Ex-Army Officer
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {leadershipData.director.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gold-400 mt-1">
                  {leadershipData.director.position}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  {leadershipData.director.qualifications}
                </p>
              </div>

              {/* Director Message */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Leadership Message</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-heading">
                  "We Don't Just Teach; We Forge Leaders of Honor and Courage."
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic border-l-2 border-gold-500 pl-4 py-1">
                  "{leadershipData.director.message}"
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                  {leadershipData.director.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button to="/about" variant="gold" size="md">
                    Meet Our Academic Faculty
                  </Button>
                  <Button onClick={onOpenEnquiry} variant="outlineWhite" size="md">
                    Request Director Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="custom-container">
          <SectionTitle
            badge="The Doon Advantage"
            title="Why Parents Across India Trust Our Academy"
            subtitle="A systematic, scientific preparation blueprint combining deep conceptual clarity, daily speed drills, physical rigor, and moral ethics."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((feat, idx) => (
              <FeatureCard key={idx} feature={feat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-Step Admission Timeline */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-100">
        <div className="custom-container">
          <SectionTitle
            badge="Simple 4-Step Admission"
            title="How to Enroll Your Child"
            subtitle="Transparent, guided admission process designed to assess child potential and place them in the ideal training batch."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {admissionProcessSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative group hover:bg-navy-900 hover:text-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-gold-500 mb-3 font-heading">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 group-hover:text-white mb-2 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button onClick={onOpenEnquiry} variant="gold" size="lg">
              Start Online Registration Now
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="custom-container">
          <SectionTitle
            badge="Verified Parent Feedback"
            title="What Parents & Cadets Say About Us"
            subtitle="Hear from families who entrusted us with their child's aspirations and witnessed the transformation firsthand."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.slice(0, 3).map((item, idx) => (
              <TestimonialCard key={item.id} testimonial={item} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/testimonials" variant="outline" size="md" icon={ArrowRight}>
              Read All Verified Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* 10. High-Impact Admission CTA Banner */}
      <section className="py-16 bg-navy-950 text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="custom-container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Limited Intake: Only 35 Cadets per Batch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Ready to Begin Your Cadet's Journey to Defense Leadership?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Admissions for the upcoming 2025-26 academic batch are now open. Seats are filled on a first-come, first-evaluated basis following the diagnostic aptitude test.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onOpenEnquiry}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto shadow-xl hover:shadow-gold-glow"
              icon={ArrowRight}
            >
              Apply Online for Admission
            </Button>
            <Button
              to="/contact"
              variant="outlineWhite"
              size="lg"
              className="w-full sm:w-auto"
            >
              Contact Admissions Cell
            </Button>
          </div>
        </div>
      </section>

      {/* 11. Quick Contact / Campus Location Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>Visit Our Campus in Dehradun</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading">
                Schedule an In-Person Campus & Hostel Tour
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Parents are welcome to visit our campus on Chakrata Road, Dehradun. Inspect our smart classrooms, obstacle training ground, separate residential wings, dining mess, and meet our faculty in person.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-navy-950 flex items-center gap-1.5 mb-1">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span>Campus Visiting Hours</span>
                  </div>
                  <div>Monday to Saturday: 9:00 AM – 5:00 PM</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-navy-950 flex items-center gap-1.5 mb-1">
                    <PhoneCall className="w-4 h-4 text-gold-500" />
                    <span>Admission Hotline</span>
                  </div>
                  <div>+91 97600 12345 / 0135-2700000</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 justify-center items-center text-center p-6 bg-navy-900 rounded-2xl text-white">
              <Shield className="w-12 h-12 text-gold-400 mb-2" />
              <h4 className="text-lg font-bold">Have Questions About Age Eligibility?</h4>
              <p className="text-xs text-slate-300">
                Check whether your child qualifies for Class 6 or Class 9 entrance in AISSEE, RIMC, or RMS.
              </p>
              <Button onClick={onOpenEnquiry} variant="gold" size="md" className="w-full mt-2">
                Check Eligibility Free
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
