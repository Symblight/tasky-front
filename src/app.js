import React from "react"

import { AlertProvider } from "@tasky/components"

import { GlobalStyles } from "./global-styled"
import { Routes } from "./routes"

import "antd/dist/antd.css"

export const App = () => (
  <>
    <GlobalStyles />
    <AlertProvider>
      <Routes />
    </AlertProvider>
  </>
)
