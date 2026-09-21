import { StudyNote, PastPaper } from '../types';

export function triggerDownload(title: string, content: string, filename: string) {
  // Generate downloadable Blob file
  const element = document.createElement('a');
  const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  URL.revokeObjectURL(element.href);
}

export function generateNoteDoc(note: StudyNote): string {
  return `===============================================================
PAKSTUDYJOBS - FREE EDUCATIONAL NOTES & PREPARATION PORTAL
Website: https://pakstudyjobs.pk | Contact: jimibhai45@gmal.com
Phone: Contact via email only
NOTICE: PakStudyJobs is an independent educational and jobs information platform.
For official information, always visit the relevant board, university, testing service, or employer website.
===============================================================

TITLE: ${note.title}
CLASS: ${note.classLevel} Class
SUBJECT: ${note.subject}
CHAPTER: Chapter ${note.chapterNumber} - ${note.chapterName}
BOARD: ${note.board}
TOTAL PAGES: ${note.totalPages} Pages
STATUS: Verified Information - Updated Regularly

---------------------------------------------------------------
1. CHAPTER OVERVIEW & SYLLABUS BREAKDOWN
---------------------------------------------------------------
${note.description}

TOPICS COVERED:
${note.topics.map((t, i) => `  ${i + 1}. ${t}`).join('\n')}

---------------------------------------------------------------
2. KEY FORMULAS, LAWS & HIGH-YIELD POINTS
---------------------------------------------------------------
${note.keyFormulasOrPoints.map((f, i) => `  • ${f}`).join('\n')}

---------------------------------------------------------------
3. IMPORTANT BOARD EXAM QUESTIONS & SAMPLE ANSWERS
---------------------------------------------------------------
${note.sampleQuestions
  .map(
    (sq, i) => `[Q${i + 1}] ${sq.question}
Answer Summary:
${sq.answerSnippet}
`
  )
  .join('\n')}

===============================================================
PakStudyJobs.pk - Serving Students Across Pakistan (Punjab, Sindh, KPK, Balochistan, Federal)
Download complete past papers, solved notes, and check verified government jobs daily!
===============================================================`;
}

export function generatePastPaperDoc(paper: PastPaper): string {
  return `===============================================================
PAKSTUDYJOBS - OFFICIAL BOARD & ENTRY TEST PAST PAPER ARCHIVE
Website: https://pakstudyjobs.pk | Contact: jimibhai45@gmal.com
Phone: Contact via email only
NOTICE: PakStudyJobs is an independent educational and jobs information platform.
For official information, always visit the relevant board, university, testing service, or employer website.
===============================================================

EXAMINATION: ${paper.title}
CATEGORY: ${paper.category.toUpperCase()}
CLASS / TEST: ${paper.classOrProgram}
SUBJECT: ${paper.subject}
BOARD / CONDUCTING AUTHORITY: ${paper.boardOrAuthority}
YEAR: ${paper.year} (${paper.session})
SOLUTIONS INCLUDED: ${paper.hasSolvedSolutions ? 'YES (Fully Solved with Explanations)' : 'Unsolved Authentic Question Paper'}

---------------------------------------------------------------
1. PAPER PATTERN & MARKS DISTRIBUTION
---------------------------------------------------------------
Total Marks: ${paper.examOverview.totalMarks} Marks
Time Allowed: ${paper.examOverview.timeAllowed}
Sections:
${paper.examOverview.sections.map((s, i) => `  • ${s}`).join('\n')}

---------------------------------------------------------------
2. SELECTED BOARD / ENTRY TEST QUESTIONS
---------------------------------------------------------------
${paper.sampleQuestions.map((q, i) => `[Question ${i + 1}] ${q}`).join('\n\n')}

---------------------------------------------------------------
PakStudyJobs Exam Tips:
• Read the entire question paper carefully during the first 10 minutes.
• Allocate time proportionally: 1 mark ≈ 1.5 minutes.
• Draw neat diagrams with a pencil for science subjects (Physics, Chemistry, Biology).
• Always mention relevant formulas before starting numerical solutions.

===============================================================
PakStudyJobs.pk - Official Educational Portal for Pakistan Students
===============================================================`;
}
