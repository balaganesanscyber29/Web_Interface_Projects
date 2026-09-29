import { useState } from "react";
import LookupPage from "./LookupPage";
import AdminPanel from "./AdminPanel";
import LoginModal from "./LoginModal";
import { SEED_STUDENTS, STORAGE_KEY } from "./students";
import { loadStudents } from "./grading";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState(() => loadStudents(SEED_STUDENTS, STORAGE_KEY));
  const [view, setView] = useState("lookup"); // "lookup" | "admin"
  const [authed, setAuthed] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  function handleAdminClick() {
    if (authed) setView("admin");
    else setShowLogin(true);
  }

  function handleLogout() {
    setAuthed(false);
    setView("lookup");
  }

  return (
    <>
      <div className="topbar">
        <div className="brand">
          Greenfield College of Engineering
          <small>SEMESTER REPORT CARD PORTAL</small>
        </div>
        {view === "lookup" ? (
          <button className="navbtn" onClick={handleAdminClick}>Admin</button>
        ) : (
          <button className="navbtn" onClick={() => setView("lookup")}>← Back to lookup</button>
        )}
      </div>

      {view === "lookup" && <LookupPage students={students} />}
      {view === "admin" && authed && (
        <AdminPanel students={students} setStudents={setStudents} onLogout={handleLogout} />
      )}

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSuccess={() => {
            setAuthed(true);
            setShowLogin(false);
            setView("admin");
          }}
        />
      )}
    </>
  );
}
