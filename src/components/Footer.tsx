import React, { useState } from 'react';
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Heart,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
  Instagram,
} from 'lucide-react';
import { NavSection } from '../types';
import { PAKISTAN_BOARDS } from '../data/portalData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectSection: (section: NavSection) => void;
  onOpenInfoModal: (type: 'about' | 'privacy' | 'disclaimer') => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenInfoModal,
  onShowToast,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes('@')) {
      onShowToast('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    onShowToast('Subscribed! You will now receive daily job and exam alerts.');
    setEmailInput('');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Alert Subscription Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 mb-16 shadow-xl border border-blue-700/50 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 inline-block mb-2">
              Free Daily Job & Exam Alerts
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Never Miss a Government Job or Board Date Sheet
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Receive verified notifications for FPSC, PPSC, BISE Results & Entry Test papers directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2.5">
            <div className="relative w-full sm:w-80">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                id="footer-newsletter-email"
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 text-white placeholder:text-blue-200/70 rounded-xl text-xs sm:text-sm border border-white/20 focus:outline-none focus:bg-white/20 transition-colors"
              />
            </div>
            <button
              id="footer-newsletter-submit-btn"
              type="submit"
              className="px-6 py-3 bg-white hover:bg-blue-50 text-blue-900 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <Send className="w-4 h-4 text-blue-800" />
              <span>Subscribe Free</span>
            </button>
          </form>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Column 1: Brand & About Us (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div
              id="footer-brand-logo-btn"
              onClick={() => onSelectSection('home')}
              className="cursor-pointer group"
            >
              <BrandLogo size="md" variant="light" showSubtitle={true} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              PakStudyJobs is Pakistan’s leading educational resource and employment information network.
              We empower students and job seekers across Islamabad, Punjab, Sindh, KPK, and Balochistan with free access to syllabus notes, past papers, and verified career listings.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                Join Our Student Communities:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors"
                  title="Facebook Community"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-400 hover:text-white transition-colors"
                  title="YouTube Lectures"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-sky-500 text-slate-400 hover:text-white transition-colors"
                  title="X (Twitter)"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-700 text-slate-400 hover:text-white transition-colors"
                  title="LinkedIn Careers"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-400 hover:text-white transition-colors"
                  title="WhatsApp Alerts Channel"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white transition-colors"
                  title="Instagram Study Tips"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation Menu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectSection('home')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('jobs')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Latest Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('notes')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  9th – 12th Notes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('past-papers')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Past Examination Papers
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about-btn"
                  onClick={() => onSelectSection('about')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-privacy-btn"
                  onClick={() => onSelectSection('privacy-policy')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-disclaimer-btn"
                  onClick={() => onSelectSection('disclaimer')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact-btn"
                  onClick={() => onSelectSection('contact')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer font-medium"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-sitemap-btn"
                  onClick={() => onSelectSection('sitemap')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer font-medium"
                >
                  Sitemap
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Board Directory & Resources (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Pakistani Education Boards
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {PAKISTAN_BOARDS.slice(0, 5).map((board) => (
                <li key={board.name} className="flex items-center justify-between">
                  <span>{board.name}</span>
                  <a
                    href={board.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>Portal</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information & Legal Links (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Information
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:jimibhai45@gmal.com"
                  className="text-white hover:text-blue-300 font-mono transition-colors"
                >
                  jimibhai45@gmal.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Phone: Contact via email only</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-1.5 text-xs">
              <button
                id="footer-contact-us-btn"
                onClick={() => onSelectSection('contact')}
                className="text-left text-blue-400 hover:text-white transition-colors cursor-pointer font-medium"
              >
                Contact Us & Support Hub
              </button>
              <button
                id="footer-about-us-btn"
                onClick={() => onSelectSection('about')}
                className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                id="footer-privacy-policy-btn"
                onClick={() => onSelectSection('privacy-policy')}
                className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                id="footer-disclaimer-btn"
                onClick={() => onSelectSection('disclaimer')}
                className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Disclaimer & Fair Use
              </button>
            </div>
          </div>
        </div>

        {/* Independent Platform Notice Banner */}
        <div className="mt-8 pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] shrink-0 mt-0.5">
              Notice:
            </span>
            <p className="leading-relaxed">
              PakStudyJobs is an independent educational and jobs information platform. For official information, always visit the relevant board, university, testing service, or employer website.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Fair Use Statement */}
        <div className="pt-6 border-t border-slate-800/50 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} PakStudyJobs.pk. All rights reserved. Dedicated to educational development across Pakistan.</p>
          <div className="flex items-center gap-4">
            <span
              id="footer-bottom-contact-btn"
              onClick={() => onSelectSection('contact')}
              className="hover:text-slate-300 cursor-pointer text-blue-400"
            >
              Contact Us
            </span>
            <span>•</span>
            <span
              id="footer-bottom-disclaimer-btn"
              onClick={() => onSelectSection('disclaimer')}
              className="hover:text-slate-300 cursor-pointer"
            >
              Educational Disclaimer
            </span>
            <span>•</span>
            <span
              id="footer-bottom-privacy-btn"
              onClick={() => onSelectSection('privacy-policy')}
              className="hover:text-slate-300 cursor-pointer"
            >
              Data Privacy
            </span>
            <span>•</span>
            <span
              id="footer-bottom-sitemap-btn"
              onClick={() => onSelectSection('sitemap')}
              className="hover:text-slate-300 cursor-pointer"
            >
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
