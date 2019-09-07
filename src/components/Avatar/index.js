import React from "react"
import PropTypes from "prop-types"

import { Wrapper, WrapInitials } from "./styled"

const LENGTH = 2

export const Avatar = ({ data }) => {
  const getIniitals = (value) => {
    const acronym = value.split(/\s/).reduce((response, word) => {
      let acr = response
      acr += word.slice(0, 1)
      return acr
    }, "")
    return acronym.length > LENGTH ? acronym.slice(0, 1) : acronym
  }

  if (!data) return null

  const name = `${data.firstname} ${data.lastname}`

  return (
    <Wrapper>
      <WrapInitials>{getIniitals(name)}</WrapInitials>
    </Wrapper>
  )
}

Avatar.propTypes = {
  data: PropTypes.object,
}
