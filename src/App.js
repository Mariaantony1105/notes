import "./styles.css";
import React, { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import Notes from "./NotesList";
import SearchBar from "./SearchBar";

export default function App() {
  const [CurrentValue, SetCurrentValue] = useState([
    {
      id: nanoid(),
      text: "Sample Text",
      date: `${new Date().toLocaleDateString()}`
    }
  ]);
  const [searchValue, setSearchValue] = useState("");
  const handleNewNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...CurrentValue, newNote];
    SetCurrentValue(newNotes);
  };
  const DeleteNote = (id) => {
    const newNotes = CurrentValue.filter((note) => note.id !== id);
    SetCurrentValue(newNotes);
  };
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(CurrentValue));
  }, [CurrentValue]);
  useEffect(() => {
    const Set = JSON.parse(localStorage.getItem("Notes"));
    if (Set) {
      SetCurrentValue(Set);
    }
  }, []);
  return (
    <div className="App">
      <h1>NotePad</h1>
      <SearchBar setSearchValue={setSearchValue} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "10px"
        }}
      >
        <Notes
          prop={CurrentValue.filter((note) =>
            note.text.toLowerCase().includes(searchValue.toLowerCase())
          )}
          handleNewNote={handleNewNote}
          DeleteNote={DeleteNote}
        />
      </div>
    </div>
  );
}
