import React from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"

import { Wrapper, ContextItem } from "./styled"

export const CardMenu = ({ onDelete }) => {
  return (
    <Wrapper>
      <ContextItem onClick={onDelete}>
        <Icon type="delete" />
        <span>Удалить</span>
      </ContextItem>
      <ContextItem>
        <Icon type="tag" />
        <span>Метки</span>
      </ContextItem>
      <ContextItem>
        <Icon type="team" />
        <span>Участники</span>
      </ContextItem>
    </Wrapper>
  )
}

CardMenu.propTypes = {
  onDelete: PropTypes.func,
}
