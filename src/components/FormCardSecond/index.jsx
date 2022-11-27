import React, { useState } from "react";
import "./style.css";
import {creatProductSecond} from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const FormCardSecond = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      imagesSecondCard: "",
      spantext1: "",
      spantext2: "",
      spantext3: "",
      spantext4: "",
      spantext5: "",
      imagesCardSupervisor: "",
      NameSupervisor: "",
      Dollar: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      creatProductSecond.post("/secondCardsRouter", formData);
      navigate("/");
    },
  });
  // const [imagesSecondCard, setimagesSecondCard] = useState("");
  // const [spantext1, setspantext1] = useState("");
  // const [spantext2, setspantext2] = useState("");
  // const [spantext3, setspantext3] = useState("");
  // const [spantext4, setspantext4] = useState("");
  // const [spantext5, setspantext5] = useState("");
  // const [imagesCardSupervisor, setimagesCardSupervisor] = useState("");
  // const [NameSupervisor, setNameSupervisor] = useState("");
  // const [Dollar, setDollar] = useState("");
  // const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();
  // const handleclick = async (e) => {
  //   e.preventDefault();
  //   const course = {
  //     imagesSecondCard,
  //     spantext1,
  //     spantext2,
  //     spantext3,
  //     spantext4,
  //     spantext5,
  //     imagesCardSupervisor,
  //     NameSupervisor,
  //     Dollar,
  //   };
  //   try {
  //     const response = await api.post("/secondCardsRouter", course);
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  return (
    <div className="FormCardSeconds">
      <form method="post" encType="multipart/form-data">
        <label htmlFor="myfile">Select images:</label>
        <input
          type="file"
          multiple={false}
          id="myfile"
          accept="image/*"
          name="imagesSecondCard"
          onChange={(e) =>
            formik.setFieldValue("imagesSecondCard", e.currentTarget.files[0])
          }
        />

        <input
          type="text"
          id="spantext1"
          placeholder="NbrStar"
          name="spantext1"
          value={formik.values.spantext1}
          onChange={formik.handleChange}
        />

        <input
          type="text"
          id="spantext2"
          placeholder="NbrStudent"
          name="spantext2"
          value={formik.values.spantext2}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="spantext3"
          placeholder="NbrHour"
          name="spantext3"
          value={formik.values.spantext3}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="spantext4"
          placeholder="Lecture"
          name="spantext4"
          value={formik.values.spantext4}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="spantext5"
          placeholder="Medium"
          name="spantext5"
          value={formik.values.spantext5}
          onChange={formik.handleChange}
        />
        <input
          type="file"
          id="myfilesecond"
          accept="image/*"
          multiple={false}
          name="myfilesecond"
          onChange={(e) =>
            formik.setFieldValue(
              "imagesCardSupervisor",
              e.currentTarget.files[0]
            )
          }
        />
        <input
          type="text"
          id="nameSupervisor"
          placeholder="nameSupervisor"
          name="nameSupervisor"
          value={formik.values.NameSupervisor}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="Dollar"
          placeholder="Price$$"
          name="Dollar"
          value={formik.values.Dollar}
          onChange={formik.handleChange}
        />
        <button variant="contained" color="secondary">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default FormCardSecond;
