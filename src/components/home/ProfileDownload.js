import React from "react";
import Button from "../UI/Button";

const ProfileDownload = () => {
  return (
    <div className="profile-options">
      <Button>Hire me</Button>
      <a href="Abhimanyu_yadav_Resume.pdf" download="Abhimanyu_yadav_Resume.pdf">
        <Button color={true}>Get Resume</Button>
      </a>
    </div>
  );
};

export default ProfileDownload;
