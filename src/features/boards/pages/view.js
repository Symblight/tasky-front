import React from "react"
import PropTypes from "prop-types"
import { renderRoutes } from "react-router-config"

export const View = ({ route }) => {
  return <>{renderRoutes(route && route.routes)}</>
}

View.propTypes = {
  route: PropTypes.object,
}
