import "./style.css";
import Image from "../Image";
import React from "react";
import logo from "../../assets/images/Group 232.png";
const ElearningImage = () => {
  return (
    <div>
      <div className="web-app-image">
        <Image image={logo} />
      </div>
      
    </div>
  );
};

export default ElearningImage;
