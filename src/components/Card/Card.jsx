import React from "react";
import "../AboutUs/style.css";
import "./style.css";
import { styles } from "../AboutUs";
import Button from "../Button";

const Card = (props) => {
  const { Icon3 } = props;
  return (
    <div className="card">
      <div className="header">
        <span className="title-text-aboutus">{props.Instructor}</span>
      </div>
      <div className="body">
        <img className="card-image" src={props.img} />
        <div className="card-stats">
          <div className="flexrow">
            <div className="flexcolumn">
              <h1>{props.NameTeacher}</h1>
              <span className="module">{props.Module}</span>
            </div>
            <button>{props.text1}</button>
          </div>
          {/* -----1---------- */}
          <div className="flexrow">
            <div>
              <i className={props.classNameIcon1} />
              <span> {props.spantext1}</span>
            </div>
            {/* ----------2-------- */}
            <div>
              <i className={props.classNameIcon2} />
              <span> {props.spantext2}</span>
            </div>
            {/* ---------3---------  */}
            <div>
              <Icon3 color="red" size={32} />
              <span> {props.spantext3}</span>
            </div>
            {/* ---------end3----------  */}
          </div>

          <Button styles={styles.button} text={props.text2} />
        </div>
      </div>
    </div>
  );
};
export default Card;
