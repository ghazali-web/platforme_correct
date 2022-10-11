import React from "react";
import "./App.css";
import { Chart, Navbar, Quiz, SignIn, Signup, Switch } from "./components";
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
        <Chart />
        <Quiz />
        <Switch />
        {/* <Signup SignIn /> */}
      </main>
    </div>
  );
}
export default App;
