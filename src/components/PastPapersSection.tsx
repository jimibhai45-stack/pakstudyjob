import React, { useState, useMemo } from 'react';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Bookmark,
  BookmarkCheck,
  Search,
  Filter,
  Award,
  BookOpen,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { PastPaper, PastPaperCategory, NavSection } from '../types';

interface PastPapersSectionProps {
  papers: PastPaper[];
  onPreviewPaper: (paper: PastPaper) => void;
  onDownloadPaper: (paper: PastPaper) => void;
  savedPaperIds: Set<string>;
  onToggleBookmark: (paper: PastPaper) => void;
  initialCategory?: PastPaperCategory | 'all';
  onNavigateSection?: (section: NavSection) => void;
}

export const PastPapersSection: React.FC<PastPapersSectionProps> = ({
  papers,
  onPreviewPaper,
  onDownloadPaper,
  savedPaperIds,
  onToggleBookmark,
  initialCategory = 'all',
  onNavigateSection,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PastPaperCategory | 'all'>(initialCategory);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedBoard, setSelectedBoard] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Available subjects for subject-wise category filter
  const subjectList = [
    { id: 'all', label: 'All Subjects' },
    { id: 'Physics', label: 'Physics' },
    { id: 'Chemistry', label: 'Chemistry' },
    { id: 'Mathematics', label: 'Mathematics' },
    { id: 'Biology', label: 'Biology' },
    { id: 'Computer Science', label: 'Computer Science' },
    { id: 'English', label: 'English' },
    { id: 'Entry Test', label: 'Entry Test Reasoning' },
  ];

  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      if (selectedCategory !== 'all' && paper.category !== selectedCategory) return false;
      if (selectedSubject !== 'all') {
        if (selectedSubject === 'Entry Test') {
          if (paper.category !== 'entry-test') return false;
        } else if (!paper.subject.toLowerCase().includes(selectedSubject.toLowerCase())) {
          return false;
        }
      }
      if (selectedBoard !== 'all' && !paper.boardOrAuthority.includes(selectedBoard)) {
        return false;
      }
      if (selectedYear !== 'all' && paper.year.toString() !== selectedYear) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = paper.title.toLowerCase().includes(q);
        const matchesSubj = paper.subject.toLowerCase().includes(q);
        const matchesBoard = paper.boardOrAuthority.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSubj && !matchesBoard) return false;
      }
      return true;
    });
  }, [papers, selectedCategory, selectedSubject, selectedBoard, selectedYear, searchQuery]);

  const handleDownload = (paper: PastPaper) => {
    setDownloadingId(paper.id);
    onDownloadPaper(paper);
    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  return (
    <section id="past-papers-section-container" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4 text-blue-600" />
            Pakistan Board & Entry Test Archive
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Past Papers with Solved Answer Keys
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Matric (9th/10th), Intermediate (11th/12th), and National Entrance Tests (MDCAT, ECAT, LAT, NUMS).
          </p>
        </div>

        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-2 rounded-xl text-blue-800 text-xs font-bold">
          <Award className="w-4 h-4 text-blue-600" />
          <span>Authentic Papers with Detailed Marking Scheme</span>
        </div>
      </div>

      {/* Category Tabs & Filter Toolbar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs mb-8 space-y-4">
        {/* Category Tabs: All, Matric, Inter, Entry Tests */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100 scrollbar-thin">
          {[
            {
              id: 'all',
              label: 'All Past Papers',
              count: papers.length,
            },
            {
              id: 'matric',
              label: 'Matric Papers (9th & 10th)',
              count: papers.filter((p) => p.category === 'matric').length,
            },
            {
              id: 'inter',
              label: 'Inter Papers (11th & 12th)',
              count: papers.filter((p) => p.category === 'inter').length,
            },
            {
              id: 'entry-test',
              label: 'Entry Tests (MDCAT / ECAT / LAT)',
              count: papers.filter((p) => p.category === 'entry-test').length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`paper-tab-${tab.id}`}
              onClick={() => {
                setSelectedCategory(tab.id as PastPaperCategory | 'all');
                setSelectedBoard('all');
                setSelectedYear('all');
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all shrink-0 cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-blue-700'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  selectedCategory === tab.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Subject-Wise Category Filter Chips */}
        <div className="pt-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Subject Category:</span>
            {selectedSubject !== 'all' && (
              <button
                onClick={() => setSelectedSubject('all')}
                className="text-xs text-blue-600 hover:underline font-semibold cursor-pointer"
              >
                Reset Subject
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {subjectList.map((subj) => (
              <button
                key={subj.id}
                id={`subj-filter-${subj.id}`}
                onClick={() => setSelectedSubject(subj.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedSubject === subj.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {subj.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              id="paper-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by subject or board..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Board / Authority Filter */}
          <div className="relative">
            <select
              id="paper-board-select"
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              aria-label="Filter past papers by board or authority"
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
            >
              <option value="all">All Boards / Authorities</option>
              <option value="Lahore">BISE Lahore</option>
              <option value="FBISE">Federal Board (FBISE)</option>
              <option value="Rawalpindi">BISE Rawalpindi</option>
              <option value="Karachi">BISE Karachi (BSEK/BIEK)</option>
              <option value="PMDC">PMDC / UHS (MDCAT)</option>
              <option value="UET">UET Lahore (ECAT)</option>
              <option value="HEC">HEC (LAT)</option>
              <option value="NUMS">NUMS Islamabad</option>
            </select>
          </div>

          {/* Year Filter */}
          <div className="relative">
            <select
              id="paper-year-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              aria-label="Filter past papers by examination year"
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
            >
              <option value="all">All Examination Years</option>
              <option value="2024">2024 (Latest)</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>

      {/* Past Papers Cards Grid */}
      {filteredPapers.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No past papers found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Try adjusting your search criteria or switch to another examination category above.
          </p>
          <button
            id="reset-papers-filter-btn"
            onClick={() => {
              setSelectedBoard('all');
              setSelectedYear('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Show All Papers
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPapers.map((paper) => {
            const isBookmarked = savedPaperIds.has(paper.id);
            const isDownloading = downloadingId === paper.id;

            return (
              <div
                key={paper.id}
                id={`paper-card-${paper.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                        {paper.classOrProgram}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {paper.year}
                      </span>
                      {paper.hasSolvedSolutions ? (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Solved
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          Official Paper
                        </span>
                      )}
                    </div>

                    <button
                      id={`bookmark-paper-btn-${paper.id}`}
                      onClick={() => onToggleBookmark(paper)}
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                      title={isBookmarked ? 'Remove saved paper' : 'Save paper'}
                      aria-label="Save paper"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-5 h-5 text-blue-600 fill-blue-600" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onPreviewPaper(paper)}
                    className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer font-display leading-snug mb-2"
                  >
                    {paper.title}
                  </h3>

                  {/* Authority / Session */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{paper.boardOrAuthority}</span>
                    <span>•</span>
                    <span className="truncate text-slate-700 font-medium">{paper.session}</span>
                  </div>

                  {/* Exam details box */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Total Marks:</span>
                      <span className="font-bold text-slate-900">{paper.examOverview.totalMarks} Marks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Time Allowed:</span>
                      <span className="font-semibold text-slate-700">{paper.examOverview.timeAllowed}</span>
                    </div>
                    <div className="pt-1 border-t border-slate-200/60 text-[11px] text-slate-500 truncate">
                      Sections: {paper.examOverview.sections[0]}
                    </div>
                  </div>

                  {/* File meta */}
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-4 px-1">
                    <span>Format: PDF ({paper.fileSizeBytes})</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Information
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    id={`preview-paper-btn-${paper.id}`}
                    onClick={() => onPreviewPaper(paper)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-600" />
                    <span>View Pattern</span>
                  </button>

                  <button
                    id={`download-paper-pdf-btn-${paper.id}`}
                    onClick={() => handleDownload(paper)}
                    disabled={isDownloading}
                    className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-98 cursor-pointer disabled:opacity-75"
                  >
                    <Download className={`w-3.5 h-3.5 ${isDownloading ? 'animate-bounce' : ''}`} />
                    <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
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
              Explore More Educational Resources
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-2">
              Prepare for Success with Free Notes & Career Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 mb-6 leading-relaxed">
              Combine your past paper practice with chapter-wise syllabus notes for 9th, 10th, 11th, and 12th classes, or explore verified government job vacancies that match your qualifications.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                id="past-papers-to-notes-btn"
                onClick={() => onNavigateSection('notes')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse 20 Class Study Notes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="past-papers-to-jobs-btn"
                onClick={() => onNavigateSection('jobs')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>View 20 Latest Pakistan Jobs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="past-papers-to-sitemap-btn"
                onClick={() => onNavigateSection('sitemap')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 border border-slate-700 cursor-pointer"
              >
                <span>View Complete Portal Sitemap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
