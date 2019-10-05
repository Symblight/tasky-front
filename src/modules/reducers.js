import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import { LOGOUT_SUCCESS, userReducers as user } from "@features/common"
import { boardsReducers as boardsByUser } from "@features/boards"
import { boardReducers as board } from "@features/board"

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
    boardsByUser,
    board,
  })

export const rootReducer = (history) => (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    // eslint-disable-next-line no-param-reassign
    // state = null
    // window.location.replace("/login")
  }
  return appReducer(history)(state, action)
}
