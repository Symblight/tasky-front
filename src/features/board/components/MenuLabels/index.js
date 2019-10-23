import React, { useRef, useState, useCallback } from "react"
import PropTypes from "prop-types"

import { Dropdown } from "@tasky/components"
import { useOnClickOutside } from "@features/common"

import { Labels } from "./Labels"
import { Create } from "./Create"
import { Edit } from "./Edit"

import { Wrapper } from "./styled"

export function MenuLabels({
  labelsByCard,
  button,
  onSelectColor,
  labels,
  onClose,
}) {
  const [currentIndex, setIndex] = useState(0)
  const ref = useRef()

  const handleVisible = (event) => {
    if (onClose) {
      event.preventDefault()
      onClose(event)
    }
  }

  const handleClick = (value) => {
    if (onSelectColor) {
      onSelectColor(value)
    }
  }

  useOnClickOutside(ref, (event) => handleVisible(event))

  const handleCreate = useCallback(() => setIndex(1), [])
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
        <Labels
          onCreate={handleCreate}
          onClick={handleClick}
          onEditToggle={handleEditToggle}
          labels={labels}
          labelsByCard={labelsByCard}
        />
        <Create />
        <Edit />
      </Dropdown>
    </Wrapper>
  )
}

MenuLabels.propTypes = {
  labels: PropTypes.object,
  onClose: PropTypes.func,
  onSelectColor: PropTypes.func,
  button: PropTypes.any,
  labelsByCard: PropTypes.array,
}
