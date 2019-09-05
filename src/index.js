import React from "react"
import ReactDOM from "react-dom"

import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"

import { App } from "./app"

const root = document.querySelector("#root")
const history = createBrowserHistory()

const render = () => {
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    root,
  )
}

if (module.hot) {
  module.hot.accept("./app", render)
}

render()
