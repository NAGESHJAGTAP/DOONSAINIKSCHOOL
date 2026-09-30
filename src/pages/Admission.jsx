import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  Download,
  Shield,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { admissionProcessSteps } from '../data/features';

export default function Admission({ onOpenEnquiry }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const eligibilityData = [
    {
      exam: "Sainik School (AISSEE Class 6)",
      age: "10 to 12 Years as of March 31st",
      gender: "Boys & Girls",
      education: "Studying in or passed Class 5th",
      testSubjects: "Maths, Intelligence, English, GK (300 Marks)"
    },
    {
      exam: "Sainik School (AISSEE Class 9)",
      age: "13 to 15 Years as of March 31st",
      gender: "Boys & Girls (in select schools)",
      education: "Studying in or passed Class 8th",
      testSubjects: "Maths, Intelligence, English, Gen Science, SST (400 Marks)"
    },
    {
      exam: "RIMC Dehradun (Class 8 Entry)",
      age: "11.5 to 13 Years as of entry term",
      gender: "Boys & Girls",
      education: "Studying in Class 7th or passed Class 7th",
      testSubjects: "English (125), Maths (200), GK (75), Viva (50)"
    },
    {
      exam: "RMS Military Schools (Class 6)",
      age: "10 to 12 Years as of March 31st",
      gender: "Boys & Girls",
      education: "Passed Class 5th",
      testSubjects: "Intelligence, GK, Maths, English (Qualifying) + Interview"
    },
    {
      exam: "RMS Military Schools (Class 9)",
      age: "13 to 15 Years as of March 31st",
      gender: "Boys & Girls",
      education: "Passed Class 8th",
      testSubjects: "Paper 1 (English, Hindi, SST) & Paper 2 (Maths, Science) + Interview"
    }
  ];

  const documents = [
    { name: "Birth Certificate", desc: "Issued by Municipal Corporation or Gram Panchayat (mandatory proof of age)." },
    { name: "Student & Parents' Aadhaar Cards", desc: "Original and self-attested photocopies for identity and address verification." },
    { name: "Previous School Transfer Certificate (TC)", desc: "Countersigned by District Education Officer (DEO) or Block Education Officer (BEO)." },
    { name: "Previous Year Academic Marksheet / Report Card", desc: "Attested copy proving current class enrollment or passing status." },
    { name: "Domicile / Resident Certificate", desc: "Required for state quota reservation in AISSEE and RMS examinations." },
    { name: "Caste / Category Certificate (if applicable)", desc: "SC/ST/OBC-NCL/Defense Service Certificate for reservation claim." },
    { name: "8 Passport Size Color Photographs", desc: "Recent photos of the candidate in formal white shirt with light background." },
    { name: "Medical Fitness Certificate", desc: "Basic fitness certificate from a registered medical practitioner (MBBS)." }
  ];

  const faqs = [
    {
      q: "What is the procedure to apply for hostel admission?",
      a: "Parents can apply online through our enquiry form or visit the Dehradun campus. The student will undertake a short diagnostic evaluation to understand current academic standing. Once approved, hostel allotment and uniform kits are issued."
    },
    {
      q: "Can girl students join the residential coaching batch?",
      a: "Absolutely. Doon Sainik School has a separate, highly secured girls' hostel wing managed by resident female wardens with round-the-clock security and dedicated amenities."
    },
    {
      q: "What is included in the residential fee package?",
      a: "The residential package covers school tuition, daily 8-hour coaching classes, study kits, weekly test papers, hostel accommodation, nutritious meals (breakfast, lunch, evening milk/snacks, dinner), physical drill, and laundry."
    },
    {
      q: "When do fresh academic batches start?",
      a: "Fresh batches commence every year in April, July, and September. Fast-track 60-day crash batches commence in November for the January AISSEE exam."
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-navy-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1920&q=80"
            alt="Admission Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        </div>

        <div className="custom-container relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-400/30">
            <Calendar className="w-3.5 h-3.5" />
            <span>Academic Session 2025-26</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-white">
            Admission & Enrollment Process
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Clear, transparent guidelines for admission to our residential and day-boarding training programs in Dehradun.
          </p>
        </div>
      </section>

      {/* 4-Step Process Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="custom-container">
          <SectionTitle
            badge="Roadmap to Admission"
            title="Step-by-Step Enrollment Guide"
            subtitle="Follow these four straightforward steps to secure your child's seat in our upcoming training batch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcessSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative group hover:border-gold-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center font-extrabold text-xl mb-4 font-heading">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 text-xs font-semibold text-gold-600 flex items-center gap-1">
                  <span>Phase {idx + 1} of 4</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-auto" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button onClick={onOpenEnquiry} variant="gold" size="lg" icon={ArrowRight}>
              Fill Online Admission Enquiry Form
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility Matrix Table */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="custom-container">
          <SectionTitle
            badge="Age & Qualification Matrix"
            title="Eligibility Criteria for Defense Schools"
            subtitle="Verify child eligibility across AISSEE, RIMC, and RMS exams before submitting the application."
          />

          <div className="bg-white rounded-3xl shadow-soft border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="p-4 sm:p-5">Examination</th>
                    <th className="p-4 sm:p-5">Age Criteria</th>
                    <th className="p-4 sm:p-5">Gender</th>
                    <th className="p-4 sm:p-5">Academic Class</th>
                    <th className="p-4 sm:p-5">Test Format</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {eligibilityData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-navy-950">
                        {row.exam}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-700 font-semibold text-gold-700">
                        {row.age}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-700">
                        {row.gender}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-700">
                        {row.education}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600">
                        {row.testSubjects}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Checklist */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="custom-container">
          <SectionTitle
            badge="Documentation Checklist"
            title="Required Documents for Admission"
            subtitle="Please prepare both original documents and two sets of self-attested photocopies for verification."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h4 className="text-sm font-bold text-navy-950">
                      {doc.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Note on Age Verification:</strong> Birth certificates issued more than one year after the child's birth will undergo strict scrutiny in accordance with Ministry of Defence and Sainik Schools Society directives.
            </div>
          </div>
        </div>
      </section>

      {/* Admission FAQs */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="custom-container max-w-4xl mx-auto">
          <SectionTitle
            badge="Common Questions"
            title="Admission FAQs"
            subtitle="Answers to the most frequent inquiries from parents regarding admissions, fees, and hostel life."
          />

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-sm sm:text-base text-navy-950 hover:bg-slate-50 transition-colors"
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
      </section>
    </div>
  );
}
