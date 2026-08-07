/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Mail, Phone, GraduationCap, ArrowRight, ShieldCheck, Layers, FileSpreadsheet, Ruler, Download } from 'lucide-react';

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
  onDownloadCVClick: () => void;
}

export default function Hero({ onProjectsClick, onContactClick, onDownloadCVClick }: HeroProps) {
  // Highlights that display right under the quick details
  const highlights = [
    { label: 'AutoCAD', icon: '📐' },
    { label: 'Revit', icon: '🏛️' },
    { label: 'ETABS', icon: '📊' },
    { label: 'BIM Certified', icon: '🏅' },
    { label: 'RUDA Intern', icon: '🏢' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-24 border-b border-[#E2E8F0]" id="hero-section">
      {/* Engineering Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" id="blueprint-grid">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-major" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
            </pattern>
            <pattern id="grid-minor" width="24" height="24" patternUnits="userSpaceOnUse">
              <rect width="24" height="24" fill="none" />
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#CBD5E1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-minor)" />
          <rect width="100%" height="100%" fill="url(#grid-major)" />
        </svg>
      </div>

      {/* Decorative Compass Rose / Architectural Elevation Lines */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none hidden lg:block" id="architectural-compass">
        <svg viewBox="0 0 100 100" fill="none" stroke="#2563EB" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
          <line x1="50" y1="2" x2="50" y2="98" />
          <line x1="2" y1="50" x2="98" y2="50" />
          <line x1="16" y1="16" x2="84" y2="84" />
          <line x1="16" y1="84" x2="84" y2="16" />
          <path d="M 50 15 L 53 50 L 50 85 L 47 50 Z" fill="#2563EB" fillOpacity="0.1" />
          <path d="M 15 50 L 50 53 L 85 50 L 50 47 Z" fill="#2563EB" fillOpacity="0.1" />
          <text x="52" y="10" className="text-[5px] font-mono fill-[#0F172A] font-bold">N 00° 00'</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Main Copy Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6" id="hero-main-content">
            
            {/* Structural Tag */}
            <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide w-fit uppercase" id="hero-eyebrow">
              <Ruler className="w-3.5 h-3.5 animate-pulse text-[#2563EB]" />
              <span>Civil & Structural Design Portfolio</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-sans font-extrabold text-[#0F172A] tracking-tight leading-tight lg:leading-none" id="hero-title">
              Civil Engineering Undergraduate <br className="hidden sm:inline" />
              <span className="text-[#2563EB] relative inline-block">
                & BIM / Structural CAD
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#0EA5E9]/30 -z-10"></span>
              </span> Specialist
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-sans" id="hero-subheading">
              Passionate about infrastructure development, architectural layout design, and BIM workflows. 
              Hands-on experience with <span className="text-[#0F172A] font-semibold underline decoration-[#0EA5E9] decoration-2">RUDA layout approvals</span> and <span className="text-[#0F172A] font-semibold underline decoration-[#2563EB] decoration-2">L&T BIM projects</span>.
            </p>

            {/* Quick Info Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2" id="quick-info-grid">
              <div className="flex items-center space-x-2.5 bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-sm hover:border-[#2563EB] transition-colors" id="info-badge-location">
                <div className="w-8 h-8 rounded bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider font-mono">Location</span>
                  <span className="text-xs font-bold text-[#0F172A]">Surampalem, AP, India</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-sm hover:border-[#2563EB] transition-colors" id="info-badge-email">
                <div className="w-8 h-8 rounded bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider font-mono">Email Contact</span>
                  <span className="text-xs font-bold text-[#0F172A] break-all">dhanyabotla@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-sm hover:border-[#2563EB] transition-colors" id="info-badge-phone">
                <div className="w-8 h-8 rounded bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider font-mono">Mobile Phone</span>
                  <span className="text-xs font-bold text-[#0F172A]">+91 9390948557</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-sm hover:border-[#2563EB] transition-colors" id="info-badge-university">
                <div className="w-8 h-8 rounded bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider font-mono">Education</span>
                  <span className="text-xs font-bold text-[#0F172A]">Aditya University (2023-2027)</span>
                </div>
              </div>
            </div>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2 pt-2 items-center" id="quick-highlights">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider font-mono mr-2">Focus Areas:</span>
              {highlights.map((badge) => (
                <span 
                  key={badge.label}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-white border border-[#E2E8F0] text-[#334155] rounded-full text-xs font-bold shadow-xs hover:border-[#2563EB] transition-colors"
                >
                  <span className="text-xs">{badge.icon}</span>
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4" id="hero-actions">
              <button
                onClick={onProjectsClick}
                className="inline-flex items-center justify-center px-5 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs tracking-wide rounded-md shadow-sm transition-all cursor-pointer uppercase"
                id="hero-primary-btn"
              >
                View Projects & Designs
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={onDownloadCVClick}
                className="inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-slate-50 text-[#1D4ED8] border-2 border-[#BFDBFE] hover:border-[#2563EB] font-bold text-xs tracking-wide rounded-md shadow-sm transition-all cursor-pointer uppercase"
                id="hero-download-cv-btn"
              >
                <Download className="w-4 h-4 mr-2" />
                Download / Print CV
              </button>
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center px-5 py-3 bg-slate-100 hover:bg-[#E2E8F0] text-[#0F172A] border border-slate-300 font-bold text-xs tracking-wide rounded-md shadow-sm transition-all cursor-pointer uppercase"
                id="hero-secondary-btn"
              >
                Get in Touch
              </button>
            </div>

          </div>

          {/* Visual Presentation Card Side - CAD Layout Drafting View */}
          <div className="lg:col-span-5 relative" id="hero-visual-card-container">
            <div className="bg-white rounded-xl border border-[#CBD5E1] p-6 shadow-md relative" id="blueprint-isometric-card">
              {/* Draft paper title block */}
              <div className="border-b border-[#E2E8F0] pb-4 mb-4 flex justify-between items-center" id="card-draft-header">
                <div className="flex items-center space-x-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F59E0B]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#10B981]"></div>
                </div>
                <span className="font-mono text-[10px] bg-[#F1F5F9] text-[#64748B] px-2 py-0.5 rounded font-bold uppercase">
                  ISOMETRIC MODEL v2.06
                </span>
              </div>

              {/* Graphical Blueprint Sketch Simulation */}
              <div className="relative bg-[#0F172A] rounded-lg p-4 h-64 overflow-hidden flex items-center justify-center border border-[#334155]" id="mock-cad-render">
                {/* Simulated Grid Lines */}
                <div className="absolute inset-0 opacity-15" style={{
                  backgroundImage: 'linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}></div>

                {/* Drawn structural cross section */}
                <svg className="w-full h-full relative z-10 opacity-80" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                  {/* Ground Level line */}
                  <line x1="10" y1="105" x2="190" y2="105" stroke="#38BDF8" strokeWidth="1" />
                  <text x="15" y="115" fill="#38BDF8" fontSize="6" fontFamily="monospace">G.L. ELEVATION: 0.00m</text>

                  {/* Footing bases */}
                  <rect x="35" y="95" width="20" height="10" fill="none" stroke="#0EA5E9" strokeWidth="1" />
                  <rect x="90" y="95" width="20" height="10" fill="none" stroke="#0EA5E9" strokeWidth="1" />
                  <rect x="145" y="95" width="20" height="10" fill="none" stroke="#0EA5E9" strokeWidth="1" />

                  {/* Pillars/Columns */}
                  <line x1="45" y1="95" x2="45" y2="25" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 1" />
                  <line x1="100" y1="95" x2="100" y2="25" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 1" />
                  <line x1="155" y1="95" x2="155" y2="25" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 1" />

                  {/* Plinth level beam */}
                  <rect x="25" y="80" width="150" height="8" fill="none" stroke="#38BDF8" strokeWidth="1" />
                  <text x="110" y="77" fill="#38BDF8" fontSize="5" fontFamily="monospace">PLINTH BEAM</text>

                  {/* G+1 floor slabs */}
                  <rect x="25" y="45" width="150" height="6" fill="none" stroke="#38BDF8" strokeWidth="1" />
                  <text x="110" y="42" fill="#38BDF8" fontSize="5" fontFamily="monospace">FIRST FLOOR SLAB</text>

                  <rect x="25" y="15" width="150" height="6" fill="none" stroke="#38BDF8" strokeWidth="1" />
                  <text x="110" y="12" fill="#38BDF8" fontSize="5" fontFamily="monospace">ROOF SLAB</text>

                  {/* Dimension lines */}
                  <line x1="20" y1="15" x2="20" y2="80" stroke="#EF4444" strokeWidth="0.5" />
                  <line x1="18" y1="15" x2="22" y2="15" stroke="#EF4444" strokeWidth="0.5" />
                  <line x1="18" y1="80" x2="22" y2="80" stroke="#EF4444" strokeWidth="0.5" />
                  <text x="8" y="50" fill="#EF4444" fontSize="5" fontFamily="monospace" transform="rotate(-90 8 50)">H = 3.65m</text>

                  {/* Center Line text */}
                  <text x="45" y="115" fill="#10B981" fontSize="5" fontFamily="monospace" textAnchor="middle">GRID A</text>
                  <text x="100" y="115" fill="#10B981" fontSize="5" fontFamily="monospace" textAnchor="middle">GRID B</text>
                  <text x="155" y="115" fill="#10B981" fontSize="5" fontFamily="monospace" textAnchor="middle">GRID C</text>
                </svg>

                {/* Blueprint watermark */}
                <span className="absolute bottom-2 right-3 font-mono text-[7px] text-sky-400 opacity-60">
                  AUTODESK CAD COMPATIBLE
                </span>
              </div>

              {/* Title Block Specs */}
              <div className="grid grid-cols-2 gap-4 mt-4 bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0] font-mono text-[10px]" id="title-block-specs">
                <div>
                  <span className="text-[#64748B] block font-bold">PROJECT OWNER:</span>
                  <span className="text-[#0F172A] font-extrabold uppercase">DHANYA BOTLA</span>
                </div>
                <div>
                  <span className="text-[#64748B] block font-bold">SCALE RATING:</span>
                  <span className="text-[#0F172A] font-extrabold">1:50 METRIC MEASURE</span>
                </div>
                <div>
                  <span className="text-[#64748B] block font-bold">CURRENT STATUS:</span>
                  <span className="text-[#10B981] font-extrabold flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-1 animate-ping"></span>
                    ACTIVE IN PROGRESS
                  </span>
                </div>
                <div>
                  <span className="text-[#64748B] block font-bold">CAD FIELD:</span>
                  <span className="text-[#0EA5E9] font-extrabold">CIVIL & BIM DEPT</span>
                </div>
              </div>
            </div>

            {/* Overlapping small badge for structural design credentials */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#CBD5E1] rounded-lg p-3 shadow-md flex items-center space-x-2.5 max-w-[200px]" id="small-credential-badge">
              <div className="w-8 h-8 rounded bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#0F172A] leading-tight">RUDA Approved Workflow</span>
                <span className="text-[8px] text-[#64748B] font-mono leading-none mt-0.5">Town Planning Intern</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
