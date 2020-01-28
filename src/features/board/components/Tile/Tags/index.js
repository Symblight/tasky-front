import React from "react"
import PropTypes from "prop-types"

import { HEX_COLORS } from "@lib/mocks/colors"

import { Wrapper, StyledTag } from "./styled"

export function Tags({ data }) {
  return (
    <Wrapper>
      {data.map(
        (value) =>
          value && (
            <StyledTag key={value.color} color={HEX_COLORS[value.color].hex} />
          ),
      )}
    </Wrapper>
  )
}

Tags.propTypes = {
  data: PropTypes.array,
}
