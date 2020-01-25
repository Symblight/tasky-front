import React from "react"

import { useUser } from "@features/common"
import { Divider } from "antd"

import { Form, Header, AvatarLoader } from "../../components"

import { Container, Wrapper, Content } from "./styled"

export const Profile = () => {
  const { user, onEdit } = useUser()
  const handleSave = (values) => {
    onEdit({ ...values, id: user.get("id") })
  }
  return (
    <Wrapper>
      <Header data={user} />
      <Content>
        <Divider>Личные данные</Divider>
        <Container>
          <Form onSave={handleSave} />
          <AvatarLoader data={user} />
        </Container>
      </Content>
    </Wrapper>
  )
}
