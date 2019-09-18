import React from "react"

import { Icon } from "antd"

import { Wrapper, Item } from "./styled"

export const ColumnContent = (onDelete) => (
  <Wrapper>
    <Item key="remove" onClick={onDelete}>
      <Icon type="delete" />
      Удалить
    </Item>
    <Item key="colors">Цвет</Item>
  </Wrapper>
)
