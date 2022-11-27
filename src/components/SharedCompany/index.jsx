import react from "react";
import "./style.css"
import Image from "../Image";
import elipse1 from "../../assets/images/company/Ellipse1.png";
import elipse2 from "../../assets/images/company/Ellipse2.png";
import elipse3 from "../../assets/images/company/Ellipse3.png";
import elipse4 from "../../assets/images/company/Ellipse4.png";
import elipse5 from "../../assets/images/company/Ellipse5.png";
import elipse6 from "../../assets/images/company/Ellipse6.png";

const index = () => {
  return (
    <div className="headerShared">
      <div className="partner">
        <span>
          <h1> 25k</h1>Companies that partner with us
        </span>
      </div>
      <div className="partnerLogo">
        <Image image={elipse1} />
        <Image image={elipse2} />
        <Image image={elipse3} />
        <Image image={elipse4} />
        <Image image={elipse5} />
        <Image image={elipse6} />
      </div>
    </div>
  );
};

export default index;
