import React from "react";
import { useEffect } from "react";
import "./UtilButtons.css";

const UtilButtons = (props) => {
  const {
    downloadPDF,
    setUserData,
    setSkillList,
    userData,
    setSelectedImage,
    setEducationList,
    setWorkExperienceList,
    setGeneralInfo,
    setDisplayDeletePhotoButton,
    setPreviewPDF,
    changePreviewStyle,
    sendDataLayerEventPush,
  } = props;

  const autoFill = () => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    const dataLayerObject = {
      event: "autoFillForm",
    };
    sendDataLayerEventPush(dataLayerObject);
    fetchData();
  };

  useEffect(() => {
    if (userData) {
      setGeneralInfo({
        name: `${userData.name.first} ${userData.name.last}`,
        address: `${userData.location.city}, ${userData.location.state}, ${userData.location.country}`,
        email: userData.email,
        phone: userData.cell,
        linkedin: `linkedin.com/in/${userData.email
          .split("@")[0]
          .split(".")
          .join("")}`,
      });

      setSelectedImage(userData.picture.large);
      setDisplayDeletePhotoButton(true);

      setEducationList([
        {
          degree: "Computer Science",
          school: "Harvard",
          from: 2013,
          to: 2018,
        },
      ]);

      setWorkExperienceList([
        {
          jobTitle: "Front-end Developer",
          company: "Google",
          from: "2020",
          to: "Currently",
          description:
            "This job description is, without a doubt, a job description. Longer sentence to fill space. Even longer sentence to fill space",
        },
        {
          jobTitle: "Intern Front-end Developer",
          company: "Facebook",
          from: "2018",
          to: "2020",
          description:
            "This other job description is, without a doubt, another job description. More long sentences to fill space. And even another extra long sentence to fill more space",
        },
      ]);

      setSkillList(["JavaSript", "React", "HTML", "CSS"]);
    }
  }, [userData]);

  const hideForm = () => {
    setPreviewPDF(false);
    changePreviewStyle();
    const dataLayerObject = {
      event: "previewCV",
    };
    sendDataLayerEventPush(dataLayerObject);
  };

  return (
    <div className="utilButtons">
      <button onClick={autoFill}>Auto Fill Form</button>
      <button onClick={hideForm} className="blueButton hideForDesktop">
        Preview CV
      </button>
      <button onClick={downloadPDF} className="greenButton hideForMobile">
        Download PDF
      </button>
    </div>
  );
};

export default UtilButtons;
