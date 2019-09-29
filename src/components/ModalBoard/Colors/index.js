import React from "react"
import PropTypes from "prop-types"

import _ from "lodash"
import { Color } from "../Color"

import { Wrapper } from "./styled"

export const Colors = ({ data, targetColor, onClick }) => {
  return (
    <Wrapper>
      {data &&
        data.map((color) => (
          <Color
            key={_.uniqueId("color-")}
            data={color}
            isActive={targetColor === color}
            onClick={onClick}
          />
        ))}
    </Wrapper>
  )
}

Colors.propTypes = {
  data: PropTypes.array,
  targetColor: PropTypes.string,
  onClick: PropTypes.func,
}
