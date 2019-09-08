import React from "react"

import { USER } from "@lib/mocks/user"
import { Divider } from "antd"

import { Form, Header, AvatarLoader } from "../../components"

import { Container, Wrapper, Content } from "./styled"

export const Profile = () => {
  const handleSave = (values) => {
    console.log(values)
  }
  return (
    <Wrapper>
      <Header data={USER} />
      <Content>
        <Divider>Личные данные</Divider>
        <Container>
          <Form onSave={handleSave} />
          <AvatarLoader data={USER} />
        </Container>
      </Content>
    </Wrapper>
  )
}
