import React from "react"
import PropTypes from "prop-types"

import { Menu, Badge } from "antd"
import { Link } from "react-router-dom"

import { USER } from "@lib/mocks/user"

import { StyledItem, Avatar } from "./styled"

export const Header = () => {
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="home">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <StyledItem key="user">
          <Link to={`/p/${USER.username}`}>
            <Badge count={5}>
              <Avatar />
            </Badge>
          </Link>
        </StyledItem>
      </Menu>
    </>
  )
}
