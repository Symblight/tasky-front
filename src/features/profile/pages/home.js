import React from "react"
import PropTypes from "prop-types"

import { HomeContainer, TitlePage } from "@tasky/components"
import { compose } from "recompose"
import { withUser, withLayout } from "@features/common"

import { Profile } from "../containers"

const enchance = compose(
  withUser,
  withLayout("default"),
)

const View = ({ ...props }) => {
  return (
    <HomeContainer>
      <TitlePage name="Профиль" />
      <Profile {...props} />
    </HomeContainer>
  )
}

export const HomePage = enchance(View)
