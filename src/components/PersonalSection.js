import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";

const PersonalSection = function(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(true);

  const edit = function() {
    setIsEditing(true);
    setIsButtonHidden(false);
  }

  const submit = function(event) {
    setIsEditing(false);
    setIsButtonHidden(true);
    event.stopPropagation();
  }

  return (
    <div className={`personal-section ${isEditing ? "editing" : ""}`} onClick={edit}>
      <h1>PERSONAL INFORMATION</h1>
      <PersonalInfo title="Name" isEditing={isEditing} />
      <PersonalInfo title="E-mail" isEditing={isEditing} />
      <PersonalInfo title="Phone number" isEditing={isEditing} />
      <button className="ok-button" onClick={submit} hidden={isButtonHidden}>OK</button>
    </div>
  );
}

export default PersonalSection;
