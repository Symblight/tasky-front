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
`

export const StyledBlock = styled(Block)`
  background-color: #eaeaea;

  &:hover {
    background-color: #cecece;
  }
`
