import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import Immutable from "immutable"

import { LOGOUT_SUCCESS, userReducers as user } from "@features/common"
import { boardsReducers as boardsByUser } from "@features/boards"

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
    boardsByUser,
  })

export const rootReducer = (history) => (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    // eslint-disable-next-line no-param-reassign
    // state = null
    // window.location.replace("/login")
  }
  return appReducer(history)(state, action)
}
