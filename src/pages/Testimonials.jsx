import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, MessageSquare, Award, Play } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials({ onOpenEnquiry }) {
  const [filter, setFilter] = useState('All');

  const filteredTestimonials = filter === 'All'
    ? testimonialsData
    : testimonialsData.filter((t) => t.category === filter);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
            alt="Testimonials Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        </div>

        <div className="custom-container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Success Stories & Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-white">
            Words of Trust from Parents & Cadets
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Read unedited feedback from parents across India whose children trained at Doon Sainik School and proudly secured admission into Sainik Schools, RIMC, and RMS.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="custom-container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['All', 'Parent', 'Student'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Reviews (5.0 ★)' : `${cat} Feedback`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTestimonials.map((t, idx) => (
              <TestimonialCard key={t.id} testimonial={t} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Spotlight Card */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="custom-container">
          <SectionTitle
            badge="Video Stories"
            title="Watch Parent Interactions & Campus Feedback"
            subtitle="Authentic interviews with parents on results day and during campus parent-teacher meetings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Video Mockup 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-200 group">
              <div className="relative aspect-video bg-navy-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Parent Interview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-navy-950 mb-1">
                  How Cadet Aarav Secured AIR 3 in AISSEE
                </h4>
                <p className="text-xs text-slate-500">
                  Interview with Col. Rajeshwar Singh (Retd.) regarding daily study routine and hostel discipline.
                </p>
              </div>
            </div>

            {/* Video Mockup 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-200 group">
              <div className="relative aspect-video bg-navy-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80"
                  alt="Cadet Journey"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-navy-950 mb-1">
                  Cracking RIMC Dehradun: Cadet Priyanshu's Journey
                </h4>
                <p className="text-xs text-slate-500">
                  Sharing the strategy for subjective mathematics proofs and English essay writing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button onClick={onOpenEnquiry} variant="gold" size="lg">
              Start Your Child's Success Story With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
