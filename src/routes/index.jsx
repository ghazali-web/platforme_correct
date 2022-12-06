import { Routes, Route } from "react-router-dom";
import React from "react";
import { SignIn, Signup, Home, Quiz, FormeCourseAdded } from "../components"; //Navbar,
import Breakout from "../games/breakout";

// import { Courses, Instructor } from "../sections";

const ConfigRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Game" element={<Breakout />} />
      <Route path="Quiz" element={<Quiz />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<Signup />} />
      <Route path="FormeCourseAdded" element={<FormeCourseAdded />} />
      <Route path="*" element={<h1>error</h1>} />
    </Routes>
  );
};

export default ConfigRouter;
