import React from "react"
import PropTypes from "prop-types"

import { Avatar } from "@tasky/components"

import { Wrapper } from "./styled"

export const AvatarLoader = ({ data }) => {
  return (
    <Wrapper>
      <Avatar
        size={4}
        data={{
          firstname: data.get("firstname"),
          lastname: data.get("lastname"),
        }}
      />
      <span>Загрузить</span>
    </Wrapper>
  )
}

AvatarLoader.propTypes = {
  data: PropTypes.object,
}
