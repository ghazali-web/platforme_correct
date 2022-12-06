import "./style.css";
import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { API } from "../../api/posts";
const FormCoursesAdded = () => {
  const [getcourse, setgetcourse] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get("/form");
        setgetcourse(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);
  // useEffect(() => {
  //   fetch("localhost:3002/formCourses/")
  //     .then((res) => res.json())
  //     .then((result) => setgetcourse(result));
  // }, []);
  return (
    <section>
      <div className="bordure">
        <iframe
          title="Machine Learning"
          src="https://docs.google.com/presentation/d/e/2PACX-1vQWZkaw8swFkxtnxXTVsSvPSgMjkNmH0e8DReS6RAPmLCwmgJ55FBLm3hzAqdpH2FCWu_bW34tS0Ufv/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
        {getcourse.map((result, index) => (
          <div className="displayColumn" key={index}>
            {/* {getcourse.map((result, i) => {
            })} */}

            <Paper key={index}>{result}</Paper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormCoursesAdded;
