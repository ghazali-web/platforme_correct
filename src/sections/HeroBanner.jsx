import React from "react";
import { ElearningImages, SharedCompany, StartLearning } from "../components";

const HeroBanner = () => {
  return (
    <div className="align-row">
      <StartLearning />

      <ElearningImages />
      <div>
        <SharedCompany />
      </div>
    </div>
  );
};

export default HeroBanner;
