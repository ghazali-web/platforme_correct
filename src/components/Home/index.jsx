import React from "react";
import "./style.css";
import { Chart, FormCardSecond, FormCard, Navbar, Quiz, Sidebar } from "../";
import { Aboutus, Courses, HeroBanner, Instructor } from "../../sections";
const index = () => {
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
        <Courses />
        <FormCardSecond />
        <Sidebar />
        <Chart />
      </main>
    </div>
  );
};
export default index;
