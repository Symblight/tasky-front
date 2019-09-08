import React from "react"

import { TitlePage } from "@tasky/components"
import { Home } from "../containers"

export const HomePage = ({ ...props }) => (
  <>
    <TitlePage name="Главная страница" />
    <Home {...props} />
  </>
)
