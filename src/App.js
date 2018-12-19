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
import Calendar from "./views/calendar";
import Notes from "./views/notes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/moods" component={Moods} />
            <Route exact path="/mood/:mood" component={MoodDetail} />
            <Route exact path="/breathe" component={Breathe} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/notes" component={Notes} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
