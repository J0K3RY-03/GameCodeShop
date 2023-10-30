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
      } catch (error) {
        console.error(`There's been an error: ${error}`);
      }
    };

    onLoad();
  }, []);

  return (
    <section className="display-userInformation">
      <article className="user-date-and-username">
        <p className="user-username">{username}</p>
        <p className="user-date">Member since: {memberSince}</p>
      </article>
      <section className="personalInformation">
        <article className="user-firstName">
          <p className="static">First name</p>
          <p className="dynamic">{userFirstName}</p>
        </article>
        <article className="user-lastName">
          <p className="static">Last name</p>
          <p className="dynamic">{userLastName}</p>
        </article>

        <article className="user-username">
          <p className="static">Username</p>
          <p className="dynamic">{username}</p>
        </article>
        <article className="user-email">
          <p className="static">Email</p>
          <p className="dynamic">{userEmail}</p>
        </article>
      </section>
    </section>
  );
};
