import React from "react"
import PropTypes from "prop-types"

import { Drawer } from "antd"

import { BackgroundBoard } from "../../BackgroundBoard"

export function DrawerBackground({ background, onClose, onColor, visible }) {
  return (
    <Drawer
      title="Фон"
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
    >
      <BackgroundBoard background={background} onColor={onColor} />
    </Drawer>
  )
}

DrawerBackground.propTypes = {
  onClose: PropTypes.func,
  onColor: PropTypes.func,
  visible: PropTypes.bool,
  background: PropTypes.string,
}
