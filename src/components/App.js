import React, { useState, useEffect } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Popup from "./Popup";

const App = () => {
  const [searchResults, setSearchResults] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [src, setSrc] = useState({ href: "", title: "" });
  const handleClick = (event) => {
    setSrc({ href: event.target.src, title: event.target.title });
    setButtonPopup(true);
  };

  useEffect(() => {
    let images = Array.from(document.getElementsByClassName("image"));
    images.forEach((image) => {
      image.addEventListener("click", handleClick);
    });
    // cleanup this component
    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", handleClick);
      });
    };
  }, [searchResults]);

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} />
      {src && (
        <Popup
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          src={src.href}
          title={src.title}
        ></Popup>
      )}
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
