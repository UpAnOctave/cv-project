import React, { Component } from "react";
import Experience from "./Experience";
import uniqid from "uniqid";

class ProfesionalSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      isButtonHidden: true,
      experience: []
    };
    this.edit = this.edit.bind(this);
    this.submit = this.submit.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  edit() {
    this.setState({
      isEditing: true,
      isButtonHidden: false
    });
  }

  submit(event) {
    this.setState({
      isEditing: false,
      isButtonHidden: true
    });
    event.stopPropagation();
  }

  addExperience() {
    this.setState(function(state) {
      return {experience: [...state.experience, uniqid()]};
    });
  }

  deleteExperience(event) {
    this.setState(function(state) {
      const newList = state.experience.filter(function(id) {
        return (id !== event.target.id);
      });
      return {experience: newList};
    });
  }

  render() {
    const list = this.state.experience.map(function(id) {
      return <Experience key={id} id={id} isEditing={this.state.isEditing} deleteExperience={this.deleteExperience} />;
    }.bind(this));
    return (
      <div className={`profesional-section ${this.state.isEditing ? "editing" : ""}`} onClick={this.edit}>
        <h1>PROFESIONAL EXPERIENCE</h1>
        {list}
        <button className="add-experience-button" onClick={this.addExperience} hidden={this.state.isButtonHidden}>ADD EXPERIENCE</button>
        <button className="ok-button" onClick={this.submit} hidden={this.state.isButtonHidden}>OK</button>
      </div>
    );
  }
}

export default ProfesionalSection;
