import { useState } from "react";

function Project2() {
  const [students, setStudents] = useState([
    { id: 1, name: "Anu", status: "Absent" },
    { id: 2, name: "Bala", status: "Absent" },
    { id: 3, name: "Chandra", status: "Absent" },
    { id: 4, name: "Karthik", status: "Absent" },
    { id: 5, name: "Radha", status: "Absent" },
    { id: 6, name: "Vijay", status: "Absent" },
    { id: 7, name: "Jennie", status: "Absent" },
    { id: 8, name: "Sanjay", status: "Absent" },
    { id: 9, name: "Priya", status: "Absent" },
    { id: 10, name: "Meera", status: "Absent" },
    { id: 11, name: "Surya", status: "Absent" },
    { id: 12, name: "Praveen", status: "Absent" },
    { id: 13, name: "Suresh", status: "Absent" },
    { id: 14, name: "Monika", status: "Absent" },
    { id: 15, name: "Kumar", status: "Absent" }
  ]);

  function markAttendance(id, status) {
    setStudents(
      students.map(student =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  }

  const present = students.filter(
    student => student.status === "Present"
  ).length;

  const absent = students.filter(
    student => student.status === "Absent"
  ).length;

  return (
    <div className="container">
      <h1>Student Attendance Tracker</h1>

      {students.map(student => (
        <div className="student" key={student.id}>
          <span>
            {student.id}. {student.name}
          </span>

          <label>
            <input
              type="radio"
              name={`student-${student.id}`}
              checked={student.status === "Present"}
              onChange={() =>
                markAttendance(student.id, "Present")
              }
            />
            Present
          </label>

          <label>
            <input
              type="radio"
              name={`student-${student.id}`}
              checked={student.status === "Absent"}
              onChange={() =>
                markAttendance(student.id, "Absent")
              }
            />
            Absent
          </label>
        </div>
      ))}

      <div className="summary">
        <h2>Attendance Summary</h2>
        <p>Total Present: {present}</p>
        <p>Total Absent: {absent}</p>
      </div>
    </div>
  );
}

export default Project2;