import "./style.css";
import React from "react";
import { Paper } from "@mui/material";

const index = () => {
  const [getcourse, setgetcourse] = useState([]);
  useEffect(() => {
    fetch("localhost:3002/formCourses/")
      .then((res) => res.json())
      .then((result) => setgetcourse(result));
  }, []);
  return (
    <section>
      <div className="bordure">
        {getcourse.map((result, index) => {
          <div className="displayColumn" key={index}>
            {getcourse.map((result, i) => {
              <Paper key={i}>{result}</Paper>;
            })}
            result
          </div>;
        })}
      </div>
    </section>
  );
};

export default index;
