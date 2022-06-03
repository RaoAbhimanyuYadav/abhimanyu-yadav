import React from "react";
import "./CSS/Profile.css";
import ProfileAbout from "./ProfileAbout";
import ProfileLinks from "./ProfileLinks";
import ProfileDownload from "./ProfileDownload";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <ProfileLinks />
        <ProfileAbout />
        <ProfileDownload />
      </div>
    </div>
  );
};

export default Profile;
