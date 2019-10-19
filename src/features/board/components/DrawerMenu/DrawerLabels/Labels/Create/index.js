import React from "react"
import PropTypes from "prop-types"

import { Button } from "antd"

import { Form } from "../Form"

import { WrapActions, Wrapper } from "./styled"

export const Create = () => {
  return (
    <Wrapper>
      <Form />
      <WrapActions>
        <Button type="primary">Добавить метку</Button>
      </WrapActions>
    </Wrapper>
  )
}
