import React from "react";
import PropTypes from "prop-types";
import "../styles/popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <img src={props.src} alt={props.title} width="100%" />
        <p className="popup-title">{props.title}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
