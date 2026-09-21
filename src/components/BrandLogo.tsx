import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
  showSubtitle = true,
}) => {
  const iconSizeClass = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSizeClass = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const isDarkBg = variant === 'light';

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none">
      {/* Visual Emblem Badge */}
      <div
        className={`relative flex items-center justify-center ${iconSizeClass} rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white shadow-md shadow-blue-900/20 border border-blue-500/30 shrink-0 transition-transform duration-200 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-6 h-6 sm:w-7 sm:h-7 text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mortarboard / Academic Cap */}
          <polygon points="20,8 33,14 20,20 7,14" fill="#ffffff" />
          <path
            d="M13,17 v6 c0,3.5 3.1,6 7,6 s7,-2.5 7,-6 v-6"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Gold Tassel */}
          <path d="M30,15 v7" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="30" cy="23" r="1.5" fill="#fbbf24" />
          {/* Open Book */}
          <path
            d="M10,32 C14,30 18,30 20,31 C22,30 26,30 30,32 V35 C26,33 22,33 20,34 C18,33 14,33 10,35 Z"
            fill="#93c5fd"
          />
        </svg>
        {/* Verification Dot */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-xs" />
      </div>

      {/* Typography */}
      <div>
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight font-display ${titleSizeClass} ${
              isDarkBg ? 'text-white' : 'text-slate-950'
            }`}
          >
            PakStudy<span className="text-blue-700">Jobs</span>
          </span>
          <span
            className={`text-[9px] uppercase font-black tracking-wider px-1.5 py-0.2 rounded border ${
              isDarkBg
                ? 'bg-blue-900/80 text-blue-300 border-blue-700'
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}
          >
            .PK
          </span>
        </div>
        {showSubtitle && (
          <p
            className={`text-[10px] sm:text-[11px] font-medium tracking-tight -mt-0.5 truncate ${
              isDarkBg ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Pakistan’s Trusted Educational & Career Hub
          </p>
        )}
      </div>
    </div>
  );
};
