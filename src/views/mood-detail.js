import React, { Component } from "react";
import { MOODS } from "../data/moods";
import { connect } from "react-redux";
import { get } from "lodash";
import { history } from "../store";
import Navbar from "../components/navbar";
import MoodCircle from "../components/mood-circle";

class MoodDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: MOODS.find(mood => mood.id === props.match.params.mood),
      notes: get(this.props.detail, "notes", "")
    };
  }
  goToNotes = () => {
    if (this.props.notes) {
      history.push("/calendar");
    } else {
      history.push("/notes");
    }
  };
  render() {
    console.log(this.props, this.state);
    const { mood, notes } = this.state;
    const { tagline, encouragement, id, tipsTitle } = mood;
    const percentage = Math.floor(Math.random() * 100);
    return (
      <div className="mood-detail">
        <Navbar callback={this.goToNotes} text={notes ? "BACK" : "NEXT"} />
        <div className="row header">
          <div className="column left">
            <MoodCircle mood={mood} />
          </div>
          <div className="column right">
            <p className="tagline">{tagline}</p>
            <p className="encouragement">{`${encouragement} ${percentage}% other users also felt ${id} today`}</p>
          </div>
        </div>
        {notes && (
          <>
            <div className="notes-title">On this day...</div>
            <div className="notes">{notes}</div>
            <hr />
          </>
        )}
        <div className="tips">
          <div className="row">
            <p className="tagline">{tipsTitle}</p>
          </div>
          <div className="row tip-row">
            <div className="column left">
              <img src={mood.tips[0].imageUrl} />
            </div>
            <div className="column right">
              <p className="tip-text">{mood.tips[0].description}</p>
            </div>
          </div>
          <div className="row tip-row">
            <div className="column left">
              <p className="tip-text">{mood.tips[1].description}</p>
            </div>
            <div className="column right">
              <img src={mood.tips[1].imageUrl} />
            </div>
          </div>
          <div className="row tip-row">
            <div className="column left">
              <img src={mood.tips[2].imageUrl} />
            </div>
            <div className="column right">
              <p className="tip-text">{mood.tips[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.app.detail
});

export default connect(
  mapStateToProps,
  {}
)(MoodDetail);
