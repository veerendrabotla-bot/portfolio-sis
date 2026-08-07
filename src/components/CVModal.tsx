/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { X, Printer, Download, MapPin, Mail, Phone, GraduationCap, Building, Briefcase, Award, CheckSquare, Ruler } from 'lucide-react';
import { timelineData, skillsData, certificationsData } from '../data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const printAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printContent = printAreaRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (printContent) {
      // Create an elegant print-only style setup
      const style = document.createElement('style');
      style.innerHTML = `
        @media print {
          body {
            background: white !important;
            color: black !important;
            font-family: sans-serif;
            padding: 20px;
          }
          .no-print {
            display: none !important;
          }
          .print-border {
            border: 1px solid #000 !important;
          }
          .badge {
            border: 1px solid #333 !important;
            background: none !important;
            color: black !important;
          }
        }
      `;
      document.head.appendChild(style);
      window.print();
      document.head.removeChild(style);
    }
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
            <Ruler className="w-5 h-5 text-[#38BDF8]" />
            <span className="font-mono text-xs font-bold tracking-widest text-[#38BDF8] uppercase">
              ARCHITECTURAL CV GENERATOR v1.2
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
            className="bg-white border border-[#CBD5E1] rounded-md p-6 sm:p-10 shadow-lg max-w-3xl mx-auto text-[#0F172A] font-sans print-border"
            style={{ minHeight: '297mm' }} // A4 height ratio
            id="printable-cv-sheet"
          >
            
            {/* CV Title Block / Blueprint Header */}
            <div className="border-4 border-double border-[#0F172A] p-4 mb-6 relative">
              {/* Corner markings */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#0F172A]"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#0F172A]"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#0F172A]"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#0F172A]"></div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-none text-[#0F172A]">
                    DHANYA BOTLA
                  </h1>
                  <p className="text-xs font-mono font-bold text-[#2563EB] tracking-wider uppercase mt-1">
                    Civil Engineering Undergraduate & BIM / CAD Specialist
                  </p>
                </div>
                
                <div className="text-left sm:text-right font-mono text-[10px] text-[#475569] space-y-0.5 border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0 sm:pl-4">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Surampalem, AP, India</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>dhanyabotla@gmail.com</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>+91 9390948557</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-bold text-[#0F172A] tracking-widest uppercase border-b-2 border-[#0F172A] pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed text-justify">
                Civil Engineering undergraduate with strong AutoCAD skills and hands-on layout approval experience. 
                Knowledgeable in Building Information Modeling (BIM), Civil 3D, Revit, and ETABS. 
                Passionate about structural infrastructure development, town planning regulations, and advanced architectural modeling.
              </p>
            </div>

            {/* Two-Column Grid for Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
              
              {/* Left Column: Education & Experience (md: col-span-7) */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Experience section */}
                <div>
                  <h2 className="text-xs font-mono font-bold text-[#0F172A] tracking-widest uppercase border-b-2 border-[#0F172A] pb-1 mb-3">
                    Practical Experience
                  </h2>
                  
                  {timelineData.filter(e => e.type === 'experience').map((exp) => (
                    <div key={exp.id} className="space-y-1.5">
                      <div className="flex justify-between items-start text-xs font-bold text-[#0F172A]">
                        <span className="text-sm font-extrabold">{exp.title}</span>
                        <span className="font-mono text-[10px] text-[#2563EB]">{exp.period}</span>
                      </div>
                      <div className="text-[11px] font-semibold text-[#475569] leading-none">
                        {exp.subtitle} • {exp.institution}
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-[#334155] pt-1">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="leading-relaxed">{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Academic Projects */}
                <div>
                  <h2 className="text-xs font-mono font-bold text-[#0F172A] tracking-widest uppercase border-b-2 border-[#0F172A] pb-1 mb-3">
                    Key Architectural Projects
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-start text-xs font-bold text-[#0F172A]">
                        <span className="text-sm font-extrabold">Planning & Design of G+1 Commercial Hotel</span>
                        <span className="font-mono text-[10px] text-[#2563EB]">Ongoing</span>
                      </div>
                      <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                        L&T BIM Internship Initiative
                      </div>
                      <p className="text-xs text-[#334155] leading-relaxed mt-1 text-justify">
                        Designed a complete G+1 hotel using AutoCAD and Revit. Prepared detailed column layout schedules, 2D floor framing arrangements, and electrical-plumbing vertical shafts adhering strictly to Indian National Building Codes (NBC 2016).
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Education, Skills, and Languages (md: col-span-5) */}
              <div className="md:col-span-5 space-y-6">
                
                {/* Education section */}
                <div>
                  <h2 className="text-xs font-mono font-bold text-[#0F172A] tracking-widest uppercase border-b-2 border-[#0F172A] pb-1 mb-3">
                    Academic Education
                  </h2>
                  <div className="space-y-3.5">
                    {timelineData.filter(e => e.type === 'education').map((edu) => (
                      <div key={edu.id} className="text-xs">
                        <div className="flex justify-between items-start font-bold text-[#0F172A]">
                          <span className="font-extrabold leading-tight">{edu.title}</span>
                          <span className="font-mono text-[9px] text-[#2563EB] shrink-0">{edu.period}</span>
                        </div>
                        <p className="text-[10px] text-[#475569] font-medium leading-tight mt-0.5">{edu.subtitle}</p>
                        {edu.grade && (
                          <span className="inline-block mt-1 font-mono text-[10px] font-bold bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[#166534]">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills Matrix */}
                <div>
                  <h2 className="text-xs font-mono font-bold text-[#0F172A] tracking-widest uppercase border-b-2 border-[#0F172A] pb-1 mb-3">
                    Technical Skill Index
                  </h2>
                  <div className="space-y-2.5">
                    {skillsData.map((category) => (
                      <div key={category.title} className="text-xs">
                        <span className="font-bold text-[#0F172A] text-[11px] block mb-1">
                          {category.title}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {category.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="text-[9px] font-mono font-bold bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded text-[#334155] badge"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Certifications and Ribbons */}
            <div className="mb-6">
              <h2 className="text-xs font-mono font-bold text-[#0F172A] tracking-widest uppercase border-b-2 border-[#0F172A] pb-1 mb-3">
                Professional Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {certificationsData.map((cert) => (
                  <div key={cert.id} className="border border-slate-200 rounded p-2.5 bg-slate-50">
                    <div className="flex justify-between items-center font-bold text-[#0F172A]">
                      <span className="text-[11px] font-extrabold">{cert.title}</span>
                      <span className="font-mono text-[9px] text-[#2563EB]">{cert.year}</span>
                    </div>
                    <p className="text-[10px] text-[#475569] mt-0.5">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements, Personal, and Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E2E8F0]">
              <div>
                <h3 className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider block mb-1.5">
                  Core Achievements & Co-Curriculars:
                </h3>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Paper Presentation, National Service Scheme (NSS), Hackathon finalist, Technical Civil Competitions, and major college technical events.
                </p>
              </div>
              <div>
                <h3 className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider block mb-1.5">
                  Languages spoken:
                </h3>
                <p className="text-xs text-[#334155] leading-relaxed font-semibold">
                  English (Professional proficiency), Telugu (Native speaker).
                </p>
              </div>
            </div>

            {/* Print Footer Watermark */}
            <div className="mt-8 pt-4 border-t-2 border-dashed border-[#E2E8F0] text-center text-[9px] font-mono text-[#94A3B8]">
              AUTHENTICATED DIGITAL ARCHITECTURAL RESUME • PORTFOLIO OF DHANYA BOTLA © 2026
            </div>

          </div>

        </div>

        {/* Modal Bottom action block */}
        <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] p-4 flex justify-between items-center no-print">
          <span className="text-[10px] text-[#64748B] font-mono font-bold uppercase">
            A4 Standard Printable Scale Layout
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
