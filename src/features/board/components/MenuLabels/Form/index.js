import React from "react"
import PropTypes from "prop-types"

import { Input } from "antd"
import { HEX_COLORS, LABELS_COLORS } from "@lib/mocks/colors"

import { Color } from "./Color"

import { Colors } from "./styled"

export function Form() {
  return (
    <>
      <Input label="Название" />
      <Colors>
        {LABELS_COLORS.map((data) => (
          <Color
            isActive
            key={HEX_COLORS[data.color].hex}
            data={HEX_COLORS[data.color].hex}
            onClick={() => null}
          />
        ))}
      </Colors>
    </>
  )
}
