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

  const toggleExpand = (id: string) => {
    setExpandedCertId(expandedCertId === id ? null : id);
  };

  // List of extra key syllabus modules and proficiency metrics to display when expanded
  const certificateAddons: Record<string, {
    modules: string[];
    verificationId: string;
    proficiency: 'Expert' | 'Advanced' | 'Mastery';
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
      modules: ['LOD 100-400 standards maturity stages', 'Clash detection resolution strategies', 'BIM collaborative cloud project workflows', 'IFC schema interoperability'],
      verificationId: 'DB-BIM-2025-09144',
      proficiency: 'Mastery',
      score: '98%'
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

                          <div className="pt-2">
                            <span className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-[#2563EB] hover:underline cursor-pointer">
                              <span>Query Public Registry database</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
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
    </section>
  );
}
