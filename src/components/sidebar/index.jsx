import React from "react";
import "./style.css";
const sidebar = () => {
  return (
    <div className="sidebar">
      <div class="side-bar-menu">
        <ul>
          <li>
            <a href="#" class="active">
              <i class="fa fa-home"></i>
              <i>Home</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-tasks"></i>
              <i>Courses</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-th-large"></i>
              <i>Teachers</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-address-book"></i>
              <i>A-propos</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-clipboard"></i>
              <i>projects</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-user"></i>
              <i>Contact</i>
            </a>
            </li>
            {/* sign in link  */}
            {/* <li>
            <a className="signin" href="#">
              <i class="fa fa-user"></i>
              <i>Sign in</i>
            </a>
          </li> */}
            {/* end sign in link  */}
        </ul>
      </div>
    </div>
  );
};
export default sidebar;
