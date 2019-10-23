import React from "react"
import PropTypes from "prop-types"

import { Modal } from "antd"

export function Card({ history, match }) {
  const handleBack = () => {
    history.push(`/b/${match.params.idBoard}/`)
  }
  return (
    <Modal visible onClose={handleBack} onOk={handleBack}>
      <div>Card page</div>
    </Modal>
  )
}

Card.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
}
