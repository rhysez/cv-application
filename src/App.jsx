import { useState } from "react";
import "./App.css";
import General from "./components/General";
import Final from "./components/Final";
import Education from "./components/Education";
import Practical from "./components/Practical";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState(null);

  function handleChangeFullName(e) {
    setFullName(e.target.value);
  }

  return (
    <>
      <h1>CV Builder</h1>

      <div className="pageContainer">
        <div className="cvContainer">
          <General
            title="General Information"
            fullName={fullName}
            email={email}
            contactNumber={contactNumber}
            handleChange={handleChangeFullName}
          />
          <Education title="Education" />
          <Practical title="Practical Experience" />
        </div>

        <div className="finalContainer">
          <Final fullName={fullName} handleChange={handleChangeFullName}/>
        </div>
      </div>
    </>
  );
}

export default App;
