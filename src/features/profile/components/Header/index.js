import React from "react"
import PropTypes from "prop-types"

import { Avatar } from "@tasky/components"

import { Wrapper, Content, Title } from "./styled"

export const Header = ({ data }) => {
  return (
    <Wrapper>
      <Content>
        <Avatar data={{ firstname: data.firstname, lastname: data.lastname }} />
        <Title>{`${data.firstname} ${data.lastname}`}</Title>
        <span>{`@${data.username}`}</span>
      </Content>
    </Wrapper>
  )
}

Header.propTypes = {
  data: PropTypes.object,
}
