import React, { useState, useEffect } from "react";
import { Card } from "../components";
import { API } from "../api/posts";
// import teacher1 from "../assets/images/Teacher/teacher1.png";
// import teacher2 from "../assets/images/Teacher/teacher2.png";
// import teacher3 from "../assets/images/Teacher/teacher3.png";
// import teacher4 from "../assets/images/Teacher/teacher4.png";
import { AiFillStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiBookmarklet } from "react-icons/gi";
// --------------------------------------
const Instructor = () => {
  const [getCard, setgetCard] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get("/card");
        setgetCard(response.data);
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
  //   fetch("localhost:3002/card")
  //     .then((res) => res.json())
  //     .then((result) => setgetCard(result));
  // }, []);

  // // -----------------------------------
  // const [spantext3, setspantext3] = useState("");
  // const [bool, setbool] = useState("false");
  // const [increment, setincrement] = useState(258921);
  // const aime = () => {
  //   setincrement(increment + 1);
  //   setbool(bool = false);
  // };
  // const aimeJamais = () => {
  //   setincrement(increment - 1);
  //   setbool(bool = true);
  // };

  // bool ? (
  //     <button onClick={() => aime()} />
  //   ) : (
  //     <button onClick={() => aimeJamais} />
  //   );

  // const handleclick = (e) => {
  //   e.preventDefault();
  //   const starNbr = { spantext3 };
  //   fetch("", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(starNbr),
  //   }).then(() => {
  //     console.log("New Student added");
  //   });

  return (
    <section id="Instructor">
      {getCard.map((result, index) => (
        <div key={index}>
          <Card
            img={result.img}
            NameTeacher={result.NameTeacher}
            Module={result.Module}
            text1={"Join Now"}
            Icon1={GiBookmarklet}
            spantext1={result.spantext1}
            Icon2={HiUserGroup}
            spantext2={result.spantext2}
            Icon3={AiFillStar}
            spantext3={result.spantext3}
            text2={"See More"}
          />
        </div>
      ))}
    </section>
  );
};
export default Instructor;
