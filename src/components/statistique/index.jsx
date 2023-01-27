import React from "react";
import { Bar } from "react-chartjs-2";
import "./style.css";
const index = (props) => {
  return (
    <div className="chart">
      <Bar data={props.data} />
    </div>
  );
};

export default index;
