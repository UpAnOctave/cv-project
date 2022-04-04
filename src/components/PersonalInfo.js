import React, { useState } from "react";

const PersonalInfo = function(props) {
  const [text, setText] = useState('');

  const handleChange = function(event) {
    setText(event.target.value);
  }

  if(props.isEditing) {
    return (
      <div className="personal-info">
        <h2>{props.title}:</h2>
        <input className="header-input" value={text} onChange={handleChange} />
      </div>
    );
  }
  else {
    return (
      <div className="personal-info">
        <h2>{props.title}:</h2>
        <p>{text}</p>
      </div>
    );
  }
}

export default PersonalInfo;
