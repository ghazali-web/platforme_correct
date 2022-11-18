import React, { useState } from "react";
import {API} from "../../api/posts";
import "./style.css";
import { Button } from "../";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleclick = async (e) => {
    e.preventDefault();
    const signin = { email, password };
    try {
      const response = await API.post("/users/signin", signin);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      navigate("http://localhost:3002");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <form
        className="headerSign"
        method="post"
        enctype="multipart/form-data"
        onSubmit={handleclick}
      >
        <div className="signBody">
          <h1 className="sign">Sign In</h1>
          <div className="flexrow">
            <MdEmail />
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="Email"
              styles={{ fontSize: "24px", color: "black" }}
              onChange={(e) => setemail(e.target.value)}
            />
            {/* <script value={email} onChange={(e) => setemail(e.target.value)}>
              email=req.body.email;
            </script> */}
          </div>
          {/* ----------2----------------  */}
          <div className="flexrow">
            <RiLockPasswordFill />
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              styles={{ fontSize: "24px", color: "black" }}
            />
            {/* <script
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            >
              password=req.body.password;
            </script> */}
          </div>
          <Button text={"Sign In"} styles={styles.button} />
          <div className="socialMedia">
            <FcGoogle />
            <FaFacebook />
            <AiFillTwitterCircle />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
