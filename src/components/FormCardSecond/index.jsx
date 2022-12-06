import React from "react"; //, { useState }
import "./style.css";
import { creatProductSecond } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const FormCardSecond = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      imagesSecondCard: "",
      nbrStar: "",
      nbrStudent: "",
      nbrHour: "",
      Lecture: "",
      Medium: "",
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
      creatProductSecond(formData);
      navigate("/");
    },
  });

  return (
    <div className="FormCardSeconds">
      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="imagesSecondCard">Select images:</label> */}
        <input
          type="file"
          multiple={false}
          id="imagesSecondCard"
          accept="image/*"
          name="imagesSecondCard"
          onChange={(e) =>
            formik.setFieldValue("imagesSecondCard", e.currentTarget.files[0])
          }
        />

        <input
          type="text"
          id="nbrStar"
          placeholder="NbrStar"
          name="nbrStar"
          value={formik.values.nbrStar}
          onChange={formik.handleChange}
        />

        <input
          type="text"
          id="nbrStudent"
          placeholder="NbrStudent"
          name="nbrStudent"
          value={formik.values.nbrStudent}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="nbrHour"
          placeholder="NbrHour"
          name="nbrHour"
          value={formik.values.nbrHour}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="Lecture"
          placeholder="Lecture"
          name="Lecture"
          value={formik.values.Lecture}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          id="Medium"
          placeholder="Medium"
          name="Medium"
          value={formik.values.Medium}
          onChange={formik.handleChange}
        />
        <input
          type="file"
          id="imagesCardSupervisor"
          accept="image/*"
          multiple={false}
          name="imagesCardSupervisor"
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
        <button type="submit" variant="contained" color="secondary">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default FormCardSecond;
