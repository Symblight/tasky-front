import React from "react"
import PropTypes from "prop-types"

import { Button } from "antd"

import { Title, Item, Wrapper, MainItems } from "./styled"

export const Dashboard = ({ title }) => {
  return (
    <Wrapper>
      <MainItems>
        <Item>
          <Title>{title}</Title>
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

Dashboard.propTypes = {
  title: PropTypes.string,
}
