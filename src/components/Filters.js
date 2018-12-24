import React, { Component } from "react";
import "../main.css";

class Filters extends Component {
  state = {
    value: "image"
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filter <br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="image">images</option>
            <option value="video">Videos</option>
           
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  handleChange = event => {
    let value = event.target.value;
    this.setState({
      value: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getFilter(this.state.value);
  };
}
export default Filters;
