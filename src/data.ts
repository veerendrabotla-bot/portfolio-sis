/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, TimelineEvent, SkillCategory, Certification } from './types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'G+1 Commercial Hotel Building',
    category: 'BIM & Structural',
    role: 'Lead Student Designer',
    organization: 'L&T BIM Internship',
    tools: ['AutoCAD', 'Revit', 'BIM Concepts', 'Building Planning'],
    shortDescription: 'Designed a complete G+1 commercial hotel building applying BIM concepts, structural codes, and engineering standards.',
    detailedDescription: 'Developed a comprehensive architectural and structural G+1 commercial hotel project. The workflow involved drafting detailed AutoCAD floor plans, building rich parametric 3D models in Autodesk Revit to leverage Building Information Modeling (BIM) data, and arranging precise spatial zoning for modern hospitality facilities.',
    objectives: [
      'Create standard code-compliant architectural layouts for a functional boutique hotel.',
      'Construct a 3D BIM model using Revit to coordinate architectural and structural elements.',
      'Generate accurate sheets, plans, elevations, and sections directly from the parametric model.',
      'Apply standard commercial building codes including egress planning and corridor layouts.'
    ],
    standards: [
      'National Building Code of India (NBC 2016)',
      'IS 456:2000 (Plain and Reinforced Concrete - Code of Practice)',
      'Local zoning bylaws for commercial setbacks and parking guidelines'
    ],
    highlights: [
      'Engineered detailed spatial layouts for 12 ensuite hotel rooms and 1 master dining lobby.',
      'Established exact column-to-beam center-line grids and structural framing layouts.',
      'Coordinated electrical, plumbing, and mechanical service corridors within Revit.',
      'Delivered clear blueprint presentation sheets showing elevations, structural sections, and door-window schedules.'
    ],
    imageType: 'hotel'
  },
  {
    id: 'project-2',
    title: 'RUDA Layout Approval & Planning',
    category: 'Urban Layouts & RUDA',
    role: 'Civil Engineering Intern',
    organization: 'Rajahmundry Urban Development Authority (RUDA)',
    tools: ['AutoCAD', 'Zoning Bylaws', 'Layout Verification', 'Technical Documentation'],
    shortDescription: 'Prepared and modified AutoCAD layout drawings, reviewed structural drawings, assisted in layout approval documentation, and supported planning verification.',
    detailedDescription: 'Worked inside the municipal town planning division of RUDA. The role centered on verifying land subdivision plans submitted by private developers against regional master plans, identifying municipal boundary clashes, checking road widths, and ensuring structural compliance before granting official development permissions.',
    objectives: [
      'Audit incoming private layout designs for municipal boundary compliance.',
      'Draft and modify master plan zoning alignments and arterial road cross-sections in AutoCAD.',
      'Review structural design calculations for regional approval documentation.',
      'Liaise with field surveyors to verify onsite layout markings and boundary offsets.'
    ],
    standards: [
      'Andhra Pradesh Building Rules 2017',
      'RUDA Regional Master Plan Zoning Bylaws',
      'National Urban Planning Criteria for open space and amenity allocations'
    ],
    highlights: [
      'Analyzed and processed over 15+ large-scale residential and commercial layout schemes.',
      'Modified and re-aligned layout sub-divisions in AutoCAD to satisfy the mandatory 10% open space rule.',
      'Streamlined technical approval logs, reducing document review cycle times by 15%.',
      'Accompanied senior planners on site visits to audit Total Station bench-marks.'
    ],
    imageType: 'ruda'
  },
  {
    id: 'project-3',
    title: 'Spatial Analysis & GIS Mapping',
    category: 'GIS & Surveying',
    role: 'Civil Engineering Undergrad',
    organization: 'Academic Survey & Lab Work',
    tools: ['ArcGIS Pro', 'Total Station', 'Surveying', 'Contouring'],
    shortDescription: 'Mapping and spatial data analysis for infrastructure feasibility studies and land elevation profiling.',
    detailedDescription: 'Conducted field survey and GIS processing to generate high-fidelity spatial contour maps and digital elevation profiles. Field data collected via Total Station surveys was exported, cleaned, and compiled into GIS databases to map land topography, analyze slope steepness, and assess catchments for sustainable civil engineering site preparation.',
    objectives: [
      'Operate advanced Total Station equipment to capture high-accuracy coordinate datasets.',
      'Construct a 3D Digital Elevation Model (DEM) and detailed contour sheets in ArcGIS Pro.',
      'Analyze site topography for soil erosion vulnerability and natural drainage paths.',
      'Evaluate land usability constraints for future campus expansion zones.'
    ],
    standards: [
      'Survey of India Map Grid reference coordinates',
      'IRC (Indian Roads Congress) standards for route geometry and gradient assessment'
    ],
    highlights: [
      'Successfully surveyed a 5-acre rugged terrain with complex elevation changes using a digital Total Station.',
      'Generated detailed contour lines with 0.5-meter vertical intervals to map natural valleys.',
      'Conducted spatial slope-analysis to isolate safe, buildable zones with less than 8% grade.',
      'Formatted GIS attribute tables mapping existing underground utilities, vegetation cover, and access roads.'
    ],
    imageType: 'gis'
  },
  {
    id: 'project-4',
    title: 'Quantity Estimation & Structural Modeling',
    category: 'BIM & Structural',
    role: 'Civil Engineering Student',
    organization: 'Structural Analysis Laboratory',
    tools: ['ETABS', 'Civil 3D', 'MS Excel', 'Quantity Takeoff'],
    shortDescription: 'Structural analysis and estimation models for multi-story load testing and material quantity calculations.',
    detailedDescription: 'Simulated structural loading behavior on a multi-story concrete framing model in ETABS. Used Civil 3D to create accurate earthwork grading models, followed by rigorous material quantity takeoffs using MS Excel parametric spreadsheets. This project represents the integration of structural design stability with real-world construction economics.',
    objectives: [
      'Build a code-compliant structural framing skeleton inside ETABS representing a 3-story residential module.',
      'Perform static analysis under combined Dead, Live, and Wind loads.',
      'Establish a detailed quantity estimation database to forecast concrete volume and steel reinforcement requirements.',
      'Utilize Civil 3D to model site grading and balance cut-and-fill soil volumes.'
    ],
    standards: [
      'IS 875 (Part 1-3) for structural design load calculations (Dead, Live, and Wind)',
      'IS 1893:2016 for basic seismic load assumptions',
      'IS 1200 for methods of measurement of building and civil engineering works'
    ],
    highlights: [
      'Modeled a 3D rigid-jointed frame subjected to multiple load combinations in ETABS.',
      'Calculated total concrete requirements yielding precise volumetric measurements for slabs, beams, and columns.',
      'Formulated a dynamic Microsoft Excel estimation template that automates reinforcement steel weight calculations based on bar bending schedules (BBS).',
      'Developed Civil 3D grading models that optimized excavation volumes, reducing total soil disposal costs.'
    ],
    imageType: 'estimation'
  }
];

