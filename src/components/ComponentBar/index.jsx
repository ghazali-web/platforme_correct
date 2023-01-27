import React from "react";
import "./style.css";
const index = () => {
  return (
    <div className="sidebar">
      <div className="side-bar-menu">
        <ul>
          <li>
            <a href="/" className="active">
              <i className="fa fa-home" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#Courses">
              <i className="fa fa-tasks"></i>
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a href="#Teachers">
              <i className="fa fa-th-large"></i>
              <span>Teachers</span>
            </a>
          </li>
          <li>
            <a href="#Props">
              <i className="fa fa-address-book"></i>
              <span>A-propos</span>
            </a>
          </li>
          <li>
            <a href="#Project">
              <i className="fa fa-clipboard"></i>
              <span>projects</span>
            </a>
          </li>
          <li>
            <a href="#Contact">
              <i className="fa fa-user"></i>
              <span>Contact</span>
            </a>
          </li>
          {/* sign in link  */}

          {/* end sign in link  */}
        </ul>
      </div>
    </div>
  );
};
export default index;
