import React from "react";
import { useEffect, useState } from "react";
const [course, setcouse] = useState([]);
useEffect(() => {
  fetch("/FormCourses")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((resjson) => {
      setcouse(resjson);
    });
});

import "./style.css";
const index = () => {
  return (
    <div className="borderCourse">
      {course.map((fromcourse) => {
        <p>{fromcourse}</p>;
      })}
      <TextField id="" label="" variant="" />
      <script>
        date = new Date().toLocaleDateString(); document.write(date);
      </script>
      <form>
        <label htmlFor="myfile">Select files:</label>
        <input type="file" id="myfile" name="myfile" multiple />
        <input type="submit" />
      </form>
    </div>
  );
};

export default index;
