import Immutable from "immutable"

import {
  reorder,
  getOrdered,
  reorderCards,
  INITIAL_POSITION,
} from "@lib/utils/dnd-order"

import {
  LOAD_BOARD_SUCCESS,
  CREATE_LIST_SUCCESS,
  EDIT_LIST_SUCCESS,
  REMOVE_LIST_SUCCESS,
  CREATE_CARD_SUCCESS,
  EDIT_CARD_SUCCESS,
  REMOVE_CARD_SUCCESS,
  CHANGE_POS_CARD_SUCCESS,
  CHANGE_POS_LIST_SUCCESS,
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
    case CREATE_LIST_SUCCESS: {
      const { data } = action.payload
      return state.update("lists", (lists) =>
        lists.push(Immutable.fromJS(data)),
      )
    }
    case EDIT_LIST_SUCCESS: {
      const { data, id } = action.payload
      const indexList = state
        .get("lists")
        .findIndex((item) => item.get("uuid") === id)
      return state.setIn(["lists", indexList, "title"], data.title)
    }
    case EDIT_CARD_SUCCESS: {
      const { data, id } = action.payload
      const indexCard = state
        .get("cards")
        .findIndex((item) => item.get("uuid") === id)
      return state.setIn(["cards", indexCard, "data"], data.data)
    }
    case REMOVE_CARD_SUCCESS: {
      return state.update("cards", (items) =>
        items.filter((value) => value.get("uuid") !== action.payload.id),
      )
    }
    case REMOVE_LIST_SUCCESS: {
      return state.update("lists", (items) =>
        items.filter((value) => value.get("uuid") !== action.payload.id),
      )
    }
    case CREATE_CARD_SUCCESS: {
      const { data, idList } = action.payload

      const newCard = Immutable.fromJS(data)

      return state.update("cards", (items) => {
        return items.push(newCard)
      })
    }
    case CHANGE_POS_LIST_SUCCESS: {
      const { data, id } = action.payload

      const indexList = state
        .get("lists")
        .findIndex((item) => item.get("uuid") === id)

      return state.setIn(["lists", indexList], Immutable.fromJS(data))
    }
    case CHANGE_POS_CARD_SUCCESS: {
      const { data, id } = action.payload

      const indexCard = state
        .get("cards")
        .findIndex((item) => item.get("uuid") === id)

      return state.setIn(["cards", indexCard], Immutable.fromJS(data))
    }
    default: {
      return state
    }
  }
}
