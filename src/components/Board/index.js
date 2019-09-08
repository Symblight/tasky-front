import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import { Animate } from "../Animate"
import { Wrapper, StyledBlock } from "./styled"

export const Board = ({ data, className, color, index, ...props }) => {
  return (
    <Link to={`/b/${data.id}`} className={className}>
      <StyledBlock animate={Animate} color={color} index={index} {...props}>
        <Wrapper>{data.title}</Wrapper>
      </StyledBlock>
    </Link>
  )
}

Board.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  index: PropTypes.number,
}
