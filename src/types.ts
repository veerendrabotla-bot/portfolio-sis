/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: 'BIM & Structural' | 'Urban Layouts & RUDA' | 'GIS & Surveying' | 'Structural Estimation';
  role: string;
  organization?: string;
  tools: string[];
  shortDescription: string;
  detailedDescription: string;
  objectives: string[];
  standards: string[];
  highlights: string[];
  imageType: 'hotel' | 'ruda' | 'gis' | 'estimation';
}

export interface TimelineEvent {
  id: string;
  type: 'education' | 'experience';
  title: string;
  subtitle: string;
  institution: string;
  period: string;
  description: string[];
  highlights?: string[];
  grade?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  skillsLearned: string[];
  description: string;
}
