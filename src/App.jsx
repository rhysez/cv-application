import { useState } from "react";
import "./App.css";
import General from "./components/General";
import Final from "./components/Final";
import Education from "./components/Education";
import Practical from "./components/Practical";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [generalVisible, setGeneralVisible] = useState("none")

  const [schoolName, setSchoolName] = useState("");
  const [studyName, setStudyName] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [educationVisible, setEducationVisible] = useState("none")

  const [companyName, setCompanyName] = useState("");
  const [companyPosition, setCompanyPosition] = useState("");
  const [companyPositionDetails, setCompanyPositionDetails] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [companyEndDate, setCompanyEndDate] = useState("");
  const [practicalVisible, setPracticalVisible] = useState("none")

  function handleChangeFullName(e) {
    setFullName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeContactNumber(e) {
    setContactNumber(e.target.value);
  }

  function handleSubmitGeneral() {
    setGeneralVisible("flex")
  }

  // ----- //

  function handleChangeSchoolName(e) {
    setSchoolName(e.target.value);
  }

  function handleChangeStudyName(e) {
    setStudyName(e.target.value);
  }

  function handleChangeStudyDate(e) {
    setStudyDate(e.target.value);
  }

  function handleSubmitEducation() {
    setEducationVisible("flex")
  }

   // ----- //

   function handleChangeCompanyName(e) {
    setCompanyName(e.target.value)
   }

   function handleChangeCompanyPosition(e){
    setCompanyPosition(e.target.value)
   }

   function handleChangeCompanyPositionDetails(e){
    setCompanyPositionDetails(e.target.value)
   }

   function handleChangeCompanyStartDate(e) {
    setCompanyStartDate(e.target.value)
   }

   function handleChangeCompanyEndDate(e) {
    setCompanyEndDate(e.target.value)
   }

   function handleSubmitPractical() {
    setPracticalVisible("flex")
  }

  return (
    <>
      <h1>Build a CV Template</h1>

      <div className="pageContainer">
        <div className="cvContainer">
          <General
            title="General Information"
            fullName={fullName}
            email={email}
            contactNumber={contactNumber}
            handleChange={handleChangeFullName}
            handleChangeEmail={handleChangeEmail}
            handleChangeContactNumber={handleChangeContactNumber}
            handleSubmitGeneral={handleSubmitGeneral}
          />
          <Education
            title="Education"
            schoolName={schoolName}
            handleChangeSchoolName={handleChangeSchoolName}
            handleChangeStudyName={handleChangeStudyName}
            handleChangeStudyDate={handleChangeStudyDate}
            handleSubmitEducation={handleSubmitEducation}
          />
          <Practical 
            title="Practical Experience" 
            companyName={companyName}
            companyPosition={companyPosition}
            companyPositionDetails={companyPositionDetails}
            companyStartDate={companyStartDate}
            companyEndDate={companyEndDate}
            handleChangeCompanyName={handleChangeCompanyName}
            handleChangeCompanyPosition={handleChangeCompanyPosition}
            handleChangeCompanyPositionDetails={handleChangeCompanyPositionDetails}
            handleChangeCompanyStartDate={handleChangeCompanyStartDate}
            handleChangeCompanyEndDate={handleChangeCompanyEndDate}
            handleSubmitPractical={handleSubmitPractical}
          />
        </div>

        <div className="finalContainer">
          <Final
            fullName={fullName}
            email={email}
            contactNumber={contactNumber}
            schoolName={schoolName}
            studyName={studyName}
            studyDate={studyDate}
            companyName={companyName}
            companyPosition={companyPosition}
            companyPositionDetails={companyPositionDetails}
            companyStartDate={companyStartDate}
            companyEndDate={companyEndDate}
            displayGeneral={generalVisible}
            displayEducation={educationVisible}
            displayPractical={practicalVisible}
          />
        </div>
      </div>
    </>
  );
}

export default App;
