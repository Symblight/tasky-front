/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"

import { Redirect } from "react-router-dom"

import _ from "lodash"

export const withLogin = (Component) => ({ user, ...props }) => {
  if (_.isEmpty(user.toJS())) return <Redirect to="/login" />
  return <Component user={user} {...props} />
}
