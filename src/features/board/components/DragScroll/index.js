import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"

import _ from "lodash"

import { Wrapper } from "./styled"

export const DragScroll = ({ children, className, ...props }) => {
  const [dragging, setDragging] = useState(false)
  const [lastClientX, setLastClientX] = useState(0)
  const scrollRef = useRef(null)

  const isDND = (e) =>
    _.isNull(e.target.getAttribute("data-react-beautiful-dnd-draggable"))

  const handleMouseDown = (e) => {
    if (!dragging && !isDND(e)) {
      setDragging(true)
      setLastClientX(e.clientX)
    }
  }

  const handleMouseUp = (e) => {
    if (dragging) {
      setDragging(false)
      e.preventDefault()
    }
  }

  const handleMouseMove = (e) => {
    if (dragging && !isDND(e)) {
      let lastClient = lastClientX
      scrollRef.current.scrollLeft -= -lastClient + (lastClient = e.clientX)
      setLastClientX(e.clientX)
    }
  }

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <Wrapper
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={className}
      isDragging={dragging}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

DragScroll.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
