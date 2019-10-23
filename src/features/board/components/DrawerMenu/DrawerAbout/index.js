import React from "react"
import PropTypes from "prop-types"

import { Drawer } from "antd"

export function DrawerAbout({ onClose, visible }) {
  return (
    <Drawer
      title="О доске"
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
    >
      <div>
        <h4>Автор</h4>
        <div>Avatar</div>
        <div>name</div>
      </div>
    </Drawer>
  )
}

DrawerAbout.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
}
