import React from "react"
import PropTypes from "prop-types"

import { CreateBoard } from "@tasky/components"

export const CreateBoardModal = ({ visible, onCreate, onCancel }) => {
  const handleOnCreate = (data) => {
    if (onCreate) {
      onCreate(data)
    }
  }
  const handleOnCancel = () => {
    if (onCancel) {
      onCancel()
    }
  }
  return (
    <CreateBoard
      visible={visible}
      onClose={handleOnCancel}
      onCreate={handleOnCreate}
    />
  )
}

CreateBoardModal.propTypes = {
  visible: PropTypes.bool,
  onCreate: PropTypes.func,
  onCancel: PropTypes.func,
}
