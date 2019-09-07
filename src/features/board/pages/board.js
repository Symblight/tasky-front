import React from "react"
import PropTypes from "prop-types"

import { Board } from "../containers"

export const BoardPage = ({ ...props }) => {
  return <Board {...props} />
}

BoardPage.propTypes = {}
