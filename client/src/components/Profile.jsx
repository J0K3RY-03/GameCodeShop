import { useState } from "react";
import { ProfilePassword } from "./sub-components/ProfilePassword";
import { ProfileEmail } from "./sub-components/ProfileEmail";
import { ProfileMyProfile } from "./sub-components/ProfileMyProfile";
import { ProfilePersonalInfo } from "./sub-components/ProfilePersonalInfo";

export const Profile = () => {
  // States that controll and display li content
  const [activeLi, setActiveLi] = useState("my profile");

  const handleButtonClick = (whichLi) => {
    setActiveLi(whichLi);
  };

  return (
    <div className="profile-user-information">
      <ul>
        <li onClick={() => handleButtonClick("my profile")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" />
          </svg>
          <div className="profileInformation-li">
            <p
              className={
                activeLi === "my profile"
                  ? "profileInformation-li-big active"
                  : "profileInformation-li-big"
              }
            >
              My profile
            </p>
            <p className="profileInformation-li-small">
              Overview of my profile
            </p>
          </div>
        </li>
        <li onClick={() => handleButtonClick("personal information")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
          <div className="profileInformation-li">
            <p
              className={
                activeLi === "personal information"
                  ? "profileInformation-li-big active"
                  : "profileInformation-li-big"
              }
            >
              Personal information
            </p>
            <p className="profileInformation-li-small">
              Manage my personal information
            </p>
          </div>
        </li>
        <li onClick={() => handleButtonClick("email")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
          <div className="profileInformation-li">
            <p
              className={
                activeLi === "email"
                  ? "profileInformation-li-big active"
                  : "profileInformation-li-big"
              }
            >
              Email
            </p>
            <p className="profileInformation-li-small">Manage my email</p>
          </div>
        </li>
        <li onClick={() => handleButtonClick("password")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
          </svg>
          <div className="profileInformation-li">
            <p
              className={
                activeLi === "password"
                  ? "profileInformation-li-big active"
                  : "profileInformation-li-big"
              }
            >
              Password
            </p>
            <p className="profileInformation-li-small">Manage by password</p>
          </div>
        </li>
      </ul>
      {activeLi === "my profile" && <ProfileMyProfile />}
      {activeLi === "personal information" && <ProfilePersonalInfo />}
      {activeLi === "email" && <ProfileEmail />}
      {activeLi === "password" && <ProfilePassword />}
    </div>
  );
};
