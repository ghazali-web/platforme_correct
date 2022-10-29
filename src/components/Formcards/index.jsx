import React, { useState } from "react";
import "./style.css";

const Formcard = () => {
  const [Instructor, setInstructor] = useState("");
  const [Files, setFiles] = useState("");
  const [NameTeacher, setNameTeacher] = useState("");
  const [Module, setModule] = useState("");
  const [spantext1, setspantext1] = useState("");
  const [spantext2, setspantext2] = useState("");
  const [spantext3, setspantext3] = useState("");
  const handleclick = (e) => {
    e.preventDefault();
    const course = {
      Instructor,
      Files,
      NameTeacher,
      Module,
      spantext1,
      spantext2,
      spantext3,
    };
    fetch("localhost :3002/cards/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    }).then(() => {
      console.log("New card added");
    });
  };

  return (
    <div className="formcards">
      <form>
        <input
          type="text"
          name="Instructor"
          id="Instructor"
          placeholder="Instructor"
          onChange={(e) => setInstructor(e.target.value)}
        />
        <label htmlFor="myfile">Select images:</label>
        <input
          value={Files}
          onChange={(e) => setFiles(e.target.value)}
          type="file"
          id="myfile"
          name="myfile"
          accept="image/*"
          multiple="false"
        />
        <input
          type="text"
          name="NameTeacher"
          id="NameTeacher"
          placeholder="NameTeacher"
          onChange={(e) => setNameTeacher(e.target.value)}
        />
        <input
          type="text"
          name="Module"
          id="Module"
          placeholder="Module"
          onChange={(e) => setModule(e.target.value)}
        />
        <input
          type="text"
          name="spantext1"
          id="spantext1"
          placeholder="NbrBook"
          onChange={(e) => setspantext1(e.target.value)}
        />

        <input
          type="text"
          name="spantext2"
          id="spantext2"
          placeholder="NbrUserGroup"
          onChange={(e) => setspantext2(e.target.value)}
        />
        <input
          type="text"
          name="spantext3"
          id="spantext3"
          placeholder="NbrStar"
          onChange={(e) => setspantext3(e.target.value)}
        />
        <button variant="contained" color="secondary" onClick={handleclick}>
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default Formcard;
