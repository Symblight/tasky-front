import React, { memo, useRef, useState, useCallback } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import { Icon } from "antd"

import {
  Title,
  Content,
  WrapClose,
  WrapButton,
  Wrapper,
  Header,
  WrapBack,
} from "./styled"
import { useAlign, useOnClickOutside } from "@hooks"

// const root = document.querySelector("#root")
// const popapRoot = document.createElement("div")
// root.append(popapRoot)

const PortalPopap = ({ popap, children }) => {
  return ReactDOM.createPortal(children, popap)
}

const Index = memo(
  ({ className, onBack, title, DropdownButton, children, index }) => {
    const [toggle, setToggle] = useState(false)

    const ref = useRef(null)
    const refButton = useRef(null)
    const { align, width } = useAlign({
      ref,
      aligns: ["top", "bottom", "left", "right"],
    })

    const handleToggle = useCallback(() => setToggle((value) => !value), [])
    const handleClose = useCallback(() => setToggle(false), [])
    useOnClickOutside(ref, () => handleClose())

    const handleOnBack = () => {
      if (onBack) {
        onBack()
      }
    }

    console.log(
      refButton.current && refButton.current.getBoundingClientRect().right,
    )

    const popapRoot = document.querySelector("#root")

    return (
      <>
        <WrapButton ref={refButton}>
          {DropdownButton && <DropdownButton onClick={handleToggle} />}
          <PortalPopap popap={popapRoot}>
            {toggle && (
              <Wrapper
                ref={ref}
                bottom={align.bottom}
                left={
                  refButton.current &&
                  refButton.current.getBoundingClientRect().left
                }
                top={
                  refButton.current &&
                  refButton.current.getBoundingClientRect().top
                }
                visible={toggle}
                className={className}
              >
                <Header>
                  {index !== 0 && (
                    <WrapBack onClick={handleOnBack}>
                      <Icon type="left" />
                    </WrapBack>
                  )}
                  <Title>{title}</Title>
                  <WrapClose onClick={handleToggle}>
                    <Icon type="close" />
                  </WrapClose>
                </Header>
                <Content>
                  {React.Children.toArray(children).length === 1
                    ? children
                    : children[index]}
                </Content>
              </Wrapper>
            )}
          </PortalPopap>
        </WrapButton>
      </>
    )
  },
)

Index.propTypes = {
  children: PropTypes.node,
  DropdownButton: PropTypes.any,
  index: PropTypes.number,
  title: PropTypes.string,
  className: PropTypes.string,
  onBack: PropTypes.func,
}

Index.defaultProps = {
  index: 0,
}

export const Dropdown = Index
