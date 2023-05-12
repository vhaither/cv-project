import React from "react";
import "./UtilButtons.css";

const UtilButtons = () => {
  return (
    <div className="utilButtons">
      <button>Auto Fill Form</button>
      <button className="blueButton hideForDesktop">Preview CV</button>
      <button className="greenButton">Download PDF</button>
    </div>
  );
};

export default UtilButtons;
