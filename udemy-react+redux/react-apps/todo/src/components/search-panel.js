import React from "react";

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "25px"
  };

  return (
    <input
      style={searchStyle}
      type="text"
      placeholder={searchText}
      autoComplete=""
      tabIndex=""
      className="class"
      htmlFor=""
      disabled
    />
  );
};

export default SearchPanel;
