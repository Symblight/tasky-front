import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import connection from "@lib/utils/socket"

import {
  boardById,
  addList,
  editList,
  changeList,
  removeList,
  addCard,
  editCard,
  removeCard,
  changeCard,
  addLabelToCard,
  setBackgroundColor,
  sendInvite,
} from "../../api"

let subscription

export function useApiBoard(id) {
  const dispatch = useDispatch()
  const selector = useSelector((state) => {
    const { board } = state
    return board.getIn(["board"])
  })

  useEffect(() => {
    connection.connect()
    if (id) {
      subscription = connection.subscribe(`board:${id}`, handleActions)
      handleLoadBoard()
    }
  }, [])

  useEffect(() => {
    return () => {
      subscription.close()
    }
  }, [])

  const handleActions = (socket) => {
    const { type, data } = socket

    dispatch({ type, payload: { data, id: data } })
  }

  const handleLoadBoard = async () => {
    try {
      if (id) {
        await dispatch(boardById(id))
      }
    } catch (error) {
      throw error
      // history.push("/")
    }
  }

  const handleAddList = async (data) => {
    try {
      await dispatch(addList(data, id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleEditList = async (idList, title) => {
    try {
      await dispatch(editList(idList, title, id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleRemoveList = async (idList) => {
    try {
      await dispatch(removeList(idList, id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeList = async (data) => {
    try {
      await dispatch(changeList(data, id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddCard = async (data) => {
    try {
      await dispatch(addCard(data))
    } catch (error) {
      console.error(error)
    }
  }

  const handleEditCard = async (data) => {
    try {
      await dispatch(editCard(data, id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleRemoveCard = async (idCard) => {
    try {
      await dispatch(removeCard(idCard, id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeCard = async (data) => {
    try {
      await dispatch(changeCard(data, id))
    } catch (error) {
      console.error(error)
    }
  }

  const handleSelectColor = async (color, idBoard, idCard) => {
    try {
      await dispatch(addLabelToCard(color, idBoard, idCard))
    } catch (error) {
      console.error(error)
    }
  }

  const handleBackgorundColor = async (color, idBoard) => {
    try {
      await dispatch(setBackgroundColor(color, idBoard))
    } catch (error) {
      console.error(error)
    }
  }

  const handleSendToken = async (data) => {
    try {
      await dispatch(sendInvite(data))
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
    onSelectColor: handleSelectColor,
    onBackgroundColor: handleBackgorundColor,
    onInvite: handleSendToken,
    board: selector,
    loading: selector.loading,
  }
}
