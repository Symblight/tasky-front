import React from "react"

import { Icon } from "antd"

import { Wrapper, Item } from "./styled"

export function ColumnContent(onDelete) {
  return (
    <Wrapper>
      <Item key="remove" onClick={onDelete}>
        <Icon type="delete" />
        Удалить
      </Item>
    </Wrapper>
  )
}
