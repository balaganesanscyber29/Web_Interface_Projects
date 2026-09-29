# Greenfield College — Semester Report Card Portal

A small React (Vite) app. A student enters their registration number, picks
a semester, and sees that semester's subject grades, SGPA, and their CGPA
up to that semester. An admin (password `admin123`) can add, edit, and
remove students, and manage each student's per-semester subjects and marks.
Data is kept in the browser's local storage.

Grading uses a 10-point scale (O=10, A+=9, A=8, B+=7, B=6, C=5, F=0). SGPA is
the average grade points for one semester; CGPA is the average grade points
across all recorded semesters up to the one selected.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Structure

Everything lives flat in `src/`:

```
src/
  App.jsx          — top-level view switching (lookup / admin) + login modal
  App.css          — all styling
  main.jsx         — React entry point
  students.js      — seed student data (per-semester subjects), admin password, storage key
  grading.js       — grade points, SGPA/CGPA calculation, local storage helpers
  LookupPage.jsx    — reg no entry → semester picker → result screen
  ReportCard.jsx     — one semester's subject grades + SGPA + CGPA
  AdminPanel.jsx       — student table + per-semester subject/marks editor
  LoginModal.jsx         — admin password prompt
```

To change the admin password, seed students, or default semester subjects,
edit `src/students.js`.
