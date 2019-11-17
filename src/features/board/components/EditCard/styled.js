import styled from "styled-components"

import { Input } from "antd"

const { TextArea } = Input

const backgroundColor = ({ color }) => color

const isEditActive = ({ editable }) =>
  editable
    ? `
  position: fixed;
  width: 230px;
  z-index: 20;
  top: ${editable.top}px;
  left: ${editable.left}px;
`
    : `position: relative;`

export const FooterEdit = styled.div`
  margin-top: 8px;
`

export const Wrapper = styled.div`
  padding: 4px;

  ${isEditActive}
`

export const Content = styled.div`
  background-color: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
`

export const StyledTextArea = styled(TextArea)`
  resize: none;
  border: none;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  height: 90px;

  &:active {
    outline: 0px !important;
    box-shadow: none !important;
  }
  &:focus {
    outline: 0px !important;
    box-shadow: none !important;
  }
  &:hover {
    outline: 0px !important;
    box-shadow: none !important;
  }
`

export const ColorsWrap = styled.div`
  padding: 4px;
`

export const Color = styled.span`
  display: block;
  margin: 0 4px 4px 0;
  height: 16px;
  line-height: 16px;
  padding: 0 8px;
  max-width: 198px;
  min-width: 40px;
  width: auto;

  float: left;

  border-radius: 4px;
  color: #fff;
  display: block;

  background-color: ${backgroundColor};
`
