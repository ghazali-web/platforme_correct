import "./style.css";
import React from "react";
import { Paper } from "@mui/material";
import api from "../../api/posts";

const index = () => {
  const [getcourse, setgetcourse] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/formCourses");
        setgetcourse(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);
  // useEffect(() => {
  //   fetch("localhost:3002/formCourses/")
  //     .then((res) => res.json())
  //     .then((result) => setgetcourse(result));
  // }, []);
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
