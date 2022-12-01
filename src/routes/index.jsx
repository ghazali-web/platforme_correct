import { Routes, Route } from "react-router-dom";
import React from "react";
import { SignIn, Signup, Home,  Game, Quiz } from "../components";//Navbar,
// import { Courses, Instructor } from "../sections";

const ConfigRouter = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Game" element={<Game />} />
      <Route path="Quiz" element={<Quiz />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<h1>error</h1>} />
    </Routes>
  );
};

export default ConfigRouter;
