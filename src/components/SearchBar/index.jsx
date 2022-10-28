import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "./style.css";
const SearchBar = () => {
  return (
    <div class="content">
      <header>
        
        <div class="search-wrap">
          <BsSearch styles={{color: "red"}}/>
          <input type="search" placeholder="recherche" />
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
