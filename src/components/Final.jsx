
export default function Final(props) {
  const finalStylesGeneral = {
    display: props.displayGeneral,
  };

  const finalStylesEducation = {
    display: props.displayEducation
  }

  const finalStylesPractical = {
    display: props.displayPractical
  }

  return (
    <div className="final">
      <h2>Final CV Version</h2>
      <div className="finalGeneral" style={finalStylesGeneral}>
        <label htmlFor="finalFullName">Full name</label>
        <input
          type="text"
          name="finalFullName"
          id="finalFullName"
          value={props.fullName}
          readOnly={true}
        />

        <label htmlFor="finalEmail">Email address</label>
        <input
          type="email"
          name="finalEmail"
          id="finalEmail"
          value={props.email}
          readOnly={true}
        />

        <label htmlFor="finalContactNumber">Contact number</label>
        <input
          type="number"
          name="finalContactNumber"
          id="finalContactNumber"
          value={props.contactNumber}
          readOnly={true}
        />
      </div>

      <div className="finalEducation" style={finalStylesEducation}>
        <label htmlFor="finalSchoolName">Name of school</label>
        <input
          type="text"
          name="finalSchoolName"
          id="finalSchoolName"
          value={props.schoolName}
          readOnly={true}
        />
        <label htmlFor="studyName">
          What did you study? Tell us your experience
        </label>
        <textarea
          name="studyName"
          id="studyName"
          cols="50"
          rows="10"
          placeholder="Please give a semi-detailed overview of what you studied and what qualifications you gained."
          value={props.studyName}
          readOnly={true}
        ></textarea>
        <label htmlFor="studyDate">Date of study</label>
        <input
          type="date"
          id="studyDate"
          name="studyDate"
          value={props.studyDate}
          readOnly={true}
        />
      </div>

      <div className="finalPractical" style={finalStylesPractical}>
        <label htmlFor="companyName">Company name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          minLength={4}
          value={props.companyName}
          readOnly={true}
        />

        <label htmlFor="companyPosition">Position held</label>
        <input
          type="text"
          id="companyPosition"
          name="companyPosition"
          minLength={10}
          value={props.companyPosition}
          readOnly={true}
        />

        <label htmlFor="companyPositionDetails">
          Overview of responsibilities
        </label>
        <textarea
          name="companyPositionDetails"
          id="companyPositionDetails"
          cols="50"
          rows="10"
          placeholder="Please provide a semi-detailed overview of your responsibilities at this job."
          value={props.companyPositionDetails}
          readOnly={true}
        ></textarea>

        <label htmlFor="companyStartDate">Start date</label>
        <input
          type="date"
          id="companyStartDate"
          name="companyStartDate"
          value={props.companyStartDate}
          readOnly={true}
        />

        <label htmlFor="companyEndDate">End date</label>
        <input
          type="date"
          id="companyEndDate"
          name="companyEndDate"
          value={props.companyEndDate}
          readOnly={true}
        />
      </div>
    </div>
  );
}
