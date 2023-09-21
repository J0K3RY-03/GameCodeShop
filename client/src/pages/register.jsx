import { useState } from "react";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register-form">
      <form>
        <label htmlFor="firstName">First name:</label>
        <input
          type="string"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label htmlFor="lastName">Last name:</label>
        <input
          type="string"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />

        <label htmlFor="username">Username:</label>
        <input
          type="string"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="string"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
