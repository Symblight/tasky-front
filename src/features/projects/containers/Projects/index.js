import React from "react"
import PropTypes from "prop-types"

import { Tiles } from "../../components"
import { Wrapper } from "./styled"

const DATA = [
  {
    id: 0,
    title: "First tile",
  },
  {
    id: 1,
    title: "Second example tile",
  },
  {
    id: 2,
    title: "Third tile",
  },
  {
    id: 0,
    title: "First tile",
  },
  {
    id: 1,
    title: "Second example tile",
  },
  {
    id: 2,
    title: "Third tile",
  },
]

export const Projects = () => {
  return (
    <Wrapper>
      <Tiles data={DATA} />
    </Wrapper>
  )
}

Projects.propTypes = {}
