import React from "react"
import PropTypes from "prop-types"
import { renderRoutes } from "react-router-config"

import { compose } from "recompose"
import { withUser } from "@features/common"

const enchance = compose(withUser)

const Root = ({ route }) => {
  return <>{renderRoutes(route && route.routes)}</>
}

Root.propTypes = {
  route: PropTypes.object,
}

export const View = enchance(Root)
