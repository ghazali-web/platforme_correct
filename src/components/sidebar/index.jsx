import React from "react";
import "./style.css";
const sidebar = () => {
  return (
    <div className="sidebar">
      <div class="side-bar-menu">
        <ul>
          <li>
            <a href="#" class="active">
              <i class="fa fa-home" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-tasks"></i>
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-th-large"></i>
              <span>Teachers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-address-book"></i>
              <span>A-propos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-clipboard"></i>
              <span>projects</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-user"></i>
              <span>Contact</span>
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
