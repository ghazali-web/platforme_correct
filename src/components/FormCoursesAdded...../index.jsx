import "./style.css";
import React from "react";
import { Navbar } from "..";

const FormCoursesAdded = () => {
  return (
    <section>
      <header className="App-header">
        <Navbar />
      </header>
      <div className="bordures">
        <div className="Nbody">
          <h1>
            <h2>Description:</h2>
            <span>
              In Programming with Mosh’s Python Machine Learning Tutorial, he
              shows you how to learn how to predict the kind of music people
              like. The video outlines various machine learning libraries and
              tools, Jupyter shortcuts, data preparation, persisting models, and
              visualizing a decision tree as well.
            </span>
            <a href="/video">Click here to watch for learning</a>
          </h1>
        </div>
        <div className="Nbody">
          <h2>Description:</h2>
          <span>
            In Programming with Mosh’s Python Machine Learning Tutorial, he
            shows you how to learn how to predict the kind of music people like.
            The video outlines various machine learning libraries and tools,
            Jupyter shortcuts, data preparation, persisting models, and
            visualizing a decision tree as well.
          </span>
          <h1>
            <a href="/docs">view course</a>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FormCoursesAdded;
