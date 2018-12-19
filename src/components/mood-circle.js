import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../store";
import { recordMood } from "../modules/actions";

class MoodCircle extends Component {
  goToMood = mood => {
    this.props.recordMood(mood);
    history.push(`/mood/${mood.id}`);
  };
  render() {
    const style = {
      backgroundColor: this.props.mood.color
    };
    return (
      <div
        className="mood-circle"
        style={style}
        onClick={() => this.goToMood(this.props.mood)}
      >
        {this.props.mood.id}
      </div>
    );
  }
}
export default connect(
  null,
  { recordMood }
)(MoodCircle);
