import React from "react";
import "./PreviewCV.css";

const PreviewCV = (props) => {
  const {
    generalInfoCV,
    workExperienceCV,
    educationCV,
    skillsCV,
    photoCV,
    sendDataLayerEventPush,
  } = props;

  return (
    <div className="previewCV">
      <div className="leftCV">
        <div className="upperLeftCV">
          {photoCV ? <img src={photoCV} alt="uploadedImage" /> : null}
        </div>
        <div className="bottonLeftCV">
          <div className="contactCV">
            <h3>Contact</h3>
            <ul>
              <li>
                <span>Address: </span>
                {generalInfoCV.address}
              </li>
              <li>
                <span>Email: </span>
                {generalInfoCV.email}
              </li>
              <li>
                <span>Phone: </span>
                {generalInfoCV.phone}
              </li>
              <li>
                <span>linkedIn: </span>
                {generalInfoCV.linkedin}
              </li>
            </ul>
          </div>
          <div className="skillsCV">
            <h3>Skills</h3>
            <ul>
              {skillsCV.map((skill, i) => {
                return <li key={`skill_${i}`}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="rightCV">
        <div className="upperRightCV">
          <h1>{generalInfoCV.name}</h1>
        </div>
        <div className="bottonRightCV">
          <div className="workExperienceCV">
            <h3>Work Experience</h3>
            {workExperienceCV.map((info, i) => {
              return (
                <div key={`experience_${i}`} className="savedExperience">
                  <div className="savedExperienceText">
                    <h4>{info.jobTitle}</h4>
                    <p>{info.company}</p>
                    <p className="smallerText">
                      {info.from} - {info.to}
                    </p>
                    <p className="smallText">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="educationCV">
            <h3>Education</h3>
            {educationCV.map((info, i) => {
              return (
                <div key={`experience_${i}`} className="savedExperience">
                  <div className="savedExperienceText">
                    <h4>{info.degree}</h4>
                    <p>{info.school}</p>
                    <p className="smallerText">
                      {info.from} - {info.to}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCV;
