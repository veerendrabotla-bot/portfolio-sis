/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  const handleSectionScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // height of the sticky navbar (h-16 is 64px)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectsScroll = () => {
    handleSectionScroll('projects');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#2563EB]/10 selection:text-[#2563EB]" id="app-root">
      {/* Structural Top Navigation bar */}
      <Navbar 
        onContactClick={handleContactOpen} 
        onSectionClick={handleSectionScroll} 
      />

      {/* Hero Header Section */}
      <Hero 
        onProjectsClick={handleProjectsScroll} 
        onContactClick={handleContactOpen} 
        onDownloadCVClick={() => setIsCVOpen(true)}
      />

      {/* Main Sections Wrapper */}
      <main id="main-content-flow">
        
        {/* Education & Experience Career Timeline */}
        <Timeline />

        {/* Dynamic Project blueprint gallery */}
        <Projects />

        {/* Engineering Skills Matrix */}
        <Skills />

        {/* Accreditations and Certifications Ribbon */}
        <Certifications />

      </main>

      {/* Footer and Interactive Contacts Overlay */}
      <Footer 
        isContactOpen={isContactOpen} 
        onContactClose={handleContactClose} 
      />

      {/* Printable Architectural CV Document Modal */}
      <CVModal 
        isOpen={isCVOpen} 
        onClose={() => setIsCVOpen(false)} 
      />
    </div>
  );
}
