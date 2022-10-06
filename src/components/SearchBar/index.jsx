import React from "react";
import "./style.css";
const SearchBar = () => {
  return (
    <div class="content">
      <header>
        <p>
          <label for="menu">
            <i class="fa fa-bars"></i>
          </label>
        </p>
        <div class="search-wrap">
          <i class="fa fa-search"></i>
          <input type="search" placeholder="recherche" />
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
