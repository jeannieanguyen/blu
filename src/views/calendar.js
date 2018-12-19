import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { history } from "../store";
import Block from "../components/block";
import Navbar from "../components/navbar";
import MoodCircle from "../components/mood-circle";
import { S3_ASSET_PATH } from "../data/moods";

class Calendar extends Component {
  goToBreathe = e => {
    e.preventDefault();
    history.push("/breathe");
  };
  goToHome = () => {
    history.push("/");
  };
  render() {
    const { day, moodDays } = this.props;

    return (
      <div className="calendar">
        <Navbar text="LOGOUT" callback={this.goToHome} />

        {!isEmpty(day) && (
          <div className="row header">
            <div className="column left">
              <MoodCircle mood={day.mood} />
            </div>
            <div className="column right">
              <p className="tagline">Today you felt {day.mood.id}</p>
              <p className="encouragement">Good or bad, a day's just a day.</p>
            </div>
          </div>
        )}
        <button className="breathe-button" onClick={this.goToBreathe}>
          <img src={`${S3_ASSET_PATH}lotus.png`} />
          <span>TAKE A BREATH</span>
        </button>
        <div className="block-wrapper">
          <h2>2018</h2>
          {moodDays.map((day, index) => (
            <Block day={day} key={`calendar_day_${index}`} />
          ))}
          {!isEmpty(day) && <Block day={day} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moodDays: state.app.moodDays,
  day: state.app.day
});

export default connect(
  mapStateToProps,
  {}
)(Calendar);
