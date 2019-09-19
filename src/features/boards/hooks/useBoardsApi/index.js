import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { LOAD_BOARDS_SUCCESS, LOAD_BOARDS_FAIL } from "../../constants"

export const useBoardsApi = () => {
  const dispatch = useDispatch()

  const handleFetch = () => {
    dispatch({
      meta: {
        types: [LOAD_BOARDS_SUCCESS, LOAD_BOARDS_FAIL],
        async: true,
        request: {
          method: "GET",
          url: "/todos/1",
        },
      },
    })
  }

  useEffect(() => {
    handleFetch()
  }, [])
  return {}
}
