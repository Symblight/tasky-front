import styled from "styled-components"

const backgroundColor = ({ color }) => color

const isHover = ({ active, shadow }) =>
  active
    ? `margin-left: 4px;
box-shadow: -8px 0 ${shadow};`
    : null

export const Wrapper = styled.li`
  position: relative;
  padding-right: 40px;
`

export const ColorWrap = styled.span`
  position: relative;
  display: block;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  margin: 0 0 4px;
  min-height: 35px;
  padding: 8px;

  color: #fff;
  transition: padding 85ms, margin 85ms, box-shadow 85ms;

  background-color: ${backgroundColor};

  ${isHover}
`

export const EditWrap = styled.span`
  position: absolute;
  border-radius: 3px;
  padding: 8px;
  top: 0;
  right: 0;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }

  i {
    height: 20px;
    font-size: 16px;
    line-height: 20px;
    width: 20px;
  }
`

export const Check = styled.span`
  position: absolute;
  right: 0;
  top: 0;

  i {
    padding: 12px;
    font-size: 16px;
  }
`
