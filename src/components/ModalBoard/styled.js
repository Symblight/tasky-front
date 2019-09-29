import styled from "styled-components"

import { Button } from "antd"

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.75);
`

export const WrapModal = styled.div`
  background-color: transparent;
  border: none;
  margin-top: 24px;
  padding: 24px;
  width: auto;
  margin: 48px 0 80px;
  z-index: 22;
`

export const Container = styled.div`
  display: flex;
`

export const Form = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  height: 96px;
  margin: 0;
  padding: 10px 10px 10px 16px;
  position: relative;
  width: 296px;
  border-radius: 4px;

  background-color: ${({ color }) => color};
`

export const StyledButton = styled(Button)`
  margin-top: 12px;
`

export const Settings = styled.div`
  width: 100%;
  margin-top: 12px;
`
