import React from "react"
import PropTypes from "prop-types"

import { Wrapper, WrapInitials } from "./styled"

const LENGTH = 2

export const Avatar = ({ data, size }) => {
  const getIniitals = (value) => {
    const acronym = value.split(/\s/).reduce((response, word) => {
      let acr = response
      acr += word.slice(0, 1)
      return acr
    }, "")
    return acronym.length > LENGTH ? acronym.slice(0, 1) : acronym
  }

  const name = data && `${data.firstname} ${data.lastname}`

  return (
    <Wrapper size={size}>
      <WrapInitials size={size}>{name && getIniitals(name)}</WrapInitials>
    </Wrapper>
  )
}

Avatar.propTypes = {
  data: PropTypes.object,
  size: PropTypes.number,
}

Avatar.defaultProps = {
  size: 2,
}
