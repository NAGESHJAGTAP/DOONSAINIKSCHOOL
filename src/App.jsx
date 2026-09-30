import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import EnquiryModal from './components/EnquiryModal';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Admission from './pages/Admission';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryCourse, setEnquiryCourse] = useState('Admission 2025-26');

  const handleOpenEnquiry = (courseName = 'Admission 2025-26') => {
    setEnquiryCourse(courseName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-gold-500 selection:text-navy-950">
        <ScrollToTop />
        <Header onOpenEnquiry={() => handleOpenEnquiry()} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses" element={<Courses onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses/:courseId" element={<CourseDetails onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/admission" element={<Admission onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/gallery" element={<Gallery onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/testimonials" element={<Testimonials onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Global Admission & Course Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={handleCloseEnquiry}
          courseTitle={enquiryCourse}
        />
      </div>
    </Router>
  );
}
