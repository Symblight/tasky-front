import React, { useState } from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"
import { GenericPage } from "@tasky/components"

import { Dashboard, Board as BoardMain } from "../../components"
import { useApiBoard } from "../../hooks"

import { Wrapper, StyledContent } from "./styled"

export const Board = ({ match }) => {
  const {
    onAddList,
    onEditList,
    onChangeList,
    onRemoveList,
    onAddCard,
    onEditCard,
    onChangeCard,
    onRemoveCard,
    board,
    loading,
  } = useApiBoard(match.params.idBoard)

  const handleChangeColumn = (item) => {
    onChangeList(item)
  }

  const handleChangeCard = (item) => {
    onChangeCard(item)
  }

  const handleCreateCard = (item) => {
    onAddCard(item)
  }

  const handleCreateColumm = (item) => {
    onAddList(item)
  }

  const handleDeleteColumm = (id) => {
    onRemoveList(id)
  }

  const handleDeleteCard = (idCard) => {
    onRemoveCard(idCard)
  }

  const handleEditColumm = (id, title) => {
    onEditList(id, title)
  }

  const handleEditCard = (item) => {
    onEditCard(item)
  }

  if (loading) return <div>Loading...</div>

  return (
    <Layout style={{ height: "100%" }}>
      <StyledContent style={{ display: "flex", flexDirection: "column" }}>
        <Dashboard title={board.get("title")} />
        <div style={{ flex: "1 auto", width: "100vw", paddingTop: "12px" }}>
          <Wrapper>
            <BoardMain
              idBoard={board.get("id")}
              onAddList={onAddList}
              author="Alexey"
              columns={board.get("lists")}
              cards={board.get("cards")}
              onChangeCard={handleChangeCard}
              onChangeColumn={handleChangeColumn}
              onEditColumn={handleEditColumm}
              onEditCard={handleEditCard}
              onCreateColumn={handleCreateColumm}
              onCreateCard={handleCreateCard}
              onDeleteColumn={handleDeleteColumm}
              onDeleteCard={handleDeleteCard}
            />
          </Wrapper>
        </div>
      </StyledContent>
    </Layout>
  )
}

Board.propTypes = {
  match: PropTypes.object,
}
