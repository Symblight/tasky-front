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
        {getFieldDecorator("firstname", {
          rules: [{ required: true, message: "Пожалуйста, введите имя" }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Имя"
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator("lastname", {
          rules: [{ required: true, message: "Пожалуйста, введите фамилию" }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Фамилия"
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Пожалуйста, введите ваш логин" }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="username"
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator("email", {
          rules: [
            { required: true, message: "Пожалуйста, введите вашу почту" },
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
          rules: [{ required: true, message: "Пожалуйста, введите пароль" }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator("confirm_password", {
          rules: [
            { required: true, message: "Пожалуйста, подтвердите пароль" },
          ],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Item>
    </>
  )
}

Form.propTypes = {
  form: PropTypes.object,
}
