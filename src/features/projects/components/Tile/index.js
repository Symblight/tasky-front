import React from "react"
import PropTypes from "prop-types"

import { StyledCard, StyledLink } from "./styled"

export const Tile = ({ data, isNew }) => {
  if (isNew) {
    return <StyledCard isnew="true">Создать новый проект</StyledCard>
  }

  return (
    <StyledLink to={`projects/${data.id}`}>
      <StyledCard>{data.title}</StyledCard>
    </StyledLink>
  )
}

Tile.propTypes = {
  data: PropTypes.object,
  isNew: PropTypes.bool,
}
