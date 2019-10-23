import Immutable from "immutable"

import {
  LOAD_BOARD_SUCCESS,
  NEW_CARD_SOCKET,
  REMOVE_CARD_SOCKET,
  EDIT_CARD_SOCKET,
  POS_CARD_SOCKET,
  EDIT_LIST_SOCKET,
  CREATE_LIST_SOCKET,
  REMOVE_LIST_SOCKET,
  POS_LIST_SOCKET,
  ADD_LABEL_TO_BOARD_SOCKET,
  EDIT_LABEL_BOARD_SOCKET,
  REMOVE_LABEL_BOARD_SOCKET,
  ADD_LABEL_CARD_SOCKET,
  REMOVE_LABEL_FROM_CARD_SOCKET,
  SET_BACKGROUND_COLOR_SOCKET,
} from "../constants"

const initialState = Immutable.fromJS({
  lists: [],
  labels: [],
  cards: [],
  users: [],
  root: false,
  title: "",
  loading: true,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOARD_SUCCESS: {
      const { data } = action.payload

      return state
        .update((value) =>
          Immutable.fromJS({
            ...value.toJS(),
            ...data,
          }),
        )
        .set("loading", false)
    }
    case CREATE_LIST_SOCKET: {
      const { data } = action.payload
      return state.update("lists", (lists) =>
        lists.push(Immutable.fromJS(data)),
      )
    }
    case EDIT_LIST_SOCKET: {
      const { data } = action.payload
      const indexList = state
        .get("lists")
        .findIndex((item) => item.get("id") === data.id)
      return state.setIn(["lists", indexList], data)
    }
    case EDIT_CARD_SOCKET: {
      const { data } = action.payload
      const indexCard = state
        .get("cards")
        .findIndex((item) => item.get("id") === data.id)
      return state.setIn(["cards", indexCard, "data"], data.data)
    }
    case REMOVE_CARD_SOCKET: {
      return state.update("cards", (items) =>
        items.filter((value) => value.get("uuid") !== action.payload.id),
      )
    }
    case REMOVE_LIST_SOCKET: {
      return state.update("lists", (items) =>
        items.filter((value) => value.get("uuid") !== action.payload.id),
      )
    }
    case NEW_CARD_SOCKET: {
      const { data } = action.payload

      const newCard = Immutable.fromJS(data)

      const exists = state
        .get("cards")
        .findIndex((card) => card.get("id") === data.id)
      if (exists === -1) {
        return state.update("cards", (items) => {
          return items.push(newCard)
        })
      }
      return state
    }
    case POS_LIST_SOCKET: {
      const { data } = action.payload

      const indexList = state
        .get("lists")
        .findIndex((item) => item.get("uuid") === data.uuid)

      return state.setIn(["lists", indexList], Immutable.fromJS(data))
    }
    case POS_CARD_SOCKET: {
      const { data } = action.payload

      const indexCard = state
        .get("cards")
        .findIndex((item) => item.get("uuid") === data.uuid)

      return state.setIn(["cards", indexCard], Immutable.fromJS(data))
    }
    case ADD_LABEL_TO_BOARD_SOCKET:
    case EDIT_LABEL_BOARD_SOCKET:
    case REMOVE_LABEL_BOARD_SOCKET:
    case ADD_LABEL_CARD_SOCKET:
    case REMOVE_LABEL_FROM_CARD_SOCKET: {
      return state
    }
    case SET_BACKGROUND_COLOR_SOCKET: {
      const { data } = action.payload
      return state.set("background", data)
    }
    default: {
      return state
    }
  }
}
