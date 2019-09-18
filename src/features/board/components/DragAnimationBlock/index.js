import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

export const DragAnimationBlock = ({ children, isDragging, ...props }) => {
  return (
    <Wrapper isDragging={isDragging} {...props}>
      {children}
    </Wrapper>
  )
}

DragAnimationBlock.propTypes = {
  children: PropTypes.node,
  isDragging: PropTypes.bool,
}
