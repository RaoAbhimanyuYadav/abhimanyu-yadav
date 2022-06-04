import React from "react";
import classes from "./CSS/ProfileLinks.module.css";
import { GITHUB_SVG, INSTAGRAM_SVG, LINKED_IN_SVG } from "../icons/icons";

const ProfileLinks = () => {
  return (
    <ul className={classes.links}>
      <li className={classes.insta}>
        <a href="https://www.instagram.com/_rao_abhi__/">{INSTAGRAM_SVG}</a>
      </li>
      <li className={classes.github}>
        <a href="https://github.com/RaoAbhimanyuYadav">{GITHUB_SVG}</a>
      </li>
      <li className={classes.linkedin}>
        <a href="https://www.linkedin.com/in/rao-abhimanyu-yadav/">{LINKED_IN_SVG}</a>
      </li>
    </ul>
  );
};

export default ProfileLinks;
