import React from "react";

const Education = (props) => {
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
      <button>Save</button>
      <button onClick={handleCancelClick}>Cancel</button>
      <p>{info.degree}</p>
      <p>{info.school}</p>
      <p>{info.from}</p>
      <p>{info.to}</p>
    </div>
  );
};

export default Education;
