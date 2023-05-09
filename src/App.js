import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <h3>General Information</h3>
      <GeneralInfo />
      <h3>Work Experience</h3>
      <button>Add Work Experience</button>
      <h3>Education</h3>
      <button>Add Education</button>
    </div>
  );
}

export default App;
