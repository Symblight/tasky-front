import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import _ from "lodash"

import { allBoardsByUser, createBoard, deleteBoard } from "../../api"

export const useBoards = () => {
  const [boards, setBoards] = useState([])
  const dispatch = useDispatch()
  const selector = useSelector((state) => {
    const { boardsByUser } = state
    return boardsByUser.getIn(["boards"])
  })

  const handleFetch = async () => {
    try {
      await dispatch(allBoardsByUser())
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (_.isEmpty(selector.get("boards").toJS())) {
      handleFetch()
    }
  }, [])

  useEffect(() => {
    if (!selector.get("loading")) {
      setBoards(selector.get("boards").toJS())
    }
  }, [selector])

  const handleCreate = async (data) => {
    try {
      await dispatch(createBoard(data))
    } catch (error) {
      console.error(error)
    }
  }

  const handleCloseBoard = async (id) => {
    try {
      await dispatch(deleteBoard(id))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    boards,
    loading: selector.get("loading"),
    onCreate: handleCreate,
    onClose: handleCloseBoard,
  }
}
