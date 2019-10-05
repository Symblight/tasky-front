import Immutable from "immutable"

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
      console.log(action)
      return state
    }
    case EDIT_LIST_SUCCESS: {
      return state
    }
    case EDIT_CARD_SUCCESS: {
      return state
    }
    case REMOVE_CARD_SUCCESS:
    case REMOVE_LIST_SUCCESS: {
      return state
    }
    case CREATE_CARD_SUCCESS: {
      return state
    }
    case CHANGE_POS_CARD_SUCCESS: {
      return state
    }
    case CHANGE_POS_LIST_SUCCESS: {
      return state
    }
    default: {
      return state
    }
  }
}
