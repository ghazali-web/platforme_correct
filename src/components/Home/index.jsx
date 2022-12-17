import React from "react";
import "./style.css";
import { Chart, FormCardSecond, FormCard, Navbar, Sidebar } from "../"; // Quiz,
import { Aboutus, Courses, HeroBanner, Instructor } from "../../sections";

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
        {/* <Courses /> */}
        <FormCardSecond />
        {/* <Sidebar /> */}
        {/* <Chart /> */}
      </main>
    </div>
  );
};
export default Index;
