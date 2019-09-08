import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"

import { Icon, Layout } from "antd"
import { BoardList, MenuNavigation, HomeContainer } from "@tasky/components"

import { DATA, DATA_RECENTLY } from "@lib/mocks/boards"
import { USER } from "@lib/mocks/user"

import { CreateBoardModal } from "../../components"
import { StyledAside, StyledLayout } from "./styled"

const { Content } = Layout

export const Boards = ({ match }) => {
  const [createModal, setCreateModal] = useState(false)

  const handleToggle = useCallback(
    () => setCreateModal((prevState) => !prevState),
    [],
  )

  const handleCreateBoard = () => {
    handleToggle()
  }

  return (
    <HomeContainer>
      <StyledLayout>
        <StyledAside>
          <MenuNavigation username={USER.username} currentKey="boards" />
        </StyledAside>
        <Content>
          <BoardList
            data={DATA_RECENTLY}
            username={match.params.username}
            label="Недавно просмотренное"
            icon="⏱️"
          />
          <BoardList
            data={DATA}
            username={match.params.username}
            label="Персональные доски"
            addable
            onToggle={handleToggle}
            icon="📁"
          />
        </Content>
        <CreateBoardModal
          visible={createModal}
          onCreate={handleCreateBoard}
          onCancel={handleToggle}
        />
      </StyledLayout>
    </HomeContainer>
  )
}

Boards.propTypes = {
  match: PropTypes.object,
}
