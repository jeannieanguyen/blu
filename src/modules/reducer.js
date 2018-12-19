import * as types from "./types";
import { MOOD_DAYS } from "../data/calendar";
import moment from "moment";
const initialState = {
  user: "",
  mood: {},
  notes: "",
  moodDays: MOOD_DAYS
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, user: action.data };
    case types.RECORD_MOOD: {
      return {
        ...state,
        day: {
          mood: {
            ...action.data
          },
          date: moment().format("DD"),
          month: moment().format("MMM")
        }
      };
    }
    case types.RECORD_NOTES: {
      return {
        ...state,
        day: {
          ...state.day,
          notes: action.data
        }
      };
    }
    case types.SET_MOOD_DETAIL: {
      return {
        ...state,
        detail: action.data
      };
    }
    default:
      return state;
  }
};
