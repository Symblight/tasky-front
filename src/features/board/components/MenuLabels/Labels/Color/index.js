import React, { memo } from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"

import { Check, EditWrap, ColorWrap, Wrapper } from "./styled"

export const Color = memo(
  ({ color, onEditToggle, title, active, shadow, ...props }) => {
    return (
      <Wrapper {...props}>
        <ColorWrap active={active} shadow={shadow} color={color}>
          {title}
          <Check>
            <Icon type="check" />
          </Check>
        </ColorWrap>
        <EditWrap onClick={onEditToggle}>
          <Icon type="edit" />
        </EditWrap>
      </Wrapper>
    )
  },
)

Color.propTypes = {
  color: PropTypes.string,
  onEditToggle: PropTypes.func,
  title: PropTypes.string,
  shadow: PropTypes.string,
  active: PropTypes.bool,
}
