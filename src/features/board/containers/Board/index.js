import React, { useState } from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"
import { useUser } from "@features/common"
import { useBoards } from "@features/boards"

import { Redirect } from "react-router-dom"
import { Dashboard, DrawerMenu, Board as BoardMain } from "../../components"
import { useApiBoard } from "../../hooks"

import { Wrapper, StyledContent } from "./styled"

export function Board({ match, history }) {
  const {
    onAddList,
    onEditList,
    onChangeList,
    onRemoveList,
    onAddCard,
    onEditCard,
    onChangeCard,
    onRemoveCard,
    onSelectColor,
    board,
    loading,
    onBackgroundColor,
    onInvite,
  } = useApiBoard(match.params.idBoard)
  const { user } = useUser()
  const { onClose } = useBoards()
  const [visibleMenu, setVisibleMenu] = useState(false)

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

  const handleSelectColor = (color, idBoard, idCard) => {
    onSelectColor(color, idBoard, idCard)
  }

  const handleBackgroundColor = (color) => {
    onBackgroundColor(color, match.params.idBoard)
  }

  const handleOnInvite = (email) => {
    onInvite({ email, idBoard: match.params.idBoard })
  }

  const handleCloseBoard = () => {
    onClose(match.params.idBoard)
    history.push("/")
  }

  const onCloseMenu = () => setVisibleMenu(false)
  const onMenu = () => setVisibleMenu(true)

  if (board.get("loading")) return <div>Loading...</div>

  if (!board.get("loading") && !board.get("id")) return <Redirect to="/" />

  return (
    <Layout style={{ height: "100%" }}>
      <StyledContent background={board.get("background")}>
        <Dashboard
          title={board.get("title")}
          onMenuToggle={onMenu}
          users={board.get("members")}
          onInvite={handleOnInvite}
        />
        <div style={{ flex: "1 auto", width: "100vw", paddingTop: "12px" }}>
          <Wrapper>
            <BoardMain
              idBoard={board.get("id")}
              uuidBoard={match.params.idBoard}
              onAddList={onAddList}
              author={user.get("id")}
              columns={board.get("lists")}
              labels={board.get("labels")}
              members={board.get("members")}
              cards={board.get("cards")}
              onChangeCard={handleChangeCard}
              onChangeColumn={handleChangeColumn}
              onEditColumn={handleEditColumm}
              onEditCard={handleEditCard}
              onCreateColumn={handleCreateColumm}
              onCreateCard={handleCreateCard}
              onDeleteColumn={handleDeleteColumm}
              onDeleteCard={handleDeleteCard}
              onSelectColor={handleSelectColor}
            />
          </Wrapper>
        </div>
        <DrawerMenu
          onClose={onCloseMenu}
          onCloseBoard={handleCloseBoard}
          onColor={handleBackgroundColor}
          visible={visibleMenu}
          background={board.get("background")}
        />
      </StyledContent>
    </Layout>
  )
}

Board.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}
