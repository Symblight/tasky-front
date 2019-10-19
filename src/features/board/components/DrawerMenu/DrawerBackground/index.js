import React from "react"
import PropTypes from "prop-types"

import { Input, Divider, Drawer } from "antd"

export const DrawerBackground = ({ onClose, visible }) => {
  return (
    <Drawer
      title="Фон"
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
    >
      Фон
    </Drawer>
  )
}

DrawerBackground.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
}
