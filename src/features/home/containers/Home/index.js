import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"

import { MenuNavigation, HomeContainer } from "@tasky/components"

import { USER } from "@lib/mocks/user"

import { MainPost } from "../../components"
import { StyledAside, StyledLayout, Posts } from "./styled"

const { Content } = Layout

export const Home = ({ match }) => {
  return (
    <HomeContainer>
      <StyledLayout>
        <StyledAside>
          <MenuNavigation username={USER.username} currentKey="home" />
        </StyledAside>
        <Content>
          <Posts>
            <MainPost />
          </Posts>
        </Content>
      </StyledLayout>
    </HomeContainer>
  )
}

Home.propTypes = {
  match: PropTypes.object,
}
