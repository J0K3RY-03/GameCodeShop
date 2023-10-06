import { useEffect, useState } from "react";
import axios from "axios";
import convertAndFormatDate from "../../Modules/convertDate";

export const ProfileMyProfile = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [memberSince, setMemberSince] = useState("");

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
        setMemberSince(convertAndFormatDate(response.data.userInfo.createdAt));
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    onLoad();
  }, []);

  return (
    <div className="display-userInformation">
      <div className="user-date-and-username">
        <p className="user-username">{username}</p>
        <p className="user-date">Member since: {memberSince}</p>
      </div>
      <div className="personalInformation">
        <div className="user-firstName">
          <p className="static">First name</p>
          <p className="dynamic">{userFirstName}</p>
        </div>
        <div className="user-lastName">
          <p className="static">Last name</p>
          <p className="dynamic">{userLastName}</p>
        </div>

        <div className="user-username">
          <p className="static">Username</p>
          <p className="dynamic">{username}</p>
        </div>
        <div className="user-email">
          <p className="static">Email</p>
          <p className="dynamic">{userEmail}</p>
        </div>
      </div>
    </div>
  );
};
