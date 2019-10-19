import React, { memo, useRef, useState, useCallback } from "react"
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

const Index = memo(
  ({ className, onBack, title, DropdownButton, children, index }) => {
    const [toggle, setToggle] = useState(false)

    const ref = useRef(null)
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

    return (
      <>
        <WrapButton>
          {DropdownButton && <DropdownButton onClick={handleToggle} />}
          <Wrapper
            ref={ref}
            bottom={align.bottom}
            right={align.right}
            height={ref.current && ref.current.clientHeight}
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

Index.defaultPropTypes = {
  index: 0,
}

export const Dropdown = Index
