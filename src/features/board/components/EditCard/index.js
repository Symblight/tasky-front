import React from "react"
import PropTypes from "prop-types"

import { Button, Input } from "antd"

import { CardMenu } from "../CardMenu"

import { Wrapper, FooterEdit } from "./styled"

const { TextArea } = Input

export const CardEdit = ({ value, onCancel, onChange, editable, onDelete }) => {
  return (
    <Wrapper editable={editable} onClick={(e) => e.preventDefault()}>
      <div>
        <TextArea value={value} autosize={{ minRows: 4 }} onChange={onChange} />
        <FooterEdit>
          <Button type="primary" onClick={onCancel}>
            Сохранить
          </Button>
        </FooterEdit>
      </div>
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
}
