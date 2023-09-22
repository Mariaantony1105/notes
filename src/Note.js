import React from "react";

const Note = ({ id, text, date, DeleteNote }) => {
  return (
    <div key={id} className="Card">
      <textarea value={text} rows="12" columns="10" />
      <div className="FootCard">
        <span>{date}</span>
        <button onClick={() => DeleteNote(id)}>delete</button>
      </div>
    </div>
  );
};

export default Note;
