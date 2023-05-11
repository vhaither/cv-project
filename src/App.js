import React from "react";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

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

  // const [workExperienceList, setWorkExperienceList] = useState([]);

  const [educationInfo, setEducationInfo] = useState({
    degree: "",
    school: "",
    from: "",
    to: "",
  });

  // const [educationList, setEducationList] = useState([]);
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);

  const [showAddWorkExperienceButton, setShowAddWorkExperienceButton] =
    useState(true);

  const [showEducationForm, setShowEducationForm] = useState(false);

  const [showAddEducationButton, setShowAddEducationButton] = useState(true);

  const addWorkExperience = () => {
    setShowWorkExperienceForm(true);
    setShowAddWorkExperienceButton(false);
  };

  const removeWorkExperienceForm = () => {
    setShowWorkExperienceForm(false);
    setShowAddWorkExperienceButton(true);
  };

  const addEducation = () => {
    setShowEducationForm(true);
    setShowAddEducationButton(false);
  };

  const removeEducationForm = () => {
    setShowEducationForm(false);
    setShowAddEducationButton(true);
  };

  return (
    <div className="App">
      <h3>General Information</h3>
      <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
      <h3>Work Experience</h3>
      {showWorkExperienceForm ? (
        <WorkExperience
          onCancel={removeWorkExperienceForm}
          info={workExperienceInfo}
          setInfo={setWorkExperienceInfo}
        />
      ) : null}
      {showAddWorkExperienceButton ? (
        <button onClick={addWorkExperience}>Add Work Experience</button>
      ) : null}
      <h3>Education</h3>
      {showEducationForm ? (
        <Education
          onCancel={removeEducationForm}
          info={educationInfo}
          setInfo={setEducationInfo}
        />
      ) : null}
      {showAddEducationButton ? (
        <button onClick={addEducation}>Add Education</button>
      ) : null}
    </div>
  );
};

export default App;
