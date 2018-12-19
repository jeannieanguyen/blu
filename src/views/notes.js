import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../store";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";
import Navbar from "../components/navbar";
import { recordNotes } from "../modules/actions";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: "" };
  }
  saveNotes = () => {
    this.props.recordNotes(this.state.notes);
    history.push("/calendar");
  };
  updateNotes = e => {
    this.setState({
      notes: e.target.value
    });
  };
  render() {
    return (
      <div className="notes">
        <Navbar callback={this.saveNotes} />
        <div className="container">
          <h3> Take a moment. What happened today? </h3>
          <hr />
          <FormGroup>
            <InputGroup>
              <FormControl
                type="notes"
                placeholder="Today I..."
                onChange={this.updateNotes}
              />
            </InputGroup>
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { recordNotes }
)(Notes);
