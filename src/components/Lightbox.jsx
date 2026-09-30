import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({
  isOpen,
  currentImage,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasPrev, hasNext, onClose, onPrev, onNext]);

  // Lock background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {hasPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous Image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-20"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next Image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-20"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        )}

        {/* Image Content Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy-900 max-h-[70vh] flex items-center justify-center">
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="max-h-[70vh] w-auto max-w-full object-contain"
            />
          </div>

          <div className="mt-4 text-center text-white max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-400/20">
              {currentImage.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold mt-2 text-white">
              {currentImage.title}
            </h3>
            {currentImage.description && (
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {currentImage.description}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
