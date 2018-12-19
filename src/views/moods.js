import React, { Component } from "react";
import { connect } from "react-redux";
import { MOODS } from "../data/moods";
import MoodCircle from "../components/mood-circle";

class Moods extends Component {
  render() {
    return (
      <div>
        <h2>Hey {this.props.user || " there friend"}, </h2>
        <h3>How are you feeling today?</h3>
        <div className="moods">
          {MOODS.map(mood => (
            <MoodCircle mood={mood} key={`mood_${mood.id}`} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.app.user
});

export default connect(
  mapStateToProps,
  {}
)(Moods);
