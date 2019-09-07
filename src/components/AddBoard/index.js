import React from "react"
import PropTypes from "prop-types"

import { Container, Wrapper, StyledBlock } from "./styled"

export const AddBoard = ({ className, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <StyledBlock>
        <Container>Создать доску</Container>
      </StyledBlock>
    </Wrapper>
  )
}

AddBoard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}
