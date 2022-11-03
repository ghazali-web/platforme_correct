import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import { Paper } from "@mui/material";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";

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

// -----------------this is for posting ------------------
const [Dates, setDates] = useState("");
const [Files, setFiles] = useState("");
const [posts, setPosts] = useState([]);
const navigate = useNavigate();

const handleclick = async (e) => {
  e.preventDefault();
  const course = { Dates, Files };
  try {
    const response = await api.post("/formCourses", course);
    const allPosts = [...posts, response.data];
    setPosts(allPosts);
    navigate("/");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
  //   fetch("localhost:3002/formCourses/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(course),
  //   }).then(() => {
  //     console.log("New Student added");
  //   });
};

const index = () => {
  return (
    //  Getting
    <div className="borderCourse">
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
          multiple="false"
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
