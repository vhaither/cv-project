import React from "react";
import "./GeneralInfo.css";

const GeneralInfo = (props) => {
  const { info, setInfo } = props;

  const handleFormChange = (e) => {
    setInfo({
      ...info,
      [e.target.dataset.formid]: e.target.value,
    });
  };
  return (
    <div>
      <div className="generalInfoForms">
        <input
          data-formid="name"
          type="text"
          onChange={handleFormChange}
          placeholder="Name"
          value={info.name}
        ></input>
        <input
          data-formid="email"
          type="text"
          onChange={handleFormChange}
          placeholder="Email"
          value={info.email}
        ></input>
        <input
          data-formid="phone"
          type="text"
          onChange={handleFormChange}
          placeholder="Phone"
          value={info.phone}
        ></input>
        <input
          data-formid="linkedin"
          type="text"
          onChange={handleFormChange}
          placeholder="LinkedIn"
          value={info.linkedin}
        ></input>
      </div>
    </div>
  );
};

export default GeneralInfo;
