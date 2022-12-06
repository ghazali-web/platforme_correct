import React from "react";
import "./style.css";
import { Chart, FormCardSecond, FormCard, Navbar, Sidebar } from "../"; // Quiz,
import { Aboutus, Courses, HeroBanner, Instructor } from "../../sections";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();

    navigate("signin");
  };
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
        <button onClick={Logout}> log out </button>
      </main>
    </div>
  );
};
export default Index;
