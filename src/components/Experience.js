import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      establishment: '',
      title: '',
      description: ''
    };
    this.handleEstablishmentChange = this.handleEstablishmentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleEstablishmentChange(event) {
    this.setState({establishment: event.target.value});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleDateChange(event) {
    this.setState({date: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  render() {
    if(this.props.isEditing) {
      return (
        <div className="experience">
          <input value={this.state.establishment} placeholder="Establishment" onChange={this.handleEstablishmentChange} />
          <div>
            <input value={this.state.title} placeholder="Title/Position" onChange={this.handleTitleChange} />
            |
            <input value={this.state.date} placeholder="Date" onChange={this.handleDateChange} />
          </div>
          <input value={this.state.description} placeholder="Description" onChange={this.handleDescriptionChange} />
          <button id={this.props.id} onClick={this.props.deleteExperience}>DELETE</button>
        </div>
      );
    }
    else {
      return (
        <div className="experience">
          <h2>{this.state.establishment}</h2>
          <div>
            <h3>{this.state.title}|{this.state.date}</h3>
          </div>
          <p>{this.state.description}</p>
        </div>
      );
    }
  }
}

export default Experience;
