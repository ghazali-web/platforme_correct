import React from "react";
import { Chart, FormCard, Navbar, Quiz, Sidebar } from "../";
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
        <Sidebar />
        <Chart />
        <Quiz />
      </main>
    </div>
  );
};
export default index;
