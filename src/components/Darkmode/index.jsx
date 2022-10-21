import React from "react";
import "./style.css";
function darkMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  content.innerText = "Dark Mode is OFF";
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const index = () => {
  return (
    <div className="Darkmode">
      <h3 id="DarkModetext">Dark Mode is OFF</h3>
      <button onclick="myFunction()"> </button>
    </div>
  );
};

export default index;
