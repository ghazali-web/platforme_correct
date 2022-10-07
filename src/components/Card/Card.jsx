import React from "react";
import "../AboutUs/style.css";
import "./style.css";
import logo from "../../assets/images/e-learning-logo.jpg";
import { Button, Image } from "../";

const Card = (props) => {
  return (
    <div className="card">
      <span className="title-text-aboutus">{props.Instructor}</span>
      <Image className="card-image" image={logo} />
      <div className="card-stats">
        <div>
          <h1>{props.NameTeacher}</h1>
          <span>{props.Module}</span>
        </div>
        <button>{props.text1}</button>
        {/* -----1---------- */}
        <div>
          <i class={props.classNameIcon1}></i>
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
      </div>
      <button>{props.text2}</button>
      <div className="bordure"></div>
      <div className="supervisorModule">
        <img src={props.img} />
        <span>{props.nameSupervisor}</span>
        <span>${props.Dollar}</span>
      </div>
    </div>
  );
};
export default Card;
