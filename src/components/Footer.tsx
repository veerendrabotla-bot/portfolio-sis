/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, BookOpen, Music, Cpu, Sparkles, Send } from 'lucide-react';

interface FooterProps {
  isContactOpen: boolean;
  onContactClose: () => void;
}

export default function Footer({ isContactOpen, onContactClose }: FooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const emailVal = 'dhanyabotla@gmail.com';
  const phoneVal = '+91 9390948557';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
        setMessageText('');
      }, 3000);
    }
  };

  // Hobbies / Personal interests from Resume: "Reading, Music, Learning New Technologies."
  const hobbies = [
    { label: 'Reading', icon: <BookOpen className="w-4 h-4 text-[#2563EB]" />, desc: 'Technical civil papers & standard guides' },
    { label: 'Music', icon: <Music className="w-4 h-4 text-[#0EA5E9]" />, desc: 'Calming tracks during deep layout drafting' },
    { label: 'Learning New Tech', icon: <Cpu className="w-4 h-4 text-[#10B981]" />, desc: 'Exploring next-gen BIM & AI workflows' },
  ];

  return (
    <footer className="bg-[#0F172A] text-slate-400 py-12 border-t border-slate-800" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row with info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-10 border-b border-slate-800" id="footer-top-grid">
          
          {/* Brand/Introduction (md: col-span-5) */}
          <div className="md:col-span-5 space-y-4" id="footer-brand-summary">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded bg-[#2563EB] flex items-center justify-center text-white font-mono font-bold text-base">
                DB
              </div>
              <span className="font-sans font-bold text-white tracking-tight leading-none text-base">
                DHANYA BOTLA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Civil Engineering undergraduate specialling in architectural layout coordination, municipal town planning permissions, and 3D Revit modeling workflows.
            </p>
          </div>

          {/* Hobbies / Core Personal Interests section (md: col-span-4) */}
          <div className="md:col-span-4 space-y-4" id="footer-hobbies">
            <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider block">
              Hobbies & Personal Interests:
            </span>
            <div className="space-y-3" id="hobbies-list">
              {hobbies.map((hobby) => (
                <div key={hobby.label} className="flex items-center space-x-3 bg-slate-900 border border-slate-800/60 p-2.5 rounded-lg">
                  <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center shrink-0">
                    {hobby.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-none">{hobby.label}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">{hobby.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contacts Info Links (md: col-span-3) */}
          <div className="md:col-span-3 space-y-4" id="footer-quick-contacts">
            <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider block">
              Quick Contact Access:
            </span>
            <div className="space-y-3">
              <button
                onClick={() => copyToClipboard(emailVal, 'email')}
                className="w-full flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 hover:bg-slate-800/50 cursor-pointer transition-all text-xs"
              >
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <span className="text-slate-300 truncate max-w-[150px]">{emailVal}</span>
                </div>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-white" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(phoneVal, 'phone')}
                className="w-full flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 hover:bg-slate-800/50 cursor-pointer transition-all text-xs"
              >
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#0EA5E9]" />
                  <span className="text-slate-300">{phoneVal}</span>
                </div>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-white" />
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4" id="footer-bottom-bar">
          <p className="text-center sm:text-left">
            Designed for Dhanya Botla | Civil Engineering & BIM © 2026
          </p>
          <div className="flex items-center space-x-4">
            <span className="font-mono text-[9px] bg-slate-900 border border-slate-800 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-widest">
              RUDA Approved Layout Formats v2026
            </span>
          </div>
        </div>

      </div>

      {/* Slide-out/Overlay Interactive Contact & Connect Modal Popup */}
      {isContactOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
          onClick={onContactClose}
          id="contact-modal-backdrop"
        >
          <div 
            className="bg-white border border-[#CBD5E1] rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
            id="contact-modal-content"
          >
            {/* Header */}
            <div className="bg-[#2563EB] text-white p-5 border-b border-[#1D4ED8]" id="contact-modal-header">
              <span className="font-mono text-[9px] text-sky-200 font-bold tracking-widest uppercase block mb-1">
                Direct Communication Portal
              </span>
              <h3 className="text-lg font-extrabold tracking-tight">
                Connect with Dhanya Botla
              </h3>
              <p className="text-xs text-sky-100 mt-1">
                Reach out directly or send a message regarding opportunities, layout plans, or BIM partnerships.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-5 font-sans" id="contact-modal-body">
              
              {/* Copy-to-Clipboard block */}
              <div className="space-y-3">
                <span className="text-[10px] text-[#64748B] font-mono font-bold uppercase tracking-wider block">
                  Click to Copy Engineering Credentials:
                </span>
                
                {/* Email Copy */}
                <div className="flex items-center justify-between p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider font-mono">Email Address</span>
                      <span className="text-xs font-bold text-[#0F172A] break-all">{emailVal}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(emailVal, 'email')}
                    className="p-2 bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-md cursor-pointer transition-colors"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <span className="text-xs text-[#10B981] font-bold flex items-center">
                        <Check className="w-3.5 h-3.5 mr-1" />
                        Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4 text-[#475569]" />
                    )}
                  </button>
                </div>

                {/* Phone Copy */}
                <div className="flex items-center justify-between p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider font-mono">Phone Number</span>
                      <span className="text-xs font-bold text-[#0F172A]">{phoneVal}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(phoneVal, 'phone')}
                    className="p-2 bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-md cursor-pointer transition-colors"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? (
                      <span className="text-xs text-[#10B981] font-bold flex items-center">
                        <Check className="w-3.5 h-3.5 mr-1" />
                        Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4 text-[#475569]" />
                    )}
                  </button>
                </div>

              </div>

              {/* Quick Contact Form */}
              <form onSubmit={handleSendMessage} className="space-y-3 pt-2 border-t border-[#F1F5F9]">
                <label htmlFor="modal-message-input" className="text-[10px] text-[#64748B] font-mono font-bold uppercase tracking-wider block">
                  Quick Message Draft:
                </label>
                <div className="relative">
                  <textarea
                    id="modal-message-input"
                    rows={3}
                    placeholder="Type your design proposal, site specification, or greetings here..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full text-xs p-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#2563EB] bg-white resize-none text-[#0F172A]"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={messageSent || !messageText.trim()}
                  className={`w-full inline-flex items-center justify-center py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors cursor-pointer ${
                    messageSent 
                      ? 'bg-[#10B981]' 
                      : 'bg-[#0F172A] hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed'
                  }`}
                >
                  {messageSent ? (
                    <span className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Message Dispatched!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-3.5 h-3.5 mr-2" />
                      Dispatch Message
                    </span>
                  )}
                </button>
              </form>

            </div>

            {/* Bottom action block */}
            <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] p-3.5 flex justify-end" id="contact-modal-footer">
              <button
                onClick={onContactClose}
                className="px-4 py-2 bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] text-[#0F172A] font-bold text-xs uppercase tracking-wider rounded-md cursor-pointer transition-colors"
                id="close-contact-modal-btn"
              >
                Close Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
