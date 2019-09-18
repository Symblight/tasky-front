import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

export const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  })

// export const rootReducer = (history) => (state, action) => {
//   if (action.type === LOGOUT_SUCCESS) {
//     removeToken()
//     // eslint-disable-next-line no-param-reassign
//     state = undefined
//   }
//   return appReducer(history)(state, action)
// }
