import React from "react";
import "./style.css";
const index = () => {
  return (
    <div className="sidebar">
      <div class="side-bar-menu">
        <ul>
          <li>
            <a href="#HeroBanner" class="active">
              <i class="fa fa-home" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#Courses">
              <i class="fa fa-tasks"></i>
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a href="#Teachers">
              <i class="fa fa-th-large"></i>
              <span>Teachers</span>
            </a>
          </li>
          <li>
            <a href="#Props">
              <i class="fa fa-address-book"></i>
              <span>A-propos</span>
            </a>
          </li>
          <li>
            <a href="#Project">
              <i class="fa fa-clipboard"></i>
              <span>projects</span>
            </a>
          </li>
          <li>
            <a href="#Contact">
              <i class="fa fa-user"></i>
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
