import "./style.css";
import React from "react";

const cardAddCourse = (props) => {
  return (
    <div>
      <div>
        <a href="/">
          view file
          <iframe
            title="Course"
            src={props.urlfile}
            frameborder="0"
            width="2500"
            height="1500"
          ></iframe>
        </a>
      </div>
      <div>
        <a href="/">
          view pdf
          <iframe
            title="Course"
            src={props.urlpdf}
            frameborder="0"
            width="2500"
            height="1500"
          ></iframe>
        </a>
      </div>
      <div>
        <a href="/">
          view video
          <iframe
            title="Course"
            src={props.urlvideo}
            frameborder="0"
            width="2500"
            height="1500"
          ></iframe>
        </a>
      </div>
    </div>
  );
};

export default cardAddCourse;
