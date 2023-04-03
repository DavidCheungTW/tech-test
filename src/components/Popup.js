import React from "react";
import "../styles/popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <img src={props.src} width="100%" />
        <p>{props.title}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
