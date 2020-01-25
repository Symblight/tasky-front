import React from "react"
import PropTypes from "prop-types"

import { Drawer } from "antd"
import { Avatar } from "@tasky/components"

export function DrawerAbout({ onClose, visible, user }) {
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
        <div>
          <Avatar
            key={user.get("id")}
            data={{
              firstname: user.get("firstname"),
              lastname: user.get("lastname"),
            }}
          />
        </div>
        <div>{user.get("firstname")}</div>
      </div>
    </Drawer>
  )
}

DrawerAbout.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  user: PropTypes.object,
}
