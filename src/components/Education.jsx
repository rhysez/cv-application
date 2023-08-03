import { useState } from "react";

export default function Education(props) {
  return (
    <div>
      <fieldset>
        <legend>{props.title}</legend>
        <form className="cvSection">
          <label htmlFor="schoolName">Name of school</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            minLength={1}
            value={props.schoolName}
            onChange={props.handleChangeSchoolName}
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
            onChange={props.handleChangeStudyName}
          ></textarea>

          <label htmlFor="studyDate">Date of study</label>
          <input
            type="date"
            id="studyDate"
            name="studyDate"
            value={props.studyDate}
            onChange={props.handleChangeStudyDate}
          />
        </form>
        <button type="submit" id="submitEducation" onClick={props.handleSubmitEducation}>
          Done
        </button>
      </fieldset>
    </div>
  );
}
