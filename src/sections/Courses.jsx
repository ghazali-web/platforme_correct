import React from 'react'
import { CardSecond } from '../components';
import module1 from "../assets/images/module/module1.png";
import { AiFillStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import {GiRead, GiNetworkBars } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";

const Courses = () => {
  return (
    <CardSecond
      Instructor={"Students Favorite"}
      pouplar={"popular courses"}
      img={module1}
      Icon1={AiFillStar}
      spantext1={"4.8"}
      Icon2={HiUserGroup}
      spantext2={"25,599 Studients"}
      Icon3={Ri24HoursLine}
      spantext3={"12 hrs 15min"}
      Icon4={GiRead}
      spantext4={"Lecture"}
      Icon5={GiNetworkBars}
      spantext5={"Medium"}
      // img={logo}
      nameSupervisor={"Kane Willsons"}
      Dollar={"$119.99"}
    />
  );
}

export default Courses