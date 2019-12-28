import React from "react"
import PropTypes from "prop-types"

import { Avatar } from "@tasky/components"

import { Wrapper } from "./styled"

export function Author({ data }) {
  return (
    <Wrapper>
      {data.map((user) => (
        <Avatar
          key={user.id}
          data={{
            firstname: user.firstname,
            lastname: user.lastname,
          }}
        />
      ))}
    </Wrapper>
  )
}

Author.propTypes = {
  data: PropTypes.object,
}
