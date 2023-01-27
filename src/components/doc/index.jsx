import "./style.css";
import React from "react";

const FormCoursesAdded = () => {
  return (
    <section>
      <div className="bordure">
        <a className="iframe-link" href="https://www.wikipedia.org/">
          WIki
          <div>
            <iframe
              title="Machine Learning"
              src="https://www.wikipedia.org/"
              width="2500"
              height="1500"
              allowFullScreen={true}
            ></iframe>
          </div>
        </a>
        <div className="slide">
          <iframe
            title="Machine Learning"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQWZkaw8swFkxtnxXTVsSvPSgMjkNmH0e8DReS6RAPmLCwmgJ55FBLm3hzAqdpH2FCWu_bW34tS0Ufv/embed?start=false&loop=false&delayms=3000"
            width="960"
            height="569"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FormCoursesAdded;
