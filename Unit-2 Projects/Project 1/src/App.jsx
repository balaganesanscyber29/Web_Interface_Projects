import Header from "./Header";
import Profile from "./Profile";
import About from "./About";
import Skill from "./Skill";
import Goal from "./Goal";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  const profile = {
    name: "Balaganesan",
    age: 19,
    department: "B.E CSE (Cyber Security)"
  };

  const about =
    "I am a passionate student who enjoys learning web development and programming. I love building creative projects using React.";

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java"
  ];

  const goal =
    "To become a skilled Full Stack Developer and Cyber Security Professional.";

  const contact = {
    email: "s.bala12a@gmail.com",
    phone: "9876543210",
    github: "https://github.com/balaganesanscyber29"
  };

  return (
    <div className="container">
      <Header
        title="Personal Introduction"
        subtitle="Welcome to My Portfolio"
      />

      <Profile
        name={profile.name}
        age={profile.age}
        department={profile.department}
      />

      <About intro={about} />

      <Skill skills={skills} />

      <Goal goal={goal} />

      <Contact
      email={contact.email}
      phone={contact.phone}
      github={contact.github}
      />

    <Footer />
    </div>
  );
}

export default App;