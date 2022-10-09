import React from "react";
import { Card } from "../components";
import teacher1 from "../assets/images/Teacher/teacher1.png";
import teacher2 from "../assets/images/Teacher/teacher2.png";
import teacher3 from "../assets/images/Teacher/teacher3.png";
import teacher4 from "../assets/images/Teacher/teacher4.png";
import { AiFillStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiBookmarklet } from "react-icons/gi";

const Instructor = () => {
  return (
    <Card
      Instructor={"Instructor"}
      img={teacher1}
      NameTeacher={"Zain Khan"}
      Module={"UI/UX Designer"}
      text1={"Join Now"}
      Icon1={GiBookmarklet}
      spantext1={"19 Courses"}
      Icon2={HiUserGroup}
      spantext2={"25,599 Studients"}
      Icon3={AiFillStar}
      spantext3={"4.8"}
      text2={"See More"}
    />
  );
};

export default Instructor;
