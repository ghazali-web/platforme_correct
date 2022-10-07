import React from "react";

const Button = (props) => {
  const Alert = () => {
    alert("warning");
  };
  return (
    <button style={props.styles} onClick={Alert}>
      <span>{props.text}</span>
      </button>
  );
};

export default Button;
