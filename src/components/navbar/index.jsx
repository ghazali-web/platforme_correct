import react from "react";
import "./style.css";
import { Image, SearchBar } from "..";
import logo from "../../assets/images/uni-anu.png";
const navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div class="nav-bar-brand">
          <h2>
            {/* <span class="fa fa-user-o" style="font-size: 24px">
              learn programming
            </span> */}
            <span class="fa fa-user-o">learn programming</span>
          </h2>
        </div>
        <SearchBar />
        <div id="dropdown" class="user-wrap">
          <Image image={logo} width="48" height="48" class="logo-admin" />
        </div>
      </div>
    </div>
  );
};
export default navbar;
