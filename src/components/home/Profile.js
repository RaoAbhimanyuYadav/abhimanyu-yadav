import React from "react";
import classes from "./CSS/Profile.module.css";
import ProfileAbout from "./ProfileAbout";
import ProfilePic from "../../assests/ProfilePic.jpeg";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <ProfileAbout />
      <div className={classes["pic-container"]}>
        <img src={ProfilePic} alt="Profile Picture" />
      </div>
    </div>
  );
};

export default Profile;
