/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Compass, Phone } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onSectionClick: (sectionId: string) => void;
}

export default function Navbar({ onContactClick, onSectionClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Education & Timeline', id: 'timeline' },
    { label: 'Projects & Experience', id: 'projects' },
    { label: 'Skills Matrix', id: 'skills' },
    { label: 'Certifications', id: 'certifications' },
  ];

  const handleItemClick = (id: string) => {
    onSectionClick(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]" id="navbar-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Brandmark */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-mono font-bold text-lg shadow-sm group-hover:bg-[#0EA5E9] transition-colors">
              DB
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[#0F172A] tracking-tight leading-none text-base">
                DHANYA BOTLA
              </span>
              <span className="font-mono text-[10px] text-[#0EA5E9] tracking-widest font-semibold mt-0.5 uppercase">
                Civil Undergraduate
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" id="desktop-menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-sm font-semibold text-[#475569] hover:text-[#2563EB] transition-colors relative py-2 cursor-pointer font-sans"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md transition-colors shadow-sm cursor-pointer"
              id="desktop-contact-btn"
            >
              <Phone className="w-3.5 h-3.5 mr-2" />
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden" id="mobile-menu-btn-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#475569] hover:text-[#0F172A] p-2 rounded-md"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 pt-2 pb-4 space-y-2 animate-fade-in" id="mobile-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold text-[#475569] hover:bg-[#F8FAFC] hover:text-[#2563EB] transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onContactClick();
                setIsOpen(false);
              }}
              className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md transition-colors shadow-sm cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 mr-2" />
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
