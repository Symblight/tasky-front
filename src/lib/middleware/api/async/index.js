import isFunction from "lodash/isFunction"

import { commitRequest } from "../api"

export function asyncMiddleware(cookies) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (isFunction(action)) {
      return action(dispatch, getState)
    }

    let result

    if (action.meta && action.meta.async) {
      if (action.meta.request) {
        const state = getState()
        let token

        if (action.meta.request.auth !== false) {
          const { token: tokenAction } = action
          token = tokenAction
        }

        next(commitRequest(action, { token, cookies }))
      } else {
        next(action)
      }
    } else {
      result = next(action)
    }
    return result
  }
}
