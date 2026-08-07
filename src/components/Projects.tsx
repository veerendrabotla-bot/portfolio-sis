/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project } from '../types';
import { projectsData } from '../data';
import { 
  Maximize2, X, Compass, Layers, Landmark, 
  HelpCircle, FileText, CheckCircle2, Ruler, 
  Activity, Sliders, ChevronRight, Info, Eye, ClipboardCheck
} from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Modal state
  const [activeTab, setActiveTab] = useState<'overview' | 'blueprint' | 'specs' | 'compliance'>('overview');
  
  // Modal layers and toggles
  const [showGridLines, setShowGridLines] = useState<boolean>(true);
  const [showDimensions, setShowDimensions] = useState<boolean>(true);
  const [selectedFloor, setSelectedFloor] = useState<'ground' | 'first'>('ground');
  const [selectedParcel, setSelectedParcel] = useState<string | null>(null);
  const [rudaLayer, setRudaLayer] = useState<'zoning' | 'roads' | 'green'>('zoning');

  // Estimator Form State
  const [plotLength, setPlotLength] = useState<number>(60);
  const [plotWidth, setPlotWidth] = useState<number>(40);
  const [floorsCount, setFloorsCount] = useState<number>(2);
  const [concreteGrade, setConcreteGrade] = useState<'M20' | 'M25' | 'M30'>('M20');
  const [seismicZone, setSeismicZone] = useState<'Zone II' | 'Zone III' | 'Zone IV'>('Zone III');

  const categories = ['All', 'BIM & Structural', 'Urban Layouts & RUDA', 'GIS & Surveying'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  // G+1 Estimator Calculations
  const plotArea = plotLength * plotWidth; // sq ft
  const GroundCoverageRatio = plotArea > 2500 ? 0.60 : plotArea > 1500 ? 0.65 : 0.70;
  const groundBuiltUpArea = Math.round(plotArea * GroundCoverageRatio);
  const totalBuiltUpArea = groundBuiltUpArea * floorsCount; // total sq ft

  // Indian standard setbacks estimation based on AP Building Rules 2017
  const frontSetback = plotLength > 50 ? Math.max(6, Math.round(plotLength * 0.12)) : 5;
  const rearSetback = plotLength > 50 ? Math.max(5, Math.round(plotLength * 0.10)) : 4;
  const sideSetbacks = plotWidth > 35 ? 4 : 3;

  // Material Estimation formula using Civil engineering rules of thumb
  // Concrete: ~0.038 m³ per sq ft of built-up area
  const concreteVolume = parseFloat((totalBuiltUpArea * 0.038).toFixed(1)); 
  
  // Steel coefficient: ~80 kg/m³ for Zone II, ~100 kg/m³ for Zone III, ~130 kg/m³ for Zone IV
  const steelCoefficient = seismicZone === 'Zone II' ? 82 : seismicZone === 'Zone III' ? 105 : 138;
  const steelWeightMetricTons = parseFloat(((concreteVolume * steelCoefficient) / 1000).toFixed(2));

  // Cement Bags: ~8.2 bags per m³ of concrete (M20), ~9.5 (M25), ~10.8 (M30)
  const cementRatio = concreteGrade === 'M20' ? 8.2 : concreteGrade === 'M25' ? 9.6 : 10.9;
  const cementBags = Math.round(concreteVolume * cementRatio);

  // Sand and Aggregate volumes
  const sandVolumeTons = parseFloat((concreteVolume * 0.45 * 1.5).toFixed(1)); // Dry sand weight approx 1.5 tons/m³
  const aggregateVolumeTons = parseFloat((concreteVolume * 0.85 * 1.6).toFixed(1));

  // Visual Renderer for the cards
  const renderProjectVisual = (imageType: 'hotel' | 'ruda' | 'gis' | 'estimation') => {
    switch (imageType) {
      case 'hotel':
        return (
          <div className="h-44 w-full bg-[#1E3A8A] relative overflow-hidden flex items-center justify-center border-b border-[#E2E8F0]" id="visual-hotel">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}></div>
            <svg className="w-5/6 h-5/6 text-sky-200/60" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.75">
              <rect x="15" y="10" width="70" height="42" strokeDasharray="1 1" />
              <rect x="20" y="15" width="60" height="37" />
              <line x1="20" y1="27" x2="80" y2="27" />
              <line x1="20" y1="40" x2="80" y2="40" />
              <rect x="25" y="18" width="10" height="6" />
              <rect x="45" y="18" width="10" height="6" />
              <rect x="65" y="18" width="10" height="6" />
              <rect x="25" y="30" width="10" height="6" />
              <rect x="45" y="30" width="10" height="6" />
              <rect x="65" y="30" width="10" height="6" />
              <path d="M 42 52 L 42 43 L 58 43 L 58 52" fill="#0369A1" fillOpacity="0.2" />
              <line x1="50" y1="43" x2="50" y2="52" />
              <line x1="50" y1="15" x2="50" y2="5" />
              <text x="17" y="58" fill="#7DD3FC" fontSize="4" fontFamily="monospace">FRONT ELEVATION VIEW (REVIT)</text>
            </svg>
            <div className="absolute top-2 left-2 bg-[#2563EB]/90 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              L&T BIM Internship
            </div>
          </div>
        );
      case 'ruda':
        return (
          <div className="h-44 w-full bg-[#111827] relative overflow-hidden flex items-center justify-center border-b border-[#E2E8F0]" id="visual-ruda">
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: 'linear-gradient(90deg, #10B981 1px, transparent 1px), linear-gradient(#10B981 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            <svg className="w-5/6 h-5/6 text-[#34D399]/60" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.75">
              <rect x="5" y="5" width="90" height="50" strokeWidth="1" />
              <path d="M 5 30 L 95 30" strokeDasharray="3 2" />
              <path d="M 35 5 L 35 55" strokeDasharray="3 2" />
              <path d="M 70 5 L 70 55" strokeDasharray="3 2" />
              <rect x="10" y="10" width="20" height="15" fill="#10B981" fillOpacity="0.1" />
              <rect x="40" y="10" width="25" height="15" fill="#10B981" fillOpacity="0.1" />
              <rect x="75" y="10" width="15" height="15" fill="#10B981" fillOpacity="0.1" />
              <rect x="10" y="35" width="20" height="15" fill="#10B981" fillOpacity="0.1" />
              <rect x="40" y="35" width="25" height="15" fill="#10B981" fillOpacity="0.1" />
              <rect x="75" y="35" width="15" height="15" fill="#10B981" fillOpacity="0.1" />
              <text x="8" y="52" fill="#34D399" fontSize="3.5" fontFamily="monospace">RUDA RESIDENTIAL PLOTS (AUTO-CAD)</text>
            </svg>
            <div className="absolute top-2 left-2 bg-[#10B981]/90 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              RUDA Internship
            </div>
          </div>
        );
      case 'gis':
        return (
          <div className="h-44 w-full bg-[#0F172A] relative overflow-hidden flex items-center justify-center border-b border-[#E2E8F0]" id="visual-gis">
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}></div>
            <svg className="w-5/6 h-5/6 text-sky-400/50" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.75">
              <path d="M 10 20 Q 30 10, 50 25 T 90 15" />
              <path d="M 10 30 Q 35 22, 50 38 T 90 28" strokeWidth="1" />
              <path d="M 10 42 Q 40 35, 50 50 T 90 40" />
              <circle cx="50" cy="38" r="1.5" fill="#EF4444" />
              <text x="54" y="39" fill="#EF4444" fontSize="3.5" fontFamily="monospace">BM #104</text>
              <text x="12" y="56" fill="#38BDF8" fontSize="4" fontFamily="monospace">TOPOGRAPHIC CONTOUR (GIS)</text>
            </svg>
            <div className="absolute top-2 left-2 bg-[#0284C7]/90 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              GIS & Surveying Labs
            </div>
          </div>
        );
      case 'estimation':
        return (
          <div className="h-44 w-full bg-[#1E293B] relative overflow-hidden flex items-center justify-center border-b border-[#E2E8F0]" id="visual-estimation">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(#94A3B8 1px, transparent 1px)',
              backgroundSize: '10px 10px'
            }}></div>
            <svg className="w-5/6 h-5/6 text-slate-300/50" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.75">
              <rect x="5" y="8" width="90" height="42" />
              <line x1="5" y1="18" x2="95" y2="18" />
              <line x1="30" y1="8" x2="30" y2="50" />
              <line x1="60" y1="8" x2="60" y2="50" />
              <text x="8" y="15" fill="#94A3B8" fontSize="3.5" fontFamily="monospace" fontWeight="bold">MEMBER ID</text>
              <text x="33" y="15" fill="#94A3B8" fontSize="3.5" fontFamily="monospace" fontWeight="bold">CONC (m³)</text>
              <text x="63" y="15" fill="#94A3B8" fontSize="3.5" fontFamily="monospace" fontWeight="bold">STEEL (kg)</text>
              <text x="8" y="25" fill="#F1F5F9" fontSize="3" fontFamily="monospace">C1 (COLUMN)</text>
              <text x="33" y="25" fill="#F1F5F9" fontSize="3" fontFamily="monospace">1.24 m³</text>
              <text x="63" y="25" fill="#F1F5F9" fontSize="3" fontFamily="monospace">145.2 kg</text>
              <text x="8" y="35" fill="#F1F5F9" fontSize="3" fontFamily="monospace">B12 (BEAM)</text>
              <text x="33" y="35" fill="#F1F5F9" fontSize="3" fontFamily="monospace">0.86 m³</text>
              <text x="63" y="35" fill="#F1F5F9" fontSize="3" fontFamily="monospace">98.4 kg</text>
              <text x="8" y="56" fill="#F8FAFC" fontSize="4" fontFamily="monospace">QUANTITY TAKEOFF ESTIMATION</text>
            </svg>
            <div className="absolute top-2 left-2 bg-[#475569]/90 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              ETABS & Estimation
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E2E8F0]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="projects-section-header">
          <span className="font-mono text-xs font-bold tracking-widest text-[#2563EB] uppercase bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
            Engineering Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight mt-3">
            Featured Projects & Practical Internships
          </h2>
          <p className="text-[#475569] font-sans text-sm mt-3">
            A comprehensive portfolio of professional industrial internship projects at RUDA, BIM design sprints, and academic structural planning models.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10" id="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md border tracking-wider transition-all cursor-pointer uppercase ${
                activeCategory === cat
                  ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Desktop/Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="projects-cards-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setActiveTab('overview');
              }}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-all hover:border-[#CBD5E1] group cursor-pointer flex flex-col h-full"
              id={`project-card-${project.id}`}
            >
              {renderProjectVisual(project.imageType)}

              {/* Card Main Description content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[10px] text-[#2563EB] font-bold tracking-widest uppercase">
                      {project.category}
                    </span>
                    {project.organization && (
                      <span className="text-xs text-[#64748B] font-medium italic">
                        {project.organization}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed font-sans mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tags and Expand Trigger */}
                <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155] font-mono text-[9px] font-bold px-2.5 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="bg-[#EFF6FF] text-[#2563EB] font-mono text-[9px] font-bold px-1.5 py-1 rounded">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center text-xs font-bold text-[#2563EB] group-hover:underline">
                    View Blueprint Drafts
                    <Maximize2 className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* G+1 Material Estimator & Setback Calculator Widget */}
        <div className="bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] p-6 sm:p-8" id="materials-estimator-widget">
          <div className="border-b border-[#E2E8F0] pb-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase mb-2">
                <Ruler className="w-3 h-3 text-[#2563EB]" />
                <span>IS 456:2000 Structural Estimation Tool</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                🏛️ G+1 Commercial Building - Quick Material & Cost Estimator
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 font-sans">
                Real-time estimates for structural concrete, steel weight reinforcements, and AP Building code setback margins.
              </p>
            </div>
            
            <span className="font-mono text-[10px] bg-white border border-slate-200 text-slate-500 px-3 py-1.5 rounded font-bold uppercase shrink-0">
              Maturity Level: BIM LOD 200
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Sliders & Selects (col-span-5) */}
            <div className="lg:col-span-5 space-y-5 bg-white p-5 rounded-lg border border-[#E2E8F0]" id="estimator-inputs">
              <h4 className="text-xs font-mono font-bold text-[#0F172A] tracking-widest uppercase border-b border-slate-100 pb-2 flex items-center">
                <Sliders className="w-4 h-4 mr-2 text-[#2563EB]" />
                Design Parameters
              </h4>

              {/* Length */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#334155]">Plot Length (Depth):</span>
                  <span className="font-mono text-[#2563EB]">{plotLength} ft (~{Math.round(plotLength * 0.3048)}m)</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="120" 
                  step="5"
                  value={plotLength} 
                  onChange={(e) => setPlotLength(parseInt(e.target.value))}
                  className="w-full accent-[#2563EB] cursor-pointer"
                />
              </div>

              {/* Width */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#334155]">Plot Width (Frontage):</span>
                  <span className="font-mono text-[#2563EB]">{plotWidth} ft (~{Math.round(plotWidth * 0.3048)}m)</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="80" 
                  step="2"
                  value={plotWidth} 
                  onChange={(e) => setPlotWidth(parseInt(e.target.value))}
                  className="w-full accent-[#2563EB] cursor-pointer"
                />
              </div>

              {/* Selectors Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[10px] font-mono font-bold text-[#64748B] uppercase mb-1">Concrete Mix</label>
                  <select 
                    value={concreteGrade}
                    onChange={(e) => setConcreteGrade(e.target.value as any)}
                    className="w-full border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs font-bold text-[#0F172A] bg-white cursor-pointer"
                  >
                    <option value="M20">M20 (1:1.5:3)</option>
                    <option value="M25">M25 (1:1:2)</option>
                    <option value="M30">M30 (Design Mix)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-[#64748B] uppercase mb-1">Seismic Design</label>
                  <select 
                    value={seismicZone}
                    onChange={(e) => setSeismicZone(e.target.value as any)}
                    className="w-full border border-[#CBD5E1] rounded px-2.5 py-1.5 text-xs font-bold text-[#0F172A] bg-white cursor-pointer"
                  >
                    <option value="Zone II">Zone II (Low)</option>
                    <option value="Zone III">Zone III (Mod AP)</option>
                    <option value="Zone IV">Zone IV (Severe)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-[10px] font-mono font-bold text-[#64748B] uppercase mb-1">Proposed Levels</label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFloorsCount(num)}
                      className={`py-2 text-xs font-bold rounded border cursor-pointer transition-colors ${
                        floorsCount === num
                          ? 'bg-[#2563EB] border-[#2563EB] text-white'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-slate-100'
                      }`}
                    >
                      {num === 1 ? 'G Only' : num === 2 ? 'G+1' : 'G+2'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Grid (col-span-7) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" id="estimator-results">
              
              {/* Built Up & Setbacks Spec */}
              <div className="bg-white border border-[#E2E8F0] p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider mb-2">
                    Zoning and Spatial Coverage (AP rules)
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-dashed border-slate-100 pb-1.5">
                      <span className="text-xs text-[#475569]">Total Plot Area:</span>
                      <span className="font-mono text-xs font-bold text-[#0F172A]">{plotArea} sq ft</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-slate-100 pb-1.5">
                      <span className="text-xs text-[#475569]">Coverage Ratio Allowed:</span>
                      <span className="font-mono text-xs font-bold text-[#10B981]">{(GroundCoverageRatio * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-slate-100 pb-1.5">
                      <span className="text-xs text-[#475569]">Ground Plinth Footprint:</span>
                      <span className="font-mono text-xs font-bold text-[#0F172A]">{groundBuiltUpArea} sq ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-[#475569] font-semibold">Total Built-up Area:</span>
                      <span className="font-mono text-xs font-extrabold text-[#2563EB]">{totalBuiltUpArea} sq ft</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 p-2.5 rounded text-[11px]">
                  <span className="font-mono font-bold text-[#0F172A] block mb-1">Estimated Front Setback (Regulatory):</span>
                  <div className="grid grid-cols-3 text-center gap-1 font-mono font-bold text-slate-700">
                    <div className="bg-white border p-1 rounded">
                      <span className="text-[8px] text-slate-400 block uppercase font-sans">Front</span>
                      <span>{frontSetback}'</span>
                    </div>
                    <div className="bg-white border p-1 rounded">
                      <span className="text-[8px] text-slate-400 block uppercase font-sans">Rear</span>
                      <span>{rearSetback}'</span>
                    </div>
                    <div className="bg-white border p-1 rounded">
                      <span className="text-[8px] text-slate-400 block uppercase font-sans">Sides</span>
                      <span>{sideSetbacks}'</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Material Quantification Metrics */}
              <div className="bg-white border border-[#E2E8F0] p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider mb-3 flex items-center">
                    <Activity className="w-3.5 h-3.5 text-[#2563EB] mr-1" />
                    Material Volumetric Takeoff
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-slate-50 border p-2.5 rounded">
                      <span className="text-[9px] text-[#64748B] font-mono block leading-none mb-1">CONCRETE VOLUME</span>
                      <span className="text-base font-mono font-extrabold text-[#0F172A]">{concreteVolume} m³</span>
                    </div>
                    <div className="bg-slate-50 border p-2.5 rounded">
                      <span className="text-[9px] text-[#64748B] font-mono block leading-none mb-1">REINFORCEMENT STEEL</span>
                      <span className="text-base font-mono font-extrabold text-[#2563EB]">{steelWeightMetricTons} MT</span>
                    </div>
                  </div>

                  <div className="mt-3.5 space-y-2">
                    <div className="flex justify-between text-xs border-b border-dashed border-slate-100 pb-1">
                      <span className="text-[#475569]">OPC Cement (50kg bags):</span>
                      <span className="font-mono font-bold text-[#0F172A]">{cementBags} bags</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-dashed border-slate-100 pb-1">
                      <span className="text-[#475569]">River Sand Required:</span>
                      <span className="font-mono font-bold text-[#0F172A]">{sandVolumeTons} Tons</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#475569]">Coarse Aggregates (20mm):</span>
                      <span className="font-mono font-bold text-[#0F172A]">{aggregateVolumeTons} Tons</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500 font-sans italic flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>Approximated using structural layout ratios (H=3.5m).</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Dynamic Interactive Modal Popup with Tabbed Blueprint Details */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedProject(null)}
          id="project-modal-backdrop"
        >
          <div 
            className="bg-white border border-[#CBD5E1] rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[92vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
            id="project-modal-content"
          >
            {/* Modal Title Header Banner */}
            <div className="bg-[#0F172A] text-white p-5 sm:p-6 border-b border-slate-800 flex justify-between items-start" id="modal-title-banner">
              <div>
                <span className="font-mono text-[10px] text-[#38BDF8] font-bold tracking-widest uppercase block mb-1">
                  {selectedProject.category} • {selectedProject.organization || 'ACADEMIC'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-sans">
                  Role: <span className="text-white font-semibold">{selectedProject.role}</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Segmented Blueprint Navigation Tabs */}
            <div className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-2.5 flex flex-wrap gap-2 text-white no-print">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-mono transition-colors cursor-pointer ${
                  activeTab === 'overview' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Overview
              </button>
              
              <button
                onClick={() => setActiveTab('blueprint')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'blueprint' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                Draft Blueprint
              </button>

              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-mono transition-colors cursor-pointer ${
                  activeTab === 'specs' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Engineering Specs
              </button>

              <button
                onClick={() => setActiveTab('compliance')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'compliance' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ClipboardCheck className="w-3.5 h-3.5 text-[#10B981]" />
                RUDA / Code Compliance
              </button>
            </div>

            {/* Modal Scrollable Core Area */}
            <div className="overflow-y-auto p-6 flex-grow font-sans text-sm text-[#334155]" id="modal-scrollable-body">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#0F172A] flex items-center text-xs uppercase tracking-wider font-mono">
                      <FileText className="w-4 h-4 mr-2 text-[#2563EB]" />
                      Project Abstract & Overview
                    </h4>
                    <p className="leading-relaxed bg-slate-50 p-4 rounded-lg border border-[#E2E8F0] text-justify text-xs sm:text-sm">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Core Objectives */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#0F172A] flex items-center text-xs uppercase tracking-wider font-mono">
                      <Compass className="w-4 h-4 mr-2 text-[#2563EB]" />
                      Scope & Objectives
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start bg-[#F8FAFC] border border-[#F1F5F9] p-2.5 rounded text-xs leading-relaxed">
                          <span className="text-[#2563EB] font-bold mr-2 text-xs mt-0.5 font-mono">0{idx+1}.</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Software Stack */}
                  <div className="pt-2 space-y-2">
                    <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider font-mono">
                      Design Tools Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] font-mono text-[10px] font-bold px-3 py-1 rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: INTERACTIVE DRAFT BLUEPRINT */}
              {activeTab === 'blueprint' && (
                <div className="space-y-6">
                  
                  {/* IF G+1 Commercial Hotel Building */}
                  {selectedProject.id === 'project-1' && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-slate-100 p-3 rounded-lg border border-[#E2E8F0]">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-slate-600">Active Level:</span>
                          <div className="inline-flex rounded-md shadow-xs">
                            <button
                              onClick={() => setSelectedFloor('ground')}
                              className={`px-3 py-1.5 text-xs font-bold rounded-l border ${
                                selectedFloor === 'ground' ? 'bg-[#0F172A] border-[#0F172A] text-white' : 'bg-white border-[#CBD5E1] text-[#334155] hover:bg-slate-50'
                              }`}
                            >
                              Ground Level
                            </button>
                            <button
                              onClick={() => setSelectedFloor('first')}
                              className={`px-3 py-1.5 text-xs font-bold rounded-r border-t border-b border-r ${
                                selectedFloor === 'first' ? 'bg-[#0F172A] border-[#0F172A] text-white' : 'bg-white border-[#CBD5E1] text-[#334155] hover:bg-slate-50'
                              }`}
                            >
                              First Level
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <label className="flex items-center space-x-1.5 text-xs font-mono font-bold text-slate-700 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={showGridLines} 
                              onChange={(e) => setShowGridLines(e.target.checked)}
                              className="accent-[#2563EB]"
                            />
                            <span>Column Grids</span>
                          </label>
                          <label className="flex items-center space-x-1.5 text-xs font-mono font-bold text-slate-700 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={showDimensions} 
                              onChange={(e) => setShowDimensions(e.target.checked)}
                              className="accent-[#2563EB]"
                            />
                            <span>Dimensions</span>
                          </label>
                        </div>
                      </div>

                      {/* CAD Vector Sketch Canvas */}
                      <div className="bg-[#0B132B] rounded-lg border border-[#1C2541] p-4 flex flex-col items-center relative overflow-hidden h-80 justify-center">
                        {/* Blueprint background grid */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: 'linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)',
                          backgroundSize: '20px 20px'
                        }}></div>

                        <svg className="w-full h-full max-h-72 text-sky-400 relative z-10" viewBox="0 0 240 140" fill="none" stroke="currentColor" strokeWidth="1">
                          {/* Column Grid Lines (Toggleable) */}
                          {showGridLines && (
                            <g stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 3">
                              <line x1="30" y1="10" x2="30" y2="130" stroke="#38BDF8" strokeOpacity="0.4" />
                              <line x1="120" y1="10" x2="120" y2="130" stroke="#38BDF8" strokeOpacity="0.4" />
                              <line x1="210" y1="10" x2="210" y2="130" stroke="#38BDF8" strokeOpacity="0.4" />
                              <line x1="10" y1="30" x2="230" y2="30" stroke="#38BDF8" strokeOpacity="0.4" />
                              <line x1="10" y1="110" x2="230" y2="110" stroke="#38BDF8" strokeOpacity="0.4" />
                            </g>
                          )}

                          {/* Outer Boundaries */}
                          <rect x="25" y="25" width="190" height="90" stroke="#38BDF8" strokeWidth="1.5" />

                          {/* Level Specific Drawing */}
                          {selectedFloor === 'ground' ? (
                            <g>
                              {/* Reception & Dining divisions */}
                              <rect x="25" y="25" width="60" height="90" stroke="#38BDF8" />
                              <rect x="85" y="25" width="80" height="40" stroke="#38BDF8" />
                              <rect x="85" y="65" width="80" height="50" stroke="#38BDF8" />
                              
                              {/* Columns points */}
                              <rect x="23" y="23" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="83" y="23" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="163" y="23" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="213" y="23" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="23" y="63" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="83" y="63" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="163" y="63" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="213" y="63" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="23" y="111" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="83" y="111" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="163" y="111" width="4" height="4" fill="#EF4444" stroke="none" />
                              <rect x="213" y="111" width="4" height="4" fill="#EF4444" stroke="none" />

                              {/* Labels */}
                              <text x="55" y="70" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">DINING LOBBY</text>
                              <text x="125" y="45" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">RECEPTION & LOUNGE</text>
                              <text x="125" y="90" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">COMMERCIAL KITCHEN</text>
                              <text x="190" y="70" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ADMIN OFFICE</text>
                              
                              {/* Staircase representation */}
                              <g stroke="#38BDF8" strokeWidth="0.5">
                                <line x1="85" y1="25" x2="85" y2="45" />
                                <line x1="89" y1="25" x2="89" y2="45" />
                                <line x1="93" y1="25" x2="93" y2="45" />
                                <line x1="97" y1="25" x2="97" y2="45" />
                                <line x1="101" y1="25" x2="101" y2="45" />
                                <line x1="105" y1="25" x2="105" y2="45" />
                              </g>
                            </g>
                          ) : (
                            <g>
                              {/* Rooms layout */}
                              <line x1="25" y1="55" x2="215" y2="55" stroke="#38BDF8" />
                              <line x1="25" y1="85" x2="215" y2="85" stroke="#38BDF8" />

                              {/* Vertical division walls */}
                              <line x1="72" y1="25" x2="72" y2="55" stroke="#38BDF8" />
                              <line x1="120" y1="25" x2="120" y2="55" stroke="#38BDF8" />
                              <line x1="168" y1="25" x2="168" y2="55" stroke="#38BDF8" />

                              <line x1="72" y1="85" x2="72" y2="115" stroke="#38BDF8" />
                              <line x1="120" y1="85" x2="120" y2="115" stroke="#38BDF8" />
                              <line x1="168" y1="85" x2="168" y2="115" stroke="#38BDF8" />

                              {/* Labels */}
                              <text x="48" y="42" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ROOM 101</text>
                              <text x="96" y="42" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ROOM 102</text>
                              <text x="144" y="42" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ROOM 103</text>
                              <text x="191" y="42" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ROOM 104</text>

                              <text x="48" y="102" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ROOM 105</text>
                              <text x="96" y="102" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ROOM 106</text>
                              <text x="144" y="102" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ROOM 107</text>
                              <text x="191" y="102" fill="#38BDF8" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">ROOM 108</text>

                              <text x="120" y="72" fill="#EF4444" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">CENTRALIZED 1.8M CORRIDOR</text>
                            </g>
                          )}

                          {/* Dimension Annotations */}
                          {showDimensions && (
                            <g stroke="#F59E0B" strokeWidth="0.5">
                              {/* Horizontal overall length */}
                              <line x1="25" y1="15" x2="215" y2="15" />
                              <line x1="25" y1="12" x2="25" y2="18" />
                              <line x1="215" y1="12" x2="215" y2="18" />
                              <text x="120" y="11" fill="#F59E0B" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none" fontWeight="bold">TOTAL LENGTH = 36.50m (120'-0")</text>

                              {/* Vertical overall depth */}
                              <line x1="15" y1="25" x2="15" y2="115" />
                              <line x1="12" y1="25" x2="18" y2="25" />
                              <line x1="12" y1="115" x2="18" y2="115" />
                              <text x="8" y="70" fill="#F59E0B" fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none" transform="rotate(-90 8 70)" fontWeight="bold">TOTAL WIDTH = 18.28m (60'-0")</text>
                            </g>
                          )}
                        </svg>

                        <div className="absolute bottom-2 right-2 bg-slate-900/90 border border-slate-700 p-1.5 rounded text-[8px] font-mono text-sky-300">
                          MODEL SPACE RENDER • METRIC COORDINATES
                        </div>
                      </div>
                    </div>
                  )}

                  {/* IF RUDA Layout Approval */}
                  {selectedProject.id === 'project-2' && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-slate-100 p-3 rounded-lg border border-[#E2E8F0]">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-slate-600">Active Map Layer:</span>
                          <div className="inline-flex rounded-md shadow-xs">
                            <button
                              onClick={() => setRudaLayer('zoning')}
                              className={`px-3 py-1.5 text-xs font-bold rounded-l border ${
                                rudaLayer === 'zoning' ? 'bg-[#10B981] border-[#10B981] text-white' : 'bg-white border-[#CBD5E1] text-[#334155]'
                              }`}
                            >
                              Plot Zoning
                            </button>
                            <button
                              onClick={() => setRudaLayer('roads')}
                              className={`px-3 py-1.5 text-xs font-bold border-t border-b border-r ${
                                rudaLayer === 'roads' ? 'bg-[#10B981] border-[#10B981] text-white' : 'bg-white border-[#CBD5E1] text-[#334155]'
                              }`}
                            >
                              Road Alignments
                            </button>
                            <button
                              onClick={() => setRudaLayer('green')}
                              className={`px-3 py-1.5 text-xs font-bold rounded-r border-t border-b border-r ${
                                rudaLayer === 'green' ? 'bg-[#10B981] border-[#10B981] text-white' : 'bg-white border-[#CBD5E1] text-[#334155]'
                              }`}
                            >
                              Mandatory Green (10%)
                            </button>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-slate-500 font-bold">
                          Click subdivisions below for verification data.
                        </span>
                      </div>

                      {/* Subdivision Interactive Canvas */}
                      <div className="bg-[#111827] rounded-lg border border-[#1F2937] p-4 flex flex-col md:flex-row gap-4 items-center relative min-h-80 justify-between">
                        <div className="w-full md:w-3/5 h-64 relative flex items-center justify-center">
                          <svg className="w-full h-full text-slate-400" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="0.75">
                            {/* Road Layer Grid */}
                            <path d="M 10 30 L 190 30" stroke={rudaLayer === 'roads' ? '#F59E0B' : '#4B5563'} strokeWidth={rudaLayer === 'roads' ? '4' : '2'} />
                            <path d="M 10 80 L 190 80" stroke={rudaLayer === 'roads' ? '#F59E0B' : '#4B5563'} strokeWidth={rudaLayer === 'roads' ? '4' : '2'} />
                            <line x1="60" y1="10" x2="60" y2="110" stroke={rudaLayer === 'roads' ? '#F59E0B' : '#4B5563'} strokeWidth={rudaLayer === 'roads' ? '3' : '1'} />
                            <line x1="140" y1="10" x2="140" y2="110" stroke={rudaLayer === 'roads' ? '#F59E0B' : '#4B5563'} strokeWidth={rudaLayer === 'roads' ? '3' : '1'} />

                            {/* Parcels */}
                            {/* Row 1 North */}
                            <rect 
                              x="15" y="10" width="35" height="15" 
                              fill={selectedParcel === 'Plot 01' ? '#10B981' : rudaLayer === 'zoning' ? '#374151' : 'none'} 
                              fillOpacity="0.4"
                              stroke="#10B981" 
                              className="cursor-pointer hover:fill-slate-600 transition-all"
                              onClick={() => setSelectedParcel('Plot 01')}
                            />
                            <rect 
                              x="70" y="10" width="30" height="15" 
                              fill={selectedParcel === 'Plot 02' ? '#10B981' : rudaLayer === 'zoning' ? '#374151' : 'none'} 
                              fillOpacity="0.4"
                              stroke="#10B981" 
                              className="cursor-pointer hover:fill-slate-600 transition-all"
                              onClick={() => setSelectedParcel('Plot 02')}
                            />
                            <rect 
                              x="105" y="10" width="30" height="15" 
                              fill={selectedParcel === 'Plot 03' ? '#10B981' : rudaLayer === 'zoning' ? '#374151' : 'none'} 
                              fillOpacity="0.4"
                              stroke="#10B981" 
                              className="cursor-pointer hover:fill-slate-600 transition-all"
                              onClick={() => setSelectedParcel('Plot 03')}
                            />

                            {/* Center Reserved Green Space */}
                            <rect 
                              x="70" y="38" width="65" height="35" 
                              fill={rudaLayer === 'green' ? '#059669' : '#047857'} 
                              fillOpacity={rudaLayer === 'green' ? '0.7' : '0.2'} 
                              stroke="#34D399" 
                              strokeDasharray="1 1"
                              className="cursor-pointer"
                              onClick={() => setSelectedParcel('Community Park')}
                            />
                            <text x="102" y="58" fill="#34D399" fontSize="4.5" fontFamily="monospace" textAnchor="middle" stroke="none">MANDATORY GREEN (10%)</text>

                            {/* Row 2 South */}
                            <rect 
                              x="15" y="90" width="35" height="20" 
                              fill={selectedParcel === 'Plot 04' ? '#10B981' : rudaLayer === 'zoning' ? '#374151' : 'none'} 
                              fillOpacity="0.4"
                              stroke="#10B981" 
                              className="cursor-pointer hover:fill-slate-600 transition-all"
                              onClick={() => setSelectedParcel('Plot 04')}
                            />
                            <rect 
                              x="70" y="90" width="30" height="20" 
                              fill={selectedParcel === 'Plot 05' ? '#10B981' : rudaLayer === 'zoning' ? '#374151' : 'none'} 
                              fillOpacity="0.4"
                              stroke="#10B981" 
                              className="cursor-pointer hover:fill-slate-600 transition-all"
                              onClick={() => setSelectedParcel('Plot 05')}
                            />
                            <rect 
                              x="150" y="90" width="35" height="20" 
                              fill={selectedParcel === 'Commercial Strip' ? '#1D4ED8' : rudaLayer === 'zoning' ? '#1E3A8A' : 'none'} 
                              fillOpacity="0.4"
                              stroke="#3B82F6" 
                              className="cursor-pointer hover:fill-blue-900 transition-all"
                              onClick={() => setSelectedParcel('Commercial Strip')}
                            />

                            {/* Labels */}
                            <text x="32" y="20" fill="#E5E7EB" fontSize="4" fontFamily="monospace" stroke="none" textAnchor="middle">P-01</text>
                            <text x="85" y="20" fill="#E5E7EB" fontSize="4" fontFamily="monospace" stroke="none" textAnchor="middle">P-02</text>
                            <text x="120" y="20" fill="#E5E7EB" fontSize="4" fontFamily="monospace" stroke="none" textAnchor="middle">P-03</text>
                            <text x="32" y="102" fill="#E5E7EB" fontSize="4" fontFamily="monospace" stroke="none" textAnchor="middle">P-04</text>
                            <text x="85" y="102" fill="#E5E7EB" fontSize="4" fontFamily="monospace" stroke="none" textAnchor="middle">P-05</text>
                            <text x="167" y="102" fill="#3B82F6" fontSize="4.5" fontFamily="monospace" stroke="none" textAnchor="middle" fontWeight="bold">COMMERCIAL</text>

                            {/* Road Width indicators */}
                            {rudaLayer === 'roads' && (
                              <g fill="#F59E0B" fontSize="3.5" fontFamily="monospace">
                                <text x="100" y="29" textAnchor="middle" stroke="none">12M WIDE ROADWAY (PRIMARY)</text>
                                <text x="100" y="79" textAnchor="middle" stroke="none">9M ARTERIAL ACCESS</text>
                              </g>
                            )}
                          </svg>
                        </div>

                        {/* Interactive Parcel Sidebar (col-span-2) */}
                        <div className="w-full md:w-2/5 bg-slate-900 text-slate-100 p-4 rounded-lg border border-slate-800 space-y-4">
                          <h5 className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
                            <Info className="w-3.5 h-3.5" />
                            Cadastral Attributes
                          </h5>
                          
                          {selectedParcel ? (
                            <div className="space-y-3 font-mono text-xs">
                              <div>
                                <span className="text-slate-500 block text-[9px] uppercase">SUBDIVISION ID:</span>
                                <span className="font-bold text-white text-sm">{selectedParcel}</span>
                              </div>
                              
                              <div>
                                <span className="text-slate-500 block text-[9px] uppercase">RUDA LAND ZONING:</span>
                                <span className={`font-bold ${selectedParcel.includes('Commercial') ? 'text-blue-400' : selectedParcel.includes('Park') ? 'text-emerald-400' : 'text-slate-200'}`}>
                                  {selectedParcel.includes('Commercial') ? 'Commercial (C-2 Zone)' : selectedParcel.includes('Park') ? 'Public Utility Reserve' : 'Residential (R-1 Zone)'}
                                </span>
                              </div>

                              <div>
                                <span className="text-slate-500 block text-[9px] uppercase">DIMENSIONS & COVERAGE:</span>
                                <span className="font-bold text-slate-300">
                                  {selectedParcel.includes('Park') ? '65ft x 35ft (2275 sq ft)' : '40ft x 60ft (2400 sq ft)'}
                                </span>
                              </div>

                              <div className="bg-slate-950 p-2 border border-slate-800 rounded">
                                <span className="text-emerald-400 font-bold block text-[9px]">COMPLIANCE STATUS:</span>
                                <span className="text-[10px] text-slate-300">
                                  {selectedParcel.includes('Park') ? 'Passes mandatory 10% Open Space Regulation (Andhra Pradesh Rule 14)' : 'Boundary Checked, No overlaps, 3.5m Front setback Complied.'}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <p className="text-xs text-slate-400 italic">
                              Click on any highlighted subdivision parcel on the left layout map to parse its CAD attributes, setbacks, and AP zoning parameters instantly.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* IF Other Projects (3 and 4) */}
                  {selectedProject.id !== 'project-1' && selectedProject.id !== 'project-2' && (
                    <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 text-center font-mono text-xs text-slate-500">
                      <Layers className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                      Isometric drafting vectors are compiled inside original project directories. 
                      Please reference the L&T BIM Revit sheets or ArcGIS Pro raster exports inside her official files.
                    </div>
                  )}

                </div>
              )}

              {/* TAB 3: STRUCTURAL & ENGINEERING SPECS */}
              {activeTab === 'specs' && (
                <div className="space-y-6 font-mono text-xs">
                  
                  {/* Common structural specifications table */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#0F172A] flex items-center text-xs uppercase tracking-wider font-sans">
                      <Landmark className="w-4 h-4 mr-2 text-[#2563EB]" />
                      Structural Design Calculations & Load Schedules
                    </h4>

                    {selectedProject.id === 'project-1' || selectedProject.id === 'project-4' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50 border border-[#E2E8F0] p-4 rounded-lg space-y-2">
                          <span className="font-bold text-[#2563EB] block border-b pb-1">ETABS LOAD PARAMETERS (IS 875)</span>
                          <div className="space-y-1.5 text-[11px] text-[#475569]">
                            <div className="flex justify-between"><span>Slab Dead Load:</span><span className="font-bold text-[#0F172A]">3.75 kN/m²</span></div>
                            <div className="flex justify-between"><span>Slab Live Load:</span><span className="font-bold text-[#0F172A]">4.00 kN/m² (Commercial)</span></div>
                            <div className="flex justify-between"><span>Floor Finish:</span><span className="font-bold text-[#0F172A]">1.50 kN/m²</span></div>
                            <div className="flex justify-between"><span>Seismic Coefficient:</span><span className="font-bold text-[#0F172A]">Zone III (AP Coastline)</span></div>
                            <div className="flex justify-between"><span>Response Reduction (R):</span><span className="font-bold text-[#0F172A]">5.0 (SMRF Frame)</span></div>
                          </div>
                        </div>

                        <div className="bg-slate-50 border border-[#E2E8F0] p-4 rounded-lg space-y-2">
                          <span className="font-bold text-[#2563EB] block border-b pb-1">MEMBER STRUCTURAL SIZING</span>
                          <div className="space-y-1.5 text-[11px] text-[#475569]">
                            <div className="flex justify-between"><span>Main Column C1-C8:</span><span className="font-bold text-[#0F172A]">300mm x 450mm</span></div>
                            <div className="flex justify-between"><span>Plinth Beams PB-1:</span><span className="font-bold text-[#0F172A]">230mm x 350mm</span></div>
                            <div className="flex justify-between"><span>Slab S1 Thickness:</span><span className="font-bold text-[#0F172A]">150mm (Two-Way Slab)</span></div>
                            <div className="flex justify-between"><span>Foundation Depth:</span><span className="font-bold text-[#0F172A]">1.8m below G.L. (Isolated Pedestal)</span></div>
                            <div className="flex justify-between"><span>Rebar Yield Strength:</span><span className="font-bold text-[#0F172A]">Fe 500 (TMT Bars)</span></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-50 border border-[#E2E8F0] p-4 rounded-lg space-y-2">
                        <span className="font-bold text-[#2563EB] block border-b pb-1">TOWN PLANNING ALIGNMENTS & SURVEYING SETS</span>
                        <div className="space-y-1.5 text-[11px] text-[#475569]">
                          <div className="flex justify-between"><span>Primary Access Roadways:</span><span className="font-bold text-[#0F172A]">12.0 Meters wide alignment</span></div>
                          <div className="flex justify-between"><span>Sub-division internal streets:</span><span className="font-bold text-[#0F172A]">9.0 Meters wide alignment</span></div>
                          <div className="flex justify-between"><span>Plot Area Standard:</span><span className="font-bold text-[#0F172A]">40ft x 60ft (Regular Grid)</span></div>
                          <div className="flex justify-between"><span>Total Station Benchmark:</span><span className="font-bold text-[#0F172A]">BM #12 (EL: 45.321m MSL)</span></div>
                          <div className="flex justify-between"><span>Regional Max coverage:</span><span className="font-bold text-[#0F172A]">65% maximum permissible plinth</span></div>
                        </div>
                      </div>
                    )}

                    <div className="p-4 border border-[#CBD5E1] bg-white rounded-lg text-[11px] space-y-2 text-[#475569]">
                      <span className="font-bold text-[#0F172A] block uppercase font-sans">Engineering Codes Applied:</span>
                      <ul className="list-disc pl-4 space-y-1 font-sans">
                        {selectedProject.standards.map((st, idx) => (
                          <li key={idx} className="leading-relaxed font-mono text-xs">{st}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 4: RUDA & CODE COMPLIANCE */}
              {activeTab === 'compliance' && (
                <div className="space-y-6">
                  
                  {/* AP Building Rules 2017 & NBC 2016 Checklist */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#0F172A] flex items-center text-xs uppercase tracking-wider font-mono">
                      <ClipboardCheck className="w-4 h-4 mr-2 text-[#10B981]" />
                      Andhra Pradesh Municipal zoning & National building code check
                    </h4>

                    <div className="bg-white border border-[#CBD5E1] rounded-lg overflow-hidden">
                      <table className="w-full text-xs text-left text-slate-700">
                        <thead className="bg-[#0F172A] text-slate-200 text-[10px] font-mono font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Reference Rule / Standard</th>
                            <th className="p-3">Required Parameters</th>
                            <th className="p-3">Design Parameters</th>
                            <th className="p-3">Compliance Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-sans">
                          {selectedProject.id === 'project-1' ? (
                            <>
                              <tr>
                                <td className="p-3 font-semibold text-[#0F172A]">NBC 2016 Part 4 - Fire & Egress</td>
                                <td className="p-3">Corridor Width ≥ 1.5m</td>
                                <td className="p-3 font-mono">1.8m Corridors</td>
                                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">PASSED</span></td>
                              </tr>
                              <tr>
                                <td className="p-3 font-semibold text-[#0F172A]">AP Building Rules - Commercial Setback</td>
                                <td className="p-3">Front Margin ≥ 5.0m</td>
                                <td className="p-3 font-mono">5.5m Margin</td>
                                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">PASSED</span></td>
                              </tr>
                              <tr>
                                <td className="p-3 font-semibold text-[#0F172A]">NBC Part 3 - Height Restrictions</td>
                                <td className="p-3">G+1 ≤ 9.0 meters total</td>
                                <td className="p-3 font-mono">7.30m Frame height</td>
                                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">PASSED</span></td>
                              </tr>
                              <tr>
                                <td className="p-3 font-semibold text-[#0F172A]">IS 456 Structural Concrete Clear Cover</td>
                                <td className="p-3">Slab ≥ 15mm; Column ≥ 40mm</td>
                                <td className="p-3 font-mono">Slab: 20mm; Column: 40mm</td>
                                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">PASSED</span></td>
                              </tr>
                            </>
                          ) : (
                            <>
                              <tr>
                                <td className="p-3 font-semibold text-[#0F172A]">AP Municipal Rules - Open Space</td>
                                <td className="p-3">10% reserved for public park</td>
                                <td className="p-3 font-mono">10.5% layout allocation</td>
                                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">PASSED</span></td>
                              </tr>
                              <tr>
                                <td className="p-3 font-semibold text-[#0F172A]">RUDA Zoning Bylaws - Roadway Widths</td>
                                <td className="p-3">Main approach ≥ 12.0m width</td>
                                <td className="p-3 font-mono">12.0m roads drafted</td>
                                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">PASSED</span></td>
                              </tr>
                              <tr>
                                <td className="p-3 font-semibold text-[#0F172A]">National Urban Zoning (GIS Check)</td>
                                <td className="p-3">No overlaps with buffer wetlands</td>
                                <td className="p-3 font-mono">Wetlands setback mapped</td>
                                <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">PASSED</span></td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg text-xs leading-relaxed text-[#1D4ED8]">
                      <strong>Verification Seal:</strong> This municipal/industrial layout check was performed in compliance with regional Rajahmundry Urban Development planning guidelines, validating boundary offsets, parking ratios, and zoning configurations.
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Modal Bottom action block */}
            <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] p-4 flex justify-between items-center" id="modal-footer">
              <span className="text-[10px] text-[#64748B] font-mono font-bold uppercase">
                DHANYA BOTLA • CIVIL ENGINEERING ACADEMIC SPECIFICATION
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-md cursor-pointer transition-colors"
                id="close-modal-btn"
              >
                Close Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
