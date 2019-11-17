import React from "react"
import PropTypes from "prop-types"

import { Button } from "antd"

import { Form } from "../Form"

import { WrapActions, Wrapper } from "./styled"

export function Edit() {
  return (
    <Wrapper>
      <Form />
      <WrapActions>
        <Button type="primary">Сохранить</Button>
        <Button type="danger">Удалить</Button>
      </WrapActions>
    </Wrapper>
  )
}
