import React from "react";

const ModeSwitch = () => {

    const handleDarkModeToggle = () => {
        document.body.classList.toggle("dark-mode");
      };
    
  return (
    <>
      <label class="switch">
        <input
        className="toggle"
        id="dark-mode-toggle"
        type="checkbox"
        onChange={handleDarkModeToggle}
      />
        <span className="slider"></span>
        <span className="card-side"></span>
      </label>
    </>
  );
};

export default ModeSwitch;
