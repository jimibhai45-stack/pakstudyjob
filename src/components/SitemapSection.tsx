import React, { useState, useMemo } from 'react';
import {
  Map,
  Search,
  Briefcase,
  BookOpen,
  FileText,
  Building,
  ShieldCheck,
  AlertCircle,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  FileCode,
  Copy,
  Check,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Job, StudyNote, PastPaper, NavSection } from '../types';
import { PAKISTAN_BOARDS } from '../data/portalData';

interface SitemapSectionProps {
  jobs: Job[];
  notes: StudyNote[];
  papers: PastPaper[];
  onSelectSection: (section: NavSection) => void;
  onSelectJob: (job: Job) => void;
  onSelectNote: (note: StudyNote) => void;
  onSelectPaper: (paper: PastPaper) => void;
  onShowToast: (msg: string) => void;
}

export const SitemapSection: React.FC<SitemapSectionProps> = ({
  jobs,
  notes,
  papers,
  onSelectSection,
  onSelectJob,
  onSelectNote,
  onSelectPaper,
  onShowToast,
}) => {
  const [sitemapSearch, setSitemapSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'visual' | 'xml'>('visual');
  const [copiedXml, setCopiedXml] = useState(false);

  // Group jobs by category
  const govtJobs = useMemo(() => jobs.filter((j) => j.category === 'government'), [jobs]);
  const privateJobs = useMemo(() => jobs.filter((j) => j.category === 'private'), [jobs]);
  const internshipJobs = useMemo(() => jobs.filter((j) => j.category === 'internship'), [jobs]);

  // Group notes by class level
  const notes9th = useMemo(() => notes.filter((n) => n.classLevel === '9th'), [notes]);
  const notes10th = useMemo(() => notes.filter((n) => n.classLevel === '10th'), [notes]);
  const notes11th = useMemo(() => notes.filter((n) => n.classLevel === '11th'), [notes]);
  const notes12th = useMemo(() => notes.filter((n) => n.classLevel === '12th'), [notes]);

  // Group papers by category
  const matricPapers = useMemo(() => papers.filter((p) => p.category === 'matric'), [papers]);
  const interPapers = useMemo(() => papers.filter((p) => p.category === 'inter'), [papers]);
  const entryTestPapers = useMemo(() => papers.filter((p) => p.category === 'entry-test'), [papers]);

  // Filtered lists if search is active
  const filteredJobs = useMemo(() => {
    if (!sitemapSearch.trim()) return jobs;
    const q = sitemapSearch.toLowerCase();
    return jobs.filter((j) => j.title.toLowerCase().includes(q) || j.organization.toLowerCase().includes(q) || j.department.toLowerCase().includes(q));
  }, [jobs, sitemapSearch]);

  const filteredNotes = useMemo(() => {
    if (!sitemapSearch.trim()) return notes;
    const q = sitemapSearch.toLowerCase();
    return notes.filter((n) => n.title.toLowerCase().includes(q) || n.subject.toLowerCase().includes(q) || n.chapterName.toLowerCase().includes(q));
  }, [notes, sitemapSearch]);

  const filteredPapers = useMemo(() => {
    if (!sitemapSearch.trim()) return papers;
    const q = sitemapSearch.toLowerCase();
    return papers.filter((p) => p.title.toLowerCase().includes(q) || p.boardOrAuthority.toLowerCase().includes(q) || p.subject.toLowerCase().includes(q));
  }, [papers, sitemapSearch]);

  // Generate standard XML sitemap
  const xmlSitemapContent = useMemo(() => {
    const baseUrl = 'https://pakstudyjobs.pk';
    const today = new Date().toISOString().split('T')[0];

    const staticRoutes = [
      { loc: '/', priority: '1.0', changefreq: 'daily' },
      { loc: '/jobs', priority: '0.9', changefreq: 'daily' },
      { loc: '/notes', priority: '0.9', changefreq: 'weekly' },
      { loc: '/past-papers', priority: '0.9', changefreq: 'weekly' },
      { loc: '/about', priority: '0.6', changefreq: 'monthly' },
      { loc: '/contact', priority: '0.7', changefreq: 'monthly' },
      { loc: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
      { loc: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
      { loc: '/sitemap', priority: '0.8', changefreq: 'weekly' },
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    staticRoutes.forEach((route) => {
      xml += `  <url>\n    <loc>${baseUrl}${route.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>\n`;
    });

    jobs.forEach((job) => {
      xml += `  <url>\n    <loc>${baseUrl}/jobs/${job.id}</loc>\n    <lastmod>${job.postedDate || today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });

    notes.forEach((note) => {
      xml += `  <url>\n    <loc>${baseUrl}/notes/${note.id}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });

    papers.forEach((paper) => {
      xml += `  <url>\n    <loc>${baseUrl}/past-papers/${paper.id}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  }, [jobs, notes, papers]);

  const handleCopyXml = () => {
    navigator.clipboard.writeText(xmlSitemapContent);
    setCopiedXml(true);
    onShowToast('XML Sitemap copied to clipboard!');
    setTimeout(() => setCopiedXml(false), 2000);
  };

  return (
    <div id="sitemap-page-container" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200 uppercase tracking-wider">
            <Map className="w-3.5 h-3.5" />
            <span>Complete Platform Index & Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
            PakStudyJobs Site Map
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Direct navigational access to all {jobs.length} latest jobs, {notes.length} secondary & intermediate syllabus notes, {papers.length} solved examination papers, and institutional portals.
          </p>
        </div>

        {/* Notice Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Official Notice:</strong> PakStudyJobs is an independent educational and jobs information platform. For official information, always visit the relevant board, university, testing service, or employer website. Contact support: <a href="mailto:jimibhai45@gmal.com" className="font-mono font-bold underline">jimibhai45@gmal.com</a>.
          </p>
        </div>

        {/* Toolbar: Search & Tab Toggle */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              id="sitemap-search-filter"
              type="text"
              value={sitemapSearch}
              onChange={(e) => setSitemapSearch(e.target.value)}
              placeholder="Search sitemap for any job, note, or paper..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              id="sitemap-tab-visual"
              onClick={() => setActiveTab('visual')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'visual'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Visual Directory</span>
            </button>
            <button
              id="sitemap-tab-xml"
              onClick={() => setActiveTab('xml')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'xml'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>XML Crawler View</span>
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'xml' ? (
        /* XML Sitemap Code View */
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-slate-300 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-white font-mono">sitemap.xml (Google & Bing Ready)</span>
            </div>
            <button
              id="copy-xml-sitemap-btn"
              onClick={handleCopyXml}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-700"
            >
              {copiedXml ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
              <span>{copiedXml ? 'Copied!' : 'Copy XML Code'}</span>
            </button>
          </div>
          <p className="text-xs text-slate-400">
            This XML schema complies with standard sitemaps.org protocols for Google Search Console, Bing Webmaster, and mobile search spiders.
          </p>
          <pre className="bg-slate-950 p-4 sm:p-6 rounded-2xl overflow-x-auto text-xs font-mono text-emerald-300 border border-slate-800 max-h-[500px]">
            <code>{xmlSitemapContent}</code>
          </pre>
        </div>
      ) : (
        /* Visual Directory View */
        <div className="space-y-10">
          {/* 1. Institutional Core Pages */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display mb-4 flex items-center gap-2.5">
              <Building className="w-5 h-5 text-blue-600" />
              <span>Institutional & Core Portals</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Home Page', desc: 'Unified portal search & latest updates', section: 'home' as NavSection },
                { name: 'Latest Jobs Portal', desc: `${jobs.length} Verified government & private vacancies`, section: 'jobs' as NavSection },
                { name: 'Class 9th – 12th Notes', desc: `${notes.length} Chapter-wise SLO study materials`, section: 'notes' as NavSection },
                { name: 'Past Examination Papers', desc: `${papers.length} Solved papers & entry tests`, section: 'past-papers' as NavSection },
                { name: 'About PakStudyJobs', desc: 'Platform mission & editorial standards', section: 'about' as NavSection },
                { name: 'Contact Student Support', desc: 'Email inquiries & verification desk', section: 'contact' as NavSection },
                { name: 'Privacy Policy', desc: 'User data protection and cookies policy', section: 'privacy-policy' as NavSection },
                { name: 'Educational Disclaimer', desc: 'Independent platform advisory notice', section: 'disclaimer' as NavSection },
              ].map((item) => (
                <button
                  key={item.section}
                  id={`sitemap-core-${item.section}`}
                  onClick={() => onSelectSection(item.section)}
                  className="text-left p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700">
                      {item.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. All 20 Latest Jobs Directory */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                  <span>Latest Jobs & Internships Directory ({filteredJobs.length})</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Categorized listings for Federal, Provincial, Corporate and Paid Trainee positions across Pakistan.
                </p>
              </div>
              <button
                id="sitemap-view-all-jobs"
                onClick={() => onSelectSection('jobs')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                <span>Open Jobs Section</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredJobs.map((job, idx) => (
                <div
                  key={job.id}
                  id={`sitemap-job-item-${job.id}`}
                  onClick={() => onSelectJob(job)}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 uppercase">
                        {job.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Last Date: {job.lastDate}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-700 line-clamp-2 mb-1">
                      {idx + 1}. {job.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">{job.organization}</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {job.scale ? `${job.scale} • ` : ''}{job.location}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-blue-700">
                    <span>{job.vacancies} Vacancies</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      View Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. All 20 Notes Directory (9th - 12th) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <span>Class 9th, 10th, 11th & 12th Study Notes Directory ({filteredNotes.length})</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Full chapter-wise study notes with derivations, solved formulas, and conceptual short question-answers.
                </p>
              </div>
              <button
                id="sitemap-view-all-notes"
                onClick={() => onSelectSection('notes')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                <span>Open Notes Section</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNotes.map((note, idx) => (
                <div
                  key={note.id}
                  id={`sitemap-note-item-${note.id}`}
                  onClick={() => onSelectNote(note)}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800">
                        {note.classLevel} Class • {note.subject}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {note.totalPages} Pages
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 hover:text-indigo-700 line-clamp-2 mb-1">
                      {idx + 1}. {note.title}
                    </h3>
                    <p className="text-xs text-slate-500">{note.board}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-indigo-700">
                    <span>Verified Information • Free PDF</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      Read / Download <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. All 20 Past Examination Papers Directory */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-rose-600" />
                  <span>Past Examination Papers & Entry Tests Directory ({filteredPapers.length})</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Matric, Intermediate, PMDC MDCAT, UET ECAT, NUMS, and HEC LAT solved examination papers with marking schemes.
                </p>
              </div>
              <button
                id="sitemap-view-all-papers"
                onClick={() => onSelectSection('past-papers')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                <span>Open Past Papers Section</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPapers.map((paper, idx) => (
                <div
                  key={paper.id}
                  id={`sitemap-paper-item-${paper.id}`}
                  onClick={() => onSelectPaper(paper)}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 uppercase">
                        {paper.category} • Year {paper.year}
                      </span>
                      <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Solved Key
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 hover:text-rose-700 line-clamp-2 mb-1">
                      {idx + 1}. {paper.title}
                    </h3>
                    <p className="text-xs text-slate-500">{paper.boardOrAuthority} • {paper.session}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-rose-700">
                    <span>{paper.examOverview.totalMarks} Marks • Solved Past Paper</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      View Paper <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Educational Boards Directory */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display mb-2 flex items-center gap-2.5">
              <Building className="w-5 h-5 text-amber-600" />
              <span>Official Pakistani Education Boards Directory</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Verified official web portals of intermediate and secondary education authorities across Pakistan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PAKISTAN_BOARDS.map((board) => (
                <div
                  key={board.name}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">{board.name}</span>
                    <span className="text-[11px] text-slate-500">{board.type} Jurisdiction</span>
                  </div>
                  <a
                    href={board.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-slate-200 text-blue-600 hover:bg-blue-50 text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
