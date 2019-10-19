import React, { useState } from "react"
import PropTypes from "prop-types"

import { Icon, Input, Divider, Drawer } from "antd"

import { DrawerBackground } from "./DrawerBackground"
import { DrawerLabels } from "./DrawerLabels"
import { DrawerAbout } from "./DrawerAbout"
import { ItemMenu } from "./Item"

export const DrawerMenu = ({ onClose, visible }) => {
  const [visibleBackground, setVisibleBackground] = useState(false)
  const [visibleLabels, setVisibleLabels] = useState(false)
  const [visibleAbout, setVisibleAbout] = useState(false)

  const handleToggleBackground = () =>
    setVisibleBackground((prevState) => !prevState)

  const handleToggleLabels = () => setVisibleLabels((prevState) => !prevState)
  const handleToggleAbout = () => setVisibleAbout((prevState) => !prevState)
  return (
    <Drawer
      title="Меню"
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
    >
      <ul>
        <ItemMenu Icon={<Icon type="project" />} onClick={handleToggleAbout}>
          О доске
        </ItemMenu>
        <ItemMenu
          Icon={<Icon type="picture" />}
          onClick={handleToggleBackground}
        >
          Сменить фон
        </ItemMenu>
        <ItemMenu Icon={<Icon type="tag" />} onClick={handleToggleLabels}>
          Метки
        </ItemMenu>
        <Divider />
        <ItemMenu>Закрыть доску</ItemMenu>
        <Divider />
        <ItemMenu>
          <span>Ссылка на доску</span>
          <Input value={window.location.href} />
        </ItemMenu>
      </ul>
      <DrawerBackground
        visible={visibleBackground}
        onClose={handleToggleBackground}
      />
      <DrawerLabels visible={visibleLabels} onClose={handleToggleLabels} />
      <DrawerAbout visible={visibleAbout} onClose={handleToggleAbout} />
    </Drawer>
  )
}

DrawerMenu.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
}
