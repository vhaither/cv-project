import React from "react";
import "./Education.css";

const Education = (props) => {
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
      {list.map((info, i) => {
        return (
          <div key={`education${i}`} className="savedEducation">
            <div className="savedEducationText">
              <h4>{info.degree}</h4>
              <p>{info.school}</p>
              <p>
                {info.from} - {info.to}
              </p>
            </div>
            <div className="savedEducationDeleteButton">
              <button onClick={() => handleDeleteClick(i)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
