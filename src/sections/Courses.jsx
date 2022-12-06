import React, { useState, useEffect } from "react";
// import module1 from "../assets/images/module/module1.png";
// import picTeacher from "../assets/images/Teacher/teacher1.png";
// import { AiFillStar } from "react-icons/ai";
// import { HiUserGroup } from "react-icons/hi";
// import { GiRead, GiNetworkBars } from "react-icons/gi";
// import { Ri24HoursLine } from "react-icons/ri";
import { CardSecond } from "../components";
// import teacher1 from "../assets/images/Teacher/teacher1.png";
// import teacher2 from "../assets/images/Teacher/teacher2.png";
// import teacher3 from "../assets/images/Teacher/teacher3.png";
// import teacher4 from "../assets/images/Teacher/teacher4.png";
// import { GiBookmarklet } from "react-icons/gi";
import { API } from "../api/posts";
const Courses = () => {
  const [getCardSecond, setgetCardSecond] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get("/secondCardsRouter");
        setgetCardSecond(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   // localhost:3000/user product ...etc
  //   fetch("localhost:3002/secondCardsRouter")
  //     .then((res) => res.json())
  //     .then((result) => setgetCardSecond(result));
  // }, []);
  return (
    <section id="Courses">
      {getCardSecond.map((result, index) => (
        <div key={index}>
          <CardSecond
            img={result.Files}
            spantext1={result.nbrStar}
            spantext2={result.nbrStudent}
            spantext3={result.nbrHour}
            spantext4={result.Lecture}
            spantext5={result.Medium}
            img2={result.Files}
            nameSupervisor={result.nameSupervisor}
            Dollar={result.Dollar}
          />
        </div>
      ))}
    </section>
  );
};

export default Courses;
