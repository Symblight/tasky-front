import React from "react"
import PropTypes from "prop-types"

import { COLORS, LABELS_COLORS } from "@lib/mocks/colors"

import { Color } from "./Color"

import { Colors } from "./styled"

export function BackgroundBoard({ background, onColor }) {
  return (
    <Colors>
      {COLORS.map((data) => (
        <Color
          isActive={background === data}
          key={data}
          data={data}
          onClick={onColor}
          color={data}
        />
      ))}
    </Colors>
  )
}

BackgroundBoard.propTypes = {
  background: PropTypes.string,
  onColor: PropTypes.func,
}
