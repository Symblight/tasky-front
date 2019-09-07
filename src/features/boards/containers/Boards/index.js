import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"
import { BoardList, MenuNavigation } from "@tasky/components"
import { DATA, DATA_RECENTLY } from "@lib/mocks/boards"
import { USER } from "@lib/mocks/user"

import { StyledAside, StyledLayout } from "./styled"

const { Header, Content, Footer } = Layout

export const Boards = ({ match }) => {
  return (
    <StyledLayout>
      <StyledAside>
        <MenuNavigation username={USER.username} currentKey="boards" />
      </StyledAside>
      <Content>
        <BoardList
          data={DATA_RECENTLY}
          username={match.params.username}
          label="Недавно просмотренное"
        />
        <BoardList
          data={DATA}
          username={match.params.username}
          label="Персональные доски"
          addable
        />
      </Content>
    </StyledLayout>
  )
}

Boards.propTypes = {
  match: PropTypes.object,
}
