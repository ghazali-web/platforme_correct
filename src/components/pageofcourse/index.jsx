import "./style.css";
import { AddCourses, CardAddCourse } from "..";
import { fetchformaddcourse } from "../../api/posts";
import React, { useEffect, useState } from "react";

const Indew = () => {
  const [getCard, setgetCard] = useState([]);
  const getdata = async () => {
    try {
      const response = await fetchformaddcourse();
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
    <div
      className="parent"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "spaceBetween",
        width: "100%",
        height: "100%",
      }}
    >
      {getCard &&
        getCard.map((result, index) => (
          <div key={index}>
            <span>{result.date}</span>
            <CardAddCourse
              urlfile={result.file}
              urlpdf={result.pdf}
              urlvideo={result.video}
            />
          </div>
        ))}
      <div></div>
      <AddCourses />
    </div>
  );
};

export default Indew;
