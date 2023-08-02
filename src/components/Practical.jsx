import { useState } from "react";

export default function Practical(props) {
  return (
    <div>
      <fieldset>
        <legend>{props.title}</legend>
        <form className="cvSection">
          <label htmlFor="companyName">Company name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            minLength={4}
            value={props.companyName}
            onChange={props.handleChangeCompanyName}
          />

          <label htmlFor="companyPosition">Position held</label>
          <input
            type="text"
            id="companyPosition"
            name="companyPosition"
            minLength={10}
            value={props.companyPosition}
            onChange={props.handleChangeCompanyPosition}
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
            onChange={props.handleChangeCompanyPositionDetails}
          ></textarea>

          <label htmlFor="companyStartDate">Start date</label>
          <input
            type="date"
            id="companyStartDate"
            name="companyStartDate"
            value={props.companyStartDate}
            onChange={props.handleChangeCompanyStartDate}
          />

          <label htmlFor="companyEndDate">End date</label>
          <input
            type="date"
            id="companyEndDate"
            name="companyEndDate"
            value={props.companyEndDate}
            onChange={props.handleChangeCompanyEndDate}
          />
        </form>

        <button id="addPractical">Add</button>
        <button id="editGeneral">Edit</button>
        <button type="submit" id="submitPractical">
          Done
        </button>
      </fieldset>
    </div>
  );
}
