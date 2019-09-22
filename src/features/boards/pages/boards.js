import React from "react"
import PropTypes from "prop-types"

import { TitlePage } from "@tasky/components"
import { compose } from "recompose"
import { withUser, withLayout } from "@features/common"

import { Boards } from "../containers"

const enchance = compose(
  withUser,
  withLayout("default"),
)

const View = ({ ...props }) => {
  return (
    <>
      <TitlePage name="Доски" />
      <Boards {...props} />
    </>
  )
}

View.propTypes = {}

export const BoardsPage = enchance(View)
