import React, { Component } from "react";
import * as api from "../api";
import "../main.css";
class Metadata extends Component {
  state = {
    metadata: {}
  };
  render() {
    console.log(this.state.metadata);
    return <div className="main">hi how are you ...it is linked</div>;
  }
  componentDidMount = () => {
    this.fetchMetadata();
  };
  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.fetchMetadata();
    }
  };
  fetchMetadata = () => {
    let id = this.props.nasa_id;
    console.log(id);
    api
      .getMetadata(id)
      .then(data => {
        this.setState({
          metadata: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export default Metadata;
