import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

export const Tile = ({ data }) => {
  return <Link to={`projects/${data.id}`}>{data.title}</Link>
}

Tile.propTypes = {
  data: PropTypes.object,
}
