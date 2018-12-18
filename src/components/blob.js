import React, { Component } from "react";

export default class Blob extends Component {
  render() {
    return (
      <svg
        className={this.props.className || "blob"}
        id="organic-blob"
        width="300"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        filter="url(#goo)"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <circle id="Circle1" />
        <circle id="Circle2" />
        <circle id="Circle3" />
        <circle id="Circle4" />
      </svg>
    );
  }
}
