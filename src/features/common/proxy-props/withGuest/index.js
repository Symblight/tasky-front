/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

import { useSelector } from "react-redux"

import _ from "lodash"

export const withGuest = (Component) => ({ ...props }) => {
  const selectors = useSelector((state) => {
    const {
      user: { auth: authState },
    } = state

    return {
      user: authState.get("user"),
    }
  })

  if (_.isEmpty(selectors.user.toJS())) {
    return <Component {...props} />
  }
  return <Redirect to="/" />
}
