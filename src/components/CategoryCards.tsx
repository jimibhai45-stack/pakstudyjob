import React from 'react';
import {
  Building2,
  Briefcase,
  GraduationCap,
  BookOpen,
  FileCheck2,
  Award,
  ArrowRight,
} from 'lucide-react';
import { NavSection, JobCategory, ClassLevel, PastPaperCategory } from '../types';

interface CategoryCardsProps {
  onSelectCategory: (
    section: NavSection,
    filter?: {
      jobCategory?: JobCategory;
      classLevel?: ClassLevel;
      paperCategory?: PastPaperCategory;
    }
  ) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'cat-govt-jobs',
      title: 'Government Jobs',
      badge: 'BPS 05 - 19',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      iconBg: 'bg-emerald-50',
      description: 'FPSC, PPSC, PAEC, NADRA, Armed Forces Civilians & Provincial Depts.',
      actionLabel: 'Browse Govt Jobs',
      stats: 'Updated Regularly',
      onClick: () => onSelectCategory('jobs', { jobCategory: 'government' }),
    },
    {
      id: 'cat-private-jobs',
      title: 'Private Sector Jobs',
      badge: 'Corporate & IT',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      iconBg: 'bg-blue-50',
      description: 'Software Engineers, Banking Officers, Doctors, Engineers & Marketing roles.',
      actionLabel: 'View Private Jobs',
      stats: 'Verified Information',
      onClick: () => onSelectCategory('jobs', { jobCategory: 'private' }),
    },
    {
      id: 'cat-internships',
      title: 'Internships & Trainees',
      badge: 'Paid Stipend',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: <Award className="w-6 h-6 text-amber-600" />,
      iconBg: 'bg-amber-50',
      description: "Prime Minister Youth Program, Engro, Fatima Group & Bank trainee programs.",
      actionLabel: 'Find Internships',
      stats: 'Student Resources',
      onClick: () => onSelectCategory('jobs', { jobCategory: 'internship' }),
    },
    {
      id: 'cat-matric-notes',
      title: 'Matric Notes (9th & 10th)',
      badge: 'SLO Based',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      iconBg: 'bg-indigo-50',
      description: 'Chapter-wise Physics, Chemistry, Math, Biology, English & Urdu PDF notes.',
      actionLabel: 'Download Matric Notes',
      stats: 'Latest Resources',
      onClick: () => onSelectCategory('notes', { classLevel: '9th' }),
    },
    {
      id: 'cat-inter-notes',
      title: 'Intermediate (11th & 12th)',
      badge: 'FSc & ICS',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      iconBg: 'bg-purple-50',
      description: '1st & 2nd year comprehensive solved derivations, numerics, and short questions.',
      actionLabel: 'Download Inter Notes',
      stats: 'Verified Information',
      onClick: () => onSelectCategory('notes', { classLevel: '11th' }),
    },
    {
      id: 'cat-past-papers',
      title: 'Board & Entry Test Papers',
      badge: 'Solved Papers',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      icon: <FileCheck2 className="w-6 h-6 text-rose-600" />,
      iconBg: 'bg-rose-50',
      description: 'BISE Lahore, FBISE, Karachi Boards plus MDCAT, ECAT & LAT papers.',
      actionLabel: 'Explore Past Papers',
      stats: 'Latest Resources',
      onClick: () => onSelectCategory('past-papers', { paperCategory: 'matric' }),
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Featured Academic & Career Hubs
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Explore by Category
          </h2>
          <p className="text-sm text-slate-500 mt-1 max-w-xl">
            Quickly navigate to verified job vacancies, syllabus-aligned class notes, or authentic past papers.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            id={cat.id}
            onClick={cat.onClick}
            className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.iconBg} group-hover:scale-105 transition-transform`}
                >
                  {cat.icon}
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full border ${cat.badgeColor}`}
                >
                  {cat.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display mb-2">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {cat.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="text-slate-700 font-bold">{cat.stats}</span>
              <span className="flex items-center gap-1 text-blue-700 group-hover:translate-x-1 transition-transform">
                {cat.actionLabel}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
