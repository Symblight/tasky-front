import React, { useRef, useEffect, useState, useCallback } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import _ from "lodash"

import { Select, Icon, Input } from "antd"

import { Colors } from "./Colors"

import {
  Settings,
  StyledButton,
  Wrapper,
  WrapModal,
  Container,
  Form,
} from "./styled"

const modalRoot = document.querySelector("#modal-root")

const COLORS = [
  "#ff4d4f",
  "#40a9ff",
  "#73d13d",
  "#1abc9c",
  "#ffec3d",
  "#ff7a45",
  "#cd5a91",
  "#ecf0f1",
  "#34495e",
]

const { Option } = Select

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        event.target.getAttribute("role") === "option"
      ) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

const PortalModal = ({ children }) => {
  return ReactDOM.createPortal(children, modalRoot)
}

export const CreateBoard = ({ visible, onClose, onCreate }) => {
  const [targetColor, setColor] = useState(COLORS[2])
  const [value, setValue] = useState("")
  const [setting, setSetting] = useState("private")
  const ref = useRef()

  const handleVisible = () => {
    if (onClose) {
      onClose()
    }
  }

  useOnClickOutside(ref, () => handleVisible())

  const handleToggle = useCallback((color) => setColor(color), [targetColor])
  const handleChange = useCallback(({ target }) => setValue(target.value), [
    value,
  ])
  const handleSelect = useCallback((data) => setSetting(data), [setting])

  const handleCreate = () => {
    if (onCreate) {
      onCreate({
        title: value,
        background: targetColor,
        private: setting === "private",
      })
    }
  }

  if (!visible) return null

  return (
    <PortalModal>
      <Wrapper>
        <WrapModal ref={ref}>
          <Container>
            <Form color={targetColor}>
              <Input
                placeholder="Добавить заголовок доски"
                value={value}
                onChange={handleChange}
              />
              <Settings>
                <Select
                  value={setting}
                  style={{ width: "140px" }}
                  defaultActiveFirstOption
                  onSelect={handleSelect}
                >
                  <Option value="private">
                    <Icon type="lock" />
                    Приватная
                  </Option>
                  <Option value="global">
                    <Icon type="unlock" />
                    Глобальная
                  </Option>
                </Select>
              </Settings>
            </Form>
            <Colors
              data={COLORS}
              targetColor={targetColor}
              onClick={handleToggle}
            />
          </Container>
          <StyledButton onClick={handleCreate} disabled={!value}>
            Создать доску
          </StyledButton>
        </WrapModal>
      </Wrapper>
    </PortalModal>
  )
}

CreateBoard.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onCreate: PropTypes.func,
}
