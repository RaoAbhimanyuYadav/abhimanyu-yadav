import React from "react";
import Typical from "react-typical";

const ProfileAbout = () => {
  return (
    <React.Fragment>
      <div className="profile-details__name">
        <span className="primary-text">
          Hello, I'm <span className="highlighted-text">Abhimanyu Yadav</span>
        </span>
      </div>
      <div className="profile-details__role">
        <span className="primary-text">
          <h1>
            <Typical loop={Infinity} steps={["Full Stack Develeoper😄", 10000, "Enginner😉", 1000]} />
          </h1>
          <span className="profile-role-tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt at tempore commodi, sint vero perspiciatis corporis nobis natus mollitia quaerat? Necessitatibus doloribus tempore pariatur molestiae autem quas est iste.</span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default ProfileAbout;
