import { useState } from "react";
import axios from "axios";

export const ProfilePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const onSubmit = async (event) => {
    event.preventDefault();

    //Reset error handlers states
    setErrorDisplay("none");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/users/profile/myprofile-password ",
        { newPassword, confirmNewPassword, currentPassword },
        { withCredentials: true }
      );

      setError(response.data.message);
      setErrorDisplay("block");
    } catch (error) {
      setError(error.response.data.message);
      setErrorDisplay("block");
      console.error(error);
    }
  };
  return (
    <section className="userPassword">
      <h1>Change your account password</h1>
      <form className="loginAndRegister-form" onSubmit={onSubmit}>
        <input
          type="password"
          id="password"
          name="password"
          value={newPassword}
          placeholder="New password"
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmNewPassword}
          placeholder="Confirm your new password"
          onChange={(event) => setConfirmNewPassword(event.target.value)}
        />
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="Current password"
          onChange={(event) => setCurrentPassword(event.target.value)}
        />

        <div
          className="handle-email-register-error"
          style={{ display: errorDisplay }}
        >
          {error}
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
