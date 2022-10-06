import React from "react";

const Button = (props) => {
  const Alert = () => {
    alert("warning");
  };
  return (
    <button onClick={Alert}>
      <span>{props.text}</span>
      </button>
  );
};

export default Button;
