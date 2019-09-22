import React from "react"
import PropTypes from "prop-types"

import { Layout } from "antd"

import { renderRoutes } from "react-router-config"

export const Root = ({ route }) => {
  return <Layout>{renderRoutes(route && route.routes)}</Layout>
}

Root.propTypes = {
  route: PropTypes.object,
}
