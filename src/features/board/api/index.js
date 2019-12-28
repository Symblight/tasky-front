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
  ADD_LABEL_TO_CARD_SUCCESS,
  ADD_LABEL_TO_CARD_FAIL,
  GET_CARD_FAIL,
  GET_CARD_SUCCESS,
  SEND_INVITE_SUCCESS,
  SEND_INVITE_FAIL,
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

export const addList = (data, uuid) => ({
  meta: {
    types: [CREATE_LIST_SUCCESS, CREATE_LIST_FAIL],
    async: true,
    request: {
      method: "POST",
      url: `/lists`,
      data: {
        ...data,
        uuidBoard: uuid,
      },
    },
  },
})

export const editList = (id, title, idBoard) => ({
  id,
  meta: {
    types: [EDIT_LIST_SUCCESS, EDIT_LIST_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/lists/${id}`,
      data: {
        title,
        idBoard,
      },
    },
  },
})

export const removeList = (id, idBoard) => ({
  id,
  meta: {
    types: [REMOVE_LIST_SUCCESS, REMOVE_LIST_FAIL],
    async: true,
    request: {
      method: "DELETE",
      url: `/lists/${id}`,
      data: {
        idBoard,
      },
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

export const editCard = (data, idBoard) => ({
  id: data.uuid,
  meta: {
    types: [EDIT_CARD_SUCCESS, EDIT_CARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/cards/${data.uuid}`,
      data: {
        idBoard,
        ...data,
      },
    },
  },
})

export const removeCard = (id, idBoard) => ({
  id,
  meta: {
    types: [REMOVE_CARD_SUCCESS, REMOVE_CARD_FAIL],
    async: true,
    request: {
      method: "DELETE",
      url: `/cards/${id}`,
      data: {
        idBoard,
      },
    },
  },
})

export const changeList = (data, idBoard) => ({
  id: data.uuid,
  meta: {
    types: [CHANGE_POS_LIST_SUCCESS, CHANGE_POS_LIST_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/lists/p/${data.uuid}`,
      data: {
        ...data,
        idBoard,
      },
    },
  },
})

export const changeCard = (data, idBoard) => ({
  id: data.uuid,
  meta: {
    types: [CHANGE_POS_CARD_SUCCESS, CHANGE_POS_CARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/cards/p/${data.uuid}`,
      data: {
        ...data,
        idBoard,
      },
    },
  },
})

export const addLabelToCard = (color, idBoard, idCard) => ({
  uuid: idCard,
  meta: {
    types: [ADD_LABEL_TO_CARD_SUCCESS, ADD_LABEL_TO_CARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/cards/l/${idCard}`,
      data: {
        color,
        idBoard,
      },
    },
  },
})

export const setBackgroundColor = (color, idBoard) => ({
  meta: {
    types: [ADD_LABEL_TO_CARD_SUCCESS, ADD_LABEL_TO_CARD_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/board/background/${idBoard}`,
      data: {
        background: color,
        idBoard,
      },
    },
  },
})

export const getCard = (id) => ({
  meta: {
    types: [GET_CARD_SUCCESS, GET_CARD_FAIL],
    async: true,
    request: {
      method: "GET",
      url: `/cards/${id}`,
    },
  },
})

export const sendInvite = (data) => ({
  meta: {
    types: [SEND_INVITE_SUCCESS, SEND_INVITE_FAIL],
    async: true,
    request: {
      method: "POST",
      url: "/user/token",
      data: {
        idBoard: data.idBoard,
        email: data.email,
      },
    },
  },
})
