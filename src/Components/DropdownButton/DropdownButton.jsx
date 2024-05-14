import React, { useState } from "react";

function DropdownButton({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const buttonStyle = {
    backgroundColor: "gray",
    color: "white",
    width: "15rem",
    height: "2.5rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    margin: "1rem",
  };

  return (
    <div className="dropdown-layout">
      <button className="main-button" onClick={toggleDropdown} style={buttonStyle}>
        {options.title}
      </button>
      {isOpen && (
        <div className="dropdown-down">
          {options.data.map((option, index) => (
            <button key={index} style={buttonStyle} onClick={option.onClick}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
