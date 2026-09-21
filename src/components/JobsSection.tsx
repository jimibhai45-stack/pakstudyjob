import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  Building2,
  MapPin,
  Calendar,
  Users,
  GraduationCap,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Filter,
  Flame,
  Search,
  CheckCircle2,
  BookOpen,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { Job, JobCategory, NavSection } from '../types';

interface JobsSectionProps {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  savedJobIds: Set<string>;
  onToggleBookmark: (job: Job) => void;
  initialCategory?: JobCategory | 'all';
  onNavigateSection?: (section: NavSection) => void;
}

export const JobsSection: React.FC<JobsSectionProps> = ({
  jobs,
  onSelectJob,
  savedJobIds,
  onToggleBookmark,
  initialCategory = 'all',
  onNavigateSection,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | 'all'>(initialCategory);
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedEducation, setSelectedEducation] = useState<string>('all');
  const [selectedScale, setSelectedScale] = useState<string>('all');
  const [jobSearchTerm, setJobSearchTerm] = useState<string>('');
  const [filterUrgentOnly, setFilterUrgentOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'deadline' | 'latest' | 'vacancies'>('latest');

  const filteredJobs = useMemo(() => {
    let result = jobs.filter((job) => {
      // Category filter
      if (selectedCategory !== 'all' && job.category !== selectedCategory) {
        return false;
      }
      // Province filter
      if (selectedProvince !== 'all' && job.province !== selectedProvince) {
        return false;
      }
      // Scale filter
      if (selectedScale !== 'all') {
        if (selectedScale === 'BPS-16' && !job.scale?.includes('BPS-16')) return false;
        if (selectedScale === 'BPS-17' && !job.scale?.includes('BPS-17')) return false;
        if (selectedScale === 'BPS-18' && !job.scale?.includes('BPS-18')) return false;
        if (selectedScale === 'other' && (job.scale?.includes('BPS-16') || job.scale?.includes('BPS-17') || job.scale?.includes('BPS-18'))) return false;
      }
      // Urgent only
      if (filterUrgentOnly && !job.isUrgent) {
        return false;
      }
      // Education filter
      if (selectedEducation !== 'all') {
        const edu = job.education.toLowerCase();
        if (selectedEducation === 'matric' && !edu.includes('matric')) return false;
        if (selectedEducation === 'inter' && !edu.includes('inter') && !edu.includes('fa') && !edu.includes('fsc')) return false;
        if (selectedEducation === 'bachelor' && !edu.includes('bachelor') && !edu.includes('bs') && !edu.includes('b.com') && !edu.includes('be')) return false;
        if (selectedEducation === 'master' && !edu.includes('master') && !edu.includes('ms') && !edu.includes('m.sc') && !edu.includes('mba')) return false;
      }
      // Search term across title, org, department, location, and description
      if (jobSearchTerm.trim()) {
        const term = jobSearchTerm.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(term);
        const matchesOrg = job.organization.toLowerCase().includes(term);
        const matchesDept = job.department.toLowerCase().includes(term);
        const matchesLoc = job.location.toLowerCase().includes(term);
        const matchesDesc = job.description.toLowerCase().includes(term);
        if (!matchesTitle && !matchesOrg && !matchesDept && !matchesLoc && !matchesDesc) return false;
      }
      return true;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'deadline') {
        return new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime();
      } else if (sortBy === 'vacancies') {
        return b.vacancies - a.vacancies;
      } else {
        // latest posted
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      }
    });

    return result;
  }, [jobs, selectedCategory, selectedProvince, selectedScale, filterUrgentOnly, selectedEducation, jobSearchTerm, sortBy]);

  const getDaysRemaining = (dateStr: string) => {
    const today = new Date('2026-09-20');
    const deadline = new Date(dateStr);
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section id="jobs-section-container" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <Briefcase className="w-4 h-4 text-blue-600" />
            Verified Career Portal Pakistan
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Latest Jobs & Internships in Pakistan
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Official government vacancies, premier private multinational positions, and paid trainee internships.
          </p>
        </div>

        {/* Quick Summary Pill */}
        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Showing <strong className="text-blue-700">{filteredJobs.length}</strong> available job postings</span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs mb-8 space-y-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 border-b border-slate-100">
          {[
            { id: 'all', label: 'All Openings', count: jobs.length },
            {
              id: 'government',
              label: 'Government Jobs',
              count: jobs.filter((j) => j.category === 'government').length,
            },
            {
              id: 'private',
              label: 'Private Jobs',
              count: jobs.filter((j) => j.category === 'private').length,
            },
            {
              id: 'internship',
              label: 'Internships',
              count: jobs.filter((j) => j.category === 'internship').length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`job-tab-${tab.id}`}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-blue-700'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[11px] px-2 py-0.2 rounded-full font-bold ${
                  selectedCategory === tab.id
                    ? 'bg-blue-700 text-blue-100'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Secondary Filter Dropdowns & Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
          {/* Keyword Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              id="job-keyword-search"
              type="text"
              value={jobSearchTerm}
              onChange={(e) => setJobSearchTerm(e.target.value)}
              placeholder="Search by title, dept or org..."
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            {jobSearchTerm && (
              <button
                onClick={() => setJobSearchTerm('')}
                className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Province Filter */}
          <div className="relative">
            <select
              id="job-province-select"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              aria-label="Filter jobs by province or region"
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
            >
              <option value="all">All Provinces / Regions</option>
              <option value="Federal">Federal / Islamabad</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="KPK">Khyber Pakhtunkhwa (KPK)</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Remote">Remote / Hybrid</option>
            </select>
          </div>

          {/* Education Filter */}
          <div className="relative">
            <select
              id="job-education-select"
              value={selectedEducation}
              onChange={(e) => setSelectedEducation(e.target.value)}
              aria-label="Filter jobs by qualification"
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
            >
              <option value="all">All Qualifications</option>
              <option value="matric">Matric (10th)</option>
              <option value="inter">Intermediate (FA/FSc/ICS)</option>
              <option value="bachelor">Bachelor / BS (14-16 Years)</option>
              <option value="master">Master / MS / M.Phil</option>
            </select>
          </div>

          {/* Scale / Grade Filter */}
          <div className="relative">
            <select
              id="job-scale-select"
              value={selectedScale}
              onChange={(e) => setSelectedScale(e.target.value)}
              aria-label="Filter jobs by scale or grade"
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
            >
              <option value="all">All Pay Scales / Grades</option>
              <option value="BPS-16">BPS-16 Grade</option>
              <option value="BPS-17">BPS-17 Gazetted Officer</option>
              <option value="BPS-18">BPS-18 Officer</option>
              <option value="other">Corporate / Contract / Stipend</option>
            </select>
          </div>
        </div>

        {/* Row 2: Sort, Urgent toggle & Active Filters */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-500">Sort By:</span>
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
              {[
                { id: 'latest', label: 'Recently Added' },
                { id: 'deadline', label: 'Deadline Soonest' },
                { id: 'vacancies', label: 'Most Vacancies' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  id={`sort-${opt.id}`}
                  onClick={() => setSortBy(opt.id as any)}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    sortBy === opt.id
                      ? 'bg-white text-blue-700 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Urgent toggle */}
            <button
              id="toggle-urgent-filter-btn"
              onClick={() => setFilterUrgentOnly(!filterUrgentOnly)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border font-semibold transition-colors cursor-pointer ${
                filterUrgentOnly
                  ? 'bg-rose-50 border-rose-300 text-rose-700 font-bold'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${filterUrgentOnly ? 'text-rose-600' : 'text-slate-400'}`} />
              <span>Urgent Deadlines Only</span>
            </button>
          </div>

          {/* Reset Filters */}
          <button
            id="reset-job-filters-btn"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedProvince('all');
              setSelectedEducation('all');
              setSelectedScale('all');
              setFilterUrgentOnly(false);
              setJobSearchTerm('');
              setSortBy('latest');
            }}
            className="px-3 py-1.5 font-semibold text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer ml-auto"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No jobs match your selected criteria</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Try resetting your filters or search keywords to browse all available government and private opportunities.
          </p>
          <button
            id="empty-reset-job-btn"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedProvince('all');
              setSelectedEducation('all');
              setJobSearchTerm('');
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Show All Jobs
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs.map((job) => {
            const isBookmarked = savedJobIds.has(job.id);
            const daysLeft = getDaysRemaining(job.lastDate);

            return (
              <div
                key={job.id}
                id={`job-card-${job.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider border ${
                          job.category === 'government'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : job.category === 'private'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        {job.category === 'government'
                          ? 'Govt Job'
                          : job.category === 'private'
                          ? 'Private'
                          : 'Internship'}
                      </span>
                      {job.scale && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {job.scale}
                        </span>
                      )}
                      {job.isUrgent && (
                        <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200">
                          <Flame className="w-3 h-3 text-rose-500" />
                          Urgent
                        </span>
                      )}
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      id={`bookmark-btn-${job.id}`}
                      onClick={() => onToggleBookmark(job)}
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark job'}
                      aria-label="Toggle Bookmark"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-5 h-5 text-blue-600 fill-blue-600" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Title & Organization */}
                  <h3
                    onClick={() => onSelectJob(job)}
                    className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer font-display leading-snug line-clamp-2 mb-1.5"
                  >
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{job.organization}</span>
                  </div>

                  {/* Job Details Meta */}
                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{job.education}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200/60">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>Vacancies: <strong>{job.vacancies}</strong></span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Deadline: <strong className={daysLeft <= 5 ? 'text-rose-600' : 'text-slate-700'}>{job.lastDate}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-[11px] text-slate-600 font-medium">
                    {daysLeft > 0 ? (
                      <span className={daysLeft <= 5 ? 'text-rose-600 font-bold' : ''}>
                        {daysLeft} days left to apply
                      </span>
                    ) : (
                      <span className="text-slate-400">Application Closed</span>
                    )}
                  </div>

                  <button
                    id={`view-job-btn-${job.id}`}
                    onClick={() => onSelectJob(job)}
                    className="px-3.5 py-1.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>Details & Apply</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Internal Cross-Linking Navigation Banner */}
      {onNavigateSection && (
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-blue-800/60">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-600/40 inline-block mb-3">
              Written Test & Screening Preparation
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-2">
              Prepare for Competitive Tests (FPSC, PPSC, NTS, SBP)
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 mb-6 leading-relaxed">
              Applying for a government scale or corporate position? Sharpen your subject knowledge with verified Class 9th-12th chapter notes and solve past papers with complete marking schemes.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                id="jobs-to-notes-btn"
                onClick={() => onNavigateSection('notes')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Study Notes (9th to 12th)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="jobs-to-papers-btn"
                onClick={() => onNavigateSection('past-papers')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>20 Board & Entry Test Past Papers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="jobs-to-sitemap-btn"
                onClick={() => onNavigateSection('sitemap')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 border border-slate-700 cursor-pointer"
              >
                <span>Browse Full Portal Sitemap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
