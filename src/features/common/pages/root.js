import React from "react"
import PropTypes from "prop-types"

import { Container } from "@material-ui/core"

import { renderRoutes } from "react-router-config"

import { Header } from "../components"

export const Root = ({ route }) => {
  return (
    <>
      <Header />
      <Container fixed>{renderRoutes(route && route.routes)}</Container>
    </>
  )
}

Root.propTypes = {
  route: PropTypes.object,
}