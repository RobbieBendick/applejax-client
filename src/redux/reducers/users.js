import { USER } from "../actions/types";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER.LOADED:
      return { ...state, ...payload };

    default:
      return state;
  }
};
