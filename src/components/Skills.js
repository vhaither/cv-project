import React from "react";

const Skills = (props) => {
  const { removeForm, info, setInfo, list, setList } = props;

  const handleCancelClick = () => {
    removeForm();
  };

  const handleFormChange = (e) => {
    setInfo(e.target.value);
  };

  const handleSaveClick = () => {
    setList(list.concat(info));
    removeForm();
  };

  return (
    <div>
      <div className="workExperienceForm">
        <input
          data-formid="skill"
          type="text"
          onChange={handleFormChange}
          placeholder="Skill"
          value={info}
        ></input>
      </div>
      <div className="centerButtons">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
};

export default Skills;
