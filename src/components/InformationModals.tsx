import React from 'react';
import { X, ShieldCheck, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

export type InfoModalType = 'about' | 'privacy' | 'disclaimer' | null;

interface InformationModalsProps {
  modalType: InfoModalType;
  onClose: () => void;
}

export const InformationModals: React.FC<InformationModalsProps> = ({ modalType, onClose }) => {
  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            {modalType === 'about' && <Info className="w-5 h-5 text-blue-400" />}
            {modalType === 'privacy' && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
            {modalType === 'disclaimer' && <AlertTriangle className="w-5 h-5 text-amber-400" />}
            <h3 className="text-lg font-bold font-display">
              {modalType === 'about' && 'About PakStudyJobs'}
              {modalType === 'privacy' && 'Privacy Policy'}
              {modalType === 'disclaimer' && 'Official Disclaimer'}
            </h3>
          </div>

          <button
            id="close-info-modal-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {modalType === 'about' && (
            <>
              <p className="font-medium text-slate-800">
                <strong>PakStudyJobs</strong> is Pakistan's premier open educational and career portal, founded with the mission to democratize quality academic resources and employment notices for every aspiring student and graduate across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Islamabad, Azad Jammu & Kashmir, and Gilgit-Baltistan.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">What We Provide:</h4>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Daily verified Federal and Provincial Government Job advertisements (FPSC, PPSC, SPSC, KPPSC, BPSC, NTS).</li>
                <li>Private sector openings from leading technology firms, commercial banks, and engineering groups.</li>
                <li>Standardized, curriculum-aligned study notes for 9th, 10th, 11th, and 12th classes in PDF format.</li>
                <li>Authentic past examination papers with verified solutions for Matric, Intermediate, and National Entry Tests (MDCAT, ECAT, LAT).</li>
              </ul>
              <div className="p-3 bg-blue-50 text-blue-800 rounded-xl border border-blue-200 text-xs">
                All study material provided on PakStudyJobs is 100% free and intended strictly for educational and self-study purposes.
              </div>
            </>
          )}

          {modalType === 'privacy' && (
            <>
              <div className="p-3 bg-amber-50 text-amber-900 rounded-xl border border-amber-200 text-xs">
                PakStudyJobs is an independent educational and jobs information platform. For official information, always visit the relevant board, university, testing service, or employer website.
              </div>
              <p>
                At <strong>PakStudyJobs.pk</strong>, accessible at https://pakstudyjobs.pk, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information collected and recorded.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">Data Collection & Local Storage:</h4>
              <p>
                PakStudyJobs does not require user registration or credit card details to view jobs or download notes. Saved bookmarks and downloaded items are stored solely on your local web browser via HTML5 localStorage.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">Contact & Inquiries:</h4>
              <p>
                If you contact us directly via our support email (<strong>jimibhai45@gmal.com</strong>), we use your details solely to answer your inquiry. Phone support is handled via email only. We never sell, rent, or trade student contact information.
              </p>
            </>
          )}

          {modalType === 'disclaimer' && (
            <>
              <div className="p-3.5 bg-amber-50 text-amber-900 rounded-xl border border-amber-200 text-xs font-medium space-y-2">
                <p className="font-bold">
                  Notice:
                </p>
                <p>
                  PakStudyJobs is an independent educational and jobs information platform. For official information, always visit the relevant board, university, testing service, or employer website.
                </p>
              </div>
              <h4 className="font-bold text-slate-900 pt-2">Information Accuracy:</h4>
              <p>
                All job vacancies published on this website are aggregated from authentic national newspapers (Daily Jang, Dawn, Express, The News) and official departmental gazettes. Candidates are strongly advised to refer to the official departmental website before submitting bank challans or applications.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">Copyright & Educational Fair Use:</h4>
              <p>
                All study notes and past paper patterns are provided under educational fair use guidelines to assist students in preparing for academic examinations. For any errata, reach out to <strong>jimibhai45@gmal.com</strong> (Phone: Contact via email only).
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="info-modal-ok-btn"
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
