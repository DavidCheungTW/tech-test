import React, { useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages.js";
import "../styles/search.css";

const Search = ({ setSearchResults, setSlideOn }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSlideOn(false);
    setSearchResults(await getImages(value));
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setSlideOn: PropTypes.func.isRequired,
};
