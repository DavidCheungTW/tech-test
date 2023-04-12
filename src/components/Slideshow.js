import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "10px",
  background: "rgba(0,0,0,0.2)",
  color: "white",
  position: "absolute",
  bottom: "8px",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};

const Slideshow = ({ results }) => {
  let slideImages = [];
  let item;

  if (results === undefined) {
    return <></>;
  }

  if (results.length === 0) {
    return <></>;
  }

  if (results) {
    results.forEach((image) => {
      item = { url: image.href, caption: image.title };
      slideImages.push(item);
    });
  }

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url('${slideImage.url}')`,
                backgroundSize: `100% 100%`,
              }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
