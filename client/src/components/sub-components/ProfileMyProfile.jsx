import { useEffect } from "react";
import axios from "axios";

export const ProfileMyProfile = () => {
  useEffect(() => {
    const onLoad = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/profile/myprofile-info",
          { withCredentials: true }
        );

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    onLoad();
  }, []);

  return (
    <div className="display-userInformation">
      <p>My profile</p>
    </div>
  );
};
