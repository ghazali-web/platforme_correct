import React from "react";
import "./App.css";
import {
  Card,
  AboutUs,
  SharedCompany,
  Navbar,
  ElearningImages,
  StartLearning,
} from "./components";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="Wrapper">
        <div className="align-row">
          <StartLearning />

          <ElearningImages />
          <div>
            <SharedCompany />
          </div>
        </div>
        <div>
          <AboutUs />
        </div>
        <Card Instructor image NameTeacher Module classNameIcon1 spantext />
      </main>
    </div>
  );
}
export default App;
