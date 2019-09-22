import React, { useEffect } from "react"
import { Redirect } from "react-router-dom"

import { compose } from "recompose"
import { useLogout } from "../hooks"

import { withUser, withLogin } from "../proxy-props"

const enchance = compose(
  withUser,
  withLogin,
)

const View = () => {
  const onLogout = useLogout()

  useEffect(() => {
    onLogout()
  }, [])

  return null
}

export const LogoutPage = enchance(View)
