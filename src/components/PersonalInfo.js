import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    if(this.props.isEditing) {
      return (
        <div className="personal-info">
          <h2>{this.props.title}:</h2>
          <input value={this.state.text} onChange={this.handleChange} />
        </div>
      );
    }
    else {
      return (
        <div className="personal-info">
          <h2>{this.props.title}:</h2>
          <p>{this.state.text}</p>
        </div>
      );
    }
  }
}

export default PersonalInfo;
