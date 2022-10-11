import React from "react";
import "./style.css"
import { Button } from "../";
import { MdEmail} from "react-icons/md";
import {RiLockPasswordFill } from "react-icons/ri"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {  AiFillTwitterCircle } from "react-icons/ai";
const Signin = () => {
  const styles = {
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "30px",
      backgroundColor: "#283288",
      color: "black",
    },
    
  };
  return (
    <div>
      <div className="headerSign">
        <div className="signBody">
          <h1 className="sign">Sign In</h1>
          <div className="flexrow">
            <MdEmail />
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          {/* ----------2----------------  */}
          <div className="flexrow">
            <RiLockPasswordFill />
            <input type="password" name="password" id="password"  placeholder="Password"/>
          </div>
          <button />
          <Button text={"Sign In"} styles={styles.button} />
          <div className="socialMedia">
            <FcGoogle />
            <FaFacebook />
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
