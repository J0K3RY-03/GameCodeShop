import { useState } from "react";
import axios from "axios";

export const ProfileEmail = () => {
  const [email, setEmail] = useState("");
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
        { email, password },
        { withCredentials: true }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="userEmail">
      <form className="loginAndRegister-form" onSubmit={onSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="New email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="text"
          id="email-confirmation"
          name="email-confirmation"
          placeholder="Confirm your new email"
        />

        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
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
