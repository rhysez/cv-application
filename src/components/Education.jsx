import { useState } from "react";

export default function Education({title, schoolName}) {

  const [studyName, setStudyName] = useState('')
  const [studyDate, setStudyDate] = useState(null)

  return (
    <div>
      <fieldset>
        <legend>{title}</legend>
        <form className="cvSection">
          <label htmlFor="schoolName">Name of school</label>
          <input type="text" id="schoolName" name="schoolName" minLength={1} value={schoolName} />

          <label htmlFor="studyName">
            What did you study? Tell us your experience
          </label>
          <textarea
            name="studyName"
            id="studyName"
            cols="50"
            rows="10"
            placeholder="Please give a semi-detailed overview of what you studied and what qualifications you gained."
          ></textarea>

          <label htmlFor="studyDate">Date of study</label>
          <input type="date" id="studyDate" name="studyDate" />
        </form>
        <button id="addSchool">Add</button>
        <button id="editEducation">Edit</button>
        <button type="submit" id="submit">
          Done
        </button>
      </fieldset>
    </div>
  );
}
