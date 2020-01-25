import React from "react"
import PropTypes from "prop-types"

import { Icon, Menu } from "antd"
import { Link } from "react-router-dom"

import { Avatar } from "@tasky/components"

import { StyledItem, StyledMenu } from "./styled"

export const Header = ({ user }) => {
  const renderSubmenu = () => {
    return (
      <Avatar
        data={{
          firstname: user.get("firstname"),
          lastname: user.get("lastname"),
        }}
      />
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
            <Link to={`/p/${user.get("username")}`}>Профиль</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/logout">Выйти</Link>
          </Menu.Item>
        </StyledItem>
      </StyledMenu>
    </>
  )
}

Header.propTypes = {
  user: PropTypes.object,
}
