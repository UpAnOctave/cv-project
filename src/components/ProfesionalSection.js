import React, { useState } from "react";
import Experience from "./Experience";
import uniqid from "uniqid";

const ProfesionalSection = function(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(true);
  const [experience, setExperience] = useState([]);

  const edit = function() {
      setIsEditing(true);
      setIsButtonHidden(false);
  }

  const submit = function(event) {
    setIsEditing(false);
    setIsButtonHidden(true);
    event.stopPropagation();
  }

  const addExperience = function() {
    setExperience([...experience, uniqid()]);
  }

  const deleteExperience = function(event) {
      const newList = experience.filter(function(id) {
        return (id !== event.target.id);
      });

      setExperience(newList);
  }

  const list = experience.map(function(id) {
    return <Experience key={id} id={id} isEditing={isEditing} deleteExperience={deleteExperience} />;
  });

  return (
    <div className={`profesional-section ${isEditing ? "editing" : ""}`} onClick={edit}>
      <h1>PROFESIONAL EXPERIENCE</h1>
      {list}
      <button className="add-experience-button" onClick={addExperience} hidden={isButtonHidden}>ADD EXPERIENCE</button>
      <button className="ok-button" onClick={submit} hidden={isButtonHidden}>OK</button>
    </div>
  );
}

export default ProfesionalSection;
