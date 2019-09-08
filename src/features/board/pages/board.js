import React from "react"
import PropTypes from "prop-types"

import { TitlePage } from "@tasky/components"

import { Board } from "../containers"

export const BoardPage = ({ ...props }) => {
  return (
    <>
      <TitlePage name="Доска" />
      <Board {...props} />
    </>
  )
}

BoardPage.propTypes = {}
