import React from "react"
import PropTypes from "prop-types"

import { TitlePage } from "@tasky/components"

import { Boards } from "../containers"

export const BoardsPage = ({ ...props }) => {
  return (
    <>
      <TitlePage name="Доски" />
      <Boards {...props} />
    </>
  )
}

BoardsPage.propTypes = {}
