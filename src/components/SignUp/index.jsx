import React from "react";
import "../SignIn/style.css";
import { Button } from "../";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineUserAdd, AiFillTwitterCircle } from "react-icons/ai";
const Signup = () => {
  const styles = {
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "30px",
      backgroundColor: "#283288",
    },
  };
  return (
    <div>
      <div className="headerSign">
        <div className="signBody">
          <h1 className="sign">Sign Up</h1>
          <div className="flexrow">
            <AiOutlineUserAdd />
            <input type="text" placeholder="Name" />
          </div>
          <div className="flexrow">
            <MdEmail />
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          {/* ----------2----------------  */}
          <div className="flexrow">
            <RiLockPasswordFill />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="flexrow">
            <input type="checkbox" name="check" id="check" />
            <p>
              I read and agree to<span>Terms & Conditions</span>
            </p>
          </div>
          <Button text={"Sign Up"} styles={styles.button} />
          <div className="socialMedia">
            <p>
              Already a member?
              <span>Sign In</span>
            </p>
            <FcGoogle />
            <FaFacebook />
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
