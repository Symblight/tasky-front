import React from "react"
import PropTypes from "prop-types"

import { Form as FormAntd, Input, Button } from "antd"
import { compose } from "recompose"

import { StyledForm } from "./styled"

const enhance = compose(FormAntd.create({ name: "profile" }))
const { Item } = FormAntd

const View = ({ form, onSave }) => {
  const { getFieldDecorator } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        onSave(values)
      }
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Item>
        {getFieldDecorator("firstname", {
          rules: [{ required: true, message: "Пожалуйста, введите имя!" }],
        })(<Input placeholder="Имя" />)}
      </Item>
      <Item>
        {getFieldDecorator("lastname", {
          rules: [{ required: true, message: "Пожалуйста, введите фамилию!" }],
        })(<Input placeholder="Фамилия" />)}
      </Item>
      <Item>
        {getFieldDecorator("username", {
          rules: [
            {
              required: true,
              message: "Пожалуйста, введите имя пользователя!",
            },
          ],
        })(<Input placeholder="Username" />)}
      </Item>
      <Button type="primary" htmlType="submit">
        Сохранить
      </Button>
    </StyledForm>
  )
}

View.propTypes = {
  form: PropTypes.object,
  onSave: PropTypes.func,
}

export const Form = enhance(View)
