import { useState } from "react";
import { Profile } from "../components/Profile";
import { Wishlist } from "../components/Wishlist";
import { Reviews } from "../components/Reviews";

export const UserProfile = () => {
  // States that controll and display li content
  const [activeLi, setActiveLi] = useState(null);

  const handleButtonClick = (whichLi) => {
    setActiveLi(whichLi);
  };

  return (
    <div className="profile-contentContainer">
      <div className="nickname-creationDate">
        <p>User Nickname</p>
        <p>Member since:</p>
      </div>
      <ul className="profile-navbar">
        <li
          className={activeLi === "profile" ? "active" : ""}
          onClick={() => handleButtonClick("profile")}
        >
          Profile
        </li>
        <li
          className={activeLi === "wishlist" ? "active" : ""}
          onClick={() => handleButtonClick("wishlist")}
        >
          Wishlist
        </li>
        <li
          className={activeLi === "reviews" ? "active" : ""}
          onClick={() => handleButtonClick("reviews")}
        >
          Reviews
        </li>
      </ul>

      {activeLi === "profile" && <Profile />}
      {activeLi === "wishlist" && <Wishlist />}
      {activeLi === "reviews" && <Reviews />}
    </div>
  );
};
