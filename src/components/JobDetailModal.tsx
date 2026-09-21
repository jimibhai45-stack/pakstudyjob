import React from 'react';
import {
  X,
  Building2,
  MapPin,
  Calendar,
  Users,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Share2,
  ShieldCheck,
  AlertCircle,
  FileText,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Job, StudyNote, PastPaper, NavSection } from '../types';

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (job: Job) => void;
  onShowToast: (msg: string) => void;
  notes?: StudyNote[];
  papers?: PastPaper[];
  onSelectNote?: (note: StudyNote) => void;
  onSelectPaper?: (paper: PastPaper) => void;
  onNavigateSection?: (section: NavSection) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onShowToast,
  notes = [],
  papers = [],
  onSelectNote,
  onSelectPaper,
  onNavigateSection,
}) => {
  if (!job) return null;

  // Find relevant study notes and past papers for preparation
  const relevantNotes = React.useMemo(() => {
    if (!notes.length) return [];
    const text = `${job.title} ${job.education} ${job.department}`.toLowerCase();
    
    let matched = notes.filter((n) => {
      const subj = n.subject.toLowerCase();
      if (text.includes('software') || text.includes('computer') || text.includes('it')) {
        return subj.includes('computer');
      }
      if (text.includes('engineer') || text.includes('electrical') || text.includes('mechanical')) {
        return subj.includes('physics') || subj.includes('math');
      }
      if (text.includes('medical') || text.includes('health') || text.includes('nurse') || text.includes('mbbs')) {
        return subj.includes('biology') || subj.includes('chemistry');
      }
      return subj.includes('pak studies') || subj.includes('english');
    });

    if (matched.length === 0) {
      matched = notes.slice(0, 3);
    }
    return matched.slice(0, 3);
  }, [job, notes]);

  const relevantPapers = React.useMemo(() => {
    if (!papers.length) return [];
    const text = `${job.title} ${job.education} ${job.department}`.toLowerCase();

    let matched = papers.filter((p) => {
      if (text.includes('engineer') || text.includes('electrical')) {
        return p.classOrProgram === 'ECAT' || p.subject.toLowerCase().includes('physics');
      }
      if (text.includes('medical') || text.includes('health')) {
        return p.classOrProgram === 'MDCAT' || p.classOrProgram === 'NUMS';
      }
      if (text.includes('law') || text.includes('legal')) {
        return p.classOrProgram === 'LAT';
      }
      return p.classOrProgram === 'NTS' || p.category === 'entry-test' || p.subject.toLowerCase().includes('math');
    });

    if (matched.length === 0) {
      matched = papers.slice(0, 2);
    }
    return matched.slice(0, 2);
  }, [job, papers]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onShowToast('Job link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-white uppercase tracking-wider">
                {job.category === 'government' ? 'Government Job' : job.category === 'private' ? 'Private Sector' : 'Internship'}
              </span>
              {job.scale && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-700/60 text-blue-100 border border-white/10">
                  {job.scale}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display leading-tight">{job.title}</h2>
            <p className="text-sm text-blue-200 mt-1 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-300" />
              <span>{job.organization} — {job.department}</span>
            </p>
          </div>

          <button
            id="close-job-modal-btn"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Location</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span className="truncate">{job.location}</span>
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Total Vacancies</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                <span>{job.vacancies > 1 ? `${job.vacancies} Posts` : '01 Post'}</span>
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Application Deadline</span>
              <span className="font-bold text-rose-600 flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-rose-600" />
                <span>{job.lastDate}</span>
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Published In</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                <span>{job.newspaper || 'Daily National Press'}</span>
              </span>
            </div>
          </div>

          {/* Job Overview */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Job Overview</h4>
            <p className="text-slate-600 leading-relaxed">{job.description}</p>
          </div>

          {/* Eligibility Criteria Box */}
          <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-2xl">
            <h4 className="text-sm font-bold text-blue-900 flex items-center gap-1.5 mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Eligibility Criteria & Quota Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-500 font-medium">Educational Requirement:</span>
                <p className="font-bold text-slate-800 mt-0.5">{job.education}</p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Age Limit:</span>
                <p className="font-bold text-slate-800 mt-0.5">{job.eligibility.ageLimit}</p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Eligible Gender:</span>
                <p className="font-bold text-slate-800 mt-0.5">{job.eligibility.gender}</p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Provincial Quota & Domicile:</span>
                <p className="font-bold text-slate-800 mt-0.5">{job.eligibility.domicile}</p>
              </div>
            </div>
          </div>

          {/* Key Responsibilities */}
          {job.keyResponsibilities.length > 0 && (
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Key Job Responsibilities</h4>
              <ul className="space-y-2">
                {job.keyResponsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* How to Apply Step-by-Step */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h4 className="text-base font-bold text-slate-900 mb-2">How to Apply (Step-by-Step Guide)</h4>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
              {job.howToApply.map((step, i) => (
                <li key={i} className="leading-relaxed">
                  <span className="font-medium text-slate-800">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>
                Always double-check credentials before depositing bank challan fees. Incomplete applications will be rejected.
              </span>
            </div>
          </div>

          {/* INTERNAL LINKS: Related Test Preparation Notes & Past Papers */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/60 p-5 rounded-2xl border border-blue-200/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Written Screening Test & Interview Preparation
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 mt-0.5">
                  Recommended Study Notes & Solved Past Papers for this Post
                </h4>
              </div>
              <div className="flex items-center gap-2">
                {onNavigateSection && (
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateSection('notes');
                    }}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>All Notes</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Notes Recommendations */}
            {relevantNotes.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700 block">Related Subject Notes:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {relevantNotes.map((note) => (
                    <div
                      key={note.id}
                      onClick={() => onSelectNote && onSelectNote(note)}
                      className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200/80 hover:border-blue-300 transition-all cursor-pointer shadow-2xs group flex items-start gap-2.5"
                    >
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0 group-hover:scale-105 transition-transform">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">
                            {note.classLevel} {note.subject}
                          </span>
                          <span className="text-[10px] text-slate-400 truncate">Ch {note.chapterNumber}</span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-700">
                          {note.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{note.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Past Papers Recommendations */}
            {relevantPapers.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-blue-200/60">
                <span className="text-xs font-bold text-slate-700 block">Relevant Past Papers & Testing Patterns:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {relevantPapers.map((paper) => (
                    <div
                      key={paper.id}
                      onClick={() => onSelectPaper && onSelectPaper(paper)}
                      className="p-3 bg-white hover:bg-emerald-50/50 rounded-xl border border-slate-200/80 hover:border-emerald-300 transition-all cursor-pointer shadow-2xs group flex items-start gap-2.5"
                    >
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                            {paper.category === 'entry-test' ? paper.classOrProgram : `${paper.classOrProgram} Board`}
                          </span>
                          <span className="text-[10px] text-slate-400">{paper.year}</span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-700">
                          {paper.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{paper.subject}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              id="job-detail-bookmark-btn"
              onClick={() => onToggleBookmark(job)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-blue-600 fill-blue-600" />
                  <span>Saved in Bookmarks</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Save Job</span>
                </>
              )}
            </button>

            <button
              id="job-detail-share-btn"
              onClick={handleShare}
              className="p-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
              title="Share Job"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="job-official-portal-link"
              href={job.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition-all active:scale-98 cursor-pointer"
            >
              <span>Apply on Official Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
