import { Switch } from "@mui/material";
import React from "react";
import { Chart, Navbar, Sidebar } from "../";
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
        <Instructor />
        <Courses />
        <Sidebar />
        <Chart />
        {/* <Quiz /> */}
        <Switch />
        {/* <Game /> */}
        {/* <Signup SignIn /> */}
      </main>
    </div>
  );
};

export default index;
