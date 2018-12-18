import React, { Component } from "react";
import { history } from "../store";
import Blob from "../components/blob";

export default class Home extends Component {
  routeToLogin = () => {
    history.push("/login");
  };
  render() {
    return (
      <div className="home">
        <Blob />
        <h1>BLÜ</h1>
        <button onClick={this.routeToLogin}> Login </button>
      </div>
    );
  }
}
