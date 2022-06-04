import React from "react";
import Typical from "react-typical";
import classes from "./CSS/ProfileAbout.module.css";
import ProfileLinks from "./ProfileLinks";
import ProfileDownload from "./ProfileDownload";

const ProfileAbout = () => {
  return (
    <div className={classes.about}>
      <div>
        <ProfileLinks />
        <span className={`${classes["primary-text"]} ${classes.name}`}>
          Hello, I'm <span className={classes["highlighted-text"]}>Abhimanyu Yadav</span>
        </span>
      </div>
      <div className={classes.role}>
        <span className={classes["primary-text"]}>
          <h1>
            <Typical loop={Infinity} steps={["Full Stack Develeoper😄", 10000, "Enginner😉", 1000]} />
          </h1>
          <span className="profile-role-tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt at tempore </span>
        </span>
      </div>
      <ProfileDownload />
    </div>
  );
};

export default ProfileAbout;
