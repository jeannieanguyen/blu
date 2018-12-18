import React, { Component } from "react";
import { history } from "../store";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";

export default class Login extends Component {
  routeToMoods = () => {
    this.props.login();
    history.push("/moods");
  };
  render() {
    return (
      <form className="login">
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Username" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <FormControl type="password" placeholder="Password" />
          </InputGroup>
        </FormGroup>

        <button onClick={this.routeToMoods}> SUBMIT </button>
      </form>
    );
  }
}
