import "./style.css";
import { Image, SearchBar, ComponentBar } from "..";
import logo from "../../assets/images/uni-anu.png";
import { GrUserExpert } from "react-icons/gr";
const navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-bar-brand">
          <GrUserExpert color="red" />
          <h2>
            <span className="learn">Learn</span>
            <span className="engine">Engine</span>
          </h2>
        </div>

        <SearchBar />
        <ComponentBar />
        <div id="dropdown" className="user-wrap">
          <Image image={logo} width="48" height="48" className="logo-admin" />
        </div>
      </div>
    </div>
  );
};
export default navbar;
