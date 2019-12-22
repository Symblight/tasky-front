import React from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"

import { Label, Wrapper, ButtonNav } from "./styled"

export function CardNavigationPage({ onDelete }) {
  return (
    <Wrapper>
      <Label>Меню</Label>
      <ButtonNav>
        <Icon type="team" />
        <span>Участники</span>
      </ButtonNav>
      <ButtonNav>
        <Icon type="tag" />
        <span>Метки</span>
      </ButtonNav>
      <ButtonNav onClick={onDelete}>
        <Icon type="delete" />
        <span>Удалить</span>
      </ButtonNav>
    </Wrapper>
  )
}

CardNavigationPage.propTypes = {
  onDelete: PropTypes.func,
}
