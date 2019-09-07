import React from "react"
import PropTypes from "prop-types"

import { Menu } from "antd"
import { Link } from "react-router-dom"

import { Wrapper } from "./styled"

export const MenuNavigation = ({ username, currentKey }) => {
  return (
    <Wrapper defaultSelectedKeys={[currentKey]} mode="inline">
      <Menu.Item key="boards">
        <Link to={`/${username}/boards`}>Доски</Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link to="/">Главная страница</Link>
      </Menu.Item>
    </Wrapper>
  )
}

MenuNavigation.propTypes = {
  username: PropTypes.string,
  currentKey: PropTypes.string,
}
