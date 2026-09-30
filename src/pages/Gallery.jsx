import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Eye, Sparkles, Filter } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Lightbox from '../components/Lightbox';
import Button from '../components/Button';
import { galleryCategories, galleryItems } from '../data/gallery';

export default function Gallery({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1920&q=80"
            alt="Gallery Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        </div>

        <div className="custom-container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Campus Life & Cadet Activities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-white">
            Photo & Activity Gallery
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Glimpse into everyday cadet life at Doon Sainik School—from early morning parade drills to intense digital classroom sessions and obstacle course endurance.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="custom-container">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="custom-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card-hover cursor-pointer border border-slate-100 aspect-[4/3] bg-navy-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white" />

                {/* Permanent Category Badge */}
                <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                  {item.category}
                </div>

                {/* Content on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white pointer-events-none">
                  <h4 className="text-base font-bold leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-gold-400 font-semibold">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button onClick={onOpenEnquiry} variant="gold" size="lg">
              Visit Campus & Experience It in Person
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        currentImage={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={lightboxIndex > 0}
        hasNext={lightboxIndex < filteredItems.length - 1}
      />
    </div>
  );
}
