// 10-point grading scale
export function gradeInfo(marks) {
  const m = Number(marks);
  if (m >= 90) return { letter: "O", points: 10 };
  if (m >= 80) return { letter: "A+", points: 9 };
  if (m >= 70) return { letter: "A", points: 8 };
  if (m >= 60) return { letter: "B+", points: 7 };
  if (m >= 50) return { letter: "B", points: 6 };
  if (m >= 40) return { letter: "C", points: 5 };
  return { letter: "F", points: 0 };
}

// Average grade points of one semester's subjects.
export function computeSGPA(subjects) {
  if (!subjects || subjects.length === 0) return 0;
  const total = subjects.reduce((sum, [, marks]) => sum + gradeInfo(marks).points, 0);
  return total / subjects.length;
}

// Average grade points across every subject from semester 1 up to (and including)
// the given semester, using whichever semesters exist in the record.
export function computeCGPA(semesters, uptoSem) {
  const allSubjects = Object.keys(semesters)
    .map(Number)
    .filter((sem) => sem <= uptoSem)
    .flatMap((sem) => semesters[sem]);
  return computeSGPA(allSubjects);
}

export function loadStudents(seed, storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    // ignore corrupted storage, fall back to seed
  }
  return seed;
}

export function saveStudents(list, storageKey) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(list));
  } catch (e) {
    // storage unavailable — changes just won't persist across reloads
  }
}
