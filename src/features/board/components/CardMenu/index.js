import React, { useRef } from "react"
import PropTypes from "prop-types"

import { Icon } from "antd"

import { MenuLabels } from "../MenuLabels"
import { MenuMembers } from "../MenuMembers"

import { Wrapper, ContextItem } from "./styled"
import { useAlign } from "@hooks"

export function CardMenu({
  labelsByCard,
  labels,
  members,
  onSelectColor,
  onDelete,
}) {
  const ref = useRef(null)
  const { align } = useAlign({ ref, aligns: ["left", "right"] })

  const DropdownButtonMembers = ({ ...props }) => {
    return (
      <ContextItem {...props}>
        <Icon type="team" />
        <span>Участники</span>
      </ContextItem>
    )
  }

  const DropdownButtonLabels = ({ ...props }) => {
    return (
      <ContextItem {...props}>
        <Icon type="tag" />
        <span>Метки</span>
      </ContextItem>
    )
  }

  return (
    <Wrapper right={align.right} ref={ref}>
      <ContextItem onClick={onDelete}>
        <Icon type="delete" />
        <span>Удалить</span>
      </ContextItem>
      <MenuLabels
        labels={labels}
        button={DropdownButtonLabels}
        onSelectColor={onSelectColor}
        labelsByCard={labelsByCard}
      />
      <MenuMembers button={DropdownButtonMembers} members={members} />
    </Wrapper>
  )
}

CardMenu.propTypes = {
  onDelete: PropTypes.func,
  onSelectColor: PropTypes.func,
  labels: PropTypes.object,
  members: PropTypes.object,
  labelsByCard: PropTypes.array,
}
