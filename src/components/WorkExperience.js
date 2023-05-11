import React from "react";
import { useState } from "react";

const WorkExperience = (props) => {
  //   const [workExperienceInfo, setWorkExperienceInfo] = useState({
  //     jobTitle: "",
  //     company: "",
  //     from: "",
  //     to: "",
  //     description: "",
  //   });

  const { onCancel, info, setInfo } = props;

  const handleCancelClick = () => {
    onCancel();
  };

  const handleFormChange = (e) => {
    setInfo({
      ...info,
      [e.target.dataset.formid]: e.target.value,
    });
  };

  return (
    <div>
      <div className="forms">
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
        <input
          data-formid="description"
          type="text"
          onChange={handleFormChange}
          placeholder="Description"
          value={info.description}
        ></input>
      </div>
      <button>Save</button>
      <button onClick={handleCancelClick}>Cancel</button>
      <p>{info.jobTitle}</p>
      <p>{info.company}</p>
      <p>{info.from}</p>
      <p>{info.to}</p>
      <p>{info.description}</p>
    </div>
  );
};

export default WorkExperience;
