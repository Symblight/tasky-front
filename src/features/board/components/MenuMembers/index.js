import React, { useRef } from "react"
import PropTypes from "prop-types"

import { Dropdown } from "@tasky/components"
import { useOnClickOutside } from "@features/common"

import { Wrapper } from "./styled"

export function MenuMembers({ button, visible, onClose }) {
  const ref = useRef()

  const handleVisible = (event) => {
    if (onClose) {
      event.preventDefault()
      onClose(event)
    }
  }

  useOnClickOutside(ref, (event) => handleVisible(event))

  return (
    <Wrapper ref={ref}>
      <Dropdown title="Участники" index={0} DropdownButton={button}>
        Members
      </Dropdown>
    </Wrapper>
  )
}

MenuMembers.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  button: PropTypes.any,
}
