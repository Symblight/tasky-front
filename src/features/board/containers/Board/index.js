import React, { useState } from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"
import { GenericPage } from "@tasky/components"

import { Dashboard, Board as BoardMain } from "../../components"

import { Wrapper, StyledContent } from "./styled"

export const Board = ({ match }) => {
  return (
    <Layout style={{ height: "100%" }}>
      <StyledContent style={{ display: "flex", flexDirection: "column" }}>
        <Dashboard />
        <div style={{ flex: "1 auto", width: "100vw", paddingTop: "12px" }}>
          <Wrapper>
            <BoardMain idBoard={match.params.idBoard} />
          </Wrapper>
        </div>
      </StyledContent>
    </Layout>
  )
}

Board.propTypes = {
  match: PropTypes.object,
}
