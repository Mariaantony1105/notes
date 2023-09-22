import React, { useState } from "react";
function SearchBar({ setSearchValue }) {
  const Change = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="Input"
      onChange={Change}
      placeholder="Quick search for Notes"
    />
  );
}

export default SearchBar;
