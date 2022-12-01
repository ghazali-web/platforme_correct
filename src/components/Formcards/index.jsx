import React from "react";
import "./style.css";
import { creatProduct } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import axios from "axios"
// import { Route, Switch, useHistory } from "react-router-dom";
const Formcard = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      imagesCard: "",
      NameTeacher: "",
      Module: "",
      spantext1: "",
      spantext2: "",
      spantext3: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      creatProduct(formData); //this for posting with axios
      navigate("/");
    },
  });

  // const [imagesCard, setimagesCard] = useState("");
  // const [NameTeacher, setNameTeacher] = useState("");
  // const [Module, setModule] = useState("");
  // const [spantext1, setspantext1] = useState("");
  // const [spantext2, setspantext2] = useState("");
  // const [spantext3, setspantext3] = useState("");
  // const [posts, setPosts] = useState([]);

  // const handleclick = async (e) => {
  //   e.preventDefault();
  //   const course = {
  //     imagesCard,
  //     NameTeacher,
  //     Module,
  //     spantext1,
  //     spantext2,
  //     spantext3,
  //   };
  //   try {
  //     const response = await creatProduct(course);
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  return (
    <div className="formcards">
      <form method="post" encType="multipart/form-data">
        {/* <input
          type="text"
          name="Instructor"
          id="Instructor"
          placeholder="Instructor"
          onChange={(e) => setInstructor(e.target.value)}
        /> */}
        <label htmlFor="myfilecard">Select images:</label>
        <input
          type="file"
          id="myfilecard"
          accept="image/*"
          multiple={false}
          name="imagesCard"
          // value={formik.values.imagesCard}
          onChange={(e) =>
            formik.setFieldValue("imagesCard", e.currentTarget.files[0])
          }
        />

        <input
          type="text"
          name="NameTeacher"
          id="NameTeachercard"
          placeholder="NameTeacher"
          value={formik.values.NameTeacher}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="Modulecard"
          placeholder="Module"
          name="Module"
          value={formik.values.Module}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="spantext1card"
          placeholder="NbrBook"
          name="spantext1"
          value={formik.values.spantext1}
          onChange={formik.handleChange}
        />

        <input
          type="text"
          id="spantext2card"
          placeholder="NbrUserGroup"
          name="spantext2"
          value={formik.values.spantext2}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="spantext3card"
          placeholder="NbrStar"
          name="spantext3"
          value={formik.values.spantext3}
          onChange={formik.handleChange}
        />
        <button
          onSubmit={formik.handleSubmit}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default Formcard;
