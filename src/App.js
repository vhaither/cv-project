import React from "react";
import { useState, useRef } from "react";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import "./App.css";
import UtilButtons from "./components/UtilButtons";
import PreviewCV from "./components/PreviewCV";
import Skills from "./components/Skills";
import UserPhoto from "./components/UserPhoto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    address: "",
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

  const [displayDeletePhotoButton, setDisplayDeletePhotoButton] =
    useState(false);

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

  const [selectedImage, setSelectedImage] = useState(null);

  const previewCVRef = useRef(null);

  const generatePDF = () => {
    const input = previewCVRef.current;

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("component.pdf");
    });
  };

  const [userData, setUserData] = useState(null);

  const [previewPDF, setPreviewPDF] = useState(true);
  const [previewElementStyle, setPreviewElementStyle] = useState({});

  const changePreviewStyle = () => {
    setPreviewElementStyle({ display: "block" });
  };

  return (
    <div className="App">
      {previewPDF ? (
        <div className="forms">
          <div className="generalInfo">
            <h3>General Information</h3>
            <UserPhoto
              displayDeletePhotoButton={displayDeletePhotoButton}
              setDisplayDeletePhotoButton={setDisplayDeletePhotoButton}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
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
            <div className="allAddedSkills">
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
            </div>
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
              <div className="centerButton addSkillButton">
                <button onClick={addSkill}>Add Skill</button>
              </div>
            ) : null}
          </div>
          <div className="cvOptions">
            <h3>CV Options</h3>
            <UtilButtons
              changePreviewStyle={changePreviewStyle}
              userData={userData}
              setUserData={setUserData}
              downloadPDF={generatePDF}
              previewPDF={previewPDF}
              setPreviewPDF={setPreviewPDF}
              setEducationList={setEducationList}
              setWorkExperienceList={setWorkExperienceList}
              setGeneralInfo={setGeneralInfo}
              setSelectedImage={setSelectedImage}
              setDisplayDeletePhotoButton={setDisplayDeletePhotoButton}
              setSkillList={setSkillList}
            />
          </div>
        </div>
      ) : null}

      <div
        style={previewElementStyle}
        className="previewMode"
        ref={previewCVRef}
      >
        <PreviewCV
          generalInfoCV={generalInfo}
          workExperienceCV={workExperienceList}
          educationCV={educationList}
          skillsCV={skillList}
          photoCV={selectedImage}
        />
      </div>
    </div>
  );
};

export default App;
