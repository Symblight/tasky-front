import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

const COLOR = {
  blue: "#1964ff",
  green: "green",
}

export const Tag = ({ color, className, children }) => (
  <Wrapper color={COLOR[color]} className={className}>
    {children}
  </Wrapper>
)

Tag.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}
