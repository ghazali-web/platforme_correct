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
  useEffect(() => {
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   // localhost:3000/user product ...etc
  //   fetch("localhost:3002/secondCardsRouter")
  //     .then((res) => res.json())
  //     .then((result) => setgetCardSecond(result));
  // }, []);
  return (
    <div
      id="Courses"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "spaceBetween",
        width: "100%",
        height: "100%",
      }}
    >
      {getCardSecond &&
        getCardSecond.map((result, index) => (
          <div key={index}>
            <CardSecond
              img={result.imagesSecondCard}
              spantext1={result.nbrStar}
              spantext2={result.nbrStudent}
              spantext3={result.nbrHour}
              spantext4={result.Lecture}
              spantext5={result.Medium}
              img2={result.imagesCardSupervisor}
              nameSupervisor={result.nameSupervisor}
              Dollar={result.Dollar}
            />
          </div>
        ))}
    </div>
  );
};

export default Courses;
