import React from "react"
import PropTypes from "prop-types"

import { compose } from "recompose"
import { LoginContainer, TitlePage } from "@tasky/components"
import { withUser, withGuest, withLayout } from "@features/common"

import { Join } from "../containers"

const enchance = compose(
  withUser,
  withGuest,
  withLayout("generic"),
)

const View = ({ ...props }) => {
  return (
    <LoginContainer>
      <TitlePage name="Авторизация" />
      <Join {...props} />
    </LoginContainer>
  )
}

export const JoinPage = enchance(View)
