import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import { Animate } from "../Animate"
import { Wrapper, StyledBlock } from "./styled"

export const Board = ({ data, className, background, index, ...props }) => {
  if (data.removed) {
    return (
      <StyledBlock
        animate={Animate}
        color={background}
        index={index}
        className={className}
        {...props}
      >
        <Wrapper>{data.title}</Wrapper>
      </StyledBlock>
    )
  }
  return (
    <Link to={`/b/${data.uuid}`} className={className}>
      <StyledBlock
        animate={Animate}
        color={background}
        index={index}
        {...props}
      >
        <Wrapper>{data.title}</Wrapper>
      </StyledBlock>
    </Link>
  )
}

Board.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  background: PropTypes.string,
  index: PropTypes.number,
}
