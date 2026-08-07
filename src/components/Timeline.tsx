/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, GraduationCap, Calendar, Star, Building2, MapPin } from 'lucide-react';
import { timelineData } from '../data';

export default function Timeline() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-[#E2E8F0]" id="timeline">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" id="timeline-section-header">
          <span className="font-mono text-xs font-bold tracking-widest text-[#2563EB] uppercase bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
            Milestones & Career Map
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight mt-3">
            Education & Experience Timeline
          </h2>
          <p className="text-[#475569] font-sans text-sm mt-3">
            Trace my formal academic training at Aditya University and hands-on professional internship experience in urban engineering layout approvals.
          </p>
        </div>

        {/* Structural Timeline Road / Guideline */}
        <div className="relative border-l-2 border-[#CBD5E1] ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12" id="timeline-guideline-wrapper">
          
          {timelineData.map((event) => {
            const isExp = event.type === 'experience';
            return (
              <div key={event.id} className="relative group" id={`timeline-event-${event.id}`}>
                
                {/* Benchmark Node Indicator (Absolute Positioned on left border line) */}
                <span className="absolute -left-[35px] sm:-left-[53px] top-1 flex items-center justify-center w-8 h-8 rounded-full border-2 bg-white transition-colors group-hover:scale-110 z-10 shadow-sm border-[#CBD5E1] text-[#475569] group-hover:border-[#2563EB] group-hover:text-[#2563EB]">
                  {isExp ? (
                    <Briefcase className="w-4 h-4" />
                  ) : (
                    <GraduationCap className="w-4 h-4" />
                  )}
                </span>

                {/* Left Side Label for Larger Screens (Period / Duration) */}
                <div className="hidden sm:block absolute -left-[185px] w-36 text-right top-2 font-mono text-xs font-extrabold text-[#64748B] tracking-wide" id={`period-tag-${event.id}`}>
                  <div className="inline-flex items-center space-x-1.5 bg-white border border-[#E2E8F0] px-2.5 py-1 rounded shadow-xs">
                    <Calendar className="w-3 h-3 text-[#2563EB]" />
                    <span>{event.period}</span>
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-xs group-hover:border-[#CBD5E1] group-hover:shadow-md transition-all relative" id={`timeline-card-${event.id}`}>
                  
                  {/* Mobiles-only Period Label */}
                  <div className="inline-flex sm:hidden items-center space-x-1.5 bg-[#F1F5F9] text-[#475569] px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider mb-3">
                    <Calendar className="w-3 h-3 text-[#2563EB]" />
                    <span>{event.period}</span>
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-semibold text-[#475569] mt-1">
                        <span className="text-[#0F172A] font-bold">{event.subtitle}</span>
                        {event.institution && (
                          <>
                            <span className="text-slate-300 hidden sm:inline">•</span>
                            <span className="flex items-center text-[#64748B]">
                              <Building2 className="w-3.5 h-3.5 mr-1" />
                              {event.institution}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Grade/Performance Badging */}
                    {event.grade && (
                      <span className="self-start sm:self-center inline-flex items-center space-x-1 px-3 py-1 bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] rounded-md text-xs font-extrabold tracking-wide font-mono shadow-xs shrink-0">
                        <Star className="w-3.5 h-3.5 fill-[#15803D]" />
                        <span>{event.grade}</span>
                      </span>
                    )}
                  </div>

                  {/* Description List */}
                  <ul className="space-y-2 mt-4 text-[#475569] text-xs sm:text-sm font-sans leading-relaxed">
                    {event.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 mr-2.5 shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlights Sub-Block (e.g. for internships) */}
                  {event.highlights && event.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#F1F5F9] bg-[#F8FAFC] -mx-6 -mb-6 px-6 py-4 rounded-b-xl" id="timeline-sub-block">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider font-mono block mb-2">
                        Acquired Competency Matrix:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {event.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-center text-[#334155]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-2 shrink-0"></span>
                            <span className="font-semibold">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
