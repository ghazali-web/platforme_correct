import "style.css";
import sign from ".."
import React from "react";
import {Button,Sign} from "../"
import { MdEmail, RiLockPasswordFill } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import {FaFacebook}from "react-icons/fa"
import {AiFillTwitterCircle}from "react-icons/ai"
const index = () => {
  
  return (
  
    <Sign 
sign={"Sign In"}
          // input begin 
          // name 
type1={"name"} name1={"name"} id1={"name"}
// email 
type2={"email"} name2={"email"} id2={"email"}
// pasword 
type3={"password"} name3={"password"} id3={"password"} 
// input end 
// button chekbox sign up 
          // checkbox={} name4={} id4={}
          // text button validation  sign up/In with terms and condition color
          text={"Sign In"} 
          // tetx1 signup with span signin color 
          // text1={} 
          // span signin color 
          // text2={}
/>
          

  );
};

export default index;
