import { useState, useCallback, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import {
  subscribeMessages,
  unsubscribeMessages,
  boardById,
  addList,
  editList,
  changeList,
  removeList,
  addCard,
  editCard,
  removeCard,
  changeCard,
} from "../../api"

export const useApiBoard = (id) => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => {
    const { board } = state
    return board.getIn(["board"])
  })

  useEffect(() => {
    handleLoadBoard()
  }, [])

  const handleConnect = async () => {
    try {
      await dispatch(subscribeMessages())
    } catch (error) {
      console.error(error)
    }
  }

  const handleDisconnect = async () => {
    try {
      await dispatch(unsubscribeMessages())
    } catch (error) {
      console.error(error)
    }
  }

  const handleLoadBoard = async () => {
    try {
      if (id) {
        console.log(id, "id")
        await dispatch(boardById(id))
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddList = async (map, data) => {
    try {
      await dispatch(addList(map, data))
    } catch (error) {
      console.error(error)
    }
  }

  const handleEditList = async (map, data) => {
    try {
      await dispatch(editList(map, data))
    } catch (error) {
      console.error(error)
    }
  }

  const handleRemoveList = async (map, idList) => {
    try {
      await dispatch(removeList(map, idList))
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeList = async (map, data) => {
    try {
      await dispatch(changeList(map, data))
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddCard = async (map, data) => {
    try {
      await dispatch(addCard(map, data))
    } catch (error) {
      console.error(error)
    }
  }

  const handleEditCard = async (map, data) => {
    try {
      await dispatch(editCard(map, data))
    } catch (error) {
      console.error(error)
    }
  }

  const handleRemoveCard = async (data, idCard) => {
    try {
      await dispatch(removeCard(data, idCard))
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeCard = async (map, data) => {
    try {
      await dispatch(changeCard(map, data))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    onAddList: handleAddList,
    onEditList: handleEditList,
    onRemoveList: handleRemoveList,
    onChangeList: handleChangeList,
    onAddCard: handleAddCard,
    onEditCard: handleEditCard,
    onRemoveCard: handleRemoveCard,
    onChangeCard: handleChangeCard,
    board: selector,
    loading: selector.loading,
  }
}
