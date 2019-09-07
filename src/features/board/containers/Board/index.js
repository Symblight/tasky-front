import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"
import { HomeContainer } from "@tasky/components"

import { Dashboard } from "../../components"

import { Wrapper } from "./styled"

const { Content } = Layout

export const Board = () => {
  return (
    <Layout>
      <Content>
        <Dashboard />
        <HomeContainer>
          <Wrapper>Board</Wrapper>
        </HomeContainer>
      </Content>
    </Layout>
  )
}

Board.propTypes = {}
