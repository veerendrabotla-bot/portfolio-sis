/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { X, Printer, Phone, Mail, Linkedin, MapPin, Globe } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const printAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-fade-in no-print"
      onClick={onClose}
      id="cv-modal-backdrop"
    >
      <div 
        className="bg-white border border-[#CBD5E1] rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[92vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
        id="cv-modal-content"
      >
        {/* Top Control Bar */}
        <div className="bg-[#0F172A] text-white p-4 border-b border-slate-800 flex justify-between items-center no-print">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold tracking-widest text-[#38BDF8] uppercase">
              OFFICIAL PRINTABLE CV
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-sm"
              id="cv-print-btn"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
              aria-label="Close CV"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Canvas */}
        <div className="overflow-y-auto p-6 sm:p-8 bg-slate-100 flex-grow" id="cv-scroll-wrapper">
          
          {/* Printable White Sheet */}
          <div 
            ref={printAreaRef}
            className="bg-white border border-[#CBD5E1] rounded-md p-6 sm:p-12 shadow-lg max-w-3xl mx-auto text-[#0F172A] print-border font-serif"
            style={{ 
              minHeight: '297mm',
              fontFamily: '"Times New Roman", Times, Georgia, serif'
            }}
            id="printable-cv-sheet"
          >
            
            {/* Header section exactly as the PDF */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-extrabold tracking-wide uppercase text-slate-900 mb-1 leading-none">
                DHANYA BOTLA
              </h1>
              <p className="text-[15px] font-medium text-slate-700 italic mb-3">
                Civil Engineering Undergraduate
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 text-[12px] sm:text-[13px] text-slate-800 mb-1">
                <span className="flex items-center gap-1 font-sans">
                  <Phone className="w-3.5 h-3.5 text-slate-800" fill="currentColor" />
                  <span>+91 9390948557</span>
                </span>
                <span className="flex items-center gap-1 font-sans">
                  <Mail className="w-3.5 h-3.5 text-slate-800" fill="currentColor" />
                  <span>dhanyabotla@gmail.com</span>
                </span>
                <a 
                  href="https://www.linkedin.com/in/dhanya-botla" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 font-sans text-slate-800 hover:text-[#2563EB] hover:underline"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-800" fill="currentColor" />
                  <span>linkedin.com/in/dhanya-botla</span>
                </a>
                <a 
                  href="https://portfolio-sis-teal.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 font-sans text-slate-800 hover:text-[#2563EB] hover:underline"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-800" />
                  <span>portfolio-sis-teal.vercel.app</span>
                </a>
              </div>
              
              <div className="text-[13px] text-slate-800 flex justify-center items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-800" />
                <span>Surampalem, Gandepalli, Andhra Pradesh</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Professional Summary
              </h2>
              <p className="text-[13.5px] text-slate-800 leading-relaxed text-justify">
                Civil Engineering undergraduate with strong AutoCAD skills and hands-on layout approval experience.
                Knowledgeable in BIM, Civil 3D, Revit, and ETABS. Passionate about infrastructure development and
                engineering design.
              </p>
            </div>

            {/* Education Section */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Education
              </h2>
              <div className="space-y-3.5 text-[13.5px] text-slate-800">
                <div className="flex justify-between items-start">
                  <span className="w-24 shrink-0 font-medium">2023–2027</span>
                  <div className="flex-grow pr-4">
                    <span className="font-bold text-slate-900">B.Tech Civil Engineering</span>, Aditya College of Engineering and Technology,
                    <div className="text-[12.5px] text-slate-700 italic">Aditya University</div>
                  </div>
                  <span className="font-bold text-right shrink-0">CGPA 7.83</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="w-24 shrink-0 font-medium">2021–2023</span>
                  <div className="flex-grow pr-4">
                    <span className="font-bold text-slate-900">Intermediate</span>, KSN Junior College (BIEAP)
                  </div>
                  <span className="font-bold text-right shrink-0">82.1%</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="w-24 shrink-0 font-medium">2020–2021</span>
                  <div className="flex-grow pr-4">
                    <span className="font-bold text-slate-900">SSC</span>, Sri Vivekananda Talent School
                  </div>
                  <span className="font-bold text-right shrink-0">574 Marks (95.6%)</span>
                </div>
              </div>
            </div>

            {/* Internship Section */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Internship
              </h2>
              <div className="text-[13.5px] text-slate-800">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-slate-900">Civil Engineering Intern, RUDA</span>
                  <span className="font-medium text-slate-800">June – July 2026 (2 Months)</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Prepare and modify AutoCAD layouts.</li>
                  <li>Review engineering drawings.</li>
                  <li>Assist layout approval documentation.</li>
                  <li>Support planning verification.</li>
                </ul>
              </div>
            </div>

            {/* Academic Project Section */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Academic Project
              </h2>
              <div className="text-[13.5px] text-slate-800">
                <h3 className="font-bold text-slate-900 mb-1">
                  Planning and Design of G+1 Commercial Hotel Building (L&T BIM Internship)
                </h3>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Designed complete G+1 hotel using AutoCAD.</li>
                  <li>Prepared plans and layouts.</li>
                  <li>Applied BIM concepts and engineering standards.</li>
                </ul>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Technical Skills
              </h2>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">
                AutoCAD, Civil 3D, Revit, ETABS, ArcGIS Pro, BIM, Surveying, Total Station, Quantity Estimation, Building Planning, MS Office.
              </p>
            </div>

            {/* Certifications Section */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Certifications
              </h2>
              <p className="text-[13.5px] text-slate-800 leading-relaxed text-justify">
                Building Information Modeling (L&T EduTech, July 30 – Nov 20, 2025); AutoCAD 2026; Revit 2022; ArcGIS Pro; Construction Management; Project Management Foundations: Risk.
              </p>
            </div>

            {/* Achievements Section */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Achievements
              </h2>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">
                Paper Presentation, NSS, Hackathon, Technical Competitions, College Events.
              </p>
            </div>

            {/* Languages Section */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Languages
              </h2>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">
                English, Telugu.
              </p>
            </div>

            {/* Hobbies Section */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-900 pb-0.5 mb-2 section-divider">
                Hobbies
              </h2>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">
                Reading, Music, Learning New Technologies.
              </p>
            </div>

          </div>

        </div>

        {/* Modal Bottom action block */}
        <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] p-4 flex justify-between items-center no-print">
          <span className="text-[10px] text-[#64748B] font-mono font-bold uppercase">
            Official Academic CV Standard Layout
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-md cursor-pointer transition-colors"
            id="close-cv-modal-btn"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
