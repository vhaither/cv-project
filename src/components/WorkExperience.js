import React from "react";
import "./WorkExperience.css";

const WorkExperience = (props) => {
  const { onCancel, info, setInfo, list, setList } = props;

  const handleCancelClick = () => {
    onCancel();
  };

  const handleFormChange = (e) => {
    setInfo({
      ...info,
      [e.target.dataset.formid]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    setList(list.concat(info));
  };

  const handleDeleteClick = (x) => {
    const newList = list.filter((info, i) => {
      return i !== x;
    });
    setList(newList);
  };

  return (
    <div>
      <div className="workExperienceForm">
        <input
          data-formid="jobTitle"
          type="text"
          onChange={handleFormChange}
          placeholder="Job Title"
          value={info.jobTitle}
        ></input>
        <input
          data-formid="company"
          type="text"
          onChange={handleFormChange}
          placeholder="Company"
          value={info.company}
        ></input>
        <input
          data-formid="from"
          type="text"
          onChange={handleFormChange}
          placeholder="From"
          value={info.from}
        ></input>
        <input
          data-formid="to"
          type="text"
          onChange={handleFormChange}
          placeholder="To"
          value={info.to}
        ></input>
        <textarea
          data-formid="description"
          type="text"
          onChange={handleFormChange}
          placeholder="Description"
          value={info.description}
          rows="5"
          col="30"
        ></textarea>
      </div>
      <div className="centerButtons">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
      {list.map((info, i) => {
        return (
          <div key={`experience_${i}`} className="savedExperience">
            <div className="savedExperienceText">
              <h4>{info.jobTitle}</h4>
              <p>{info.company}</p>
              <p>
                {info.from} - {info.to}
              </p>
              <p>{info.description}</p>
            </div>
            <div className="savedExperienceDeleteButton">
              <button onClick={() => handleDeleteClick(i)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
