import React from "react";
import "./CSS/ProfileLinks.css";
import { GITHUB_SVG, INSTAGRAM_SVG, LINKED_IN_SVG } from "../icons/icons";

const ProfileLinks = () => {
  return (
    <div className="profile-links">
      <a className="instagram" href="https://www.instagram.com/_rao_abhi__/">
        {INSTAGRAM_SVG}
      </a>
      <a href="https://github.com/RaoAbhimanyuYadav">{GITHUB_SVG}</a>
      <a href="https://www.linkedin.com/in/rao-abhimanyu-yadav/">{LINKED_IN_SVG}</a>
    </div>
  );
};

export default ProfileLinks;
