import React from "react"
import PropTypes from "prop-types"

import { Container, Wrapper, StyledBlock } from "./styled"

export const AddBoard = ({ className, onClick, addable, ...props }) => {
  return (
    <Wrapper className={className} onClick={onClick} {...props}>
      <StyledBlock addable={addable}>
        <Container>Создать доску</Container>
      </StyledBlock>
    </Wrapper>
  )
}

AddBoard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  addable: PropTypes.bool,
}
