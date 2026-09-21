import React from 'react';
import {
  GraduationCap,
  BookOpen,
  FileText,
  Briefcase,
  Target,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building2,
  Mail,
  Compass,
  FileCheck,
  Search,
  BookMarked,
  HeartHandshake,
} from 'lucide-react';
import { NavSection } from '../types';

interface AboutSectionProps {
  onSelectSection: (section: NavSection) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectSection }) => {
  const corePillars = [
    {
      id: 'educational-notes',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      badge: '9th to 12th Classes',
      title: 'Educational Study Notes',
      description:
        'Curriculum-aligned chapter notes, high-yield summaries, formula sheets, textbook exercises, and solved board question banks for Science and Arts disciplines. Designed to help matric and intermediate students master their syllabi and prepare effectively for board exams without relying on costly private academies.',
      features: [
        'Physics, Chemistry, Mathematics, Biology, & Computer Science',
        'Urdu, English, Islamiat, and Pakistan Studies compulsory notes',
        'Coverage for Federal Board (FBISE), Punjab, Sindh, & KPK Boards',
        'Free downloadable PDF format optimized for mobile reading',
      ],
      actionLabel: 'Browse Study Notes',
      section: 'notes' as NavSection,
      accentColor: 'blue',
    },
    {
      id: 'past-papers',
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      badge: 'Solved & Unsolved',
      title: 'Past Examination Papers',
      description:
        'An extensive digital archive of authentic past board examination papers and competitive entrance test papers. Complete with model answer patterns, marking schemes, and time management breakdowns to help students understand paper trends and scoring rubrics.',
      features: [
        'Matric (9th & 10th) & Intermediate (11th & 12th) Annual Papers',
        'National Entry Tests: PMDC MDCAT, UET ECAT, NUMS, and HEC LAT',
        'BISE Lahore, Rawalpindi, Faisalabad, Karachi, & FBISE archives',
        'Verified paper schemes and section-by-section mark distributions',
      ],
      actionLabel: 'Explore Past Papers',
      section: 'past-papers' as NavSection,
      accentColor: 'emerald',
    },
    {
      id: 'study-resources',
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      badge: 'Academic Guidance',
      title: 'Study Resources & Schemes',
      description:
        'A comprehensive repository of academic pairing schemes, assessment criteria, syllabus updates, practical exam guidelines, and revision notes. We provide students with the strategic blueprint needed to maximize marks in annual examinations.',
      features: [
        'Latest annual pairing schemes and question weightages',
        'High-yield formula cheat sheets and definitions',
        'Model papers with solution criteria and step marking',
        'Preparation roadmaps for top-tier medical and engineering entry tests',
      ],
      actionLabel: 'View Exam Resources',
      section: 'notes' as NavSection,
      accentColor: 'indigo',
    },
    {
      id: 'job-updates',
      icon: <Briefcase className="w-6 h-6 text-amber-600" />,
      badge: 'Govt & Private Vacancies',
      title: 'Verified Job Updates & Career Alerts',
      description:
        'Timely, authentic employment notifications aggregated daily from official government gazettes, national newspapers, and corporate listings. We empower Pakistani graduates and job seekers with direct application links, BPS scale specifications, quota breakdowns, and preparation guidance.',
      features: [
        'Federal jobs via FPSC, NTS, PTS, and departmental tests',
        'Provincial commission recruitments: PPSC, SPSC, KPPSC, and BPSC',
        'Banking, IT, medical, and premier corporate sector openings',
        'Youth development programs, paid internships, and apprenticeships',
      ],
      actionLabel: 'Find Latest Jobs',
      section: 'jobs' as NavSection,
      accentColor: 'amber',
    },
  ];

  const whoWeServe = [
    {
      title: 'Matric & Intermediate Students',
      description:
        'Students in 9th, 10th, 11th, and 12th grades seeking structured chapter notes, model solved questions, and past papers to achieve A+ grades in BISE board exams.',
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      tag: 'Classes 9th – 12th',
    },
    {
      title: 'Entry Test Aspirants',
      description:
        'Aspiring doctors, engineers, and lawyers preparing for MDCAT, ECAT, NUMS, and LAT examinations who require solved past papers and conceptual revision sheets.',
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      tag: 'MDCAT / ECAT / LAT',
    },
    {
      title: 'Graduates & Career Seekers',
      description:
        'Job seekers looking for authentic government recruitment notices (BPS-09 to BPS-17+), banking officer tests, teaching jobs, and corporate trainee opportunities.',
      icon: <Briefcase className="w-5 h-5 text-amber-600" />,
      tag: 'BPS Scales & Private Careers',
    },
    {
      title: 'Teachers & Academic Mentors',
      description:
        'Educators and tutors across Pakistan who rely on standard board pairing schemes, question banks, and authentic past paper patterns for lesson planning and student assessment.',
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      tag: 'Educators & Institutions',
    },
  ];

  const impactStats = [
    { number: 'Updated Regularly', label: 'Pakistani Student Hub', desc: 'Active learning resources' },
    { number: 'Latest Resources', label: 'Free PDF Downloads', desc: 'Notes and past papers delivered' },
    { number: 'Verified Information', label: 'Verified Career Vacancies', desc: 'FPSC, PPSC, and private listings' },
    { number: 'Student Resources', label: 'Boards & Testing Authorities', desc: 'FBISE, BISEs, PMDC, NTS, and UET' },
  ];

  const coreValues = [
    {
      title: '100% Free & Open Access',
      description:
        'We firmly believe that quality education and timely employment news must never be locked behind paywalls. Every note, past paper, and job notification on PakStudyJobs is accessible completely free of charge.',
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    },
    {
      title: 'Authenticity & Official Verification',
      description:
        'Every job advertisement is cross-verified against official departmental gazettes, daily national newspapers, and verified commission portals before publication to protect candidates from fraudulent schemes.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Curriculum-Aligned Quality',
      description:
        'Our study notes and past paper solutions adhere strictly to the National Curriculum of Pakistan and the official syllabi prescribed by provincial textbook boards and federal education authorities.',
      icon: <FileCheck className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Nationwide Inclusivity',
      description:
        'From Islamabad, Lahore, and Karachi to remote areas in Balochistan, Gilgit-Baltistan, and AJK, our platform is lightweight and mobile-optimized so any student with an internet connection can study and apply.',
      icon: <HeartHandshake className="w-5 h-5 text-rose-600" />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* Top Breadcrumb & Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          {/* Subtle Background Accent Pattern */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>About PakStudyJobs.pk</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-4 leading-tight">
              Pakistan’s Leading Educational Notes, Past Papers & Career Portal
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              PakStudyJobs is dedicated to empowering students and career seekers across Pakistan.
              We provide free, curriculum-aligned <strong>educational notes</strong>, authentic <strong>past examination papers</strong>,
              essential <strong>study resources</strong>, and daily verified <strong>job updates</strong> to bridge the gap between academic
              excellence and career success.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                id="about-hero-explore-notes-btn"
                onClick={() => onSelectSection('notes')}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Study Notes</span>
              </button>
              <button
                id="about-hero-browse-jobs-btn"
                onClick={() => onSelectSection('jobs')}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-amber-300" />
                <span>Browse Latest Jobs</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Official Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 relative z-20">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-xs flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-0.5">
              Platform Notice
            </span>
            <p className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
              PakStudyJobs is an independent educational and jobs information platform. For official information, always visit the relevant board, university, testing service, or employer website.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Impact Stats Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {impactStats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-lg sm:text-xl lg:text-2xl font-black text-blue-700 font-display">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-800">{stat.label}</p>
              <p className="text-[11px] text-slate-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Story & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Our Vision & Founding Purpose</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Democratizing Academic Excellence and Career Opportunities in Pakistan
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In Pakistan, millions of students each year face high barriers to quality exam preparation. Reliable study notes, solved board papers, and accurate pairing schemes have often been locked behind high tuition fees at private evening coaching centers. Meanwhile, job seekers frequently struggle with dispersed, outdated, or misleading employment notifications across disconnected publications.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>PakStudyJobs.pk</strong> was established to solve both challenges in one comprehensive, user-friendly digital space. Whether a 9th-class student in Gujranwala needs Physics notes, an intermediate pre-medical candidate in Sukkur is practicing MDCAT past papers, or a fresh university graduate in Peshawar is applying for an FPSC Inspector vacancy, PakStudyJobs provides immediate, free, and reliable support.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero Subscription Fees or Paywalls</span>
              </div>
              <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Coverage Across All 4 Provinces, AJK & Federal</span>
              </div>
              <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct PDF Downloads with No Complicated Steps</span>
              </div>
              <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Daily Verified Employment Gazettes</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/10 text-white border border-white/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display">PakStudyJobs Charter</h3>
                  <p className="text-xs text-blue-200">Education for Every Pakistani Child</p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-blue-100 italic border-l-2 border-blue-400 pl-4 py-1 leading-relaxed">
                "Our guiding philosophy is that geographical distance or economic circumstance should never determine a student's access to knowledge or employment opportunities. Knowledge belongs to all."
              </blockquote>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between text-blue-200">
                  <span>Educational Portal Status</span>
                  <span className="font-bold text-emerald-300">Live & 100% Free</span>
                </div>
                <div className="flex items-center justify-between text-blue-200">
                  <span>Targeted Academic Reach</span>
                  <span className="font-bold text-white">Punjab, Sindh, KPK, Balochistan</span>
                </div>
                <div className="flex items-center justify-between text-blue-200">
                  <span>Official Affiliations Notice</span>
                  <span className="font-bold text-amber-300">Independent Public Resource</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide: The 4 Main Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Comprehensive Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
            What PakStudyJobs Provides
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Explore our four interconnected pillars tailored to meet the needs of Pakistani matric, intermediate, and university students, as well as job seekers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar) => (
            <div
              key={pillar.id}
              id={`about-pillar-${pillar.id}`}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display mb-2 group-hover:text-blue-700 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Key Features:
                  </span>
                  {pillar.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  id={`about-pillar-btn-${pillar.id}`}
                  onClick={() => onSelectSection(pillar.section)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  <span>{pillar.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-100/80 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Who We Serve Across Pakistan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Our digital tools and educational resources cater to diverse academic and professional journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whoWeServe.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Our Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            The Principles Guiding PakStudyJobs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                {val.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial & Verification Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
              How We Verify Educational Material & Job Notices
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              To ensure students and candidates receive only authentic and actionable material, our team follows a two-tier review procedure:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h4 className="text-xs font-bold text-slate-900">Official Gazettes & Syllabus Verification</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Vacancies are sourced strictly from accredited national dailies (Daily Jang, Dawn, Express) and official commissions (FPSC, PPSC). Notes are compiled against official textbook curriculums.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h4 className="text-xs font-bold text-slate-900">Academic & Eligibility Review</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Subject specialists review answer keys, mathematical formulas, and scientific diagrams. Job criteria (age limit, quota, domicile, qualification) are clearly itemized.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
                3
              </span>
              <h4 className="text-xs font-bold text-slate-900">Public Access & Feedback Channel</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Files are published in universal PDF formats without forced software downloads. Any errata reported by educators or students is reviewed and corrected promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl text-center flex flex-col items-center">
          <GraduationCap className="w-12 h-12 text-blue-300 mb-3" />
          <h2 className="text-2xl sm:text-3xl font-black font-display mb-2">
            Ready to Accelerate Your Studies or Find Your Next Career Step?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mb-6">
            Join hundreds of thousands of Pakistani learners accessing free revision notes, past papers, and daily government job notifications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              id="about-bottom-cta-notes-btn"
              onClick={() => onSelectSection('notes')}
              className="px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              Browse 9th – 12th Notes
            </button>
            <button
              id="about-bottom-cta-papers-btn"
              onClick={() => onSelectSection('past-papers')}
              className="px-6 py-3 bg-blue-700 text-white hover:bg-blue-600 font-bold text-xs sm:text-sm rounded-xl border border-blue-500 shadow-md transition-all cursor-pointer"
            >
              Download Past Papers
            </button>
            <button
              id="about-bottom-cta-contact-btn"
              onClick={() => onSelectSection('contact')}
              className="px-6 py-3 bg-transparent text-white hover:bg-white/10 font-bold text-xs sm:text-sm rounded-xl border border-white/30 transition-all cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
