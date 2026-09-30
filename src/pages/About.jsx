import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Target,
  Eye,
  Heart,
  BookOpen,
  Users,
  CheckCircle,
  Home,
  CheckCircle2,
  Building,
  GraduationCap
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { leadershipData } from '../data/features';
import { statisticsData } from '../data/achievements';
import StatsCounter from '../components/StatsCounter';

export default function About({ onOpenEnquiry }) {
  const values = [
    {
      title: "Discipline First",
      desc: "Punctuality, neatness, physical stamina, and respect for authority form the bedrock of cadet life.",
      icon: Shield
    },
    {
      title: "Academic Rigor",
      desc: "Deep conceptual foundations in mathematics, spatial reasoning, and fluent English articulation.",
      icon: BookOpen
    },
    {
      title: "Unwavering Integrity",
      desc: "Honesty under pressure, sportsmanship in defeat, and humility in victory.",
      icon: Heart
    },
    {
      title: "Patriotic Commitment",
      desc: "Inculcating a lifelong devotion to national service, duty, and defense preparedness.",
      icon: Target
    }
  ];

  const facilities = [
    {
      title: "Separate Secure Hostels",
      desc: "Dedicated residential wings for boys and girls with resident wardens, 24/7 CCTV surveillance, and solar hot water.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Digital Classrooms",
      desc: "Air-conditioned classrooms equipped with interactive visual screens, audio-visual models, and ergonomic seating.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Army Obstacle Training Ground",
      desc: "Realistic GTO ground featuring 6-ft wall climb, tiger leap, rope climbing, and balancing beams guided by certified Army PTIs.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hygienic Dining Mess & Dairy",
      desc: "FSSAI certified kitchen serving balanced high-protein meals, fresh green vegetables, seasonal fruits, and pure cow milk.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1920&q=80"
            alt="Academy Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        </div>

        <div className="custom-container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <Shield className="w-3.5 h-3.5" />
            <span>Excellence Since 2012</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-white">
            Nurturing Tomorrow's Military Commanders & National Leaders
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Doon Sainik School is recognized as northern India's premier residential training establishment for AISSEE, RIMC Dehradun, and Rashtriya Military Schools.
          </p>
        </div>
      </section>

      {/* Key Stats Counter */}
      <section className="relative -mt-10 z-20 custom-container">
        <StatsCounter stats={statisticsData} />
      </section>

      {/* Our Story & Heritage */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <SectionTitle
                badge="Our Legacy"
                title="A Tradition of Rigor, Honor & Unrivaled Results"
                subtitle="Founded in the lush foothills of Dehradun, Uttarakhand—the cradle of India's military training academies."
                align="left"
              />

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Doon Sainik School was founded with a clear, uncompromising mandate: to provide structured, ethical, and high-result entrance exam preparation for young students seeking entry into India's elite defense feeder institutions.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dehradun has long been revered as India's premier educational haven, home to the Indian Military Academy (IMA) and Rashtriya Indian Military College (RIMC). Drawing upon this rich heritage, our academy immerses children in an atmosphere where discipline is celebrated, curiosity is stimulated, and character is forged.
              </p>

              <div className="pt-2 border-l-4 border-gold-500 pl-4 py-1 italic text-navy-950 font-medium text-sm sm:text-base">
                "We don't simply train children to pass tests; we cultivate the habits of mind and physical fortitude that accompany them for a lifetime of leadership."
              </div>

              <div className="pt-2">
                <Button onClick={onOpenEnquiry} variant="gold" size="md">
                  Request Information Kit
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                  alt="Faculty teaching students"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="custom-container">
          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-900 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-3 font-heading">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To democratize top-tier defense entrance coaching for every deserving student across India, transforming latent potential into merit-list selections through scientific pedagogy, personal mentorship, and unwavering discipline.
                </p>
              </div>
            </div>

            <div className="bg-navy-950 rounded-3xl p-8 text-white shadow-xl border border-navy-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-5 border border-gold-400/30">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  To be acknowledged as the benchmark defense preparatory institution in India, producing disciplined, intellectually sharp, and emotionally resilient youth who serve the nation with distinction.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <SectionTitle
            badge="Institutional Pillars"
            title="Our Four Core Values"
            subtitle="The fundamental principles guiding every classroom lesson, drill session, and faculty interaction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 hover:border-gold-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-navy-950 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Infrastructure */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="custom-container">
          <SectionTitle
            badge="World-Class Environment"
            title="Campus & Residential Infrastructure"
            subtitle="Designed to provide an immersive, distraction-free environment that promotes focus, camaraderie, and physical vitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-100 hover:shadow-card transition-all group flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-navy-950 mb-2">
                      {fac.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="custom-container">
          <SectionTitle
            badge="Governing Faculty"
            title="Guided by Military & Academic Leadership"
            subtitle="Our advisory board and mentors bring decades of frontline military and competitive pedagogical experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Director */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-gold-400 mb-4 shadow">
                <img
                  src={leadershipData.director.image}
                  alt={leadershipData.director.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-950">
                {leadershipData.director.name}
              </h3>
              <p className="text-xs font-semibold text-gold-600 mb-1">
                {leadershipData.director.position}
              </p>
              <p className="text-xs text-slate-500 mb-4">
                {leadershipData.director.qualifications}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "{leadershipData.director.message.slice(0, 160)}..."
              </p>
            </div>

            {/* Principal / Dean */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-navy-600 mb-4 shadow">
                <img
                  src={leadershipData.principal.image}
                  alt={leadershipData.principal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-950">
                {leadershipData.principal.name}
              </h3>
              <p className="text-xs font-semibold text-gold-600 mb-1">
                {leadershipData.principal.position}
              </p>
              <p className="text-xs text-slate-500 mb-4">
                {leadershipData.principal.qualifications}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "{leadershipData.principal.message}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="custom-container max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Visit Our Dehradun Campus
          </h3>
          <p className="text-sm text-slate-300">
            Meet our teachers, inspect our hostels, and take a free diagnostic aptitude evaluation.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button onClick={onOpenEnquiry} variant="gold" size="md">
              Book Campus Tour
            </Button>
            <Button to="/contact" variant="outlineWhite" size="md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
