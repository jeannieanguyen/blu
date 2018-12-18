import * as types from "./types";
const initialState = {
  joinModalOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_JOIN_MODAL:
      return {
        ...state,
        joinModalOpen: true
      };
    default:
      return state;
  }
};
