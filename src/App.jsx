import React from "react";
import "./App.css";
import { Navbar ,Signin,Signup } from "./components";
import { Aboutus, HeroBanner, Instructor, Courses } from "./sections";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="Wrapper">
        <HeroBanner />
        <Aboutus />
        <Instructor />
        <Courses />
        {/* <Signin /> */}
        {/* <Signup /> */}
      </main>
    </div>
  );
}
export default App;
