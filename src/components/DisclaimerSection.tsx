import React from 'react';
import {
  AlertTriangle,
  Scale,
  ShieldAlert,
  ExternalLink,
  CheckCircle2,
  Building2,
  GraduationCap,
  Briefcase,
  HelpCircle,
  FileText,
  Mail,
  ArrowRight,
  Info,
  BadgeAlert,
  Calendar,
} from 'lucide-react';
import { NavSection } from '../types';

interface DisclaimerSectionProps {
  onSelectSection: (section: NavSection) => void;
}

export const DisclaimerSection: React.FC<DisclaimerSectionProps> = ({ onSelectSection }) => {
  const officialPortals = [
    {
      name: 'Federal Public Service Commission (FPSC)',
      url: 'https://www.fpsc.gov.pk',
      purpose: 'Federal Civil Service & BPS-16/17+ Jobs',
    },
    {
      name: 'Punjab Public Service Commission (PPSC)',
      url: 'https://www.ppsc.gop.pk',
      purpose: 'Punjab Provincial Gazetted Vacancies',
    },
    {
      name: 'Sindh Public Service Commission (SPSC)',
      url: 'https://www.spsc.gov.pk',
      purpose: 'Sindh Provincial Government Jobs',
    },
    {
      name: 'Khyber Pakhtunkhwa Public Service Commission (KPPSC)',
      url: 'https://www.kppsc.gov.pk',
      purpose: 'KPK Government Recruitments',
    },
    {
      name: 'Balochistan Public Service Commission (BPSC)',
      url: 'https://bpsc.gob.pk',
      purpose: 'Balochistan Provincial Opportunities',
    },
    {
      name: 'Federal Board of Intermediate & Secondary Education (FBISE)',
      url: 'https://www.fbise.edu.pk',
      purpose: 'Federal Matric & Intermediate Syllabi',
    },
    {
      name: 'Board of Intermediate & Secondary Education, Lahore (BISE Lahore)',
      url: 'https://www.biselahore.com',
      purpose: 'Punjab Board Examination Dates & Results',
    },
    {
      name: 'Pakistan Medical & Dental Council (PMDC)',
      url: 'https://www.pmdc.pk',
      purpose: 'MDCAT Regulations & Medical Admissions',
    },
    {
      name: 'Higher Education Commission (HEC Pakistan)',
      url: 'https://www.hec.gov.pk',
      purpose: 'LAT, USAT, and Degree Attestation',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* Top Banner Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-br from-slate-900 via-amber-950/70 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Official Disclaimer & Fair Use Notice</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-3">
              Disclaimer for PakStudyJobs
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              All job advertisements, recruitment notices, educational notes, textbook solutions, and past examination papers on <strong>PakStudyJobs.pk</strong> are published solely for general informational and educational purposes. Candidates and students must always verify all information against official gazettes, government portals, and board publications before taking any action.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Last Updated: September 20, 2026</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
                <span>Legal Status: Independent Public Resource</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Caution Alert Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-amber-100 rounded-xl text-amber-800 shrink-0 mt-0.5">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-amber-950 font-display">
              Mandatory Notice to Students and Job Seekers
            </h2>
            <p className="text-xs sm:text-sm text-amber-950 font-semibold leading-relaxed bg-amber-100/70 p-3 rounded-xl border border-amber-200">
              PakStudyJobs is an independent educational and jobs information platform. For official information, always visit the relevant board, university, testing service, or employer website.
            </p>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              We do not conduct recruitment tests, issue roll number slips, collect application fees, or grant academic credentials. All critical decisions—including eligibility criteria, age calculations, domicile requirements, bank challan payments, and exam syllabi—must be verified directly through the official publishing authority.
            </p>
          </div>
        </div>
      </section>

      {/* Main Disclaimer Content Points */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
        {/* Section 1: Informational Purposes Only */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
              <Info className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              1. Informational & Educational Purposes Only
            </h2>
          </div>
          <p>
            The content presented on PakStudyJobs—including chapter notes (9th, 10th, 11th, 12th classes), solved exercises, formula guides, past papers, entry test practice archives (MDCAT, ECAT, LAT), and employment notices—is compiled to support Pakistani students and job seekers in their learning and career planning.
          </p>
          <p>
            While we strive for high quality and rigor, the materials on this website are provided on an <strong>"as is" and "as available" basis</strong> without any warranties, express or implied, regarding their completeness, reliability, or suitability for specific competitive exams or legal recruitments.
          </p>
        </div>

        {/* Section 2: Verification from Official Sources */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              2. User Obligation to Verify Details from Official Sources
            </h2>
          </div>
          <p>
            Government departments, testing agencies, and educational boards frequently issue corrigendums, addendums, syllabus revisions, exam date-sheet changes, and last-date extensions.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <p className="font-bold text-slate-800">Before acting on any information found on our platform, you agree to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-1">
              <li>
                <strong>Cross-check job vacancies:</strong> Review the original advertisement published in official daily newspapers (Daily Jang, Dawn, The News, Express) or the official recruitment portals (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS, PTS).
              </li>
              <li>
                <strong>Verify application deadlines & fees:</strong> Confirm the closing dates, bank challan amounts, and designated deposit branches (National Bank of Pakistan, State Bank, etc.) before submitting payments.
              </li>
              <li>
                <strong>Confirm examination schemes & pairing:</strong> Cross-reference board pairing schemes and practical guidelines with the official notifications of your respective BISE or FBISE board.
              </li>
              <li>
                <strong>Inspect eligibility criteria:</strong> Confirm your age relaxation, academic qualifications, quota divisions, and domicile eligibility directly against the departmental service rules.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Non-Affiliation Statement */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              3. Independent Operation & Non-Affiliation Statement
            </h2>
          </div>
          <p>
            <strong>PakStudyJobs.pk is an independent digital educational portal.</strong> We are not associated, affiliated, endorsed by, or in any way officially connected with:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              • Federal Public Service Commission (FPSC)
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              • Punjab Public Service Commission (PPSC)
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              • Federal Board of Intermediate & Secondary Education (FBISE)
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              • Any Board of Intermediate and Secondary Education (BISE)
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              • National Testing Service (NTS) / PMDC / HEC
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              • Any Federal or Provincial Ministry or Government Department
            </div>
          </div>
          <p className="text-xs text-slate-500 pt-1">
            All registered trademarks, department logos, and board titles mentioned remain the intellectual property of their respective official organizations.
          </p>
        </div>

        {/* Section 4: Study Material & Answer Keys */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              4. Educational Study Materials, Model Answers & Errata
            </h2>
          </div>
          <p>
            Study notes, chapter summaries, formula sheets, and past paper answers are prepared by independent academic educators for practice and conceptual revision.
          </p>
          <p>
            Although our contributors endeavor to maintain 100% accuracy, typographical oversights, differing textbook editions, or varied board evaluation rubrics may occasionally exist. PakStudyJobs shall not be held liable for any loss of marks, examination disqualifications, or academic discrepancies arising from reliance on these unofficial solutions. Students are encouraged to cross-check answers with their prescribed government textbooks.
          </p>
        </div>

        {/* Section 5: Fraud Prevention & Fee Alert */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-50 text-rose-700">
              <BadgeAlert className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              5. Fraud Alert & Protection Against Scammers
            </h2>
          </div>
          <p>
            PakStudyJobs provides all study materials, notes, and past paper downloads <strong>100% free of charge</strong>. We do not ask for bank transfers, mobile money payments (Easypaisa / JazzCash), or gift cards.
          </p>
          <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1 text-rose-900">
            <p className="font-bold">Important Warning Against Impersonators:</p>
            <p>
              Never pay money to any individual or social media group claiming to guarantee government job appointments, test leakage, or fake board certificates on behalf of PakStudyJobs. Legitimate government recruitment fees are payable only through official bank challans (typically NBP or designated treasuries).
            </p>
          </div>
        </div>

        {/* Section 6: Limitation of Liability */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              6. Limitation of Liability
            </h2>
          </div>
          <p>
            In no event shall PakStudyJobs, its administrators, contributors, or technical team be held liable for any direct, indirect, incidental, special, or consequential damages resulting from:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
            <li>Missed application deadlines due to network interruptions, power outages, or late viewing.</li>
            <li>Inadvertent errors, typos, or omissions in job advertisements or syllabus pairing documents.</li>
            <li>Rejection of applications or exam disqualification by third-party testing authorities.</li>
            <li>Content, privacy practices, or downtime of external websites linked from our portal.</li>
          </ul>
        </div>

        {/* Section 7: Directory of Official Verification Portals */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-1">
              7. Official Verification Directory
            </h2>
            <p className="text-slate-500 text-xs">
              To verify dates, syllabus changes, and employment gazettes, refer directly to these authentic official websites:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {officialPortals.map((portal, idx) => (
              <a
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <p className="font-bold text-xs text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {portal.name}
                    </p>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{portal.purpose}</p>
                </div>
                <span className="text-[10px] text-blue-600 font-mono mt-2 truncate">
                  {portal.url.replace('https://', '')}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Section 8: Reporting Corrigendums or Corrections */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
            8. Reporting Corrigendums or Errata
          </h2>
          <p>
            If you notice any outdated job posting, expired deadline, typo in a study note, or an official corrigendum issued by a department that needs updating, please notify our editorial staff immediately.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <p className="font-bold text-slate-800">Editorial & Corrections Desk:</p>
            <p className="text-slate-600">
              Email: <a href="mailto:jimibhai45@gmal.com" className="text-blue-700 font-bold hover:underline font-mono">jimibhai45@gmal.com</a>
            </p>
            <p className="text-slate-600">Phone: Contact via email only</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              id="disclaimer-report-errata-btn"
              onClick={() => onSelectSection('contact')}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Report an Issue or Corrigendum</span>
            </button>
            <button
              id="disclaimer-view-privacy-btn"
              onClick={() => onSelectSection('privacy-policy')}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Read Privacy Policy
            </button>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
          <button
            id="disclaimer-back-to-home-btn"
            onClick={() => onSelectSection('home')}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 cursor-pointer"
          >
            <span>← Back to Homepage</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              id="disclaimer-goto-notes-btn"
              onClick={() => onSelectSection('notes')}
              className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
            >
              Study Notes
            </button>
            <span className="text-slate-300">•</span>
            <button
              id="disclaimer-goto-papers-btn"
              onClick={() => onSelectSection('past-papers')}
              className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
            >
              Past Papers
            </button>
            <span className="text-slate-300">•</span>
            <button
              id="disclaimer-goto-jobs-btn"
              onClick={() => onSelectSection('jobs')}
              className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
            >
              Verified Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
