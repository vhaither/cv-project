import React from "react";

const WorkExperience = (props) => {
  const handleCancelClick = () => {
    props.onCancel();
  };

  return (
    <div>
      <div className="forms">
        <input type="text" placeholder="Job Title"></input>
        <input type="text" placeholder="Company"></input>
        <input type="text" placeholder="From"></input>
        <input type="text" placeholder="To"></input>
        <input type="text" placeholder="Description"></input>
      </div>
      <button>Save</button>
      <button onClick={handleCancelClick}>Cancel</button>
    </div>
  );
};

export default WorkExperience;
