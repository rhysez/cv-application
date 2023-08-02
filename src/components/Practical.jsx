import { useState } from "react";

export default function Practical({title}) {

  const [companyName, setCompanyName] = useState('')
  const [companyPosition, setCompanyPosition] = useState('')
  const [companyPositionDetails, setCompanyPositionDetails] = useState('')
  const [companyStartDate, setCompanyStartDate] = useState(null)
  const [companyEndDate, setCompanyEndDate] = useState(null)

  return (
    <div>
      <fieldset>
        <legend>{title}</legend>
        <form className="cvSection">
          <label htmlFor="companyName">Company name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            minLength={4}
          />

          <label htmlFor="companyPosition">Position held</label>
          <input
            type="text"
            id="companyPosition"
            name="companyPosition"
            minLength={10}
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
          ></textarea>

          <label htmlFor="companyStartDate">Start date</label>
          <input type="date" id="companyStartDate" name="companyStartDate" />

          <label htmlFor="companyEndDate">End date</label>
          <input type="date" id="companyEndDate" name="companyEndDate" />
        </form>

        <button id="addPractical">Add</button>
        <button id="editGeneral">Edit</button>
        <button type="submit" id="submit">
          Done
        </button>
      </fieldset>
    </div>
  );
}
