function Header(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
}

export default Header;