import React, { useState } from "react";
import "./style.css";
import { Button } from "../";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Signin = () => {
  const styles = {
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "30px",
      backgroundColor: "#283288",
      color: "black",
      zIndex: "1",
    },
  };
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleclick = (e) => {
    e.preventDefault();
    const signin = { email, password };
    fetch("localhost:3002/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signin),
    }).then(() => {
      console.log("New signin");
    });
  };

  return (
    <div>
      <div className="headerSign">
        <div className="signBody">
          <h1 className="sign">Sign In</h1>
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
          <Button
            text={"Sign In"}
            styles={styles.button}
            onClick={handleclick}
          />
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
