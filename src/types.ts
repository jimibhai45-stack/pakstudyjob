export type NavSection = 'home' | 'jobs' | 'notes' | 'past-papers' | 'about' | 'privacy-policy' | 'disclaimer' | 'contact' | 'sitemap';

export type JobCategory = 'government' | 'private' | 'internship';

export interface Job {
  id: string;
  title: string;
  organization: string;
  category: JobCategory;
  department: string;
  scale?: string; // e.g. BPS-17, BPS-16, Contract, Executive
  location: string;
  province: 'Federal' | 'Punjab' | 'Sindh' | 'KPK' | 'Balochistan' | 'Remote';
  education: string; // e.g. Matric, Intermediate, Bachelor, Master, MBBS / Engineering
  vacancies: number;
  lastDate: string; // YYYY-MM-DD
  postedDate: string;
  isUrgent?: boolean;
  isFeatured?: boolean;
  description: string;
  eligibility: {
    ageLimit: string;
    gender: string;
    experience: string;
    domicile: string;
  };
  keyResponsibilities: string[];
  howToApply: string[];
  officialLink: string;
  newspaper?: string; // e.g. Daily Jang, Dawn, The News, Express
}

export type ClassLevel = '9th' | '10th' | '11th' | '12th';

export type SubjectName =
  | 'Physics'
  | 'Chemistry'
  | 'Mathematics'
  | 'Biology'
  | 'Computer Science'
  | 'English'
  | 'Urdu'
  | 'Islamiat'
  | 'Pak Studies';

export interface StudyNote {
  id: string;
  title: string;
  classLevel: ClassLevel;
  subject: SubjectName;
  chapterNumber: number;
  chapterName: string;
  board: string;
  totalPages: number;
  fileSizeBytes: string;
  downloadCount: number;
  rating: number;
  description: string;
  topics: string[];
  keyFormulasOrPoints: string[];
  sampleQuestions: { question: string; answerSnippet: string }[];
}

export type PastPaperCategory = 'matric' | 'inter' | 'entry-test';

export interface PastPaper {
  id: string;
  title: string;
  category: PastPaperCategory;
  classOrProgram: '9th' | '10th' | '11th' | '12th' | 'MDCAT' | 'ECAT' | 'NUMS' | 'LAT' | 'NTS';
  subject: string;
  boardOrAuthority: string;
  year: number;
  session: string; // 'Annual', 'Supply', 'Morning', 'Evening'
  fileSizeBytes: string;
  downloadCount: number;
  hasSolvedSolutions: boolean;
  description: string;
  examOverview: {
    totalMarks: number;
    timeAllowed: string;
    sections: string[];
  };
  sampleQuestions: string[];
}

export interface BookmarkItem {
  id: string;
  type: 'job' | 'note' | 'paper';
  title: string;
  subtitle: string;
  category: string;
  savedAt: string;
}
