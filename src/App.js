import React from "react";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import "./App.css";
import UtilButtons from "./components/UtilButtons";
import PreviewCV from "./components/PreviewCV";
import Skills from "./components/Skills";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
  });

  const [workExperienceInfo, setWorkExperienceInfo] = useState({
    jobTitle: "",
    company: "",
    from: "",
    to: "",
    description: "",
  });

  const [workExperienceList, setWorkExperienceList] = useState([]);

  const [educationInfo, setEducationInfo] = useState({
    degree: "",
    school: "",
    from: "",
    to: "",
  });

  const [educationList, setEducationList] = useState([]);

  const [skill, setSkill] = useState("");

  const [skillList, setSkillList] = useState([]);

  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);

  const [showAddWorkExperienceButton, setShowAddWorkExperienceButton] =
    useState(true);

  const [showEducationForm, setShowEducationForm] = useState(false);

  const [showAddEducationButton, setShowAddEducationButton] = useState(true);

  const [showSkillForm, setShowSkillForm] = useState(false);

  const [showAddSkillButton, setShowAddSkillButton] = useState(true);

  const addWorkExperience = () => {
    setWorkExperienceInfo({
      jobTitle: "",
      company: "",
      from: "",
      to: "",
      description: "",
    });
    setShowWorkExperienceForm(true);
    setShowAddWorkExperienceButton(false);
  };

  const removeWorkExperienceForm = () => {
    setShowWorkExperienceForm(false);
    setShowAddWorkExperienceButton(true);
  };

  const addEducation = () => {
    setEducationInfo({
      degree: "",
      school: "",
      from: "",
      to: "",
    });
    setShowEducationForm(true);
    setShowAddEducationButton(false);
  };

  const removeEducationForm = () => {
    setShowEducationForm(false);
    setShowAddEducationButton(true);
  };

  const addSkill = () => {
    setSkill("");
    setShowSkillForm(true);
    setShowAddSkillButton(false);
  };

  const removeSkillForm = () => {
    setShowSkillForm(false);
    setShowAddSkillButton(true);
  };

  const handleDeleteExperienceClick = (indexToBeRemoved) => {
    const newList = workExperienceList.filter((info, i) => {
      return i !== indexToBeRemoved;
    });
    setWorkExperienceList(newList);
  };

  const handleEducationDeleteClick = (indexToBeRemoved) => {
    const newList = educationList.filter((info, i) => {
      return i !== indexToBeRemoved;
    });
    setEducationList(newList);
  };

  const handleSkillDeleteClick = (indexToBeRemoved) => {
    const newList = skillList.filter((info, i) => {
      return i !== indexToBeRemoved;
    });
    setSkillList(newList);
  };

  return (
    <div className="App">
      <div className="forms">
        <div className="generalInfo">
          <h3>General Information</h3>
          <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
        </div>
        <div className="workExp">
          <h3>Work Experience</h3>
          {workExperienceList.map((info, i) => {
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
                  <button onClick={() => handleDeleteExperienceClick(i)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          {showWorkExperienceForm ? (
            <WorkExperience
              removeForm={removeWorkExperienceForm}
              info={workExperienceInfo}
              setInfo={setWorkExperienceInfo}
              list={workExperienceList}
              setList={setWorkExperienceList}
            />
          ) : null}
          {showAddWorkExperienceButton ? (
            <div className="centerButton">
              <button onClick={addWorkExperience}>Add Work Experience</button>
            </div>
          ) : null}
        </div>
        <div className="educationExp">
          <h3>Education</h3>
          {educationList.map((info, i) => {
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
                  <button onClick={() => handleEducationDeleteClick(i)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          {showEducationForm ? (
            <Education
              removeForm={removeEducationForm}
              info={educationInfo}
              setInfo={setEducationInfo}
              list={educationList}
              setList={setEducationList}
            />
          ) : null}
          {showAddEducationButton ? (
            <div className="centerButton">
              <button onClick={addEducation}>Add Education</button>
            </div>
          ) : null}
        </div>
        <div className="skills">
          <h3>Skills</h3>
          {skillList.map((skill, i) => {
            return (
              <div key={`skill_${i}`} className="addedSkill">
                <p>{skill}</p>
                <button onClick={() => handleSkillDeleteClick(i)}>
                  Delete
                </button>
              </div>
            );
          })}
          {showSkillForm ? (
            <Skills
              removeForm={removeSkillForm}
              info={skill}
              setInfo={setSkill}
              list={skillList}
              setList={setSkillList}
            />
          ) : null}
          {showAddSkillButton ? (
            <div className="centerButton">
              <button onClick={addSkill}>Add Skill</button>
            </div>
          ) : null}
        </div>
        <div className="cvOptions">
          <h3>CV Options</h3>
          <UtilButtons />
        </div>
      </div>
      <PreviewCV
        generalInfoCV={generalInfo}
        workExperienceCV={workExperienceList}
        educationCV={educationList}
        skillsCV={skillList}
      />
    </div>
  );
};

export default App;
