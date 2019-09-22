import {
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  USER_FAIL,
  USER_SUCCESS,
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
