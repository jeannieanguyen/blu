import React, { Component } from "react";
import { history } from "../store";
import Blob from "../components/blob";

export default class Breathe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breaths: 0,
      inhale: false,
      breathing: false
    };
  }
  start = () => {
    this.setState({
      breathing: true
    });

    this.interval = setInterval(() => {
      this.setState({
        inhale: !this.state.inhale,
        breaths: !this.state.inhale
          ? this.state.breaths + 1
          : this.state.breaths
      });
      console.log(this.state.breaths);
      if (this.state.breaths === 4) {
        clearInterval(this.interval);
        this.setState({
          breathing: false,
          breaths: 0,
          inhale: false
        });
        history.push("/calendar");
      }
    }, 6000);
  };
  getBlob = () => {
    const blobSize = this.state.inhale ? "grow" : "shrink";
    const text = this.state.inhale ? "INHALE" : "EXHALE";
    return (
      <>
        {this.state.breaths > 0 && <h2 className="color-change">{text}</h2>}
        <Blob className={blobSize} />
        <div className="dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </>
    );
  };
  getCircle = () => {
    return (
      <div onClick={this.start}>
        <Blob className="static" />
        <h1>START</h1>
      </div>
    );
  };
  render() {
    return (
      <div className="home breathe">
        {this.state.breathing ? this.getBlob() : this.getCircle()}
      </div>
    );
  }
}
