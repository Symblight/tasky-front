import React from "react"
import PropTypes from "prop-types"

import { renderRoutes } from "react-router-config"

import { compose } from "recompose"
import { withUser, withLayout } from "@features/common"

const enchance = compose(
  withUser,
  withLayout("default"),
)

const Root = ({ route }) => {
  return <>{renderRoutes(route && route.routes)}</>
}

Root.propTypes = {
  route: PropTypes.object,
}

export const View = enchance(Root)
