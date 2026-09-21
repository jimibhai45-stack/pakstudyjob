import React, { useState } from 'react';
import {
  Bell,
  Sparkles,
  Flame,
  ArrowRight,
  Briefcase,
  BookOpen,
  FileText,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { Job, StudyNote, PastPaper, NavSection } from '../types';

interface LatestUpdatesSectionProps {
  jobs: Job[];
  notes: StudyNote[];
  papers: PastPaper[];
  onSelectJob: (job: Job) => void;
  onSelectNote: (note: StudyNote) => void;
  onSelectPaper: (paper: PastPaper) => void;
  onSelectSection: (section: NavSection) => void;
}

type UpdateFilter = 'all' | 'jobs' | 'notes' | 'papers';

export const LatestUpdatesSection: React.FC<LatestUpdatesSectionProps> = ({
  jobs,
  notes,
  papers,
  onSelectJob,
  onSelectNote,
  onSelectPaper,
  onSelectSection,
}) => {
  const [activeFilter, setActiveFilter] = useState<UpdateFilter>('all');

  // Construct curated recent updates from real jobs, notes and papers data
  const updates = [
    {
      id: 'upd-1',
      type: 'job',
      badge: 'Urgent Deadline',
      badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
      title: jobs[0]?.title || 'FPSC Inspector Customs BPS-16 Announced',
      subtitle: `${jobs[0]?.organization || 'FPSC'} • ${jobs[0]?.vacancies || 68} Vacancies`,
      date: 'Updated Today',
      description: 'Online registration open across provincial quotas. Treasury challan fee PKR 300 deposit required before deadline.',
      data: jobs[0],
    },
    {
      id: 'upd-2',
      type: 'paper',
      badge: 'Sol. Past Paper',
      badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      title: papers[14]?.title || 'PMDC National MDCAT 2024 Solved Biology & Chemistry',
      subtitle: 'PMDC Pakistan • Complete Answer Key with Explanations',
      date: 'Updated 2 Days Ago',
      description: 'Official 200 MCQs paper with detailed chemical reaction mechanisms and negative marking strategy guide.',
      data: papers[14] || papers[0],
    },
    {
      id: 'upd-3',
      type: 'note',
      badge: 'New SLO Syllabus',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      title: notes[10]?.title || 'Class 11th Physics Chapter 2: Vectors & Equilibrium',
      subtitle: 'Federal Board & Punjab BISE • 34 Pages Solved PDF',
      date: 'Updated This Week',
      description: 'Rectangular vector addition derivations, dot and cross products proofs, torque problems, and board numericals.',
      data: notes[10] || notes[0],
    },
    {
      id: 'upd-4',
      type: 'job',
      badge: 'Mega Recruitment',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      title: jobs[2]?.title || 'School Education Punjab SST Science & Math (BPS-16)',
      subtitle: 'PPSC Lahore • 480 Permanent Teaching Posts',
      date: 'Announced Sep 2026',
      description: 'Regular faculty positions in government high schools across all 36 Punjab districts. District-wise quotas open.',
      data: jobs[2] || jobs[1],
    },
    {
      id: 'upd-5',
      type: 'job',
      badge: 'Paid Internship',
      badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
      title: jobs[18]?.title || "Prime Minister's National Youth Paid Internship (PMYP)",
      subtitle: 'PKR 25,000 / Month Stipend • 2,500 Positions',
      date: 'Registration Active',
      description: '6-month paid government workplace placements for fresh graduates across all districts in Pakistan, AJK & GB.',
      data: jobs[18] || jobs[0],
    },
    {
      id: 'upd-6',
      type: 'paper',
      badge: 'Engineering Entry',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
      title: papers[16]?.title || 'UET ECAT 2024 Combined Engineering Test Solved Paper',
      subtitle: 'UET Lahore • Mathematics, Physics, Chemistry, CS',
      date: 'Verified Answer Key',
      description: 'Includes 100 solved MCQs with calculus shortcut techniques and marking scheme analysis.',
      data: papers[16] || papers[0],
    },
    {
      id: 'upd-7',
      type: 'note',
      badge: 'Matric Preparation',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
      title: notes[0]?.title || 'Class 9th Physics Chapter 2: Kinematics',
      subtitle: 'All Punjab & FBISE • High-Yield Revision Notes',
      date: 'Updated Recently',
      description: 'Complete equations of motion graphical proofs, velocity-time graph analyses, and solved textbook numericals.',
      data: notes[0],
    },
    {
      id: 'upd-8',
      type: 'job',
      badge: 'Central Banking',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      title: jobs[13]?.title || 'State Bank Officers Training Scheme (SBOTS 26th Batch)',
      subtitle: 'State Bank of Pakistan (SBP) • Assistant Director (OG-2)',
      date: 'Permanent Career',
      description: 'Residential training at NIBAF Islamabad with international career rotation in monetary policy and financial regulation.',
      data: jobs[13] || jobs[0],
    },
  ];

  const filteredUpdates = updates.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  const handleItemClick = (item: (typeof updates)[0]) => {
    if (item.type === 'job' && item.data) {
      onSelectJob(item.data as Job);
    } else if (item.type === 'note' && item.data) {
      onSelectNote(item.data as StudyNote);
    } else if (item.type === 'paper' && item.data) {
      onSelectPaper(item.data as PastPaper);
    }
  };

  return (
    <section
      id="latest-updates-section"
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 my-4"
    >
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-700/40 mb-10 overflow-hidden relative">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold mb-3 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Real-Time Education & Job Feed</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              Latest Updates & Announcements
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90 mt-2 leading-relaxed">
              Real-time daily alerts on competitive exams, newly announced Federal & Provincial government vacancies, FBISE/BISE model papers, and comprehensive study notes.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-5 py-3.5 rounded-2xl border border-white/15 shrink-0">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <span className="text-[11px] font-medium text-blue-200 uppercase tracking-wider block">
                Active Content Base
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                {jobs.length} Jobs • {notes.length} Notes • {papers.length} Papers
              </span>
            </div>
          </div>
        </div>

        {/* Live Ticker Bar */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-blue-200">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 uppercase text-[10px] shrink-0">
            <Flame className="w-3 h-3 text-amber-400" />
            Breaking Ticker
          </span>
          <p className="truncate">
            FPSC consolidated advt online registration closing soon • PMDC releases updated MDCAT syllabus key • Punjab Board matric examination schedule notification announced.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {[
            { id: 'all', label: 'All Updates', icon: Sparkles, count: updates.length },
            { id: 'jobs', label: 'Job Openings', icon: Briefcase, count: updates.filter((u) => u.type === 'job').length },
            { id: 'notes', label: 'Study Notes', icon: BookOpen, count: updates.filter((u) => u.type === 'note').length },
            { id: 'papers', label: 'Past Papers', icon: FileText, count: updates.filter((u) => u.type === 'paper').length },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                id={`latest-filter-${tab.id}`}
                onClick={() => setActiveFilter(tab.id as UpdateFilter)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm scale-102'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-blue-700 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            id="latest-view-all-jobs-btn"
            onClick={() => onSelectSection('jobs')}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
          >
            <span>All {jobs.length} Jobs</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-slate-300">•</span>
          <button
            id="latest-view-all-notes-btn"
            onClick={() => onSelectSection('notes')}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
          >
            <span>All {notes.length} Notes</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Updates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredUpdates.map((item) => (
          <div
            key={item.id}
            id={`update-card-${item.id}`}
            onClick={() => handleItemClick(item)}
            className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Card Meta */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wider ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <Clock className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1.5">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs text-blue-700 font-semibold mb-2 line-clamp-1">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Action Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-600">
              <span className="flex items-center gap-1">
                {item.type === 'job' && 'View Vacancy Details'}
                {item.type === 'note' && 'Read / Download Note'}
                {item.type === 'paper' && 'View Solved Paper'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
