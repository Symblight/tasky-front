import React from "react"
import PropTypes from "prop-types"

import { Button, Form as FormAntd, Typography } from "antd"
import { compose } from "recompose"

import { useSignIn } from "@features/common"

import { Form } from "../../components"

import { StyledForm } from "./styled"

const { Title } = Typography

const enhance = compose(FormAntd.create({ name: "login" }))

const View = ({ form }) => {
  const onSignIn = useSignIn()

  const handleSignIn = async (values) => {
    try {
      await onSignIn(values)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        handleSignIn(values)
      }
    })
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title level={4}>Авторизация</Title>
      <Form form={form} />
      <Button type="primary" htmlType="submit">
        Войти
      </Button>
    </StyledForm>
  )
}

View.propTypes = {
  form: PropTypes.object,
}

export const Join = enhance(View)
