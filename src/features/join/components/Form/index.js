import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

export const Form = () => {
  return (
    <Wrapper>
      <input
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        margin="normal"
        variant="filled"
      />
      <input
        id="outlined-password-input"
        label="Password"
        type="password"
        name="password"
        autoComplete="password"
        margin="normal"
        variant="filled"
      />
    </Wrapper>
  )
}

Form.propTypes = {}
