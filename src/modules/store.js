import { createStore, compose, applyMiddleware } from "redux"
import { routerMiddleware } from "connected-react-router"
import { createLogger } from "redux-logger"

import { apiMiddleware, apiError, asyncMiddleware } from "@lib/middleware"

import { rootReducer } from "./reducers"

/**
 * Configure the store for the DEV mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */

const loggerMiddleware = createLogger({
  predicate: (getState, action) =>
    !action.type.startsWith("@@router/") &&
    process.env.NODE_ENV === "development",
  collapsed: true,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle, max-len

export const configureStore = ({ history, initialState = {} } = {}) => {
  const middlewares = [
    routerMiddleware(history),
    asyncMiddleware(),
    apiMiddleware,
    apiError,
    loggerMiddleware,
  ]

  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers").default // eslint-disable-line global-require

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
