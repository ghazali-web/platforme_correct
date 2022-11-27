import "./style.css";
import Image from "../Image";
import React from "react";
import logo from "../../assets/images/Group 232.png";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { Quiz, Switch } from "..";
const ElearningImage = () => {
  return (
    <div className="drop">
      <div className="drop-down-content">
        <ul>
          <li>
            <FaSignInAlt />
            <Link to="signin">Sign in</Link>
          </li>
          <li>
            <Link to="quiz">Quiz</Link>
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
            <Link to="signup">Deconnexion</Link>
          </li>
        </ul>
      </div>
      <div className="web-app-image">
        <Image image={logo} />
      </div>
    </div>
  );
};

export default ElearningImage;
