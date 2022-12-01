import React from "react";
import "./style.css";
// import { useState } from "react";
import { API } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const AddCourses = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: "",
      file: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      API.post("/form", formData);
      navigate("/");
    },
  });

  // -----------------this is for posting ------------------
  // const [date, setdate] = useState("");
  // const [file, setfile] = useState("");
  // const [posts, setPosts] = useState([]);

  // const handleclick = async (e) => {
  //   e.preventDefault();
  //   const course = { date, file };
  //   try {
  //     const response = await api.post("/form", course);
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }

  //   fetch("localhost:3002/formCourses/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(course),
  //   }).then(() => {
  //     console.log("New Student added");
  //   });
  // };

  return (
    //  Getting
    <div className="borderCourse">
      {/* -------------------Posting---------------  */}
      <form
        onSubmit={formik.handleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <script
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
        >
          new Date().toLocaleDateString();
        </script>
        <label htmlFor="myfile">Select files:</label>
        <input
          type="file"
          multiple="false"
          name="file"
          value={formik.values.file}
          onChange={formik.handleChange}
        />
        {/* <input  type="submit" /> */}
        <button variant="contained" color="secondary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddCourses;
