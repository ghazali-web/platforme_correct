import React from "react";
import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { Icon3, Icon2, Icon1 } = props;
  return (
    <div className="card">
      <p className="title-text-aboutus">{"Instructor"}</p>

      <div className="bodyCard">
        <img className="card-image" alt="imagesCard" src={props.img} />

        <div className="flexcolumn">
          <p>{props.NameTeacher}</p>
          <div className="flexrow">
            <p className="module">{props.Module}</p>
            <Button text={"Join Now"} />
          </div>
        </div>
        {/* -----1---------- */}
        <div className="flexrow">
          <div className="flexrow">
            <Icon1 color="red" size={32} />
            <p> {props.spantext1}</p>
          </div>
          {/* ----------2-------- */}
          <div className="flexrow">
            <Icon2 color="red" size={32} />
            <p> {props.spantext2}</p>
          </div>
          {/* ---------3---------  */}
          <div className="flexrow">
            <Icon3 color="red" size={32} />
            <p> {props.spantext3}</p>
          </div>
          {/* ---------end3----------  */}
        </div>
      </div>

      <Link to="FormeCourseAdded" className="SeeMore">
        SeeMore
      </Link>
      {/* <Button text={"SeeMore"} /> */}
    </div>
  );
};
export default Card;
