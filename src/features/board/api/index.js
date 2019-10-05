import {
  BOARD_PING,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_FAIL,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_FAIL,
  EDIT_LIST_SUCCESS,
  EDIT_LIST_FAIL,
  REMOVE_LIST_SUCCESS,
  REMOVE_LIST_FAIL,
  CREATE_CARD_SUCCESS,
  CREATE_CARD_FAIL,
  EDIT_CARD_SUCCESS,
  EDIT_CARD_FAIL,
  REMOVE_CARD_SUCCESS,
  REMOVE_CARD_FAIL,
  CHANGE_POS_CARD_SUCCESS,
  CHANGE_POS_CARD_FAIL,
  CHANGE_POS_LIST_SUCCESS,
  CHANGE_POS_LIST_FAIL,
} from "../constants"

export const subscribeMessages = () => {
  return {
    event: "board",
    handle: BOARD_PING,
  }
}

export const unsubscribeMessages = () => {
  return {
    event: "board",
    leave: true,
  }
}

export const boardById = (id) => ({
  meta: {
    types: [LOAD_BOARD_SUCCESS, LOAD_BOARD_FAIL],
    async: true,
    request: {
      method: "GET",
      url: `/board/${id}`,
    },
  },
})

export const addList = (map, data) => ({
  map,
  meta: {
    types: [CREATE_LIST_SUCCESS, CREATE_LIST_FAIL],
    async: true,
    request: {
      method: "POST",
      url: `/lists`,
      data,
    },
  },
})

export const editList = (map, data) => ({
  map,
  meta: {
    types: [EDIT_LIST_SUCCESS, EDIT_LIST_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/lists/${data.id}`,
      data,
    },
  },
})

export const removeList = (map, id) => ({
  map,
  meta: {
    types: [REMOVE_LIST_SUCCESS, REMOVE_LIST_FAIL],
    async: true,
    request: {
      method: "DELETE",
      url: `/lists/${id}`,
    },
  },
})

export const addCard = (map, data) => ({
  map,
  meta: {
    types: [CREATE_CARD_SUCCESS, CREATE_CARD_FAIL],
    async: true,
    request: {
      method: "POST",
      url: `/cards`,
      data,
    },
  },
})

export const editCard = (map, data) => ({
  map,
  meta: {
    types: [EDIT_CARD_SUCCESS, EDIT_CARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/cards/${data.id}`,
      data,
    },
  },
})

export const removeCard = (map, id) => ({
  map,
  meta: {
    types: [REMOVE_CARD_SUCCESS, REMOVE_CARD_FAIL],
    async: true,
    request: {
      method: "DELETE",
      url: `/cards/${id}`,
    },
  },
})

export const changeList = (map, data) => ({
  map,
  meta: {
    types: [CHANGE_POS_LIST_SUCCESS, CHANGE_POS_LIST_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/lists/${data.id}`,
      data,
    },
  },
})

export const changeCard = (map, data) => ({
  map,
  meta: {
    types: [CHANGE_POS_CARD_SUCCESS, CHANGE_POS_CARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/cards/${data.id}`,
      data,
    },
  },
})
