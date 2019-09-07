import styled from "styled-components"

import { Block } from "../Block"

const isColor = ({ color }) => color || `#b7eb8f`

export const Wrapper = styled.div`
  height: 45px;
  color: #262626;
  font-weight: 700;
`
export const StyledBlock = styled(Block)`
  background-color: ${isColor};
`
