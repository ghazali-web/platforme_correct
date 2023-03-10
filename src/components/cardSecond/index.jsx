import React from "react";
import "./style.css";
const styles = { img: { borderRadius: "50%" }, Dollar: { color: "green" } };
const CardSecond = (props) => {
  const { Icon1, Icon2, Icon3, Icon4, Icon5 } = props;
  return (
    <div className="card">
      <div className="header">
        <p className="title-text-aboutus">{"Instructor"}</p>
        <p className="title-text-pouplar">{"pouplar"}</p>
      </div>
      <div className="bodyCard">
        <img className="card-image" alt="cardimage" src={props.img} />
        <div className="card-stats">
          {/* <h1>{props.Module}</h1> */}
          {/* -----1---------- */}
          <div className="flexrow">
            <div>
              <Icon1 color="red" size={32} />
              <p> {props.spantext1}</p>
            </div>
            {/* ----------2-------- */}
            <div>
              <Icon2 color="red" size={32} />
              <p> {props.spantext2}</p>
            </div>
            {/* ---------3---------  */}
            <div>
              <Icon3 color="red" size={32} />
              <p> {props.spantext3}</p>
            </div>
            {/* ----------4--------  */}
            <div>
              <Icon4 color="red" size={32} />
              <p> {props.spantext4}</p>
            </div>
            {/* ---------5-------- */}
            <div>
              <Icon5 color="red" size={32} />
              <p> {props.spantext5}</p>
            </div>
            {/* ------------end --------------  */}
          </div>
        </div>
        <div className="bordure"></div>

        <div className="flexrow">
          <img alt="img2" src={props.img2} styles={styles.img} />
          <p>{props.nameSupervisor}</p>
          <p style={styles.Dollar}>{props.Dollar}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSecond;
