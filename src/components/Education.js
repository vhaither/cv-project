import React from "react";

const Education = (props) => {
  const handleCancelClick = () => {
    props.onCancel();
  };

  return (
    <div>
      <div className="forms">
        <input type="text" placeholder="Degree"></input>
        <input type="text" placeholder="School"></input>
        <input type="text" placeholder="From"></input>
        <input type="text" placeholder="To"></input>
      </div>
      <button>Save</button>
      <button onClick={handleCancelClick}>Cancel</button>
    </div>
  );
};

export default Education;
