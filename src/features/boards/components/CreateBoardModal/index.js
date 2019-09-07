import React from "react"
import PropTypes from "prop-types"

import { Modal, Input, Typography } from "antd"

export const CreateBoardModal = ({ visible, onCreate, onCancel }) => {
  const handleOnCreate = () => {
    if (onCreate) {
      onCreate()
    }
  }
  const handleOnCancel = () => {
    if (onCancel) {
      onCancel()
    }
  }
  return (
    <Modal visible={visible} onOk={handleOnCreate} onCancel={handleOnCancel}>
      <Typography>Создать доску</Typography>
      <Input />
    </Modal>
  )
}

CreateBoardModal.propTypes = {
  visible: PropTypes.bool,
  onCreate: PropTypes.func,
  onCancel: PropTypes.func,
}
