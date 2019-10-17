import React from "react"
import PropTypes from "prop-types"

import { Dropdown } from "@tasky/components"

import { Labels } from "./Labels"
import { Create } from "./Create"

import { Wrapper } from "./styled"

export const MenuLabels = () => {
  return (
    <Wrapper>
      <Dropdown index={0}>
        <Labels />
        <Create />
      </Dropdown>
    </Wrapper>
  )
}
