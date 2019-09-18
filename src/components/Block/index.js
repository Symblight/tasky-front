import React, { forwardRef, useRef } from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import { Wrapper, WrapperLink } from "./styled"

export const Block = forwardRef(
  ({ children, className, to, ...props }, ref) => {
    if (to) {
      return (
        <WrapperLink to={to}>
          <Wrapper ref={ref} className={className} {...props}>
            {children}
          </Wrapper>
        </WrapperLink>
      )
    }
    return (
      <Wrapper ref={ref} className={className} {...props}>
        {children}
      </Wrapper>
    )
  },
)

Block.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
}
