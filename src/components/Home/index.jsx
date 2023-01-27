import React from "react";
import "./style.css";
import { FormCard, Navbar } from "../"; // Quiz,
import { Aboutus, HeroBanner, Instructor } from "../../sections";

const Index = () => {
  return (
    <div>
      <header className="App-header">
        <Navbar />
      </header>
      <main className="Wrapper">
        <HeroBanner />
        <Aboutus />
        <FormCard />
        <Instructor />
      </main>
    </div>
  );
};
export default Index;
