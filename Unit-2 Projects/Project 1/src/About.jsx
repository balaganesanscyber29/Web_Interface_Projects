function About(props) {
  return (
    <div className="card">
      <h2>About Me</h2>
      <p>{props.intro}</p>
    </div>
  );
}

export default About;