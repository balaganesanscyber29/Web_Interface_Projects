function Profile(props) {
  return (
    <div className="card">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Department:</strong> {props.department}</p>
    </div>
  );
}

export default Profile;