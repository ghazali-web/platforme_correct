import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "./style.css";
const SearchBar = () => {
  return (
    <div className="content">
      <header>
        <div className="search-wrap">
          <BsSearch styles={{ color: "red" }} />
          <input type="search" placeholder="recherche" />
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
