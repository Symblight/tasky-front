import React from "react"
import PropTypes from "prop-types"

import { Avatar } from "@tasky/components"

import { Wrapper } from "./styled"

export const Author = ({ data }) => {
  return (
    <Wrapper>
      <Avatar />
    </Wrapper>
  )
}

Author.propTypes = {
  data: PropTypes.object,
}
