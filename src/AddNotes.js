import React, { useState } from "react";
import "./styles.css";
const AddNote = ({ handleNewNote }) => {
  const Chacter = 200;
  const [NewValue, SetNewValue] = useState("");
  const Change = (event) => {
    if (Chacter - event.target.value.length >= 0) {
      SetNewValue(event.target.value);
    }
  };
  const handleChange = () => {
    if (NewValue.trim().length > 0) {
      handleNewNote(NewValue);
      SetNewValue("");
    }
  };
  return (
    <div className="newNote" style={{ backgroundColor: "green" }}>
      <textarea
        value={NewValue}
        rows="9"
        placeholder="Enter the Note"
        onChange={Change}
      />
      <div className="FootCard">
        <small>{Chacter - NewValue.length} Character</small>
        <button onClick={handleChange}>save</button>
      </div>
    </div>
  );
};
export default AddNote;
