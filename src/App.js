import React from "react";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

const App = () => {
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
      <GeneralInfo />
      <h3>Work Experience</h3>
      {showWorkExperienceForm ? (
        <WorkExperience onCancel={removeWorkExperienceForm} />
      ) : null}
      {showAddWorkExperienceButton ? (
        <button onClick={addWorkExperience}>Add Work Experience</button>
      ) : null}
      <h3>Education</h3>
      {showEducationForm ? <Education onCancel={removeEducationForm} /> : null}
      {showAddEducationButton ? (
        <button onClick={addEducation}>Add Education</button>
      ) : null}
    </div>
  );
};

export default App;
