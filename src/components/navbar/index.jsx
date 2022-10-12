import react from "react";
import "./style.css";
import { Image, SearchBar, ComponentBar } from "..";
import logo from "../../assets/images/uni-anu.png";
const navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div class="nav-bar-brand">
          <h2>
            <span class="fa fa-user-o">
              <span className="learn">Learn</span>
              <span className="engine">Engine</span>
            </span>
          </h2>
        </div>
        <SearchBar />
        <ComponentBar />
        <div id="dropdown" class="user-wrap">
          <Image image={logo} width="48" height="48" class="logo-admin" />
        </div>
      </div>
    </div>
  );
};
export default navbar;
