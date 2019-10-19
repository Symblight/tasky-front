import { useLayoutEffect, useEffect, useState, useRef } from "react"

import _ from "lodash"

const INITIAL_STATE = {
  align: "right",
  aligns: ["right"],
  positions: {
    right: false,
    top: false,
    left: false,
    bottom: false,
    updated: false,
  },
}

const setInitialPosition = (values) =>
  _.omit(
    INITIAL_STATE.positions,
    Object.keys(INITIAL_STATE.positions).filter((pos) => !values.includes(pos)),
  )

function useWindowSize() {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}

export const useAlign = ({
  ref,
  align = INITIAL_STATE.align,
  aligns = INITIAL_STATE.aligns,
  update,
}) => {
  const [width, height] = useWindowSize()
  const [position, setPosition] = useState(setInitialPosition(aligns))

  useEffect(() => {
    if (ref && !position.updated && width !== 0 && height !== 0) {
      calculatePosition()
    }
  }, [width, height])

  const isRight = (winWidth, x, widthRef) => {
    return winWidth - x - widthRef > 0
  }

  const isTop = (winHeight, y) => {
    return winHeight + y - winHeight > 0
  }

  const isLeft = (winWidth, widthRef) => {
    return winWidth - widthRef > 0
  }

  const isBottom = (winHeight, y, heightRef) => {
    return winHeight - y - heightRef > 0
  }

  const isConsistAlign = (value) => aligns.includes(value)

  const calculatePosition = () => {
    if (ref && ref.current) {
      const { x, y, top, right, bottom } = ref.current.getBoundingClientRect()
      const { clientWidth, clientHeight } = ref.current

      if (isConsistAlign("right")) {
        const xRef = x < 0 ? 0 : x
        const result = isRight(width, right + xRef, clientWidth)
        setPosition((prevState) => ({
          ...prevState,
          right: x > 0 ? result : false,
          updated: true,
        }))
      }
      if (isConsistAlign("left")) {
        const result = isLeft(width, clientWidth)
        setPosition((prevState) => ({
          ...prevState,
          left: result,
          updated: true,
        }))
      }
      if (isConsistAlign("top")) {
        const result = isTop(height, y)
        setPosition((prevState) => ({
          ...prevState,
          top: result,
          updated: true,
        }))
      }
      if (isConsistAlign("bottom")) {
        const result = isBottom(height, bottom + 50, clientHeight)
        setPosition((prevState) => ({ ...prevState, bottom: result }))
      }
    }
  }

  return { align: position, width, height }
}
