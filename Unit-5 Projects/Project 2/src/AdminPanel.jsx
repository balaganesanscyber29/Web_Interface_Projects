import { useState } from "react";
import { saveStudents, computeSGPA } from "./grading";
import { STORAGE_KEY, SEMESTER_SUBJECTS } from "./students";

function emptyStudentForm() {
  return { reg: "", name: "", dept: "" };
}

function defaultSubjectsFor(sem) {
  const names = SEMESTER_SUBJECTS[sem] || ["Subject 1", "Subject 2", "Subject 3"];
  return names.map((n) => [n, ""]);
}

export default function AdminPanel({ students, setStudents, onLogout }) {
  const [editingReg, setEditingReg] = useState(null); // null | "new" | reg string
  const [form, setForm] = useState(emptyStudentForm());
  const [activeSem, setActiveSem] = useState(null);
  const [subjectRows, setSubjectRows] = useState([]);
  const [error, setError] = useState("");

  function persist(next) {
    setStudents(next);
    saveStudents(next, STORAGE_KEY);
  }

  function startNew() {
    setForm(emptyStudentForm());
    setEditingReg("new");
    setActiveSem(null);
    setSubjectRows([]);
    setError("");
  }

  function startEdit(student) {
    setForm({ reg: student.reg, name: student.name, dept: student.dept });
    setEditingReg(student.reg);
    const sems = Object.keys(student.semesters).map(Number).sort((a, b) => a - b);
    const firstSem = sems[0] || null;
    setActiveSem(firstSem);
    setSubjectRows(firstSem ? student.semesters[firstSem].map(([n, m]) => [n, String(m)]) : []);
    setError("");
  }

  function removeStudent(reg) {
    if (!window.confirm("Remove this student's record?")) return;
    persist(students.filter((s) => s.reg !== reg));
  }

  function currentRecord() {
    return editingReg === "new" ? null : students.find((s) => s.reg === editingReg);
  }

  function switchSemester(sem) {
    const record = currentRecord();
    setActiveSem(sem);
    const existing = record && record.semesters[sem];
    setSubjectRows(existing ? existing.map(([n, m]) => [n, String(m)]) : defaultSubjectsFor(sem));
  }

  function addSemester() {
    const record = currentRecord();
    const existingSems = record ? Object.keys(record.semesters).map(Number) : [];
    const next = (existingSems.length ? Math.max(...existingSems) : 0) + 1;
    switchSemester(next);
  }

  function removeSemester(sem) {
    const record = currentRecord();
    if (!record) return;
    if (!window.confirm(`Remove semester ${sem} for ${record.name}?`)) return;
    const { [sem]: removed, ...rest } = record.semesters;
    const updated = { ...record, semesters: rest };
    persist(students.map((s) => (s.reg === record.reg ? updated : s)));
    const remaining = Object.keys(rest).map(Number).sort((a, b) => a - b);
    switchSemester(remaining[0] || null);
    if (remaining.length === 0) setSubjectRows([]);
  }

  function updateSubjectField(index, field, value) {
    const rows = subjectRows.map((r) => r.slice());
    rows[index][field === "name" ? 0 : 1] = value;
    setSubjectRows(rows);
  }

  function addSubjectRow() {
    setSubjectRows([...subjectRows, ["", ""]]);
  }

  function removeSubjectRow(index) {
    setSubjectRows(subjectRows.filter((_, i) => i !== index));
  }

  function saveSemester() {
    if (!activeSem) {
      setError("Add or choose a semester first.");
      return;
    }
    const cleaned = subjectRows
      .filter(([name]) => name.trim() !== "")
      .map(([name, marks]) => [name.trim(), Number(marks) || 0]);
    if (cleaned.length === 0) {
      setError("Add at least one subject for this semester.");
      return;
    }
    const record = currentRecord();
    const updatedSemesters = { ...(record ? record.semesters : {}), [activeSem]: cleaned };
    const updated = { ...record, semesters: updatedSemesters };
    persist(students.map((s) => (s.reg === record.reg ? updated : s)));
    setError("");
  }

  function submitBasicInfo(e) {
    e.preventDefault();
    if (!form.reg.trim() || !form.name.trim() || !form.dept.trim()) {
      setError("Registration number, name and department are all required.");
      return;
    }
    const isDuplicate = students.some(
      (s) => s.reg.toLowerCase() === form.reg.trim().toLowerCase() && s.reg !== editingReg
    );
    if (isDuplicate) {
      setError("A student with this registration number already exists.");
      return;
    }

    if (editingReg === "new") {
      const record = { reg: form.reg.trim(), name: form.name.trim(), dept: form.dept.trim(), semesters: {} };
      persist([...students, record]);
      setEditingReg(record.reg);
    } else {
      const record = currentRecord();
      const updated = { ...record, reg: form.reg.trim(), name: form.name.trim(), dept: form.dept.trim() };
      persist(students.map((s) => (s.reg === editingReg ? updated : s)));
      setEditingReg(updated.reg);
    }
    setError("");
  }

  const record = currentRecord();
  const semNumbers = record ? Object.keys(record.semesters).map(Number).sort((a, b) => a - b) : [];

  return (
    <div className="wrap admin-wrap">
      <div className="admin-toolbar">
        <h2 style={{ margin: 0 }}>Admin — manage students</h2>
        <div className="row">
          <button className="primary" onClick={startNew}>+ Add student</button>
          <button className="ghost" onClick={onLogout}>Log out</button>
        </div>
      </div>

      <div className="overflow-x">
        <table className="stable">
          <thead>
            <tr>
              <th>Reg No</th><th>Name</th><th>Department</th><th>Semesters</th><th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.reg}>
                <td>{s.reg}</td>
                <td>{s.name}</td>
                <td>{s.dept}</td>
                <td>{Object.keys(s.semesters).length}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <button className="ghost" style={{ marginRight: 6 }} onClick={() => startEdit(s)}>Edit</button>
                  <button className="danger" onClick={() => removeStudent(s.reg)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingReg && (
        <div className="editbox">
          <h3>{editingReg === "new" ? "Add student" : "Edit student"}</h3>
          <form onSubmit={submitBasicInfo}>
            <div className="row">
              <div className="field" style={{ flex: 1 }}>
                <label>Registration number</label>
                <input value={form.reg} onChange={(e) => setForm({ ...form, reg: e.target.value })} disabled={editingReg !== "new" && !!record} />
              </div>
              <div className="field" style={{ flex: 1 }}>
                <label>Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="field" style={{ flex: 1 }}>
                <label>Department</label>
                <input value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })} />
              </div>
            </div>
            <button className="primary" type="submit">Save details</button>
          </form>
          {error && !record && <div className="err">{error}</div>}

          {record && (
            <>
              <label className="small-label" style={{ display: "block", marginTop: 20 }}>Semesters</label>
              <div className="row" style={{ margin: "8px 0 14px" }}>
                {semNumbers.map((sem) => (
                  <button
                    key={sem}
                    className="ghost"
                    style={activeSem === sem ? { borderColor: "var(--gold)", color: "var(--gold)" } : {}}
                    onClick={() => switchSemester(sem)}
                  >
                    Sem {sem}
                  </button>
                ))}
                <button className="ghost" onClick={addSemester}>+ Add semester</button>
              </div>

              {activeSem && (
                <>
                  {subjectRows.map((row, i) => (
                    <div className="subjrow" key={i}>
                      <input placeholder="Subject" value={row[0]} onChange={(e) => updateSubjectField(i, "name", e.target.value)} />
                      <input placeholder="Marks" type="number" min="0" max="100" value={row[1]} onChange={(e) => updateSubjectField(i, "marks", e.target.value)} />
                      <button type="button" className="danger" onClick={() => removeSubjectRow(i)}>✕</button>
                    </div>
                  ))}
                  <button type="button" className="ghost" onClick={addSubjectRow} style={{ marginTop: 4 }}>+ Add subject</button>

                  <div className="footer-actions">
                    <button className="primary" onClick={saveSemester}>Save semester {activeSem}</button>
                    <button className="danger" onClick={() => removeSemester(activeSem)}>Remove semester {activeSem}</button>
                  </div>
                  {subjectRows.some(([n]) => n.trim() !== "") && (
                    <div style={{ fontFamily: "Arial,sans-serif", fontSize: ".82rem", color: "var(--muted)", marginTop: 8 }}>
                      SGPA preview: {computeSGPA(subjectRows.filter(([n]) => n.trim() !== "").map(([n, m]) => [n, Number(m) || 0])).toFixed(2)}
                    </div>
                  )}
                </>
              )}

              {error && <div className="err">{error}</div>}
              <div className="footer-actions">
                <button className="ghost" type="button" onClick={() => setEditingReg(null)}>Close</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
