import React from "react";

const ProfileDownload = () => {
  return (
    <div className="profile-options">
      <button>Hire me</button>
      <a href="Abhimanyu_yadav_Resume.pdf" download="Abhimanyu_yadav_Resume.pdf">
        <button>Download CV</button>
      </a>
    </div>
  );
};

export default ProfileDownload;
