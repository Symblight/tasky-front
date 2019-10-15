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

export const addList = (data) => ({
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

export const editList = (id, title) => ({
  id,
  meta: {
    types: [EDIT_LIST_SUCCESS, EDIT_LIST_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/lists/${id}`,
      data: {
        title,
      },
    },
  },
})

export const removeList = (id) => ({
  id,
  meta: {
    types: [REMOVE_LIST_SUCCESS, REMOVE_LIST_FAIL],
    async: true,
    request: {
      method: "DELETE",
      url: `/lists/${id}`,
    },
  },
})

export const addCard = (data) => ({
  idList: data.idList,
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

export const editCard = (data) => ({
  id: data.uuid,
  meta: {
    types: [EDIT_CARD_SUCCESS, EDIT_CARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/cards/${data.uuid}`,
      data,
    },
  },
})

export const removeCard = (id) => ({
  id,
  meta: {
    types: [REMOVE_CARD_SUCCESS, REMOVE_CARD_FAIL],
    async: true,
    request: {
      method: "DELETE",
      url: `/cards/${id}`,
    },
  },
})

export const changeList = (data) => ({
  id: data.uuid,
  meta: {
    types: [CHANGE_POS_LIST_SUCCESS, CHANGE_POS_LIST_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/lists/${data.uuid}`,
      data,
    },
  },
})

export const changeCard = (data) => ({
  id: data.uuid,
  meta: {
    types: [CHANGE_POS_CARD_SUCCESS, CHANGE_POS_CARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/cards/${data.uuid}`,
      data,
    },
  },
})
