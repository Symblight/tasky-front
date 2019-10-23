import React from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"

import { Wrapper, Check } from "./styled"

export function Color({ onClick, data, isActive }) {
  const handleOnClick = () => {
    if (onClick) {
      onClick(data)
    }
  }
  return (
    <Wrapper data={data} onClick={handleOnClick}>
      {isActive && (
        <Check>
          <Icon type="check" />
        </Check>
      )}
    </Wrapper>
  )
}

Color.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.string,
  isActive: PropTypes.bool,
}
