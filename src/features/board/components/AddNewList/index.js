import React, { useState, useCallback, memo } from "react"
import PropTypes from "prop-types"

import { Icon, Input, Button } from "antd"

import { compose } from "recompose"

import { Action, Wrapper, ActionClose, WrapAction } from "./styled"

const { TextArea } = Input
const enhance = compose(memo)

function Index({ onAdd }) {
  const [value, setValue] = useState("")
  const [addable, setAddable] = useState(false)

  const handleAddButtonToggle = useCallback(
    () => setAddable((prevState) => !prevState),
    [],
  )

  const handleChange = useCallback((event) => setValue(event.target.value), [])
  const handleClear = useCallback(() => setValue(""), [])

  const handleOnAdd = () => {
    if (onAdd) {
      value && onAdd(value)
      handleAddButtonToggle()
      handleClear("")
    }
  }

  const handleCancel = () => {
    handleClear()
    handleAddButtonToggle()
  }

  return (
    <div style={{ marginRight: "8px" }}>
      <Wrapper>
        {addable ? (
          <>
            <TextArea onChange={handleChange} value={value} />
            <WrapAction>
              <Button type="primary" onClick={handleOnAdd}>
                Добавить список
              </Button>
              <ActionClose type="close" onClick={handleCancel} />
            </WrapAction>
          </>
        ) : (
          <Action onClick={handleAddButtonToggle}>
            <Icon type="plus" />
            Создать список
          </Action>
        )}
      </Wrapper>
    </div>
  )
}

Index.propTypes = {
  onAdd: PropTypes.func,
}

export const AddNewList = enhance(Index)
