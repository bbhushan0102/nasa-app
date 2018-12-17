import React, { Component } from "react";
import "../main.css";

class Filters extends Component {
  state = {
    images: "",
    audio: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="image">Image</label>
        <input
          name="images"
          type="checkbox"
          id="images"
          checked={this.state.images}
          onChange={this.handleInputChange}
        />
        <label htmlFor="audio">Audio</label>
        <input
          name="audio"
          type="checkbox"
          id="audio"
          checked={this.state.audio}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
  handleInputChange = event => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.getFilter(this.state);
  };
}
export default Filters;
