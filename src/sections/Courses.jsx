import React, { useState,useEffect } from "react";
import module1 from "../assets/images/module/module1.png";
import picTeacher from "../assets/images/Teacher/teacher1.png";
import { AiFillStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiRead, GiNetworkBars } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";
import { CardSecond } from "../components";
import teacher1 from "../assets/images/Teacher/teacher1.png";
import teacher2 from "../assets/images/Teacher/teacher2.png";
import teacher3 from "../assets/images/Teacher/teacher3.png";
import teacher4 from "../assets/images/Teacher/teacher4.png";
import { GiBookmarklet } from "react-icons/gi";

const Courses = () => {
  const [getCardSecond, setgetCardSecond] = useState([]);
  useEffect(() => {
    // localhost:3000/user product ...etc
    fetch("localhost:3002/secondCardsRouter")
      .then((res) => res.json())
      .then((result) => setgetCardSecond(result));
  }, []);
  return (
    <section id="Courses">
      {getCardSecond.map((result, index) => {
        <div key={index}>
          <CardSecond
            img={result.Files}
            Module={result.Module}
            spantext1={result.spantext1}
            spantext2={result.spantext2}
            spantext3={result.spantext3}
            spantext4={result.spantext4}
            spantext5={result.spantext5}
            img2={result.Files2}
            nameSupervisor={result.NameSupervisor}
            Dollar={result.Dollar}
          />
        </div>;
      })}
    </section>
  );
};

export default Courses;
