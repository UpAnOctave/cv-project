import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";

class PersonalSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      isButtonHidden: true
    };
    this.edit = this.edit.bind(this);
    this.submit = this.submit.bind(this);
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

  render() {
    return (
      <div className={`personal-section ${this.state.isEditing ? "editing" : ""}`} onClick={this.edit}>
        <h1>PERSONAL INFORMATION</h1>
        <PersonalInfo title="Name" isEditing={this.state.isEditing} />
        <PersonalInfo title="E-mail" isEditing={this.state.isEditing} />
        <PersonalInfo title="Phone number" isEditing={this.state.isEditing} />
        <button className="ok-button" onClick={this.submit} hidden={this.state.isButtonHidden}>OK</button>
      </div>
    );
  }
}

export default PersonalSection;
