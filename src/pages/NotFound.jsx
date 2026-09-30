import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, BookOpen, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-slate-200">
        <div className="w-20 h-20 rounded-3xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200 shadow-sm">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div>
          <span className="text-4xl sm:text-5xl font-extrabold text-navy-950 font-heading block mb-2">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-navy-950 mb-2">
            Cadet, You've Navigated Off-Grid!
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or document you are trying to reach does not exist or has been relocated to another academic wing.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="gold" size="md" className="w-full sm:w-auto" icon={Home} iconPosition="left">
            Return to Home
          </Button>
          <Button to="/courses" variant="outline" size="md" className="w-full sm:w-auto" icon={BookOpen} iconPosition="left">
            View All Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
