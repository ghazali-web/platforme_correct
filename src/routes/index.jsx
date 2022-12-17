import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { SignIn, Signup, Home, Quiz, Pageofcourse } from "../components"; //Navbar,
import Breakout from "../games/breakout";

// import { Courses, Instructor } from "../sections";

const ConfigRouter = () => {
  const [active, setactive] = useState(true);
  setactive(localStorage.getItem("active"));

  // localStorage.setItem("active", true);
  // function myTimer() {}
  // useEffect(() => {
  //   if (localStorage.getItem("active")) {
  //     setactive(true);
  //     const myinterval = setInterval(myTimer, 10000);
  //     clearInterval(myinterval);
  //     setactive(false);
  //   }
  // }, [active]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Game" element={<Breakout />} />

      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<Signup />} />

      {active ? (
        <Route path="FormeCourseAdded" element={<Pageofcourse />} />
      ) : (
        <Route path="Quiz" element={<Quiz />} />
      )}
      <Route path="*" element={<h1>error</h1>} />
    </Routes>
  );
};

export default ConfigRouter;
