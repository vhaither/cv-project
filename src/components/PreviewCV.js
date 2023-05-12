import React from "react";
import "./PreviewCV.css";

const PreviewCV = (props) => {
  const { generalInfoCV, workExperienceCV, educationCV, skillsCV } = props;

  return (
    <div className="previewCV">
      <div className="headCV">
        <div className="headLeftCV"></div>
        <div className="headRightCV">
          <h1>{generalInfoCV.name}</h1>
        </div>
      </div>
      <div className="bodyCV">
        <div className="bodyLeftCV">
          <div className="contactCV">
            <h3>Contact</h3>
            <ul>
              <li>{generalInfoCV.email}</li>
              <li>{generalInfoCV.phone}</li>
              <li>{generalInfoCV.linkedin}</li>
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
        <div className="bodyRightCV">
          <div className="workExperienceCV">
            <h3>Work Experience</h3>
            {workExperienceCV.map((info, i) => {
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
                </div>
              );
            })}
          </div>
          <div className="educationCV"></div>
          <h3>Education</h3>
          {educationCV.map((info, i) => {
            return (
              <div key={`experience_${i}`} className="savedExperience">
                <div className="savedExperienceText">
                  <h4>{info.degree}</h4>
                  <p>{info.school}</p>
                  <p>
                    {info.from} - {info.to}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p>Testeeeeeeeeee</p>
    </div>
  );
};

export default PreviewCV;
