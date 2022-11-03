import React, { useState } from "react";
import "./style.css";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";
const FormCardSecond = () => {
  const [Files, setFiles] = useState("");
  const [Module, setModule] = useState("");
  const [spantext1, setspantext1] = useState("");
  const [spantext2, setspantext2] = useState("");
  const [spantext3, setspantext3] = useState("");
  const [spantext4, setspantext4] = useState("");
  const [spantext5, setspantext5] = useState("");
  const [Files2, setFiles2] = useState("");
  const [NameSupervisor, setNameSupervisor] = useState("");
  const [Dollar, setDollar] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const handleclick = async (e) => {
    e.preventDefault();
    const course = {
      Files,
      Module,
      spantext1,
      spantext2,
      spantext3,
      spantext4,
      spantext5,
      Files2,
      NameSupervisor,
      Dollar,
    };
    try {
      const response = await api.post("/SecondCards", course);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="FormCardSeconds">
      <form>
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
          name="Module"
          id="Module"
          placeholder="Module"
          onChange={(e) => setModule(e.target.value)}
        />
        <input
          type="text"
          name="spantext1"
          id="spantext1"
          placeholder="NbrStar"
          onChange={(e) => setspantext1(e.target.value)}
        />

        <input
          type="text"
          name="spantext2"
          id="spantext2"
          placeholder="NbrStudent"
          onChange={(e) => setspantext2(e.target.value)}
        />
        <input
          type="text"
          name="spantext3"
          id="spantext3"
          placeholder="NbrHour"
          onChange={(e) => setspantext3(e.target.value)}
        />
        <input
          type="text"
          name="spantext4"
          id="spantext4"
          placeholder="Lecture"
          onChange={(e) => setspantext4(e.target.value)}
        />
        <input
          type="text"
          name="spantext5"
          id="spantext5"
          placeholder="Medium"
          onChange={(e) => setspantext5(e.target.value)}
        />
        <input
          value={Files}
          onChange={(e) => setFiles2(e.target.value)}
          type="file"
          id="myfile"
          name="myfile"
          accept="image/*"
          multiple="false"
        />
        <input
          type="text"
          name="nameSupervisor"
          id="nameSupervisor"
          placeholder="nameSupervisor"
          onChange={(e) => setNameSupervisor(e.target.value)}
        />
        <input
          type="text"
          name="Dollar"
          id="Dollar"
          placeholder="Price$$"
          onChange={(e) => setDollar(e.target.value)}
        />
        <button variant="contained" color="secondary" onClick={handleclick}>
          Add Course
        </button>
      </form>
    </div>
  );
};

export default FormCardSecond;
