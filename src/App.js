import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./main.css";
import axios from "axios";
import Search from "./components/Search";
import AstroData from "./components/AstroData";
import Filters from "./components/Filters";
import Asset from "./components/Asset";

class App extends Component {
  state = {
    weather: [],
    query: "",
    loading: true
  };

  render() {
    if (this.state.loading) return <h1>loading ....</h1>;
    return (
      <div className="Frame">
        <div className="header">
          <Search search={this.getQuery} />
        </div>

        <br />
        <br />
        <div className="main">
          {this.state.weather.data && (
            <AstroData data={this.state.weather.data} />
          )}
        </div>
        <div className="section">
          <Filters getFilter={this.getFilter} />
        </div>
        <Router>
          <AstroData path="/search" />
          <Asset path="/asset/:nasa_id" />
        </Router>
      </div>
    );
  }
  getQuery = search => {
    this.setState({
      query: search
    });
  };
  getFilter = getData => {
    this.setState({
      image: getData
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchData(this.state.query);
    }
  }

  fetchData = (query = "moon") => {
    axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then(data => {
        this.setState({ weather: data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export default App;

// .get(
//   `https://images-api.nasa.gov/search?q=${city}&media_type=image,video`
// )
