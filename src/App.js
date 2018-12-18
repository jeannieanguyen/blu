import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import { Route } from "react-router-dom";
import "./App.scss";
import Home from "./views/home";
import Moods from "./views/moods";
import MoodDetail from "./views/mood-detail";
import Login from "./views/login";
import Breathe from "./views/breathe";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }
  login = username => {
    this.setState({
      user: username
    });
  };
  render() {
    const { user } = this.state;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} login={this.login} />
            <Route exact path="/moods" component={Moods} user={user} />
            <Route exact path="/mood/:mood" component={MoodDetail} />
            <Route exact path="/breathe" component={Breathe} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
