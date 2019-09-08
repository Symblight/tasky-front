import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"
import { HomeContainer } from "@tasky/components"

import { Dashboard } from "../../components"

import { Wrapper, StyledContent } from "./styled"

export const Board = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <StyledContent>
        <Dashboard />
        <HomeContainer>
          <Wrapper>Board</Wrapper>
        </HomeContainer>
      </StyledContent>
    </Layout>
  )
}

Board.propTypes = {}
