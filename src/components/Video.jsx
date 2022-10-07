import React from "react";

const Video = (props) => {
  return (
    <div>
      <video src={props.src}>{props.name}</video>
    </div>
  );
};

export default Video;
