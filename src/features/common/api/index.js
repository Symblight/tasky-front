import {
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  USER_FAIL,
  USER_SUCCESS,
  SEND_TOKEN_BOARD_SUCCESS,
  SEND_TOKEN_BOARD_FAIL,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from "../constants"

export const signIn = (data) => ({
  meta: {
    types: [SIGN_IN_SUCCESS, SIGN_IN_FAIL],
    async: true,
    request: {
      method: "POST",
      url: "/user/login",
      data: {
        email: data.email,
        password: data.password,
      },
    },
  },
})

export const signUp = (data) => ({
  meta: {
    types: [SIGN_UP_SUCCESS, SIGN_UP_FAIL],
    async: true,
    request: {
      method: "POST",
      url: "/user/signup",
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
      },
    },
  },
})

export const auth = () => ({
  meta: {
    types: [USER_SUCCESS, USER_FAIL],
    async: true,
    request: {
      method: "GET",
      url: "/user/login",
    },
  },
})

export const logout = () => ({
  meta: {
    types: [LOGOUT_SUCCESS, LOGOUT_FAIL],
    async: true,
    request: {
      method: "DELETE",
      url: "/user/logout",
    },
  },
})

export const sendTokenUser = (token, idBoard) => ({
  meta: {
    types: [SEND_TOKEN_BOARD_SUCCESS, SEND_TOKEN_BOARD_FAIL],
    async: true,
    request: {
      method: "GET",
      url: `/user/token/${token}/b/${idBoard}`,
    },
  },
})

export const editUser = (data) => ({
  meta: {
    types: [EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAIL],
    async: true,
    request: {
      method: "PUT",
      url: `/user/${data.id}`,
      data,
    },
  },
})
