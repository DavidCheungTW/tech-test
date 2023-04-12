import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (results === undefined) {
    return <div className="results"></div>;
  }

  if (results.length === 0) {
    return (
      <div className="results">
        <h3>No image found, please try again!</h3>
      </div>
    );
  }

  return (
    <div className="results">
      {results.map((image, index) => (
        <img
          key={index}
          className="image"
          src={image.href}
          alt={image.title}
          title={image.title}
        />
      ))}
    </div>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
