import React from "react"
import PropTypes from "prop-types"

import { Button } from "antd"

import { Title, Item, Wrapper, MainItems } from "./styled"

export const Dashboard = ({ title, onMenuToggle }) => {
  return (
    <Wrapper>
      <MainItems>
        <Item>
          <Title>{title}</Title>
        </Item>
        <Item>
          <span>Команда</span>
        </Item>
        <Item>
          <Button>Пригласить</Button>
        </Item>
      </MainItems>
      <Button onClick={onMenuToggle}>Меню</Button>
    </Wrapper>
  )
}

Dashboard.propTypes = {
  title: PropTypes.string,
  onMenuToggle: PropTypes.func,
}
