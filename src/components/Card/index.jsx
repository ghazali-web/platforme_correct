import React from "react";
import "../AboutUs/style.css";
import "./style.css";
import { styles } from "../AboutUs";
import Button from "../Button";

const Card = (props) => {
  const { Icon3,Icon2,Icon1 } = props;
  return (
    <div className="card">
      <div>
        <div className="header">
          <p className="title-text-aboutus">{"Instructor"}</p>
        </div>
        <div className="body">
          <img className="card-image" src={props.img} />
          <div className="card-stats">
            <div className="flexcolumn">
              <p>{props.NameTeacher}</p>
              <div className="flexrow">
                <p className="module">{props.Module}</p>
                <Button styles={styles.button} text={"Join Now"} />
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
        </div>
      </div>
      <Button styles={styles.SeeMore} text={"SeeMore"} />
    </div>
  );
};
export default Card;
