import { useState } from "react";
import axios from "axios";

export const ProfilePassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const onSubmit = async (event) => {
    event.preventDefault();

    //Reset error handlers states
    setErrorDisplay("none");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/users/profile/myprofile-email",
        { password },
        { withCredentials: true }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
