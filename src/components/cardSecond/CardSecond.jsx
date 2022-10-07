import React from "react";
import "./style.css";
import "../AboutUs/style.css";

const CardSecond = (props) => {
  return (
    <div className="card">
      <div className="header">
        <span className="title-text-aboutus">{props.Instructor}</span>
        <span className="title-text-pouplar">{props.pouplar}</span>
      </div>
      <div className="body">
        <img className="card-image" src={props.img} />
        <div className="card-stats">
          <h1>{props.Module}</h1>
          {/* -----1---------- */}
          <div class="flexrow">
            <div>
              <i class={props.classNameIcon1} />
              <span> {props.spantext1}</span>
            </div>
            {/* ----------2-------- */}
            <div>
              <i class={props.className2}></i>
              <span> {props.spantext2}</span>
            </div>
            {/* ---------3---------  */}
            <div>
              <i class={props.className3}></i>
              <span> {props.spantext3}</span>
            </div>
            {/* ----------4--------  */}
            <div>
              <i class={props.className4}></i>
              <span> {props.spantext4}</span>
            </div>
            {/* ---------5-------- */}
            <div>
              <i class={props.className5}></i>
              <span> {props.spantext5}</span>
            </div>
            {/* ------------end --------------  */}
          </div>
        </div>
        <div className="bordure"></div>

        <div className="flexrow">
          <img src={props.img} />
          <span>{props.nameSupervisor}</span>
          <span className="Dollar">{props.Dollar}</span>
        </div>
      </div>
    </div>
  );
};

export default CardSecond;
