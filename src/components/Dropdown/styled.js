import styled from "styled-components"

const isBottomPrecent = ({ bottom, height }) =>
  !bottom ? `-${height}px` : "0%"

const isVisible = ({ visible }) => (visible ? "1" : "0")
const isVisibleBlock = ({ visible }) => (visible ? "block" : "none")
const isVisibleRight = ({ visible }) => (!visible ? "-9999px" : "0%")

const TopPos = ({ top }) => (top ? `${top}px` : "0%")
const LeftPos = ({ left }) => (left ? `${left}px` : "0%")

export const Wrapper = styled.div`
  display: ${isVisibleBlock};
  background-color: #fff;
  border-radius: 3px;
  opacity: ${isVisible};
  width: 304px;
  z-index: 95;
  position: absolute;
  cursor: pointer;
  top: ${TopPos};
  left: ${LeftPos};
  margin: 0 0 4px 8px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
`

export const Header = styled.div`
  position: relative;
  box-sizing: border-box;
  color: #5e6c84;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;

  text-align: center;

  margin-bottom: 8px;
`

export const WrapButton = styled.div`
  position: relative;
`

export const WrapClose = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;

  i {
    padding: 12px;
  }
`

export const WrapBack = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;

  i {
    padding: 12px;
  }
`

export const Title = styled.span`
  display: block;
  margin: 0 12px;
  overflow: hidden;
  padding: 0 32px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
`

export const Content = styled.div`
  padding: 14px;
`
