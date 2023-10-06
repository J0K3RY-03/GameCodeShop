import { useEffect, useState } from "react";
import axios from "axios";

export const ProfileMyProfile = () => {
  const [userFirstname, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const onLoad = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/profile/myprofile-info",
          { withCredentials: true }
        );

        // Set user variables its values
        setUserFirstName(response.data.userInfo.firstName);
        setUserLastName(response.data.userInfo.lastName);
        setUserEmail(response.data.userInfo.email);
        setUsername(response.data.userInfo.username);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    onLoad();
  }, []);

  return (
    <div className="display-userInformation">
      <h1>Welcome to your profile, {username}!</h1>
      <div className="user-date-and-username">
        <p>{username}</p>
        <p></p>
      </div>
      <div className="personalInformation-names"></div>
      <div className="personalInformation-email"></div>
      <div className="personalInformation-username"></div>

      <p>{userFirstname}</p>
      <p>{userLastName}</p>
      <p>{userEmail}</p>
      <p>{username}</p>
    </div>
  );
};
