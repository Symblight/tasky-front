import React from "react"
import PropTypes from "prop-types"

import { LoginContainer, TitlePage } from "@tasky/components"
import { Join } from "../containers"

export const JoinPage = ({ ...props }) => {
  return (
    <LoginContainer>
      <TitlePage name="Авторизация" />
      <Join {...props} />
    </LoginContainer>
  )
}
