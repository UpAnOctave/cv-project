import React, { useState } from "react";

const Experience = function(props) {
  const [establishment, setEstablishment] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleEstablishmentChange = function(event) {
    setEstablishment(event.target.value.toUpperCase());
  }

  const handleTitleChange = function(event) {
    setTitle(event.target.value);
  }

  const handleDateChange = function(event) {
    setDate(event.target.value);
  }

  const handleDescriptionChange = function(event) {
    setDescription(event.target.value);
  }

  if(props.isEditing) {
    return (
      <div className="experience">
        <input className="header-input" value={establishment} placeholder="ESTABLISHMENT" onChange={handleEstablishmentChange} />
        <div>
          <input value={title} placeholder="Title/Position" onChange={handleTitleChange} />
            | 
          <input value={date} placeholder="Date" onChange={handleDateChange} />
        </div>
        <input className="paragraph-input" value={description} placeholder="Description" onChange={handleDescriptionChange} />
        <button id={props.id} className="delete-button" onClick={props.deleteExperience}>DELETE</button>
      </div>
    );
  }
  else {
    return (
      <div className="experience">
        <h2>{establishment || "ESTABLISHMENT"}</h2>
        <div>
          <h3>{title || "Title/Position"} | {date || "Date"}</h3>
        </div>
        <p>{description || "Description"}</p>
      </div>
    );
  }
}

export default Experience;
