import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import { Layout } from "antd"

import { renderRoutes } from "react-router-config"

export const Root = ({ route }) => {
  return <StyledLayout>{renderRoutes(route && route.routes)}</StyledLayout>
}

Root.propTypes = {
  route: PropTypes.object,
}

const StyledLayout = styled(Layout)`
  background-color: #fff;
`
