import React from "react";
import "./style.css";
import { SiWikipedia } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
const styles = {
  wikipedi: {},
};
const index = () => {
  return (
    <div className="navbarwiki">
      <div class="nav-barwiki-brand">
        <div>
          <SiWikipedia />
          <p className="learnwiki">Wikipedia</p>
        </div>
        <div class="search-wrap">
          <BsSearch />
          <input type="search" placeholder="recherche" />
        </div>
      </div>
    </div>
  );
};

export default index;
