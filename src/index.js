import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { createBrowserHistory } from "history"

import { App } from "./webroot/app"
import { configureStore } from "./modules/store"

const root = document.querySelector("#root")
const loader = document.querySelector("#loader")

const history = createBrowserHistory()
const store = configureStore({ history })

const removeLoader = () => loader && loader.remove()

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    root,
  )
}

if (module.hot) {
  module.hot.accept("./webroot/app", render)
}

render()
removeLoader()
