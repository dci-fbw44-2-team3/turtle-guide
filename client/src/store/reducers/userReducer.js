import { SIGN_UP, SIGN_UP_ERROR, SIGN_IN, SIGN_IN_ERROR } from "../types";

const initialState = {
  isAuthenticated: false,
  userProfile: {},
  token: null,
  accountIdentifier: {},
  loading: true,
  error: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  /**
   * @desc Switches the action besed on the types i.e. SIGN_UP
   */
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state, // ! IMPORTANT spreads the actual state
        isAuthenticated: true,
        userProfile: action.payload,
        loading: false,
      };

    case SIGN_UP_ERROR:
      return {
        ...state, // ! IMPORTANT spreads the actual state
        isAuthenticated: false,
        token: null,
        error: action.payload,
        loading: false,
      };

    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        loading: false,
      };

    case SIGN_IN_ERROR:
      return {
        ...state, // ! IMPORTANT spreads the actual state
        isAuthenticated: false,
        token: null,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};