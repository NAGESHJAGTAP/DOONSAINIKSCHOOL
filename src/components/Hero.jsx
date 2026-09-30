import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield, Award, CheckCircle, ArrowRight, Play } from 'lucide-react';
import Button from './Button';
import { heroSlides } from '../data/features';

export default function Hero({ onOpenEnquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden bg-navy-950 text-white min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Deep Navy Gradient Overlay for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="custom-container relative z-10 py-12 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 backdrop-blur-md"
          >
            <Shield className="w-4 h-4 text-gold-400" />
            <span>{slide.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            key={`heading-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-heading"
          >
            {slide.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            {slide.subtitle}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button
              to={slide.ctaPrimaryLink}
              variant="gold"
              size="lg"
              className="shadow-xl hover:shadow-gold-glow"
              icon={ArrowRight}
            >
              {slide.ctaPrimary}
            </Button>

            <Button
              to={slide.ctaSecondaryLink}
              variant="outlineWhite"
              size="lg"
              className="backdrop-blur-sm"
              onClick={slide.ctaSecondaryLink === '/admission' ? onOpenEnquiry : undefined}
            >
              {slide.ctaSecondary}
            </Button>
          </motion.div>

          {/* Micro Trust Indicators */}
          <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Hostel Facility</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ex-Army Officer Faculty</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1,450+ Selections</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls: Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-950/60 hover:bg-gold-500 hover:text-navy-950 text-white flex items-center justify-center border border-white/20 transition-all focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-950/60 hover:bg-gold-500 hover:text-navy-950 text-white flex items-center justify-center border border-white/20 transition-all focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-navy-950/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? 'w-8 h-2.5 bg-gold-400'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
