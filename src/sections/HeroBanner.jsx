import React from "react";
import { ElearningImages, SharedCompany, StartLearning } from "../components";

const HeroBanner = () => {
  return (
    <section id="HeroBanner" className="align-row">
      <StartLearning />

      <ElearningImages />
      <div>
        <SharedCompany />
      </div>
    </section>
  );
};

export default HeroBanner;
