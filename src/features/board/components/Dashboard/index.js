import React from "react"

import { Button } from "antd"

import { Title, Item, Wrapper, MainItems } from "./styled"

export const Dashboard = () => {
  return (
    <Wrapper>
      <MainItems>
        <Item>
          <Title>Название доски</Title>
        </Item>
        <Item>
          <Button>Команда</Button>
        </Item>
        <Item>
          <Button>Пригласить</Button>
        </Item>
      </MainItems>
      <Button>Меню</Button>
    </Wrapper>
  )
}
