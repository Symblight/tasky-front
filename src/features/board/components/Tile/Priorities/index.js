import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

export const Priorities = ({ data }) => {
  return (
    <Wrapper>
      <span>Priorities</span>
    </Wrapper>
  )
}

Priorities.propTypes = {
  data: PropTypes.array,
}
