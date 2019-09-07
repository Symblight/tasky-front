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
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }],
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
