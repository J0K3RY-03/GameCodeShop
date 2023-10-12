import { useState } from "react";
import axios from "axios";

export const ProfilePersonalInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const onSubmit = async (event) => {
    event.preventDefault();

    //Reset error handlers states
    setErrorDisplay("none");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/users/profile/myprofile-personal-information",
        { firstName, lastName },
        { withCredentials: true }
      );

      if (response.data.message === "Personal information updated!") {
        window.location.reload();
      } else {
        setError(response.data.message);
        setErrorDisplay("block");
      }
      console.log(response);
    } catch (error) {
      setError(error.response.data.message);
      setErrorDisplay("block");
      console.error(error);
    }
  };
  return (
    <section className="userPersonalInformation">
      <h1>Change your personal information</h1>
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
