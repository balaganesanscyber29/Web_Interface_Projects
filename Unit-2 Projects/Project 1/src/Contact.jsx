function Contact(props) {
  return (
    <div className="card">
      <h2>Contact</h2>

      <p><strong>Email:</strong> {props.email}</p>

      <p><strong>Phone:</strong> {props.phone}</p>

      <p>
        <strong>GitHub:</strong>{" "}
        <a href={props.github} target="_blank" rel="noreferrer">
          {props.github}
        </a>
      </p>
    </div>
  );
}

export default Contact;