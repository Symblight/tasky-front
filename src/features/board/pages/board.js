import React from "react"
import PropTypes from "prop-types"

import { TitlePage } from "@tasky/components"
import { renderRoutes } from "react-router-config"

import { Board } from "../containers"

export const BoardPage = ({ route, ...props }) => {
  return (
    <>
      <TitlePage name="Доска" />
      <Board {...props} />
      {renderRoutes(route && route.routes)}
    </>
  )
}

BoardPage.propTypes = {
  route: PropTypes.object,
}
