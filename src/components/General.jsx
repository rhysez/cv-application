import { useState } from "react";

export default function General() {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [contactNumber, setContactNumber] = useState(null)

  return (
    <div>
      <fieldset>
        <legend>General Information</legend>
        <form className="cvSection">
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" name="name" minLength={4} />

          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" minLength={10} />

          <label htmlFor="contactNumber">Contact number</label>
          <input type="number" id="contactNumber" name="contactNumber" />
        </form>

        <button id="editGeneral">Edit</button>
        <button type="submit" id="submit">
          Done
        </button>
      </fieldset>
    </div>
  );
}
