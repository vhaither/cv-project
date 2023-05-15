import React from "react";
import "./Education.css";

const Education = (props) => {
  const { removeForm, info, setInfo, list, setList, sendDataLayerEventPush } =
    props;

  const handleCancelClick = () => {
    removeForm();
  };

  const handleFormChange = (e) => {
    setInfo({
      ...info,
      [e.target.dataset.formid]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    setList(list.concat(info));
    removeForm();
    const dataLayerObject = {
      event: "addEducation",
    };
    sendDataLayerEventPush(dataLayerObject);
  };

  return (
    <div>
      <div className="educationForm">
        <input
          data-formid="degree"
          type="text"
          onChange={handleFormChange}
          placeholder="Degree"
          value={info.degree}
        ></input>
        <input
          data-formid="school"
          type="text"
          onChange={handleFormChange}
          placeholder="School"
          value={info.school}
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
      </div>
      <div className="centerButtons">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
};

export default Education;
