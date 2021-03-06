import React from "react"
import PropTypes from "prop-types"

import { Drawer } from "antd"

import { Labels } from "./Labels"

export function DrawerLabels({ onClose, visible }) {
  return (
    <Drawer
      title="Метки"
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
      width={380}
    >
      <Labels />
    </Drawer>
  )
}

DrawerLabels.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
}
