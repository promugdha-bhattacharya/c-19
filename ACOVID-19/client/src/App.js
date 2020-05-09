import React, { Component } from "react";

import { Cards, Chart, Country } from "./omponents";
import styles from "./App.module.css";
import { fetchData } from "./api";
import pic from "./image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fdata = await fetchData();
    this.setState({ data: fdata });
  }
  handler = async (country) => {
    const fdata = await fetchData(country);
    this.setState({ data: fdata, country: country });
  };
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.img} src={pic} alt="COVID-19" />
        <Cards data={this.state.data} />
        <Country handler={this.handler} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}
export default App;
