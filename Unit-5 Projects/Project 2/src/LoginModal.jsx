import { useState } from "react";
import { ADMIN_PASSWORD } from "./students";

export default function LoginModal({ onClose, onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onSuccess();
    } else {
      setError("Incorrect password.");
    }
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Admin sign-in</h3>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>
          {error && <div className="err" style={{ marginBottom: 10 }}>{error}</div>}
          <div className="footer-actions">
            <button className="primary" type="submit">Sign in</button>
            <button className="ghost" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
