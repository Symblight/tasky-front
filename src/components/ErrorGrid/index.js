import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

export const ErrorGrid = ({ message }) => (
  <Wrapper>{message || "Error"}</Wrapper>
)

ErrorGrid.propTypes = {
  message: PropTypes.string,
}
