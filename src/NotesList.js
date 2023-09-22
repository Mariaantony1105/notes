import React from "react";
import Note from "./Note";
import AddNote from "./AddNotes";

const Notes = ({ prop, handleNewNote, DeleteNote }) => {
  return (
    <>
      {prop.map((ele) => (
        <div key={ele.id}>
          <Note
            id={ele.id}
            text={ele.text}
            date={ele.date}
            DeleteNote={DeleteNote}
          />
        </div>
      ))}
      <AddNote handleNewNote={handleNewNote} />
    </>
  );
};

export default Notes;
