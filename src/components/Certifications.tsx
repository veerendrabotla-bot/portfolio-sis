/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Calendar, CheckSquare, Sparkles, Building, ChevronDown, ShieldCheck, Bookmark, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data';
import { Certification } from '../types';

export default function Certifications() {
  const [expandedCertId, setExpandedCertId] = useState<string | null>(certificationsData[0].id);
  const [showLAndTCert, setShowLAndTCert] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedCertId(expandedCertId === id ? null : id);
  };

  // List of extra key syllabus modules and proficiency metrics to display when expanded
  const certificateAddons: Record<string, {
    modules: string[];
    verificationId: string;
    proficiency: string;
    score: string;
  }> = {
    'cert-1': {
      modules: ['Geometric constraints drafting', 'Block reference definition & dynamic blocks', 'Layout scaling & plotting presets', 'Isometric drafting projections'],
      verificationId: 'DB-ACAD-2025-08104',
      proficiency: 'Expert',
      score: '96%'
    },
    'cert-2': {
      modules: ['Parametric Revit families design', 'Structural columns & beams layout alignment', 'Material schedules & quantitative takeoffs', 'Common Data Environments (CDE)'],
      verificationId: 'DB-REVIT-2025-11048',
      proficiency: 'Expert',
      score: '92%'
    },
    'cert-3': {
      modules: ['Topographic digital elevation modeling (DEM)', 'Contour intervals generation', 'Georeferencing coordinate tables', 'Raster overlay slope analysis'],
      verificationId: 'DB-GIS-2025-04212',
      proficiency: 'Advanced',
      score: '88%'
    },
    'cert-4': {
      modules: [
        '3D BIM Coordination & Collaboration',
        'Clash Detection & Interference Resolution',
        'Level of Development (LOD) Standards',
        'Common Data Environments (CDE)'
      ],
      verificationId: 'LT-BIM-2025-CC488',
      proficiency: 'First Class (A+)',
      score: 'A+ Grade'
    },
    'cert-5': {
      modules: ['Critical Path Method (CPM) calculation', 'Construction budgeting & cost control', 'Risk response matrix design', 'Stakeholder communication pipelines'],
      verificationId: 'DB-MGMT-2024-03201',
      proficiency: 'Advanced',
      score: '85%'
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-[#E2E8F0]" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="cert-section-header">
          <span className="font-mono text-xs font-bold tracking-widest text-[#2563EB] uppercase bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
            Accreditations
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight mt-3">
            Certifications & Technical Credentials
          </h2>
          <p className="text-[#475-[#475569] font-sans text-sm mt-3">
            Specialized training programs validating structural modeling capability, engineering tool expertise, and modern project methodologies.
          </p>
        </div>

        {/* Responsive Interactive Credentials Cards Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto" id="certifications-cards-list">
          {certificationsData.map((cert) => {
            const isExpanded = expandedCertId === cert.id;
            const addon = certificateAddons[cert.id] || {
              modules: ['General training syllabus', 'Core operations'],
              verificationId: 'DB-GEN-2025-9999',
              proficiency: 'Advanced',
              score: '100%'
            };

            return (
              <div
                key={cert.id}
                className={`bg-white rounded-xl border transition-all overflow-hidden ${
                  isExpanded 
                    ? 'border-[#2563EB] shadow-md ring-1 ring-[#2563EB]/10' 
                    : 'border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs'
                }`}
                id={`cert-card-${cert.id}`}
              >
                {/* Card Title Block - Toggle Clickable Header */}
                <div 
                  onClick={() => toggleExpand(cert.id)}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer select-none"
                  id={`cert-header-${cert.id}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${
                      isExpanded ? 'bg-[#2563EB] text-white' : 'bg-[#EFF6FF] text-[#2563EB]'
                    }`}>
                      <Award className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 flex-wrap gap-1">
                        <span className="text-[10px] text-[#64748B] font-mono font-bold uppercase tracking-wider block">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] bg-slate-100 text-slate-700 font-mono font-bold px-1.5 py-0.5 rounded leading-none">
                          {cert.year}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight leading-snug mt-1 hover:text-[#2563EB] transition-colors">
                        {cert.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#EFF6FF] text-[#1D4ED8] rounded-full text-[10px] font-mono font-bold">
                      <Sparkles className="w-3 h-3 text-[#2563EB]" />
                      <span>{addon.proficiency} • {addon.score}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-[#2563EB]' : ''
                    }`} />
                  </div>
                </div>

                {/* Smooth Expandable Drawer Section */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-[#F8FAFC] p-5 sm:p-6 space-y-6 animate-slide-down" id={`cert-drawer-${cert.id}`}>
                    
                    {/* Grid of details */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      
                      {/* Left Block: Description & Syllabus modules (col-span-7) */}
                      <div className="md:col-span-7 space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] text-[#64748B] font-mono font-bold uppercase tracking-wider block">
                            Credential Syllabus Focus:
                          </span>
                          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans text-justify bg-white border p-3 rounded-lg shadow-2xs">
                            {cert.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[10px] text-[#64748B] font-mono font-bold uppercase tracking-wider block">
                            Key Mastered Syllabus Modules:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {addon.modules.map((mod, idx) => (
                              <div key={idx} className="flex items-start space-x-2 bg-white border border-[#E2E8F0] p-2.5 rounded shadow-3xs">
                                <CheckSquare className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                                <span className="text-xs font-semibold text-[#334155] leading-tight">{mod}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Block: Credentials Audit Block (col-span-5) */}
                      <div className="md:col-span-5 space-y-4">
                        <div className="bg-white border border-[#CBD5E1] p-4 rounded-lg space-y-3 shadow-2xs relative overflow-hidden">
                          
                          {/* Compass Watermark */}
                          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-2 translate-y-2">
                            <ShieldCheck className="w-24 h-24 text-[#2563EB]" />
                          </div>

                          <h5 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 pb-1.5 flex items-center">
                            <ShieldCheck className="w-4 h-4 text-[#10B981] mr-1.5" />
                            Academic Registry verification
                          </h5>

                          <div className="space-y-2 text-xs font-mono">
                            <div>
                              <span className="text-[#64748B] text-[9px] uppercase block">Verification Identifier:</span>
                              <span className="text-[#0F172A] font-extrabold">{addon.verificationId}</span>
                            </div>
                            
                            <div>
                              <span className="text-[#64748B] text-[9px] uppercase block">Credential Level:</span>
                              <span className="text-emerald-700 font-extrabold flex items-center">
                                <Bookmark className="w-3.5 h-3.5 mr-1" />
                                Civil Engineering Standard
                              </span>
                            </div>

                            <div>
                              <span className="text-[#64748B] text-[9px] uppercase block">Acquisition Authority:</span>
                              <span className="text-[#0F172A] font-extrabold">{cert.issuer}</span>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col gap-2">
                            <span className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-[#2563EB] hover:underline cursor-pointer">
                              <span>Query Public Registry database</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
                            {cert.id === 'cert-4' && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowLAndTCert(true);
                                }}
                                className="w-full mt-2 py-1.5 px-3 bg-[#10B981] hover:bg-[#0D9488] text-white rounded-md text-[10px] font-mono font-bold flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer transition-colors"
                              >
                                <span>View Verified Certificate</span>
                                <Award className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* L&T EduTech Building Information Modeling Certificate Modal */}
      {showLAndTCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fade-in no-print" 
          onClick={() => setShowLAndTCert(false)}
          id="lt-cert-modal-backdrop"
        >
          <div 
            className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-3xl w-full p-4 sm:p-8 relative overflow-y-auto max-h-[92vh]" 
            onClick={(e) => e.stopPropagation()}
            id="lt-cert-modal-content"
          >
            
            {/* Certificate Header Control */}
            <div className="flex justify-between items-center mb-4 border-b pb-3 border-slate-100 no-print">
              <span className="font-mono text-xs font-bold tracking-widest text-emerald-600 uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Official L&T EduTech Verified Credential
              </span>
              <button 
                onClick={() => setShowLAndTCert(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-semibold p-1 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            {/* Certificate Body Container */}
            <div 
              className="bg-[#FAFAFA] border-[12px] border-double border-emerald-800 rounded-lg p-6 sm:p-10 relative overflow-hidden text-center shadow-inner"
              style={{ fontFamily: '"Georgia", serif' }}
              id="lt-certificate-canvas"
            >
              {/* Outer decorative box */}
              <div className="absolute inset-0 border-2 border-emerald-600/30 m-1 pointer-events-none"></div>

              {/* L&T EduTech Logo & QR Code Header Row */}
              <div className="flex justify-between items-start mb-6 gap-4">
                {/* L&T Logo representation */}
                <div className="flex items-center space-x-2 text-left">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0F172A] flex items-center justify-center font-bold text-xs text-[#0F172A] bg-white font-sans">
                    L&T
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0F172A] font-sans leading-none">L&T EduTech</div>
                    <div className="text-[10px] text-emerald-700 font-semibold font-sans mt-0.5">CollegeConnect</div>
                  </div>
                </div>

                {/* Simulated QR Verification */}
                <div className="bg-white p-1 border border-slate-200 rounded shrink-0">
                  <svg className="w-12 h-12 text-slate-800" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M10 10h30v30H10zm5 5h20v20H15zm5 5h10v10H20zm40-10h30v30H60zm5 5h20v20H65zm5 5h10v10H70zm-60 50h30v30H10zm5 5h20v20H15zm5 5h10v10H20zm55-5h15v5H75zm0 10h5v15h-5zm10 5h5v5h-5zm-5 5h10v5H75zm-15-20h5v10h-5zm5 10h10v5H65zm5-15h5v5h-5zm-10 0h5v5h-5zm0 20h5v5h-5zm5-5h5v5h-5zm10 5h5v5h-5z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-wider text-[#1E3A8A] uppercase mb-4" style={{ fontFamily: 'sans-serif' }}>
                CERTIFICATE OF COMPLETION
              </h3>

              {/* Subtext */}
              <p className="text-xs sm:text-sm text-slate-600 italic mb-4">
                This is to certify that
              </p>

              {/* Name */}
              <h4 className="text-lg sm:text-xl font-bold text-slate-950 font-sans tracking-wide mb-4 border-b border-dashed border-slate-300 pb-2 inline-block px-6">
                Mr./Ms. BOTLA DHANYA
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 italic mb-1">
                of Aditya College of Engineering and Technology
              </p>

              <p className="text-xs sm:text-sm text-slate-600 italic mb-4">
                has successfully completed the course
              </p>

              {/* Course Title */}
              <h5 className="text-lg sm:text-2xl font-extrabold text-[#0D9488] mb-4 tracking-wide font-sans">
                Building Information Modeling
              </h5>

              {/* Grade details */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-lg mx-auto mb-6">
                with <span className="font-bold text-slate-900">First Class</span> offered by <span className="font-semibold text-slate-950">CollegeConnect Programme</span> of L&T EduTech during the period <span className="font-mono text-xs font-semibold bg-emerald-50 px-2 py-0.5 border rounded border-emerald-100">30 Jul 2025 to 20 Nov 2025</span>.
              </p>

              {/* Footer Block with Rosette Seal & Signature */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-6 border-t border-slate-200/60 pt-6">
                
                {/* Left Side: Signature */}
                <div className="text-center sm:text-left space-y-1">
                  {/* Signature graphic representation */}
                  <div className="h-8 flex items-center justify-center sm:justify-start">
                    <span className="font-serif italic text-lg text-slate-700 font-semibold select-none transform -rotate-2 border-b border-slate-300 px-2">
                      M.F.Febin
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">M.F.Febin</div>
                    <div className="text-[10px] text-slate-500 font-sans">Head, L&T EduTech</div>
                  </div>
                </div>

                {/* Right Side: Rosette Badge */}
                <div className="flex items-center space-x-2.5 bg-emerald-50/50 border border-emerald-100 py-1.5 px-3.5 rounded-lg">
                  {/* Rosette ribbon SVG */}
                  <svg className="w-10 h-10 text-emerald-600" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 15c-19.3 0-35 15.7-35 35s15.7 35 35 35 35-15.7 35-35-15.7-35-35-35zm0 64c-16 0-29-13-29-29s13-29 29-29 29 13 29 29-13 29-29 29z" />
                    <path d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 44c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19z" />
                    <path d="M44 80l6 12 6-12h-12z" />
                    <path d="M38 75l-4 15 8-8-4-7z" stroke="currentColor" stroke-width="2" />
                    <path d="M62 75l4 15-8-8 4-7z" stroke="currentColor" stroke-width="2" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] font-bold text-emerald-800 uppercase font-mono tracking-wider">Classification</div>
                    <div className="text-xs font-black text-emerald-700">First Class (A+)</div>
                  </div>
                </div>

              </div>

              {/* Tiny footer coordinates */}
              <div className="text-[8px] text-slate-400 font-sans text-center mt-8 border-t border-slate-100 pt-2">
                L&T EduTech, TCTC Building, 1st Floor Right Wing, Mount Poonamallee Road, Manapakkam, Chennai - 600089
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="flex justify-end gap-3 mt-6 no-print">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Print / Save PDF
              </button>
              <button
                onClick={() => setShowLAndTCert(false)}
                className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
