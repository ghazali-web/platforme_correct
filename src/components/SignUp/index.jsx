import React, { useState } from "react";
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
      color: "black",
      borderRadius: "30px",
      backgroundColor: "#283288",
      width: "fit-Content",
      fontSize: "24px",
    },
  };
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Name, setName] = useState("");
  const handleclick = (e) => {
    e.preventDefault();
    const signup = { email, password, Name };
    fetch("localhost:3002/users/Signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signup),
    }).then(() => {
      console.log("New signup");
    });
  };
  return (
    <div>
      <div className="headerSign">
        <div className="signBody">
          <h1 className="sign">Sign Up</h1>
          <div className="flexrow">
            <AiOutlineUserAdd />
            <input type="text" placeholder="Name" id="Name" />
            <script value={Name} onChange={(e) => setName(e.target.value)}>
              email=req.body.Name;
            </script>
          </div>
          <div className="flexrow">
            <MdEmail />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              styles={{ fontSize: "24px", color: "black" }}
            />
            <script value={email} onChange={(e) => setemail(e.target.value)}>
              email=req.body.email;
            </script>
          </div>
          {/* ----------2----------------  */}
          <div className="flexrow">
            <RiLockPasswordFill />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              styles={{ fontSize: "24px", color: "black" }}
            />
            <script
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            >
              email=req.body.password;
            </script>
          </div>
          <div className="flexrow">
            <input
              type="checkbox"
              name="check"
              id="check"
              styles={{ fontSize: "24px", color: "black" }}
            />
            <p>
              I read and agree to<span>Terms & Conditions</span>
            </p>
          </div>
          <Button
            text={"Sign Up"}
            styles={styles.button}
            onClick={handleclick}
          />
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
