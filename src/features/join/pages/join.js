import React from "react"
import PropTypes from "prop-types"

import { LoginContainer } from "@tasky/components"
import { Join } from "../containers"

export const JoinPage = ({ ...props }) => {
  return (
    <LoginContainer>
      <Join {...props} />
    </LoginContainer>
  )
}
