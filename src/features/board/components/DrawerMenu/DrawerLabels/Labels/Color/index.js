import React from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"
import { Dropdown } from "@tasky/components"

import { Edit } from "../Edit"

import { Check, EditWrap, ColorWrap, Wrapper } from "./styled"

export function Color({
  color,
  onEditToggle,
  title,
  active,
  shadow,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <ColorWrap active={active} shadow={shadow} color={color}>
        {title}
        <Check>
          <Icon type="check" />
        </Check>
      </ColorWrap>
      <EditWrap onClick={onEditToggle}>
        <Dropdown
          title="Редактировать метку"
          index={0}
          style={{ left: null }}
          DropdownButton={({ ...rest }) => <Icon {...rest} type="edit" />}
        >
          <Edit />
        </Dropdown>
      </EditWrap>
    </Wrapper>
  )
}

Color.propTypes = {
  color: PropTypes.string,
  onEditToggle: PropTypes.func,
  title: PropTypes.string,
  shadow: PropTypes.string,
  active: PropTypes.bool,
}
