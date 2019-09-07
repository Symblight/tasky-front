import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

export const Block = ({ children, className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}

Block.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
