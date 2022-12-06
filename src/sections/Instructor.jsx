import React, { useState, useEffect } from "react";
import { Card } from "../components";
import { API, fetchproducts } from "../api/posts";
// import teacher1 from "../assets/images/Teacher/teacher1.png";
// import teacher2 from "../assets/images/Teacher/teacher2.png";
// import teacher3 from "../assets/images/Teacher/teacher3.png";
// import teacher4 from "../assets/images/Teacher/teacher4.png";
import { AiFillStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiBookmarklet } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
// --------------------------------------
// const styles = {
//   postedcard: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     margin: "15px",
//   },
// };
const Instructor = () => {
  const [getCard, setgetCard] = useState([]);
  const getdata = async () => {
    try {
      const response = await fetchproducts();
      console.log(response);
      setgetCard(response);
      
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      {getCard &&
        getCard.map((result, index) => (
          <div
            key={index}
            style={{
              display: "row",
              justifyContent: "spaceBetween",
              marginLeft: "200px",
            }}
          >
            <Card
              img={result.imagesCard}
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
    </div>
  );
};
export default Instructor;
