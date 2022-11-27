import React from "react";
import Button from "../Button";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const index = (props) => {
  const [page, setPage] = react.useState({
    nameSignup: page.istrue ? (
      <div styles={styles.flexrow}>
        <AiOutlineUserAdd />
        <Input type={props.type1} name={props.name1} id={props.id1} />
      </div>
    ) : (
      ""
    ),
    signup_in: page.istrue ? (
      <div>
        <div styles={styles.flexrow}>
          <MdEmail />
          <Input type={props.type2} name={props.name2} id={props.id2} />
        </div>

        <div styles={styles.flexrow}>
          <RiLockPasswordFill />
          <Input type={props.type3} name={props.name3} id={props.id3} />
        </div>
      </div>
    ) : (
      ""
    ),
    chekkbox: page.istrue ? (
      <input type={props.checkbox} name={props.name4} id={props.id4} />
    ) : (
      ""
    ),

    buswitch: page.istrue ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />,
    socialMedia: (
      <div styles={styles.socialMedia}>
        <h1>
          {props.text1}
          <span>{props.text2}</span>
        </h1>
        <FcGoogle />
        <FaFacebook />
        <AiFillTwitterCircle />
      </div>
    ),
    istrue: "true",
  });
  function toggleFavorite() {
    setPage((prevContact) => {
      prevContact: !prevContact.istrue;
    });
  }
  return (
    <div>
      <Button handleClick={toggleFavorite} text={props.text} />
      {nameSignup}
      {signup_in}
      {chekkbox}
      {socialMedia}
      {buswitch}
    </div>
  );
};

export default index;
