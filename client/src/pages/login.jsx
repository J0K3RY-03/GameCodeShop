import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailAndPasswordError, setEmailAndPasswordError] = useState("");
  const [emailAndPasswordErrorDisplay, setEmailAndPasswordErrorDisplay] =
    useState("none");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    //Reset error handlers states
    setEmailAndPasswordErrorDisplay("none");
    setEmailAndPasswordError("");

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });

      if (response.data.userID) {
        // Store token and user ID
        setCookies("access_token", response.data.token);

        // At this point the user is logged in and should be redirected to Home page
        navigate("/");
      } else if (response.data.message !== "You logged in!") {
        setEmailAndPasswordErrorDisplay("block");
        setEmailAndPasswordError(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginAndRegister-container">
      <div className="loginAndRegister-container-left">
        <form className="loginAndRegister-form" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="**********"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div
            className="handle-emailAndPassword-login-error"
            style={{ display: emailAndPasswordErrorDisplay }}
          >
            {emailAndPasswordError}
          </div>

          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
        <Link to="/register" className="login-registerLink">
          No account yet ?
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
