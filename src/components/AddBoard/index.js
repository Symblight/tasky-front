import React from "react"
import PropTypes from "prop-types"

import { Container, Wrapper, StyledBlock } from "./styled"

export const AddBoard = ({ className }) => {
  return (
    <Wrapper className={className}>
      <StyledBlock>
        <Container>Создать доску</Container>
      </StyledBlock>
    </Wrapper>
  )
}

AddBoard.propTypes = {
  className: PropTypes.string,
}
