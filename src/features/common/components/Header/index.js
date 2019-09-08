import React from "react"
import PropTypes from "prop-types"

import { Icon, Menu } from "antd"
import { Link } from "react-router-dom"

import { USER } from "@lib/mocks/user"
import { Avatar } from "@tasky/components"

import { StyledItem, StyledMenu } from "./styled"

const { SubMenu } = Menu

export const Header = () => {
  const renderSubmenu = () => {
    return (
      <Avatar data={{ firstname: USER.firstname, lastname: USER.lastname }} />
    )
  }
  return (
    <>
      <StyledMenu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "44px" }}
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            Главная
          </Link>
        </Menu.Item>
        <StyledItem key="user" title={renderSubmenu()}>
          <Menu.Item key="profile">
            <Link to={`/p/${USER.username}`}>Профиль</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/login">Выйти</Link>
          </Menu.Item>
        </StyledItem>
      </StyledMenu>
    </>
  )
}
