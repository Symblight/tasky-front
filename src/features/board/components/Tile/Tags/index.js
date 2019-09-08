import React from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"

import { Wrapper, StyledTag } from "./styled"

export const Tags = ({ data }) => {
  return (
    <Wrapper>
      <StyledTag color="blue">
        <Icon type="tag" />
      </StyledTag>
    </Wrapper>
  )
}

Tags.propTypes = {
  data: PropTypes.array,
}
