import * as types from "./types";

export const toggleJoinModal = () => dispatch => {
  dispatch({
    type: types.TOGGLE_JOIN_MODAL
  });
};
