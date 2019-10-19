import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"

import { Button } from "antd"
import { Dropdown } from "@tasky/components"
import { HEX_COLORS, LABELS_COLORS } from "@lib/mocks/colors"

import { Create } from "./Create"

import { Color } from "./Color"

import { WrapActions, Wrapper } from "./styled"

export const Labels = ({ onClick, onEditToggle }) => {
  const [activeColor, setColor] = useState(null)

  const handleHover = useCallback((value) => {
    setColor(value)
  }, [])

  return (
    <Wrapper>
      <ul>
        {LABELS_COLORS.map((data) => (
          <Color
            active={activeColor === data.color}
            onMouseEnter={() => handleHover(data.color)}
            key={HEX_COLORS[data.color].hex}
            color={HEX_COLORS[data.color].hex}
            shadow={HEX_COLORS[data.color].shadow}
            onEditToggle={onEditToggle}
          />
        ))}
      </ul>
      <WrapActions>
        <Dropdown
          title="Создать метку"
          index={0}
          DropdownButton={({ ...props }) => (
            <Button {...props}>Создать новую метку</Button>
          )}
        >
          <Create />
        </Dropdown>
      </WrapActions>
    </Wrapper>
  )
}

Labels.propTypes = {
  onClick: PropTypes.func,
  onEditToggle: PropTypes.func,
}
