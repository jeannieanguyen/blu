import * as types from "./types";

export const loginUser = data => dispatch => {
  dispatch({
    type: types.LOGIN_USER,
    data
  });
};

export const recordMood = data => dispatch => {
  dispatch({
    type: types.RECORD_MOOD,
    data
  });
};

export const recordNotes = data => dispatch => {
  dispatch({
    type: types.RECORD_NOTES,
    data
  });
};

export const setMoodDetail = data => dispatch => {
  dispatch({
    type: types.SET_MOOD_DETAIL,
    data
  });
};
