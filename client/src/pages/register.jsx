import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailErrorDisplay, setEmailErrorDisplay] = useState("none");
  const [usernameErrorDisplay, setUsernameErrorDisplay] = useState("none");

  const onSubmit = async (event) => {
    event.preventDefault();

    //Reset error handlers states
    setEmailErrorDisplay("none");
    setUsernameErrorDisplay("none");
    setEmailError("");
    setUsernameError("");

    try {
      const result = await axios.post("http://localhost:3000/users/register", {
        firstName,
        lastName,
        username,
        email,
        password,
      });
      if (
        result.data.message ===
        "The introduced Username already belongs to an account."
      ) {
        setUsernameErrorDisplay("block");
        setUsernameError(result.data.message);
      } else if (
        result.data.message ===
        "The introduced Email already belongs to an account."
      ) {
        setEmailErrorDisplay("block");
        setEmailError(result.data.message);
      }
      console.log(result.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginAndRegister-container">
      <div className="loginAndRegister-container-left">
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
            className="handle-username-register-error"
            style={{ display: usernameErrorDisplay }}
          >
            {usernameError}
          </div>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <div
            className="handle-email-register-error"
            style={{ display: emailErrorDisplay }}
          >
            {emailError}
          </div>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
        <Link to="/login" className="login-registerLink">
          Do you have an account ?
        </Link>
      </div>
      <div className="loginAndRegister-container-right">
        <Link to="/" className="login-closeButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2rem"
            viewBox="0 0 384 512"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
