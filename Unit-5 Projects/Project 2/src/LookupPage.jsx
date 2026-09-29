import { useState } from "react";
import ReportCard from "./ReportCard";

export default function LookupPage({ students }) {
  const [step, setStep] = useState("reg"); // "reg" | "semester" | "result"
  const [reg, setReg] = useState("");
  const [student, setStudent] = useState(null);
  const [semester, setSemester] = useState(null);
  const [error, setError] = useState("");

  function handleRegSubmit(e) {
    e.preventDefault();
    const match = students.find(
      (s) => s.reg.toLowerCase() === reg.trim().toLowerCase()
    );
    if (match) {
      setStudent(match);
      setError("");
      setStep("semester");
    } else {
      setStudent(null);
      setError("No student found with that registration number.");
    }
  }

  function chooseSemester(sem) {
    setSemester(sem);
    setStep("result");
  }

  function startOver() {
    setStep("reg");
    setReg("");
    setStudent(null);
    setSemester(null);
    setError("");
  }

  const semesterNumbers = student
    ? Object.keys(student.semesters).map(Number).sort((a, b) => a - b)
    : [];

  return (
    <div className="wrap">
      {step === "reg" && (
        <div className="lookup">
          <h2>Find your report card</h2>
          <p>Enter your registration number to begin.</p>
          <form className="row" onSubmit={handleRegSubmit}>
            <input
              type="text"
              placeholder="e.g. REG001"
              value={reg}
              onChange={(e) => setReg(e.target.value)}
            />
            <button className="primary" type="submit">Continue</button>
          </form>
          {error && <div className="err">{error}</div>}
        </div>
      )}

      {step === "semester" && student && (
        <div className="lookup">
          <h2>{student.name}</h2>
          <p>{student.dept} · Reg No {student.reg} — choose a semester to view.</p>
          {semesterNumbers.length === 0 ? (
            <div className="err">No semester records available yet.</div>
          ) : (
            <div className="row">
              {semesterNumbers.map((sem) => (
                <button key={sem} className="ghost" onClick={() => chooseSemester(sem)}>
                  Semester {sem}
                </button>
              ))}
            </div>
          )}
          <div style={{ marginTop: 18 }}>
            <button className="ghost" onClick={startOver}>← Search another reg no</button>
          </div>
        </div>
      )}

      {step === "result" && student && semester && (
        <>
          <div className="row" style={{ marginBottom: 14 }}>
            <button className="ghost" onClick={() => setStep("semester")}>← Choose a different semester</button>
            <button className="ghost" onClick={startOver}>Search another reg no</button>
          </div>
          <ReportCard student={student} semester={semester} />
        </>
      )}
    </div>
  );
}
