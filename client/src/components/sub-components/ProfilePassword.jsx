import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProfilePassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const onSubmit = (event) => {
    event.preventDefault();

    //Reset error handlers states
    setError("none");
    setError("");
  };
  return (
    <div className="userPassword">
      <form className="loginAndRegister-form" onSubmit={onSubmit}>
        <input
          type="password"
          id="password-old"
          name="password-old"
          placeholder="Current password"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="New password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          id="password-confirmation"
          name="password-confirmation"
          placeholder="Confirm your new password"
        />

        <div
          className="handle-email-register-error"
          style={{ display: errorDisplay }}
        >
          {error}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
