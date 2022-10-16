import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "./style.css";
const SearchBar = () => {
  return (
    <div class="content">
      <header>
        <p>
          <label for="menu">
            <AiOutlineMenu />
          </label>
        </p>
        <div class="search-wrap">
          <BsSearch />
          <input type="search" placeholder="recherche" />
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
