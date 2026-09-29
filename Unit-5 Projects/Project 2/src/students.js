// Subjects offered in each semester (kept generic across departments for this demo).
export const SEMESTER_SUBJECTS = {
  1: ["Mathematics I", "Physics", "Programming Basics", "English", "Engineering Drawing"],
  2: ["Mathematics II", "Data Structures", "Digital Logic", "Environmental Science", "Communication Skills"],
  3: ["Discrete Mathematics", "Database Systems", "Computer Networks", "Operating Systems", "Object Oriented Programming"],
  4: ["Software Engineering", "Design & Analysis of Algorithms", "Microprocessors", "Web Technologies", "Probability & Statistics"],
};

// Each student: { reg, name, dept, semesters: { "1": [[subject, marks], ...], "2": [...] } }
export const SEED_STUDENTS = [
  {
    reg: "REG001", name: "Arun Kumar", dept: "Computer Science",
    semesters: {
      1: [["Mathematics I", 91], ["Physics", 87], ["Programming Basics", 95], ["English", 82], ["Engineering Drawing", 88]],
      2: [["Mathematics II", 89], ["Data Structures", 96], ["Digital Logic", 90], ["Environmental Science", 85], ["Communication Skills", 84]],
      3: [["Discrete Mathematics", 88], ["Database Systems", 93], ["Computer Networks", 91], ["Operating Systems", 90], ["Object Oriented Programming", 94]],
      4: [["Software Engineering", 92], ["Design & Analysis of Algorithms", 89], ["Microprocessors", 86], ["Web Technologies", 95], ["Probability & Statistics", 90]],
    },
  },
  {
    reg: "REG002", name: "Divya Meenakshi", dept: "Electronics & Communication",
    semesters: {
      1: [["Mathematics I", 78], ["Physics", 81], ["Programming Basics", 75], ["English", 90], ["Engineering Drawing", 79]],
      2: [["Mathematics II", 76], ["Data Structures", 80], ["Digital Logic", 84], ["Environmental Science", 88], ["Communication Skills", 91]],
      3: [["Discrete Mathematics", 74], ["Database Systems", 79], ["Computer Networks", 82], ["Operating Systems", 77], ["Object Oriented Programming", 80]],
      4: [["Software Engineering", 83], ["Design & Analysis of Algorithms", 75], ["Microprocessors", 86], ["Web Technologies", 81], ["Probability & Statistics", 78]],
    },
  },
  {
    reg: "REG003", name: "Karthik Raja", dept: "Mechanical Engineering",
    semesters: {
      1: [["Mathematics I", 58], ["Physics", 61], ["Programming Basics", 55], ["English", 68], ["Engineering Drawing", 62]],
      2: [["Mathematics II", 54], ["Data Structures", 57], ["Digital Logic", 60], ["Environmental Science", 65], ["Communication Skills", 63]],
      3: [["Discrete Mathematics", 52], ["Database Systems", 59], ["Computer Networks", 56], ["Operating Systems", 60], ["Object Oriented Programming", 58]],
      4: [["Software Engineering", 61], ["Design & Analysis of Algorithms", 53], ["Microprocessors", 57], ["Web Technologies", 60], ["Probability & Statistics", 55]],
    },
  },
  {
    reg: "REG004", name: "Anitha Selvam", dept: "Computer Science",
    semesters: {
      1: [["Mathematics I", 96], ["Physics", 93], ["Programming Basics", 98], ["English", 90], ["Engineering Drawing", 92]],
      2: [["Mathematics II", 95], ["Data Structures", 99], ["Digital Logic", 94], ["Environmental Science", 91], ["Communication Skills", 93]],
      3: [["Discrete Mathematics", 97], ["Database Systems", 95], ["Computer Networks", 96], ["Operating Systems", 94], ["Object Oriented Programming", 98]],
      4: [["Software Engineering", 96], ["Design & Analysis of Algorithms", 97], ["Microprocessors", 92], ["Web Technologies", 99], ["Probability & Statistics", 95]],
    },
  },
  {
    reg: "REG005", name: "Vignesh Murugan", dept: "Civil Engineering",
    semesters: {
      1: [["Mathematics I", 67], ["Physics", 70], ["Programming Basics", 63], ["English", 74], ["Engineering Drawing", 71]],
      2: [["Mathematics II", 69], ["Data Structures", 65], ["Digital Logic", 68], ["Environmental Science", 76], ["Communication Skills", 72]],
      3: [["Discrete Mathematics", 64], ["Database Systems", 66], ["Computer Networks", 62], ["Operating Systems", 70], ["Object Oriented Programming", 65]],
      4: [["Software Engineering", 71], ["Design & Analysis of Algorithms", 63], ["Microprocessors", 67], ["Web Technologies", 69], ["Probability & Statistics", 66]],
    },
  },
  {
    reg: "REG006", name: "Iniya Krishnan", dept: "Information Technology",
    semesters: {
      1: [["Mathematics I", 83], ["Physics", 79], ["Programming Basics", 87], ["English", 85], ["Engineering Drawing", 80]],
      2: [["Mathematics II", 81], ["Data Structures", 88], ["Digital Logic", 84], ["Environmental Science", 82], ["Communication Skills", 86]],
      3: [["Discrete Mathematics", 79], ["Database Systems", 85], ["Computer Networks", 83], ["Operating Systems", 81], ["Object Oriented Programming", 84]],
      4: [["Software Engineering", 86], ["Design & Analysis of Algorithms", 80], ["Microprocessors", 78], ["Web Technologies", 88], ["Probability & Statistics", 82]],
    },
  },
  {
    reg: "REG007", name: "Arjun Pandian", dept: "Electrical Engineering",
    semesters: {
      1: [["Mathematics I", 44], ["Physics", 51], ["Programming Basics", 48], ["English", 58], ["Engineering Drawing", 50]],
      2: [["Mathematics II", 46], ["Data Structures", 49], ["Digital Logic", 53], ["Environmental Science", 60], ["Communication Skills", 55]],
      3: [["Discrete Mathematics", 42], ["Database Systems", 50], ["Computer Networks", 47], ["Operating Systems", 52], ["Object Oriented Programming", 45]],
      4: [["Software Engineering", 54], ["Design & Analysis of Algorithms", 43], ["Microprocessors", 49], ["Web Technologies", 56], ["Probability & Statistics", 48]],
    },
  },
  {
    reg: "REG008", name: "Meera Sundaram", dept: "Electronics & Communication",
    semesters: {
      1: [["Mathematics I", 89], ["Physics", 92], ["Programming Basics", 85], ["English", 88], ["Engineering Drawing", 90]],
      2: [["Mathematics II", 87], ["Data Structures", 90], ["Digital Logic", 93], ["Environmental Science", 86], ["Communication Skills", 91]],
      3: [["Discrete Mathematics", 85], ["Database Systems", 88], ["Computer Networks", 92], ["Operating Systems", 87], ["Object Oriented Programming", 89]],
      4: [["Software Engineering", 90], ["Design & Analysis of Algorithms", 86], ["Microprocessors", 93], ["Web Technologies", 91], ["Probability & Statistics", 88]],
    },
  },
  {
    reg: "REG009", name: "Rajesh Elango", dept: "Mechanical Engineering",
    semesters: {
      1: [["Mathematics I", 72], ["Physics", 69], ["Programming Basics", 74], ["English", 77], ["Engineering Drawing", 70]],
      2: [["Mathematics II", 70], ["Data Structures", 73], ["Digital Logic", 68], ["Environmental Science", 75], ["Communication Skills", 71]],
      3: [["Discrete Mathematics", 67], ["Database Systems", 72], ["Computer Networks", 69], ["Operating Systems", 74], ["Object Oriented Programming", 70]],
      4: [["Software Engineering", 75], ["Design & Analysis of Algorithms", 68], ["Microprocessors", 71], ["Web Technologies", 73], ["Probability & Statistics", 69]],
    },
  },
  {
    reg: "REG010", name: "Saranya Ravichandran", dept: "Computer Science",
    semesters: {
      1: [["Mathematics I", 80], ["Physics", 84], ["Programming Basics", 82], ["English", 79], ["Engineering Drawing", 81]],
      2: [["Mathematics II", 83], ["Data Structures", 85], ["Digital Logic", 78], ["Environmental Science", 82], ["Communication Skills", 86]],
      3: [["Discrete Mathematics", 81], ["Database Systems", 84], ["Computer Networks", 79], ["Operating Systems", 83], ["Object Oriented Programming", 85]],
      4: [["Software Engineering", 86], ["Design & Analysis of Algorithms", 80], ["Microprocessors", 82], ["Web Technologies", 84], ["Probability & Statistics", 81]],
    },
  },
];

export const ADMIN_PASSWORD = "admin123";
export const STORAGE_KEY = "college_students_v2";
