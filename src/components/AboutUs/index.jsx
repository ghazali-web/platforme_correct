import react from "react";
import { Image, Button } from "..";
import anime from "../../assets/Video/Multimedia Application and Virtual Reality - Introduction -26 Definitions.mp4";
import "./style.css";
import React from "react";
import logo from "../../assets/images/ForEndImage.png";
import { BsShieldFillCheck } from "react-icons/bs";
export const styles = {
  Dollar: { color: "#0a908a", fontFamily: "Roboto", fontSize: "18" },
  p: { fontFamily: "Roboto", fontSize: "12px", color: "#ffffff" },
  button: {
    width: "100px",
    height: "40px",
    background: "#fe7558",
    borderRadius: "30px",
  },
};
const index = () => {
  return (
    <div className="About-us">
      <div>
        <Image image={logo} />

        {/* <Video className="video" src={anime} loop autoplay muted /> */}
      </div>
      <div className="wlecome">
        <div className="title">
          <h1 className="title-text">
            <span className="title-text-aboutus">About US</span>
          </h1>
        </div>
        <h3 className="title-text-text">Welcome to online class LearnEngine</h3>
        <p className="title-text-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          reprehenderit veniam eligendi doloribus hic accusamus distinctio
          magnam dolorem sed libero corporis quasi, voluptatem eveniet unde?
          Ullam quasi odio nam assumenda.
        </p>
        <div className="title-text-nisl">
          <div>
            <BsShieldFillCheck />
            <span> Nisl nisi massa amet consequat</span>
          </div>
          {/* -----2------- */}
          <div>
            <BsShieldFillCheck />
            <span> Nisl nisi massa amet consequat</span>
          </div>
          <div>
            <Button styles={styles.button} text={"Learn more"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;