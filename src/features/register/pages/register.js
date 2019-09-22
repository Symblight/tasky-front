import React from "react"
import PropTypes from "prop-types"

import { compose } from "recompose"
import { LoginContainer, TitlePage } from "@tasky/components"
import { withUser, withGuest, withLayout } from "@features/common"

import { SignUp } from "../containers"

const enchance = compose(
  withUser,
  withGuest,
  withLayout("generic"),
)

const View = ({ ...props }) => {
  return (
    <LoginContainer>
      <TitlePage name="Регистрация" />
      <SignUp {...props} />
    </LoginContainer>
  )
}

export const SignUpPage = enchance(View)
