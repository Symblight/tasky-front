import React from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"

import { Check, EditWrap, ColorWrap, Wrapper } from "./styled"

export function Color({
  color,
  onEditToggle,
  name,
  id,
  onClick,
  title,
  active,
  shadow,
  ...props
}) {
  return (
    <Wrapper onClick={() => onClick(id)} {...props}>
      <ColorWrap active={active} shadow={shadow} color={color}>
        {title}
        {active && (
          <Check>
            <Icon type="check" />
          </Check>
        )}
      </ColorWrap>
      <EditWrap onClick={onEditToggle}>
        <Icon type="edit" />
      </EditWrap>
    </Wrapper>
  )
}

Color.propTypes = {
  color: PropTypes.string,
  onEditToggle: PropTypes.func,
  onClick: PropTypes.func,
  title: PropTypes.string,
  shadow: PropTypes.string,
  active: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number,
}
