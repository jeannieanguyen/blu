import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" onClick={this.props.callback}>
        <span>{this.props.text || "NEXT"}</span>
      </div>
    );
  }
}
