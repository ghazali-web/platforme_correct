import React from "react";
import "./style.css";
import { fetchformaddcourse } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const AddCourses = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: "",
      file: "",
      video: "",
      pdf: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      fetchformaddcourse(formData); //this for posting with axios
      navigate("/");
    },
  });

  return (
    //  Getting
    <div className="borderCourse">
      {/* -------------------Posting---------------  */}
      <form onSubmit={formik.handleSubmit}>
        <script
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
        >
          new Date().toLocaleDateString();
        </script>
        {/* <label htmlFor="myfile">Select files:</label> */}

        <input
          type="text"
          id="files"
          multiple={false}
          accept="file/*"
          placeholder="enter url of video"
          name="file"
          value={formik.values.file}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="video"
          multiple={false}
          accept="video/*"
          placeholder="enter url of video"
          name="video"
          value={formik.values.video}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="myfile"
          multiple={false}
          accept=".pdf"
          name="pdf"
          placeholder="enter url of pdf"
          value={formik.values.pdf}
          onChange={formik.handleChange}
        />
        {/* <input  type="submit" /> */}
        <button type="submit" variant="contained" color="secondary">
          submit
        </button>
      </form>
    </div>
  );
};
export default AddCourses;
