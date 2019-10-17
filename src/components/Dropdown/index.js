import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Header } from "./styled"

const Index = ({ children, index }) => {
  return (
    <Wrapper>
      <Header>
        {index !== 0 && <div>back</div>}
        <span>title</span>
        <div>close</div>
      </Header>
      <div>{children[index]}</div>
    </Wrapper>
  )
}

Index.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
}

Index.defaultPropTypes = {
  index: 0,
}

export const Dropdown = Index
