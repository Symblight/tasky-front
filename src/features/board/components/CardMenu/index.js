import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"

import { MenuLabels } from "../MenuLabels"

import { Wrapper, ContextItem } from "./styled"

export const CardMenu = ({ onDelete }) => {
  const [targetMenu, setTargetMenu] = useState(null)

  const handleToggleMenu = useCallback((value) => setTargetMenu(value), [])

  const handleToggleLabels = () => {
    handleToggleMenu("labels")
  }

  return (
    <Wrapper>
      <ContextItem onClick={onDelete}>
        <Icon type="delete" />
        <span>Удалить</span>
      </ContextItem>
      <ContextItem onClick={handleToggleLabels}>
        <Icon type="tag" />
        <span>Метки</span>
      </ContextItem>
      <ContextItem>
        <Icon type="team" />
        <span>Участники</span>
      </ContextItem>
      {targetMenu === "labels" && <MenuLabels />}
    </Wrapper>
  )
}

CardMenu.propTypes = {
  onDelete: PropTypes.func,
}
