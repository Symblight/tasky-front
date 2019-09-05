import React from "react"
import PropTypes from "prop-types"

import { Tile } from "../Tile"
import { StyledWrapper } from "./styled"

export const Tiles = ({ data }) => {
  return (
    <StyledWrapper>
      {data.map((item) => (
        <Tile key={item.id} data={item} />
      ))}
      <Tile isNew />
    </StyledWrapper>
  )
}

Tiles.propTypes = {
  data: PropTypes.array,
}
