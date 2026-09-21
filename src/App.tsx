/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryCards } from './components/CategoryCards';
import { JobsSection } from './components/JobsSection';
import { NotesSection } from './components/NotesSection';
import { PastPapersSection } from './components/PastPapersSection';
import { AboutSection } from './components/AboutSection';
import { PrivacyPolicySection } from './components/PrivacyPolicySection';
import { DisclaimerSection } from './components/DisclaimerSection';
import { ContactSection } from './components/ContactSection';
import { LatestUpdatesSection } from './components/LatestUpdatesSection';
import { SitemapSection } from './components/SitemapSection';
import { Footer } from './components/Footer';
import { JobDetailModal } from './components/JobDetailModal';
import { PdfViewerModal } from './components/PdfViewerModal';
import { SavedItemsDrawer } from './components/SavedItemsDrawer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { InformationModals, InfoModalType } from './components/InformationModals';
import { INITIAL_JOBS, INITIAL_NOTES, INITIAL_PAST_PAPERS } from './data/portalData';
import {
  NavSection,
  Job,
  StudyNote,
  PastPaper,
  BookmarkItem,
  JobCategory,
  ClassLevel,
  PastPaperCategory,
} from './types';
import { triggerDownload, generateNoteDoc, generatePastPaperDoc } from './utils/downloadHelper';
import {
  Briefcase,
  BookOpen,
  FileText,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Award,
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [notes, setNotes] = useState<StudyNote[]>(INITIAL_NOTES);
  const [papers, setPapers] = useState<PastPaper[]>(INITIAL_PAST_PAPERS);

  // Search state
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [heroSearchType, setHeroSearchType] = useState<'all' | 'jobs' | 'notes' | 'papers'>('all');
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState(false);

  // Selected filters when navigating from CategoryCards or Hero
  const [initialJobCategory, setInitialJobCategory] = useState<JobCategory | 'all'>('all');
  const [initialNoteClass, setInitialNoteClass] = useState<ClassLevel>('9th');
  const [initialPaperCategory, setInitialPaperCategory] = useState<PastPaperCategory>('matric');

  // Modals state
  const [selectedJobForModal, setSelectedJobForModal] = useState<Job | null>(null);
  const [selectedNoteForModal, setSelectedNoteForModal] = useState<StudyNote | null>(null);
  const [selectedPaperForModal, setSelectedPaperForModal] = useState<PastPaper | null>(null);
  const [infoModalType, setInfoModalType] = useState<InfoModalType>(null);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Bookmarks persistence
  const [savedItems, setSavedItems] = useState<BookmarkItem[]>(() => {
    try {
      const stored = localStorage.getItem('pakstudyjobs_bookmarks');
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return [
      {
        id: 'job-1',
        type: 'job',
        title: 'Inspector Customs (BPS-16) - FPSC',
        subtitle: 'Federal Board of Revenue (FBR)',
        category: 'government',
        savedAt: new Date().toISOString(),
      },
      {
        id: 'note-1',
        type: 'note',
        title: 'Physics Chapter 2: Kinematics Notes',
        subtitle: '9th Class Physics • All Punjab & FBISE Boards',
        category: 'Physics',
        savedAt: new Date().toISOString(),
      },
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('pakstudyjobs_bookmarks', JSON.stringify(savedItems));
    } catch {
      // ignore
    }
  }, [savedItems]);

  // Keyboard shortcut '/' to open quick search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setIsGlobalSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Dynamic SEO Page Titles & Meta Descriptions
  useEffect(() => {
    let title = 'PakStudyJobs – Latest Jobs, Study Notes & Past Papers in Pakistan';
    let metaDescription =
      'Pakistan’s trusted educational & career network. Access 20 latest verified jobs, 20 syllabus notes for 9th-12th class, and 20 solved past papers with free PDF downloads.';

    if (selectedJobForModal) {
      title = `${selectedJobForModal.title} (${selectedJobForModal.organization}) – Apply Online | PakStudyJobs`;
      metaDescription = `Apply for ${selectedJobForModal.title} at ${selectedJobForModal.organization} (${selectedJobForModal.location}). Last Date: ${selectedJobForModal.lastDate}. Check eligibility and download challan.`;
    } else if (selectedNoteForModal) {
      title = `${selectedNoteForModal.title} - ${selectedNoteForModal.classLevel} Class ${selectedNoteForModal.subject} Notes PDF | PakStudyJobs`;
      metaDescription = `Free PDF download for ${selectedNoteForModal.title} (${selectedNoteForModal.classLevel} Class ${selectedNoteForModal.subject}). Complete chapter breakdown, formulas, and solved MCQs.`;
    } else if (selectedPaperForModal) {
      title = `${selectedPaperForModal.title} (${selectedPaperForModal.year}) - Solved Past Paper PDF | PakStudyJobs`;
      metaDescription = `Download authentic solved past paper for ${selectedPaperForModal.title} (${selectedPaperForModal.boardOrAuthority} ${selectedPaperForModal.year}) with complete marking scheme.`;
    } else {
      switch (activeSection) {
        case 'jobs':
          title = 'Latest Pakistan Jobs 2026 – Govt, FPSC, PPSC & Corporate Careers | PakStudyJobs';
          metaDescription = 'Explore 20 latest government and private job advertisements in Pakistan. Verified listings for FPSC, PPSC, FIA, NADRA, SBP, WAPDA with step-by-step application instructions.';
          break;
        case 'notes':
          title = 'Class 9th, 10th, 11th & 12th Free Study Notes PDF – FBISE & Punjab Boards | PakStudyJobs';
          metaDescription = 'Download high-yield, topper-reviewed study notes for 9th, 10th, 11th, and 12th classes in Physics, Chemistry, Biology, Math, and Computer Science.';
          break;
        case 'past-papers':
          title = 'Solved Past Papers 2020-2025: Matric, Inter, MDCAT & ECAT | PakStudyJobs';
          metaDescription = 'Practice with authentic 5-year solved past papers for Federal Board, BISE Lahore, Rawalpindi, PMDC MDCAT, and UET ECAT with step-by-step marking rubrics.';
          break;
        case 'sitemap':
          title = 'Portal Sitemap & Resource Directory – PakStudyJobs.pk';
          metaDescription = 'Browse the comprehensive directory of all 20 jobs, 20 study notes, and 20 solved past papers available on PakStudyJobs.';
          break;
        case 'about':
          title = 'About Us – Empowering Pakistani Students & Job Seekers | PakStudyJobs';
          metaDescription = 'Learn about PakStudyJobs mission: providing equal, open-access education and verified career opportunities across all provinces of Pakistan.';
          break;
        case 'contact':
          title = 'Contact Student Support & Career Helpdesk | PakStudyJobs';
          metaDescription = 'Get in touch with the PakStudyJobs academic team and job updates editorial desk.';
          break;
        case 'privacy-policy':
          title = 'Privacy Policy & Student Data Protection | PakStudyJobs';
          break;
        case 'disclaimer':
          title = 'Official Disclaimer & Employment Advisory | PakStudyJobs';
          break;
        default:
          title = 'PakStudyJobs – Latest Jobs, Study Notes & Past Papers in Pakistan';
      }
    }

    document.title = title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', metaDescription);
    }
  }, [activeSection, selectedJobForModal, selectedNoteForModal, selectedPaperForModal]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  // Bookmark toggling
  const savedJobIds = new Set(savedItems.filter((i) => i.type === 'job').map((i) => i.id));
  const savedNoteIds = new Set(savedItems.filter((i) => i.type === 'note').map((i) => i.id));
  const savedPaperIds = new Set(savedItems.filter((i) => i.type === 'paper').map((i) => i.id));

  const toggleJobBookmark = (job: Job) => {
    if (savedJobIds.has(job.id)) {
      setSavedItems(savedItems.filter((i) => !(i.type === 'job' && i.id === job.id)));
      showToast(`Removed "${job.title.slice(0, 30)}..." from bookmarks`);
    } else {
      const newItem: BookmarkItem = {
        id: job.id,
        type: 'job',
        title: job.title,
        subtitle: `${job.organization} • ${job.location}`,
        category: job.category,
        savedAt: new Date().toISOString(),
      };
      setSavedItems([newItem, ...savedItems]);
      showToast(`Saved "${job.title.slice(0, 30)}..." to bookmarks`);
    }
  };

  const toggleNoteBookmark = (note: StudyNote) => {
    if (savedNoteIds.has(note.id)) {
      setSavedItems(savedItems.filter((i) => !(i.type === 'note' && i.id === note.id)));
      showToast(`Removed "${note.title.slice(0, 30)}..." from bookmarks`);
    } else {
      const newItem: BookmarkItem = {
        id: note.id,
        type: 'note',
        title: note.title,
        subtitle: `${note.classLevel} Class • ${note.subject} • ${note.board}`,
        category: note.subject,
        savedAt: new Date().toISOString(),
      };
      setSavedItems([newItem, ...savedItems]);
      showToast(`Saved "${note.title.slice(0, 30)}..." to bookmarks`);
    }
  };

  const togglePaperBookmark = (paper: PastPaper) => {
    if (savedPaperIds.has(paper.id)) {
      setSavedItems(savedItems.filter((i) => !(i.type === 'paper' && i.id === paper.id)));
      showToast(`Removed "${paper.title.slice(0, 30)}..." from bookmarks`);
    } else {
      const newItem: BookmarkItem = {
        id: paper.id,
        type: 'paper',
        title: paper.title,
        subtitle: `${paper.boardOrAuthority} • Year ${paper.year}`,
        category: paper.category,
        savedAt: new Date().toISOString(),
      };
      setSavedItems([newItem, ...savedItems]);
      showToast(`Saved "${paper.title.slice(0, 30)}..." to bookmarks`);
    }
  };

  // Downloads handling
  const handleDownloadNote = (note: StudyNote) => {
    const filename = `PakStudyJobs_${note.classLevel}_${note.subject}_Ch${note.chapterNumber}.txt`;
    const docContent = generateNoteDoc(note);
    triggerDownload(note.title, docContent, filename);

    // Update download count
    setNotes((prev) =>
      prev.map((n) => (n.id === note.id ? { ...n, downloadCount: n.downloadCount + 1 } : n))
    );

    showToast(`Downloading "${note.title.slice(0, 35)}..." PDF document`);
  };

  const handleDownloadPaper = (paper: PastPaper) => {
    const filename = `PakStudyJobs_${paper.classOrProgram}_${paper.subject.replace(/[^a-zA-Z0-9]/g, '_')}_${paper.year}.txt`;
    const docContent = generatePastPaperDoc(paper);
    triggerDownload(paper.title, docContent, filename);

    // Update download count
    setPapers((prev) =>
      prev.map((p) => (p.id === paper.id ? { ...p, downloadCount: p.downloadCount + 1 } : p))
    );

    showToast(`Downloading "${paper.title.slice(0, 35)}..." Past Paper document`);
  };

  // Navigation handlers
  const handleSelectSection = (section: NavSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (
    section: NavSection,
    filter?: {
      jobCategory?: JobCategory;
      classLevel?: ClassLevel;
      paperCategory?: PastPaperCategory;
    }
  ) => {
    if (filter?.jobCategory) setInitialJobCategory(filter.jobCategory);
    if (filter?.classLevel) setInitialNoteClass(filter.classLevel);
    if (filter?.paperCategory) setInitialPaperCategory(filter.paperCategory);
    handleSelectSection(section);
  };

  const handleQuickTagClick = (tag: string, section?: NavSection) => {
    if (section) {
      handleSelectSection(section);
    }
  };

  const handleNavigateToSavedItem = (type: 'job' | 'note' | 'paper', id: string) => {
    setIsSavedDrawerOpen(false);
    if (type === 'job') {
      const j = jobs.find((item) => item.id === id);
      if (j) {
        setSelectedJobForModal(j);
      } else {
        handleSelectSection('jobs');
      }
    } else if (type === 'note') {
      const n = notes.find((item) => item.id === id);
      if (n) {
        setSelectedNoteForModal(n);
      } else {
        handleSelectSection('notes');
      }
    } else if (type === 'paper') {
      const p = papers.find((item) => item.id === id);
      if (p) {
        setSelectedPaperForModal(p);
      } else {
        handleSelectSection('past-papers');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in slide-in-from-bottom-5 duration-200 text-xs sm:text-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        savedCount={savedItems.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
        onOpenGlobalSearch={() => setIsGlobalSearchOpen(true)}
      />

      {/* Page Content based on active navigation tab */}
      <main className="flex-1">
        {activeSection === 'home' && (
          <div>
            {/* 1. Hero Section with Unified Search */}
            <HeroSection
              searchQuery={heroSearchQuery}
              onSearchChange={setHeroSearchQuery}
              searchFilterType={heroSearchType}
              onSearchFilterTypeChange={setHeroSearchType}
              onSelectSection={handleSelectSection}
              onQuickTagClick={handleQuickTagClick}
            />

            {/* 2. Category Cards */}
            <CategoryCards onSelectCategory={handleSelectCategory} />

            {/* 3. Latest Updates Section on Homepage */}
            <LatestUpdatesSection
              jobs={jobs}
              notes={notes}
              papers={papers}
              onSelectJob={(j) => setSelectedJobForModal(j)}
              onSelectNote={(n) => setSelectedNoteForModal(n)}
              onSelectPaper={(p) => setSelectedPaperForModal(p)}
              onSelectSection={handleSelectSection}
            />

            {/* 4. Latest Jobs Featured Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    Hot Vacancies This Week
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    Latest Government & Private Jobs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Recently announced official vacancies in Federal ministries, banking institutions, and healthcare.
                  </p>
                </div>
                <button
                  id="view-all-jobs-btn"
                  onClick={() => handleSelectSection('jobs')}
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0"
                >
                  <span>View All Jobs ({jobs.length})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Featured Jobs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {jobs.slice(0, 3).map((job) => (
                  <div
                    key={job.id}
                    id={`featured-job-${job.id}`}
                    className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider border ${
                            job.category === 'government'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-blue-50 text-blue-700 border-blue-200'
                          }`}
                        >
                          {job.category === 'government' ? 'Govt Job' : 'Private'}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">
                          Deadline: {job.lastDate}
                        </span>
                      </div>
                      <h3
                        onClick={() => setSelectedJobForModal(job)}
                        className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display line-clamp-2 cursor-pointer mb-1"
                      >
                        {job.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium mb-3">{job.organization}</p>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-700">{job.vacancies} Vacancies</span>
                      <button
                        id={`featured-job-apply-btn-${job.id}`}
                        onClick={() => setSelectedJobForModal(job)}
                        className="text-xs font-bold text-slate-700 group-hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Featured Notes Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 bg-white/50 rounded-3xl my-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    Top Rated Educational Resources
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    Featured Class 9th – 12th Notes
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    High-scoring short answers, textbook diagrams, and key board formulas with free PDF download.
                  </p>
                </div>
                <button
                  id="view-all-notes-btn"
                  onClick={() => handleSelectSection('notes')}
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0"
                >
                  <span>Browse All Notes ({notes.length})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Featured Notes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {notes.slice(0, 3).map((note) => (
                  <div
                    key={note.id}
                    id={`featured-note-${note.id}`}
                    className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                          {note.classLevel} Class
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {note.totalPages} Pages PDF
                        </span>
                      </div>
                      <h3
                        onClick={() => setSelectedNoteForModal(note)}
                        className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display line-clamp-2 cursor-pointer mb-2"
                      >
                        {note.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">{note.board}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        id={`preview-featured-note-${note.id}`}
                        onClick={() => setSelectedNoteForModal(note)}
                        className="text-xs font-bold text-slate-700 hover:text-blue-700 cursor-pointer"
                      >
                        Preview Notes
                      </button>
                      <button
                        id={`download-featured-note-${note.id}`}
                        onClick={() => handleDownloadNote(note)}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold cursor-pointer transition-colors"
                      >
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Popular Past Papers Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                    <FileText className="w-4 h-4 text-blue-600" />
                    Board & Medical/Engineering Tests
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    Popular Past Papers
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Official solved examination questions for BISE Lahore, Federal Board, MDCAT, and ECAT.
                  </p>
                </div>
                <button
                  id="view-all-papers-btn"
                  onClick={() => handleSelectSection('past-papers')}
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0"
                >
                  <span>Explore All Papers ({papers.length})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Featured Papers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[papers[0], papers[4], papers[6]].map((paper) => (
                  <div
                    key={paper.id}
                    id={`featured-paper-${paper.id}`}
                    className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {paper.classOrProgram}
                        </span>
                        <span className="text-xs font-bold text-slate-700">Year {paper.year}</span>
                      </div>
                      <h3
                        onClick={() => setSelectedPaperForModal(paper)}
                        className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display line-clamp-2 cursor-pointer mb-2"
                      >
                        {paper.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3">{paper.boardOrAuthority}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        id={`view-featured-paper-${paper.id}`}
                        onClick={() => setSelectedPaperForModal(paper)}
                        className="text-xs font-bold text-slate-700 hover:text-blue-700 cursor-pointer"
                      >
                        View Pattern
                      </button>
                      <button
                        id={`download-featured-paper-${paper.id}`}
                        onClick={() => handleDownloadPaper(paper)}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold cursor-pointer transition-colors"
                      >
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Dedicated Jobs Section */}
        {activeSection === 'jobs' && (
          <JobsSection
            jobs={jobs}
            onSelectJob={(j) => setSelectedJobForModal(j)}
            savedJobIds={savedJobIds}
            onToggleBookmark={toggleJobBookmark}
            initialCategory={initialJobCategory}
            onNavigateSection={handleSelectSection}
          />
        )}

        {/* Dedicated Notes Section */}
        {activeSection === 'notes' && (
          <NotesSection
            notes={notes}
            onPreviewNote={(n) => setSelectedNoteForModal(n)}
            onDownloadNote={handleDownloadNote}
            savedNoteIds={savedNoteIds}
            onToggleBookmark={toggleNoteBookmark}
            initialClass={initialNoteClass}
            onNavigateSection={handleSelectSection}
          />
        )}

        {/* Dedicated Past Papers Section */}
        {activeSection === 'past-papers' && (
          <PastPapersSection
            papers={papers}
            onPreviewPaper={(p) => setSelectedPaperForModal(p)}
            onDownloadPaper={handleDownloadPaper}
            savedPaperIds={savedPaperIds}
            onToggleBookmark={togglePaperBookmark}
            initialCategory={initialPaperCategory}
            onNavigateSection={handleSelectSection}
          />
        )}

        {/* Dedicated About Us Section */}
        {activeSection === 'about' && (
          <AboutSection onSelectSection={handleSelectSection} />
        )}

        {/* Dedicated Privacy Policy Section */}
        {activeSection === 'privacy-policy' && (
          <PrivacyPolicySection onSelectSection={handleSelectSection} />
        )}

        {/* Dedicated Disclaimer Section */}
        {activeSection === 'disclaimer' && (
          <DisclaimerSection onSelectSection={handleSelectSection} />
        )}

        {/* Dedicated Contact Section */}
        {activeSection === 'contact' && <ContactSection onShowToast={showToast} />}

        {/* Dedicated Sitemap Section */}
        {activeSection === 'sitemap' && (
          <SitemapSection
            jobs={jobs}
            notes={notes}
            papers={papers}
            onSelectSection={handleSelectSection}
            onSelectJob={(j) => setSelectedJobForModal(j)}
            onSelectNote={(n) => setSelectedNoteForModal(n)}
            onSelectPaper={(p) => setSelectedPaperForModal(p)}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectSection={handleSelectSection}
        onOpenInfoModal={(t) => setInfoModalType(t)}
        onShowToast={showToast}
      />

      {/* Global Search Command Modal */}
      <GlobalSearchModal
        isOpen={isGlobalSearchOpen}
        onClose={() => setIsGlobalSearchOpen(false)}
        jobs={jobs}
        notes={notes}
        papers={papers}
        onSelectJob={(j) => setSelectedJobForModal(j)}
        onSelectNote={(n) => setSelectedNoteForModal(n)}
        onSelectPaper={(p) => setSelectedPaperForModal(p)}
      />

      {/* Job Details Modal */}
      <JobDetailModal
        job={selectedJobForModal}
        onClose={() => setSelectedJobForModal(null)}
        isBookmarked={selectedJobForModal ? savedJobIds.has(selectedJobForModal.id) : false}
        onToggleBookmark={toggleJobBookmark}
        onShowToast={showToast}
        notes={notes}
        papers={papers}
        onSelectNote={(n) => {
          setSelectedJobForModal(null);
          setSelectedNoteForModal(n);
        }}
        onSelectPaper={(p) => {
          setSelectedJobForModal(null);
          setSelectedPaperForModal(p);
        }}
        onNavigateSection={handleSelectSection}
      />

      {/* PDF Viewer / Document Preview Modal */}
      <PdfViewerModal
        note={selectedNoteForModal}
        paper={selectedPaperForModal}
        onClose={() => {
          setSelectedNoteForModal(null);
          setSelectedPaperForModal(null);
        }}
        onDownload={() => {
          if (selectedNoteForModal) handleDownloadNote(selectedNoteForModal);
          if (selectedPaperForModal) handleDownloadPaper(selectedPaperForModal);
        }}
        isBookmarked={
          selectedNoteForModal
            ? savedNoteIds.has(selectedNoteForModal.id)
            : selectedPaperForModal
            ? savedPaperIds.has(selectedPaperForModal.id)
            : false
        }
        onToggleBookmark={() => {
          if (selectedNoteForModal) toggleNoteBookmark(selectedNoteForModal);
          if (selectedPaperForModal) togglePaperBookmark(selectedPaperForModal);
        }}
        onShowToast={showToast}
        allNotes={notes}
        allPapers={papers}
        allJobs={jobs}
        onSelectNote={(n) => {
          setSelectedPaperForModal(null);
          setSelectedNoteForModal(n);
        }}
        onSelectPaper={(p) => {
          setSelectedNoteForModal(null);
          setSelectedPaperForModal(p);
        }}
        onSelectJob={(j) => {
          setSelectedNoteForModal(null);
          setSelectedPaperForModal(null);
          setSelectedJobForModal(j);
        }}
        onNavigateSection={handleSelectSection}
      />

      {/* Saved Bookmarks Drawer */}
      <SavedItemsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedItems={savedItems}
        onRemoveBookmark={(id) => {
          setSavedItems(savedItems.filter((i) => i.id !== id));
          showToast('Item removed from bookmarks');
        }}
        onClearAll={() => {
          setSavedItems([]);
          showToast('Cleared all saved items');
        }}
        onNavigateToItem={handleNavigateToSavedItem}
      />

      {/* Legal & About Modals */}
      <InformationModals modalType={infoModalType} onClose={() => setInfoModalType(null)} />
    </div>
  );
}
