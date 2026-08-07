/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PencilRuler, Compass, Briefcase, Award, Sparkles, Check, CheckCircle } from 'lucide-react';
import { skillsData } from '../data';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Map icon string identifier to corresponding Lucide Icon Component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <PencilRuler className="w-5 h-5 text-[#2563EB]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#0EA5E9]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#2563EB]" />;
      case 'Languages':
        return <Award className="w-5 h-5 text-[#0EA5E9]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E2E8F0]" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" id="skills-section-header">
          <span className="font-mono text-xs font-bold tracking-widest text-[#2563EB] uppercase bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight mt-3">
            Categorized Civil Engineering Skills Matrix
          </h2>
          <p className="text-[#475569] font-sans text-sm mt-3">
            A comprehensive matrix of software expertise, practical civil methodologies, and soft core competencies built through rigorous training.
          </p>
        </div>

        {/* Bento Grid layout for categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="skills-bento-grid">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 hover:border-[#CBD5E1] transition-all hover:bg-white hover:shadow-md group flex flex-col justify-between"
              id={`skills-card-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div>
                {/* Header Block of bento card */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#E2E8F0] group-hover:border-[#2563EB]/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center shadow-xs">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0F172A] tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[10px] text-[#64748B] font-mono font-bold tracking-wider uppercase">
                      Civil Specialization Block
                    </span>
                  </div>
                </div>

                {/* Badges/Tags container */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill;
                    return (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`inline-flex items-center space-x-1.5 px-3 py-2 border rounded-lg text-xs font-semibold font-sans tracking-wide transition-all duration-200 cursor-default ${
                          isHovered
                            ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-xs translate-y-[-1px]'
                            : 'bg-white border-[#E2E8F0] text-[#334155]'
                        }`}
                      >
                        <Check className={`w-3.5 h-3.5 shrink-0 ${isHovered ? 'text-white' : 'text-[#2563EB]'}`} />
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic status/tip footer at bottom of bento card */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex justify-between items-center text-[10px] font-mono text-[#64748B] font-bold">
                <span>VERIFIED METRIC</span>
                <span className="flex items-center text-[#10B981]">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  PRACTICAL EXPERIENCE ACCREDITED
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* CAD Standards Info Callout Card */}
        <div className="mt-12 bg-slate-50 border border-[#E2E8F0] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6" id="cad-standards-info-block">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center shrink-0 text-[#0EA5E9] border border-[#B0E5FC]">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] tracking-tight">Drafting & Design Principles Complied</h4>
              <p className="text-xs text-[#475569] mt-1 leading-relaxed max-w-xl">
                My architectural modeling conforms to IS code layouts, civil draft notations, and BIM LOD (Level of Development) requirements. This ensures clear translation of drafting sheets into field construction milestones.
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="font-mono text-xs text-[#2563EB] font-bold border border-[#BFDBFE] bg-white px-3 py-1.5 rounded-md inline-block uppercase">
              BIM LOD 300 COMPLIANT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
