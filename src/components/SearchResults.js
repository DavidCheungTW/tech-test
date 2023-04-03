import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  return (
    results &&
    results.length > 0 && (
      <p className="results">
        {results.map((image, index) => (
          <img
            key={index}
            className="image"
            src={image.href}
            title={image.title}
          />
        ))}
      </p>
    )
  );
};

export default SearchResults;
