import React from 'react';
import {
  Search,
  Briefcase,
  BookOpen,
  FileCheck,
  CheckCircle2,
  TrendingUp,
  DownloadCloud,
  Users,
} from 'lucide-react';
import { NavSection } from '../types';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  searchFilterType: 'all' | 'jobs' | 'notes' | 'papers';
  onSearchFilterTypeChange: (type: 'all' | 'jobs' | 'notes' | 'papers') => void;
  onSelectSection: (section: NavSection) => void;
  onQuickTagClick: (tag: string, section?: NavSection) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  searchFilterType,
  onSearchFilterTypeChange,
  onSelectSection,
  onQuickTagClick,
}) => {
  const popularTags = [
    { label: 'FPSC Jobs 2026', section: 'jobs' as NavSection },
    { label: '9th Math Solved Notes', section: 'notes' as NavSection },
    { label: '10th Physics Past Paper', section: 'past-papers' as NavSection },
    { label: 'MDCAT 2024 Solved', section: 'past-papers' as NavSection },
    { label: 'PPSC Lecturer', section: 'jobs' as NavSection },
    { label: '11th Physics Notes', section: 'notes' as NavSection },
    { label: 'ECAT Past Papers', section: 'past-papers' as NavSection },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-blue-200 mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Pakistan's #1 Free Educational & Career Guidance Platform</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display mb-4 leading-tight">
          Find Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-emerald-300">Jobs</span>, Chapter{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-300">Notes</span> & Solved{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-300">Past Papers</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          One-stop portal for Pakistani students and job seekers. Access verified Government &
          Private Jobs, Matric & Inter (9th–12th) Notes, and Board & Entry Test Past Papers with free instant PDF downloads.
        </p>

        {/* Unified Search Engine Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-2.5 sm:p-3.5 shadow-2xl border border-blue-200/40 text-slate-800">
          {/* Search Filter Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 pb-2.5 border-b border-slate-100 overflow-x-auto text-xs font-semibold">
            <span className="text-slate-600 pl-2 text-xs font-bold hidden sm:inline">Search in:</span>
            {[
              { id: 'all', label: 'All Content' },
              { id: 'jobs', label: 'Jobs & Internships' },
              { id: 'notes', label: 'Study Notes (9th-12th)' },
              { id: 'papers', label: 'Past Papers' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`hero-tab-${tab.id}`}
                onClick={() => onSearchFilterTypeChange(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  searchFilterType === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input Row */}
          <div className="flex flex-col sm:flex-row items-center gap-2 pt-2.5">
            <div className="relative w-full flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                id="hero-main-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search jobs by title, notes by chapter, or past papers by board..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-800 text-sm sm:text-base border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  id="clear-search-btn"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded bg-slate-200"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              id="hero-search-submit-btn"
              onClick={() => {
                if (searchFilterType === 'jobs') onSelectSection('jobs');
                else if (searchFilterType === 'notes') onSelectSection('notes');
                else if (searchFilterType === 'papers') onSelectSection('past-papers');
                else onSelectSection('jobs');
              }}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Search Now</span>
            </button>
          </div>

          {/* Popular Tag Pills */}
          <div className="pt-3 flex items-center flex-wrap gap-1.5 text-xs text-left">
            <span className="text-slate-700 font-bold flex items-center gap-1 pl-1">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              Trending:
            </span>
            {popularTags.map((tag) => (
              <button
                key={tag.label}
                id={`trending-tag-${tag.label.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => onQuickTagClick(tag.label, tag.section)}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 text-xs font-medium border border-slate-200/80 transition-colors cursor-pointer"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Jump Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            id="hero-cta-jobs"
            onClick={() => onSelectSection('jobs')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-xs transition-all cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-amber-300" />
            <span>Latest Government & Private Jobs</span>
          </button>
          <button
            id="hero-cta-notes"
            onClick={() => onSelectSection('notes')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-xs transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-cyan-300" />
            <span>Class 9th – 12th PDF Notes</span>
          </button>
          <button
            id="hero-cta-papers"
            onClick={() => onSelectSection('past-papers')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-xs transition-all cursor-pointer"
          >
            <FileCheck className="w-4 h-4 text-emerald-300" />
            <span>Board & Entry Test Past Papers</span>
          </button>
        </div>

        {/* Key Platform Highlights */}
        <div className="mt-12 pt-8 border-t border-blue-700/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <div className="flex items-center justify-center gap-1.5 text-lg sm:text-xl font-bold text-white font-display">
              <Briefcase className="w-5 h-5 text-amber-300 shrink-0" />
              <span>Updated Regularly</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">Verified Jobs & Careers</p>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-center gap-1.5 text-lg sm:text-xl font-bold text-white font-display">
              <DownloadCloud className="w-5 h-5 text-cyan-300 shrink-0" />
              <span>Latest Resources</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">Free Chapter Notes</p>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-center gap-1.5 text-lg sm:text-xl font-bold text-white font-display">
              <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
              <span>Verified Information</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">Pakistani Boards & Tests</p>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-center gap-1.5 text-lg sm:text-xl font-bold text-white font-display">
              <Users className="w-5 h-5 text-purple-300 shrink-0" />
              <span>Student Resources</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">Educational & Career Hub</p>
          </div>
        </div>
      </div>
    </section>
  );
};
