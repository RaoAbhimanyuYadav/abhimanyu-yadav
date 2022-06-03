import React from "react";
import ProfileDownload from "./ProfileDownload";
import ProfileLinks from "./ProfileLinks";

const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <ProfileLinks />
      <ProfileDetails />
      <ProfileDownload />
    </div>
  );
};

export default ProfileDetails;
