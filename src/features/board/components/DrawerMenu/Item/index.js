import React from "react"
import PropTypes from "prop-types"

import { IconWrap, Name, Wrapper } from "./styled"

export function ItemMenu({ Icon, children, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <IconWrap>{Icon}</IconWrap>
      <Name>{children}</Name>
    </Wrapper>
  )
}

ItemMenu.propTypes = {
  onClick: PropTypes.func,
  Icon: PropTypes.node,
  children: PropTypes.node,
}
