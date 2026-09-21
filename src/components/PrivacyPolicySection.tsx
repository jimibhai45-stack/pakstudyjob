import React from 'react';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Cookie,
  Mail,
  AlertCircle,
  HardDrive,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { NavSection } from '../types';

interface PrivacyPolicySectionProps {
  onSelectSection: (section: NavSection) => void;
}

export const PrivacyPolicySection: React.FC<PrivacyPolicySectionProps> = ({ onSelectSection }) => {
  const lastUpdated = 'September 20, 2026';

  const highlights = [
    {
      icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
      title: 'No Forced Registration',
      desc: 'You do not need to register, create an account, or submit personal documents to browse jobs, read notes, or download past papers.',
    },
    {
      icon: <HardDrive className="w-5 h-5 text-blue-600" />,
      desc: 'Saved jobs, notes bookmarks, and search preferences are stored directly on your personal device via local browser storage.',
      title: 'Local Device Storage',
    },
    {
      icon: <Lock className="w-5 h-5 text-indigo-600" />,
      desc: 'We never sell, rent, monetize, or broker candidate resumes, student emails, or contact records to commercial marketing agencies.',
      title: 'Zero Data Brokerage',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      desc: 'Our portal serves free educational materials and public notices under strict Pakistani cyber laws and fair information practices.',
      title: 'Pakistani Cyber Compliance',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* Top Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Privacy Policy & Data Protection</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-3">
              Privacy Policy for PakStudyJobs
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              At <strong>PakStudyJobs.pk</strong>, your digital privacy and academic peace of mind are paramount. This document outlines our data protection practices, local storage handling, cookie policies, and transparency commitments for students, educators, and job seekers across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Effective Date: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Building className="w-3.5 h-3.5 text-emerald-400" />
                <span>Applicable Domain: pakstudyjobs.pk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Notice Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10 relative z-20">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-xs flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-0.5">
              Notice
            </span>
            <p className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
              PakStudyJobs is an independent educational and jobs information platform. For official information, always visit the relevant board, university, testing service, or employer website.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Quick-Scan Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between"
            >
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
        {/* Section 1: Introduction & Scope */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
              1
            </span>
            Introduction & Scope of this Policy
          </h2>
          <p>
            PakStudyJobs.pk operates as an independent educational portal providing open access to syllabus notes (9th, 10th, 11th, and 12th classes), solved board past papers, entry test resources (MDCAT, ECAT, LAT), and daily verified career opportunities in Pakistan.
          </p>
          <p>
            This Privacy Policy applies to all visitors, students, applicants, and educational contributors accessing our website. It governs how information is collected, stored, utilized, and safeguarded when using our services. By browsing or downloading resources from PakStudyJobs, you accept the practices outlined herein.
          </p>
        </div>

        {/* Section 2: What We Collect & Do Not Collect */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
              2
            </span>
            Information We Collect and Do Not Collect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                What We May Collect:
              </h3>
              <ul className="space-y-1.5 text-emerald-800 list-disc list-inside">
                <li>
                  <strong>Contact Inquiries:</strong> When you voluntarily submit a message through our Contact Us form (Full Name, Email Address, optional WhatsApp number, and inquiry details).
                </li>
                <li>
                  <strong>Newsletter Subscriptions:</strong> Your email address if you opt-in to receive daily job and examination date-sheet alerts.
                </li>
                <li>
                  <strong>Aggregated Web Telemetry:</strong> Non-personally identifiable diagnostic data (browser family, operating system, preferred screen resolution, approximate city-level region, and referral pages) to maintain platform uptime and CDN speed.
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-2">
              <h3 className="font-bold text-rose-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-700" />
                What We NEVER Collect:
              </h3>
              <ul className="space-y-1.5 text-rose-800 list-disc list-inside">
                <li>National Identity Card Numbers (CNIC / B-Form).</li>
                <li>Credit card numbers, bank account logins, or Easypaisa/JazzCash PINs.</li>
                <li>Confidential biometric or academic transcript uploads.</li>
                <li>Official government job application fees or bank challan receipts (these are always paid directly to the respective department like National Bank of Pakistan for FPSC/PPSC).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Local Storage & Bookmarks */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
              3
            </span>
            Client-Side Local Storage & Bookmarking
          </h2>
          <p>
            To offer a fast, account-free experience, PakStudyJobs utilizes client-side web technology (HTML5 <code>localStorage</code>) on your browser.
          </p>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <p className="font-bold text-slate-800">How Local Storage Works on PakStudyJobs:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>When you click "Save" or the bookmark icon on any job posting, class note, or past paper, the ID is stored solely inside your browser's private local cache.</li>
              <li>This saved data does not sync to remote central servers and is never visible to other users.</li>
              <li>You can clear all saved bookmarks at any time by clicking "Clear All Items" inside the Saved Items drawer or by clearing your browser cache.</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Cookies & Analytics */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
              4
            </span>
            Cookies and Third-Party Services
          </h2>
          <p>
            PakStudyJobs uses essential cookies and similar session storage mechanisms to enhance user experience, preserve search filtering preferences, and measure page load responsiveness across mobile devices.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2.5">
              <Cookie className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">Essential Functionality:</strong> Used to maintain responsive navigation and modal dialogs without page reloads.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Eye className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">Performance Measurement:</strong> We may analyze aggregated traffic flow to determine which subject notes or exam papers have high demand, allowing us to publish missing chapters faster.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <ExternalLink className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">Third-Party Advertisements:</strong> If third-party advertising partners (such as Google AdSense) display ads on our portal to support free educational hosting, they may use cookies (e.g. DART cookies) according to their respective privacy policies. You can opt out of personalized advertising by visiting Google Ad Settings.
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: External Links & Official Portals */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
              5
            </span>
            External Links to Examination Boards & Government Agencies
          </h2>
          <p>
            PakStudyJobs contains hyperlinks directing applicants and students to external institutional portals, including:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
            <li>Federal Public Service Commission (FPSC – fpsc.gov.pk)</li>
            <li>Punjab Public Service Commission (PPSC – ppsc.gop.pk)</li>
            <li>Boards of Intermediate and Secondary Education (e.g., biselahore.com, fbise.edu.pk)</li>
            <li>National Testing Service (NTS – nts.org.pk), PMDC, and HEC</li>
          </ul>
          <p>
            Please be aware that once you click an external link to submit an official application or verify a board roll number, you are subject to the privacy terms and conditions of that specific government or corporate website. We encourage candidates to review the privacy policies of any third-party websites they visit.
          </p>
        </div>

        {/* Section 6: Children's Academic Privacy */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
              6
            </span>
            Student Protection & Academic Age Safeguards
          </h2>
          <p>
            A substantial portion of our visitors are middle school, matric, and intermediate students preparing for board exams. Protecting young learners online is of paramount importance to us.
          </p>
          <p>
            PakStudyJobs does not knowingly collect personally identifiable information from children under 13 years of age. All notes and examination archives can be viewed and downloaded without providing any personal identity, school registration number, or home address.
          </p>
        </div>

        {/* Section 7: Security Measures */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
              7
            </span>
            Data Security & Encryption
          </h2>
          <p>
            We implement strict technical and organizational safeguards to ensure data integrity. All traffic across PakStudyJobs is encrypted using standard 256-bit Secure Socket Layer (SSL/HTTPS) technology, ensuring that your connection to our servers remains private and protected against tampering.
          </p>
        </div>

        {/* Section 8: Rights of Users & Contacting Us */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">
              8
            </span>
            Your Rights & Privacy Contact Officer
          </h2>
          <p>
            Under fair information standards, you have the right to request the deletion of any inquiry message or email address previously provided to us for newsletter notifications.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-800">Privacy & Data Compliance Desk</p>
              <p className="text-xs text-slate-600 mt-0.5">
                Email: <a href="mailto:jimibhai45@gmal.com" className="text-blue-700 font-bold hover:underline font-mono">jimibhai45@gmal.com</a>
              </p>
              <p className="text-xs text-slate-600">Phone: Contact via email only</p>
            </div>
            <button
              id="privacy-contact-officer-btn"
              onClick={() => onSelectSection('contact')}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Privacy Officer</span>
            </button>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
          <button
            id="privacy-back-to-home-btn"
            onClick={() => onSelectSection('home')}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 cursor-pointer"
          >
            <span>← Back to Homepage</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              id="privacy-explore-about-btn"
              onClick={() => onSelectSection('about')}
              className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
            >
              Read About Us
            </button>
            <span className="text-slate-300">•</span>
            <button
              id="privacy-explore-jobs-btn"
              onClick={() => onSelectSection('jobs')}
              className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
            >
              Browse Latest Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
