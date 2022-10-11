import React from "react";

const Button = (props) => {
  return (
    <button style={props.styles} onClick={props.handleClick}>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
