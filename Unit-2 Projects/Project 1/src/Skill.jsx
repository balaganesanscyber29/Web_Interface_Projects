function Skill(props) {
  return (
    <div className="card">
      <h2>Technical Skills</h2>

      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;