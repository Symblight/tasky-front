import styled from "styled-components"

import { Block } from "../Block"

export const Wrapper = styled.div`
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  font-weight: 700;
  padding: 26px;
`

export const StyledBlock = styled(Block)`
  background-color: #eaeaea;
  height: 100%;
  justify-content: center;

  &:hover {
    background-color: #cecece;
  }
`
