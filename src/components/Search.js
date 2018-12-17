import React, { Component } from "react";
class Search extends Component {
  state = {
    query: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search</label>
        <input
          onChange={this.handleChange}
          type="text"
          id="query"
          placeholder="SEARCH ..... i.e moon"
          value={this.state.query}
        />
        <button id="search">SEARCH</button>
        <br />
      </form>
    );
  }
  handleChange = event => {
    let value = event.target.value;
    this.setState({
      query: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.query);
    this.setState({ query: "" });
  };
}
export default Search;
