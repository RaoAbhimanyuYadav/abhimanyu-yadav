import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <ul className={classes.items}>
        <li className={classes.content}>
          <a className={classes.link} href="#">
            Home
          </a>
        </li>
        <li className={classes.content}>
          <a className={classes.link} href="">
            About
          </a>
        </li>
        <li className={classes.content}>
          <a className={classes.link} href="">
            Resume
          </a>
        </li>
        <li className={classes.content}>
          <a className={classes.link} href="">
            Testimonial
          </a>
        </li>
        <li className={classes.content}>
          <a className={classes.link} href="">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
