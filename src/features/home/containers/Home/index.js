import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"
import { MenuNavigation } from "@tasky/components"
import { USER } from "@lib/mocks/user"

import { StyledAside, StyledLayout } from "./styled"

const { Content } = Layout

export const Home = ({ match }) => {
  return (
    <StyledLayout>
      <StyledAside>
        <MenuNavigation username={USER.username} currentKey="home" />
      </StyledAside>
      <Content>
        <div>Home</div>
      </Content>
    </StyledLayout>
  )
}

Home.propTypes = {
  match: PropTypes.object,
}
