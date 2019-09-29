/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

import { useSelector } from "react-redux"

import _ from "lodash"

export const withGuest = (Component) => ({ ...props }) => {
  const auth = useSelector((state) => {
    const { user } = state

    return user.getIn(["auth", "user"])
  })

  if (_.isEmpty(auth.toJS())) {
    return <Component {...props} />
  }
  return <Redirect to="/" />
}
