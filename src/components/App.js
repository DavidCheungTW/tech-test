import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Popup from "./Popup";
import Slideshow from "./Slideshow";
import "../styles/app.css";

const App = () => {
  const [searchResults, setSearchResults] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [src, setSrc] = useState({ href: "", title: "" });
  const [slideOn, setSlideOn] = useState(false);

  const handleClick = (event) => {
    setSrc({ href: event.target.src, title: event.target.title });
    setButtonPopup(true);
  };

  useEffect(() => {
    const images = Array.from(document.getElementsByClassName("image"));
    images.forEach((image) => {
      image.addEventListener("click", handleClick);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", handleClick);
      });
    };
  }, [searchResults, slideOn]);

  return (
    <div className="app">
      {searchResults && searchResults.length > 0 && (
        <button
          className="slide-on-mode"
          type="button"
          onClick={() => {
            setSlideOn(!slideOn);
          }}
        >
          {slideOn ? "Slide Off" : "Slide On"}
        </button>
      )}
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} setSlideOn={setSlideOn} />
      {src && (
        <Popup
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          src={src.href}
          title={src.title}
        ></Popup>
      )}
      {!slideOn && <SearchResults results={searchResults} />}
      {slideOn && <Slideshow results={searchResults} />}
    </div>
  );
};

export default App;
