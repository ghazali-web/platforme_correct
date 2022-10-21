import React from "react";
import { Button, Input } from "./";
import { MdEmail, RiLockPasswordFill } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineUserAdd, AiFillTwitterCircle } from "react-icons/ai";
const Sign = (props) => {
  const styles = {
    flexrow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "30px",
      backgroundColor: "#283288",
    },
    headerSign: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
      backgroundColor: "#283288",
    },
    sign: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "black",
    },
    signBody: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "30px",
      backgroundColor: "#ffffff",
      height: "430px",
      width: "745px",
    },
    socialMedia: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
  };
  return (
    <div>
      <div styles={styles.headerSign}>
        <div styles={styles.signBody}>
          <h1 styles={styles.sign}>{props.sign}</h1>
          <div styles={styles.flexrow}>
            <AiOutlineUserAdd />
            <Input type={props.type1} name={props.name1} id={props.id1} />
          </div>
          <div styles={styles.flexrow}>
            <MdEmail />
            <Input type={props.type2} name={props.name2} id={props.id2} />
          </div>
          {/* ----------2----------------  */}
          <div styles={styles.flexrow}>
            <RiLockPasswordFill />
            <Input type={props.type3} name={props.name3} id={props.id3} />
          </div>
          <input type={props.checkbox} name={props.name4} id={props.id4} />
          <Button text={props.text} styles={styles.button} />
          <div styles={styles.socialMedia}>
            <h1>
              {props.text1}
              <span>{props.text2}</span>
            </h1>
            <FcGoogle />
            <FaFacebook />
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
