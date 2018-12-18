import React, { Component } from "react";
import { history } from "../store";

export default class MoodCircle extends Component {
  goToMood = mood => {
    history.push(`/mood/${mood}`);
  };
  render() {
    const style = {
      backgroundColor: this.props.mood.color
    };
    return (
      <div
        className="mood-circle"
        style={style}
        onClick={() => this.goToMood(this.props.mood.id)}
      >
        {this.props.mood.id}
      </div>
    );
  }
}
