import * as api from "../api";
import React, { Component } from "react";
import "../main.css";
class Asset extends Component {
  state = {
    asset: {}
  };
  render() {
    const image = this.state.asset.collection;

    return (
      <main>
        <div className="main">
          <img
            src={image && image.items[0].href}
            width="100"
            height="100"
            alt=""
          />
        </div>
      </main>
    );
  }
  componentDidMount = () => {
    this.fetchAsset();
  };
  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.fetchAsset();
    }
  };
  fetchAsset = () => {
    let id = this.props.nasa_id;
    api
      .getAsset(id)
      .then(data => {
        this.setState({
          asset: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export default Asset;
