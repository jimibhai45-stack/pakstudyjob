import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Share2,
  ShieldCheck,
  Building2,
  BookOpen,
  Briefcase,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { FAQS } from '../data/portalData';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'job-query',
    targetCategory: 'general',
    priority: 'normal',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const contactChannels = [
    {
      title: 'General Support & Student Helpdesk',
      email: 'jimibhai45@gmal.com',
      desc: 'Assistance with downloading notes, past paper files, syllabus pairing schemes, or general portal navigation.',
      badge: 'Student Helpdesk',
    },
    {
      title: 'Job Vacancies & Career Updates',
      email: 'jimibhai45@gmal.com',
      desc: 'Inquiries regarding advertised government jobs (FPSC, PPSC, SPSC, KPPSC, BPSC) or private recruitment notices.',
      badge: 'Career Desk',
    },
    {
      title: 'Notes, Past Papers & Errata Submissions',
      email: 'jimibhai45@gmal.com',
      desc: 'Submit syllabus notes, report textbook typos, suggest past paper additions, or notify of board corrigendums.',
      badge: 'Academic Team',
    },
  ];

  const socialLinks = [
    {
      platform: 'WhatsApp Channel',
      handle: 'PakStudyJobs Official',
      url: 'https://whatsapp.com',
      followers: 'Updated Regularly',
      description: 'Get instant morning alerts for fresh FPSC/PPSC gazettes and BISE date sheets.',
      icon: <MessageCircle className="w-5 h-5 text-emerald-500" />,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-300',
      btnText: 'Join WhatsApp Channel',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    },
    {
      platform: 'Facebook Community',
      handle: '@PakStudyJobsOfficial',
      url: 'https://facebook.com',
      followers: 'Verified Information',
      description: 'Engage with fellow matric, intermediate, and MDCAT students in our discussion group.',
      icon: <Facebook className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-300',
      btnText: 'Join Facebook Group',
      btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      platform: 'YouTube Lectures',
      handle: 'PakStudyJobs Academy',
      url: 'https://youtube.com',
      followers: 'Latest Resources',
      description: 'Video walkthroughs for board paper pairing schemes and MDCAT/ECAT solving techniques.',
      icon: <Youtube className="w-5 h-5 text-rose-600" />,
      color: 'bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-300',
      btnText: 'Subscribe on YouTube',
      btnColor: 'bg-rose-600 hover:bg-rose-700 text-white',
    },
    {
      platform: 'Telegram Channel',
      handle: 't.me/pakstudyjobs',
      url: 'https://telegram.org',
      followers: 'Student Resources',
      description: 'Fast cloud mirrors for heavy PDF study files, formula cheat-sheets, and past papers.',
      icon: <Send className="w-5 h-5 text-sky-500" />,
      color: 'bg-sky-50 text-sky-700 border-sky-200 hover:border-sky-300',
      btnText: 'Join Telegram',
      btnColor: 'bg-sky-600 hover:bg-sky-700 text-white',
    },
    {
      platform: 'LinkedIn Careers',
      handle: 'PakStudyJobs Network',
      url: 'https://linkedin.com',
      followers: 'Verified Information',
      description: 'Management trainee notices, banking officer openings, and graduate internship alerts.',
      icon: <Linkedin className="w-5 h-5 text-blue-700" />,
      color: 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300',
      btnText: 'Follow on LinkedIn',
      btnColor: 'bg-blue-700 hover:bg-blue-800 text-white',
    },
    {
      platform: 'X (Twitter)',
      handle: '@PakStudyJobs',
      url: 'https://twitter.com',
      followers: 'Updated Regularly',
      description: 'Breaking news on board results, public service commission test schedules, and announcements.',
      icon: <Twitter className="w-5 h-5 text-slate-800" />,
      color: 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300',
      btnText: 'Follow on X',
      btnColor: 'bg-slate-800 hover:bg-slate-900 text-white',
    },
    {
      platform: 'Instagram',
      handle: '@pakstudyjobs',
      url: 'https://instagram.com',
      followers: 'Student Resources',
      description: 'Daily visual study summaries, English vocabulary cards, and examination motivation.',
      icon: <Instagram className="w-5 h-5 text-pink-600" />,
      color: 'bg-pink-50 text-pink-700 border-pink-200 hover:border-pink-300',
      btnText: 'Follow on Instagram',
      btnColor: 'bg-pink-600 hover:bg-pink-700 text-white',
    },
  ];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    onShowToast(`Copied ${email} to clipboard!`);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onShowToast('Your message has been sent successfully! Our team will reply shortly.');
    }, 900);
  };

  return (
    <div id="contact-us-page" className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* Top Banner Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Contact Us & Student Support Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-3 leading-tight">
              We’re Here to Support Your Academic & Career Journey
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Have questions about an advertised government or private job, need help finding specific class notes or past papers, or want to contribute educational materials? Reach out to our dedicated team via email, contact form, or connect with our active social media student communities across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Response Time: Within 24 Business Hours</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free Student Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Platform Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10 relative z-20">
        <div className="bg-amber-50 border-2 border-amber-300/90 rounded-2xl p-4 sm:p-5 shadow-sm flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-0.5">
              Important Platform Notice
            </span>
            <p className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
              PakStudyJobs is an independent educational and jobs information platform. For official information, always visit the relevant board, university, testing service, or employer website.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Direct Email Contacts vs Interactive Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Email Contacts & Platform Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Contact Overview Card */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-2xl p-6 shadow-md space-y-4 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-300 border border-blue-400/30">
                  <Mail className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display">Official Contact Desk</h3>
                  <p className="text-xs text-blue-200">Online Support & Student Inquiries</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-3 text-xs sm:text-sm">
                {/* Official Email */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-blue-300 text-[11px] font-semibold uppercase tracking-wider block">
                      Primary Support Email
                    </span>
                    <button
                      id="copy-main-email-btn"
                      onClick={() => handleCopyEmail('jimibhai45@gmal.com')}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-blue-500/30 hover:bg-blue-500/50 text-blue-200 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copiedEmail === 'jimibhai45@gmal.com' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href="mailto:jimibhai45@gmal.com"
                    className="font-bold text-white font-mono text-sm sm:text-base hover:text-blue-300 transition-colors flex items-center gap-2"
                  >
                    <span>jimibhai45@gmal.com</span>
                  </a>
                </div>

                {/* Phone Notice */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                  <span className="text-amber-300 text-[11px] font-semibold uppercase tracking-wider block mb-1">
                    Phone & Helpline Policy
                  </span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-bold text-white text-xs sm:text-sm">Contact via email only</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
                    We operate as a digital educational portal and respond to all student and applicant requests through our central email desk.
                  </p>
                </div>
              </div>
            </div>

            {/* Department Routing Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  Inquiry Routing Channels
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Send your inquiries directly to our verified address for dedicated assistance:
                </p>
              </div>

              <div className="space-y-3">
                {contactChannels.map((dept, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between gap-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">{dept.title}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                            {dept.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{dept.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/60">
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-xs font-mono font-bold text-blue-700 hover:underline flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{dept.email}</span>
                      </a>
                      <button
                        id={`copy-email-btn-${idx}`}
                        onClick={() => handleCopyEmail(dept.email)}
                        className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                        title="Copy email address"
                        aria-label={`Copy ${dept.email}`}
                      >
                        {copiedEmail === dept.email ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Independent Platform Scope Card */}
            <div className="bg-slate-100/80 rounded-2xl p-5 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verification Guidelines</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                PakStudyJobs compiles curriculum notes, past papers, and public job gazettes to assist Pakistani learners. Always check original notifications on the official authority portal before submitting application fees or test registration forms.
              </p>
            </div>
          </div>

          {/* Right Column: Complete Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Send Us a Direct Message
                </h2>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Online Inquiry Desk
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in the form below with your academic or career inquiry. Our moderators will review and respond via email within 24 business hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-950 font-display">Inquiry Dispatched Successfully!</h3>
                    <p className="text-xs sm:text-sm text-emerald-800 mt-1 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to PakStudyJobs. Your reference tracking number is{' '}
                      <strong className="font-mono text-emerald-950 bg-emerald-200/70 px-2 py-0.5 rounded">
                        #PSJ-{Math.floor(100000 + Math.random() * 900000)}
                      </strong>
                      . A response will be delivered directly to your email address from <strong>jimibhai45@gmal.com</strong>.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      id="contact-send-another-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          inquiryType: 'job-query',
                          targetCategory: 'general',
                          priority: 'normal',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-form-name" className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Muhammad Ali Khan"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-form-email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. student@gmail.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Category & Target Class/Level */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-form-inquiry-type" className="block text-xs font-bold text-slate-700 mb-1">
                        Inquiry Category <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-form-inquiry-type"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
                      >
                        <option value="job-query">Government / Private Job Query</option>
                        <option value="notes-request">Request Class Study Notes (9th-12th)</option>
                        <option value="past-paper-request">Request Past Examination Paper</option>
                        <option value="entry-test">MDCAT / ECAT / Entry Test Query</option>
                        <option value="erratum">Report Syllabus Error, Typo or Corrigendum</option>
                        <option value="advertise">General Academic Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-form-target" className="block text-xs font-bold text-slate-700 mb-1">
                        Target Academic Level / Authority
                      </label>
                      <select
                        id="contact-form-target"
                        value={formData.targetCategory}
                        onChange={(e) => setFormData({ ...formData, targetCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
                      >
                        <option value="general">General / Unspecified</option>
                        <option value="matric">Matric (9th & 10th Class)</option>
                        <option value="inter">Intermediate (11th & 12th / FSc / ICS)</option>
                        <option value="entry-tests">National Entry Tests (MDCAT / ECAT / LAT)</option>
                        <option value="fpsc">Federal Public Service Commission (FPSC)</option>
                        <option value="ppsc">Punjab Public Service Commission (PPSC)</option>
                        <option value="other-provincial">Sindh / KPK / Balochistan PSC</option>
                        <option value="private-career">Private Corporate / Banking Careers</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Inquiry Urgency & Communication Note */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-form-priority" className="block text-xs font-bold text-slate-700 mb-1">
                        Inquiry Urgency
                      </label>
                      <select
                        id="contact-form-priority"
                        value={formData.priority}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none text-slate-700"
                      >
                        <option value="normal">Standard (Reply within 24h)</option>
                        <option value="urgent">Urgent (Exam Date or Job Deadline Approaching)</option>
                      </select>
                    </div>

                    <div className="flex flex-col justify-end">
                      <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Phone: Contact via email only</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label htmlFor="contact-form-message" className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message or Detailed Inquiry <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-form-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify the subject, chapter, board name, or advertised job title so we can assist you accurately via email..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="p-3 bg-blue-50/60 border border-blue-200/80 rounded-xl text-[11px] text-blue-800 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Assurance:</strong> We never share or sell your contact information. Inquiries are handled strictly via email from <strong>jimibhai45@gmal.com</strong>.
                    </span>
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Submitting Inquiry...' : 'Send Message to Support Desk'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Student Community Channels Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <Share2 className="w-3.5 h-3.5" />
            <span>Verified Student & Job Seeker Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
            Official Social Media & Community Channels
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Follow our verified social accounts to receive real-time updates for FPSC/PPSC job gazettes, BISE board date sheets, solved past papers, and video lectures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {socialLinks.map((social, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {social.followers}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-0.5">{social.platform}</h3>
                <p className="text-xs font-mono text-blue-600 mb-2">{social.handle}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{social.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${social.btnColor}`}
                >
                  <span>{social.btnText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Instant Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Find fast solutions to standard questions before submitting a support ticket.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div
                  key={index}
                  id={`faq-item-${index}`}
                  className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    id={`faq-toggle-btn-${index}`}
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-blue-700 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 leading-relaxed animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
