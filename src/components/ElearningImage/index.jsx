import "./style.css";
import "../animation/style.css";
import Image from "../Image";
import React from "react";
import logo from "../../assets/images/Group 232.png";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { Switch } from ".."; //Quiz,
const ElearningImage = () => {
  const navigate = useNavigate();
  const handleauth = () => {
    localStorage.setItem("active", false);
    navigate("quiz");
    // const timeout = setTimeout(() => {
    //   localStorage.setItem("active", false);
    // }, 10000);
    // clearTimeout(timeout);
  };
  const Logout = () => {
    localStorage.clear();

    navigate("signin");
  };

  return (
    <div className="drop">
      <div className="drop-down-content">
        <ul>
          <li>
            <FaSignInAlt />
            <Link to="signin">Sign in</Link>
          </li>
          <li>
            <Link onClick={handleauth}>Quiz</Link>
          </li>
          <li>
            <Link to="game">Game</Link>
          </li>
          <li>
            <CgProfile />
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Switch />
          </li>
          <li>
            <AiOutlineLogout />
            <Link to="signup">Sign up</Link>
          </li>
          <li>
            <ImExit />
            <Link onClick={Logout} to="/">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
      <div className="web-app-image">
        <Image image={logo} alt="logo" />
      </div>
    </div>
  );
};

export default ElearningImage;
