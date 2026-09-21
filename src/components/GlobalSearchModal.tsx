import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  Briefcase,
  BookOpen,
  FileText,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Job, StudyNote, PastPaper } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobs: Job[];
  notes: StudyNote[];
  papers: PastPaper[];
  onSelectJob: (job: Job) => void;
  onSelectNote: (note: StudyNote) => void;
  onSelectPaper: (paper: PastPaper) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  jobs,
  notes,
  papers,
  onSelectJob,
  onSelectNote,
  onSelectPaper,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return {
        matchedJobs: jobs.slice(0, 3),
        matchedNotes: notes.slice(0, 3),
        matchedPapers: papers.slice(0, 3),
      };
    }
    const q = searchTerm.toLowerCase();
    const matchedJobs = jobs.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.organization.toLowerCase().includes(q) ||
        j.department.toLowerCase().includes(q)
    );
    const matchedNotes = notes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.subject.toLowerCase().includes(q) ||
        n.chapterName.toLowerCase().includes(q)
    );
    const matchedPapers = papers.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subject.toLowerCase().includes(q) ||
        p.boardOrAuthority.toLowerCase().includes(q)
    );
    return { matchedJobs, matchedNotes, matchedPapers };
  }, [searchTerm, jobs, notes, papers]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input
            id="global-search-modal-input"
            autoFocus
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search all jobs, class notes, or past papers..."
            className="w-full text-sm sm:text-base font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              id="clear-global-search-btn"
              onClick={() => setSearchTerm('')}
              className="text-xs px-2 py-1 bg-slate-100 text-slate-500 rounded hover:bg-slate-200 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            id="close-global-search-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-5 text-xs">
          {/* Jobs Results */}
          {searchResults.matchedJobs.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>Jobs & Vacancies ({searchResults.matchedJobs.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.matchedJobs.slice(0, 4).map((job) => (
                  <div
                    key={job.id}
                    id={`search-result-job-${job.id}`}
                    onClick={() => {
                      onSelectJob(job);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">{job.title}</p>
                      <span className="text-[11px] text-slate-500">{job.organization} • {job.location}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes Results */}
          {searchResults.matchedNotes.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>Class Notes ({searchResults.matchedNotes.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.matchedNotes.slice(0, 4).map((note) => (
                  <div
                    key={note.id}
                    id={`search-result-note-${note.id}`}
                    onClick={() => {
                      onSelectNote(note);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-indigo-50/70 border border-transparent hover:border-indigo-200 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">{note.title}</p>
                      <span className="text-[11px] text-slate-500">{note.classLevel} Class • {note.subject} • {note.board}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-indigo-600 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Papers Results */}
          {searchResults.matchedPapers.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase tracking-wider mb-2">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>Past Examination Papers ({searchResults.matchedPapers.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.matchedPapers.slice(0, 4).map((paper) => (
                  <div
                    key={paper.id}
                    id={`search-result-paper-${paper.id}`}
                    onClick={() => {
                      onSelectPaper(paper);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">{paper.title}</p>
                      <span className="text-[11px] text-slate-500">{paper.boardOrAuthority} • {paper.year} ({paper.session})</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchResults.matchedJobs.length === 0 &&
            searchResults.matchedNotes.length === 0 &&
            searchResults.matchedPapers.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                No matching results found for "{searchTerm}".
              </div>
            )}
        </div>

        {/* Footer tip */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-slate-400 text-[11px] flex items-center justify-between">
          <span>Tip: Click any item to view full details or download PDF</span>
          <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-slate-500">ESC to close</kbd>
        </div>
      </div>
    </div>
  );
};
