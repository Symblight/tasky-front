import React from "react"
import PropTypes from "prop-types"

import { Menu } from "antd"
import { Link } from "react-router-dom"

export const MenuNavigation = ({ username, currentKey }) => {
  return (
    <Menu defaultSelectedKeys={[currentKey]} mode="inline">
      <Menu.Item key="boards">
        <Link to={`/${username}/boards`}>Доски</Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link to="/">Главная страница</Link>
      </Menu.Item>
    </Menu>
  )
}

MenuNavigation.propTypes = {
  username: PropTypes.string,
  currentKey: PropTypes.string,
}
