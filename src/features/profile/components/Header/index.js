import React from "react"
import PropTypes from "prop-types"

import { Avatar } from "@tasky/components"

import { Wrapper, Content, Title } from "./styled"

export const Header = ({ data }) => {
  return (
    <Wrapper>
      <Content>
        <Avatar
          data={{
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
          }}
        />
        <Title>{`${data.get("firstname")} ${data.get("lastname")}`}</Title>
        <span>{`@${data.get("username")}`}</span>
      </Content>
    </Wrapper>
  )
}

Header.propTypes = {
  data: PropTypes.object,
}
