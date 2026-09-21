import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Download,
  FileText,
  Star,
  Layers,
  Bookmark,
  BookmarkCheck,
  Eye,
  CheckCircle2,
  Sparkles,
  Filter,
  Search,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import { StudyNote, ClassLevel, SubjectName, NavSection } from '../types';

interface NotesSectionProps {
  notes: StudyNote[];
  onPreviewNote: (note: StudyNote) => void;
  onDownloadNote: (note: StudyNote) => void;
  savedNoteIds: Set<string>;
  onToggleBookmark: (note: StudyNote) => void;
  initialClass?: ClassLevel;
  onNavigateSection?: (section: NavSection) => void;
}

export const NotesSection: React.FC<NotesSectionProps> = ({
  notes,
  onPreviewNote,
  onDownloadNote,
  savedNoteIds,
  onToggleBookmark,
  initialClass = '9th',
  onNavigateSection,
}) => {
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'all'>(initialClass);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedBoard, setSelectedBoard] = useState<string>('all');
  const [searchNoteQuery, setSearchNoteQuery] = useState<string>('');
  const [notesSortBy, setNotesSortBy] = useState<'chapter' | 'subject' | 'pages'>('chapter');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const subjectsList: SubjectName[] = [
    'Physics',
    'Chemistry',
    'Mathematics',
    'Biology',
    'Computer Science',
    'English',
    'Urdu',
    'Islamiat',
    'Pak Studies',
  ];

  const filteredNotes = useMemo(() => {
    let result = notes.filter((n) => {
      if (selectedClass !== 'all' && n.classLevel !== selectedClass) return false;
      if (selectedSubject !== 'all' && n.subject !== selectedSubject) return false;
      if (selectedBoard !== 'all') {
        const boardLower = n.board.toLowerCase();
        if (selectedBoard === 'punjab' && !boardLower.includes('punjab') && !boardLower.includes('lahore')) return false;
        if (selectedBoard === 'federal' && !boardLower.includes('federal') && !boardLower.includes('fbise')) return false;
        if (selectedBoard === 'sindh' && !boardLower.includes('sindh') && !boardLower.includes('karachi')) return false;
        if (selectedBoard === 'kpk' && !boardLower.includes('kpk') && !boardLower.includes('peshawar')) return false;
      }
      if (searchNoteQuery.trim()) {
        const q = searchNoteQuery.toLowerCase();
        const matchesTitle = n.title.toLowerCase().includes(q);
        const matchesChapter = n.chapterName.toLowerCase().includes(q);
        const matchesDesc = n.description.toLowerCase().includes(q);
        const matchesSubj = n.subject.toLowerCase().includes(q);
        if (!matchesTitle && !matchesChapter && !matchesDesc && !matchesSubj) return false;
      }
      return true;
    });

    result.sort((a, b) => {
      if (notesSortBy === 'subject') {
        return a.subject.localeCompare(b.subject);
      } else if (notesSortBy === 'pages') {
        return b.totalPages - a.totalPages;
      } else {
        return a.chapterNumber - b.chapterNumber;
      }
    });

    return result;
  }, [notes, selectedClass, selectedSubject, selectedBoard, searchNoteQuery, notesSortBy]);

  const handleDownloadClick = (note: StudyNote) => {
    setDownloadingId(note.id);
    onDownloadNote(note);
    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  return (
    <section id="notes-section-container" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Pakistan Secondary & Intermediate Board Notes
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Class 9th, 10th, 11th & 12th Free Study Notes
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            High-yield chapter-wise notes, solved numericals, short question-answers, and formulas according to latest SLO curriculum.
          </p>
        </div>

        {/* Free Badge */}
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl text-emerald-800 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>100% Free Instant PDF Downloads</span>
        </div>
      </div>

      {/* Class Level Selector Tabs (9th, 10th, 11th, 12th + All) */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs mb-8 space-y-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-700 hidden sm:inline pl-1">Select Class:</span>
          <button
            id="class-tab-all"
            onClick={() => {
              setSelectedClass('all');
              setSelectedSubject('all');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
              selectedClass === 'all'
                ? 'bg-blue-600 text-white shadow-sm scale-102'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-blue-700'
            }`}
          >
            <span>All Classes (9th–12th)</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full ${
                selectedClass === 'all' ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {notes.length}
            </span>
          </button>
          {(['9th', '10th', '11th', '12th'] as ClassLevel[]).map((lvl) => {
            const count = notes.filter((n) => n.classLevel === lvl).length;
            return (
              <button
                key={lvl}
                id={`class-tab-${lvl}`}
                onClick={() => {
                  setSelectedClass(lvl);
                  setSelectedSubject('all');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  selectedClass === lvl
                    ? 'bg-blue-600 text-white shadow-sm scale-102'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-blue-700'
                }`}
              >
                <span>{lvl} Class Notes</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full ${
                    selectedClass === lvl ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs">
          <span className="text-slate-600 font-bold hidden sm:inline pl-1 text-xs">Subject:</span>
          <button
            id="subject-pill-all"
            onClick={() => setSelectedSubject('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedSubject === 'all'
                ? 'bg-blue-100 text-blue-800 border border-blue-200 font-bold'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Subjects
          </button>
          {subjectsList.map((subj) => (
            <button
              key={subj}
              id={`subject-pill-${subj.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedSubject(subj)}
              className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSubject === subj
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>

        {/* Search, Board Filter, & Sort Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {/* Keyword Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              id="notes-search-input"
              type="text"
              value={searchNoteQuery}
              onChange={(e) => setSearchNoteQuery(e.target.value)}
              placeholder={selectedClass === 'all' ? 'Search 9th-12th chapter, formula, or topic...' : `Search ${selectedClass} class chapter or topic...`}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            {searchNoteQuery && (
              <button
                onClick={() => setSearchNoteQuery('')}
                className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Education Board Filter */}
          <div className="relative">
            <select
              id="notes-board-select"
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              aria-label="Filter notes by education board"
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
            >
              <option value="all">All Educational Boards</option>
              <option value="punjab">Punjab Boards (Lahore, Rawalpindi, Multan, etc.)</option>
              <option value="federal">Federal Board (FBISE Islamabad)</option>
              <option value="sindh">Sindh Boards (Karachi, Hyderabad)</option>
              <option value="kpk">Khyber Pakhtunkhwa (Peshawar Board)</option>
            </select>
          </div>

          {/* Sort & Reset Bar */}
          <div className="flex items-center gap-2">
            <select
              id="notes-sort-select"
              value={notesSortBy}
              onChange={(e) => setNotesSortBy(e.target.value as any)}
              aria-label="Sort notes"
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
            >
              <option value="chapter">Sort: Chapter Number</option>
              <option value="subject">Sort: Subject (A–Z)</option>
              <option value="pages">Sort: Comprehensive (Page Count)</option>
            </select>

            <button
              id="reset-notes-filter-btn"
              onClick={() => {
                setSelectedClass('9th');
                setSelectedSubject('all');
                setSelectedBoard('all');
                setSearchNoteQuery('');
                setNotesSortBy('chapter');
              }}
              title="Reset Filters"
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl cursor-pointer shrink-0 transition-colors"
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">
            No notes found for {selectedClass} Class in this category
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Switch your subject filter or select another class level above to download chapter PDFs.
          </p>
          <button
            id="reset-notes-filter-btn"
            onClick={() => {
              setSelectedSubject('all');
              setSearchNoteQuery('');
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Show All {selectedClass} Notes
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNotes.map((note) => {
            const isBookmarked = savedNoteIds.has(note.id);
            const isDownloading = downloadingId === note.id;

            return (
              <div
                key={note.id}
                id={`note-card-${note.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Subject and Chapter Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                        {note.classLevel} Class
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {note.subject}
                      </span>
                    </div>

                    <button
                      id={`bookmark-note-btn-${note.id}`}
                      onClick={() => onToggleBookmark(note)}
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                      title={isBookmarked ? 'Remove saved note' : 'Save note'}
                      aria-label="Save note"
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
                    onClick={() => onPreviewNote(note)}
                    className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer font-display leading-snug mb-2"
                  >
                    {note.title}
                  </h3>

                  {/* Board compatibility */}
                  <p className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{note.board}</span>
                  </p>

                  {/* Topics List snippet */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4 space-y-1">
                    <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                      Included Topics:
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1">
                      {note.topics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span className="truncate">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta stats: pages, size, rating */}
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-4 px-1">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>{note.totalPages} Pages ({note.fileSizeBytes})</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Information</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Preview & Download PDF */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    id={`preview-note-btn-${note.id}`}
                    onClick={() => onPreviewNote(note)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-600" />
                    <span>Preview</span>
                  </button>

                  <button
                    id={`download-note-pdf-btn-${note.id}`}
                    onClick={() => handleDownloadClick(note)}
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
              Comprehensive Exam & Career Strategy
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-2">
              Reinforce Your Studies with Past Papers & Find Career Openings
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 mb-6 leading-relaxed">
              Mastering chapter notes is step one. Practice real board examination schemes with solved past papers, or check out 20 latest vacancies across government departments.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                id="notes-to-papers-btn"
                onClick={() => onNavigateSection('past-papers')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Practice 20 Solved Past Papers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="notes-to-jobs-btn"
                onClick={() => onNavigateSection('jobs')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>View 20 Latest Pakistan Jobs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="notes-to-sitemap-btn"
                onClick={() => onNavigateSection('sitemap')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 border border-slate-700 cursor-pointer"
              >
                <span>Browse Directory Sitemap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
