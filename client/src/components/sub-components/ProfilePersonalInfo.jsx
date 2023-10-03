import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProfilePersonalInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const onSubmit = (event) => {
    event.preventDefault();

    //Reset error handlers states
    setError("none");
    setError("");
  };
  return (
    <div className="userPersonalInformation">
      <form className="loginAndRegister-form" onSubmit={onSubmit}>
        <input
          type="string"
          id="firstName"
          name="firstName"
          value={firstName}
          placeholder="First name"
          onChange={(event) => setFirstName(event.target.value)}
        />

        <input
          type="string"
          id="lastName"
          name="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={(event) => setLastName(event.target.value)}
        />

        <input
          type="string"
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
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
