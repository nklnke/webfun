import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "18px"
  };

  return (
    <input
      className="search-panel form-control search-input"
      style={searchStyle}
      type="text"
      placeholder={searchText}
    />
  );
};

export default SearchPanel;
