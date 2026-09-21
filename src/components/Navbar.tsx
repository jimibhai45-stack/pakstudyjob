import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  FileText,
  Mail,
  Bookmark,
  Menu,
  X,
  Search,
  Bell,
  Sparkles,
  Info,
  ShieldCheck,
  AlertTriangle,
  Map,
} from 'lucide-react';
import { NavSection } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  savedCount: number;
  onOpenSavedDrawer: () => void;
  onOpenGlobalSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  savedCount,
  onOpenSavedDrawer,
  onOpenGlobalSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavSection; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'jobs', label: 'Jobs', icon: <Briefcase className="w-4 h-4" />, badge: 'New' },
    { id: 'notes', label: 'Notes', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'past-papers', label: 'Past Papers', icon: <FileText className="w-4 h-4" />, badge: '2024' },
    { id: 'about', label: 'About Us', icon: <Info className="w-4 h-4" /> },
    { id: 'privacy-policy', label: 'Privacy Policy', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'disclaimer', label: 'Disclaimer', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact Us', icon: <Mail className="w-4 h-4" /> },
    { id: 'sitemap', label: 'Sitemap', icon: <Map className="w-4 h-4" /> },
  ];

  const handleNavClick = (section: NavSection) => {
    onSelectSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs border-b border-slate-200">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-400/30 shrink-0 text-[11px]">
              <Bell className="w-3 h-3 text-emerald-400" />
              Latest Updates
            </span>
            <span className="text-slate-200 text-xs truncate">
              FPSC Consolidated Advt 2026 Announced • 9th & 10th Class Board Date Sheets • Free PDF Notes Available for Download
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 text-slate-300">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('jobs')}>
              Govt Jobs
            </span>
            <span className="text-slate-500">•</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('notes')}>
              Matric / Inter Notes
            </span>
            <span className="text-slate-500">•</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('past-papers')}>
              MDCAT & ECAT
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <div
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group"
          >
            <BrandLogo size="md" variant="dark" showSubtitle={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/80 shadow-xs'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-slate-100/70'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                        link.badge === 'New'
                          ? 'bg-amber-100 text-amber-700 border border-amber-200'
                          : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Global Search Trigger, Saved Drawer, Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="global-search-trigger-btn"
              onClick={onOpenGlobalSearch}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-800 rounded-lg transition-colors cursor-pointer border border-slate-200"
              title="Search Jobs, Notes, Papers"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Quick Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-white rounded border border-slate-300">
                /
              </kbd>
            </button>

            {/* Saved Items Button */}
            <button
              id="saved-items-drawer-btn"
              onClick={onOpenSavedDrawer}
              className="relative p-2 text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              title="Saved Items"
              aria-label="View Saved Items"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-[10px] font-bold text-white bg-blue-600 rounded-full border-2 border-white">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Get Alerts / Primary CTA */}
            <button
              id="header-cta-jobs"
              onClick={() => handleNavClick('jobs')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 active:scale-98 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Explore Jobs</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        link.badge === 'New'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-saved-items-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSavedDrawer();
              }}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-blue-600" />
                Saved Bookmarks
              </span>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                {savedCount} items
              </span>
            </button>
            <button
              id="mobile-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
            >
              Contact Student Support
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
