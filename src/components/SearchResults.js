import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  return (
    results &&
    results.length > 0 && (
      <p className="results">
        {results.map((image, index) => (
          <img key={index} className="image" src={image} />
        ))}
      </p>
    )
  );
};

export default SearchResults;
