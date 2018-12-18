import { combineReducers } from "redux";
import reducer from "./reducer";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    app: reducer,
    router: connectRouter(history)
  });
