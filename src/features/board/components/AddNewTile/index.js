import React, { useState, useCallback, memo } from "react"
import PropTypes from "prop-types"

import { Input, Button } from "antd"

import { Wrapper, ActionClose, WrapAction } from "./styled"

const { TextArea } = Input

export const AddNewTile = memo(({ onCancel, onAdd }) => {
  const [value, setValue] = useState("")

  const handleChange = useCallback((event) => setValue(event.target.value), [])
  const handleClear = useCallback(() => setValue(""), [])

  const handleOnAdd = () => {
    if (onAdd) {
      value && onAdd(value)
      handleClear()
    }
  }

  const handleOnCancel = () => {
    if (onCancel) {
      onCancel()
      handleClear()
    }
  }

  return (
    <Wrapper>
      <TextArea onChange={handleChange} value={value} />
      <WrapAction>
        <Button type="primary" onClick={handleOnAdd}>
          Добавить
        </Button>
        <ActionClose type="close" onClick={handleOnCancel} />
      </WrapAction>
    </Wrapper>
  )
})

AddNewTile.propTypes = {
  onCancel: PropTypes.func,
  onAdd: PropTypes.func,
}
