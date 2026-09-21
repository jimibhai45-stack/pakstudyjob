import React from 'react';
import {
  X,
  Download,
  FileText,
  BookOpen,
  CheckCircle2,
  Share2,
  Bookmark,
  BookmarkCheck,
  Printer,
  Sparkles,
  HelpCircle,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { StudyNote, PastPaper, Job, NavSection } from '../types';

interface PdfViewerModalProps {
  note?: StudyNote | null;
  paper?: PastPaper | null;
  onClose: () => void;
  onDownload: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onShowToast: (msg: string) => void;
  allNotes?: StudyNote[];
  allPapers?: PastPaper[];
  allJobs?: Job[];
  onSelectNote?: (note: StudyNote) => void;
  onSelectPaper?: (paper: PastPaper) => void;
  onSelectJob?: (job: Job) => void;
  onNavigateSection?: (section: NavSection) => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  note,
  paper,
  onClose,
  onDownload,
  isBookmarked,
  onToggleBookmark,
  onShowToast,
  allNotes = [],
  allPapers = [],
  allJobs = [],
  onSelectNote,
  onSelectPaper,
  onSelectJob,
  onNavigateSection,
}) => {
  if (!note && !paper) return null;

  const isNote = Boolean(note);
  const title = note ? note.title : paper ? paper.title : '';
  const subtitle = note
    ? `${note.classLevel} Class • ${note.subject} • Chapter ${note.chapterNumber}`
    : paper
    ? `${paper.classOrProgram} • ${paper.boardOrAuthority} • Year ${paper.year}`
    : '';

  // Calculate matching items
  const relatedPastPapers = React.useMemo(() => {
    if (!note || !allPapers.length) return [];
    return allPapers
      .filter(
        (p) =>
          p.subject.toLowerCase().includes(note.subject.toLowerCase()) ||
          p.classOrProgram === note.classLevel
      )
      .slice(0, 2);
  }, [note, allPapers]);

  const relatedNotes = React.useMemo(() => {
    if (!paper || !allNotes.length) return [];
    return allNotes
      .filter(
        (n) =>
          paper.subject.toLowerCase().includes(n.subject.toLowerCase()) ||
          n.classLevel === paper.classOrProgram
      )
      .slice(0, 2);
  }, [paper, allNotes]);

  const relatedJobs = React.useMemo(() => {
    if (!allJobs.length) return [];
    const subj = note ? note.subject.toLowerCase() : paper ? paper.subject.toLowerCase() : '';
    let matches = allJobs.filter((j) => {
      const text = `${j.title} ${j.education} ${j.department}`.toLowerCase();
      if (subj.includes('computer')) return text.includes('software') || text.includes('computer') || text.includes('it');
      if (subj.includes('physics') || subj.includes('math')) return text.includes('engineer') || text.includes('wapda');
      if (subj.includes('biology')) return text.includes('medical') || text.includes('health') || text.includes('officer');
      return j.category === 'government' || j.category === 'internship';
    });
    if (matches.length === 0) matches = allJobs.slice(0, 2);
    return matches.slice(0, 2);
  }, [note, paper, allJobs]);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onShowToast('Document link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between gap-4 border-b border-slate-800">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/20 shrink-0">
              {isNote ? <BookOpen className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-400 block">
                {isNote ? 'Study Notes Preview & PDF Reader' : 'Past Paper & Solution Pattern'}
              </span>
              <h2 className="text-base sm:text-lg font-bold truncate text-white">{title}</h2>
              <p className="text-xs text-slate-400 truncate">{subtitle}</p>
            </div>
          </div>

          <button
            id="close-pdf-viewer-btn"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action Sub-bar */}
        <div className="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-4 text-slate-600">
            <span>
              Format: <strong className="text-slate-800">PDF Document</strong>
            </span>
            <span>
              Size: <strong className="text-slate-800">{note?.fileSizeBytes || paper?.fileSizeBytes}</strong>
            </span>
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified Information
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="pdf-bookmark-btn"
              onClick={onToggleBookmark}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold cursor-pointer"
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-blue-600 fill-blue-600" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4 text-slate-500" />
                  <span>Save</span>
                </>
              )}
            </button>

            <button
              id="pdf-share-btn"
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              id="pdf-print-btn"
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer hidden sm:block"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm bg-slate-50/50">
          {/* Note View */}
          {note && (
            <>
              {/* Document Banner */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    {note.board}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Total Pages: {note.totalPages}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-1">{note.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{note.description}</p>
              </div>

              {/* Topics Breakdown */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Syllabus Topics Covered in this PDF
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {note.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High Yield Formulas and Laws */}
              <div className="bg-blue-900 text-white p-5 rounded-2xl shadow-xs">
                <h4 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-3">
                  High-Yield Formulas & Exam Memory Anchors
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {note.keyFormulasOrPoints.map((formula, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-blue-800/80 border border-blue-700/60 text-emerald-200"
                    >
                      • {formula}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Solved Questions */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  Sample Solved Board Exam Questions
                </h4>
                {note.sampleQuestions.map((sq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <p className="text-xs font-bold text-slate-900">
                      Q{idx + 1}: {sq.question}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pl-3 border-l-2 border-blue-500">
                      {sq.answerSnippet}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Past Paper View */}
          {paper && (
            <>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {paper.category === 'entry-test' ? 'National Entry Test' : 'Board Exam'}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Session: {paper.session} ({paper.year})
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-1">{paper.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{paper.description}</p>
              </div>

              {/* Marks & Distribution */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 mb-3">Paper Scheme & Mark Allocation</h4>
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-500 block">Maximum Marks</span>
                    <strong className="text-base text-slate-900">{paper.examOverview.totalMarks} Marks</strong>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-500 block">Total Time Allowed</span>
                    <strong className="text-base text-slate-900">{paper.examOverview.timeAllowed}</strong>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <span className="font-bold text-slate-600 block">Section Breakdown:</span>
                  {paper.examOverview.sections.map((sec, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions preview */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-sm font-bold text-slate-900">Featured Questions in this Exam Paper</h4>
                {paper.sampleQuestions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800">
                    <span className="font-bold text-blue-700 mr-1.5">[Q{idx + 1}]</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* INTERNAL LINKS: Related Cross-Connections */}
          <div className="bg-gradient-to-br from-slate-100 to-blue-50/50 p-5 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Cross-Reference Preparation & Career Pathway
              </span>
            </div>

            {/* If viewing a note: show matching past papers */}
            {isNote && relatedPastPapers.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Practice Related Official Past Papers:</span>
                  {onNavigateSection && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateSection('past-papers');
                      }}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer font-semibold"
                    >
                      View All Papers <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {relatedPastPapers.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => onSelectPaper && onSelectPaper(p)}
                      className="p-3 bg-white hover:bg-emerald-50/50 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer shadow-2xs group flex items-start gap-2.5"
                    >
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 inline-block mb-1">
                          {p.category === 'entry-test' ? p.classOrProgram : `${p.classOrProgram} Exam`}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-700">
                          {p.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 truncate">{p.boardOrAuthority} • {p.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* If viewing a paper: show matching notes */}
            {!isNote && relatedNotes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Revise Key Topics with Chapter Notes:</span>
                  {onNavigateSection && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateSection('notes');
                      }}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer font-semibold"
                    >
                      View All Notes <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {relatedNotes.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => onSelectNote && onSelectNote(n)}
                      className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all cursor-pointer shadow-2xs group flex items-start gap-2.5"
                    >
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0 group-hover:scale-105 transition-transform">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 inline-block mb-1">
                          {n.classLevel} Class {n.subject}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-700">
                          {n.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 truncate">{n.board}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Jobs Section for both */}
            {relatedJobs.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Related Government & Corporate Openings:</span>
                  {onNavigateSection && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateSection('jobs');
                      }}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer font-semibold"
                    >
                      View 20 Jobs <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {relatedJobs.map((j) => (
                    <div
                      key={j.id}
                      onClick={() => onSelectJob && onSelectJob(j)}
                      className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all cursor-pointer shadow-2xs group flex items-start gap-2.5"
                    >
                      <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 shrink-0 group-hover:scale-105 transition-transform">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-800 border border-blue-200">
                            {j.scale || (j.category === 'government' ? 'Govt' : 'Private')}
                          </span>
                          <span className="text-[10px] text-rose-600 font-semibold truncate">Due: {j.lastDate}</span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-700">
                          {j.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 truncate">{j.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Free educational download for personal preparation under PakStudyJobs open access policy.
          </div>

          <button
            id="modal-direct-download-pdf-btn"
            onClick={onDownload}
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 active:scale-98 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Complete PDF Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
