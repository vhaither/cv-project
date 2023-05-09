import React from "react";

function WorkExperience() {
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
      <button>Cancel</button>
    </div>
  );
}

export default WorkExperience;
