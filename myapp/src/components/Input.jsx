
import "./style.css";
import React, { useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance(inputRef.current.value);
    msg.voiceURI = "Google हिन्दी";
    msg.lang = "hi-IN";
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
    

      <div className="input-container">
        <label htmlFor="input">Enter text to say:</label>
        <textarea type="text" id="input" ref={inputRef}  placeholder="Enter text here" />
        <button id="speak-btn" onClick={handleSpeak}>
          <span>
            <i className="fa-solid fa-volume-high"></i>
          </span>
        </button>
      </div>
    </>
  );
};

export default Input;

