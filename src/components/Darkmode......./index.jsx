import React from "react";
import "./style.css";
function darkMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}
const index = () => {
  return (
    <div className="Darkmode">
      <h3 id="DarkModetext">Dark Mode is OFF</h3>
      <button onclick="darkMode()">Darkmode</button>
      <button onclick="lightMode()">LightMode</button>
    </div>
  );
};

export default index;
