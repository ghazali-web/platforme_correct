import { Routes, Route } from "react-router-dom";
import React from "react";
import { SignIn, Signup, Home, Navbar } from "../components";
import { Courses, Instructor } from "../sections";

const ConfigRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route path="signin" element={<SignIn />}>
          <Navbar />
          <Route
            path="courses"
            element={
              <div>
                <Instructor /> <Courses />
              </div>
            }
          />
        </Route> */}
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<h1>error</h1>} />
      </Route>
    </Routes>
  );
};

export default ConfigRouter;
