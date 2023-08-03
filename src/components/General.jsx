import { useState } from "react";

export default function General(props) {
  return (
    <div>
      <fieldset>
        <legend>{props.title}</legend>
        <form className="cvSection">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            minLength={4}
            value={props.fullName}
            onChange={props.handleChange}
          />

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            minLength={10}
            value={props.email}
            onChange={props.handleChangeEmail}
          />

          <label htmlFor="contactNumber">Contact number</label>
          <input
            type="number"
            id="contactNumber"
            name="contactNumber"
            value={props.contactNumber}
            onChange={props.handleChangeContactNumber}
          />
        </form>

        <button id="editGeneral">Edit</button>
        <button
          type="submit"
          id="submitGeneral"
          onClick={props.handleSubmitGeneral}
        >
          Done
        </button>
      </fieldset>
    </div>
  );
}
