import React from "react"
import PropTypes from "prop-types"

import { Tile } from "../Tile"

export const Tiles = ({ data }) => {
  return data.map((item) => <Tile key={item.id} data={item} />)
}

Tiles.propTypes = {
  data: PropTypes.array,
}
