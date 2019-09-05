import React from "react"
import PropTypes from "prop-types"

import { Container, Typography } from "@material-ui/core"

import { Form } from "../../components"

export const Join = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="h5">
        Авторизация
      </Typography>
      <Form />
    </Container>
  )
}

Join.propTypes = {}
