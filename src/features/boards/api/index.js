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

export const allBoardsByUser = () => ({
  meta: {
    types: [LOAD_BOARDS_SUCCESS, LOAD_BOARDS_FAIL],
    async: true,
    request: {
      method: "GET",
      url: "/boards",
    },
  },
})

export const createBoard = (data) => ({
  meta: {
    types: [CREATE_BOARD_SUCCESS, CREATE_BOARD_FAIL],
    async: true,
    request: {
      method: "POST",
      url: "/board",
      data: {
        title: data.title,
        private: data.private,
        background: data.background,
      },
    },
  },
})

export const editBoard = (data) => ({
  meta: {
    types: [EDIT_BOARD_SUCCESS, EDIT_BOARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/board/?id=${data.id}`,
      data: {
        id: data.id,
        title: data.title,
        private: data.private,
      },
    },
  },
})

export const deleteBoard = (id) => ({
  meta: {
    types: [DELETE_BOARD_SUCCESS, DELETE_BOARD_FAIL],
    async: true,
    request: {
      method: "DELETE",
      url: `/board/${id}`,
    },
  },
})
