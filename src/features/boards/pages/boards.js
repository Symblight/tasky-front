import React from "react"
import PropTypes from "prop-types"

import { Boards } from "../containers"

export const BoardsPage = ({ ...props }) => {
  return <Boards {...props} />
}

BoardsPage.propTypes = {}
