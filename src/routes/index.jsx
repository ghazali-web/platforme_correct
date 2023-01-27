import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import {
  SignIn,
  Signup,
  Home,
  Quiz,
  FormeCourseAdded,
  Doc,
  Video,
} from "../components"; //Navbar,
import Breakout from "../games/breakout";

// import { Courses, Instructor } from "../sections";

const ConfigRouter = () => {
  const [active, setactive] = useState("false");
  if (!active) {
    const myInterval = setInterval(myTimer, 1000);
    var count = 0;
    var timeEnd = 10;
    function myTimer() {
      count = count + 1;
      if (count > timeEnd) {
        setactive({ active: true });
        clearInterval(myInterval);
      }
      const date = new Date();
      document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    }
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Game" element={<Breakout />} />

      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<Signup />} />

      <Route path="FormeCourseAdded" element={<FormeCourseAdded />} />

      <Route path="docs" element={<Doc />} />
      <Route path="Video" element={<Video />} />
      <Route path="Quiz" element={<Quiz />} />

      <Route path="*" element={<h1>error</h1>} />
    </Routes>
  );
};

export default ConfigRouter;
