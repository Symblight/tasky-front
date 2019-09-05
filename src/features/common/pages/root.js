import React from "react"
import PropTypes from "prop-types"

import { renderRoutes } from "react-router-config"

export const Root = ({ route }) => {
  return <main>{renderRoutes(route && route.routes)}</main>
}

Root.propTypes = {
  route: PropTypes.object,
}
