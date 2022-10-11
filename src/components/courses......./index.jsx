import React from "react";
import "./style.css";
const index = () => {
  return (
    <div>
      
      <form>
        <label htmlFor="myfile">Select files:</label>
        <input type="file" id="myfile" name="myfile" multiple />
        <input type="submit" />
      </form>
    </div>
  );
};

export default index;
