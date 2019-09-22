import React from "react"

import { TitlePage } from "@tasky/components"
import { compose } from "recompose"
import { withUser, withLogin, withLayout } from "@features/common"

import { Home } from "../containers"

const enchance = compose(
  withUser,
  withLogin,
  withLayout("default"),
)

export const View = ({ ...props }) => (
  <>
    <TitlePage name="Главная страница" />
    <Home {...props} />
  </>
)

export const HomePage = enchance(View)
