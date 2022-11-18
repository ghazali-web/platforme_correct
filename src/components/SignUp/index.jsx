import React, { useEffect, useState } from "react";
import "../SignIn/style.css";
import { Button } from "../";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineUserAdd, AiFillTwitterCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {API} from "../../api/posts";
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
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signup = { email, password, Name };
    try {
      const response = await API.post("/users/signup", signup);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <div>
      <div className="headerSign">
        <form
          className="signBody"
          method="post"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <h1 className="sign">Sign Up</h1>
          <div className="flexrow">
            <AiOutlineUserAdd />
            <input
              type="text"
              placeholder="Name"
              id="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* <script value={Name} onChange={(e) => setName(e.target.value)}>
              name=req.body.name;
            </script> */}
          </div>
          <div className="flexrow">
            <MdEmail />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
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
              name="password"
              id="password"
              placeholder="Password"
              styles={{ fontSize: "24px", color: "black" }}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            {/* <script
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            >
              password=req.body.password;
            </script> */}
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
          <Button type="submit" text={"Sign Up"} styles={styles.button} />
          <div className="socialMedia">
            <p>
              Already a member?
              <span>Sign In</span>
            </p>
            <FcGoogle />
            <FaFacebook />
            <AiFillTwitterCircle />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
