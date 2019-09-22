import React from "react"
import PropTypes from "prop-types"

import { Button, Form as FormAntd } from "antd"
import { compose } from "recompose"

import { useSignUp } from "@features/common"

import { Form } from "../../components"

const enhance = compose(FormAntd.create({ name: "signUp" }))

const View = ({ form }) => {
  const onSignUp = useSignUp()

  const handleSignUp = async (values) => {
    try {
      await onSignUp(values)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        handleSignUp(values)
      }
    })
  }
  return (
    <div>
      <FormAntd onSubmit={handleSubmit}>
        <h5>Регистрация аккаунта</h5>
        <Form form={form} />
        <FormAntd.Item>
          <Button type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </FormAntd.Item>
      </FormAntd>
    </div>
  )
}

View.propTypes = {
  form: PropTypes.object,
}

export const SignUp = enhance(View)
