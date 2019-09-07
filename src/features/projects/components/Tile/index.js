import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import { Wrapper } from "./styled"

export const Tile = ({ data, isNew }) => {
  return (
    <Link to={`projects/${data.id}`}>
      <Wrapper>{data.title}</Wrapper>
    </Link>
  )
}

Tile.propTypes = {
  data: PropTypes.object,
  isNew: PropTypes.bool,
}
