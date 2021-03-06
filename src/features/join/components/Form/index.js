import React from "react"
import PropTypes from "prop-types"

import { Input, Icon, Form as FormAntd } from "antd"

import {} from "./styled"

const { Item } = FormAntd

export const Form = ({ form }) => {
  const { getFieldDecorator } = form

  return (
    <>
      <Item>
        {getFieldDecorator("email", {
          rules: [
            { required: true, message: "Пожалуйста, введите вашу почту!" },
          ],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Пожалуйста, введите пароль!" }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Пароль"
          />,
        )}
      </Item>
    </>
  )
}

Form.propTypes = {
  form: PropTypes.object,
}
