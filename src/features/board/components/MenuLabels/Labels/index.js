import React from "react"
import PropTypes from "prop-types"

import { Color, Wrapper } from "./styled"

export const Labels = () => {
  return (
    <Wrapper>
      <div>
        <Color>1</Color>
        <Color>2</Color>
      </div>
      <div>Создать новую метку</div>
    </Wrapper>
  )
}
