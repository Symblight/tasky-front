import Immutable from "immutable"

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  USER_SUCCESS,
  USER_FAIL,
  LOGOUT_SUCCESS,
} from "../constants"

const initialState = Immutable.fromJS({
  user: {},
  authenticated: false,
  loading: true,
  authAttempt: false,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
    case USER_SUCCESS: {
      const user = Immutable.fromJS(action.payload.data)
      return state
        .set("authenticated", true)
        .set("loading", false)
        .set("authAttempt", true)
        .set("user", user)
    }
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
    case USER_FAIL: {
      return state
        .set("authenticated", false)
        .set("loading", false)
        .set("authAttempt", true)
    }
    case LOGOUT_SUCCESS: {
      return state.set("user", Immutable.fromJS({})).set("authenticated", false)
    }
    default: {
      return state
    }
  }
}
