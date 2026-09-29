import { gradeInfo, computeSGPA, computeCGPA } from "./grading";

export default function ReportCard({ student, semester }) {
  const subjects = student.semesters[semester] || [];
  const sgpa = computeSGPA(subjects);
  const cgpa = computeCGPA(student.semesters, semester);

  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h2>{student.name}</h2>
          <div className="subtext">{student.dept} · Semester {semester}</div>
        </div>
        <div className="meta">
          Reg No: {student.reg}
          <br />
          Greenfield College of Engineering
          <br />
          Semester Report
        </div>
      </div>

      <div className="overflow-x">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th className="right">Marks</th>
              <th className="right">Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map(([subject, marks]) => (
              <tr key={subject}>
                <td>{subject}</td>
                <td className="num">{marks}/100</td>
                <td className="num grade">{gradeInfo(marks).letter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="summary">
        <span>Subjects: <b>{subjects.length}</b></span>
        <span>SGPA (Sem {semester}): <b>{sgpa.toFixed(2)}</b></span>
        <span>CGPA (up to Sem {semester}): <b className="grade">{cgpa.toFixed(2)}</b></span>
      </div>
    </div>
  );
}
