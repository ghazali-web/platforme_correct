import React from "react";
import Image from "./Image";
const Card = (props) => {
  return (
    <div className="card">
      <Image className="card-image" src={props.image} />
      <div className="card-stats">
        <span>{props.span1}</span>
        <span>{props.span2}</span>
        <span> {props.span3}</span>
      </div>
      <p>{props.phrase}</p>
      <p>
        <span className="bold">{props.price}</span> /{props.person}
      </p>
    </div>
  );
};
export default Card;
