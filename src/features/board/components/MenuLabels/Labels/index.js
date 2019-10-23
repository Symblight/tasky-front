import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"

import { Button } from "antd"
import { HEX_COLORS } from "@lib/mocks/colors"

import { Color } from "./Color"

import { WrapActions, Wrapper } from "./styled"

export function Labels({
  labelsByCard,
  labels,
  onClick,
  onCreate,
  onEditToggle,
}) {
  const [activeColor, setColor] = useState(null)

  return (
    <Wrapper>
      <ul>
        {labels.toJS().map((data) => (
          <Color
            active={!!labelsByCard.find((c) => c.color === data.color)}
            // onMouseEnter={() => handleHover(data.color)}
            key={HEX_COLORS[data.color].hex}
            color={HEX_COLORS[data.color].hex}
            shadow={HEX_COLORS[data.color].shadow}
            onEditToggle={onEditToggle}
            onClick={onClick}
            name={data.color}
            id={data.id}
          />
        ))}
      </ul>
      <WrapActions>
        <Button onClick={onCreate}>Создать новую метку</Button>
      </WrapActions>
    </Wrapper>
  )
}

Labels.propTypes = {
  labels: PropTypes.object,
  onClick: PropTypes.func,
  onCreate: PropTypes.func,
  onEditToggle: PropTypes.func,
  labelsByCard: PropTypes.array,
}
