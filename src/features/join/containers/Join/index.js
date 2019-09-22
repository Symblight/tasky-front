import React from "react"
import PropTypes from "prop-types"

import { Button, Form as FormAntd } from "antd"
import { compose } from "recompose"

import { useSignIn } from "@features/common"

import { Form } from "../../components"

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
    <div>
      <FormAntd onSubmit={handleSubmit}>
        <h5>Авторизация</h5>
        <Form form={form} />
        <FormAntd.Item>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </FormAntd.Item>
      </FormAntd>
    </div>
  )
}

View.propTypes = {
  form: PropTypes.object,
}

export const Join = enhance(View)
