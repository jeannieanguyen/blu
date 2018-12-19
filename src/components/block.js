import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../store";
import { setMoodDetail } from "../modules/actions";

class Block extends Component {
  selectMood = () => {
    this.props.setMoodDetail(this.props.day);
    history.push(`/mood/detail/${this.props.day.mood.id}`);
  };
  render() {
    const { day } = this.props;
    const style = { backgroundColor: day.mood.color };
    return (
      <div className="calendar-block" style={style} onClick={this.selectMood}>
        <p>
          <span>{day.month}</span>
          <span>{day.date}</span>
        </p>
        {day.notes && <div className="triangle" />}
      </div>
    );
  }
}

export default connect(
  null,
  { setMoodDetail }
)(Block);
