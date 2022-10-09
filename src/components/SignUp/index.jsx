import "./style.css";
import React from "react";

const index = () => {
  return (
    <Sign
      sign={"Sign Up"}
      // input begin
      // name
      type1={"name"}
      name1={"name"}
      id1={"name"}
      // email
      type2={"email"}
      name2={"email"}
      id2={"email"}
      // pasword
      type3={"password"}
      name3={"password"}
      id3={"password"}
      // input end
      // button chekbox sign up
      checkbox={"checkbox"}
      name4={"I read and agree to Terms & Conditions"}
      id4={"checkbox"}
      // text button validation  sign up/In with terms and condition color
      text={"Create Account"}
      // tetx1 signup with span signin color
      text1={"Already a member?  "}
      // span signin color
      text2={"Sign In"}
    />
  );
};

export default index;
