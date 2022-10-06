import React from "react";
import "./style.css";
import Button from "../Button";

const index = () => {
  return (
    <div className="startlearning">
      <h1>Learn on your schedule from any device</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        dolorem. Necessitatibus velit voluptas provident asperiores, temporibus
        sequi sit est soluta dolorem magni eos modi animi vitae impedit nemo
        molestias ipsum?
      </p>
      <div className="header">
        <Button className="StartLearn" text={"Start Learning"} />
        <Button className="Discover" text={"Discover"} />
      </div>
    </div>
  );
};

export default index;
