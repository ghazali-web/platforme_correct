import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import { Paper } from "@mui/material";

// -------this is for getting from db ---------
// useEffect(() => {
//   fetch("/FormCourses")
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then((resjson) => {
//       setcouse(resjson);
//     });
// });
//  {course.map((fromcourse) => {
//         <p>{fromcourse}</p>;
//       })}

//  <TextField
//         id=""
//         label=""
//         variant=""
//         value=""
//         onChange={(e) => setcouse(e.target.value)}
//       />

const [getcourse, setgetcourse] = useState([]);
useEffect(() => {
  // localhost:3000/user product ...etc
  fetch("")
    .then((res) => res.json())
    .then((result) => setgetcourse(result));
}, []);
// -----------------this is for posting ------------------
const [Dates, setDates] = useState("");
const [Files, setFiles] = useState("");
const handleclick = (e) => {
  e.preventDefault();
  const course = { Dates, Files };
  fetch("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(course),
  }).then(() => {
    console.log("New Student added");
  });
};

const index = () => {
  return (
    //  Getting
    <div className="borderCourse">
      {getcourse.map((result, i) => {
        <Paper key={i}>
          Id:{getcourse.id} <br />
          date:{getcourse.Date} <br />
          file:{getcourse.File} <br />
        </Paper>;
      })}
      {/* -------------------Posting---------------  */}
      <script value={Dates} onChange={(e) => setDates(e.target.value)}>
        date = new Date().toLocaleDateString(); document.write(date);
      </script>
      <form>
        <label htmlFor="myfile">Select files:</label>
        <input
          value={Files}
          onChange={(e) => setFiles(e.target.value)}
          type="file"
          id="myfile"
          name="myfile"
          multiple="true"
        />
        {/* <input  type="submit" /> */}
        <button variant="contained" color="secondary" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default index;
