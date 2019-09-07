import React from "react"
import PropTypes from "prop-types"

import { Menu } from "antd"

import { Logo } from "./styled"

export const Header = () => {
  return (
    <>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
      </Menu>
    </>
  )
}
