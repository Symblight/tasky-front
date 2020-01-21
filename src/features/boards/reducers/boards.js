import Immutable from "immutable"

import {
  LOAD_BOARDS_SUCCESS,
  LOAD_BOARDS_FAIL,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAIL,
  EDIT_BOARD_SUCCESS,
  EDIT_BOARD_FAIL,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAIL,
} from "../constants"

const initialState = Immutable.fromJS({
  boards: [],
  loading: true,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOARDS_SUCCESS: {
      const { data } = action.payload

      return state.set("boards", Immutable.fromJS(data)).set("loading", false)
    }
    case CREATE_BOARD_SUCCESS: {
      const { data } = action.payload

      const board = Immutable.fromJS(data)

      return state.update("boards", (items) => items.push(board))
    }
    case DELETE_BOARD_SUCCESS: {
      const { data } = action.payload
      const indexCard = state
        .get("boards")
        .findIndex((item) => item.get("id") === data.id)
      return state.setIn(["boards", indexCard], data)
    }
    default:
      return state
  }
}
