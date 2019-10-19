import React from "react"
import PropTypes from "prop-types"

import { Button } from "antd"

import { CardMenu } from "../CardMenu"

import {
  ColorsWrap,
  StyledTextArea,
  Content,
  Wrapper,
  FooterEdit,
  Color,
} from "./styled"

export const CardEdit = ({
  labels,
  value,
  onCancel,
  onChange,
  editable,
  onDelete,
}) => {
  return (
    <Wrapper editable={editable} onClick={(e) => e.preventDefault()}>
      <Content>
        <ColorsWrap>
          <Color />
          <Color />
          <Color />
        </ColorsWrap>
        <StyledTextArea
          value={value}
          autosize={{ minRows: 4 }}
          onChange={onChange}
        />
      </Content>
      <FooterEdit>
        <Button type="primary" onClick={onCancel}>
          Сохранить
        </Button>
      </FooterEdit>
      <CardMenu onDelete={onDelete} />
    </Wrapper>
  )
}

CardEdit.propTypes = {
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  value: PropTypes.string,
  editable: PropTypes.object,
  labels: PropTypes.array,
}
