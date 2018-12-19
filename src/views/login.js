import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../store";
import { loginUser } from "../modules/actions";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";

class Login extends Component {
  updateField = e => {
    this.setState({
      user: e.target.value
    });
  };
  routeToMoods = e => {
    e.preventDefault();
    this.props.loginUser(this.state.user);
    history.push("/moods");
  };
  render() {
    return (
      <form className="login">
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Username"
              onChange={this.updateField}
            />
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

const LoginPage = props => <Login {...props} />;

export default connect(
  null,
  { loginUser }
)(LoginPage);
