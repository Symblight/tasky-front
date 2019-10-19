import React, { useRef, useState, useCallback } from "react"
import PropTypes from "prop-types"

import { Dropdown } from "@tasky/components"
import { useOnClickOutside } from "@features/common"

import { Labels } from "./Labels"
import { Create } from "./Create"
import { Edit } from "./Edit"

import { Wrapper } from "./styled"

export const MenuLabels = ({ button, visible, onClose }) => {
  const [currentIndex, setIndex] = useState(0)
  const ref = useRef()

  const handleVisible = (event) => {
    if (onClose) {
      event.preventDefault()
      onClose(event)
    }
  }

  useOnClickOutside(ref, (event) => handleVisible(event))

  const handleClick = useCallback(() => setIndex(1), [])
  const handleEditToggle = useCallback(() => setIndex(2), [])
  const handleBack = useCallback(() => setIndex(0), [])

  return (
    <Wrapper ref={ref}>
      <Dropdown
        title="Метки"
        index={currentIndex}
        DropdownButton={button}
        onBack={handleBack}
      >
        <Labels onClick={handleClick} onEditToggle={handleEditToggle} />
        <Create />
        <Edit />
      </Dropdown>
    </Wrapper>
  )
}

MenuLabels.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  button: PropTypes.any,
}