export const timelineData: TimelineEvent[] = [
  {
    id: 'timeline-1',
    type: 'experience',
    title: 'Civil Engineering Intern',
    subtitle: 'Rajahmundry Urban Development Authority (RUDA)',
    institution: 'RUDA Town Planning Office',
    period: 'June – July 2026 (2 Months)',
    description: [
      'Prepared and modified detailed community layout blueprints in AutoCAD.',
      'Reviewed structural and architectural drawings submitted for official municipal approvals.',
      'Assisted in regional land-use verification and technical layout documentation processes.',
      'Collaborated with senior urban planners on zoning guideline checks and field survey verifications.'
    ],
    highlights: [
      'Developed a strong working knowledge of municipal zoning laws, setbacks, and land development rules.',
      'Honed expert speed and precision in drafting AutoCAD site plans and subdivision borders.'
    ]
  },
  {
    id: 'timeline-2',
    type: 'education',
    title: 'B.Tech in Civil Engineering',
    subtitle: 'Aditya College of Engineering and Technology, Aditya University',
    institution: 'Aditya University, Surampalem, AP',
    period: '2023 – 2027',
    description: [
      'Specializing in structural design, CAD, BIM workflows, and modern infrastructure systems.',
      'Participating in hands-on laboratories for surveying (Total Station), fluid mechanics, soil engineering, and structural analysis.',
      'Ongoing G+1 commercial hotel building planning and design as part of the L&T BIM academic program.'
    ],
    grade: 'CGPA: 7.83 / 10.0'
  },
  {
    id: 'timeline-3',
    type: 'education',
    title: 'Intermediate (BIEAP)',
    subtitle: 'KSN Junior College',
    institution: 'Andhra Pradesh, India',
    period: '2021 – 2023',
    description: [
      'Completed pre-university education with primary focus on Mathematics, Physics, and Chemistry (MPC).'
    ],
    grade: 'Score: 82.1%'
  },
  {
    id: 'timeline-4',
    type: 'education',
    title: 'Secondary School Certificate (SSC)',
    subtitle: 'Sri Vivekananda Talent School',
    institution: 'Andhra Pradesh, India',
    period: '2020 – 2021',
    description: [
      'Completed Class X general education board examinations with 574 marks.'
    ],
    grade: 'Percentage: 95.6%'
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: 'CAD & Structural Software',
    skills: ['AutoCAD 2026', 'Autodesk Revit 2022', 'ETABS', 'Civil 3D', 'ArcGIS Pro'],
    icon: 'Hammer'
  },
  {
    title: 'Core Engineering',
    skills: ['BIM Workflows', 'Building Planning', 'Quantity Estimation', 'Surveying (Total Station)', 'Land Subdivision Layouts'],
    icon: 'Compass'
  },
  {
    title: 'Management & Tools',
    skills: ['Construction Management', 'Risk Management Foundations', 'Project Tracking', 'MS Excel', 'MS PowerPoint'],
    icon: 'Briefcase'
  },
  {
    title: 'Languages & Core Strengths',
    skills: ['English (Professional)', 'Telugu (Native)', 'Paper Presentation', 'Hackathon Participation', 'Collaborative Leadership'],
    icon: 'Languages'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'AutoCAD 2026 Certification',
    issuer: 'Authorized Training Center',
    year: '2025',
    description: 'Advanced drafting, geometric constraints, custom blocks, and layout space setups.',
    skillsLearned: ['Layout scale calibration', 'Coordinate systems', 'Isometric drafting']
  },
  {
    id: 'cert-2',
    title: 'Revit 2022 Certification',
    issuer: 'BIM Academy',
    year: '2025',
    description: 'Parametric 3D building modeling, family creation, structural scheduling, and documentation sheets.',
    skillsLearned: ['Parametric modeling', 'Schedules & Takeoffs', 'Structural columns & beams placement']
  },
  {
    id: 'cert-3',
    title: 'ArcGIS Pro Spatial Analysis',
    issuer: 'Esri Academy / Institution',
    year: '2025',
    description: 'Topographic mapping, coordinate reference systems, digital elevation modeling, and raster analysis.',
    skillsLearned: ['Raster contour creation', 'Spatial overlay analysis', 'Georeferencing']
  },
  {
    id: 'cert-4',
    title: 'Building Information Modeling',
    issuer: 'L&T EduTech',
    year: '2025',
    description: 'Successfully completed the course in Building Information Modeling with First Class (A+) offered by the CollegeConnect Programme of L&T EduTech during the period 30 Jul 2025 to 20 Nov 2025.',
    skillsLearned: ['BIM Cloud Work-sharing', 'Clash Detection', 'Level of Development (LOD) Standards', 'Common Data Environments (CDE)']
  },
  {
    id: 'cert-5',
    title: 'Construction Management & Project Risk Foundations',
    issuer: 'Project Management Academy',
    year: '2024',
    description: 'Scheduling methods, critical path analysis, risk response strategies, and budget controls.',
    skillsLearned: ['CPM Scheduling', 'Risk Identification Matrix', 'Stakeholder alignment']
  }
];
