import React from "react";
import "./App.css";
import logo from "./assets/images/uni-mit.png";
import logo1 from "./assets/images/uni-nan.png";
import {AiFillStar}from "react-icons/ai"
import {
  Card,
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
          img={logo}
          NameTeacher={"Zain Khan"}
          Module={"UI/UX Designer"}
          text1={"Join Now"}
          classNameIcon1={"fa-solid fa-graduation-cap"}
          spantext1={"19 Courses"}
          classNameIcon2={"fa-thin fa-screen-users"}
          spantext2={"25,599 Studients"}
          // classNameIcon3={"fa-solid fa-star"}
          Icon3={AiFillStar}
          spantext3={"4.8"}
        />

        {/* // ---------popular courses ------  */}
        {/* ------------second card-----------  */}
        <Card
          Instructor={"Students Favorite"}
          pouplar={"popular courses"}
          img={logo1}
          classNameIcon1={"fa-solid fa-star"}
          spantext1={"4.8"}
          classNameIcon2={"fa-thin fa-screen-users"}
          spantext2={"25,599 Studients"}
          Icon3={AiFillStar}
          spantext3={"12 hrs 15min"}
          classNameIcon4={"fa-sharp fa-solid fa-book-open-reader"}
          spantext4={"Lecture"}
          classNameIcon5={"fa-sharp fa-solid fa-signal"}
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
