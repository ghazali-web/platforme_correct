import React from "react";
import "./App.css";
import logo from "./assets/images/uni-mit.png";
import logo1 from "./assets/images/uni-nan.png";
import { AiFillStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiBookmarklet, GiRead, GiNetworkBars } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";

import {
  teacher1,
  teacher2,
  teacher3,
  teacher4,
} from "./assets/images/Teacher";
import {
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
} from "./assets/images/module";
import {
  Card,
  CardSecond,
  AboutUs,
  SharedCompany,
  Navbar,
  ElearningImages,
  StartLearning,
} from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="Wrapper">
        <div className="align-row">
          <StartLearning />

          <ElearningImages />
          <div>
            <SharedCompany />
          </div>
        </div>
        <div>
          <AboutUs />
        </div>

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

        {/* // ---------popular courses ------  */}
        {/* ------------second card-----------  */}
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
      </main>
    </div>
  );
}
export default App;
