import react from "react";
import { Image,Button } from "..";
import anime from "../../assets/Video/Multimedia Application and Virtual Reality - Introduction -26 Definitions.mp4";
import "./style.css";
import React from "react";
import logo from "../../assets/images/ForEndImage.png";
const index = () => {
  return (
    <div className="About-us">
      <Image image={logo} />
      <div>
        {/* <Video className="video" src={anime} loop autoplay muted /> */}
      </div>
      <div className="wlecome">
        <div className="title">
          <h1 className="title-text">
            <span className="title-text-aboutus">About US</span>
          </h1>
        </div>
        <span className="title-text-text">
          Welcome to online class LearnEngine
        </span>
        <span className="title-text-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          reprehenderit veniam eligendi doloribus hic accusamus distinctio
          magnam dolorem sed libero corporis quasi, voluptatem eveniet unde?
          Ullam quasi odio nam assumenda.
        </span>
        <span className="title-text-nisl">
          <p>
            <i class="fa-solid fa-shield-check"></i>
            Nisl nisi massa amet consequat
          </p>
          {/* -----2------- */}
          <p>
            <i class="fa-solid fa-shield-check"></i>
            Nisl nisi massa amet consequat
          </p>
        </span>
      </div>
      <Button className="LearnMore" text={"Learn more"} />
    </div>
  );
};

export default index;
